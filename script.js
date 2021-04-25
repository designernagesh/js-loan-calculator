let loanAmount = document.getElementById("loanAmount"),
    interestRate = document.getElementById("interestRate"),
    yearsPay = document.getElementById("yearsPay"),

    btnCalculate = document.querySelector(".btnCalculate"),
    result = document.querySelector(".result");

    loanAmountError = document.querySelector('.loanAmountError'),
    yearsPayError = document.querySelector('.yearsPayError');
    interestRateError = document.querySelector('.interestRateError'),

    loanAmountError.style.display = 'none';
    yearsPayError.style.display = 'none';
    interestRateError.style.display = 'none';
    result.style.display = 'none';


    calculateEMI = (e) => {      
      e.preventDefault();
      let principle = parseInt(loanAmount.value),
          numberOfYears = parseInt(yearsPay.value),
          rateOfInterest = parseInt(interestRate.value); 
          
          console.log(principle);
          console.log(typeof principle);
          
          if( isNaN(principle) || (principle <= 0) || (principle < 1000)){
            loanAmountError.style.display = 'block';
            yearsPayError.style.display = 'none';
            interestRateError.style.display = 'none';
            return;
          }        
  
          else if( isNaN(numberOfYears) || (numberOfYears <= 0) ){
            loanAmountError.style.display = 'none';
            yearsPayError.style.display = 'block';
            interestRateError.style.display = 'none';
            return;
          }        
  
          else if( isNaN(rateOfInterest) || (rateOfInterest <= 0) ){
            loanAmountError.style.display = 'none';
            yearsPayError.style.display = 'none';
            interestRateError.style.display = 'block';
            return;
          }
                  
          else{
            loanAmountError.style.display = 'none';
            yearsPayError.style.display = 'none';
            interestRateError.style.display = 'none';

            result.style.display = 'block';          
            let interestCalcuated = principle * numberOfYears * (rateOfInterest/100),
              totalAmount =  principle + interestCalcuated,
              monthlyInstallment = (totalAmount / numberOfYears / 12).toFixed(2);

              result.innerHTML = `Total Amount is: <span>${totalAmount}</span> <br>
              Interest for ${numberOfYears} years is: <span>${interestCalcuated}</span> <br>
              and Monthly Installment is: <span>${monthlyInstallment}</span>`;
          }
    }

btnCalculate.addEventListener('click', calculateEMI)