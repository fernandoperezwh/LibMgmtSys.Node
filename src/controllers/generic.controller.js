class GenericController {
  constructor(model) {
    this.model = model;
  }

  async list(req, res) {
    try {
      const items = await this.model.findAll();
      res.json(items);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener los elementos' });
    }
  }

  async retrieve(req, res) {
    const { id } = req.params;
    try {
      const item = await this.model.findByPk(id);
      if (!item) {
        return res.status(404).json({ error: 'Elemento no encontrado' });
      }
      res.json(item);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener el elemento' });
    }
  }

  async create(req, res) {
    try {
      const newItem = await this.model.create(req.body);
      res.status(201).json(newItem);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al crear el elemento' });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    try {
      const updatedItem = await this.model.findByPk(id);
      if (!updatedItem) {
        return res.status(404).json({ error: 'Elemento no encontrado' });
      }
      await updatedItem.update(req.body);
      res.json(updatedItem);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al actualizar el elemento' });
    }
  }

  async destroy(req, res) {
    const { id } = req.params;
    try {
      const deletedItem = await this.model.findByPk(id);
      if (!deletedItem) {
        return res.status(404).json({ error: 'Elemento no encontrado' });
      }
      await deletedItem.destroy();
      res.json({ message: 'Elemento eliminado con éxito' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al eliminar el elemento' });
    }
  }
}
  
module.exports = GenericController;
  