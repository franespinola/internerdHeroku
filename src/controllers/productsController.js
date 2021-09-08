
const db = require('../database/models');
const redes = [
    [1,'Marvel'],
    [2,'DC'],
    [3,'Harry Potter'],
    [4,'Star Wars'],
    [5,'Simpsons']
],
categorias = [
    [1,'Libros'],
    [2,'Cómics'],
    [3,'Escritorio'],
    [4,'Ropa'],
    [5,'Coleccionable'],
    [6,'Otros']
]

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
       
        switch (req.params.categoryName){
            case "books":
                idCategory=1;
                break;
            case "comics":
                idCategory=2;
                break;
            case "escritorio":
                idCategory=3;
                break;
            case "ropa":
                idCategory=4;
                break;
            case "coleccionable":
                idCategory=5;
                break;
            case "otros":
                idCategory=6;
                break;
        }

        db.Product.findAll({
            include:[{association:"editorials"},{association:"categories"}],
            where:{categories_idCategory:idCategory}
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
    },
    deleteProduct:(req,res)=>{
       
        res.send('llegaste bebe')
    }
    
}

module.exports = productsController;