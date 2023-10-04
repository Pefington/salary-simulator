import Excel from 'exceljs';

export type CellCoord = number | string;
export type Euros = number;
export type Percentage = number;
export type Sheet = Excel.Worksheet;
export type Years = number;

export type PayGrade = {
  monthlyBaseSalary: Euros;
  minDailyRate: Euros;
  transport: Euros;
  mutual: Euros;
  ticketsRestaurant: Euros;
  defaultYearlyGrossSalary: Euros;
};

export type PayGrades = Record<string, PayGrade>;
