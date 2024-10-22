function Estudante(props) {
    if (props.isEstudante) {
        return <p>Você é um estudante</p>
    } else {
        return null

    }
}

export default Estudante