1 - Je crée mon repo sur Github
    . https://github.com/
    . Tu cliques sur l'icone rond en haut à droite de l'écran
    . Cliquez sur your repositories
    . Cliquez sur new en vert
    . Tu mets un nom
    . Tu choisis privé ou public
    . description facultative
    . Cliquez sur create repository

2 - Maintenat que le repo est créé sur github, on va relier ce repo à notre travail en local
    . On se place dans VSCODE a la racine du projet sur lequel on travail (dans le terminal)
    . On va initialiser un repo github: dans le terminal on tape: git init
    - On va ajouter les fichiers locaux (le travail en local, sur TA machine) dans une pré-sauvegarde qu'on pourra commit
        . git add .  (ne pas oublier l'espace entre add et .)
        . LE . veut dire "ici", ca veut dire TOUS les fichiers qui sont "ici"
    . On va commit:
        . Un commit c'est une sauvegarde d'un point d'étape de ton projet (le meme principe qu'une sauvegarde dans un jeu vidéo)
        . On tape donc dans le terminal git commit -m "mon commentaire" (maintenant ton travail est sauvegardé mais pas encore en ligne)
    - On va maintenant spécifier sur quelle branche travailler (une branche c'est un endroit ou tu travailles parallèlement au tronc principale)
        . Au début d'un projet il n'y a qu'une seule branche qui s'appelle main
        . On va donc taper dans le terminal git branch -M main (on précise que main est notre branch principale)
    - Maintenant qu'on a défini la branche principale, on va créer le lien entre ton repo en local et le repo sur github.
        . On appelle ce lien le "remote"
        . On tape dans le terminal : git remote add origin "le lien de ton repo github"
    - Maintenant que le lien existe, on peut pousser (push) ton travail sur le repo en ligne => github
        . On tape dans le terminal: git push -u origin main (littéralement: pousse mon travail sur origin main (la branche))

    - On peut vérifier si on a bien fait le travail en tapant: git status
    
Désormais a chaque fois qu'on voudra effectuer une sauvegarde de notre travail, on fera:
- git add .  (on ajoute les fichiers à notre prochain commit)
- git commit -m "mon commentaire" (on sauvegarde en local nos modifications)
- git push (on pousse le travail en ligne donc sur github)