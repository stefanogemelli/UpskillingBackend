const store = require("../database");
module.exports = (req, res, next) => {
  const { model } = req.params;
  if (store[model]) return next();
  throw Error("no existe el modelo");
};
