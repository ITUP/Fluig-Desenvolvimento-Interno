function beforeStateEntry(sequenceId){

    var ATIVIDADE_ATRIBUIR_ANALISE = 2;
    var ATIVIDADE_ANALISAR_SOLIC = 3;
    var OBSERVACAO = "";

    if (sequenceId != ATIVIDADE_ATRIBUIR_ANALISE)
        return;

    var idPapelResponsavel = "Pool:Role:" + hAPI.getCardValue("idPapelResponsavel");
    var listaUsuarios = new java.util.ArrayList();
    
    listaUsuarios.add(idPapelResponsavel);

    try {
        hAPI.setAutomaticDecision(ATIVIDADE_ANALISAR_SOLIC, listaUsuarios, OBSERVACAO);
    } catch (e) {
        throw "Erro ao transferir a atividade para o papel " + idPapelResponsavel + ": " + e;
    }

}