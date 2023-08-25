const { getDefaultConfig } = require('expo/metro-config');

module.exports = (async () => {
  let defaultConfig = await getDefaultConfig(__dirname);
  defaultConfig.resolver.resolverMainFields.unshift('sbmodern');

  const { transformer, resolver } = defaultConfig;

  defaultConfig.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  };
  defaultConfig.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== 'svg'),
    sourceExts: [...resolver.sourceExts, 'svg'],
  };
  return defaultConfig;
})();
