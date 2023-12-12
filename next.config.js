module.exports = {
  reactStrictMode: true,
  // Custom configuration for the app
  customizations: {
    codespaces: {
      extensions: ["dbaeumer.vscode-eslint", "esbenp.prettier-vscode"]
    }
  },
  postCreateCommand: "",
  portsAttributes: {
    "3000": {
      label: "Web app",
      onAutoForward: "openBrowser"
    },
    "5992": {
      onAutoForward: "ignore"
    }
  }
};
