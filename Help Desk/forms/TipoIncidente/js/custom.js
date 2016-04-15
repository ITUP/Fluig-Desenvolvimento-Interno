function abrirZoomPapel(){
	var TITULO = "Papel Workflow";
    var DATASET = "workflowRole";
    var COLUNAS = "workflowRolePK.roleId," + escape('Código') + ",roleDescription,Nome";
    var RESULTADO = "workflowRolePK.roleId,roleDescription";	
    var TIPO = "papel";
    
    try{
    	openZoom(TITULO, DATASET, COLUNAS, RESULTADO, TIPO, "500", "500");
    } catch (e) {
	   log.info(e); 
    }
}

function setSelectedZoomItem(selectedItem){
    
	try{
		document.getElementById("idPapelResponsavel").value = selectedItem['workflowRolePK.roleId'];
	    document.getElementById("nmPapelResponsavel").value = selectedItem['roleDescription'];
    } catch(e) {
    	log.info(e.message);
    }

}

$(document).ready(function(){

	$("#cdIncidente").focus();
	
    //called when key is pressed in textbox
	$("#nrPrazo").keypress(function (e)  
	{ 
		//if the letter is not digit then display error and don't type anything
		if( e.which!=8 && e.which!=0 && (e.which<48 || e.which>57))
		{
			return false;
		}
	});
});

