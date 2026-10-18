/* ============================================================================
   EMES — École des Métiers de la Santé de Bamougoum
   script.js — JavaScript natif (aucune bibliothèque externe)

   Fonctionnalités réellement implémentées :
     1.  Menu hamburger : ouverture / fermeture, état ARIA
     2.  Fermeture du menu après le choix d'un lien
     3.  Fermeture du menu avec la touche Échap (+ retour du focus)
     4.  Fermeture du menu au clic extérieur et au redimensionnement
     5.  Verrouillage du défilement de la page quand le menu est ouvert
     6.  Surlignage du lien de navigation de la section visible
     7.  Bouton de retour en haut de page (apparition, action, clavier)
     8.  Validation complète du formulaire de démonstration
     9.  Message de confirmation (démonstration : aucun envoi de données)
     10. Ombre de l'en-tête au défilement + année courante du pied de page
   ============================================================================ */

(function () {
  "use strict";

  /* ------------------------------------------------------------------ Helpers */
  const $ = (selecteur, portee = document) => portee.querySelector(selecteur);
  const $$ = (selecteur, portee = document) => Array.from(portee.querySelectorAll(selecteur));

  /* =========================================================================
     1 à 5 — MENU HAMBURGER ET NAVIGATION MOBILE
     ========================================================================= */
  const boutonMenu = $("#nav-toggle");
  const menu = $("#primary-navigation");
  const entete = $("#site-header");
  const POINT_DE_BASCULE = 1024; // largeur à partir de laquelle le menu est horizontal

  const menuEstOuvert = () => boutonMenu.getAttribute("aria-expanded") === "true";

  function ouvrirMenu() {
    if (!menu || !boutonMenu) return;
    boutonMenu.setAttribute("aria-expanded", "true");
    boutonMenu.setAttribute("aria-label", "Fermer le menu de navigation");
    menu.classList.add("est-ouvert");
    document.body.classList.add("menu-ouvert");
  }

  function fermerMenu(rendreLeFocus = false) {
    if (!menu || !boutonMenu) return;
    boutonMenu.setAttribute("aria-expanded", "false");
    boutonMenu.setAttribute("aria-label", "Ouvrir le menu de navigation");
    menu.classList.remove("est-ouvert");
    document.body.classList.remove("menu-ouvert");
    if (rendreLeFocus) boutonMenu.focus();
  }

  function basculerMenu() {
    menuEstOuvert() ? fermerMenu() : ouvrirMenu();
  }

  if (boutonMenu && menu) {
    // Ouverture / fermeture au clic et au clavier (Entrée et Espace sont natifs sur <button>)
    boutonMenu.addEventListener("click", basculerMenu);

    // 2 — fermeture après sélection d'un lien du menu
    $$("a", menu).forEach((lien) => {
      lien.addEventListener("click", () => {
        if (window.innerWidth < POINT_DE_BASCULE) fermerMenu();
      });
    });

    // 3 — fermeture au clavier avec Échap
    document.addEventListener("keydown", (evenement) => {
      if (evenement.key === "Escape" && menuEstOuvert()) {
        fermerMenu(true);
      }
    });

    // 4a — fermeture au clic en dehors du menu et du bouton
    document.addEventListener("click", (evenement) => {
      if (!menuEstOuvert()) return;
      const cible = evenement.target;
      if (!menu.contains(cible) && !boutonMenu.contains(cible)) fermerMenu();
    });

    // 4b — fermeture (et nettoyage) lorsque l'on repasse en affichage bureau
    let largeurPrecedente = window.innerWidth;
    window.addEventListener("resize", () => {
      const largeur = window.innerWidth;
      if (largeur >= POINT_DE_BASCULE && largeurPrecedente < POINT_DE_BASCULE) {
        fermerMenu();
        document.body.classList.remove("menu-ouvert");
      }
      largeurPrecedente = largeur;
    });
  }

  /* =========================================================================
     6 — SURLIGNAGE DU LIEN DE LA SECTION VISIBLE
     ========================================================================= */
  const liensNav = $$('.nav-list a[href^="#"]');
  const sections = liensNav
    .map((lien) => document.getElementById(lien.getAttribute("href").slice(1)))
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    const observateur = new IntersectionObserver(
      (entrees) => {
        entrees.forEach((entree) => {
          if (!entree.isIntersecting) return;
          liensNav.forEach((lien) => {
            const correspond = lien.getAttribute("href") === `#${entree.target.id}`;
            lien.classList.toggle("actif", correspond);
            if (correspond) lien.setAttribute("aria-current", "true");
            else lien.removeAttribute("aria-current");
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((section) => observateur.observe(section));
  }

  /* =========================================================================
     7 — BOUTON DE RETOUR EN HAUT DE PAGE
     ========================================================================= */
  const boutonHaut = $("#retour-haut");

  function gererBoutonHaut() {
    if (!boutonHaut) return;
    const seuil = window.innerHeight * 0.6;
    const doitAfficher = window.scrollY > seuil;
    boutonHaut.hidden = !doitAfficher;
    boutonHaut.setAttribute("tabindex", doitAfficher ? "0" : "-1");
  }

  if (boutonHaut) {
    // Afficher / masquer selon la position de défilement
    window.addEventListener("scroll", gererBoutonHaut, { passive: true });
    gererBoutonHaut();

    // Remonter en haut de la page
    boutonHaut.addEventListener("click", () => {
      const mouvementReduit = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top: 0, behavior: mouvementReduit ? "auto" : "smooth" });
      // Rendre le focus au début du document pour les lecteurs d'écran
      const accueil = document.getElementById("accueil");
      if (accueil) accueil.setAttribute("tabindex", "-1");
      if (accueil) accueil.focus({ preventScroll: true });
    });
  }

  /* =========================================================================
     8 et 9 — VALIDATION DU FORMULAIRE DE DÉMONSTRATION
     ========================================================================= */
  const formulaire = $("#formulaire-contact");
  const zoneConfirmation = $("#confirmation");

  if (formulaire) {
    const expressionCourriel = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    const expressionTelephone = /^[+()\d\s.-]{6,}$/;

    // Affiche ou efface le message d'erreur d'un champ
    function definirErreur(champ, message) {
      const identifiantErreur = champ.getAttribute("aria-describedby");
      const zoneErreur = identifiantErreur ? document.getElementById(identifiantErreur) : null;

      if (message) {
        champ.setAttribute("aria-invalid", "true");
        if (zoneErreur) {
          zoneErreur.textContent = message;
          zoneErreur.hidden = false;
        }
      } else {
        champ.removeAttribute("aria-invalid");
        if (zoneErreur) {
          zoneErreur.textContent = "";
          zoneErreur.hidden = true;
        }
      }
      return !message;
    }

    // Règles de validation champ par champ
    function validerChamp(champ) {
      const valeur = (champ.value || "").trim();

      switch (champ.id) {
        case "nom":
          if (!valeur) return definirErreur(champ, "Veuillez indiquer votre nom complet.");
          if (valeur.length < 3) return definirErreur(champ, "Le nom doit contenir au moins 3 caractères.");
          return definirErreur(champ, "");

        case "email":
          if (!valeur) return definirErreur(champ, "Veuillez indiquer votre adresse électronique.");
          if (!expressionCourriel.test(valeur)) return definirErreur(champ, "Cette adresse électronique ne semble pas valide.");
          return definirErreur(champ, "");

        case "telephone":
          if (!valeur) return definirErreur(champ, ""); // champ facultatif
          if (!expressionTelephone.test(valeur)) return definirErreur(champ, "Veuillez saisir un numéro de téléphone valide.");
          return definirErreur(champ, "");

        case "message":
          if (!valeur) return definirErreur(champ, "Veuillez rédiger votre message.");
          if (valeur.length < 10) return definirErreur(champ, "Votre message doit contenir au moins 10 caractères.");
          return definirErreur(champ, "");

        case "consentement":
          if (!champ.checked) return definirErreur(champ, "Merci de cocher cette case pour continuer.");
          return definirErreur(champ, "");

        default:
          return true;
      }
    }

    const champs = $$("input, select, textarea", formulaire).filter(
      (champ) => champ.type !== "submit" && champ.type !== "hidden"
    );

    // Validation à la sortie du champ (après première interaction)
    champs.forEach((champ) => {
      champ.addEventListener("blur", () => validerChamp(champ));
      champ.addEventListener("input", () => {
        if (champ.getAttribute("aria-invalid") === "true") validerChamp(champ);
      });
      champ.addEventListener("change", () => {
        if (champ.type === "checkbox") validerChamp(champ);
      });
    });

    formulaire.addEventListener("submit", (evenement) => {
      // Démonstration : la soumission est interceptée, aucune donnée n'est transmise.
      evenement.preventDefault();

      let premierChampInvalide = null;
      let formulaireValide = true;

      champs.forEach((champ) => {
        const estValide = validerChamp(champ);
        if (!estValide && !premierChampInvalide) premierChampInvalide = champ;
        if (!estValide) formulaireValide = false;
      });

      if (!formulaireValide) {
        if (zoneConfirmation) {
          zoneConfirmation.hidden = false;
          zoneConfirmation.classList.add("est-erreur");
          zoneConfirmation.textContent =
            "Le formulaire contient des erreurs. Merci de corriger les champs signalés avant de réessayer.";
        }
        if (premierChampInvalide) premierChampInvalide.focus();
        return;
      }

      // Succès — message de démonstration explicite
      const nom = ($("#nom")?.value || "").trim();
      if (zoneConfirmation) {
        zoneConfirmation.hidden = false;
        zoneConfirmation.classList.remove("est-erreur");
        zoneConfirmation.textContent =
          `Merci ${nom}. Votre demande a bien été validée par la maquette. ` +
          `Rappel : cette démonstration n'envoie aucune donnée à l'établissement et ` +
          `ne remplace pas une prise de contact directe avec le secrétariat de l'EMES.`;
      }

      formulaire.reset();
      champs.forEach((champ) => {
        champ.removeAttribute("aria-invalid");
        const zoneErreur = champ.getAttribute("aria-describedby")
          ? document.getElementById(champ.getAttribute("aria-describedby"))
          : null;
        if (zoneErreur) {
          zoneErreur.textContent = "";
          zoneErreur.hidden = true;
        }
      });

      if (zoneConfirmation) zoneConfirmation.focus?.();
    });
  }

  /* =========================================================================
     10 — EN-TÊTE ET PIED DE PAGE
     ========================================================================= */
  if (entete) {
    const gererEntete = () => entete.classList.toggle("est-ombre", window.scrollY > 12);
    window.addEventListener("scroll", gererEntete, { passive: true });
    gererEntete();
  }

  const annee = $("#annee-courante");
  if (annee) annee.textContent = String(new Date().getFullYear());
})();
