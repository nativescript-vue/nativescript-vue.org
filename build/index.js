const path = require('path');

const Metalsmith = require('metalsmith');

// plugins
const multiLanguage = require('metalsmith-multi-language');
const collections = require('metalsmith-collections');
const permalinks = require('metalsmith-permalinks');
const linkcheck = require('metalsmith-linkcheck');
const dates = require('metalsmith-jekyll-dates');
const assets = require('metalsmith-assets');
const watch = require('metalsmith-watch');
const when = require('metalsmith-if');
const moment = require('moment');

// custom plugins
const link_index = require('./plugins/link_index');
const changeExt = require('./plugins/change-ext');
const markdown = require('./plugins/markdown');
const layouts = require('./plugins/layouts');
const toc = require('./plugins/toc');

const isDev = process.argv[2] === '--dev';
const cwd = path.resolve(__dirname, '..');

Metalsmith(cwd)
// set globally available metadata
  .metadata({
    sitename: 'NativeScript-Vue',
    siteurl: 'https://nativescript-vue.org/',
    description: 'Build truly native apps using Vue.js',
    moment
  })
  // look for files in the content directory
  .source('./content')
  // output files to the dist directory
  .destination('./dist')
  // clean the dist directory before building
  .clean(true)
  // ignore directories and files starting with an _
  .ignore([
    '_**/*',
    '**/_*',
  ])
  // watch the content dir when in dev mode (--dev)
  .use(when(isDev, watch({
    paths: {
      "${source}/**/*.{md, ejs}": true,
      "layouts/**/*": '**/*.md',
    }
  })))
  // group certain files into collections
  .use(collections({
    blog: {
      pattern: 'blog/*.md',
      sortBy: 'date',
      reverse: true,
    },
    docs: {
      pattern: 'docs/**/*.md',
      refer: false
    }
  }))
  // use jekyll style dates in the file names
  .use(dates())
  // use multiple languages
  .use(multiLanguage({
    default: 'en',
    locales: ['en', 'hu']
  }))
  // render markdown using our own plugin around marked
  .use(markdown())
  // add table of contents using our own plugin
  .use(toc())
  // generate the final files to have pretty urls
  .use(permalinks({
    relative: false,

    linksets: [
      {
        match: {collection: 'blog'},
        pattern: 'blog/:date/:slug',
      },
      {
        match: {collection: 'docs'},
        pattern: ':locale/docs/:title'
      }
    ]
  }))
  // render all files in side a layout if specified
  .use(layouts({
    default: 'post.ejs',
    pattern: 'blog/**/*',
  }))
  .use(layouts({
    default: 'default.ejs',
    pattern: ['**/*', '!blog/**/*'],
  }))
  // re-run the render for newly inserted template features
  .use(layouts({
    inPlace: true,
    pattern: '**/*'
  }))
  // rename remaining .ejs files to html
  .use(changeExt({
    pattern: `**/*.ejs`,
    ext: '.html'
  }))
  // include our static assets
  .use(assets({
    source: './static'
  }))
  // finally check if we have broken links
  .use(linkcheck({
    failMissing: false
  }))
  .use(link_index())
  // build the site
  .build((err) => {
    if (err) {
      throw err;
    }
  });
