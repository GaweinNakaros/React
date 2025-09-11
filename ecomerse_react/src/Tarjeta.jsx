

function Tarjeta({titulo, descripcion,botonText}) {

    return (

        <div className="tarjeta">
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
            <button>{botonText}</button>
        </div>
    )
} export {Tarjeta}   