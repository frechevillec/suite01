/*
    Ecrire une fonction "isAllEven",
    qui prend un paramètre un tableau de nombre,
    et qui retourne un nombre:
        - 1 si tous les nombres du tableau sont pair
        - 0 si au moins un nombre du tableau est impair

    CRITERE DE VALIDATION OBLIGATOIRE
    --> Réutiliser la fonction isEven
        que vous aviez codé dans les exercices précédents ;)
        INTERDICTION d'écrire le contenu de isEven dans la même fonction
        Vous devez donc bien avoir 2 fonctions différentes;

*/

/*      Test 1
    Appel à la fonction "isAllEven",
    prenant en paramètre le tableau [4, 5, 6],
    et nous attendons comme résultat 0;
*/

isAllEven([4, 5, 6]);

/*      Test 1
    Appel à la fonction "isAllEven",
    prenant en paramètre le tableau [4, 4, 6, 8, 10, 12],
    et nous attendons comme résultat 1;
*/

isAllEven([4, 4, 6, 8, 10, 12]);

//  écrire votre code sous ce commentaire

function isEven(nb){

    if(nb % 2 === 0){
        return "pair";
    } else {
        return "impair";
    }
}

function isAllEven (tabNb){

    let tabResult = [];
    let resultat = 0;

    for (let i = 0; i < tabNb.length; i++){
        tabResult.push(isEven(tabNb[i]));
    }

    for (let i = 0; i < tabResult.length; i++){
        resultat = tabResult[i] === "impair" ? 0 : 1;
    }

    return resultat;
}

console.log(isAllEven([4, 5, 6, 7])); 
console.log(isAllEven([4, 4, 6, 8, 10, 12]));