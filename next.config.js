const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
module.exports = withCSS(
  withSass({
    webpack: (cfg) => {
      cfg.module.rules.push(
        {
          test: /\.md$/,
          loader: 'frontmatter-markdown-loader',
          options: { mode: ['react-component'] },
        },
        {
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 100000,
              //   name: '[name].[ext]',
            },
          },
        }
      );
      return cfg;
    },
  })
);

// const withSass = require('@zeit/next-sass');
// module.exports = withCSS(
//   withSass({
//     /* config options here */
//   })
// );
