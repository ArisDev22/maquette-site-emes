# EMES — École des Métiers de la Santé de Bamougoum

Maquette de site vitrine **statique** réalisée pour être présentée à la direction de
l'École des Métiers de la Santé (EMES) de Bamougoum, près de Bafoussam (Cameroun).

> ⚠️ **Maquette de démonstration.** Ce site n'est pas le site officiel de l'établissement.
> Les informations institutionnelles (filières, diplômes, durées, agréments, frais,
> calendrier, coordonnées) n'ont **pas** été inventées : elles sont signalées comme
> « à confirmer » dans les pages et doivent être fournies par la direction.

---

## 1. Contenu du dossier

```text
emes-bamougoum/
│
├── index.html        Page d'accueil complète (une seule page, sections ancrées)
├── style.css         Feuille de style unique (CSS3, responsive, accessibilité)
├── script.js         JavaScript natif (menu, formulaire, retour en haut)
│
├── README.md         Ce fichier
│
└── img/
    ├── logo.png              Logo affiché dans l'en-tête et le pied de page
    ├── favicon.png           Icône d'onglet
    ├── hero-sante.jpg        Photographie de la section d'accueil
    ├── ecole-exterieur.jpg   Présentation de l'école / galerie
    ├── formation-sante.jpg   Galerie — enseignements théoriques
    ├── travaux-pratiques.jpg Galerie — travaux pratiques
    ├── salle-cours.jpg       Galerie — salles de cours
    ├── equipe-pedagogique.jpg Galerie — plateau technique
    ├── etudiants.jpg         Galerie — vie étudiante
    ├── formation-1.jpg       Carte « Filière de soins »
    ├── formation-2.jpg       Carte « Filière biomédicale et laboratoire »
    ├── formation-3.jpg       Carte « Filière santé communautaire »
    ├── actualite-1.jpg       Carte d'actualité (exemple)
    ├── actualite-2.jpg       Carte d'actualité (exemple)
    └── actualite-3.jpg       Carte d'actualité (exemple)
```

---

## 2. Ouvrir le projet dans Visual Studio Code

### Méthode simple (aucune installation)

1. Décompresser l'archive `emes-bamougoum.zip` où vous le souhaitez.
2. Ouvrir **Visual Studio Code**.
3. Menu **Fichier → Ouvrir le dossier…**, puis sélectionner le dossier `emes-bamougoum`.
4. Ouvrir `index.html`.
5. Ouvrir l'aperçu : clic droit dans l'éditeur → **Ouvrir avec Live Server**
   (extension *Live Server* de Ritwick Dey), ou clic droit → **Reveal in File Explorer**,
   puis double-clic sur `index.html` pour l'ouvrir dans un navigateur.

> Le site fonctionne aussi par simple double-clic sur `index.html` : toutes les
> ressources sont locales et aucun serveur n'est requis.

### Extensions utiles (facultatives)

| Extension | Éditeur | Utilité |
|---|---|---|
| Live Server | Ritwick Dey | Rechargement automatique du navigateur |
| Prettier | Prettier | Formatage de HTML/CSS/JS |
| axe DevTools | Deque | Vérification de l'accessibilité |

### Structure technique

- **Aucun framework** : ni React, ni Vue, ni Angular, ni Bootstrap, ni Tailwind, ni jQuery.
- Aucune dépendance externe, aucune police distante, aucun CDN.
- Chemins **relatifs** uniquement (`img/…`, `style.css`, `script.js`).
- Le site s'ouvre donc correctement hors ligne et depuis n'importe quel dossier.

---

## 3. Palette et identité visuelle

Définie dans `style.css`, section `:root` :

| Rôle | Variable CSS | Code |
|---|---|---|
| Vert médical (dominant) | `--vert-medical` | `#23845B` |
| Vert foncé | `--vert-fonce` | `#15543D` |
| Vert clair (fonds) | `--vert-clair` | `#EAF5EF` |
| Rose secondaire (accents) | `--rose` | `#E889AA` |
| Rose pâle | `--rose-pale` | `#FCEAF1` |
| Blanc | `--blanc` | `#FFFFFF` |
| Gris du texte | `--texte` | `#46515B` |
| Fond général | `--fond` | `#F7F9F8` |

Le logo est utilisé **tel quel**, sans filtre ni recoloration, à ses proportions d'origine
(`object-fit: contain`).

---

## 4. ⚠️ Statut du fichier `img/logo.png` — À LIRE ATTENTIVEMENT

**Le logo authentique de l'EMES n'a pas pu être récupéré.** Le fichier `img/logo.png`
livré aujourd'hui est un **placeholder neutre** : il porte le texte
« EMPLACEMENT DU LOGO OFFICIEL — Le logo authentique de l'EMES n'a pas pu être récupéré
depuis une source fiable ». Il **n'est pas** une reproduction ni une imitation du logo
de l'établissement, et il n'a **pas** été généré par intelligence artificielle.

### Démarche réellement effectuée

| Piste | Outil / méthode | Résultat |
|---|---|---|
| Document `fr.scribd.com/document/898447808/cc-SL-SF1` cité dans la demande | Outil de découverte de ressources | Échec d'extraction |
| Même document | Lecture + extraction de questions | Page bloquée (« is verifying your browser ») |
| Même document | Téléchargement direct (curl) | Page vide — 3 Ko |
| Même document | Embed Scribd `/embeds/…/content` | Page anti-robot uniquement |
| Même document | Proxys publics (allOrigins, codetabs) | Erreur 522 |
| Même document | Lecteur de lisibilité r.jina.ai | Erreur 403 |
| Même document | Capture d'écran serveur (2 tentatives) | Écran « verifying your browser » |
| Page Facebook « Ecole des Métiers de la Santé de Bamougoum » (ID 61594759053079) | Lecture, lecture mobile, API publique de l'image de profil | Bloqué (403) ; l'API ne renvoie que l'avatar générique Facebook |
| Recherche d'images web (« EMES », « Bamougoum ») | Outil de recherche d'images (10 requêtes) | Aucun résultat correspondant au logo |
| Recherche web (12 requêtes) | Moteurs de recherche | Les pages trouvées affichent l'**en-tête texte** de l'école (« ÉCOLE DES MÉTIERS DE LA SANTÉ DE BAMOUGOUM / SCHOOL OF HEALTH CAREERS (EMES) ») mais **aucune image de logo exploitable** |

**Conclusion :** ces sources ne diffusent pas le fichier image du logo sous une forme
téléchargeable. Aucune substitution n'a été fabriquée, conformément à la consigne.

### Comment finaliser le logo

1. Demander à la direction le fichier source du logo (`.png` transparent ou `.ai`/`.svg`
   de préférence), même une photographie nette de l'en-tête papier suffit dans un premier temps.
2. Placer le fichier dans `img/` et le renommer `logo.png`.
3. Régénérer l'icône d'onglet à partir du logo :
   ```bash
   python3 -c "from PIL import Image; im=Image.open('img/logo.png').convert('RGBA'); \
   im.thumbnail((256,256)); im.save('img/favicon.png')"
   ```
4. Aucune autre modification n'est nécessaire : l'en-tête, le pied de page et le favicon
   utilisent déjà `img/logo.png` et `img/favicon.png`.

Le logo recommandé comporte, d'après la description fournie : un symbole graphique médical,
le sigle **« EMES » en vert** et la mention **« École des métiers de la santé »**.

---

## 5. Sources et licences des photographies

Les photographies sont des **illustrations génériques** du domaine de la formation sanitaire.
Elles **ne représentent pas** l'EMES de Bamougoum et doivent être remplacées par les vues
réelles de l'établissement avant toute mise en ligne publique. Fichier par fichier :

| Fichier local | Source (auteur / collection) | Page d'origine | Licence annoncée |
|---|---|---|---|
| `img/hero-sante.jpg` | UCT News — University of Cape Town | https://www.news.uct.ac.za/article/-2024-03-22-infrastructure-and-innovation-for-a-healthy-africa | Contenu éditorial — vérifier l'autorisation avant usage commercial |
| `img/ecole-exterieur.jpg` | World Bank Photo Collection (Flickr) | https://www.flickr.com/photos/worldbank/5320868551 | CC BY-NC-ND 2.0 |
| `img/formation-sante.jpg` | World Bank Photo Collection (Flickr) | https://www.flickr.com/photos/worldbank/26371597594 | CC BY-NC-ND 2.0 |
| `img/travaux-pratiques.jpg` | PICRYL (archives fédérales américaines) | https://picryl.com/media/nursing-students-practice-measuring-vital-signs-at-11dcec | Domaine public |
| `img/salle-cours.jpg` | PxHere | https://pxhere.com/en/photo/544664 | CC0 / domaine public |
| `img/equipe-pedagogique.jpg` | University of Mississippi Medical Center | https://umc.edu/son/Current%20Students/Clinical-Skills-and-Sim-Labs.html | Contenu éditorial — vérifier l'autorisation |
| `img/etudiants.jpg` | PxHere | https://pxhere.com/en/photo/1246944 | CC0 / domaine public |
| `img/formation-1.jpg` | Eagle Gate College | https://www.eaglegatecollege.edu/blog/how-nursing-simulation-labs-are-transforming-healthcare-education/ | Contenu éditorial — vérifier l'autorisation |
| `img/formation-2.jpg` | PICRYL / NARA-DVIDS | https://picryl.com/media/a-medical-technician-uses-a-microscope-to-examine-a-blood-sample-in-the-base-a773ca | Domaine public |
| `img/formation-3.jpg` | World Bank Photo Collection (Flickr) | https://www.flickr.com/photos/worldbank/51419777156 | CC BY-NC-ND 2.0 |
| `img/actualite-1.jpg` | World Bank Photo Collection (Flickr) | https://www.flickr.com/photos/worldbank/47248035002 | CC BY-NC-ND 2.0 |
| `img/actualite-2.jpg` | US Army Medical Research Unit (Flickr) | https://www.flickr.com/photos/36281822@N08/4567209861 | Domaine public / œuvre du gouvernement américain |
| `img/actualite-3.jpg` | Government of South Africa (Flickr) | https://www.flickr.com/photos/governmentzf/50952193063 | CC BY-ND 2.0 |

Rappels juridiques :

- Les licences **CC BY-NC-ND** interdisent l'usage commercial et les modifications :
  elles conviennent à une maquette de démonstration, mais **pas** à un site commercial
  définitif. Il faudra les remplacer par des photographies de l'établissement ou des
  visuels sous licence autorisant l'usage commercial.
- Les visuels signalés « contenu éditorial » doivent être remplacés avant publication.
- Aucune image n'a été extraite de résultats de moteur de recherche ni de pages web :
  seules les images proposées avec filtrage de licence ont été utilisées.
- Ce tableau doit être conservé et mis à jour à chaque remplacement de visuel.

---

## 6. Fonctionnalités JavaScript implémentées (`script.js`)

Tout est écrit en JavaScript natif, sans dépendance. Chaque fonctionnalité est testée.

| # | Fonction | Détail |
|---|---|---|
| 1 | Menu hamburger | `#nav-toggle` ouvre/ferme `#primary-navigation`, état `aria-expanded` synchronisé |
| 2 | Navigation mobile | Panneau déroulant animé, défilement interne si trop long |
| 3 | Fermeture après choix d'un lien | Chaque lien du menu referme le panneau sur mobile |
| 4 | Fermeture au clavier | Touche **Échap**, avec retour du focus sur le bouton |
| 5 | Clic extérieur / redimensionnement | Fermeture propre, nettoyage du verrouillage de défilement |
| 6 | Lien actif | `IntersectionObserver` surligne la section visible (`aria-current`) |
| 7 | Retour en haut | Apparition après 60 % de la hauteur d'écran, défilement doux, focus rendu au début |
| 8 | Validation du formulaire | Nom, courriel (expression régulière), téléphone facultatif, message, consentement |
| 9 | Messages d'erreur | Affichés dans des zones `role="alert"` liées par `aria-describedby`, `aria-invalid` |
| 10 | Confirmation de démonstration | Message explicite indiquant qu'**aucune donnée n'est envoyée** |
| 11 | En-tête | Ombre ajoutée au défilement |
| 12 | Pied de page | Année courante mise à jour automatiquement |

**Aucun bouton n'est décoratif** : chaque élément interactif déclenche une action réelle,
y compris le compteur de repères (affiché « — » car non confirmé).

---

## 7. Responsive et accessibilité

Mise en page vérifiée par capture d'écran aux largeurs demandées :

| Largeur | Résultat attendu |
|---|---|
| 320 px | Une colonne, logo réduit mais entier, aucun débordement horizontal |
| 375 px | Une colonne, menu hamburger, boutons empilés |
| 768 px | Deux colonnes, galerie en 2 colonnes, menu hamburger |
| 1024 px | Navigation horizontale (hamburger masqué), cartes en 2 colonnes |
| 1440 px | Trois à quatre colonnes, conteneur élargi à 1280 px |

Le débordement horizontal est neutralisé par `overflow-x: hidden` sur `body`, `max-width: 100%`
sur les images et des grilles fluides (`clamp()`, `minmax`). Le logo conserve
`object-fit: contain` et une hauteur maximale : il reste **entièrement visible** à toutes
les largeurs.

Accessibilité :

- balises HTML5 sémantiques : `header`, `nav`, `main`, `section`, `article`, `figure`,
  `figcaption`, `address`, `footer` ;
- lien d'évitement « Aller au contenu principal » ;
- hiérarchie de titres cohérente : un seul `h1`, puis `h2` par section, `h3` pour les cartes ;
- `alt` descriptif sur toutes les images ; `alt` du logo : « EMES — École des métiers de la santé » ;
- états de focus visibles (`:focus-visible`, contour rose de 3 px) ;
- attributs ARIA du menu (`aria-expanded`, `aria-controls`, `aria-label`) ;
- respect de `prefers-reduced-motion` ;
- contrastes conformes sur les fonds verts et blancs.

---

## 8. Référencement (SEO)

- `<title>` : « EMES Bamougoum — École des Métiers de la Santé | Se former aux métiers de la santé »
- méta-description rédigée, `lang="fr"`, `viewport`
- balises Open Graph et Twitter Card (avec une image d'aperçu locale)
- favicon local
- images en `loading="lazy"` sauf l'image d'accueil (`fetchpriority="high"`)
- une seule feuille de style et un seul script, aucun CDN, aucune police distante
- libellés de champs associés (`<label for>`), formulaire utilisable au clavier

---

## 9. Éléments à confirmer auprès de la direction

1. **Logo officiel** — fichier source à fournir pour remplacer le placeholder.
2. **Photographies réelles** de l'école, des salles, des plateaux techniques et des étudiants.
3. **Filières exactes** : intitulés officiels, diplômes délivrés, durées de formation.
4. **Agréments** : numéro de la décision d'ouverture (référence citée dans les documents
   publics : décision n° 2938/D/MINSANTE du 13 juillet 2023) — à faire confirmer.
5. **Conditions d'admission**, liste des pièces à fournir, calendrier et modalités d'inscription.
6. **Frais de formation**, s'ils doivent être publics.
7. **Coordonnées officielles** : téléphone, courriel, boîte postale, horaires d'ouverture.
8. **Textes institutionnels** : historique, mission, valeurs, mot du directeur.
9. **Effectifs et corps enseignant** (les quatre repères affichent volontairement « — »).
10. **Mise en service du formulaire** : il faut un service serveur, un service de formulaire
    externe ou une adresse de courriel pour recevoir réellement les demandes.
11. **Réseaux sociaux** officiels de l'école, s'ils doivent être liés.
12. **Carte interactive** : coordonnées exactes et autorisation d'intégration.

---

## 10. Vérifications effectuées avant livraison

- [x] Dossier `emes-bamougoum/` créé
- [x] `index.html`, `style.css`, `script.js` écrits et complets
- [x] Dossier `img/` contenant les quinze fichiers attendus, téléchargés réellement
- [x] Chaque fichier image réouvert et validé (format, dimensions, lisibilité)
- [x] Tous les chemins `src` de `index.html` vérifiés : aucune image manquante
- [x] Aucune URL distante pour le logo
- [x] Débordement horizontal contrôlé aux cinq largeurs demandées
- [x] Menu mobile, touche Échap, validation du formulaire et retour en haut testés
- [x] Aucune information institutionnelle non confirmée présentée comme un fait
      (badges « À confirmer », « Exemple », « Démonstration »)
- [x] Formulaire explicitement présenté comme une démonstration sans envoi de données
- [ ] **`img/logo.png` : placeholder — logo authentique non récupéré (voir section 4)**

---

*Maquette réalisée sans framework : HTML5, CSS3 et JavaScript natif.*
