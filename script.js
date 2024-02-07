const aa = document.getElementById("a")
const bb = document.getElementById("b")
const cc = document.getElementById("c")
const form = document.querySelector("form");
const result = document.getElementById("result");

const d = (a, b, c) => b * b - 4 * a * c;
const quad = (a, b, c) => {
  const D = d(a, b, c);
  let x1 = 0;
  let x2 = 0;
  if (a != 0) {
    if (D > 0) {
      x1 = (-b + Math.sqrt(D(a, b, c))) / (2 * a);
      x2 = (-b - Math.sqrt(D(a, b, c))) / (2 * a);
      return `x1 = ${x1}  \nx2 = ${x2}`;
    } else if (D == 0) {
      return -b / (2 * a);
    } else {
        let re =-b/(2*a);
        let im = Math.sqrt(-D) / (2 * a);
      return `x₁ = ${re} + i  ${im}; x₂ = ${re} - i  ${im}`;
    } 
  } else {
    return "It is not quadratic equation";
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  result.innerText = quad(aa.value, bb.value, cc.value)
});

