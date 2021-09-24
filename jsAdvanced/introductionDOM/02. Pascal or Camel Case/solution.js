function solve() {
  let text = document.getElementById('text').value;
  let currentCase = document.getElementById('naming-convention').value;
  text = text.toLowerCase().split(' ');
  if (currentCase == "Camel Case") {
    for (let i = 1; i<text.length; i++) {
      text[i] = text[i][0].toUpperCase() + text[i].slice(1);
    }
  }else if(currentCase == "Pascal Case") {
    for (let i = 0; i<text.length; i++) {
      text[i] = text[i][0].toUpperCase() + text[i].slice(1);
    }
  }else {
    text = ["Error!"];
  }
  document.getElementById('result').textContent = text.join('');
}