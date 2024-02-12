function createAndRenameSheets() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var masterSheet = spreadsheet.getSheetByName("Master"); // Ubah sesuai dengan nama sheet master Anda
  
  // Loop untuk membuat dan menamai sheet baru
  for (var i = 1; i <= 9; i++) {
    var sheetName = "X " + i;
    var filterValue = "X " + i;
    
    var newSheet = spreadsheet.insertSheet(sheetName); // Membuat sheet baru
    var range = newSheet.getRange("A1"); // Mendapatkan range cell A1 di sheet baru
    range.setFormula('=FILTER(Master!A:H, Master!D:D="' + filterValue + '")'); // Set rumus pada cell A1
  }
  
  for (var j = 1; j <= 10; j++) {
    var sheetName = "XI " + j;
    var filterValue = "XI " + j;
    
    var newSheet = spreadsheet.insertSheet(sheetName); // Membuat sheet baru
    var range = newSheet.getRange("A1"); // Mendapatkan range cell A1 di sheet baru
    range.setFormula('=FILTER(Master!A:H, Master!D:D="' + filterValue + '")'); // Set rumus pada cell A1
  }
}
