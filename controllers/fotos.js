const Fotos = require("../models/ftsEmbedded");

module.exports = {
  insert: async (req, res) => {
    //Ambil data request dari front end
    const data = new Fotos({
      id: req.body.id,
      nama: req.body.nama,
      tempat: req.body.tempat,
      waktu: req.body.waktu,
    });
    try {
      const dataToSave = await data.save();
      res.status(200).json(dataToSave);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  insertDetail: async (req, res) => {
    const id = req.params.id;

    try {
      await Fotos.updateOne(
        { id: id },
        {
          $push: {
            detail: {
              detail: req.body.detail,
              alat: req.body.alat,
            },
          },
        }
      );
      res.send("Detail telah di simpan");
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  },

  getFotos: async (req, res) => {
    try {
      const result = await Fotos.find();
      res.status(200).json(result);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
  getFotosById: async (req, res) => {
    const id = req.params.id;
    try {
      const result = await Fotos.find().where("id").equals(id);
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  getDetailById: async (req, res) => {
    const id = req.params.id;
    try {
      const result = await Fotos.findOne({ id: id }, { _id: 0, detail: 1 });

      res.json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  update: async (req, res) => {
    const filter = { id: req.params.id };
    const updatedData = {
      nama: req.body.nama,
      tempat: req.body.tempat,
      waktu: req.body.waktu,
    };
    try {
      let result = await Fotos.updateOne(filter, updatedData);
      res.send("Data telah terupdate");
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  },

  delete: async (req, res) => {
    const filter = { id: req.params.id };
    try {
      await Fotos.deleteOne(filter);
      res.send("Data telah terhapus");
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  },
};
