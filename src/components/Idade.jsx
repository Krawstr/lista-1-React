const Idade = (props) => {
    if (props.idade >= 18) {
        return <p>Voce tem {props.idade} anos. Você é maior de idade.</p>
    } else {
        return <p>Voce tem {props.idade} anos. Você é menor de idade.</p>
    }
}

export default Idade