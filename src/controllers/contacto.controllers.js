import conexion from "../prisma.js";

export const crearContacto = async (req, res) => {
  const data = req.body;

  try {
    const contactoCreado = await conexion.contacto.create({
      data,
    });

    return res.status(201).json(contactoCreado);
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: "Error al CREAR el contacto",
      content: error.message,
    });
  }
};

export const mostrarContactos = async (req, res) => {
  try {
    const mostrandoContactos = await conexion.contacto.findMany();

    return res.status(201).json(mostrandoContactos);
  } catch (error) {
    return res.status(400).json({
      message: "Error al MOSTRAR el contacto",
      content: error.message,
    });
  }
};

export const actualizarContacto = async (req, res) => {
  try {
    let id = Number(req.params.id);
    let data = req.body;

    const contactoActualizado = await conexion.contacto.update({
      where: { id: id },
      data: data,
    });

    return res.status(201).json(contactoActualizado);
  } catch (error) {
    return res.status(400).json({
      message: "Error al ACTUALIZAR el contacto",
      content: error.message,
    });
  }
};

export const eliminarContacto = async (req, res) => {
  try {
    let id = Number(req.params.id);

    const contactoEliminado = await conexion.contacto.delete({
      where: { id: id },
    });

    return res.status(201).json(contactoEliminado);
  } catch (error) {
    return res.status(400).json({
      message: "Error al ELIMINAR el contacto",
      content: error.message,
    });
  }
};
