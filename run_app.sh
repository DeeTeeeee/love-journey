node --version
rm -rf node_modules yarn.lock
cd ios
rm -rf Pods build Podfile.lock
cd ..
yarn install
cd ios
bundle install --path vendor/bundle
bundle exec pod install --repo-update