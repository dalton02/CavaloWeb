import stylesMain from '../paginas/user.module.css';

function PlanoDataForm(){
	return(	
	<div className={stylesMain.userDados}>
			
			<div className={stylesMain.groupData}>
			<div className={stylesMain.titleData}>Tipo: 
			<div className={stylesMain.userData}>Plano Cavalo</div>
			</div>
			</div>
			
			<div className={stylesMain.groupData}>
			<div className={stylesMain.titleData}>Pagamento: 
			<div className={stylesMain.userData}>Débito Elo</div>
			</div>
			</div>
			
			<div className={stylesMain.groupData}>
			<div className={stylesMain.titleData}>Data vencimento
			<div className={stylesMain.userData}>05/06/2023</div>
			</div>
			</div>
			<div className={stylesMain.groupData}>
			<div className={stylesMain.titleData}>Parcelamento
			<div className={stylesMain.userData}>12x de R$230</div>
			</div>
			</div>
			
		</div>
	
	);
	
}

export default PlanoDataForm;