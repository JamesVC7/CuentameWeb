const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "cuentame"
});

// Ruta para obtener datos de la tabla "Categoria"
app.get("/categorias", (req, res) => {
  const sql = "SELECT * FROM categoria";
  db.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Error al obtener datos de la base de datos" });
    } else {
      res.json(result);
    }
  });
});

app.listen(3001, () => {
  console.log("Servidor Express corriendo en el puerto 3001");
});
