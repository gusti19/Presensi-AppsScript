function createAndRenameSheets() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var masterSheet = spreadsheet.getSheetByName("Master"); // Ubah sesuai dengan nama sheet master Anda
  
  // Array nama sheet dan nilai filter
  var sheetsData = [
    { name: "X TKJ", filterValue: "X TKJ" },
    { name: "X SIJA", filterValue: "X SIJA" },
    { name: "X RPL", filterValue: "X RPL" }
  ];
  
  // Loop untuk membuat dan menamai sheet baru
  for (var i = 0; i < sheetsData.length; i++) {
    var sheetName = sheetsData[i].name;
    var filterValue = sheetsData[i].filterValue;
    
    var newSheet = spreadsheet.insertSheet(sheetName); // Membuat sheet baru
    var range = newSheet.getRange("A1"); // Mendapatkan range cell A1 di sheet baru
    range.setFormula('=FILTER(Master!A:H, Master!D:D="' + filterValue + '")'); // Set rumus pada cell A1
  }
}
