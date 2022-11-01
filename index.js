const users2021 = [
    {
        name: 'Juan',
        age: 35
    },
    {
        name: 'Vince',
        age: 35
    },
    {
        name: 'Dylan',
        age: 17
    },
    {
        name: 'Bryan',
        age: 18
    },
    {
        name: 'kenny',
        age: 15
    },
]

const users2022 = [
    {
        name: 'Juan',
        age: 35
    },
    {
        name: 'Vince',
        age: 35
    },
    {
        name: 'Dylan',
        age: 18
    },
    {
        name: 'Bryan',
        age: 19
    },
    {
        name: 'kenny',
        age: 16
    },
]

// Afficher dans la console, la liste des utilisateurs majeurs, ainsi:
// Les utilisateurs majeurs sont:
// Juan
// Vince

// console.log(`Les utilisateurs sont : `)

// for (let i = 0 ; i < users2021.length; i++) {
//     if (users2021[i].age >= 18) {
//         console.log(users2021[i].name)
//     }
// }

// Refaire la même chose pour les DEUX arrays

// console.log(`Les utilisateurs sont : `)

// for (let i = 0 ; i < users2021.length; i++) {
//     if (users2021[i].age >= 18) {
//         console.log(users2021[i].name)
//     }
// }


// console.log(`Les utilisateurs sont : `)

// for (let i = 0 ; i < users2022.length; i++) {
//     if (users2022[i].age >= 18) {
//         console.log(users2022[i].name)
//     }
// }

// Ceci n'est pas bon car ça ne respecte pas le principe de DRY: Don't Repeat Yourself
// Traduit grossièrement par: On ne duplique pas de code !
// On va donc factoriser (mettre sous forme de fonction) notre code !
// Notre objectif étant d'éviter la duplication et donc réduire le nombre de lignes de code

// Rappel de syntaxe
// maFonction = () => {

// }

// usersMajor = (usersArray) => {
//     console.log(`Les utilisateurs sont : `)

//     for (let i = 0; i < users2021.length; i++) {
//         if (users2021[i].age >= 18) {
//             console.log(users2021[i].name)
//         }
//     }
// }

// // rappel de syntaxe pour l'éxécution d'une fontion:
// // maFonction()

// usersMajor() 

// La fonction fonctionne, mais elle n'est pas paramétrable elle éxécute son code de manière brute à partir de variable qui lui sont extérieurs
// exemple: elle utilise users2021 qui est une variable extérieur à la fonction. Elle ne pourra donc être éxécutée que via cette variable
// Or, nous on veut pouvoir utiliser cette fonction pour n'importe quelle tableau d'utilisateurs.Afficher
// Nous devons utiliser des paramètres !
// Pour définir nos paramètres, on réfléchit aux variables dont la fonction a besoin, ici : users2021 => un tableau contenant des utilisateurs
// On nomme intelligement nos paramètres pour que les autres développeurs puissent comprendre à quoi ils correspondent.
// Maintenant qu'on a défini notre paramètre on va remplacer les variables extérieures de notre fonction par ce paramètre.


usersMajor = (usersArray) => {
    console.log(`Les utilisateurs sont : `)

    for (let i = 0; i < usersArray.length; i++) {
        if (usersArray[i].age >= 18) {
            console.log(usersArray[i].name)
        }
    }
}

// Maintenant on éxécute la fonction pour tester

// usersMajor()

// Attention lors de l'éxécution il faut remplacer le paramètre par un arguement => c'est à dire une variable qui contient des données réelles.
// Ici, notre objectif est de lister les utilisateurs majeur, on devra donc mettre en argument de la fonction : users2021 et users2022

usersMajor(users2021, users2022) // <=== Pas bon !!

// Problème, ca n'a marché que pour le premier, pourquoi ?
// Notre fonction attend un seul paramètre, et on lui en a donné 2
// Le deuxième n'est donc pas pris en compte.
// La solution est donc simple: éxécuter deux fois la fonction avec deux arguments différents.

usersMajor(users2021)    // <=== Oui !
usersMajor(users2022)


// Conclusion: une fonction évite de répéter du code inutilement
// SI j'avais un troisième tableau d'utilisateur, je me contenterai d'éxécuté la fonction.
// exemple :

const users2023 = [
    {
        name: 'Juan',
        age: 37
    },
    {
        name: 'Vince',
        age: 37
    },
    {
        name: 'Dylan',
        age: 19
    },
    {
        name: 'Bryan',
        age: 20
    },
    {
        name: 'kenny',
        age: 17
    },
]

usersMajor(users2023)

// exo terminé, on pousse sur github
// git add .
// git commit -m "exo terminé"
// git push