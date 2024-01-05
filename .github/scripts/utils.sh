create_tag() {
  TAG_NAME=$1
  {
    git tag -a $TAG_NAME -m "New release for $TAG_NAME" &&
      git push origin $TAG_NAME
  } || {
    git tag -d $TAG_NAME
  }
}

get_stage_prompt() {
  title="Let select options:"
  subTitle="Your select:"
  options=("Build" "Bump Version")

  echo "$title"
  PS3="$subTitle "
  STAGE=""
  select opt in "${options[@]}" "Thoat"; do
    case "$REPLY" in
    1) echo "Build" && OPTION="build" && break ;;
    4) echo "Nâng version" && get_bump_version_option $1 && break ;;
    $((${#options[@]} + 1)))
      echo "Goodbye!"
      exit 0
      ;;
    *)
      echo "Sai lua chon. chon lai."
      continue
      ;;
    esac
  done
}

increment_build_number() {
  TAG_LIST=$(git tag | wc -l)
  if [ $TAG_LIST -eq 0 ]; then
    exit "Please create tag in your repository"
  fi
  # STAGE=$2
  # if [[ ! "$STAGE" ]]; then
  #   exit "Missing STAGE environment"
  # fi
  # PREFIX=''
  # if [[ "$1" ]]; then
  #   PREFIX="$1/"
  # fi
  NEW_TAG=''

  CURRENT_TAG=$(git tag --sort=-version:refname -l "*" | head -n 1)

  # TAG_FULL=$(split_version $TAG full)
  VERSION=$(echo "0.0.1+1" | grep -oE '\d+\.\d+\.\d+')
  BUILD_NUMBER=$(echo "$CURRENT_TAG" | grep -oE '\+[0-9]+' | cut -d'+' -f2)
  BUILD_NUMBER_INCREMENT=$((BUILD_NUMBER + 1))

  NEW_TAG="${VERSION}+${BUILD_NUMBER_INCREMENT}"

  # if [[ "$STAGE" == "production" ]]; then
  #   PRO_TAG_FULL=$(split_version $PRO_TAG full)
  #   PRO_BUILD_NUMBER=$(split_version $PRO_TAG build)
  #   PRO_BUILD_NUMBER_INCREMENT=$((PRO_BUILD_NUMBER + 1))
  #   NEW_TAG="${PREFIX}production/v${PRO_TAG_FULL}+${PRO_BUILD_NUMBER_INCREMENT}"
  # else
  #   STAGE_TAG=$(git tag --sort=-version:refname -l "${PREFIX}${STAGE}/*" | head -n 1)
  #   STAGE_TAG_FULL=$(split_version $PRO_TAG full)
  #   STAGE_TAG_LATEST=$(git tag --sort=-version:refname -l "${PREFIX}${STAGE}/v${STAGE_TAG_FULL}+*" | head -n 1)
  #   STAGE_BUILD_NUMBER=1
  #   if [[ $STAGE_TAG_LATEST ]]; then
  #     STAGE_BUILD_NUMBER=$(split_version $STAGE_TAG_LATEST increment_build)
  #   fi
  #   NEW_TAG="${PREFIX}${STAGE}/v${STAGE_TAG_FULL}+${STAGE_BUILD_NUMBER}"
  # fi
  create_tag $NEW_TAG
}