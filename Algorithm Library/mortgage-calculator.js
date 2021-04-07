//calcuate monthly loan payment
var calculate = function (loan) {
    principalAmount = loan.principle.value;
    annualPR = loan.annualPR.value;
    loanTerm = loan.loanTerm.value;

    r = annualPR / 1200;
    a = Math.pow(1 + r, -12 * loanTerm);
    b = 1 - a;
    mp = principalAmount * r / b

    loan.mp.value = mp

    console.log(mp)
}

calculate(100000);