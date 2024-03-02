import {useState,useEffect} from "react";
import React from "react"
import Mp3 from '../paginas/important.mp3';
import styles from '../paginas/login.module.css'; // Import css modules stylesheet as styles


function LoginForm() {
	
  const audioRef = React.createRef();
  const [formL,setFormL] = useState({
	  meuLogin: "",
	  minhaSenha: "",
  });
  
  
  const keepTrack = (e) =>{
		if(e.target.name=="meuLogin")
		formL.meuLogin=e.target.value;
		if(e.target.name=="minhaSenha")
		formL.minhaSenha=e.target.value;
	};
  const validateForm = (e) =>{
	  
	  e.preventDefault();
	  console.log(formL);
	  if(formL.meuLogin=="" || formL.minhaSenha==""){
			audioRef.current.play();
			alert("Preencha os campos");
	  }
	  else{
		
		window.location = window.location.href+"principal";
		
	   }
	  
  }	
  
  return (
  
<div className={styles.loginContainer}>
      <audio src={Mp3} ref={audioRef}/>
	<form onChange={keepTrack} onSubmit={validateForm}>
	<div className={styles.inputContainer}>
		<input   name="meuLogin" type="text" placeholder="Login"/>
	</div>
	
	<div className={styles.inputContainer}>
		<input  name="minhaSenha" type="password" placeholder="Senha"/>
	</div>
	
	<div className={ `${styles.container} ${styles.btnContainer}`} >
		<input type="submit" name="login" value="Login"/>
		<input onClick={()=>window.location = window.location.href+"cadastro"}type="button" name="senha" value="Cadastrar"/>
	</div>
	</form>
	
  
  </div>
  );
}
export default LoginForm;