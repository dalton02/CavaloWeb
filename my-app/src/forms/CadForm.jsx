import {Link} from "react-router-dom";

import '../paginas/general.css';
import stylesCad from '../paginas/cad.module.css';
function CadForm() {
  return (
			<div className={`${stylesCad.loginContainer} ${stylesCad.cadContainer}`}>
				<h1>DADOS</h1>
			<div className={stylesCad.inputContainer}>
            <input id="cadNome" type="text" placeholder="Nome"/>
             </div>
			 
            <div className={stylesCad.inputContainer}>
            <input id="cadSobrenome" type="text" placeholder="Sobrenome"/>
             </div>
			 
			<div className={stylesCad.inputContainer}>
            <input id="cadEmail" type="text" placeholder="Email"/>
             </div>
			 
			<div className={stylesCad.inputContainer}>
            <input id="cadSenha" type="text" placeholder="Senha"/>
             </div>
			 
			<div className={stylesCad.inputContainer}>
            <input id="cadCpf" type="text" placeholder="CPF"/>
             </div>
			<div className={stylesCad.inputContainer}>
            <input id="cadNascimento" type="text" placeholder="Data de Nascimento"/>
             </div>
			 
			<div className={stylesCad.inputContainer}>
			<select id="cadNacionalidade">
			<option value="null">Selecione sua nacionalidade</option>
			<option value="br">Brasileiro</option>
			<option value="lgbt">Europeu</option>
			<option value="m">Asiatico</option>
			<option value="a">Africano</option>
			</select>
             </div>
			<div className={`${stylesCad.inputContainer} ${stylesCad.doubleContainer}`}>
			<select id="cadNacionalidade">
			<option value="br">+55</option>
			<option value="lgbt">+00</option>
			<option value="m">+99</option>
			<option value="a">+11</option>
			</select> 
			
			<input id="cadTelefone" type="text" placeholder="Telefone"/>
            
			</div> 
			
			Gênero
			<div className={`${stylesCad.inputContainer} ${stylesCad.radioContainer}`}>
             <div><input id="cadNascimento" type="radio" name="anula"/><h4>Heterossexual</h4></div>
			 <div><input id="cadNascimento" type="radio"name="anula"/><h4>Homossexual</h4></div>
			 <div><input id="cadNascimento" type="radio"name="anula"/><h4>Não Binario</h4></div>
			</div>
			 <h2>Já tem uma conta? <a href="login.html"><Link to="/">Faça o Login</Link></a></h2>  
			 <div className="container btnContainer">
            <input type="submit" value="Registrar-se"/>
            </div>
			</div>
  );
}
export default CadForm;