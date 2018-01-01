const remark = require('remark');
const lint = require('remark-preset-lint-recommended');
const html = require('remark-html');
const highlight = require('remark-highlight.js');
const slug = require('remark-slug');
const github = require('remark-github');
const headings = require('remark-autolink-headings');
const squeezeParagraphs = require('remark-squeeze-paragraphs');
const remarkPing = require('remark-ping');
const report = require('vfile-reporter');

function processMarkdown(contents) {
  return new Promise((resolve, reject) => {
    remark()
      .use(lint)
      .use(slug)
      // todo: figure out why this isn't creating any anchors
      // .use(headings, {
      //   behaviour: 'wrap',
      // })
      .use(highlight)
      .use(squeezeParagraphs)
      .use(github, {
        repository: 'rigor789/nativescript-vue'
      })
      .use(remarkPing, {
        pingUsername: () => true,
        userURL: (user) => `https://github.com/${user}`
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