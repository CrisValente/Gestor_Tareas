import Task from "../models/Task.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll({ where: { userId: req.user.id } });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener tareas", error });
  }
};

export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const task = await Task.create({
      title,
      description,
      userId: req.user.id,
    });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: "Error al crear tarea", error });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    const task = await Task.findOne({ where: { id, userId: req.user.id } });

    if (!task) return res.status(404).json({ message: "Tarea no encontrada" });

    task.title = title;
    task.description = description;
    task.completed = completed;
    await task.save();

    res.json(task);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar tarea", error });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findOne({ where: { id, userId: req.user.id } });

    if (!task) return res.status(404).json({ message: "Tarea no encontrada" });

    await task.destroy();
    res.json({ message: "Tarea eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar tarea", error });
  }
};
