const td = document.querySelectorAll('td');

for (let tds of td) {
    let answer = 1;
 tds.innerText = answer;
    answer++; 
}

console.log(td);