function getValues() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    return { n1, n2 };
}

function add() {
    let { n1, n2 } = getValues();
    document.getElementById("sum-el").textContent = "SUM: " + (n1 + n2);
}

function subs() {
    let { n1, n2 } = getValues();
    document.getElementById("sum-el").textContent = "SUM: " + (n1 - n2);
}

function divi() {
    let { n1, n2 } = getValues();
    document.getElementById("sum-el").textContent = "SUM: " + (n1 / n2);
}

function multi() {
    let { n1, n2 } = getValues();
    document.getElementById("sum-el").textContent = "SUM: " + (n1 * n2);
}
