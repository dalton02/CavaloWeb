import stylesMain from '../paginas/user.module.css'; // Import css modules stylesheet as styles
function UserDataForm() {
  return (
  <div className={stylesMain.userDados}>
			
			
			<div className={stylesMain.groupData}>
			<div className={stylesMain.titleData}>Nome: 
			<div className={stylesMain.userData}>Hebert Richards</div> 
			</div>
			</div>
			
			<div className={stylesMain.groupData}>
			<div className={stylesMain.titleData}>Nacionalidade: 
			<div className={stylesMain.userData}>Brasileiro</div>
			</div>
			</div>
			
			<div className={stylesMain.groupData}>
			<div className={stylesMain.titleData}>CPF 
			<div className={stylesMain.userData}>066.218.453-11</div>
			</div>
			</div>
			<div className={stylesMain.groupData}>
			<div className={stylesMain.titleData}>RG
			<div className={stylesMain.userData}>29083432-12</div>
			</div>
			</div>
			
		</div>
  );
}
export default UserDataForm;