function saveLOCAL() {
    var htmlOutput = HtmlService.createHtmlOutputFromFile('download.html')
        .setWidth(600)
        .setHeight(140);
    DocumentApp.getUi().showModalDialog(htmlOutput, 'Salve no seu computador');
}