import logo from '../imagens/logo.png';
import login from '../imagens/login.png';
import stylesMain from "./user.module.css"
import UserDataForm from "../forms/UserDataForm";
import PlanoDataForm from "../forms/PlanoDataForm";
import "./main.css"
import {useState,useEffect} from "react";import {Link} from "react-router-dom";

function MainPage(){
	
	return (
	<>
	<div className={stylesMain.containerHeader}>
	<img id={stylesMain.login} src={logo}/><div><h3>Matricule-se</h3> <h3>Sobre</h3> 
	<Link to="/info" style={{width:"15%"}}><img src={login}/></Link></div>
	</div>
	<div className={stylesMain.containerBody}>	
	
	<h1>Meus dados</h1>
	
	<UserDataForm/>	
	
	<h1>Meu plano</h1>
	
	<PlanoDataForm/>
	
	</div>
	
	</>
	);	
}

export default MainPage;