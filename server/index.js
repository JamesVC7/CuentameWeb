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

app.get("/imagen/:id", (req, res) => {
  const idImagen = req.params.id;

  // Realiza una consulta a la base de datos para obtener la imagen binaria según el ID
  db.query("SELECT imagen FROM Categoria WHERE id_categoria = ?", [idImagen], (err, result) => {
    if (err) {
      console.error("Error al obtener imagen de la base de datos", err);
      res.status(500).send("Error al obtener imagen de la base de datos");
      return;
    }

    if (result.length === 0) {
      res.status(404).send("Imagen no encontrada");
      return;
    }

    // El resultado contiene la imagen en formato binario
    const imagenBinaria = result[0].imagen;

    // Devuelve la imagen como una respuesta con el tipo de contenido adecuado
    res.writeHead(200, { "Content-Type": "image/png" }); 
    res.end(imagenBinaria, "binary");
  });
});


// Ruta para obtener datos de la tabla "Cuentos"
app.get("/cuentos", (req, res) => {
  const sql = "SELECT * FROM cuentos";
  db.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Error al obtener datos de la base de datos" });
    } else {
      res.json(result);
    }
  });
});

app.get("/imagen-cuento/:id", (req, res) => {
  const idImagen = req.params.id;

  // Realiza una consulta a la base de datos para obtener la imagen binaria según el ID
  db.query("SELECT imagen FROM cuentos WHERE id_cuento = ?", [idImagen], (err, result) => {
    if (err) {
      console.error("Error al obtener imagen de la base de datos", err);
      res.status(500).send("Error al obtener imagen de la base de datos");
      return;
    }

    if (result.length === 0) {
      res.status(404).send("Imagen no encontrada");
      return;
    }

    // El resultado contiene la imagen en formato binario
    const imagenBinaria = result[0].imagen;

    // Devuelve la imagen como una respuesta con el tipo de contenido adecuado
    res.writeHead(200, { "Content-Type": "image/png" }); 
    res.end(imagenBinaria, "binary");
  });
});

// Ruta para obtener cuentos por categoría
app.get('/cuentos-por-categoria/:id_categoria', (req, res) => {
  const idCategoria = req.params.id_categoria;
  
  // Realiza una consulta a la base de datos para obtener los cuentos según el id_categoria
  const sql = 'SELECT * FROM cuentos WHERE id_categoria = ?';

  db.query(sql, [idCategoria], (err, result) => {
    if (err) {
      console.error('Error al obtener cuentos por categoría', err);
      res.status(500).json({ error: 'Error al obtener cuentos por categoría' });
    } else {
      res.json(result); // Devuelve los datos de los cuentos como respuesta JSON
    }
  });
});

// Ruta para buscar cuentos por nombre
app.get("/buscar-cuentos", (req, res) => {
  const searchTerm = req.query.nombre; // Obtiene el término de búsqueda de la consulta
  // Realiza una consulta a la base de datos para buscar cuentos por nombre
  const sql = "SELECT * FROM cuentos WHERE nombre LIKE ?";
  const searchPattern = `%${searchTerm}%`; // Agrega comodines para buscar coincidencias parciales
  db.query(sql, [searchPattern], (err, result) => {
    if (err) {
      console.error("Error al buscar cuentos por nombre", err);
      res.status(500).json({ error: "Error al buscar cuentos en la BD" });
    } else {
      res.json(result);
    }
  });
});

//Ruta imagenes por cuento
app.get("/imagen-paginas/:id", (req, res) => {
  const idImagen = req.params.id;

  // Realiza una consulta a la base de datos para obtener la imagen binaria según el ID
  db.query("SELECT imagen FROM imagenes WHERE id_imagen = ?", [idImagen], (err, result) => {
    if (err) {
      console.error("Error al obtener imagen de la base de datos", err);
      res.status(500).send("Error al obtener imagen de la base de datos");
      return;
    }

    if (result.length === 0) {
      res.status(404).send("Imagen no encontrada");
      return;
    }

    // El resultado contiene la imagen en formato binario
    const imagenBinaria = result[0].imagen;

    // Devuelve la imagen como una respuesta con el tipo de contenido adecuado
    res.writeHead(200, { "Content-Type": "image/png" }); 
    res.end(imagenBinaria, "binary");
  });
});

// Ruta para obtener paginas por cuento
app.get('/paginas-por-cuento/:id_cuento', (req, res) => {
  const idCuento = req.params.id_cuento;
  
  // Realiza una consulta a la base de datos para obtener los cuentos según el id_categoria
  const sql = 'SELECT * FROM imagenes WHERE id_cuento = ?';

  db.query(sql, [idCuento], (err, result) => {
    if (err) {
      console.error('Error al obtener cuentos por categoría', err);
      res.status(500).json({ error: 'Error al obtener cuentos por categoría' });
    } else {
      res.json(result); // Devuelve los datos de los cuentos como respuesta JSON
    }
  });
});

// Ruta para obtener el nombre del cuento por su id_cuento
app.get("/nombre-cuento/:id_cuento", (req, res) => {
  const idCuento = req.params.id_cuento;

  // Realiza una consulta a la base de datos para obtener el nombre del cuento según el id_cuento
  db.query("SELECT nombre FROM cuentos WHERE id_cuento = ?", [idCuento], (err, result) => {
    if (err) {
      console.error("Error al obtener el nombre del cuento de la base de datos", err);
      res.status(500).send("Error al obtener el nombre del cuento de la base de datos");
      return;
    }

    if (result.length === 0) {
      res.status(404).send("Nombre del cuento no encontrado");
      return;
    }

    // El resultado contiene el nombre del cuento
    const nombreCuento = result[0].nombre;

    // Devuelve el nombre del cuento como respuesta
    res.json({ nombre: nombreCuento });
  });
});

// Ruta para insertar datos en la tabla "Contacto"
app.post("/insertar-contacto", (req, res) => {
  // Obtén los datos del formulario enviados en formato JSON
  const { nombre, correo, mensaje } = req.body;

  // Realiza la inserción en la tabla "Contacto" utilizando una consulta SQL
  const sql = "INSERT INTO contacto (nombre, correo, mensaje) VALUES (?, ?, ?)";
  db.query(sql, [nombre, correo, mensaje], (err, result) => {
    if (err) {
      console.error("Error al insertar datos en la tabla Contacto", err);
      res.status(500).json({ error: "Error al insertar datos en la tabla Contacto" });
    } else {
      console.log("Datos insertados en la tabla Contacto");
      res.json({ message: "Datos insertados en la tabla Contacto" });
    }
  });
});

app.listen(3001, () => {
  console.log("Servidor Express corriendo en el puerto 3001");
});
