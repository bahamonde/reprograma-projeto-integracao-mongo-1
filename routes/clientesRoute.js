const express = require("express")
const router = express.Router()
const controller = require("../controllers/clientesController")


router.post("/", controller.postCliente)
router.get("/", controller.getClientes)
router.get("/compradores", controller.getCompradores)
router.get("/:cpf", controller.getCPF)  //é um param pq vc ta esperando receber esse parametro



module.exports = router
