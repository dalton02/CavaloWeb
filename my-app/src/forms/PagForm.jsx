import '../paginas/general.css';
import stylesCad from '../paginas/cad.module.css';

function PagForm(){
	return(
	<>
	<h1>PAGAMENTO</h1>
        <div className={`${stylesCad.inputContainer} ${stylesCad.planoContainer}`}>
			<select id="pagamentoPlanos">
			<option value="br">PLANO FRANGO</option>
			<option value="lgbt">PLANO MAROMBA</option>
			<option value="m">PLANO SUCO</option>
			<option value="br">PLANO CAVALO</option>
			</select> 
             </div> 
             <div className={`${stylesCad.inputContainer} ${stylesCad.doubleContainer} ${stylesCad.textBtnContainer}`}>
             <input id="cadNascimento" type="text"placeholder="Código de Voucher"/>
               <input type="submit" value="Aplicar"/>
              </div>
              <div className={`${stylesCad.inputContainer} ${stylesCad.valoresContainer}`}>
                <span><h3>Contrato:</h3><h3>R$1300</h3></span>
                <span id={stylesCad.valorFinal}><h3>Total:</h3><h3>R$1300</h3></span>    
            </div>
              <div className={stylesCad.inputContainer}>
                <select id={stylesCad.parcelasContainer}>
                <option value="1x">1X de R$120</option>
                <option value="2x">2X de R$120</option>
                <option value="4x">4X de R$120</option>
                <option value="12x">12X de R$120</option>
                </select> 
                 </div>
                 <div className={stylesCad.inputContainer}>
                    <span><h2>Total (a vista)</h2><h2>R$1300</h2></span> 
                </div> 
                <div className={stylesCad.btnContainer}>
                <input type="submit" value="Finalizar"/>
                </div>
                    
	</>
	
	);
	
}

export default PagForm;