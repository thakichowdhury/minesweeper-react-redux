module.exports = (api) => {
  api.cache(true);
  const presets = ['@babel/preset-env', '@babel/preset-react', 'airbnb'];
  const plugins = ['@babel/plugin-proposal-class-properties', '@babel/plugin-transform-flow-strip-types'];

  return {
    presets,
    plugins,
  };
};
