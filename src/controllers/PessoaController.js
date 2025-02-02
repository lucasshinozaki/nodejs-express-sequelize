const Controller = require('./Controller.js')
const PessoaServices = require('../services/PessoasServices.js')

const pessoaServices = new PessoaServices()

class PessoaController extends Controller{

    constructor() {
        super(pessoaServices)
    }

    async pegaMatriculasAtivas(req, res) {
        const { estudante_id } = req.params
        try {
            const listaMatriculas = await pessoaServices.pegaMatriculasAtivasPorEstudante(Number(estudante_id))
            return res.status(200).json(listaMatriculas)
        } catch(erro) {
            return res.status(500).json({erro: erro.message})
        }
    }

    async pegaTodasAsMatriculas(req, res) {
        const { estudante_id } = req.params
        try {
            const listaMatriculas = await pessoaServices.pegaTodasAsMatriculasPorEstudante(Number(estudante_id))
            return res.status(200).json(listaMatriculas)
        } catch(erro) {
            return res.status(500).json({erro: erro.message})
        }
    }

    async pegaTodosAsPessoas(req, res) {
        try {
            const listaTodasAsPessoas = await pessoaServices.pegaPessoasEcopoTodos()
            return res.status(200).json(listaTodasAsPessoas)
        } catch(erro){
            return res.status(500).json({erro: erro.message})
        }
    }

    async cancelaRegistroEstudante(req, res) {
        const { estudante_id } = req.params
        try {
            await pessoaServices.cancelaPessoaEMatricula(Number(estudante_id))
            return res.status(200).json({mensagem: `matricula ref estudante ${estudante_id} cancelada`})
        } catch(erro){
            return res.status(500).json({erro: erro.message})
        }
    }

}

module.exports = PessoaController;
