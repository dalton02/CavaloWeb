import logo from '../imagens/logo.png';
import login from '../imagens/login.png';
import gym1 from '../imagens/gym1.jpeg';
import gym2 from '../imagens/gym2.jpg';
import gym3 from '../imagens/gym3.jpg';
import stylesMain from "./main.module.css"
import "./main.css"
import {useState,useEffect} from "react";import {Link} from "react-router-dom";

function MainPage(){
	
const [current,setCurrent]= useState(0);
const addCountHandler = () => {
    if([current] == 0){
		return;
	}
	setCurrent(current + 1);
};  
const removeCountHandler = () => {
    if([current] == -2){
      return;  
    }
    setCurrent(current - 1);
};
useEffect( () =>{
		let states = document.querySelectorAll(".state");
		let car = document.querySelector(".carroselItemContainer");
		car.style.transform = "translateX("+current*33.3333+"%)";
		
		for(let i=0;i<states.length;i++){
			states[i].style.backgroundColor="white";
		}
		let atualS = Math.abs([current]);
		states[atualS].style.backgroundColor="red";
},[current]);
//Tudo aqui em cima é pro carrosel só
	return (
	<>
	<div className={stylesMain.containerHeader}>
	<img id={stylesMain.login} src={logo}/><div><h3>Matricule-se</h3> <h3>Sobre</h3> 
	<Link to="/info" style={{width:"15%"}}><img src={login}/></Link></div>
	</div>
	<div className={stylesMain.containerBody}>	
		<div className={stylesMain.carrosel}>
			
			<div onClick = {addCountHandler} className={stylesMain.carroselSelector}> 
				<i className={stylesMain.arrowLeft}></i> 
			</div>
			
			<div className="carroselItemContainer">
				<div className={stylesMain.carroselItem}> <img src={gym1}/> </div>
				<div className={stylesMain.carroselItem}> <img src={gym2}/> </div>
				<div className={stylesMain.carroselItem}> <img src={gym3}/> </div>
			</div>
			
			<div onClick = { removeCountHandler} className={stylesMain.carroselSelector}> 
				<i className={stylesMain.arrowRight}></i> 
			</div>
			<div className={stylesMain.carroselState}>
				<div className="state"></div>
				<div className="state"></div>
				<div className="state"></div>
			</div>
		
		</div>
		<div className={stylesMain.nossaAcademia}>
		<h1>Escolha a academia mais próxima de você</h1>
		<div className={stylesMain.tiposPlanos}>
			<div className={stylesMain.tipo}>
				<h2>Plano Cavalo</h2><h3>Beneficios:</h3>-Esteroides<br/>-Suplementação vitalicia<br/>-Itens bonus<br/>
			</div>		
			<div className={stylesMain.tipo}>
				<h2>Plano Maromba</h2><h3>Beneficios:</h3>-Suco de hôrmonios<br/>-Pré-Pós treino vitalicio<br/>-Personal Trainer<br/>
			</div>		
			<div className={stylesMain.tipo}>
				<h2>Plano Frango</h2><h3>Beneficios:</h3>-Acesso á academia
			</div>		
		</div>
		
		<div className={stylesMain.btn}>
		<Link to="/cadastro"><input type="submit" value="Matricule-se"/></Link>
		</div>
		
		</div>
	
	</div>
	</>
	);
	
	
	
	
}

export default MainPage;