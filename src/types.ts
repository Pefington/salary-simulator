import Excel from 'exceljs';

export type CellCoord = number | string;
export type Euros = number;
export type Percentage = number;
export type Sheet = Excel.Worksheet;

export type PayGrade = {
  monthlyBaseSalary: Euros;
  yearlyBaseSalary: Euros;
  minDailyRate: Euros;
  dailyRate: Euros;
  transport: Euros;
  mutual: Euros;
  ticketsRestaurant: Euros;
};

export type PayGrades = Record<string, PayGrade>;
