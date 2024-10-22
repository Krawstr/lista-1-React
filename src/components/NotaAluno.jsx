const NotaAluno = (props) => {

    if (props.nota >= 90) {
        return <p>Excelente!</p>
    } else if (props.nota < 89 && props.nota >= 70) {
        return <p>Bom!</p>
    } else {
        return <p>Precisa melhorar!</p>
    }

}

export default NotaAluno


