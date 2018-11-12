// @flow

type BabelConfigType = {
  presets: Array<string>,
  plugins: Array<string>
};

module.exports = (api: *): BabelConfigType => {
  api.cache(true);
  const presets = ['@babel/preset-env', '@babel/preset-react', 'airbnb'];
  const plugins = ['@babel/plugin-proposal-class-properties', '@babel/plugin-transform-flow-strip-types'];

  return {
    presets,
    plugins,
  };
};
