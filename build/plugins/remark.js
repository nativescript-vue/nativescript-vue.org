const remark = require('remark');
const lint = require('remark-preset-lint-recommended');
const html = require('remark-html');
const report = require('vfile-reporter');

function processMarkdown(contents) {
  return new Promise((resolve, reject) => {
    remark()
      .use(lint)
      .use(html)
      .process(contents, (err, file) => {
        if (err) reject(err);

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