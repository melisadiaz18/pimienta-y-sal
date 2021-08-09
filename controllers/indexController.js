const fs = require('fs');
const path = require('path');
const menu = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'menu.json'), 'utf-8'));

module.exports = {
    index : (req,res) => {
        return res.render('index', {
            menu
        })
    },
    detalle : (req,res) =>{
        let item = menu.find(item => item.id === +req.params.id);
        
        return res.render('detalleMenu',{
            item
        })
    }
}