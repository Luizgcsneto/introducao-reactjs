function Raiz(){
    return(
        <div className="Raiz">
            <h3>Nome: {nome}</h3>
            <p>Idade: {idade}</p>
            <p>Naturalidade: {naturalidade}</p>
        </div>

    )
}

const nome = 'luiz'
const idade = 31
const naturalidade = 'baiano'

export default Raiz