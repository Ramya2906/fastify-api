let items = require("../models/Items.model");
const {v4:uuidv4} = require("uuid");

const getItem = (req, reply) => {
    const {id} = req.params;
    const item = items.find(itemm=>itemm.id===id);
    reply.send(item);
}
const getItems = (req, reply) => {
    reply.send(items);
}
const addItem = async (req, reply) => {
    const {name} = req.body;
    const item = {
        id : uuidv4(),
        name
    }
    items = [...items, item];
    reply.code(201).send(item);
}
const deleteItem = async (req, reply) => {
    const {id} = req.params;
    items = await items.filter(itemm=>itemm.id!==id);
    reply.send({message: `Item ${id} has been removed...`});
}
const updateItem = async (req, reply) => {
    const {id} = req.params;
    const {name} = req.body;
    items = items.map(item => (item.id == id)?{id, name}:item);
    item = items.find(itemm => itemm.id === id);
    reply.send(item);
}

module.exports = {
    getItem,
    getItems,
    addItem,
    deleteItem,
    updateItem
}