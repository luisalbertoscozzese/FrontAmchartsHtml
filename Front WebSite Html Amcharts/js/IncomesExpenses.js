fetch('https://localhost:7035/Home/PendingChargessOfTheWeek')
  .then(response => response.json())
  .then(PendingChargessOfTheWeek => {
    const PendingChargessOfTheWeekDiv = document.querySelector('#PendingChargessOfTheWeek');
    PendingChargessOfTheWeekDiv.textContent = PendingChargessOfTheWeek[0].Total.toFixed(2);
  });

  fetch('https://localhost:7035/Home/SalesBillingForTheWeek')
  .then(response => response.json())
  .then(SalesBillingForTheWeek => {
    const SalesBillingForTheWeekDiv = document.querySelector('#SalesBillingForTheWeek');
    SalesBillingForTheWeekDiv.textContent = SalesBillingForTheWeek[0].Total.toFixed(2);
  });

  fetch('https://localhost:7035/Home/SalesBillsOfTheMonth')
  .then(response => response.json())
  .then(SalesBillsOfTheMonth => {
    const SalesBillsOfTheMonthDiv = document.querySelector('#SalesBillsOfTheMonth');
    SalesBillsOfTheMonthDiv.textContent = SalesBillsOfTheMonth[0].Total.toFixed(2);
  });

  fetch('https://localhost:7035/Home/PendingPaymentsForTheWeek')
  .then(response => response.json())
  .then(PendingPaymentsForTheWeek => {
    const PendingPaymentsForTheWeekDiv = document.querySelector('#PendingPaymentsForTheWeek');
    PendingPaymentsForTheWeek.textContent = PendingPaymentsForTheWeek[0].Total.toFixed(2);
  });

  fetch('https://localhost:7035/Home/PurchasesBillingForTheWeek')
  .then(response => response.json())
  .then(PurchasesBillingForTheWeek => {
    const PurchasesBillingForTheWeekDiv = document.querySelector('#PurchasesBillingForTheWeek');
    PurchasesBillingForTheWeekDiv.textContent = PurchasesBillingForTheWeek[0].Total.toFixed(2);
  });

  fetch('https://localhost:7035/Home/PurchasesBillsOfTheMonth')
  .then(response => response.json())
  .then(PurchasesBillsOfTheMonth => {
    const PurchasesBillsOfTheMonthDiv = document.querySelector('#PurchasesBillsOfTheMonth');
    PurchasesBillsOfTheMonthDiv.textContent = PurchasesBillsOfTheMonth[0].Total.toFixed(2);
  });