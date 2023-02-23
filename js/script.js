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
for (let i of companies) {
   document.write(`Компания ${i.name} <br>`)
   document.write(`бьюджет ${i.budget} <br>`)
   let maxMath = 0;
   maxMath = i.expensesPerYear.reduce((a, b) => a + b);
   let maxMathOfProc = Math.round(maxMath + (i.budget / 100 * i.tax)/12);
   let allMaxBudget = Math.round(maxMath * (100 / i.budget));
   let budOfMoth = Math.round(i.budget - maxMath/12);
   document.write(`бьюджет за месяц=${budOfMoth} <br>`);
   document.write(`Все расходы (в месяц)=${Math.round(maxMath/12)} <br>`);
   document.write(`Все расходы c налогами=${maxMathOfProc} <br>`);
   document.write(`соотношение бьюджета и расходов в процентах ${allMaxBudget + "%"} <br>`);
   document.write(`<hr>`)
} /* /for */

// for (let i of companies) {
//    let maxMath = i.expensesPerYear.reduce((a, b) => a + b);
//    let allMaxBudget = maxMath * (100 / i.budget);
//    console.log(allMaxBudget);
// }
// b --- 100
// max --- ?