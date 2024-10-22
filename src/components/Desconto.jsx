const Desconto = (props) => {
    return (
       <p>{props.desconto ? "Deconto aplicado" : "Sem desconto" } </p>
    )
}

export default Desconto