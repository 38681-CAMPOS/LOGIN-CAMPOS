import './Register.css'
import title from "../assets/title.webp";

export default function Register() {

  return (
    <main>
        <div className="aura">

        </div>
        <div className="loginSection">
          <div className="title"><img src={title} alt="" /></div>
          <form action="" className='form'>
            <h4>Fazer Cadastro</h4>
            <label htmlFor="nameDOOM">Username</label>
            <input type="text" placeholder='Digite seu nome' id='name'/>
            
            <label htmlFor="especial">Email</label>
            <input type="text" placeholder='Digite seu email' id='email'/>
            
            <label htmlFor="patente">Senha</label>
            <input type="text" placeholder='Digite sua senha' id='senha'/>

            <label htmlFor="patente">Confirmar Senha</label>
            <input type="text" placeholder='Confirme sua senha' id='confirm'/>
            <button>Criar máquina de MORTE!</button>
          </form>
        </div>
      </main>
  )
}
