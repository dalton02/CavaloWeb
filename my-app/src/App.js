import React from "react";
import {createBrowserRouter,createRoutesFromElements,Outlet,Link,RouterProvider,Route} from "react-router-dom";
import LoginPage from './paginas/LoginPage';
import CadPage from './paginas/CadPage';
import MainPage from './paginas/MainPage';
import UserPage from './paginas/UserPage';


function App() {

	//Rotas do servidor
	const router = createBrowserRouter(
		createRoutesFromElements(
		<Route path="/" element={<Root/>} >
			<Route index element={<LoginPage/>}/>	
			<Route element={<CadPage/>} path="/cadastro" />
			<Route element={<MainPage/>} path="/principal" />
			<Route element={<UserPage/>} path="/info" />
		</Route>
		)
	);
	
	return  (
	<>
	<RouterProvider router={router}/>
	</>
	
	
	);
  
}
const Root = () =>{
	return	<><Outlet/></>

}

export default App;
