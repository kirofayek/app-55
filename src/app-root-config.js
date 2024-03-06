import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@vue-mf/navbar",
  app: () => System.import("@vue-mf/navbar"),
  activeWhen: "/",
  customProps: {
    githubLink: "https://github.com/kirofayek/app-55.git",
  },
});

registerApplication({
  name: "@vue-mf/app-2",
  app: () => System.import("@vue-mf/app-2"),
  activeWhen: "/view-app2",
});

registerApplication({
  name: "@vue-mf/rate-dogs",
  app: () => System.import("@vue-mf/rate-dogs"),
  activeWhen: "/rate-doggos",
});

start();
