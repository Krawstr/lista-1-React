const LevelUser = (props) => {
    return (
       <p>{props.nivel === "iniciante"? "Bem vindo, iniciante!": props.nivel === "intermediario"? "Bem vindo, intermediário!": "Bem vindo, avancado!" }</p>
    )

}

export default LevelUser