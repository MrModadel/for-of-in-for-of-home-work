let companies = [
   {
      name: 'sheroz_io',
      budget: 75000,
      tax: 12,
      expensesPerYear: [5000, 3000, 25000]
   },
   {
      name: 'shavkat_mnogogovority',
      budget: 125000,
      tax: 14,
      expensesPerYear: [10000, 4500, 60000]
   },
   {
      name: 'kamoliddin_posuda',
      budget: 150000,
      tax: 12,
      expensesPerYear: [70000, 2000, 15000]
   },
   {
      name: 'azamat_niche',
      budget: 90000,
      tax: 7,
      expensesPerYear: [21000, 1000, 6000]
   },
   {
      name: 'muhammad',
      budget: 80000,
      tax: 14,
      expensesPerYear: [10000, 500, 1680]
   },
   {
      name: 'firuz_nosbiznes',
      budget: 195000,
      tax: 21,
      expensesPerYear: [7000, 15000, 5000]
   },
   {
      name: 'azim_trans_mchj',
      budget: 200000,
      tax: 12,
      expensesPerYear: [70000, 12000, 5000]
   },
   {
      name: 'malika_beaty_salon',
      budget: 150000,
      tax: 12,
      expensesPerYear: [40000, 5000, 7000]
   },
]
// let expensesPerMoth, expensesPerMothProc, expensesPerMothP, budgetMoth, all, proc, allexpensesPerMothProc;
// all = 0;
// allexpensesPerMothProc = 0;
// for (let i of companies) {
//    document.write(`Компания ${i.name} <br>`)
//    document.write(`бьюджет ${i.budget} <br>`)
//    for (let k of i.expensesPerYear) {
//       for (let k of i.expensesPerYear) {
//          allexpensesPerMothProc += k
//       }
//       expensesPerMothProc = Math.round((allexpensesPerMothProc / 12) / 100 * i.tax);
//       console.log(expensesPerMothProc);
//       expensesPerMoth = Math.round(allexpensesPerMothProc / i.tax);
//       expensesPerMothAll = Math.round(expensesPerMoth + expensesPerMothProc);
//       all += expensesPerMothAll;
//       budgetMoth = i.budget - all;
//       proc = (all * 100 / i.budget).toString().slice(0, 5);
//       document.write(`расходы за месяц (включая налог)=${expensesPerMothAll} от ${k} <br> `);
//       document.write(`расходы за месяц=${expensesPerMoth} от ${k} <br> `);
//    }
//    document.write(`бьюджет за месяц=${budgetMoth} <br>`);
//    document.write(`Все расходы=${all} <br>`);
//    document.write(`соотношение бьюджета и расходов в процентах ${"-" + proc + "%"} <br>`);
//    document.write(`<hr>`)
// } /* /for */

for (let i of companies) {
   let maxMath = i.expensesPerYear.reduce((a, b) => a + b) / 12 + i.tax / 100 * i.budget / 12;
   let allMaxBudget = maxMath / i.budget * 100;
   console.log(allMaxBudget);
}
