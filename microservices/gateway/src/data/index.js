const characters = require("./characters.json");

module.exports = {
  list: async () => {
    return characters;
  },
  create: async () => {
    throw Error("Hubo un error en la BD al crear el personaje");
  },
};
