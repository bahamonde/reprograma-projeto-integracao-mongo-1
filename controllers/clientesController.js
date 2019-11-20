const Clientes = require('../model/cliente') //coloca esse para puxar do bdd pq os arq do model sao reflexo do q tem no bdd

const fs = require('fs');

exports.postCliente = (req, res) => {
  let cliente = new Clientes(req.body); //pega as informaçoes do body da requisicao e modela um novo pacote

  cliente.save(function (err) {
    if (err) res.status(500).send(err);
    else {
      res.status(201).send({
        status: true,
        mensagem: "Cliente incluido com sucesso"
      });
    };
  });
}




exports.getClientes = (req, res) => {
  Clientes.find(function (err, clientes) {  //funcao callback que ou retorna erro ou os dados dos clientes, mas esse é so uma variavel q poderia ter qlq nome
    if (err) res.status(500).send(err);
    res.status(200).send(clientes)
  })
}


exports.getCompradores = (req, res) => {
  Clientes.find({comprou: true}, function (err, clientes) {  //filtro dentro do find PQ TEM VARIOS REGISTROS COM ESSE VALOR
    if (err) res.status(500).send(err);
    const clientesRetorno = clientes.map(cliente => {  //manipulando o q vai aparecer no retorno, no caso só esses atributos o resto nao. Sem isso retornaria todos os atributos
      return{
        nome: cliente.nome,
        email: cliente.email
      }
    })

    res.status(200).send(clientesRetorno)
  })
}


exports.getCPF = (req, res) => {
  const cpf = req.params.cpf;  //Por params pq só 1 cliente vai ter esse cpf
  Clientes.find({ cpf }, function (err, cliente) {  //mesmo nome na chave e valor não precisa colocar 'cpf:cpf' só um o JS entende
    if (err) res.status(500).send(err);
    res.status(200).send(cliente)
  })
}






