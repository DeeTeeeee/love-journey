# Don't use $APP_DIR variable
git checkout yarn.lock
FOLDER_CACHE_NAME=$(sha1sum yarn.lock | awk '{print $1}')
echo $FOLDER_CACHE_NAME
FOLDER_CACHE_PATH=~/actions-runner/cache/love-journey/${FOLDER_CACHE_NAME}
pwd
if [ -d $FOLDER_CACHE_PATH ]; then
  echo ===== INFO: Caches exist. Skip cache backup.
else
  rm -rf $FOLDER_CACHE_PATH
  mkdir -p $FOLDER_CACHE_PATH

  #cache node_modules

  echo ===== INFO: Cache node_modules
  mkdir -p $FOLDER_CACHE_PATH
  rsync -a node_modules $FOLDER_CACHE_PATH

  #cache pods
  echo ===== INFO: Cache ios/Pods
  mkdir -p $FOLDER_CACHE_PATH/ios
  rsync -a ios/Pods $FOLDER_CACHE_PATH/ios

  #cache podlock
  echo ===== INFO: Cache ios/Podfile.lock
  rsync -a ios/Podfile.lock $FOLDER_CACHE_PATH/ios/Podfile.lock

  #cache vendor

  echo ===== INFO: Cache gem vendor - bundle install --path vendor/bundle
  rsync -a vendor $FOLDER_CACHE_PATH

fi
