import './App.css'
import title from "./assets/title.webp";

function App() {

  return (
    <main>
        <div className="aura">

        </div>
        <div className="loginSection">
          <div className="title"><img src={title} alt="" /></div>
          <form action="" className='form'>
            <h4>Fazer Aura</h4>
            <label htmlFor="nameDOOM">DOOMname</label>
            <input type="text" placeholder='Digite o nome do seu doom' id='nameDOOM'/>
            
            <label htmlFor="especial">Poder</label>
            <input type="text" placeholder='Digite um poder especial' id='especial'/>
            
            <label htmlFor="patente">Patente</label>
            <input type="text" placeholder='Digite a patente do seu doom' id='nameDOOM'/>
            <button>Criar máquina de MORTE!</button>
          </form>
        </div>
      </main>
  )
}

export default App
