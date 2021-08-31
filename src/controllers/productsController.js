
const db = require('../database/models');


const productsController = {
    detail: (req, res) => {
        res.render('products/detail', {
            pageTitle: 'Detalle',
            product: products[req.params.id]
        });
    },
    create: (req, res) => {
        res.render('products/create', {
            pageTitle: 'Crear',
            redes,
            categorias
        });
    },
    edit: (req, res) => {
        res.render('products/edit', {
            pageTitle: 'Editar',
            redes,
            categorias,
            product: products[req.params.id]
        });
    },
    category: (req, res) => {
        let idCateogory=0;
        switch (req.params.categoryName){
            case "books":
                idCateogory=1;
                break;
            case "comics":
                idCateogory=2;
                break;
            case "escritorio":
                idCateogory=3;
                break;
            case "ropa":
                idCateogory=4;
                break;
            case "coleccionable":
                idCateogory=5;
                break;
            case "otros":
                idCateogory=6;
                break;
        }

        db.Product.findAll({
            include:[{association:"editorials"},{association:"categories"}],
            where:{categories_idCategory:idCateogory}
        })
        .then((listado)=>{
            res.render('products/category/category', {
                pageTitle: 'Todos los productos',
                listado: listado
            })
        })
    },
    wires: (req, res) => {
        wire = req.params.wireName;
        res.render('products/wires/wire', {
            pageTitle: wire,
            products: products.filter((product, i) => {
                product.id = i;
                return (product.red === wire) && product.stock;
            }),
            category: req.params.categoryName
        })
    },
    allProducts: (req, res) => {
        db.Product.findAll({
            include:[{association:"editorials"},{association:"categories"}],
            
        })
        .then((listado)=>{
            res.render('products/list', {
                pageTitle: 'Todos los productos',
                listado: listado
               
            })
           
        })
    },
    createPost:(req,res)=>{
        let nombreImagen="/public/img/"+req.file.filename
        let producto=req.body
        db.Product.create({
            name:producto.name,
            description:producto.description,
            image:nombreImagen,
            editorials_idEditorial:producto.editorials_idEditorial,
            categories_idCategory:producto.categories_idCategory,
            price:producto.price
        }).then(()=>
        {
            switch(producto.categories_idCategory)
            {
                case '1':
                    res.redirect('/products/category/libros');
                    break;
                case '2':
                    res.redirect('/products/category/comics');
                    break;
                case '3':
                    res.redirect('/products/category/escritorio');
                    break;
                case '4':
                    res.redirect('/products/category/ropa');
                    break;
                case '5':
                    res.redirect('/products/category/coleccionable');
                    break;
                case '5':
                    res.redirect('/products/category/otros');
                    break;
                default:
                    res.send('404');
            }
        })
    }
}

module.exports = productsController;