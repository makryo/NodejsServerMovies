const db = require("../models");
const controlador = db.indexModel;
// Create and Save a new Tutorial
exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({ message: "El contenido no esta vacio" });
        return;
      }
      // Create a Tutorial
      const newController = new  controlador({

            Nombre: req.body.Nombre,
            Apellido: req.body.Apellido,
            Identificacion: req.body.Identificacion,
            Email: req.body.Email,
            Telefono: req.body.Telefono,
            MetodoPag: req.body.MetodoPag,
            Pelicula: [
                {
                    Nombre_peli: req.body.Nombre_peli,
                    NoSala: req.body.NoSala,
                    NoButaca: req.body.NoButaca,
                    Precio: req.body.Precio,
                    Horario: req.body.Horario,
                    Total: req.body.Total
                }
            ]
      });
      // Save Tutorial in the database
      newController
        .save(newController)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Error al crear la base de datos."
          });
        });
};
// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  
};
// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
};
// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};
// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};
// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};
// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};