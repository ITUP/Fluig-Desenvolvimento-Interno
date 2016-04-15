function afterStateLeave (sequenceId) {

    var ATRIBUIR_ANALISE = 2;
    var ANALISAR_SOLICITACAO = 3;
    var REVISAR_SOLICITACAO = 4;

    if (sequenceId == ATRIBUIR_ANALISE || sequenceId == REVISAR_SOLICITACAO)
        return;

    if (hAPI.getCardValue("idSolicitacao") == "")
        hAPI.setCardValue("idSolicitacao", getValue("WKNumProces"));

    var dtAgora = new java.lang.Double(java.util.Date().getTime());

    var decimalFormat = new java.text.DecimalFormat("#");

    if (sequenceId == ANALISAR_SOLICITACAO) {

    	var nrTempoEsperaForm = hAPI.getCardValue("nrTempoEsperaSolucao");
        var dtMovimentoAnterior = new java.lang.Double(hAPI.getCardValue("dtUltimoMovimento"));
        var nrTempoEspera = 0;
        
        if (!nrTempoEsperaForm.equals(""))
        	nrTempoEspera = new Number(nrTempoEsperaForm);

            var diferenca = dtAgora - dtMovimentoAnterior;

            nrTempoEspera += diferenca;
            
            log.info ("===> HELP DESK - nrTempoEspera: " + nrTempoEspera);
            
            if (hAPI.getCardValue("nrTempoEsperaAtendimento").equals(""))
            	
            	var TempoEspAtend = convertMS(decimalFormat.format(nrTempoEspera));
        		var TempoEspSolucao = convertMS(decimalFormat.format(nrTempoEspera));
   		
            	hAPI.setCardValue("nrTempoEsperaAtendimento", TempoEspAtend.dias + " dias " + TempoEspAtend.horas + "h " + TempoEspAtend.minutos + "min");
                hAPI.setCardValue("nrTempoEsperaSolucao", TempoEspSolucao.dias + " dias " + TempoEspSolucao.horas + "h " + TempoEspSolucao.minutos + "min");
    }

    hAPI.setCardValue("dtUltimoMovimento", decimalFormat.format(dtAgora));
}

function convertMS(ms) {
	  var d, h, m, s;
	  s = Math.floor(ms / 1000);
	  m = Math.floor(s / 60);
	  s = s % 60;
	  h = Math.floor(m / 60);
	  m = m % 60;
	  d = Math.floor(h / 24);
	  h = h % 24;

	  return { dias: d, horas: h, minutos: m, segundos: s };
}