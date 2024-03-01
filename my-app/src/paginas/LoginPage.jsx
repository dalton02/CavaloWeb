import logo from '../imagens/logo.png';

import styles from './login.module.css'; // Import css modules stylesheet as styles
import LoginForm from '../forms/LoginForm';

function LoginPage(){
	
	return (
  <div className={ `${styles.container} ${styles.containerAdjust}` }>  
	<div className={ `${styles.container} ${styles.containerLogo}` }>
    <img src={logo} alt="logo"/>
	 </div>
	
	<div className={`${styles.container} ${styles.containerLogin}`}>
		<div className={`${styles.container} ${styles.containerTitulo}`}>
			<h1>CAVALO DE PAU ACADEMIA</h1>
        </div>
        
		<LoginForm/>
            
		</div>
        
    </div>
  );
	
	
}

export default LoginPage;