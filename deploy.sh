source .github/scripts/utils.sh

get_stage_prompt

if [ "$OPTION" = "build" ]; then 
  increment_build_number
fi