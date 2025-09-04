function MiBoton({text, color}) {

    const estilo = {

        backgroundColor: color,
        color: 'white',
        padding: '10px 20px',
        margin: '10px',

    }

    return (

        <button style={estilo}>{text}</button>
    )
} export {MiBoton}   