const path = require('path');
const fs = require('fs');

const Metalsmith = require('metalsmith');
const multimatch = require('multimatch');

// plugins
const collections = require('metalsmith-collections');
const linkcheck = require('metalsmith-linkcheck');
const dates = require('metalsmith-jekyll-dates');
const sitemap = require('metalsmith-sitemap');
const static = require('metalsmith-static');
const gzip = require('metalsmith-gzip');
const minify = require('metalsmith-html-minifier');
const watch = require('metalsmith-watch');
const when = require('metalsmith-if');
const moment = require('moment');

// custom plugins
const link_index = require('./plugins/link_index');
const categories = require('./plugins/categories');
const permalinks = require('./plugins/permalinks');
const changeExt = require('./plugins/change-ext');
const markdown = require('./plugins/remark');
const locales = require('./plugins/locales');
const layouts = require('./plugins/layouts');
const order = require('./plugins/order');
const toc = require('./plugins/toc');

const isDev = process.argv[2] === '--dev';
const cwd = path.resolve(__dirname, '..');

Metalsmith(cwd)
// set globally available metadata
  .metadata({
    sitename: 'NativeScript-Vue',
    siteurl: 'https://nativescript-vue.org/',
    description: 'Build truly native apps using Vue.js',
    moment,
    localeMap: {
      'en': 'English',
      'ko': '한국어',
      'pt-BR': 'Português do Brasil',
      'ru': 'Русский'
    },
    home(current) {
      const locale = current.locale || this.defaultLocale;
      return `/${locale === this.defaultLocale ? '' : locale}`
    },
    lang(current, locale, slug) {
      locale = locale || current.locale || this.defaultLocale;
      slug = slug || current.slug;
      const found = this.links.find(l => l.endsWith(`${slug}/index.html`) && l.includes(`/${locale}/`));

      if (found) {
        return found;
      }
      return `/${locale === this.defaultLocale ? '' : locale}`;
    },
    sortCategories(a, b) {
      const order = [
        'introduction',
        'getting-started',
        'routing',
        'utilities',
        'elements:layouts',
        'elements:action-bar',
        'elements:components',
        'elements:dialogs'
      ];

      if (a.fileName) {
        return a.fileName.localeCompare(b.fileName);
      } else if (a.level) {
        return order.indexOf(a.title.toLowerCase()) - order.indexOf(b.title.toLowerCase())
      }
    }
  })
  .use((files, metalsmith, done) => {
    metalsmith.matches = (name, pattern) => multimatch(name, pattern).length > 0;
    metalsmith.rename = (file, to) => {
      const data = files[file];
      delete files[file];
      files[to] = data;
    };
    done();
  })
  // look for files in the content directory
  .source('./content')
  // output files to the dist directory
  .destination('./dist')
  // clean the dist directory before building
  .clean(true)
  // ignore directories and files starting with an _
  .ignore([
    '_**',
    '.**',
    '**.json',
  ])
  // watch the content dir when in dev mode (--dev)
  .use(when(isDev, watch({
    paths: {
      "${source}/**/*.{md, ejs}": true,
      "layouts/**/*": '**/*.md',
    }
  })))
  .use((files, metalsmith, done) => {
    Object.keys(files).forEach(file => {
      files[file].fileName = path.basename(file);
      files[file].filePath = file;
    });

    done();
  })
  .use(locales({
    defaultLocale: 'en',
    locales: ['en', 'ko', 'pt-BR', 'ru']
  }))
  .use(order())
  .use(categories())
  // group certain files into collections
  .use(collections({
    blog: {
      pattern: 'blog/*.md',
      sortBy: 'order',
      reverse: true,
      refer: false
    },
    docs: {
      pattern: 'docs/**/*.md',
      sortBy: 'order',
      refer: false
    }
  }))
  // use jekyll style dates in the file names
  .use(dates())
  // use multiple languages
  // .use(multiLanguage({
  //   default: 'en',
  //   locales: ['en']
  // }))
  // render markdown using our own plugin around marked
  .use(markdown())
  // add table of contents using our own plugin
  .use(toc())
  // generate the final files to have pretty urls
  .use(permalinks({
    sets: [
      {
        pattern: ['index.*', 'index_*.*'],
        format: ':dest'
      },
      {
        pattern: 'blog/**/*',
        format: 'blog/:slug/index.html',
      },
      {
        pattern: 'docs/**/*',
        format: ':locale/docs/:slug/index.html'
      }
    ]
  }))
  .use(link_index())
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
  .use(static({
    src: './static',
    dest: '.'
  }))
  // finally check if we have broken links
  .use(linkcheck({
    failMissing: false
  }))
  .use(when(!isDev, minify()))
  .use(when(!isDev, gzip()))
  .use((files, metalsmith, done) => {
    // remove /index.html from file contents
    // todo: check if we can avoid doing this because it is error-prone
    Object.keys(files).forEach(file => {
      files[file].contents = files[file].contents.toString().replace(/\/index\.html/g, '');
    });

    done();
  })
  .use(sitemap({
    hostname: 'https://nativescript-vue.org',
    omitIndex: true,
  }))
  // build the site
  .build((err) => {
    if (err) {
      throw err;
    }
    const fpath = path.join(cwd, 'content/links_failed.json')
    if (fs.existsSync(fpath)) {
      console.log(fs.readFileSync(fpath).toString())
    }
  });
