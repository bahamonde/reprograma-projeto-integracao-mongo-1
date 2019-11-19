const mongoose = require('mongoose')

//INSTANCIANDO UM NOVO SCHEMA(MODELO) caracteristicas q o objeto vai possuir
const ClientesSchema = new mongoose.Schema({
    nome: {type: String},
    email: {type: String}, 
    cpf: {type: String},
    dataNascimento: {type: Date},
    estadoCivil: {type: String},
    telefone: {type: Number},
    comprou: {type: Boolean}
},
{
    versionKey: false  ///TIRA O V QUANDO CRIA UM NOVO REGISTRO
})


// ESTA DIZENDO QUE ESSE MODEL TEM ESSAS CARACTERISTICAS,EXPORTA AQUI
const Clientes = mongoose.model('Clientes', ClientesSchema);

module.exports = Clientes;