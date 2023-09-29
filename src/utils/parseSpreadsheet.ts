import Excel from 'exceljs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

import { writeJson } from './writeJson';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const excelPath = path.resolve(__dirname, '../data/Calcul salaires.xlsm');

const workbook = new Excel.Workbook();

try {
  await workbook.xlsx.readFile(excelPath);
} catch (error) {
  console.log(error);
}

const gridSheet = workbook.getWorksheet(1);
const dataSheet = workbook.getWorksheet(5);

type CellCoord = number | string;
type Euros = number;
type Percentage = number;
type Sheet = Excel.Worksheet;

export type PayGrade = {
  monthlyBaseSalary: Euros;
  yearlyBaseSalary: Euros;
  minDailyRate: Euros;
  transport: Euros;
  mutual: Euros;
  ticketRestaurant: Euros;
};

type PayGrades = {
  [name: string]: PayGrade;
};

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

    const gradeValues = {
      monthlyBaseSalary: getValue(gridSheet, `B${rowNumber}`) as Euros,
      yearlyBaseSalary: getValue(gridSheet, `D${rowNumber}`) as Euros,
      minDailyRate: getValue(gridSheet, `H${rowNumber}`) as Euros,
      dailyRate: getValue(gridSheet, `AB${rowNumber}`) as Euros,
      transport: getValue(gridSheet, `T${rowNumber}`) as Euros,
      mutual: getValue(gridSheet, `V${rowNumber}`) as Euros,
      ticketRestaurant: getValue(gridSheet, `X${rowNumber}`) as Euros,
    };

    payGrades[gradeName] = gradeValues;
  }
});

writeJson(payGrades, 'grades.json');
writeJson(ssData, 'ssData.json');
