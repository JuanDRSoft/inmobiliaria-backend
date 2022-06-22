import React from "react";
import Usuario from "../models/Usuario.js";
import Inmueble from "../models/Inmueble.js";

const obtenerInmuebles = async (req, res) => {
  const inmuebles = await Inmueble.find({ req });

  res.json(inmuebles);
};

const nuevoInmueble = async (req, res) => {
  const inmueble = new Inmueble(req.body);
  inmueble.idVendedor = req.usuario._id;

  try {
    const inmuebleAlmacenado = await inmueble.save();
    res.json(inmuebleAlmacenado);
  } catch (error) {}
};

export { nuevoInmueble, obtenerInmuebles };
