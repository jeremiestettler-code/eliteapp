
// sessions.js
// =======================
// DONNÉES DES SÉANCES — Programme Force (compatibles index.html)
// =======================
// ⚠️ CE FICHIER NE CONTIENT QUE DES DONNÉES
// AUCUN HTML / AUCUNE LOGIQUE
//
// Structure attendue :
// window.SESSIONS = { KEY: { name, warmup:[...], items:[...] }, ... }
//
// NOTE COMPATIBILITÉ : certaines versions d'index.html lisent `SESSIONS` (sans window.)
// → on expose les deux (window.SESSIONS et SESSIONS)

window.SESSIONS = {

  /* =====================
     A — PECTOR AUX / TRICEPS (2 variantes)
     ===================== */

  /* Anciennes séances de musculation supprimées : A1–D2 et H1–H12. */

  COACH_W1: {
    name: "Coach — Mercredi · Full Body A",
    warmup: [
      { id:"WU-COACH-W1-1", name:"Mobilité épaules", icon:"wu_shoulder", todo:"1 min", seconds:60, desc:"Cercles d’épaules + ouverture thoracique. Amplitude progressive." },
      { id:"WU-COACH-W1-2", name:"Squats à vide", icon:"wu_squat", todo:"1 min", seconds:60, desc:"Descente contrôlée, genoux dans l’axe des pieds." },
      { id:"WU-COACH-W1-3", name:"Hip hinge", icon:"wu_hip_hinge", todo:"1 min", seconds:60, desc:"Hanches vers l’arrière, dos neutre. Prépare la chaîne postérieure." },
      { id:"WU-COACH-W1-4", name:"Row élastique", icon:"wu_bandpull", todo:"1 min", seconds:60, desc:"Tirage léger, omoplates basses, pause en fin de mouvement." },
      { id:"WU-COACH-W1-5", name:"Pompes faciles", icon:"pushup", todo:"1 min", seconds:60, desc:"Activation progressive des pectoraux et triceps." }
    ],
    cooldown: [
      { id:"CD-COACH-W1-1", name:"Mobilité hanches", icon:"wu_hip_mobility", todo:"60 s", seconds:60, desc:"Mouvements doux, sans chercher une amplitude maximale." },
      { id:"CD-COACH-W1-2", name:"Ouverture thoracique", icon:"wu_tspine_open", todo:"60 s", seconds:60, desc:"Respiration lente et relâchement du haut du dos." },
      { id:"CD-COACH-W1-3", name:"Respiration / relâchement", icon:"wu_breath_core", todo:"2 min", seconds:120, desc:"Inspire 4 s, expire 6 s. Relâche épaules et mâchoire." }
    ],
    items: [
      {
        id:"COACH-W1-1", name:"Développé couché barre", icon:"dbbench", muscle:"Pectoraux + triceps", sets:3, reps:"6–8", work:45, rest:90,
        desc:"Mouvement principal du haut du corps. Charge contrôlée, environ 2 répétitions en réserve.",
        steps:["Pieds solidement ancrés au sol.","Omoplates serrées et abaissées contre le banc.","Descends la barre en contrôle vers le bas des pectoraux.","Pousse en expirant sans décoller les épaules du banc."],
        mistakes:["Épaules qui partent vers l’avant","Poignets cassés","Rebond de la barre sur la poitrine","Aller jusqu’à l’échec"]
      },
      {
        id:"COACH-W1-2", name:"Landmine squat", icon:"landminesquat", muscle:"Quadriceps + fessiers + tronc", sets:3, reps:"8", work:45, rest:75,
        desc:"Travail des jambes volontairement modéré pour conserver de la fraîcheur pour le vélo du jeudi.",
        steps:["Tiens l’extrémité de la barre devant la poitrine.","Garde le buste haut et le tronc gainé.","Descends en laissant les genoux suivre la direction des pieds.","Pousse le sol pour remonter."],
        mistakes:["Genoux qui rentrent vers l’intérieur","Dos qui s’arrondit","Descente trop rapide","Chercher l’échec musculaire"]
      },
      {
        id:"COACH-W1-3", name:"Tirage vertical poulie haute", icon:"facepull_band", muscle:"Grand dorsal + haut du dos", sets:3, reps:"8–10", work:45, rest:75,
        desc:"Tirage vertical contrôlé. Garde environ 2 répétitions en réserve.",
        steps:["Poitrine légèrement sortie et épaules basses.","Tire les coudes vers le bas.","Amène la poignée vers le haut de la poitrine.","Contrôle complètement la remontée."],
        mistakes:["Tirer derrière la nuque","Donner de l’élan avec le buste","Hausser les épaules","Relâcher brutalement la charge"]
      },
      {
        id:"COACH-W1-4", name:"Soulevé de terre roumain haltères", icon:"rdl", muscle:"Ischios + fessiers", sets:2, reps:"8", work:45, rest:90,
        desc:"Chaîne postérieure avec volume limité pour préserver les jambes.",
        steps:["Haltères proches des cuisses.","Recule les hanches en gardant une légère flexion des genoux.","Maintiens le dos neutre pendant toute la descente.","Remonte en poussant les hanches vers l’avant et en serrant les fessiers."],
        mistakes:["Arrondir le dos","Transformer le mouvement en squat","Éloigner les haltères des jambes","Descendre au-delà de ta mobilité"]
      },
      {
        id:"COACH-W1-5", name:"Rowing poulie basse", icon:"band_row_seated", muscle:"Dos + biceps", sets:2, reps:"10–12", work:45, rest:60,
        desc:"Tirage horizontal contrôlé pour compléter le travail du dos.",
        steps:["Buste stable et poitrine ouverte.","Tire les coudes vers l’arrière.","Marque une courte pause en fin de tirage.","Reviens lentement sans arrondir le dos."],
        mistakes:["Balancer le buste","Épaules qui montent","Tirer uniquement avec les bras","Retour trop rapide"]
      },
      {
        id:"COACH-W1-6", name:"Pallof press", icon:"pallof_press_band", muscle:"Core · anti-rotation", sets:2, reps:"10 / côté", work:40, rest:30,
        desc:"Gainage anti-rotation particulièrement intéressant pour le vélo et le hockey.",
        steps:["Place-toi de côté par rapport à la poulie ou à l’élastique.","Gaine le tronc avant de tendre les bras.","Pousse les mains devant toi sans laisser le buste tourner.","Ramène lentement les mains vers la poitrine."],
        mistakes:["Rotation du bassin","Cambrure excessive","Épaules qui montent","Charge trop importante"]
      }
    ]
  },

  RUN_WU: {
    name: "Échauffement course — 7 à 10 km",
    warmup: [
      { id:"WU-RUN-1", name:"Marche active / footing léger", icon:"wu_cardio_lowimpact", todo:"3 min", seconds:180, desc:"Démarre très facile, augmente progressivement la cadence." },
      { id:"WU-RUN-2", name:"Mobilité chevilles", icon:"wu_hip_mobility", todo:"1 min", seconds:60, desc:"Cercles de chevilles + flexions/ extensions (amplitude confortable)." },
      { id:"WU-RUN-3", name:"Mobilité hanches", icon:"wu_hip_mobility", todo:"1 min", seconds:60, desc:"Ouvertures de hanches, rotations, sans à-coups." },
      { id:"WU-RUN-4", name:"Fentes dynamiques", icon:"wu_lunge", todo:"1×10 / jambe", seconds:80, desc:"Pas contrôlé, buste haut, ouverture hanches." },
      { id:"WU-RUN-5", name:"Montées de genoux", icon:"wu_cardio_lowimpact", todo:"45 s", seconds:45, desc:"Rythme progressif, posture haute." },
      { id:"WU-RUN-6", name:"Talons-fesses", icon:"wu_cardio_lowimpact", todo:"45 s", seconds:45, desc:"Cadence légère, sans tirer sur le genou." },
      { id:"WU-RUN-7", name:"Skippings légers", icon:"wu_cardio_lowimpact", todo:"30 s", seconds:30, desc:"Petites foulées, coordination, sans forcer." },
      { id:"WU-RUN-8", name:"Accélérations progressives", icon:"wu_cardio_lowimpact", todo:"3×20 s", seconds:60, desc:"3 accélérations de 20s : 60% → 75% → 85%, récup marche entre." }
    ],
    items: []
  }

};

// Expose aussi la variable globale `SESSIONS` pour compatibilité
// (si une ancienne version d'index.html fait Object.keys(SESSIONS))
var SESSIONS = window.SESSIONS;
