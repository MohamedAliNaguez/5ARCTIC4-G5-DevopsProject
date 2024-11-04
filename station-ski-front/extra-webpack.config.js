const purgecss = require("@fullhuman/postcss-purgecss")({
  // Specify the paths to all of the template files in your project
  //content: ["./src/**/*.{html,ts,css,scss}", "./src/*.{html,ts,css,scss}"],
  // Include any special characters you're using in this regular expression
  //defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
});
const webpack = require("webpack");

module.exports = (config, options) => {
  console.log(`Using '${config.mode}' mode`);

  // Add Tailwind and PurgeCSS configuration
  config.module.rules.push({
    test: /tailwind\.scss$/,
    use: [
      {
        loader: "postcss-loader",
        options: {
          postcssOptions: {
            plugins: [
              require("tailwindcss")("./tailwind.config.js"),
              require("autoprefixer"),
              ...(config.mode === "production" ? [purgecss] : []),
            ],
          },
        },
      },
    ],
  });

  // Add DefinePlugin for environment variables
  config.plugins.push(
    new webpack.DefinePlugin({
      "process.env.API_URL": JSON.stringify(
        process.env.API_URL || "http://localhost:8089"
      ),
    })
  );

  return config;
};
