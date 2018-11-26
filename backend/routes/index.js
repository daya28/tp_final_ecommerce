var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/items', async function(req, res) {

  const BASE_API = `https://api.mercadolibre.com/sites/MLA/search?q=camisa&limit=4`
  
  let items = await axios.get(`${BASE_API}`)
  items = items.data.results;

  
  let itemsFinal = items.map(elem => { //con el map escojo lo que quiero mostrar del json

    return{
      'id': elem.id,
      'title': elem.title,
      'price': {
          'currency': elem.currency_id == 'ARS' ? '$' : elem.currency_id,
          'amount': Math.floor(elem.price),
          'decimals': Math.floor((elem.price - Math.floor(elem.price)) * 100),
      },
      'picture':elem.thumbnail,
      'condition':elem.condition,
      'free_shipping': elem.shipping.free_shipping,
      'location':elem.address.state_name
    }
  });

  let arregloIdsDeCategorias = items.map(elem => elem.category_id); //para cada elemento del array items me quedo con la categoria del elemento

  let categoria = await axios.get(`https://api.mercadolibre.com/categories/${arregloIdsDeCategorias[0]}`)
  categoria = categoria.data.path_from_root;
  
  let categoriaFinal = categoria.map(elem => elem.name);
    
  let respuestaFinal = { 
    "author": {
      "name": "Dayanni",
      "lastname": "Adames",
      },

    "categories": categoriaFinal,
    "items": itemsFinal
    }
 
  res.json(respuestaFinal);

  
});


module.exports = router;
