import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  { 
    text: "Game-Dev",
    icon: "gamepad",
    prefix: "/game-dev/",
    children: [
      { text: "Games Gallery", icon: "images", link: "001-games-gallery"},
    ]
  },
  { 
    text: "GameEngine-Dev",
    icon: "unity",
    prefix: "/game-engine-dev/",
    children: [
      { 
        text: "Computer Graphics",
        icon: "triangle",
        prefix: "computer-graphics/",
        children: [ { text: "Basic Theories", link: "basic-theories/intro"} ]
      },
    ]
  },
  { text: "About", icon: "md-information-circle", link: "/intro"},
  // { text: "Demo", icon: "discover", link: "/demo/" },
  // {
  //   text: "Posts",
  //   icon: "edit",
  //   prefix: "/posts/",
  //   children: [
  //     {
  //       text: "Apple",
  //       icon: "edit",
  //       prefix: "apple/",
  //       children: [
  //         { text: "Apple1", icon: "edit", link: "1" },
  //         { text: "Apple2", icon: "edit", link: "2" },
  //         "3",
  //         "4",
  //       ],
  //     },
  //     {
  //       text: "Banana",
  //       icon: "edit",
  //       prefix: "banana/",
  //       children: [
  //         {
  //           text: "Banana 1",
  //           icon: "edit",
  //           link: "1",
  //         },
  //         {
  //           text: "Banana 2",
  //           icon: "edit",
  //           link: "2",
  //         },
  //         "3",
  //         "4",
  //       ],
  //     },
  //     { text: "Cherry", icon: "edit", link: "cherry" },
  //     { text: "Dragon Fruit", icon: "edit", link: "dragonfruit" },
  //     "tomato",
  //     "strawberry",
  //   ],
  // },
  // {
  //   text: "V2 Docs",
  //   icon: "note",
  //   link: "https://vuepress-theme-hope.github.io/v2/",
  // },
]);
