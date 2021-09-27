const db = require('../database/models');

const APIController = {
    users: (req, res) => {

        res.json({
            count: 10,
            data: []
        });
    },
    products: (req, res) => {
        const result = {};

        db.Product.count({
            include:[{association:"editorials"}, {association:"categories"}],
        })
        .then((count)=>{
            result.count = count;
        });

        db.Product.findAll({
            include:[{association:"editorials"}, {association:"categories"}],
        })
        .then((listado)=>{
            result.data = listado;
        });
        return res.json(result);
    }
}

module.exports = APIController;