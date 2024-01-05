create_tag() {
  TAG_NAME=$1
  {
    git tag -a $TAG_NAME -m "New release for $TAG_NAME" &&
      git push origin $TAG_NAME
  } || {
    git tag -d $TAG_NAME
  }
}