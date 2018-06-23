function plugin(opts) {

  return function (files, metalsmith, done) {
    const meta = metalsmith.metadata();
    // set global information about the available versions
    meta.defaultVersions = opts.defaultVersion;
    meta.versions = opts.versions;
    meta.currentVersion = opts.currentVersion;

    done();
  }
}

module.exports = plugin;