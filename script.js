var nb1;
var nb2;
var op;
var resultat;
nb1 = prompt("Saisissez un nombre :");
nb2 = prompt("Saisissez un deuxième nombre :");
op = prompt("Saisissez un opérateur (+, -, * ou /) :");
if (op != "+" && op != "-" && op != "*" && op != "/"); {
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
    alert("Le résultat est de :", resultat)
}
}