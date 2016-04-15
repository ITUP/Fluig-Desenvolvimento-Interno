function abrirZoomTipoIncidente(){
	var TITULO = "Tipo de Incidente";
	var DATASET = "ds_tipo_incidente";
	var COLUNAS = "cdIncidente," + escape('Codigo') + ",nmIncidente,Nome";
	var RESULTADO = "cdIncidente,nmIncidente,idPapelResponsavel,nmPapelResponsavel";
	var CAMPO_FILTRO = "metadata_active";
	var VALOR_FILTRO = "true";
	var TIPO = "tipoIncidente";
	
	openZoom(TITULO, DATASET, COLUNAS, RESULTADO, TIPO, "500", "500", CAMPO_FILTRO, VALOR_FILTRO);	
}

function setSelectedZoomItem(selectedItem){
	document.getElementById("idTipoIncidente").value = selectedItem.cdIncidente;
	document.getElementById("nmTipoIncidente").value = selectedItem.nmIncidente;
	document.getElementById("idPapelResponsavel").value = selectedItem.idPapelResponsavel;
	document.getElementById("nmPapelResponsavel").value = selectedItem.nmPapelResponsavel;
}

function inicio(){ 
	desabilitaCampos();
} 

function desabilitaCampos(){	
	var INICIO_SOLICITACAO = 0;
	var SOLICITAR_SUPORTE = 1; 
	var numeroAtividade = getWKNumState();
	
	if(numeroAtividade != INICIO_SOLICITACAO && numeroAtividade != SOLICITAR_SUPORTE)
		document.getElementById("btZoomTipoIncidente").style.display="none";
}