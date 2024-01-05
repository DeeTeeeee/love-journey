git checkout yarn.lock
FOLDER_CACHE_NAME=$(sha1sum yarn.lock | awk '{print $1}')
FOLDER_CACHE_PATH=~/actions-runner/_workdir/cache/liberty-carz-merchant/${FOLDER_CACHE_NAME}
pwd
if [ -d $FOLDER_CACHE_PATH ]; then
  echo ===== INFO: Caches exist. Skip clean build.
  exit 0
else
  echo "===== INFO: Cache doesn't exist"
  exit 1
fi
