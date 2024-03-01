import logo from '../imagens/logo.png';

import './general.css';
import stylesCad from './cad.module.css';
import CadForm from '../forms/CadForm';
import PagForm from '../forms/PagForm';

function CadPage(){
	return(
	
	<div>
	<div className={`${stylesCad.container} ${stylesCad.containerTitulo}`}>
	    <img src={logo} alt="logo"/>
	</div>
    
	<div className={`${stylesCad.container} ${stylesCad.containerAdjust}`}>
    	
		<div className={`${stylesCad.container} ${stylesCad.containerCad}`}>   
				<CadForm/>
		</div>
		
		<div className={` ${stylesCad.container} ${stylesCad.containerCad} ${stylesCad.pagamentoContainer}`}>
			<PagForm/>
		</div>
	</div>
	
	</div>
	);
	
}

export default CadPage;