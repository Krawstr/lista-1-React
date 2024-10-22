const Usuario = (props) => {
    return (

        <p>{props.userOn? "Usuário online" : "Usuário offline"}</p>
    )
   
}

export default Usuario 