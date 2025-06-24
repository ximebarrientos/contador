import { useState } from "react";


const Contador = () => {
    const [numero,setNumero]=useState(1) //asi declaro un estado

    /* const sumar=()=>{
        setNumero(numero+1)
        
    } */
    return (
        <div className="mt-3 text-center">
            <h2 className="tituloContador">Contador</h2>
            <h3>N°: {numero}</h3>
            <button className="btn btn-primary me-2" onClick={()=>setNumero(numero+1)}>+</button>
            <button className="btn btn-danger">-</button>
        </div>
    );
};

export default Contador;