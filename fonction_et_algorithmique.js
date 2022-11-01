// // Créer une fonction "addition" qui additionne deux nombres et affiche le resultat
// // 1. De quels paramètres ma fonction a t-elle besoin ? deux paramètres, un pour chaque nombre
// // Nommons les de manières compréhensible: number1 et number2

// addition = (number1, number2) => {
//     console.log(number1 + number2)
// }




// addition(1,2) // doit retourner 3
// addition(5,10) // doit retourner 15
// addition(50,150) // doit retourner 200


// // resultat attendu:
// // 3
// // 15
// // 200


// Créer une fonction moyenneAge qui affiche la moyenne d'age des utilisateurs
// resultat attendu: 42.6

const users2023 = [
    {
        name: 'Juan',
        age: 37,
    },
    {
        name: 'Vince',
        age: 37,
    },
    {
        name: 'Dylan',
        age: 15,
    },
    {
        name: 'Robert',
        age: 52,
    },
    {
        name: 'Suzanne',
        age: 72,
    },
]

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


// Comment additionner tous les ages
// Le problème c'est que quand je récupère une valeur, je n'ai plus accès à la valeur pécédente donc je ne peux pas les additionner.

// let moyenneAge = (listeUtilisateurs) => {
//     let result = 0

//     for (let i = 0; i < listeUtilisateurs.length; i++) {        
//         result = result + listeUtilisateurs[i].age
//     }
//     console.log(result / listeUtilisateurs.length)
// }

// moyenneAge(users2023)
// moyenneAge(users2022)
// moyenneAge(users2021)


// Créer une fonction moyenneAge qui affiche la moyenne d'age des utilisateurs majeurs => resulat attendu 49.5 pour users2023, 26.75 pour users2022 et 29.33 pour users2021
//-1 Je récupère les utilisateurs majeur !
// -2 Je vais additionnner leurs âge !
// -3 créer ma fontion moyenneAgeMajeur

// let moyenneAgeMajeur = (listeUtilisateurs) => {
//     let result = 0
//     let numberOfMajors = 0

//     for (let i = 0; i < listeUtilisateurs.length; i++) {
//         if (listeUtilisateurs[i].age >= 18) {
//             result = result + listeUtilisateurs[i].age
//             numberOfMajors = numberOfMajors + 1
//         }
//     }
//     console.log(result / numberOfMajors)
// }

// moyenneAgeMajeur(users2021)
// moyenneAgeMajeur(users2022)
// moyenneAgeMajeur(users2023)

// Créer une fonction qui affiche le nombre d'utilisateur mineur(s) et le nombre d'utilisateur majeur(s)
// Restultat attendu
// Il y a x utilisateur(s) mineurs et y utilisateur(s) majeur(s).

const nombreUtilisateurMajeursetMineurs = (listeUtilisateurs) => {
    let resultUsersMajor = 0;
    let resultUsersMinor = 0;    
    
    for (let i = 0; i < listeUtilisateurs.length; i++) {
        if (listeUtilisateurs[i].age >= 18) {
            resultUsersMajor++;
        }
        else {
            resultUsersMinor++;
        }    
    }    
    console.log(`Il y a ${resultUsersMinor} utilisateur(s) mineur(s) et ${resultUsersMajor} utilisateur(s) majeur(s).`)
}

nombreUtilisateurMajeursetMineurs(users2021)
nombreUtilisateurMajeursetMineurs(users2022)
nombreUtilisateurMajeursetMineurs(users2023)