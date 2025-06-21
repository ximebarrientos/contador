import "bootstrap/dist/css/bootstrap.min.css"
import Informacion from "./components/Informacion"
import Comision from "./components/Comision"

function App() {
  //aqui agregamos la logica del componente
  const nombreComision="c12"
  return (
    //aqui puedo usar un poco de logica
    <>
    <main className="container my-5">
      {/* aqui aprego todo el maquetado */}
      <h1>Primer proyecto de react</h1>
      <Informacion></Informacion>
      <Comision nombreComisionProps={nombreComision}></Comision>
    </main>
    </>
  )
  }

export default App
