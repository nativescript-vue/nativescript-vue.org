const remark = require('remark');
const lint = require('remark-preset-lint-recommended');
const html = require('remark-html');
const highlight = require('remark-highlight.js');
const slug = require('remark-slug');
const github = require('remark-github');
const headings = require('@rigor789/remark-autolink-headings');
const squeezeParagraphs = require('remark-squeeze-paragraphs');
const remarkPing = require('remark-ping');
const shortcodes = require('remark-shortcodes');
const report = require('vfile-reporter');

function processMarkdown(contents) {
  return new Promise((resolve, reject) => {
    remark()
      .use(lint)
      .use(slug)
      .use(headings, {
        content: {
          type: 'element',
          tagName: 'span',
          properties: {
            className: ['opacity-25', 'hover:opacity-100', 'inline-block', '-ml-6', 'mr-2', 'w-4', 'h-4', 'icon-link']
          }
        }
      })
      .use(require('./remark/algolia-classes'))
      .use(highlight)
      .use(squeezeParagraphs)
      .use(github, {
        repository: 'nativescript-vue/nativescript-vue'
      })
      .use(remarkPing, {
        pingUsername: () => true,
        userURL: (user) => `https://github.com/${user}`
      })
      .use(shortcodes, {
        startBlock: '[>',
        endBlock: '<]'
      })
      .use(require('./remark/shortcodes'), {
        screenshots(attrs) {
          if (attrs.soon) {
            return `<div class="bg-blue-dark p-4 sm:p-8 text-blue-lightest">
                Screenshots for ${attrs.for} coming soon...
            </div>`
          }

          const platforms = {
            android: 'android23',
            ios: 'ios-simulator103iPhone6'
          }
          const url = (platform) => `https://raw.githubusercontent.com/nativescript-vue/nativescript-vue-ui-tests/master/screenshots/${platforms[platform]}/${attrs.for}.png`;

          return `<div class="flex flex-wrap bg-blue-dark p-4 sm:p-8">
              <div class="w-full sm:w-1/2">
                    <img src="${url('android')}"/>
              </div>
              <div class="w-full sm:w-1/2 sm:pl-8">
                  <img src="${url('ios')}"/>
              </div>
          </div>`;
        }
      })
      .use(html)
      .process(contents, (err, file) => {
        if (err) reject(err);
        // console.log(file.toString());
        resolve(file);
      })
  })
}

module.exports = function permalinks(options = {}) {
  const opts = Object.assign({}, {
    pattern: '**/*.md',
    rename: true
  }, options);

  return async (files, metalsmith, done) => {
    for (file of Object.keys(files)) {
      const data = files[file];

      if (!metalsmith.matches(file, opts.pattern)) {
        continue;
      }

      try {
        const res = await processMarkdown(data.contents);

        if (res.messages.length > 0) {
          // console.log(`${file}:\n${report(res)}`);
        }
        data.contents = res.toString();
      } catch (err) {
        console.log(`${file}: ${report(err)}`);

        done(err);
      }
    }

    done();
  }
};