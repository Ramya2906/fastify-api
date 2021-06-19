const {getItemOpts, getItemsOpts, addItemOpts, deleteItemOpts, updateItemOpts} = require("../controllers/options");

module.exports = (fastify, options, done) => {
    // get all items
    fastify.get("/items", getItemsOpts);

    // get single items
    fastify.get("/items/:id", getItemOpts);

    // add item
    fastify.post("/items", addItemOpts);

    // delete item
    fastify.delete("/items/:id", deleteItemOpts);

    // update item
    fastify.put("/items/:id", updateItemOpts);
    done();
}