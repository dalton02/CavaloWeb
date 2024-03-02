import {Link} from "react-router-dom";
import {useState,useEffect} from "react";
import '../paginas/general.css';
import React from "react"
import Mp3 from '../paginas/important.mp3';
import stylesCad from '../paginas/cad.module.css';
function CadForm() {

   
  const audioRef = React.createRef();
  const [formL,setFormL] = useState({
	  cadLogin: "",
	  cadNome: "",
	  cadEmail: "",
	  cadSenha: "",
	  cadCpf: "",
	  cadNascimento: "",
	  cadNacionalidade: "null",
	  cadDigito: "+55",
	  cadTelefone: "",
   });
   
   const keepTrack = (e) =>{
	   
		if(e.target.name=="cadLogin")
		formL.cadLogin=e.target.value;
		if(e.target.name=="cadSenha")
		formL.cadSenha=e.target.value;
		if(e.target.name=="cadNome")
		formL.cadNome=e.target.value;
		if(e.target.name=="cadEmail")
		formL.cadEmail=e.target.value;
		if(e.target.name=="cadCpf")
		formL.cadCpf=e.target.value;
		if(e.target.name=="cadNascimento"){
		formL.cadNascimento = e.target.value;
		}
		
		
		if(e.target.name=="cadNacionalidade")
		formL.cadNacionalidade=e.target.value;
		if(e.target.name=="cadDigito")
		formL.cadDigito=e.target.value;
		if(e.target.name=="cadTelefone")
		formL.cadTelefone=e.target.value;
	   
		console.log(formL);
   }
   
  
   
  const validateForm = (e) =>{
	console.log(formL);
	e.preventDefault();
	const format = /[@$%&!]/;	 
	const hasSpecial = format.test(formL.cadSenha);
	const correctEmail = checkValidEmail(formL.cadEmail);
	const correctCpf = checkValidCpf(formL.cadCpf);
	if(formL.cadNome.length<8 || formL.cadLogin.length<6 || !hasSpecial || formL.cadSenha.length<9){
			audioRef.current.play();
		alert("Preencha os dados corretamente");
	}
	else if(formL.cadNacionalidade=="null"){
			audioRef.current.play();
		alert("Selecione seu país");
	}
	else if(!correctEmail){
			audioRef.current.play();
		alert("Insira um email valido");
	}
	else if(!correctCpf){
			audioRef.current.play();
		alert("Insira um cpf valido");
	}
	else{
		window.location = window.location.href.replace("cadastro","")+"principal";
	}
	
  }	
	function checkValidEmail(email){
		let nome = email.substring(0,email.indexOf("@"));
		let dominio = email.substring(email.indexOf("@")+1,email.length);
			if ((nome.length >=1) &&
				(dominio.length >=3) &&
				(nome.search("@")==-1) &&
				(dominio.search("@")==-1) &&
				(nome.search(" ")==-1) &&
				(dominio.search(" ")==-1) &&
				(dominio.search(".")!=-1) &&
				(dominio.indexOf(".") >=1)&&
				(dominio.lastIndexOf(".") < dominio.length - 1)) {
				return true;
				}
			else{
				return false;
			}		
	}
	function checkValidCpf(cpf){
		
		let soma,resto;
		soma=0;
		if (cpf == "00000000000") return false;
		for(let i=1;i<=9;i++) 
		soma = soma+parseInt(cpf.substring(i-1,i))*(11-i);
		resto = (soma*10)%11;
		
		if(resto==10 || resto==11) resto=0;
		if(resto!=parseInt(cpf.substring(9,10))) return false;
		
		soma =0;
		
		for(let i=1;i<=10;i++) 
		soma = soma+parseInt(cpf.substring(i-1,i))*(12-i);
		resto = (soma*10)%11;
		if(resto==10 || resto==11) resto=0;
		if(resto!=parseInt(cpf.substring(10,11))) return false;
		return true;
	}
	
  return (
  
			<div className={`${stylesCad.loginContainer} ${stylesCad.cadContainer}`}>
				<h1>DADOS</h1>
      <audio src={Mp3} ref={audioRef}/>
	
			<form onChange={keepTrack} onSubmit={validateForm}>
			<div className={stylesCad.inputContainer}>
            <input name="cadLogin" type="text" placeholder="Login (Minimo:6 caracteres)"/>
             </div>
			 
            <div className={stylesCad.inputContainer}>
            <input name="cadNome" type="text" placeholder="Nome"/>
             </div>
			 
			<div className={stylesCad.inputContainer}>
            <input name="cadEmail" type="text" placeholder="Email"/>
             </div>
			 
			<div className={stylesCad.inputContainer}>
            <input name="cadSenha" type="text" placeholder="Senha (Minimo:9 caracters,incluindo simbolos especiais)"/>
             </div>
			 
			<div className={stylesCad.inputContainer}>
            <input name="cadCpf" type="text" placeholder="CPF"/>
             </div>
			<div className={stylesCad.inputContainer}>
            <input name="cadNascimento" type="date" placeholder="Data de Nascimento"/>
             </div>
			 
			<div className={stylesCad.inputContainer}>
			<select name="cadNacionalidade">
			<option value="null">Selecione sua nacionalidade</option>
			<option value="BR">Brasileiro</option>
			<option value="UE">Europeu</option>
			<option value="JP">Asiatico</option>
			<option value="AF">Africano</option>
			</select>
             </div>
			<div className={`${stylesCad.inputContainer} ${stylesCad.doubleContainer}`}>
			<select name="cadDigito">
			<option value="+55">+55</option>
			<option value="+00">+00</option>
			<option value="+99">+99</option>
			<option value="+11">+11</option>
			</select> 
			
			<input name="cadTelefone" type="text" placeholder="Telefone"/>
            
			</div> 
			
			Gênero
			<div className={`${stylesCad.inputContainer} ${stylesCad.radioContainer}`}>
             <div><input name="cadGenero" type="radio" name="anula" checked/><h4>Heterossexual</h4></div>
			 <div><input name="cadGenero" type="radio"name="anula"/><h4>Homossexual</h4></div>
			 <div><input name="cadGenero" type="radio"name="anula"/><h4>Não Binario</h4></div>
			</div>
			 <h2>Já tem uma conta? <a href="login.html"><Link to="/">Faça o Login</Link></a></h2>  
			 <div className="container btnContainer">
            <input type="submit" value="Registrar-se"/>
            </div>
			</form>
			</div>
  );
}
export default CadForm;