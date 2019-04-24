const express = require('express');
var router = express.Router();

router.get('/',(req, res)=>{
    res.json('cos tu sie wyswietli');
    //zamienic na res.render("np. logowanie", {
        //objekt zawierajacy wlasciwosc ktora ma byc wykoanna });
}); 

module.exports = router;