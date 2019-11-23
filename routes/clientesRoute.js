const express = require("express")
const router = express.Router()
const controller = require("../controllers/clientesController")

/**
 * @api {get} /clientes
 * @apiGroup Clientes
 * * 
 * @apiSuccess {Object[]} clientes Lista de Clientes
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *   [{
 *       "email": "Cindy@gmail.com",
 *       "nome": "Cindy ",
 *       "cpf": 2234567890,
 *       "dataNascimento": "1992-04-03T03:00:00.000Z",
 *       "estadoCivil": "Solteira",
 *       "telefone": 444456789,
 *       "comprou": true
 *   }]
 *
 */


router.post("/", controller.postCliente)
router.get("/", controller.getClientes)
router.get("/compradores", controller.getCompradores)
router.get("/:cpf", controller.getCPF)  //é um param pq vc ta esperando receber esse parametro
router.put("/:cpf", controller.updateCliente)
router.delete("/:cpf", controller.deleteCliente)



module.exports = router
