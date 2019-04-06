var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];


function calculateSalesTax(salesData, taxRates) {
  // Implement your code here

  var applicableTax = 0;
  var finalReport = {};

  // list all objects with empty keys inside of finalReport{}
  for (var i = 0; i < salesData.length; i++) {
    if (!(salesData[i].name in finalReport)) {
      finalReport[salesData[i].name] = {
        totalSales: null,
        totalTaxes: null
      };
    }

    for (var k = 0; k < salesData[i].sales.length; k++) {
      finalReport[salesData[i].name].totalSales += salesData[i].sales[k];
      finalReport[salesData[i].name].totalTaxes += salesData[i].sales[k]*taxRates[salesData[i].province];
    }
  }

  console.log(finalReport);
}

var results = calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/