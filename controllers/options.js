const {getItem, getItems, addItem, deleteItem, updateItem} = require("../controllers/Item.controller");
const Item = {
    type: "object",
    properties : {
        // comment out any of the following properties to ignore them from sending data to the client. And can also change the type of the parameters to change the parameter to its other suitable types.
        id: {type: "string"}, // type: "number" := this will return the id as a number to the client on respective api call.
        name : {type: "string"}
    }
}

const getItemsOpts = {
    schema : {
        response : {
            200: {
                type: "array",
                items : Item
            }
        }
    }, 
    handler : getItems
}

const getItemOpts = {
    schema : {
        response : {
            200 : Item
        }
    },
    handler : getItem
}

const deleteItemOpts = {
    schema : {
        response : {
            200 : {
                type : "object",
                properties : {
                    message : {type: "string"}
                }
            }
        }
    }, 
    handler : deleteItem
}

const addItemOpts = {
    schema : {
        body: {
            type: "object",
            required : ['name'],
            properties : {
                name : {type : "string"}
            }
        },
        response : {
            201: Item
        }
    }, 
    handler : addItem
}
const updateItemOpts = {
    schema : {
        response : {
            200 : Item
        }
    }, 
    handler : updateItem
}

module.exports = {
    getItemsOpts,
    getItemOpts,
    addItemOpts,
    deleteItemOpts,
    updateItemOpts
}