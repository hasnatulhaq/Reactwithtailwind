module.exports = {
  reactStrictMode: true,
  webpack(config) {
   // / Adds the svgr/webpack plugin to use SVG's as components 
    config.module.rules.push(
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        include: [Path.join(__dirname, "src/assets")],
        loader: "file-loader?name=assets/[name].[ext]"
      },
     
    );

    return config;
  }}