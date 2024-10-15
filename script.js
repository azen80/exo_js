/* Exercice 3 - Calculette"
var nb1;
var nb2;
var op;
var resultat;
nb1 = parseInt(prompt("Saisissez un nombre :"));
nb2 = parseInt(prompt("Saisissez un deuxième nombre :"));
op = prompt("Saisissez un opérateur (+, -, * ou /) :");
if (op != "+" && op != "-" && op != "*" && op != "/") {
    alert("Erreur : opérateur invalide");
}
else {
    if (op=="+") {
        resultat = nb1+nb2;
    }
    else if (op=="-") {
        resultat = nb-nb2;
    }
    else if (op=="*") {
        resultat = nb1*nb2;
    }
    else if (op=="/") {
        if (nb2==0) {
            alert("Erreur : division par zéro");
        }
        else {
            resultat = nb1/nb2;
        }

    }
if (resultat !== 0) {
    alert("Le résultat est de :" + resultat)
}
}

*/


/* Boucles Exercice 1 - Saisie
var prenoms =[];
var prenom;

while (true) {
    prenom = prompt("Saisissez un prénom (laissez vide pour terminer) : ")
    
    if (prenom ==="") {
        break;
    }

    prenoms.push(prenom);
}

console.log("Nombre de prénoms saisis : " + prenoms.length);
console.log("Prénoms saisis : ", prenoms);

*/




/* Exercice 2 - Entiers inférieurs à N
var n = parseInt(prompt("Veuillez entrer un nombre :"));

if (!isNaN(n) && n>0) {
    console.log('Nombres inférieurs à n :');
    for (var i=0; i<n; i++) {
        console.log(i);
    }
} else {
    console.log("Veuikkez entrer un nombre entier valide supérieur à 0.");
}

*/




/* Exercice 3 - Moyenne 
let somme = 0;
let compteur = 0;
let nombre;


nombre = parseInt(prompt("Veuillez entrer un nombre (arrêt lors de 0)"));

while (nombre !=0) {
    somme += nombre;
    compteur ++;
    nombre = parseInt(prompt("Veuillez entrer un nombre (arrêt lors de 0)"));
} 
let moyenne = somme/compteur;
alert("La somme est de : " +somme + " et la moyenne est de : "+moyenne)


*/


/* Exercice 4 - Multiples
let N;
let nombre;
let X;
let resultat="";

N = parseInt(prompt("Veuillez entrer un nombre :"));
X = parseInt(prompt("Veuillez entrer un deuxième nombre :"));

for (let nombre = 1; nombre <= N; nombre++) {
  resultat += nombre + "x" + X + "=" + (nombre*X) + "\n";
}
alert(resultat);


*/


// Exercice 5 - Nombre de voyelles, pas réussi

