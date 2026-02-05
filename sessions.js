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
    cooldown: [
      { id:"CD-A1-1", name:"Bhujangasana (cobra) — ouverture poitrine", icon:"bhujangasana_posture_du_cobra", todo:"60 s", seconds:60, desc:"Poitrine ouverte, épaules basses, respiration lente." },
      { id:"CD-A1-2", name:"Dead Hang (suspension passive)", icon:"dead_hang_suspension_passive", todo:"45 s", seconds:45, desc:"Relâche les épaules/pectoraux. Garde les omoplates basses." },
      { id:"CD-A1-3", name:"Adho Mukha Svanasana — épaules + chaîne post.", icon:"adho_mukha_svanasana_posture_du_chien_tete_en_bas", todo:"75 s", seconds:75, desc:"Pousse le sol, allonge le dos, talons vers le sol." },
      { id:"CD-A1-4", name:"Anjaneyasana — fléchisseurs de hanche", icon:"anjaneyasana_posture_du_croissant_de_lune", todo:"60 s / côté", seconds:120, desc:"Bassin neutre, fessier serré, respiration." },
      { id:"CD-A1-5", name:"Cocon — relâchement du haut du dos", icon:"cocon", todo:"60 s", seconds:60, desc:"Arrondis le dos, respire, relâche nuque et épaules." },
      { id:"CD-A1-6", name:"Respiration / relâchement", icon:"wu_breath_core", todo:"2 min", seconds:120, desc:"Inspire 4s, expire 6s. Relâche épaules et mâchoire." },
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
    cooldown: [
      { id:"CD-A2-1", name:"Bhujangasana (cobra) — ouverture poitrine", icon:"bhujangasana_posture_du_cobra", todo:"60 s", seconds:60, desc:"Poitrine ouverte, épaules basses, respiration lente." },
      { id:"CD-A2-2", name:"Dead Hang (suspension passive)", icon:"dead_hang_suspension_passive", todo:"45 s", seconds:45, desc:"Relâche les épaules/pectoraux. Garde les omoplates basses." },
      { id:"CD-A2-3", name:"Adho Mukha Svanasana — épaules + chaîne post.", icon:"adho_mukha_svanasana_posture_du_chien_tete_en_bas", todo:"75 s", seconds:75, desc:"Pousse le sol, allonge le dos, talons vers le sol." },
      { id:"CD-A2-4", name:"Anjaneyasana — fléchisseurs de hanche", icon:"anjaneyasana_posture_du_croissant_de_lune", todo:"60 s / côté", seconds:120, desc:"Bassin neutre, fessier serré, respiration." },
      { id:"CD-A2-5", name:"Cocon — relâchement du haut du dos", icon:"cocon", todo:"60 s", seconds:60, desc:"Arrondis le dos, respire, relâche nuque et épaules." },
      { id:"CD-A2-6", name:"Respiration / relâchement", icon:"wu_breath_core", todo:"2 min", seconds:120, desc:"Inspire 4s, expire 6s. Relâche épaules et mâchoire." },
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
    cooldown: [
      { id:"CD-B1-1", name:"Dead Hang (suspension passive)", icon:"dead_hang_suspension_passive", todo:"60 s", seconds:60, desc:"Décompression dos/épaules, relâche la prise progressivement." },
      { id:"CD-B1-2", name:"Adho Mukha Svanasana — dorsaux + ischios", icon:"adho_mukha_svanasana_posture_du_chien_tete_en_bas", todo:"90 s", seconds:90, desc:"Allonge la colonne, pousse les hanches vers l’arrière." },
      { id:"CD-B1-3", name:"Anjaneyasana — fléchisseurs de hanche", icon:"anjaneyasana_posture_du_croissant_de_lune", todo:"60 s / côté", seconds:120, desc:"Ouvre l’avant de la hanche (utile après hinge/row)." },
      { id:"CD-B1-4", name:"Baddha Konasana — adducteurs/hanches", icon:"baddha_konasana_posture_du_papillon", todo:"75 s", seconds:75, desc:"Dos grandit, genoux vers le sol sans forcer." },
      { id:"CD-B1-5", name:"Ardha Chandrasana — ouverture latérale", icon:"ardha_chandrasana_posture_de_la_demi_lune", todo:"45 s / côté", seconds:90, desc:"Stabilité + ouverture côté, respiration." },
      { id:"CD-B1-6", name:"Respiration / relâchement", icon:"wu_breath_core", todo:"2 min", seconds:120, desc:"Inspire 4s, expire 6s. Relâche épaules et mâchoire." },
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
    cooldown: [
      { id:"CD-B2-1", name:"Dead Hang (suspension passive)", icon:"dead_hang_suspension_passive", todo:"60 s", seconds:60, desc:"Décompression dos/épaules, relâche la prise progressivement." },
      { id:"CD-B2-2", name:"Adho Mukha Svanasana — dorsaux + ischios", icon:"adho_mukha_svanasana_posture_du_chien_tete_en_bas", todo:"90 s", seconds:90, desc:"Allonge la colonne, pousse les hanches vers l’arrière." },
      { id:"CD-B2-3", name:"Anjaneyasana — fléchisseurs de hanche", icon:"anjaneyasana_posture_du_croissant_de_lune", todo:"60 s / côté", seconds:120, desc:"Ouvre l’avant de la hanche (utile après hinge/row)." },
      { id:"CD-B2-4", name:"Baddha Konasana — adducteurs/hanches", icon:"baddha_konasana_posture_du_papillon", todo:"75 s", seconds:75, desc:"Dos grandit, genoux vers le sol sans forcer." },
      { id:"CD-B2-5", name:"Ardha Chandrasana — ouverture latérale", icon:"ardha_chandrasana_posture_de_la_demi_lune", todo:"45 s / côté", seconds:90, desc:"Stabilité + ouverture côté, respiration." },
      { id:"CD-B2-6", name:"Respiration / relâchement", icon:"wu_breath_core", todo:"2 min", seconds:120, desc:"Inspire 4s, expire 6s. Relâche épaules et mâchoire." },
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
    cooldown: [
      { id:"CD-C1-1", name:"Dead Hang (suspension passive)", icon:"dead_hang_suspension_passive", todo:"60 s", seconds:60, desc:"Décompression épaules, relâche trapèzes." },
      { id:"CD-C1-2", name:"Adho Mukha Svanasana — épaules + dos", icon:"adho_mukha_svanasana_posture_du_chien_tete_en_bas", todo:"75 s", seconds:75, desc:"Pousse le sol, allonge la colonne." },
      { id:"CD-C1-3", name:"Bhujangasana (cobra) — ouverture thoracique", icon:"bhujangasana_posture_du_cobra", todo:"45 s", seconds:45, desc:"Ouvre la cage, épaules basses." },
      { id:"CD-C1-4", name:"Ardha Chandrasana — ouverture latérale", icon:"ardha_chandrasana_posture_de_la_demi_lune", todo:"45 s / côté", seconds:90, desc:"Ouvre le flanc, stabilise l’épaule." },
      { id:"CD-C1-5", name:"Cocon — relâchement nuque/haut du dos", icon:"cocon", todo:"60 s", seconds:60, desc:"Respire, relâche les tensions." },
      { id:"CD-C1-6", name:"Respiration / relâchement", icon:"wu_breath_core", todo:"2 min", seconds:120, desc:"Inspire 4s, expire 6s. Relâche épaules et mâchoire." },
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
    cooldown: [
      { id:"CD-C2-1", name:"Dead Hang (suspension passive)", icon:"dead_hang_suspension_passive", todo:"60 s", seconds:60, desc:"Décompression épaules, relâche trapèzes." },
      { id:"CD-C2-2", name:"Adho Mukha Svanasana — épaules + dos", icon:"adho_mukha_svanasana_posture_du_chien_tete_en_bas", todo:"75 s", seconds:75, desc:"Pousse le sol, allonge la colonne." },
      { id:"CD-C2-3", name:"Bhujangasana (cobra) — ouverture thoracique", icon:"bhujangasana_posture_du_cobra", todo:"45 s", seconds:45, desc:"Ouvre la cage, épaules basses." },
      { id:"CD-C2-4", name:"Ardha Chandrasana — ouverture latérale", icon:"ardha_chandrasana_posture_de_la_demi_lune", todo:"45 s / côté", seconds:90, desc:"Ouvre le flanc, stabilise l’épaule." },
      { id:"CD-C2-5", name:"Cocon — relâchement nuque/haut du dos", icon:"cocon", todo:"60 s", seconds:60, desc:"Respire, relâche les tensions." },
      { id:"CD-C2-6", name:"Respiration / relâchement", icon:"wu_breath_core", todo:"2 min", seconds:120, desc:"Inspire 4s, expire 6s. Relâche épaules et mâchoire." },
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
    cooldown: [
      { id:"CD-D1-1", name:"Adho Mukha Svanasana — full body", icon:"adho_mukha_svanasana_posture_du_chien_tete_en_bas", todo:"75 s", seconds:75, desc:"Étire chaîne postérieure, épaules." },
      { id:"CD-D1-2", name:"Bhujangasana (cobra) — ouverture poitrine", icon:"bhujangasana_posture_du_cobra", todo:"45 s", seconds:45, desc:"Contrebalance les pompes / pressing." },
      { id:"CD-D1-3", name:"Anjaneyasana — fléchisseurs de hanche", icon:"anjaneyasana_posture_du_croissant_de_lune", todo:"60 s / côté", seconds:120, desc:"Ouvre hanches après métabolique." },
      { id:"CD-D1-4", name:"Baddha Virabhadrasana — ouverture hanches", icon:"baddha_virabhadrasana_posture_du_guerrier_humble", todo:"45 s / côté", seconds:90, desc:"Respire, épaules relâchées." },
      { id:"CD-D1-5", name:"Ardha Navasana — gainage doux", icon:"ardha_navasana_posture_du_demi_bateau", todo:"45 s", seconds:45, desc:"Gainage contrôlé, respiration." },
      { id:"CD-D1-6", name:"Respiration / relâchement", icon:"wu_breath_core", todo:"2 min", seconds:120, desc:"Inspire 4s, expire 6s. Relâche épaules et mâchoire." },
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
    cooldown: [
      { id:"CD-D2-1", name:"Adho Mukha Svanasana — full body", icon:"adho_mukha_svanasana_posture_du_chien_tete_en_bas", todo:"75 s", seconds:75, desc:"Étire chaîne postérieure, épaules." },
      { id:"CD-D2-2", name:"Bhujangasana (cobra) — ouverture poitrine", icon:"bhujangasana_posture_du_cobra", todo:"45 s", seconds:45, desc:"Contrebalance les pompes / pressing." },
      { id:"CD-D2-3", name:"Anjaneyasana — fléchisseurs de hanche", icon:"anjaneyasana_posture_du_croissant_de_lune", todo:"60 s / côté", seconds:120, desc:"Ouvre hanches après métabolique." },
      { id:"CD-D2-4", name:"Baddha Virabhadrasana — ouverture hanches", icon:"baddha_virabhadrasana_posture_du_guerrier_humble", todo:"45 s / côté", seconds:90, desc:"Respire, épaules relâchées." },
      { id:"CD-D2-5", name:"Ardha Navasana — gainage doux", icon:"ardha_navasana_posture_du_demi_bateau", todo:"45 s", seconds:45, desc:"Gainage contrôlé, respiration." },
      { id:"CD-D2-6", name:"Respiration / relâchement", icon:"wu_breath_core", todo:"2 min", seconds:120, desc:"Inspire 4s, expire 6s. Relâche épaules et mâchoire." },
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

  /* =====================
     HOCKEY — FORCE SPÉCIFIQUE (4 séances full body)
     Objectif : patinage (unilatéral/latéral), puissance hanche, core anti-rotation, épaules solides + grip
     Durée cible : 50–60 min
     ===================== */

  H1: {
    name: "Hockey H1 — Unilatéral + stabilité (Base patinage)",
    warmup: [
      { id:"WU-H1-1", name:"Cardio bas impact", icon:"wu_cardio_lowimpact", todo:"2 min", seconds:120, desc:"Montée progressive (respiration, posture haute)." },
      { id:"WU-H1-2", name:"Mobilité hanches", icon:"wu_hip_mobility", todo:"2 min", seconds:120, desc:"Ouvertures de hanches + rotations contrôlées." },
      { id:"WU-H1-3", name:"Abduction élastique", icon:"wu_band_abduction", todo:"2×12", seconds:60, desc:"Active fessier moyen (genoux stables)." },
      { id:"WU-H1-4", name:"Hip hinge (charnière)", icon:"wu_hip_hinge", todo:"1×10", seconds:45, desc:"Dos neutre, hanches en arrière." },
      { id:"WU-H1-5", name:"Glute bridge (activation)", icon:"wu_glute_bridge", todo:"1×12", seconds:45, desc:"Pause 1s en haut, fessiers serrés." }
    ],
    cooldown: [
      { id:"CD-H1-1", name:"Mobilité hanches (retour au calme)", icon:"wu_hip_mobility", todo:"2 min", seconds:120, desc:"Respire, amplitude confortable." },
      { id:"CD-H1-2", name:"Ouverture T-spine", icon:"wu_tspine_open", todo:"90 s", seconds:90, desc:"Rotation thoracique douce, sans forcer." },
      { id:"CD-H1-3", name:"Mobilité épaules", icon:"wu_shoulder_mob", todo:"75 s", seconds:75, desc:"Épaules basses, relâche trapèzes." },
      { id:"CD-H1-4", name:"Respiration / relâchement", icon:"wu_breath_core", todo:"2 min", seconds:120, desc:"Inspire 4s, expire 6s. Redescends le rythme." }
    ],
    items: [
      { id:"H1-1", name:"Bulgarian split squat", icon:"bulgarian", muscle:"Jambes (unilatéral) + stabilité", sets:4, reps:"8 / jambe", work:45, rest:120,
        desc:"Base patinage : force unilatérale + genou stable (1–2 reps en réserve).",
        steps:["Buste gainé, descente contrôlée.","Genou aligné (pas de valgus).","Pousse par le talon, fessier actif."],
        mistakes:["Genou qui rentre","Élan","Amplitude trop courte"] },

      { id:"H1-2", name:"Soulevé de terre roumain haltères", icon:"rdl", muscle:"Ischios + fessiers", sets:3, reps:"8–10", work:45, rest:120,
        desc:"Chaîne postérieure (puissance hanche).",
        steps:["Hanches en arrière, dos neutre.","Haltères proches des jambes.","Remonte en serrant les fessiers."],
        mistakes:["Dos rond","Rebond","Genoux trop pliés"] },

      { id:"H1-3", name:"Rowing unilatéral haltère", icon:"onearmrow", muscle:"Dos + stabilité", sets:3, reps:"10 / côté", work:45, rest:90,
        desc:"Tire vers la hanche (pause 1s) pour renforcer le dos utile hockey.",
        steps:["Buste stable.","Coude vers la hanche.","Retour contrôlé."],
        mistakes:["Rotation","Élan","Tirer vers l’épaule"] },

      { id:"H1-4", name:"Landmine press unilatéral", icon:"landminepress", muscle:"Épaules + gainage", sets:3, reps:"8 / côté", work:45, rest:90,
        desc:"Transfert de force + stabilité de l’épaule (contacts / tir).",
        steps:["Gainage fort.","Pousse en diagonale.","Retour contrôlé (épaule basse)."],
        mistakes:["Cambrure","Rotation du buste","Épaule qui monte"] },

      { id:"H1-5", name:"Pallof press (élastique)", icon:"pallof_press_band", muscle:"Core anti-rotation", sets:3, reps:"10–12 / côté", work:45, rest:60,
        desc:"Anti-rotation : essentiel pour tirs et changements de direction.",
        steps:["Côtes rentrées, bassin neutre.","Presse loin du buste, pause 1s.","Reviens sans tourner."],
        mistakes:["Tourner le bassin","Cambrure","Aller trop vite"] },

      { id:"H1-6", name:"Gainage latéral", icon:"sideplank", muscle:"Obliques + stabilité", sets:3, reps:"35–45 s / côté", type:"time", seconds:40, work:40, rest:60,
        desc:"Stabilité latérale (virages / appuis).",
        steps:["Coude sous l’épaule.","Hanches hautes, corps aligné.","Respire."],
        mistakes:["Hanches qui s’affaissent","Apnée","Épaule mal placée"] }
    ]
  },

  H2: {
    name: "Hockey H2 — Puissance hanche + chaîne postérieure",
    warmup: [
      { id:"WU-H2-1", name:"Cardio bas impact", icon:"wu_cardio_lowimpact", todo:"2 min", seconds:120, desc:"Progressif, sans se cramer." },
      { id:"WU-H2-2", name:"Mobilité hanches", icon:"wu_hip_mobility", todo:"90 s", seconds:90, desc:"Hanches libres pour produire de la puissance." },
      { id:"WU-H2-3", name:"Hip hinge (charnière)", icon:"wu_hip_hinge", todo:"2×8", seconds:60, desc:"Pattern hinge propre." },
      { id:"WU-H2-4", name:"Glute bridge (activation)", icon:"wu_glute_bridge_iso", todo:"1×30 s", seconds:30, desc:"Isométrique : fessiers ON." },
      { id:"WU-H2-5", name:"Band row (activation dos)", icon:"wu_band_row", todo:"1×12", seconds:45, desc:"Omoplates basses, pause 1s." }
    ],
    cooldown: [
      { id:"CD-H2-1", name:"Mobilité hanches", icon:"wu_hip_mobility", todo:"2 min", seconds:120, desc:"Relâche l’avant de hanche." },
      { id:"CD-H2-2", name:"Ouverture T-spine", icon:"wu_tspine_open", todo:"90 s", seconds:90, desc:"Récupération haut du dos." },
      { id:"CD-H2-3", name:"Respiration / relâchement", icon:"wu_breath_core", todo:"2 min", seconds:120, desc:"Calme le système." }
    ],
    items: [
      { id:"H2-1", name:"Kettlebell swing", icon:"swing", muscle:"Puissance hanche + cardio", sets:5, reps:"12–15", work:45, rest:75,
        desc:"Explosif (comme un shift) : qualité avant quantité.",
        steps:["Hinge (charnière) — pas un squat.","Explose les hanches, bras guides.","Contrôle le retour entre les jambes."],
        mistakes:["Lever avec les bras","Dos rond","Squat au lieu de hinge"] },

      { id:"H2-2", name:"Hip thrust haltère", icon:"hip_thrust_db", muscle:"Fessiers (puissance)", sets:4, reps:"8–10", work:45, rest:120,
        desc:"Puissance de poussée (accélérations). Pause 1s en haut.",
        steps:["Tibia vertical en haut.","Rétroversion bassin, fessiers serrés.","Descends contrôlé."],
        mistakes:["Hyperextension lombaire","Amplitude courte","Genoux qui s’ouvrent trop"] },

      { id:"H2-3", name:"Landmine squat", icon:"landminesquat", muscle:"Jambes + gainage", sets:3, reps:"8–10", work:45, rest:120,
        desc:"Force utile et stable (moins de stress que back squat).",
        steps:["Buste gainé, trajectoire verticale.","Genoux suivent les pointes.","Remonte en poussant le sol."],
        mistakes:["Bassin qui bascule","Genoux qui rentrent","Trop vite"] },

      { id:"H2-4", name:"Rowing landmine", icon:"landminerow", muscle:"Dos (puissance) + gainage", sets:3, reps:"8–10", work:45, rest:90,
        desc:"Puissant et stable (utile contacts).",
        steps:["Hinge, dos neutre.","Tire vers sternum bas, pause 1s.","Contrôle la descente."],
        mistakes:["Dos arrondi","Élan","Trapèzes dominants"] },

      { id:"H2-5", name:"Farmer walk", icon:"farmer", muscle:"Grip + gainage", sets:3, reps:"50 s", type:"time", seconds:50, work:50, rest:90,
        desc:"Grip / posture / tronc (batailles le long de la bande).",
        steps:["Grandis-toi, épaules basses.","Marche lente, respiration.","Ne te penche pas."],
        mistakes:["Trapèzes hauts","Pas rapides","Dos qui s’arrondit"] },

      { id:"H2-6", name:"Hollow hold", icon:"hollow_hold", muscle:"Core anti-extension", sets:3, reps:"30–40 s", type:"time", seconds:35, work:35, rest:60,
        desc:"Renforce le tronc pour transmettre la force.",
        steps:["Bas du dos collé.","Côtes rentrées.","Respire sans casser la posture."],
        mistakes:["Dos qui se creuse","Apnée","Trop dur = posture cassée"] }
    ]
  },

  H3: {
    name: "Hockey H3 — Haut du corps (tirage/stabilité) + unilatéral",
    warmup: [
      { id:"WU-H3-1", name:"Mobilité épaules", icon:"wu_shoulder_mob", todo:"2 min", seconds:120, desc:"Scapula + ouverture thoracique." },
      { id:"WU-H3-2", name:"Face pull (élastique)", icon:"wu_facepull", todo:"2×12", seconds:60, desc:"Épaules basses, pause 1s." },
      { id:"WU-H3-3", name:"Row élastique", icon:"wu_band_row", todo:"1×15", seconds:60, desc:"Active le dos, contrôle." },
      { id:"WU-H3-4", name:"Mobilité hanches", icon:"wu_hip_mobility", todo:"1 min", seconds:60, desc:"Prépare les appuis." }
    ],
    cooldown: [
      { id:"CD-H3-1", name:"Mobilité épaules", icon:"wu_shoulder_mob", todo:"90 s", seconds:90, desc:"Relâche haut du dos/épaules." },
      { id:"CD-H3-2", name:"Ouverture T-spine", icon:"wu_tspine_open", todo:"90 s", seconds:90, desc:"Rotation thoracique douce." },
      { id:"CD-H3-3", name:"Poignets/épaules", icon:"wu_wrist_shoulder", todo:"60 s", seconds:60, desc:"Utile pour le stick + prise." },
      { id:"CD-H3-4", name:"Respiration / relâchement", icon:"wu_breath_core", todo:"2 min", seconds:120, desc:"Redescends le rythme." }
    ],
    items: [
      { id:"H3-1", name:"Row poitrine sur banc (haltères)", icon:"chest_supported_row", muscle:"Dos (stabilité)", sets:4, reps:"10–12", work:45, rest:90,
        desc:"Tirage propre sans triche (épaule solide).",
        steps:["Poitrine collée au banc.","Tire coudes vers l’arrière.","Pause 1s, contrôle la descente."],
        mistakes:["Hausser les épaules","Trop lourd","Amplitude courte"] },

      { id:"H3-2", name:"Développé militaire haltères (assis)", icon:"db_ohp_seated", muscle:"Épaules + triceps", sets:3, reps:"8–10", work:45, rest:90,
        desc:"Pressing stable (contacts / posture).",
        steps:["Côtes rentrées.","Pousse au-dessus sans cambrer.","Contrôle la descente."],
        mistakes:["Cambrure","Épaules hautes","Vitesse"] },

      { id:"H3-3", name:"Face pull (élastique)", icon:"facepull_band", muscle:"Arrière épaules + posture", sets:3, reps:"15", work:45, rest:60,
        desc:"Prévention épaules + stabilité du haut du dos.",
        steps:["Tire vers le visage (coudes hauts).","Pause 1s, omoplates basses.","Retour contrôlé."],
        mistakes:["Épaules qui montent","Trop lourd","Cambrure"] },

      { id:"H3-4", name:"Goblet squat", icon:"goblet", muscle:"Jambes + tronc", sets:3, reps:"10–12", work:45, rest:90,
        desc:"Force générale + posture (sans te cramer).",
        steps:["Coude près du buste, poitrine fière.","Genoux suivent pointes.","Remonte en poussant le sol."],
        mistakes:["Genoux qui rentrent","Buste qui s’écrase","Amplitude courte"] },

      { id:"H3-5", name:"Pallof press (élastique)", icon:"pallof_press_band", muscle:"Core anti-rotation", sets:3, reps:"10 / côté", work:45, rest:60,
        desc:"Transfert de force (tirs, changements direction).",
        steps:["Bassin neutre.","Presse + pause 1s.","Reviens sans tourner."],
        mistakes:["Tourner","Cambrer","Aller trop vite"] },

      { id:"H3-6", name:"Farmer hold", icon:"farmer_hold", muscle:"Grip + gainage", sets:3, reps:"40–50 s", type:"time", seconds:45, work:45, rest:75,
        desc:"Grip pour le stick + stabilité en contact.",
        steps:["Épaules basses.","Gainage, respiration.","Tiens sans te pencher."],
        mistakes:["Trapèzes hauts","Buste qui penche","Apnée"] }
    ]
  },

  H4: {
    name: "Hockey H4 — Athlétique (transfert glace) + effort répété",
    warmup: [
      { id:"WU-H4-1", name:"Cardio bas impact", icon:"wu_cardio_lowimpact", todo:"2 min", seconds:120, desc:"Progressif." },
      { id:"WU-H4-2", name:"Mobilité hanches", icon:"wu_hip_mobility", todo:"90 s", seconds:90, desc:"Prépare les appuis latéraux." },
      { id:"WU-H4-3", name:"Abduction élastique", icon:"wu_band_abduction", todo:"1×15", seconds:45, desc:"Fessier moyen ON." },
      { id:"WU-H4-4", name:"Face pull (activation)", icon:"wu_facepull", todo:"1×12", seconds:45, desc:"Posture / épaules." },
      { id:"WU-H4-5", name:"Dead bug (léger)", icon:"wu_dead_bug_light", todo:"1×8 / côté", seconds:45, desc:"Active le gainage profond." }
    ],
    cooldown: [
      { id:"CD-H4-1", name:"Mobilité hanches", icon:"wu_hip_mobility", todo:"2 min", seconds:120, desc:"Retour au calme appuis/hanche." },
      { id:"CD-H4-2", name:"Ouverture T-spine", icon:"wu_tspine_open", todo:"90 s", seconds:90, desc:"Relâche haut du dos." },
      { id:"CD-H4-3", name:"Mobilité épaules", icon:"wu_shoulder_mob", todo:"75 s", seconds:75, desc:"Respire, épaules basses." },
      { id:"CD-H4-4", name:"Respiration / relâchement", icon:"wu_breath_core", todo:"2 min", seconds:120, desc:"Calme, récupération." }
    ],
    items: [
      { id:"H4-1", name:"Landmine press", icon:"landmine_press", muscle:"Transfert force + core", sets:4, reps:"10", work:45, rest:75,
        desc:"Pressing athlétique, gainage fort (transfert hockey).",
        steps:["Pieds stables, côtes rentrées.","Pousse en diagonale.","Retour contrôlé."],
        mistakes:["Cambrure","Épaule qui monte","Élan"] },

      { id:"H4-2", name:"Row élastique assis", icon:"band_row_seated", muscle:"Dos + posture", sets:4, reps:"15", work:45, rest:60,
        desc:"Endurance dos (posture en match).",
        steps:["Tire vers le nombril/hanche.","Pause 1s.","Retour lent."],
        mistakes:["Épaules hautes","Vitesse","Amplitude courte"] },

      { id:"H4-3", name:"Glute bridge haltère", icon:"glute_bridge_db", muscle:"Fessiers", sets:3, reps:"12", work:45, rest:75,
        desc:"Puissance hanche (support patinage).",
        steps:["Pause 1s en haut.","Bassin neutre.","Contrôle la descente."],
        mistakes:["Dos qui cambre","Amplitude courte","Trop lourd"] },

      { id:"H4-4", name:"Pompes inclinées sur banc", icon:"incline_pushup_bench", muscle:"Haut du corps + tronc", sets:3, reps:"12–15", work:45, rest:75,
        desc:"Pressing + gainage (sans se cramer).",
        steps:["Gainage solide.","Descends poitrine vers le banc.","Pousse, expire."],
        mistakes:["Hanches qui tombent","Coudes trop ouverts","Amplitude courte"] },

      { id:"H4-5", name:"Planche", icon:"plank", muscle:"Tronc", sets:3, reps:"45 s", type:"time", seconds:45, work:45, rest:60,
        desc:"Stabilité tronc (répétition d’efforts).",
        steps:["Bassin neutre.","Fessiers serrés.","Respire."],
        mistakes:["Bassin bas","Apnée","Épaules hautes"] },

      { id:"H4-6", name:"Kettlebell swing (finisher)", icon:"swing", muscle:"Effort répété type shift", sets:3, reps:"15", work:45, rest:75,
        desc:"Finisher : qualité + explosivité, pas à l’échec.",
        steps:["Hinge propre.","Explose hanches.","Contrôle le retour."],
        mistakes:["Lever avec les bras","Dos rond","Squat"] }
    ]
  }


  ,

  /* =====================
     RUN — ÉCHAUFFEMENT COURSE (7–10 km)
     ===================== */

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