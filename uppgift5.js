/*
Skapa ett program som konverterar celcius till farenheit. 
Användaren ska ge input (numeriska värden) i celcius som programmet 
sedan ska konvertera till farenheit och skriva ut det som en popup.

Börja med att göra en flowchart och översätt denna sedan till pseudokod. Parprogrammering 
uppmuntras för att bolla tankar.
*/

function convertCtoF(celcius){
    let farenheit = (celcius * 9/5) +32;
    return farenheit;
}
console.log(convertCtoF(-20));