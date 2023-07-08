const { readFileSync } = require("fs");

const getModuleNames = () => {
  const manifest = readFileSync("./submodules/modules/modules.json", "utf-8");
  const moduleNames = Object.keys(JSON.parse(manifest));
  return moduleNames;
};

module.exports = {
  getModuleNames,
};
