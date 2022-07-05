const mongoose = require("mongoose");

const ftsEmbeddedSchema = new mongoose.Schema({
  id: {
    required: true,
    type: String,
  },
  nama: {
    required: true,
    type: String,
  },
  tempat: {
    required: true,
    type: String,
  },
  waktu: {
    required: true,
    type: String,
  },

  detail: [
    {
      detail: String,
      alat: String,
    },
  ],
});

module.exports = mongoose.model("Fotos", ftsEmbeddedSchema, "fotos");
