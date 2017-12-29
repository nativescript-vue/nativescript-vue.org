const marked = require('marked');

// allow injecting partials
// from: > partial:partialname
// to: {{> partialname }}
function handlebarPartials(renderer) {
  ((b) => {
    renderer.blockquote = (quote) => {
      const match = quote.match(/<p>partial:(.+)<\/p>/);
      if (match) {
        return `{{> ${match[1]} }}`
      } else {
        return b(quote)
      }
    }
  })(renderer.blockquote);
}

function plugin(opts) {
  const renderer = new marked.Renderer();

  renderer.heading = function(text, level, raw) {
    let parsed = parseAnchor(raw);
    let id = parsed.id;

    return (
      `<h${level} class="header">` +
      `<a class="anchor" href="#${id}" id="${id}"></a>` +
      `<a class="icon-link" href="#${id}">${text}</a>` +
      `</h${level}>\n`
    );
  };

  handlebarPartials(renderer);

  marked.setOptions(Object.assign({renderer}, opts));

  return function (files, metalsmith, done) {

    Object.keys(files).forEach((file) => {
      if (!file.endsWith('.md')) {
        return
      }

      const data = files[file];
      const new_name = file.replace('.md', '.html');

      if (data.extends) {
        // console.log('should extend though...')
      }

      data.contents = new Buffer(marked(data.contents.toString()));
      delete files[file];
      files[new_name] = data;
    });

    done();
  }
}

function parseAnchor(string) {
  var stripped = string.replace(/\[(.+)\]\(.+\)/gi, '$1').replace(/(<([^>]+)>)/ig, '');
  var clean = stripped.replace(/`/g, '');

  return {
    title: clean,
    id: clean.replace(/[^\w]+/g, '-').toLowerCase()
  };
}

module.exports = plugin;