const path = require('path');
const fs = require('fs');
const {parseComponent} = require('vue-template-compiler');

const samplesPath = path.resolve(__dirname, '../samples');
const files = fs.readdirSync(samplesPath);

const samples = files.filter(file => file.endsWith('.vue')).map((name) => {
  const contents = fs.readFileSync(path.resolve(samplesPath, name));
  const sfc = parseComponent(contents.toString());
  return {
    name: name.replace('.vue', ''),
    files: [
      {key: 'app.js', contents: sfc.script.content},
      {key: 'app.css', contents: sfc.styles[0].content},
    ]
  }
});

const out = path.resolve(__dirname, '../static/samples.json');
fs.writeFileSync(out, JSON.stringify(samples, null, 2));
