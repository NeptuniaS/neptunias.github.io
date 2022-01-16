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
          dirname: "_en",
          title: "Post",
          path: "/en/",
          itemPermalink: "/en/:year/:month/:day/:slug"
        }
      ],
      sitemap: {
        hostname: "https://billyyyyy3320.com/"
      },
      // comment: {
      //   service: "vssue",
      //   autoCreateIssue: true,
      //   prefix: "[Post]",
      //   owner: "newsbielt703",
      //   repo: "billy",
      //   clientId: "4119e8c1b0093fc5d034",
      //   clientSecret: "1ac1176791689b1ca31037c39489fc7b0667015d"
      // },
      // newsletter: {
      //   endpoint:
      //     "https://gmail.us5.list-manage.com/subscribe/post?u=942c0d587f8ea28269e80d6cd&amp;id=d77d789d53"
      // },
      // feed: {
      //   canonical_base: "https://billyyyyy3320.com/",
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