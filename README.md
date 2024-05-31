# angular-985-1046

## Back-end
Pour le back-end, les tâches ont été réparties comme suit :
- Ndriamanarina Eric Charly : 
  - Création de la fonction de connexion (login) dans le service d'authentification (api/login).
  -  Création de la fonction generateAccessToken pour générer un jeton d'accès à chaque connexion.
  -  Création du modèle "assignment" (api/assignment) avec les opérations CRUD correspondantes dans le service et le contrôleur.
  -  Mise en place des routes avec la protection du jeton.

- Razafindramasy Theo Guillaume :
  - Création du modèle "matiere" (api/matiere) avec les opérations CRUD correspondantes dans le service et le contrôleur.
  - Création du modèle "auteur" (api/auteur) avec les opérations CRUD correspondantes dans le service et le contrôleur.
  -  Mise en place des routes avec la protection du jeton.
  -  Création de la middleware authenticateToken pour vérifier le jeton d'authentification.
  -  Création de la middleware upload pour gérer les téléchargements d'images

## Front-end
Pour le front-end, les tâches ont été réparties comme suit :
- Ndriamanarina Eric Charly :
  - Liste d'assignement et pagination
  - Drag and drop et remise de note 
  - Assignement service
  - Update matiere
  - Ajout de matiere
  - Navbar

- Razafindramasy Theo Guillaume :
  - Liste matiere avec les pagination
  - Liste etudiant avec pagination
  - Ajout d'etudiant
  - Auth service 
  - Interface de login et la gestion de token
  - Snack bar service
  - Side nav
  - Protection des urls
