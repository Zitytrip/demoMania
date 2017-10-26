


echo "browserify is compiling x.js --> bundle.js"
browserify public/scripts/x.js -s longo > public/dist/bundle.js

echo "browserify is compiling x.js --> bundle_minified.js"
browserify public/scripts/x.js -s longo | uglifyjs > public/dist/bundle_minified.js

echo "browserify is compiling x.js --> bundle_compressed.js"
browserify public/scripts/x.js -s longo | uglifyjs --compress > public/dist/bundle_compressed.js






echo "now check out the size differences:"
ls ./public/dist -alfgh