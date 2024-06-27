const dataSource = require('../database/models')
const Services = require('./Services.js')

class PessoaServices extends Services {
    constructor() {
        super('Pessoa')
        this.matriculaServices = new Services('Matricula')
    }

    async pegaMatriculasAtivasPorEstudante(id) {
        const estudante = await super.pegaUmRegistroPorId(id)
        const listaMatriculas = await estudante.getAulasMatriculadas()
        return listaMatriculas
    }

    async pegaTodasAsMatriculasPorEstudante(id) {
        const estudante = await super.pegaUmRegistroPorId(id)
        const listaMatriculas = await estudante.getTodasAsMatriculas()
        return listaMatriculas
    }

    async pegaPessoasEcopoTodos() {
        const listaPessoa = await super.pegaRegistroPorEscopo('todosOsRegistros')
        return listaPessoa
    }

    async cancelaPessoaEMatricula(estudanteId) {
        return dataSource.sequelize.transaction(async (transacao) => {
            await super.atualizaRegistro({ ativo: false},{id: estudanteId}, transacao)
            await this.matriculaServices.atualizaRegistro({estudante_id: estudanteId}, {status: 'cancelado'}, transacao)  
        })
    }
}

module.exports = PessoaServices