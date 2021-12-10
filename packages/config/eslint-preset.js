module.exports = {
  extends: ["next", "prettier"],
  settings: {
    next: {
      rootDir: [
        "apps/docs/",
        "apps/web/",
        "packages/config/",
        "packages/tsconfig/",
      ],
    },
  },
};
