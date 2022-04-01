import mongoose from "mongoose";

const inmueblesSchema = mongoose.Schema(
  {
    //Datos del aviso
    tipoOferta: { type: String, required: true, trim: true },
    tipoInmueble: { type: String, required: true, trim: true },

    //Ubicacion del inmueble
    ciudad: { type: String, required: true, trim: true },
    barrio: { type: String, required: true, trim: true },
    direccion: { type: String, required: true, trim: true },

    //Descripcion del inmueble
    precio: { type: String, required: true, trim: true },
    estrato: { type: String, required: true, trim: true },
    area: { type: String, required: true, trim: true },
    habitaciones: { type: String, required: true, trim: true },
    baños: { type: String, required: true, trim: true },
    pisos: { type: String, required: true, trim: true },

    //Caracteristicas
    descripcion: { type: String, required: true, trim: true },

    //Fotografias del inmueble
    fotoPrincipal: { type: String, required: true, trim: true },
    foto2: { type: String, required: true, trim: true },
    foto3: { type: String, required: true, trim: true },
    foto4: { type: String, required: true, trim: true },
    foto5: { type: String, required: true, trim: true },
    foto6: { type: String, required: true, trim: true },

    //Datos de contacto
    vendedor: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario" },
    telefono: { type: Number, required: true, trim: true },
  },
  { timestamps: true }
);

const Inmueble = mongoose.model("Inmueble", inmueblesSchema);

export default Inmueble;
