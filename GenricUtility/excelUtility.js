import excel from 'exceljs'

//reading single data from exccel
export async function readDatafrom(path,sheetname,rowcount,cellcount) {
    let book=new excel.Workbook()
    await book.xlsx.readFile(path)
    let sheet=book.getWorksheet(sheetname)
    let data=sheet.getRow().getCell(cellcount).toString()
    return data
}

export async function readMultipleData(path,sheetname,columnCount,rowCount) {
   let book=new excel.Workbook()
    await book.xlsx.readFile(path)
    let sheet=book.getWorksheet(sheetname)
    for (let i = 1; i <= sheet.columnCount; i++) {
        for (let j = 1; j <= sheet.rowCount; j++) {
            let data = sheet.getRow(j).getCell(i).toString()
            console.log(data);
        }
    }
}

export async function writeMultipledataFromExcel(path,sheetName,data){
    let book=new excel.Workbook();
    await book.xlsx.readFile(path)
    let sheet=book.addWorksheet(sheetName)
     for (let i = 0; i < data.length; i++) {
        sheet.addRow([i + 1, data[i]]);
    }
 await book.xlsx.writeFile(path)
}