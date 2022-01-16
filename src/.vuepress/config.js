const path = require("path");
module.exports = (options, context, api) => {
  return {
    title: "NeptuniaS",
    description: "Web development, Full Stack, JavaScript",
    theme: "@vuepress/blog",
    themeConfig: {
      directories: [
        {
          id: "en",
          dirname: "_blog",
          title: "Post",
          path: "/blog/",
          itemPermalink: "/blog/:year/:month/:day/:slug"
        }
      ],
      sitemap: {
        hostname: "https://neptunias.com/"
      },
      // comment: {
      //   service: "vssue",
      //   autoCreateIssue: true,
      //   prefix: "",
      //   owner: "",
      //   repo: "",
      //   clientId: "",
      //   clientSecret: ""
      // },
      // newsletter: {
      //   endpoint:
      //     ""
      // },
      // feed: {
      //   canonical_base: "",
      //   posts_directories: ["/_en/"]
      // },
      nav: [
        {
          text: "Blog",
          link: "/blog/"
        },
        {
          text: "Github",
          link: "https://github.com/NeptuniaS"
        }
      ],
      footer: {
        contact: [
          {
            type: "github",
            link: "https://github.com/NeptuniaS"
          },
          {
            type: "mail",
            link: "mailto:nep@neptunias.com"
          }
        ],
      },
      smoothScroll: true
    },
  };
};