// sessions_femme.js
// =======================
// Pack Yasmine — Pré-op LCA (genou gauche)
// Compatible avec ton index.html (attend: session.warmup[], session.items[], session.cooldown[])
// Exporte: window.SESSIONS_YS (et SESSIONS_YS) — à référencer dans ta config Firestore (sessionsVar)
//
// Rappels sécurité (général) : pas de rotation de genou, amplitudes confortables, stop si douleur.

window.SESSIONS_YS = {

  /* =====================
     A1 — Pré-op : Fessiers + gainage (stable)
     ~15–20 min
     ===================== */
  A1: {
    name: "Pré-op A1 — Fessiers + gainage (genou stable)",
    warmup: [
      { id:"YS-WU-A1-1", name:"Mobilité hanches (douce)", icon:"wu_hip_mobility", todo:"2 min", seconds:120,
        desc:"Cercles de hanches + bascule bassin. Sans douleur, sans à-coups." },
      { id:"YS-WU-A1-2", name:"Activation fessiers (élastique)", icon:"band_abduction_standing", todo:"60 s", seconds:60,
        desc:"Petits pas latéraux / abduction debout. Genoux dans l'axe, pas de rotation." }
    ],
    items: [
      { id:"YS-A1-1", name:"Hip thrust haltère", icon:"hip_thrust_db", muscle:"Fessiers", sets:3, reps:"10–12", work:40, rest:45,
        desc:"Monte en serrant les fessiers. Pause 1s en haut, genoux stables.",
        how:"Pieds largeur hanches, tibias quasi verticaux. Monte sans creuser le dos.",
        mistakes:"Genoux qui rentrent/sortent • cambrure • pousser sur les lombaires" },

      { id:"YS-A1-2", name:"Glute bridge haltère", icon:"glute_bridge_db", muscle:"Fessiers / ischios", sets:2, reps:"12–15", work:40, rest:40,
        desc:"Amplitude confortable. Priorité au contrôle, pas à la charge.",
        how:"Bassin neutre, souffle en montant, pause 1s en haut.",
        mistakes:"Pousser sur les lombaires • genoux instables" },

      { id:"YS-A1-3", name:"Pallof press élastique", icon:"pallof_press_band", muscle:"Gainage anti-rotation", sets:2, reps:"10 / côté", work:40, rest:35,
        desc:"Excellent pour stabiliser sans rotation (anti-rotation).",
        how:"Bras tendus devant, résiste à la rotation, bassin stable.",
        mistakes:"Tourner le buste • cambrure • épaules hautes" },

      { id:"YS-A1-4", name:"Dead bug", icon:"dead_bug", muscle:"Gainage profond", sets:2, reps:"8 / côté", work:40, rest:35,
        desc:"Bas du dos collé, lent et contrôlé.",
        how:"Allonge bras/jambe opposés sans creuser le bas du dos.",
        mistakes:"Aller trop vite • dos qui se creuse" }
    ],
    cooldown: [
      { id:"YS-CD-A1-1", name:"Respiration / relâchement", icon:"wu_breath_core", todo:"90 s", seconds:90,
        desc:"Inspire 4s, expire 6s. Relâche épaules et mâchoire." }
    ]
  },

  /* =====================
     B1 — Pré-op : Haut du corps + gainage
     ~15–20 min
     ===================== */
  B1: {
    name: "Pré-op B1 — Haut du corps + gainage",
    warmup: [
      { id:"YS-WU-B1-1", name:"Mobilité épaules", icon:"wu_shoulder", todo:"90 s", seconds:90,
        desc:"Cercles d'épaules + ouverture thoracique (amplitude confortable)." },
      { id:"YS-WU-B1-2", name:"Row élastique léger", icon:"band_row_seated", todo:"60 s", seconds:60,
        desc:"Tirage léger, omoplates basses, contrôle." }
    ],
    items: [
      { id:"YS-B1-1", name:"Row assis élastique", icon:"band_row_seated", muscle:"Dos", sets:3, reps:"12–15", work:40, rest:40,
        desc:"Tire vers le nombril, pause 1s, contrôle en retour.",
        how:"Buste grandit, épaules basses, omoplates qui se rapprochent.",
        mistakes:"Épaules qui montent • tirer avec les biceps • dos arrondi" },

      { id:"YS-B1-2", name:"Row haltères sur banc (poitrine appuyée)", icon:"chest_supported_row", muscle:"Dos", sets:2, reps:"10–12", work:40, rest:45,
        desc:"Option très stable (pas de contrainte genou).",
        how:"Poitrine sur banc incliné, tire coudes vers l'arrière.",
        mistakes:"Élan • épaules hautes • amplitude courte" },

      { id:"YS-B1-3", name:"Développé épaules haltères (assis)", icon:"db_ohp_seated", muscle:"Épaules", sets:2, reps:"10–12", work:40, rest:45,
        desc:"Assis = plus stable. Gainage léger.",
        how:"Coudes sous les poignets, presse au-dessus sans cambrer.",
        mistakes:"Cambrure • épaules hautes • descendre trop bas" },

      { id:"YS-B1-4", name:"Gainage latéral", icon:"side_plank", muscle:"Obliques", sets:2, reps:"30 s / côté", type:"time", seconds:30, work:30, rest:30,
        desc:"Hanches hautes, alignement tête-bassin-pieds.",
        how:"Coude sous épaule, respiration lente.",
        mistakes:"Hanches qui s'affaissent • épaule mal placée" }
    ],
    cooldown: [
      { id:"YS-CD-B1-1", name:"Respiration / relâchement", icon:"wu_breath_core", todo:"90 s", seconds:90,
        desc:"Inspire 4s, expire 6s. Relâche le haut du corps." }
    ]
  },

  /* =====================
     C1 — Pré-op : Hanches + stabilité (sans rotation)
     ~15–20 min
     ===================== */
  C1: {
    name: "Pré-op C1 — Hanches + stabilité (sans rotation)",
    warmup: [
      { id:"YS-WU-C1-1", name:"Activation fessiers (élastique)", icon:"band_abduction_standing", todo:"60 s", seconds:60,
        desc:"Genoux dans l'axe, petits pas. Aucune rotation." },
      { id:"YS-WU-C1-2", name:"Charnière hanche (léger)", icon:"wu_hinge", todo:"60 s", seconds:60,
        desc:"Hinge à vide: fesses en arrière, dos neutre." }
    ],
    items: [
      { id:"YS-C1-1", name:"Soulevé de terre roumain haltères (léger)", icon:"rdl_db", muscle:"Ischios + fessiers", sets:2, reps:"10–12", work:40, rest:45,
        desc:"Très contrôlé. Confort > charge.",
        how:"Hanches en arrière, haltères près des jambes, dos neutre.",
        mistakes:"Dos rond • genoux qui bougent • descendre trop bas" },

      { id:"YS-C1-2", name:"Hip thrust (pause)", icon:"hip_thrust_pause", muscle:"Fessiers", sets:2, reps:"8–10", work:40, rest:45,
        desc:"Pause 2s en haut pour la stabilité.",
        how:"Genoux stables, pousse dans les talons.",
        mistakes:"Genoux qui partent • cambrure • vitesse" },

      { id:"YS-C1-3", name:"Abduction debout élastique", icon:"band_abduction_standing", muscle:"Fessier moyen", sets:2, reps:"12 / côté", work:40, rest:30,
        desc:"Stabilité hanche/genou (très utile pré-op).",
        how:"Tient-toi à un support, monte la jambe côté sans tourner le bassin.",
        mistakes:"Tourner le bassin • balancer • amplitude trop grande" },

      { id:"YS-C1-4", name:"Farmer hold (statique)", icon:"farmer_hold", muscle:"Gainage + posture", sets:2, reps:"40 s", type:"time", seconds:40, work:40, rest:40,
        desc:"Debout grand(e), épaules basses, poids bien réparti.",
        how:"Reste immobile, gainage léger, respiration.",
        mistakes:"Se pencher • épaules hautes • apnée" }
    ],
    cooldown: [
      { id:"YS-CD-C1-1", name:"Respiration / relâchement", icon:"wu_breath_core", todo:"90 s", seconds:90,
        desc:"Retour au calme + relâchement." }
    ]
  },

  /* =====================
     D1 — Pré-op : Full body très contrôlé (low impact)
     ~15–20 min
     ===================== */
  D1: {
    name: "Pré-op D1 — Full body (low impact)",
    warmup: [
      { id:"YS-WU-D1-1", name:"Cardio léger (sans impact)", icon:"wu_cardio_lowimpact", todo:"90 s", seconds:90,
        desc:"Marche active sur place / step-touch, sans saut." },
      { id:"YS-WU-D1-2", name:"Mobilité épaules + hanches", icon:"wu_hip_mobility", todo:"60 s", seconds:60,
        desc:"Mouvements doux, amplitude confortable." }
    ],
    items: [
      { id:"YS-D1-1", name:"Pompes inclinées (sur banc)", icon:"incline_pushup_bench", muscle:"Pecs + triceps", sets:2, reps:"8–12", work:40, rest:45,
        desc:"Option genou-friendly : stable, pas d'impact.",
        how:"Gainage, descends poitrine vers le banc, pousse en expirant.",
        mistakes:"Hanches qui tombent • amplitude trop courte" },

      { id:"YS-D1-2", name:"Row assis élastique", icon:"band_row_seated", muscle:"Dos", sets:2, reps:"12–15", work:40, rest:40,
        desc:"Contrôle + posture.",
        how:"Omoplates basses, pause 1s en fin de tirage.",
        mistakes:"Épaules hautes • tirage trop rapide" },

      { id:"YS-D1-3", name:"Glute bridge haltère", icon:"glute_bridge_db", muscle:"Fessiers", sets:2, reps:"12–15", work:40, rest:40,
        desc:"Contrôle, sans douleur.",
        how:"Pause 1s en haut, genoux stables.",
        mistakes:"Dos qui creuse • genoux instables" },

      { id:"YS-D1-4", name:"Dead bug", icon:"dead_bug", muscle:"Gainage profond", sets:2, reps:"8 / côté", work:40, rest:30,
        desc:"Lent, bas du dos collé.",
        how:"Allonge opposés, reviens sans perdre le gainage.",
        mistakes:"Aller trop vite • dos qui se creuse" }
    ],
    cooldown: [
      { id:"YS-CD-D1-1", name:"Respiration / relâchement", icon:"wu_breath_core", todo:"90 s", seconds:90,
        desc:"Respire long, relâche." }
    ]
  }
};

// Compatibilité éventuelle (si un jour tu lis la variable sans window[])
var SESSIONS_YS = window.SESSIONS_YS;
