import {Link} from "react-router-dom";

import styles from '../paginas/login.module.css'; // Import css modules stylesheet as styles
function LoginForm() {
  return (
<div className={styles.loginContainer}>
	
	<div className={styles.inputContainer}>
		<input id="meuLogin" type="text" placeholder="Login"/>
	</div>
	
	<div className={styles.inputContainer}>
		<input id="minhaSenha" type="password" placeholder="Senha"/>
	</div>
	
	<div className={ `${styles.container} ${styles.btnContainer}`} >
		<Link to="/principal" style={{width:"40%"}}	><input type="submit" value="Login"/></Link>
		<Link to="/cadastro"  style={{width:"40%"}}><input type="submit" value="Cadastrar"/></Link>
	</div>
	
  
  </div>
  );
}
export default LoginForm;