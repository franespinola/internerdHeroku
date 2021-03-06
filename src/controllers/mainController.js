const path = require('path');
const main = {
    index: (req, res) => {
        const redes = [{
                red: 'marvel',
                img: `/public/img/marvel.svg`
            },
            {
                red: 'dc',
                img: `/public/img/dc.svg`
            },
            {
                red: 'hp',
                img: `/public/img/hp.svg`
            },
            {
                red: 'star-wars',
                img: `/public/img/star-wars.svg`
            },
            {
                red: 'Simpsons',
                img: `/public/img/Simpsons.svg`
            }
        ];
        res.render('index', {
            pageTitle: 'Home',
            redes
        });
    },
    login: (req, res) => {
        res.render('login', {
            pageTitle: 'Login'
        });
    },
    register: (req, res) => {
        res.render('signup', {
            pageTitle: 'Signup'
        });
    },
   
}

module.exports = main;