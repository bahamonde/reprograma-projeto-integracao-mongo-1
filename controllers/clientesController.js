const Clientes = require('../model/cliente') //coloca esse para puxar do bdd

const fs = require('fs');

exports.post = (req, res) => { 
    let cliente = new Clientes(req.body);
  
    cliente.save(function (err){
      if (err) res.status(500).send(err);
  
      res.status(201).send(cliente);
  
    })

}



exports.get = (req, res) => {
    Clientes.find(function(err, clientes){
          if (err) res.status(500).send(err);
        res.status(200).send(clientes)
        })
}

