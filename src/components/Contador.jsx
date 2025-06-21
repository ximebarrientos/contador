const Contador = () => {
    let numero=1;

    const sumar=()=>{
        numero++
    }
    return (
        <div className="mt-3 text-center">
            <h2 className="tituloContador">Contador</h2>
            <h3>N°: {numero}</h3>
            <button className="btn btn-primary me-2" onClick={sumar}>+</button>
            <button className="btn btn-danger">-</button>
        </div>
    );
};

export default Contador;