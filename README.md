# Salary Simulator Documentation

## Description

This application is built using [Vite](https://vitejs.dev/guide) and [React](https://react.dev/learn), along with libraries like [Jotai](https://jotai.org/docs/introduction), [Clsx](https://github.com/lukeed/clsx#clsx--), and [Tailwind CSS](https://tailwindcss.com/docs/editor-setup) for styling. It uses [`bun`](https://bun.sh) as the package manager, but you can switch as usual.

![Salary simulator](public/screenshot.png)

## Installation

1. Clone into the repository and `cd` into it
2. Run `bun install`

   - If you don't have `bun` installed:

   ```bash
   curl -fsSL https://bun.sh/install | bash
   ```

   - **Or** you can choose a different package manager:
   `pnpm install` | `yarn install` | `npm install`.
     Delete `bun.lockb` in that case.

## Usage

### Development

`bun dev` starts the development server

### Data and the Excel parser

grades.json are the paygrades

```json
"Junior": {
  "monthlyBaseSalary": 2700,
  "minDailyRate": 350,
  ...
  "defaultYearlyGrossSalary": 35168.66
},
"Junior+": {
  ...
```

The defaultYearlyGrossSalary is taken in the result column on parsing.
It is not used by the calculator but is checked against the calculated result when running the tests.

---

ssData.json is social security data

```json
"trancheACeiling": 3377,
...
```

---

There are two ways to update the data:

1. `bun parse`
   This will look for `src/data/spreadsheet.xlsm` and regenerate `src/data/grades.json` and `src/data/ssData.json` according to the spreadsheet data.
   - It is using [exceljs](https://github.com/exceljs/exceljs#contents).
   - The spreadsheet **must** be **named `spreadsheet.xlsm`** and **must** be **placed in `src/data/`**.
   - The spreadsheet is ignored by git, and will not be pushed to the repo.

2. Updating `src/data/grades.json` and `src/data/ssData.json` manually.

---

experience.json is the years to title mapping and **is only updated manually**

```json
  "title": "Junior",
  "minExperience": 0,
  "maxExperience": 2
},
{
  "title": "Junior+",
  ...
```

### Testing

`bun test` runs the tests using

### Production

`bun build` builds the application for production
`bun preview` serves a production build locally

### Other

`bun lint` runs the linter
