// sessions_femme.js
// =======================
// Pack Yasmine — Pré-op ligament (genou gauche) — VERSION 45 MIN
// Contraintes: pas de rotation du genou, pas d’impact, amplitude confortable, contrôle.
// Format compatible index.html: session.warmup[] + session.items[] + session.cooldown[]
// Exporte: window.SESSIONS_YS (et SESSIONS_YS)
//
// Conseil sécurité: stop si douleur > 3/10, réduire charge/amplitude, privilégier isométrie.

window.SESSIONS_YS = {

  /* =========================================================
     A45 — Fessiers / Ischios + Core (stable)
     ≈ 45 min (8–10' warmup, 30–32' work, 5–7' cooldown)
     ========================================================= */
  A45: {
    name: "Pré-op A45 — Fessiers / Ischios + Core (45 min)",
    warmup: [
      { id:"YS45-WU-A-1", name:"Cardio léger sans impact", icon:"wu_cardio_lowimpact", todo:"3 min", seconds:180,
        desc:"Marche active sur place / step-touch. Aucun saut, genou stable." },
      { id:"YS45-WU-A-2", name:"Charnière hanche (hinge) à vide", icon:"wu_hip_hinge", todo:"2 min", seconds:120,
        desc:"Bassin en arrière, dos neutre. Prépare RDL/hip thrust." },
      { id:"YS45-WU-A-3", name:"Glute bridge activation", icon:"wu_glute_bridge", todo:"90 s", seconds:90,
        desc:"Petite amplitude + pause 1s en haut. Genoux dans l'axe." },
      { id:"YS45-WU-A-4", name:"Abduction élastique debout", icon:"band_abduction_standing", todo:"60 s", seconds:60,
        desc:"Petits mouvements propres. Zéro rotation du genou." }
    ],
    items: [
      { id:"YS45-A-1", name:"Hip thrust haltères", icon:"hip_thrust_db", muscle:"Fessiers", sets:4, reps:"8–12", work:45, rest:60,
        desc:"Pause 1s en haut, genoux stables.",
        how:"Tibias quasi verticaux. Pousse dans les talons. Ne cambre pas.",
        mistakes:"Genoux qui bougent • cambrure • mouvement trop rapide" },

      { id:"YS45-A-2", name:"Soulevé de terre roumain haltères", icon:"rdl_db", muscle:"Ischios + fessiers", sets:3, reps:"8–12", work:45, rest:60,
        desc:"Contrôle total. Amplitude confortable (dos neutre).",
        how:"Hanches en arrière, haltères proches des cuisses, légère flexion genoux.",
        mistakes:"Dos rond • descendre trop bas • tirer avec le dos" },

      { id:"YS45-A-3", name:"Glute bridge haltère", icon:"glute_bridge_db", muscle:"Fessiers", sets:3, reps:"12–15", work:45, rest:45,
        desc:"Tempo lent, pause 1s en haut.",
        how:"Bassin neutre, souffle en montant.",
        mistakes:"Pousser sur lombaires • genoux instables" },

      { id:"YS45-A-4", name:"Hip thrust (pause 2s)", icon:"hip_thrust_pause", muscle:"Fessiers (stabilité)", sets:2, reps:"8–10", work:40, rest:50,
        desc:"Très utile pré-op: stabilité + contrôle.",
        how:"Monte, bloque 2s, redescends lentement.",
        mistakes:"Perdre le gainage • genoux qui partent" },

      { id:"YS45-A-5", name:"Abduction élastique debout", icon:"band_abduction_standing", muscle:"Fessier moyen", sets:3, reps:"12–15 / côté", work:40, rest:35,
        desc:"Bassin fixe, jambe s'écarte sans tourner.",
        how:"Tiens-toi à un support si besoin.",
        mistakes:"Tourner le bassin • balancer" },

      { id:"YS45-A-6", name:"Farmer hold (statique)", icon:"farmer_hold", muscle:"Gainage + posture", sets:3, reps:"45 s", type:"time", seconds:45, work:45, rest:45,
        desc:"Debout grand(e), épaules basses, poids réparti.",
        how:"Reste immobile, respiration lente.",
        mistakes:"Se pencher • épaules hautes • apnée" },

      { id:"YS45-A-7", name:"Pallof press élastique", icon:"pallof_press_band", muscle:"Anti-rotation", sets:3, reps:"10–12 / côté", work:40, rest:35,
        desc:"Anti-rotation (parfait si rotation interdite).",
        how:"Bras tendus, résiste à la rotation, bassin stable.",
        mistakes:"Tourner le buste • cambrure" },

      { id:"YS45-A-8", name:"Dead bug", icon:"dead_bug", muscle:"Core profond", sets:2, reps:"8–10 / côté", work:40, rest:30,
        desc:"Lent. Bas du dos collé.",
        how:"Allonge opposés sans creuser le bas du dos.",
        mistakes:"Aller trop vite • dos qui se creuse" }
    ],
    cooldown: [
      { id:"YS45-CD-A-1", name:"Respiration / relâchement", icon:"wu_breath_core", todo:"2 min", seconds:120,
        desc:"Inspire 4s, expire 6s. Relâche épaules et mâchoire." },
      { id:"YS45-CD-A-2", name:"Étirement ischios (léger)", icon:"wu_hip_hinge", todo:"90 s", seconds:90,
        desc:"Hinge léger, dos neutre. Sensation douce, pas d'à-coup." },
      { id:"YS45-CD-A-3", name:"Ouverture hanches (douce)", icon:"wu_glute_bridge", todo:"90 s", seconds:90,
        desc:"Position confortable, respiration lente. Zéro douleur." }
    ]
  },

  /* =========================================================
     B45 — Haut du corps (push/pull) + posture + core
     ≈ 45 min
     ========================================================= */
  B45: {
    name: "Pré-op B45 — Haut du corps + posture (45 min)",
    warmup: [
      { id:"YS45-WU-B-1", name:"Facepull léger (élastique)", icon:"wu_facepull", todo:"90 s", seconds:90,
        desc:"Omoplates basses, contrôle. Prépare le dos/épaules." },
      { id:"YS45-WU-B-2", name:"Band pull-apart", icon:"wu_band_pullapart", todo:"60 s", seconds:60,
        desc:"Poitrine fière, épaules basses. Mouvement court/propre." },
      { id:"YS45-WU-B-3", name:"Row élastique léger", icon:"band_row_seated", todo:"60 s", seconds:60,
        desc:"Tirage facile, pause 1s, posture." }
    ],
    items: [
      { id:"YS45-B-1", name:"Row assis élastique", icon:"band_row_seated", muscle:"Dos", sets:4, reps:"12–15", work:45, rest:45,
        desc:"Pause 1s en fin de tirage.",
        how:"Tire vers le nombril, omoplates basses.",
        mistakes:"Épaules hautes • tirer avec biceps • dos arrondi" },

      { id:"YS45-B-2", name:"Row poitrine appuyée (banc)", icon:"chest_supported_row", muscle:"Dos (stable)", sets:3, reps:"10–12", work:45, rest:60,
        desc:"Très stable, genou au repos.",
        how:"Poitrine sur banc incliné, tire coudes vers l'arrière.",
        mistakes:"Élan • épaules hautes" },

      { id:"YS45-B-3", name:"Pompes inclinées (banc)", icon:"incline_pushup_bench", muscle:"Pecs + triceps", sets:3, reps:"8–12", work:45, rest:60,
        desc:"Option genou-friendly, gainage.",
        how:"Corps gainé, descend poitrine vers banc, pousse en expirant.",
        mistakes:"Hanches qui tombent • amplitude trop petite" },

      { id:"YS45-B-4", name:"Développé épaules haltères (assis)", icon:"db_ohp_seated", muscle:"Épaules", sets:3, reps:"8–12", work:45, rest:60,
        desc:"Assis = stable. Côtes basses, pas de cambrure.",
        how:"Poignets au-dessus coudes, presse au-dessus.",
        mistakes:"Cambrure • épaules hautes" },

      { id:"YS45-B-5", name:"Facepull élastique", icon:"facepull_band", muscle:"Arrière d'épaule", sets:3, reps:"15–20", work:45, rest:45,
        desc:"Posture + épaules en santé.",
        how:"Tire vers le visage, coudes hauts, omoplates serrées.",
        mistakes:"Cou qui se tend • épaules hautes" },

      { id:"YS45-B-6", name:"Curl biceps haltères", icon:"dbcurl", muscle:"Biceps", sets:3, reps:"10–15", work:40, rest:40,
        desc:"Contrôle en descente (2s).",
        how:"Coudes fixes, ne balance pas.",
        mistakes:"Élan • épaules qui montent" },

      { id:"YS45-B-7", name:"Hammer curl", icon:"hammer_curl", muscle:"Brachial/avant-bras", sets:2, reps:"10–15", work:40, rest:40,
        desc:"Ne triche pas, contrôle.",
        how:"Poignets neutres, amplitude complète.",
        mistakes:"Élan • amplitude réduite" },

      { id:"YS45-B-8", name:"Plank", icon:"plank", muscle:"Core", sets:3, reps:"35–50 s", type:"time", seconds:45, work:45, rest:30,
        desc:"Gainage solide, respiration lente.",
        how:"Côtes basses, fessiers serrés.",
        mistakes:"Dos qui creuse • épaules trop en avant" }
    ],
    cooldown: [
      { id:"YS45-CD-B-1", name:"Respiration / relâchement", icon:"wu_breath_core", todo:"2 min", seconds:120,
        desc:"Inspire 4s, expire 6s." },
      { id:"YS45-CD-B-2", name:"Rotation externe épaule (douce)", icon:"wu_external_rotation", todo:"2 min", seconds:120,
        desc:"Élastique léger, mouvement lent. Objectif: confort, pas fatigue." },
      { id:"YS45-CD-B-3", name:"Ouverture poitrine (douce)", icon:"wu_band_pullapart", todo:"90 s", seconds:90,
        desc:"Étire pectoraux doucement, respiration lente." }
    ]
  },

  /* =========================================================
     C45 — Hanches + stabilité + anti-rotation (pré-op)
     ≈ 45 min
     ========================================================= */
  C45: {
    name: "Pré-op C45 — Stabilité hanches + anti-rotation (45 min)",
    warmup: [
      { id:"YS45-WU-C-1", name:"Cardio léger sans impact", icon:"wu_cardio_lowimpact", todo:"3 min", seconds:180,
        desc:"Marche active / step-touch. Genou stable." },
      { id:"YS45-WU-C-2", name:"Hinge à vide", icon:"wu_hinge", todo:"90 s", seconds:90,
        desc:"Prépare RDL, dos neutre." },
      { id:"YS45-WU-C-3", name:"Glute kickback (élastique)", icon:"wu_glute_kickback", todo:"90 s", seconds:90,
        desc:"Petits kicks, bassin stable." },
      { id:"YS45-WU-C-4", name:"Abduction debout", icon:"band_abduction_standing", todo:"60 s", seconds:60,
        desc:"Active fessier moyen (stabilité genou)." }
    ],
    items: [
      { id:"YS45-C-1", name:"Farmer hold (statique)", icon:"farmer_hold", muscle:"Gainage + posture", sets:4, reps:"45 s", type:"time", seconds:45, work:45, rest:45,
        desc:"Super pour stabilité globale sans rotation.",
        how:"Debout grand(e), épaules basses, respiration lente.",
        mistakes:"Se pencher • apnée" },

      { id:"YS45-C-2", name:"Soulevé de terre roumain haltères", icon:"rdl_db", muscle:"Ischios + fessiers", sets:3, reps:"10–12", work:45, rest:60,
        desc:"Contrôle et confort.",
        how:"Hanches en arrière, haltères proches, dos neutre.",
        mistakes:"Dos rond • descendre trop bas" },

      { id:"YS45-C-3", name:"Hip thrust (pause 2s)", icon:"hip_thrust_pause", muscle:"Fessiers", sets:3, reps:"8–10", work:45, rest:60,
        desc:"Pause 2s en haut, genoux stables.",
        how:"Pousse dans talons, garde le bassin neutre.",
        mistakes:"Genoux qui bougent • vitesse" },

      { id:"YS45-C-4", name:"Abduction élastique debout", icon:"band_abduction_standing", muscle:"Fessier moyen", sets:3, reps:"15 / côté", work:40, rest:35,
        desc:"Renforce le contrôle hanche→genou.",
        how:"Tiens-toi à un support, bassin fixe.",
        mistakes:"Tourner bassin • balancer" },

      { id:"YS45-C-5", name:"Pallof press", icon:"pallof_press_band", muscle:"Anti-rotation", sets:4, reps:"10–12 / côté", work:40, rest:35,
        desc:"Résiste à la rotation (clé pré-op).",
        how:"Bras devant, bassin stable, souffle.",
        mistakes:"Tourner • cambrer" },

      { id:"YS45-C-6", name:"Dead bug", icon:"dead_bug", muscle:"Core", sets:3, reps:"8–10 / côté", work:40, rest:30,
        desc:"Lent, bas du dos collé.",
        how:"Allonge opposés, reviens sous contrôle.",
        mistakes:"Vitesse • dos qui se creuse" },

      { id:"YS45-C-7", name:"Side plank", icon:"side_plank", muscle:"Obliques", sets:2, reps:"35–45 s / côté", type:"time", seconds:40, work:40, rest:30,
        desc:"Hanches hautes, alignement.",
        how:"Coude sous épaule, respiration lente.",
        mistakes:"Hanches qui s'affaissent" }
    ],
    cooldown: [
      { id:"YS45-CD-C-1", name:"Respiration / relâchement", icon:"wu_breath_core", todo:"2 min", seconds:120,
        desc:"Retour au calme, souffle long." },
      { id:"YS45-CD-C-2", name:"Étirement fessiers (douceur)", icon:"wu_glute_bridge", todo:"2 min", seconds:120,
        desc:"Position confortable, pas de rotation de genou." },
      { id:"YS45-CD-C-3", name:"Ouverture hanches (douce)", icon:"wu_hip_hinge", todo:"90 s", seconds:90,
        desc:"Mobilité douce, sans douleur." }
    ]
  },

  /* =========================================================
     D45 — Full body contrôlé (low impact) + posture + core
     ≈ 45 min
     ========================================================= */
  D45: {
    name: "Pré-op D45 — Full body low impact (45 min)",
    warmup: [
      { id:"YS45-WU-D-1", name:"Cardio léger sans impact", icon:"wu_cardio_lowimpact", todo:"3 min", seconds:180,
        desc:"Marche active / step-touch. Genou stable." },
      { id:"YS45-WU-D-2", name:"Band row léger", icon:"band_row_seated", todo:"60 s", seconds:60,
        desc:"Active le dos, omoplates basses." },
      { id:"YS45-WU-D-3", name:"Glute bridge activation", icon:"wu_glute_bridge", todo:"60 s", seconds:60,
        desc:"Pause 1s en haut, genoux stables." },
      { id:"YS45-WU-D-4", name:"Dead bug light", icon:"wu_dead_bug_light", todo:"60 s", seconds:60,
        desc:"Gainage léger, contrôle." }
    ],
    items: [
      { id:"YS45-D-1", name:"Pompes inclinées (banc)", icon:"incline_pushup_bench", muscle:"Pecs + triceps", sets:3, reps:"8–12", work:45, rest:55,
        desc:"Stable et genou-friendly.",
        how:"Gainage, descend sous contrôle.",
        mistakes:"Hanches qui tombent • amplitude trop petite" },

      { id:"YS45-D-2", name:"Row assis élastique", icon:"band_row_seated", muscle:"Dos", sets:3, reps:"12–15", work:45, rest:50,
        desc:"Posture + contrôle.",
        how:"Pause 1s en fin de tirage.",
        mistakes:"Épaules hautes" },

      { id:"YS45-D-3", name:"Hip thrust haltères", icon:"hip_thrust_db", muscle:"Fessiers", sets:4, reps:"8–12", work:45, rest:60,
        desc:"Pause 1s en haut, genoux dans l'axe.",
        how:"Pousse dans talons, bassin neutre.",
        mistakes:"Cambrure • genoux instables" },

      { id:"YS45-D-4", name:"RDL haltères (léger/modéré)", icon:"rdl_db", muscle:"Ischios + fessiers", sets:3, reps:"10–12", work:45, rest:60,
        desc:"Contrôle total, confort.",
        how:"Hanches en arrière, dos neutre.",
        mistakes:"Dos rond • amplitude excessive" },

      { id:"YS45-D-5", name:"Développé épaules (assis)", icon:"db_ohp_seated", muscle:"Épaules", sets:3, reps:"8–12", work:45, rest:60,
        desc:"Côtes basses, contrôle.",
        how:"Presse sans cambrer.",
        mistakes:"Cambrure • épaules hautes" },

      { id:"YS45-D-6", name:"Facepull élastique", icon:"facepull_band", muscle:"Posture", sets:3, reps:"15–20", work:45, rest:45,
        desc:"Omoplates basses, coudes hauts.",
        how:"Tire vers le visage, contrôle.",
        mistakes:"Cou tendu • épaules hautes" },

      { id:"YS45-D-7", name:"Dead bug", icon:"dead_bug", muscle:"Core", sets:2, reps:"8–10 / côté", work:40, rest:30,
        desc:"Bas du dos collé.",
        how:"Lent et propre.",
        mistakes:"Aller trop vite" },

      { id:"YS45-D-8", name:"Hollow hold (facile si besoin)", icon:"hollow_hold", muscle:"Core", sets:2, reps:"20–30 s", type:"time", seconds:25, work:25, rest:30,
        desc:"Genoux fléchis si besoin, côtes basses.",
        how:"Garde le bas du dos au sol.",
        mistakes:"Dos qui se creuse" }
    ],
    cooldown: [
      { id:"YS45-CD-D-1", name:"Respiration / relâchement", icon:"wu_breath_core", todo:"2 min", seconds:120,
        desc:"Souffle long, relâche." },
      { id:"YS45-CD-D-2", name:"Étirement chaîne postérieure (léger)", icon:"wu_hinge", todo:"2 min", seconds:120,
        desc:"Hinge doux, pas d'à-coups." },
      { id:"YS45-CD-D-3", name:"Ouverture poitrine + épaules", icon:"wu_band_pullapart", todo:"90 s", seconds:90,
        desc:"Étirement doux pectoraux/épaules." }
    ]
  }
};

// Compatibilité éventuelle si un jour tu lis la variable sans window[]
var SESSIONS_YS = window.SESSIONS_YS;
