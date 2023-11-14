import Excel from 'exceljs';

import { CellCoord, Euros, PayGrades, Percentage, Sheet } from '../types';
import { writeJson } from './jsonWriter';
import { resolvePath } from './pathResolver';

const workbook = new Excel.Workbook();

try {
  await workbook.xlsx.readFile(resolvePath('../data/spreadsheet.xlsm'));
} catch (error) {
  console.log(error);
}

const gridSheet = workbook.getWorksheet(1);
const dataSheet = workbook.getWorksheet(5);

if (!gridSheet || !dataSheet) throw new Error('Could not find spreadsheet');

const getValue = (sheet: Sheet, cell: CellCoord) => {
  const cellValue = sheet.getCell(cell).value;

  if (typeof cellValue === 'object' && cellValue !== null && 'result' in cellValue) {
    return cellValue.result;
  }

  return cellValue;
};

export const ssData = {
  trancheACeiling: getValue(dataSheet, 'B3') as Euros,
  trancheAContributionRate: getValue(dataSheet, 'C3') as Percentage,
  trancheBContributionRate: getValue(dataSheet, 'C4') as Percentage,
  cover: getValue(dataSheet, 'C5') as Percentage,
};

export const payGrades: PayGrades = {};

/**
 * Worksheet.eachRow() skips empty rows by default
 * add { includeEmpty: true } as first param to include empty rows
 * https://github.com/exceljs/exceljs#rows
 */
gridSheet.eachRow((_, rowNumber) => {
  const firstRow = 5;
  const totalRow = 16;

  if (rowNumber >= firstRow && rowNumber < totalRow) {
    const gradeName = getValue(gridSheet, `A${rowNumber}`) as string;

    const sheetResult = getValue(gridSheet, `K${rowNumber}`) as Euros;

    const gradeValues = {
      monthlyBaseSalary: getValue(gridSheet, `B${rowNumber}`) as Euros,
      minDailyRate: getValue(gridSheet, `H${rowNumber}`) as Euros,
      transport: getValue(gridSheet, `T${rowNumber}`) as Euros,
      mutual: getValue(gridSheet, `V${rowNumber}`) as Euros,
      ticketsRestaurant: getValue(gridSheet, `X${rowNumber}`) as Euros,
      defaultYearlyGrossSalary: parseFloat(sheetResult.toFixed(2)),
    };

    payGrades[gradeName] = gradeValues;
  }
});

writeJson(payGrades, 'grades.json');
writeJson(ssData, 'ssData.json');
