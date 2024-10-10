/*
Skapa ett program som frågar användaren efter höjd och bredd. Med inmatningsvärden skall programmet räkna ut arean och visa svaret i consolen.

Börja med att göra en flowchart och översätt denna sedan till pseudokod. Parprogrammering 
uppmuntras för att bolla tankar.
*/

let bredd = prompt("ange bredd");
let höjd= prompt("ange höjd") ;

bredd = number(bredd); 
höjd = number(höjd);

let area = bredd * höjd;

console.log(area);
