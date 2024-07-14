// Using functions to add and display tax

var sale1 = { price: 140, taxRate: 15 };
var sale2 = { price: 40, taxRate: 10 };
var sale3 = { price: 120, taxRate: 20 };
var sale4 = { price: 200, taxRate: 18 }; // Adding a fourth sale

var sale;
var displaySale;


function processSale(sale) {
    
    sale.tax = sale.price * sale.taxRate / 100;
    
    sale.total = sale.price + sale.tax;

    
    console.log("Price = $" + sale.price);
    console.log("Tax @ " + sale.taxRate + "% = $" + sale.tax);
    console.log("Total cost = $" + sale.total);
    console.log("------------------------------");
}


sale = sale1;
processSale(sale);

sale = sale2;
processSale(sale);

sale = sale3;
processSale(sale);

sale = sale4;
processSale(sale);



/* Further Adventures
 *
 * 1) Add a fourth sale object.
 *
 * 2) Update the code so that tax is calculated
 *    and the new sale is displayed.
 *
 * Having two separate functions to calculate tax
 * and display sales is good, each has a specific purpose.
 * Having to call both functions
 * for each sale object is not so good.
 *
 * 3) Can you change the code so that you don't
 *    have to call both functions for every sale?
 *
 */