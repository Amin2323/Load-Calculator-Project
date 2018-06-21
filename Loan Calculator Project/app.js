// event listner to the calculate button
document.querySelector('#loan-form').addEventListener('submit', function(e){
  document.getElementById('loading').style.display = 'block';
  document.getElementById('results').style.display = 'none';

  setTimeout(loanCalculator, 2000);
  e.preventDefault();
});

function loanCalculator(e){
   // console.log('loan...');
    // variables on user interface
    const amount = document.querySelector('#amount');
    const interest = document.querySelector('#interest');
    const year = document.querySelector('#years');
    const monthlypayment = document.querySelector('#monthly-payment');
    const totalpayment = document.querySelector('#total-payment');
    const totalinterest = document.querySelector('#total-interest');

    const floatamount = parseFloat(amount.value);
    const interestcalculation = parseFloat(interest.value) /100 /12;
    const paymentcalculation = parseFloat(year.value) * 12;

    //monthly calculation
    const monthlypay = Math.pow(1+interestcalculation, paymentcalculation);
    const monthly = (floatamount*monthlypay* interestcalculation)/(monthlypay-1);

    if(isFinite(monthly)){
      monthlypayment.value = monthly.toFixed(2);
      totalpayment.value = (monthly*paymentcalculation).toFixed(2);
      totalinterest.value = ((monthly * paymentcalculation)-floatamount).toFixed(2);

      //show result 
      document.getElementById('results').style.display = 'block';
      document.getElementById('loading').style.display = 'none';

    }else{
      //console.log('please check your numbers')
      showerror('please check your numbers');
    }
  
}
//show error using dom 
function showerror(error){
  document.getElementById('results').style.display = 'none';
  document.getElementById('loading').style.display = 'none';

  const errordiv = document.createElement('div');

  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');
  errordiv.className = 'alert alert-danger';
  errordiv.appendChild(document.createTextNode(error));
  card.insertBefore(errordiv, heading);
  setTimeout(errorRemov, 3000);
    
  }
//}
  function errorRemov(){
    document.querySelector('.alert').remove();
  }

