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

  A1: {
    name: "Séance A1 — Pecs / Triceps (Force)",
    warmup: [
      { id:"WU-A1-1", name:"Mobilité épaules", icon:"wu_shoulder", todo:"2 min", seconds:120, desc:"Cercles d’épaules + ouverture thoracique (amplitude confortable)." },
      { id:"WU-A1-2", name:"Band pull-aparts", icon:"wu_bandpull", todo:"2×15", seconds:60, desc:"Élastique léger, omoplates basses, contrôle." },
      { id:"WU-A1-3", name:"Squats à vide", icon:"wu_squat", todo:"2×10", seconds:60, desc:"Descente lente, genoux stables, respiration." },
      { id:"WU-A1-4", name:"Pompes faciles", icon:"wu_pushup", todo:"1×8–12", seconds:45, desc:"Genoux si besoin, amplitude confortable." }
    ],
    items: [
      { id:"A1-1", name:"Développé couché haltères", icon:"dbbench", muscle:"Pectoraux + triceps", sets:4, reps:"6–8", work:45, rest:120,
        desc:"Mouvement principal : lourd et propre (1–2 reps en réserve).",
        steps:["Pieds ancrés, omoplates serrées/basses.","Descends en contrôle (≈2s) au niveau des pectoraux.","Pousse stable en expirant (sans cogner les haltères)."],
        mistakes:["Épaules qui montent","Poignets cassés","Rebond en bas"] },

      { id:"A1-2", name:"Développé incliné haltères", icon:"inclinedb", muscle:"Haut pec + épaules", sets:3, reps:"8–10", work:45, rest:90,
        desc:"Accent haut pectoraux, trajectoire stable.",
        steps:["Inclinaison légère.","Descends en contrôle.","Pousse sans perdre le gainage (expire)."],
        mistakes:["Inclinaison trop forte","Cambrure excessive","Amplitude courte"] },

      { id:"A1-3", name:"Écartés haltères sur banc", icon:"flydb", muscle:"Pectoraux", sets:3, reps:"12–15", work:45, rest:75,
        desc:"Isolation : étirement + contrôle (charge modérée).",
        steps:["Bras légèrement fléchis.","Ouvre en arc jusqu’à l’étirement.","Reviens en serrant les pectoraux."],
        mistakes:["Trop lourd","Descendre trop bas","Bras trop tendus"] },

      { id:"A1-4", name:"Poulie — Triceps vertical prise serrée", icon:"cabletri", muscle:"Triceps", sets:3, reps:"12–15", work:45, rest:60,
        desc:"Ta poulie : uniquement ce mouvement, strict.",
        steps:["Coudes collés, buste stable.","Extension complète + pause 1s.","Retour contrôlé sans bouger les épaules."],
        mistakes:["Coudes qui s’écartent","Balancer le buste","Trop lourd"] },

      { id:"A1-5", name:"Élévations latérales", icon:"lateral", muscle:"Deltoïde moyen", sets:3, reps:"15–20", work:45, rest:60,
        desc:"Largeur d’épaules : léger, strict.",
        steps:["Épaules basses.","Monte à hauteur d’épaule.","Redescends lentement (≈2s)."],
        mistakes:["Élan","Trapèzes dominants","Poignets cassés"] },

      { id:"A1-6", name:"Planche", icon:"plank", muscle:"Tronc", sets:3, reps:"40 s", type:"time", seconds:40, work:40, rest:60,
        desc:"Gainage propre : bassin stable, respiration.",
        steps:["Coudes sous épaules.","Bassin neutre, fessiers serrés.","Respire (pas d’apnée)."],
        mistakes:["Bassin qui s’affaisse","Apnée","Épaules hautes"] }
    ]
  },

  A2: {
    name: "Séance A2 — Pecs / Triceps (Volume)",
    warmup: [
      { id:"WU-A2-1", name:"Mobilité épaules", icon:"wu_shoulder", todo:"2 min", seconds:120, desc:"Cercles + ouverture thoracique (progressif)." },
      { id:"WU-A2-2", name:"Row élastique", icon:"wu_rowband", todo:"2×12", seconds:60, desc:"Tirage léger, pause 1s en fin de course." },
      { id:"WU-A2-3", name:"Pompes tempo", icon:"wu_pushup", todo:"1×8", seconds:45, desc:"3s descente, contrôle." },
      { id:"WU-A2-4", name:"Triceps léger (poulie)", icon:"cabletri", todo:"1×15", seconds:45, desc:"Prise serrée, amplitude complète." }
    ],
    items: [
      { id:"A2-1", name:"Développé couché haltères", icon:"dbbench", muscle:"Pectoraux + triceps", sets:4, reps:"8–10", work:45, rest:90,
        desc:"Volume : garde 1–2 reps en réserve.",
        steps:["Omoplates serrées/basses.","Descends en contrôle (≈2s).","Pousse stable, expire."],
        mistakes:["Épaules hautes","Rebond","Amplitude courte"] },

      { id:"A2-2", name:"Développé couché prise neutre (haltères)", icon:"dbbench", muscle:"Pectoraux + triceps", sets:3, reps:"10–12", work:45, rest:75,
        desc:"Souvent plus confortable pour les épaules.",
        steps:["Poignets neutres.","Coudes 30–45°.","Pousse sans perdre le gainage."],
        mistakes:["Coudes trop ouverts","Épaules qui montent","Vitesse"] },

      { id:"A2-3", name:"Écartés inclinés haltères", icon:"flydb", muscle:"Haut pectoraux", sets:3, reps:"15", work:45, rest:60,
        desc:"Isolation haut pec : contrôle + sensation.",
        steps:["Bras semi-fléchis.","Ouvre en arc.","Reviens en serrant."],
        mistakes:["Trop lourd","Bras tendus","Trop bas"] },

      { id:"A2-4", name:"Extension triceps au-dessus de la tête (haltère)", icon:"supersetB", muscle:"Triceps", sets:3, reps:"12", work:45, rest:60,
        desc:"Long chef du triceps (strict).",
        steps:["Coudes serrés.","Descends derrière la tête.","Remonte sans cambrer."],
        mistakes:["Coudes qui s’ouvrent","Cambrure","Trop lourd"] },

      { id:"A2-5", name:"Poulie — Triceps vertical prise serrée (pump)", icon:"cabletri", muscle:"Triceps", sets:2, reps:"15–20", work:45, rest:45,
        desc:"Finisher triceps : contrôle, amplitude complète.",
        steps:["Coudes collés.","Extension complète.","Retour contrôlé."],
        mistakes:["Balancer","Trop lourd","Amplitude courte"] },

      { id:"A2-6", name:"Dead bug", icon:"deadbug", muscle:"Gainage profond", sets:3, reps:"10 / côté", work:45, rest:60,
        desc:"Anti-extension : bas du dos collé.",
        steps:["Bas du dos collé.","Allonge bras/jambe opposés.","Retour sans perdre le gainage."],
        mistakes:["Dos creusé","Trop vite","Apnée"] }
    ]
  },

  /* =====================
     B — DOS / BICEPS (2 variantes)
     ===================== */

  B1: {
    name: "Séance B1 — Dos / Biceps (Épaisseur)",
    warmup: [
      { id:"WU-B1-1", name:"Hip hinge", icon:"wu_hinge", todo:"2×10", seconds:60, desc:"Charnière hanche à vide, dos neutre." },
      { id:"WU-B1-2", name:"Row élastique", icon:"wu_rowband", todo:"2×15", seconds:60, desc:"Pause 1s, omoplates basses." },
      { id:"WU-B1-3", name:"Mobilité épaules", icon:"wu_shoulder", todo:"1 min", seconds:60, desc:"Rétractions + rotations douces." }
    ],
    items: [
      { id:"B1-1", name:"Soulevé de terre roumain haltères", icon:"rdl", muscle:"Ischios + fessiers", sets:4, reps:"8", work:45, rest:120,
        desc:"Arrière jambes + fessiers, dos neutre.",
        steps:["Hanches en arrière.","Haltères proches des jambes.","Remonte en serrant les fessiers."],
        mistakes:["Dos rond","Genoux trop pliés","Rebond"] },

      { id:"B1-2", name:"Rowing unilatéral haltère", icon:"onearmrow", muscle:"Grand dorsal", sets:4, reps:"10 / côté", work:45, rest:90,
        desc:"Tire vers la hanche, pause 1s.",
        steps:["Buste stable.","Coude vers la hanche.","Redescends lentement."],
        mistakes:["Rotation","Élan","Tirer vers l’épaule"] },

      { id:"B1-3", name:"Rowing landmine", icon:"landminerow", muscle:"Dos + gainage", sets:3, reps:"10", work:45, rest:90,
        desc:"Puissant et stable.",
        steps:["Hinge, dos neutre.","Tire vers sternum bas.","Pause 1s, contrôle."],
        mistakes:["Dos arrondi","Trapèzes","Bras seulement"] },

      { id:"B1-4", name:"Curl haltères alterné", icon:"dbcurl", muscle:"Biceps", sets:3, reps:"10–12", work:45, rest:60,
        desc:"Strict, sans balancer.",
        steps:["Coudes fixes.","Monte + pause 1s.","Descends lentement."],
        mistakes:["Balancer","Coudes en avant","Descente rapide"] },

      { id:"B1-5", name:"Curl marteau", icon:"hammer", muscle:"Brachial + avant-bras", sets:3, reps:"12", work:45, rest:60,
        desc:"Renforce la prise.",
        steps:["Poignets neutres.","Monte sans élan.","Contrôle la descente."],
        mistakes:["Élan","Amplitude courte","Trop lourd"] },

      { id:"B1-6", name:"Gainage latéral", icon:"sideplank", muscle:"Obliques", sets:3, reps:"40 s / côté", type:"time", seconds:40, work:40, rest:60,
        desc:"Stabilité du tronc.",
        steps:["Coude sous l’épaule.","Hanches hautes.","Respire."],
        mistakes:["Hanches qui s’affaissent","Apnée","Épaule mal placée"] }
    ]
  },

  B2: {
    name: "Séance B2 — Dos / Biceps (Contrôle)",
    warmup: [
      { id:"WU-B2-1", name:"Mobilité épaules", icon:"wu_shoulder", todo:"2 min", seconds:120, desc:"Ouverture thoracique + scapula." },
      { id:"WU-B2-2", name:"Row élastique tempo", icon:"wu_rowband", todo:"2×12", seconds:60, desc:"2s tirage / 2s retour + pause 1s." },
      { id:"WU-B2-3", name:"Good morning léger", icon:"wu_hinge", todo:"1×10", seconds:45, desc:"Charnière hanche (léger)." }
    ],
    items: [
      { id:"B2-1", name:"Rowing landmine (prise serrée)", icon:"landminerow", muscle:"Dos (épaisseur)", sets:4, reps:"8–10", work:45, rest:90,
        desc:"Tirage fort, gainage solide.",
        steps:["Dos neutre.","Tire vers sternum bas.","Pause 1s."],
        mistakes:["Dos rond","Élan","Trapèzes"] },

      { id:"B2-2", name:"Tirage élastique bras tendus", icon:"wu_bandpull", muscle:"Grand dorsal", sets:3, reps:"15", work:45, rest:60,
        desc:"Sensation dorsaux (vers les hanches).",
        steps:["Bras quasi tendus.","Tire vers les hanches.","Contrôle le retour."],
        mistakes:["Épaules hautes","Coudes trop pliés","Vitesse"] },

      { id:"B2-3", name:"Rowing haltères sur banc incliné", icon:"onearmrow", muscle:"Dos", sets:3, reps:"12", work:45, rest:75,
        desc:"Moins d’élan, plus d’isolation.",
        steps:["Poitrine sur banc incliné.","Tire coudes vers l’arrière.","Redescends lentement."],
        mistakes:["Élan","Épaules hautes","Amplitude courte"] },

      { id:"B2-4", name:"Curl Zottman", icon:"supersetA", muscle:"Biceps + avant-bras", sets:3, reps:"10", work:45, rest:60,
        desc:"Monte en supination, descends en pronation.",
        steps:["Monte supination.","Tourne en haut.","Descends pronation (contrôle)."],
        mistakes:["Élan","Rotation trop rapide","Trop lourd"] },

      { id:"B2-5", name:"Curl marteau (finisher)", icon:"hammer", muscle:"Brachial", sets:2, reps:"15", work:45, rest:45,
        desc:"Pump bras.",
        steps:["Neutre.","Strict.","Contrôle."],
        mistakes:["Élan","Amplitude courte","Trop lourd"] },

      { id:"B2-6", name:"Planche", icon:"plank", muscle:"Tronc", sets:3, reps:"40 s", type:"time", seconds:40, work:40, rest:60,
        desc:"Gainage propre.",
        steps:["Bassin neutre.","Fessiers serrés.","Respire."],
        mistakes:["Bassin bas","Apnée","Épaules hautes"] }
    ]
  },

  /* =====================
     C — ÉPAULES (2 variantes)
     ===================== */

  C1: {
    name: "Séance C1 — Épaules (Force)",
    warmup: [
      { id:"WU-C1-1", name:"Mobilité épaules", icon:"wu_shoulder", todo:"2 min", seconds:120, desc:"Cercles + ouverture thoracique." },
      { id:"WU-C1-2", name:"Rotations externes élastique", icon:"wu_external", todo:"2×12", seconds:60, desc:"Coiffe : léger, contrôle." },
      { id:"WU-C1-3", name:"Élévations latérales légères", icon:"lateral", todo:"1×15", seconds:45, desc:"Très léger, juste la sensation." }
    ],
    items: [
      { id:"C1-1", name:"Développé militaire haltères", icon:"ohp", muscle:"Épaules + triceps", sets:4, reps:"6–8", work:45, rest:90,
        desc:"Presse verticale stricte.",
        steps:["Côtes rentrées.","Pousse au-dessus.","Redescends en contrôle."],
        mistakes:["Cambrure","Trop devant","Amplitude courte"] },

      { id:"C1-2", name:"Landmine press unilatéral", icon:"landminepress", muscle:"Épaules + haut pec", sets:3, reps:"8 / côté", work:45, rest:90,
        desc:"Trajectoire naturelle, stable.",
        steps:["Gainage fort.","Pousse en diagonale.","Retour contrôlé."],
        mistakes:["Cambrure","Rotation","Épaule haute"] },

      { id:"C1-3", name:"Élévations latérales", icon:"lateral", muscle:"Deltoïde moyen", sets:4, reps:"15", work:45, rest:60,
        desc:"Léger, strict.",
        steps:["Épaules basses.","Monte à hauteur d’épaule.","Descends lentement."],
        mistakes:["Élan","Trapèzes","Poignets cassés"] },

      { id:"C1-4", name:"Oiseau (reverse fly)", icon:"reversefly", muscle:"Arrière épaules", sets:3, reps:"15", work:45, rest:60,
        desc:"Équilibre le travail des pectoraux.",
        steps:["Buste penché.","Ouvre + pause 1s.","Contrôle."],
        mistakes:["Trapèzes","Élan","Dos arrondi"] },

      { id:"C1-5", name:"Farmer walk", icon:"farmer", muscle:"Gainage + grip", sets:3, reps:"50 s", type:"time", seconds:50, work:50, rest:90,
        desc:"Posture, grip, gainage.",
        steps:["Épaules basses.","Marche lente.","Respire."],
        mistakes:["Se pencher","Pas rapides","Trapèzes"] },

      { id:"C1-6", name:"Dead bug", icon:"deadbug", muscle:"Gainage profond", sets:3, reps:"10 / côté", work:45, rest:60,
        desc:"Anti-extension.",
        steps:["Dos collé.","Allonge opposés.","Retour contrôlé."],
        mistakes:["Dos creusé","Trop vite","Apnée"] }
    ]
  },

  C2: {
    name: "Séance C2 — Épaules (Volume + stabilité)",
    warmup: [
      { id:"WU-C2-1", name:"Mobilité épaules", icon:"wu_shoulder", todo:"2 min", seconds:120, desc:"Thorax + scapula." },
      { id:"WU-C2-2", name:"Rotations externes élastique", icon:"wu_external", todo:"2×12", seconds:60, desc:"Léger, contrôle." },
      { id:"WU-C2-3", name:"Fentes dynamiques", icon:"wu_lunge", todo:"1×10 / jambe", seconds:60, desc:"Ouverture hanches, amplitude confortable." }
    ],
    items: [
      { id:"C2-1", name:"Arnold press haltères", icon:"ohp", muscle:"Épaules", sets:4, reps:"10", work:45, rest:90,
        desc:"Plus de volume, contrôle.",
        steps:["Rotation en montant.","Gainage.","Redescends contrôlé."],
        mistakes:["Cambrure","Trop lourd","Amplitude courte"] },

      { id:"C2-2", name:"Élévations latérales tempo", icon:"lateral", muscle:"Deltoïde moyen", sets:3, reps:"20", work:45, rest:60,
        desc:"2s montée / 2s descente.",
        steps:["Strict.","Tempo lent.","Pas d’élan."],
        mistakes:["Élan","Trapèzes","Poignets cassés"] },

      { id:"C2-3", name:"Oiseau sur banc incliné", icon:"reversefly", muscle:"Arrière épaules", sets:3, reps:"15", work:45, rest:60,
        desc:"Isolation arrière deltoïde.",
        steps:["Poitrine sur banc.","Ouvre + pause.","Contrôle."],
        mistakes:["Élan","Trapèzes","Amplitude courte"] },

      { id:"C2-4", name:"Landmine press (finisher)", icon:"landminepress", muscle:"Épaules + haut pec", sets:3, reps:"12", work:45, rest:75,
        desc:"Stable, bon finisher.",
        steps:["Gainage.","Pousse diagonale.","Retour contrôlé."],
        mistakes:["Cambrure","Épaule haute","Rotation"] },

      { id:"C2-5", name:"Farmer walk", icon:"farmer", muscle:"Gainage + grip", sets:3, reps:"40 s", type:"time", seconds:40, work:40, rest:90,
        desc:"Stabilité et posture.",
        steps:["Grandis-toi.","Marche lente.","Respire."],
        mistakes:["Se pencher","Pas rapides","Trapèzes"] },

      { id:"C2-6", name:"Planche", icon:"plank", muscle:"Tronc", sets:3, reps:"40 s", type:"time", seconds:40, work:40, rest:60,
        desc:"Gainage propre.",
        steps:["Bassin neutre.","Fessiers serrés.","Respire."],
        mistakes:["Bassin bas","Apnée","Épaules hautes"] }
    ]
  },

  /* =====================
     D — BRAS / MÉTABOLIQUE (2 variantes)
     ===================== */

  D1: {
    name: "Séance D1 — Bras (Lourd)",
    warmup: [
      { id:"WU-D1-1", name:"Curl léger", icon:"dbcurl", todo:"2×12", seconds:60, desc:"Très léger, activation biceps." },
      { id:"WU-D1-2", name:"Triceps léger (poulie)", icon:"cabletri", todo:"2×12", seconds:60, desc:"Prise serrée, amplitude complète." },
      { id:"WU-D1-3", name:"Pompes faciles", icon:"wu_pushup", todo:"1×8", seconds:45, desc:"Prépare triceps/pecs." }
    ],
    items: [
      { id:"D1-1", name:"Superset : Curl Zottman + Extension triceps au-dessus de la tête", muscle:"Bras", sets:4, reps:"10 + 10", work:45, rest:60,
        images:{ a:"supersetA", b:"supersetB" },
        desc:"Sans repos entre les deux exercices : curl puis extension triceps.",
        steps:["10 curls Zottman stricts.","Sans pause : 10 extensions triceps au-dessus de la tête.","Repos 60s."],
        mistakes:["Élan","Coudes qui bougent","Trop lourd"] },

      { id:"D1-2", name:"Curl marteau", icon:"hammer", muscle:"Brachial + avant-bras", sets:3, reps:"12", work:45, rest:60,
        desc:"Renforce la prise.",
        steps:["Poignets neutres.","Monte sans élan.","Contrôle la descente."],
        mistakes:["Élan","Amplitude courte","Trop lourd"] },

      { id:"D1-3", name:"Poulie — Triceps vertical prise serrée", icon:"cabletri", muscle:"Triceps", sets:3, reps:"12–15", work:45, rest:60,
        desc:"Pause 1s en bas.",
        steps:["Coudes collés.","Extension complète.","Retour contrôlé."],
        mistakes:["Balancer","Coudes qui s’ouvrent","Trop lourd"] },

      { id:"D1-4", name:"Farmer walk", icon:"farmer", muscle:"Gainage + grip", sets:3, reps:"50 s", type:"time", seconds:50, work:50, rest:90,
        desc:"Posture, grip, gainage.",
        steps:["Grandis-toi.","Marche lente.","Respire."],
        mistakes:["Se pencher","Pas rapides","Trapèzes"] },

      { id:"D1-5", name:"Élévations latérales (pump)", icon:"lateral", muscle:"Épaules", sets:2, reps:"20", work:45, rest:45,
        desc:"Finisher épaules.",
        steps:["Très léger.","Strict.","Contrôle."],
        mistakes:["Élan","Trapèzes","Poignets cassés"] },

      { id:"D1-6", name:"Dead bug", icon:"deadbug", muscle:"Tronc", sets:3, reps:"10 / côté", work:45, rest:60,
        desc:"Stabilité.",
        steps:["Dos collé.","Allonge opposés.","Retour contrôlé."],
        mistakes:["Dos creusé","Trop vite","Apnée"] }
    ]
  },

  D2: {
    name: "Séance D2 — Bras + Métabolique",
    warmup: [
      { id:"WU-D2-1", name:"Jumping jacks", icon:"wu_jj", todo:"2 min", seconds:120, desc:"Monte progressivement le cardio." },
      { id:"WU-D2-2", name:"Fentes dynamiques", icon:"wu_lunge", todo:"1×10 / jambe", seconds:60, desc:"Ouverture hanches, amplitude confortable." },
      { id:"WU-D2-3", name:"Pompes faciles", icon:"wu_pushup", todo:"1×8", seconds:45, desc:"Activation haut du corps." }
    ],
    items: [
      { id:"D2-1", name:"Kettlebell swing", icon:"swing", muscle:"Fessiers + cardio", sets:4, reps:"15", work:45, rest:75,
        desc:"Explosif hanche.",
        steps:["Hinge (charnière hanche).","Explose les hanches.","Contrôle le retour."],
        mistakes:["Squat au lieu de hinge","Dos rond","Lever avec les bras"] },

      { id:"D2-2", name:"Pompes pieds sur banc", icon:"pushup", muscle:"Pectoraux + triceps", sets:3, reps:"12–15", work:45, rest:90,
        desc:"Cardio + pecs/triceps.",
        steps:["Gainage.","Descends poitrine.","Pousse, expire."],
        mistakes:["Hanches basses","Amplitude courte","Coudes trop ouverts"] },

      { id:"D2-3", name:"Superset : Curl Zottman + Extension triceps au-dessus de la tête", muscle:"Bras", sets:3, reps:"12 + 12", work:45, rest:45,
        images:{ a:"supersetA", b:"supersetB" },
        desc:"Volume bras : sans élan, strict.",
        steps:["12 curls Zottman.","Sans pause : 12 extensions triceps.","Repos 45 s."],
        mistakes:["Élan","Coudes qui bougent","Trop lourd"] },

      { id:"D2-4", name:"Farmer walk", icon:"farmer", muscle:"Gainage + grip", sets:3, reps:"40 s", type:"time", seconds:40, work:40, rest:90,
        desc:"Stabilité et posture.",
        steps:["Grandis-toi.","Marche lente.","Respire."],
        mistakes:["Se pencher","Pas rapides","Trapèzes"] },

      { id:"D2-5", name:"Gainage dynamique", icon:"plank", muscle:"Tronc", sets:3, reps:"40 s", type:"time", seconds:40, work:40, rest:60,
        desc:"Mountain climbers lents ou planche dynamique.",
        steps:["Rythme contrôlé.","Bassin stable.","Respire."],
        mistakes:["Bassin qui bouge","Trop vite","Apnée"] },

      { id:"D2-6", name:"Élévations latérales (finisher)", icon:"lateral", muscle:"Épaules", sets:2, reps:"20", work:45, rest:45,
        desc:"Finisher épaules (léger).",
        steps:["Léger.","Strict.","Contrôle."],
        mistakes:["Élan","Trapèzes","Poignets cassés"] }
    ]
  }
};

// Expose aussi la variable globale `SESSIONS` pour compatibilité
// (si une ancienne version d'index.html fait Object.keys(SESSIONS))
var SESSIONS = window.SESSIONS;