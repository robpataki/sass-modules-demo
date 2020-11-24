module.exports = (() => {
  // Main paths
  const SOURCE_PATH = './src';
  const DIST_PATH = './dist';

  // Route config
  const PATHS = {
    src: {
      root: SOURCE_PATH,
      scss: `${SOURCE_PATH}/scss`,
    },

    dist: {
      root: DIST_PATH,
      stylesheets: `${DIST_PATH}`,
    },
  };

  // Return app configuration
  return {
    PATHS,
  };
})();
