const express = require('express');
const router  = express.Router();

router.get('/',(req, res) => {
    res.render('index');//desde aqui se envia la pagina que se lee
    res.render('estilos.css');
}
);


module.exports = router;