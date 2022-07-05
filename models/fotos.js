const mongoose = require("mongoose");

const ftsSchema = new mongoose.Schema({
  id: {
    require: true,
    type: String,
  },
  nama: String,
  tempat: String,
  waktu: String,
});

module.exports = mongoose.model("Fotos", ftsSchema, "fotos");
