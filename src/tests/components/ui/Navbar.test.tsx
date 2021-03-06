{
  "name": "kind-of",
  "description": "Get the native type of a value.",
  "version": "3.2.2",
  "homepage": "https://github.com/jonschlinkert/kind-of",
  "author": "Jon Schlinkert (https://github.com/jonschlinkert)",
  "contributors": [
    "David Fox-Powell (https://dtothefp.github.io/me)",
    "Jon Schlinkert (http://twitter.com/jonschlinkert)",
    "Ken Sheedlo (kensheedlo.com)",
    "laggingreflex (https://github.com/laggingreflex)",
    "Miguel Mota (https://miguelmota.com)",
    "Peter deHaan (http://about.me/peterdehaan)"
  ],
  "repository": "jonschlinkert/kind-of",
  "bugs": {
    "url": "https://github.com/jonschlinkert/kind-of/issues"
  },
  "license": "MIT",
  "files": [
    "index.js"
  ],
  "main": "index.js",
  "engines": {
    "node": ">=0.10.0"
  },
  "scripts": {
    "test": "mocha",
    "prepublish": "browserify -o browser.js -e index.js -s index --bare"
  },
  "dependencies": {
    "is-buffer": "^1.1.5"
  },
  "devDependencies": {
    "ansi-bold": "^0.1.1",
    "benchmarked": "^1.0.0",
    "browserify": "^14.3.0",
    "glob": "^7.1.1",
    "gulp-format-md": "^0.1.12",
    "mocha": "^3.3.0",
    "type-of": "^2.0.1",
    "typeof": "^1.0.0"
  },
  "keywords": [
    "arguments",
    "array",
    "boolean",
    "check",
    "date",
    "function",
    "is",
    "is-type",
    "is-type-of",
    "kind",
    "kind-of",
    "number",
    "object",
    "of",
   