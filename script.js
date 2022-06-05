
const resultEl = document.querySelector('.result');
const confirmEl = document.querySelector('.equal')

function insert(num) {
  resultEl.innerHTML += num;
}

function clean() {
 resultEl.innerHTML = '';
}

function backspace() {
  if(resultEl.textContent) {
    let resultOnIt = document.getElementById('resultIn').innerHTML;
    resultEl.innerHTML = resultOnIt.substring(0, resultOnIt.length -1)
  }
}

function confirm(){
  if(resultEl.textContent != 'Erro') {
    document.getElementById('resultIn').innerHTML = eval(resultEl.innerHTML)
  }
}

