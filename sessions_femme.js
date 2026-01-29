/* sessions.js — Programme Femme (genou gauche blessé / pré-op)
   - Objectif : rester en forme + full body, focus léger fessiers/abdos
   - Contraintes genou : éviter flexion profonde, impacts, pivots, fentes/squats lourds
   - Matériel : banc, haltères réglables, landmine, KB 12kg, élastiques, poulie (triceps vertical prise serrée)
*/

(function () {
  window.SESSIONS_YS = window.SESSIONS_YS || {};

  // Helpers (optionnels) : pour garder les formats homogènes
  const wu = (id, name, icon, todo, seconds, desc, steps = [], mistakes = []) => ({
    id, name, icon, todo, seconds, desc, steps, mistakes
  });

  const ex = ({
    id, name, icon,
    muscle, type = "reps",
    sets = 3, reps = "10", rest = 60, work = 45, seconds,
    equip = "", desc = "", steps = [], mistakes = [],
    progression = ""
  }) => ({
    id, name, icon, muscle, type, sets, reps, rest, work, seconds, equip, desc, steps, mistakes, progression
  });

  // =========================
  // SÉANCE W1 — Haut du corps + fessiers (knee-friendly)
  // =========================
  window.SESSIONS_YS["W1"] = {
    name: "W1 — Full body doux (focus fessiers + gainage)",
    warmup: [
      wu(
        "WU-W1-1",
        "Respiration + gainage léger",
        "wu_breath_core",
        "1 min",
        60,
        "Respire bas (ventre/côtes), posture neutre.",
        ["Allongée ou debout, inspire 3s, expire 4s.", "Gaine léger, épaules basses."],
        ["Bloquer la respiration", "Cambrer le bas du dos"]
      ),
      wu(
        "WU-W1-2",
        "Mobilité hanches (sans douleur genou)",
        "wu_hip_mobility",
        "1–2 min",
        90,
        "Ouvertures hanches contrôlées, amplitude confortable.",
        ["Cercles de hanches lents.", "Garde le genou dans une zone confortable."],
        ["Forcer l’amplitude", "Aller en douleur"]
      ),
      wu(
        "WU-W1-3",
        "Activation fessiers — abductions élastique",
        "wu_band_abduction",
        "2×12",
        80,
        "Réveille le moyen fessier (stabilité).",
        ["Élastique au-dessus des genoux.", "Petite amplitude, contrôle."],
        ["Compensation par le bas du dos", "Aller trop vite"]
      ),
      wu(
        "WU-W1-4",
        "Épaules + haut du dos (élastique)",
        "wu_band_pullapart",
        "2×12",
        80,
        "Prépare le haut du corps.",
        ["Tire l’élastique en ouvrant la poitrine.", "Pause 1s en fin d’ouverture."],
        ["Épaules qui montent", "Dos qui se cambre"]
      ),
    ],
    items: [
      ex({
        id: "W1-1",
        name: "Hip thrust sur banc (haltère)",
        icon: "hip_thrust_db",
        muscle: "Fessiers",
        type: "reps",
        sets: 4,
        reps: "10–12",
        rest: 90,
        work: 45,
        equip: "Banc + Haltère",
        desc: "Exercice clé fessiers, genou plutôt tolérant (amplitude selon confort).",
        steps: [
          "Haut du dos sur banc, pieds au sol (position confortable).",
          "Rétroversion légère du bassin, pousse les hanches vers le haut.",
          "Pause 1s en haut, redescends contrôlé."
        ],
        mistakes: ["Cambrer en haut", "Pousser sur les lombaires", "Descente trop rapide"],
        progression: "Quand 12 reps faciles sur 4 séries : +1–2 kg."
      }),
      ex({
        id: "W1-2",
        name: "Développé couché haltères (banc)",
        icon: "dbbench",
        muscle: "Pectoraux + triceps",
        type: "reps",
        sets: 4,
        reps: "8–10",
        rest: 120,
        work: 45,
        equip: "Banc + Haltères",
        desc: "Mouvement de base. Pieds posés confortablement (pas de poussée jambes).",
        steps: [
          "Omoplates serrées, cage stable.",
          "Descends en contrôle, coudes ~45° du buste.",
          "Pousse sans cogner les haltères."
        ],
        mistakes: ["Épaules qui montent", "Poignets cassés", "Amplitude incomplète"],
        progression: "Garde 1–2 reps en réserve. +1 kg quand tu atteins 10 reps."
      }),
      ex({
        id: "W1-3",
        name: "Rowing unilatéral haltère (appui banc)",
        icon: "onearm_row_db",
        muscle: "Dos (grand dorsal) + posture",
        type: "reps",
        sets: 3,
        reps: "10–12 / côté",
        rest: 75,
        work: 45,
        equip: "Banc + Haltère",
        desc: "Tirage stable, sans contrainte genou.",
        steps: [
          "Main/genou opposés sur banc si ok, sinon 2 mains sur banc et buste stable.",
          "Tire le coude vers la hanche (pause 1s).",
          "Redescends lentement."
        ],
        mistakes: ["Tourner le buste", "Tirer vers l’épaule", "Élan"],
        progression: "Quand 12/12 propres : +1 kg."
      }),
      ex({
        id: "W1-4",
        name: "Landmine press (à genou si OK / debout sinon)",
        icon: "landmine_press",
        muscle: "Épaules + haut pec",
        type: "reps",
        sets: 3,
        reps: "8–10 / côté",
        rest: 75,
        work: 45,
        equip: "Landmine",
        desc: "Presse très “friendly” pour l’épaule. Position selon genou (debout si douleur).",
        steps: [
          "Gainage fort, trajectoire en diagonale.",
          "Pousse en gardant l’épaule basse.",
          "Contrôle la descente."
        ],
        mistakes: ["Cambrure", "Épaule qui monte", "Rotation du tronc"],
        progression: "+1–2 kg quand tu tiens 10 reps propres."
      }),
      ex({
        id: "W1-5",
        name: "Dead bug (gainage anti-extension)",
        icon: "dead_bug",
        muscle: "Abdos profonds",
        type: "reps",
        sets: 3,
        reps: "8–10 / côté",
        rest: 45,
        work: 40,
        equip: "—",
        desc: "Excellent pour renforcer sans charge sur le genou.",
        steps: [
          "Bas du dos collé au sol (ribs down).",
          "Allonge bras + jambe opposée lentement.",
          "Reviens sans perdre le gainage."
        ],
        mistakes: ["Dos qui se creuse", "Aller trop vite", "Apnée"],
        progression: "Ralentis (3s aller / 3s retour) avant d’augmenter."
      }),
      ex({
        id: "W1-6",
        name: "Poulie triceps vertical prise serrée",
        icon: "cable_tri_close",
        muscle: "Triceps",
        type: "reps",
        sets: 3,
        reps: "12–15",
        rest: 60,
        work: 40,
        equip: "Poulie",
        desc: "Compatible avec ta poulie (prise serrée).",
        steps: [
          "Coudes collés, épaules basses.",
          "Extension complète + pause 1s.",
          "Retour contrôlé."
        ],
        mistakes: ["Coudes qui s’écartent", "Se balancer", "Trop lourd"],
        progression: "+1 kg quand 15 reps faciles."
      }),
    ]
  };

  // =========================
  // SÉANCE W2 — Dos/épaules + fessiers + abdos (knee-friendly)
  // =========================
  window.SESSIONS_YS["W2"] = {
    name: "W2 — Full body (dos/épaules + fessiers/abdos)",
    warmup: [
      wu("WU-W2-1", "Mobilité épaules", "wu_shoulder_mob", "1–2 min", 90,
        "Cercles + rétractions omoplates.", ["Cercles d’épaules lents.", "5 rétractions omoplates (pause 1s)."], ["Hausser les épaules"]),
      wu("WU-W2-2", "Charnière hanche (hinge) à vide", "wu_hip_hinge", "2×8", 70,
        "Prépare RDL (sans douleur genou).", ["Fesses en arrière, dos neutre.", "Genoux légèrement fléchis, amplitude confortable."], ["Dos rond", "Squat au lieu de hinge"]),
      wu("WU-W2-3", "Glute bridge au sol (sans charge)", "wu_glute_bridge", "2×10", 70,
        "Activation fessiers.", ["Pousse via talons, monte les hanches.", "Pause 1s en haut."], ["Cambrer en haut"]),
      wu("WU-W2-4", "Row élastique", "wu_band_row", "2×12", 80,
        "Active le dos.", ["Tire vers le nombril, pause 1s.", "Épaules basses."], ["Élan", "Épaules hautes"]),
    ],
    items: [
      ex({
        id: "W2-1",
        name: "Soulevé de terre roumain haltères (RDL)",
        icon: "rdl_db",
        muscle: "Ischios + fessiers",
        sets: 4,
        reps: "8–10",
        rest: 120,
        work: 45,
        equip: "Haltères",
        desc: "Hinge dominant, peu de flexion genou (ajuster amplitude).",
        steps: [
          "Genoux légèrement fléchis, hanches en arrière.",
          "Descends jusqu’à sentir l’étirement ischios.",
          "Remonte en serrant les fessiers."
        ],
        mistakes: ["Dos rond", "Rebond", "Genoux trop pliés"],
        progression: "+1–2 kg quand 10 reps propres."
      }),
      ex({
        id: "W2-2",
        name: "Rowing landmine (buste penché)",
        icon: "landmine_row",
        muscle: "Dos + gainage",
        sets: 3,
        reps: "10–12",
        rest: 90,
        work: 45,
        equip: "Landmine",
        desc: "Tirage puissant et stable.",
        steps: ["Hinge stable, dos neutre.", "Tire vers le bas du sternum.", "Pause 1s, redescends contrôlé."],
        mistakes: ["Dos arrondi", "Épaules qui montent", "Tirer avec les bras uniquement"],
        progression: "+1–2 kg quand 12 reps faciles."
      }),
      ex({
        id: "W2-3",
        name: "Développé épaules haltères assis",
        icon: "db_ohp_seated",
        muscle: "Épaules + triceps",
        sets: 3,
        reps: "8–10",
        rest: 90,
        work: 45,
        equip: "Banc + Haltères",
        desc: "Assis = stabilité, genou tranquille.",
        steps: ["Côtes rentrées, fessiers en contact.", "Pousse au-dessus de la tête.", "Contrôle la descente."],
        mistakes: ["Cambrure", "Poignets cassés", "Amplitude courte"],
        progression: "+1 kg quand 10 reps propres."
      }),
      ex({
        id: "W2-4",
        name: "Abduction debout élastique (moyen fessier)",
        icon: "band_abduction_standing",
        muscle: "Fessiers (moyen)",
        sets: 3,
        reps: "15 / côté",
        rest: 45,
        work: 40,
        equip: "Élastique",
        desc: "Stabilité bassin, bon pour soutenir le genou (sans forcer).",
        steps: ["Posture haute, bassin stable.", "Écarte la jambe sans tourner le pied.", "Retour contrôlé."],
        mistakes: ["Se pencher", "Tourner la hanche", "Aller trop vite"],
        progression: "Augmente la tension de l’élastique."
      }),
      ex({
        id: "W2-5",
        name: "Pallof press (anti-rotation) élastique",
        icon: "pallof_press_band",
        muscle: "Abdos + stabilité",
        type: "time",
        sets: 3,
        reps: "30–40 s / côté",
        seconds: 35,
        rest: 45,
        work: 35,
        equip: "Élastique",
        desc: "Gainage très safe genou, top pour le tronc.",
        steps: ["Élastique sur le côté, bras tendus devant.", "Résiste à la rotation.", "Respire lentement."],
        mistakes: ["Se tourner", "Apnée", "Épaules hautes"],
        progression: "Plus loin du point d’ancrage = plus dur."
      }),
      ex({
        id: "W2-6",
        name: "Curl marteau haltères",
        icon: "hammer_curl",
        muscle: "Brachial + avant-bras",
        sets: 3,
        reps: "10–12",
        rest: 60,
        work: 40,
        equip: "Haltères",
        desc: "Renforce le bras et la prise.",
        steps: ["Poignets neutres.", "Monte sans bouger le buste.", "Descends lentement."],
        mistakes: ["Élan", "Poignets cassés", "Amplitude courte"],
        progression: "+1 kg quand 12 reps faciles."
      }),
    ]
  };

  // =========================
  // SÉANCE W3 — Haut du corps + fessiers + core (circuit doux)
  // =========================
  window.SESSIONS_YS["W3"] = {
    name: "W3 — Circuit doux (haut du corps + fessiers + core)",
    warmup: [
      wu("WU-W3-1", "Cardio doux sans impact", "wu_cardio_lowimpact", "2 min", 120,
        "Marche sur place / step-touch léger (sans douleur).",
        ["Rythme facile, respiration nasale si possible."],
        ["Sauter", "Aller trop vite"]
      ),
      wu("WU-W3-2", "Mobilité thoracique", "wu_tspine_open", "1–2 min", 90,
        "Ouvre le haut du dos pour les presses/row.",
        ["Rotation thoracique douce.", "Épaules basses."],
        ["Forcer la rotation"]
      ),
      wu("WU-W3-3", "Glute bridge isométrique", "wu_glute_bridge_iso", "2×20s", 70,
        "Active les fessiers sans bouger le genou.",
        ["Monte les hanches, tiens 20s.", "Respire."],
        ["Cambrer", "Trembler trop tôt (réduis durée)"]
      ),
      wu("WU-W3-4", "Face pull élastique", "wu_facepull", "2×12", 80,
        "Prépare épaules, coiffe, posture.",
        ["Tire vers le visage, coudes hauts.", "Pause 1s."],
        ["Épaules qui montent", "Tirer avec le bas du dos"]
      ),
    ],
    items: [
      ex({
        id: "W3-1",
        name: "Développé incliné haltères (banc)",
        icon: "inclinedb",
        muscle: "Haut pectoraux + épaules",
        sets: 3,
        reps: "10–12",
        rest: 90,
        work: 45,
        equip: "Banc incliné + Haltères",
        desc: "Variante pecs, sans contrainte genou.",
        steps: ["Inclinaison modérée.", "Descends en contrôle.", "Pousse stable (expire)."],
        mistakes: ["Inclinaison trop forte", "Cambrure", "Amplitude courte"],
        progression: "+1 kg quand 12 reps faciles."
      }),
      ex({
        id: "W3-2",
        name: "Row élastique assis",
        icon: "band_row_seated",
        muscle: "Dos + posture",
        sets: 3,
        reps: "12–15",
        rest: 60,
        work: 40,
        equip: "Élastique",
        desc: "Tirage simple et “knee-friendly”.",
        steps: ["Assise, dos grand.", "Tire coudes vers l’arrière.", "Pause 1s, contrôle."],
        mistakes: ["Arrondir le dos", "Épaules hautes", "Élan"],
        progression: "Plus de tension élastique."
      }),
      ex({
        id: "W3-3",
        name: "Glute bridge au sol (haltère sur bassin)",
        icon: "glute_bridge_db",
        muscle: "Fessiers",
        sets: 4,
        reps: "12–15",
        rest: 75,
        work: 45,
        equip: "Haltère",
        desc: "Très efficace, peu stressant pour le genou.",
        steps: ["Pieds confortables, genoux stables.", "Monte, pause 1s.", "Redescends contrôlé."],
        mistakes: ["Cambrer", "Pousser sur les lombaires", "Rebond"],
        progression: "+1–2 kg quand 15 reps faciles."
      }),
      ex({
        id: "W3-4",
        name: "Élévations latérales (léger/strict)",
        icon: "lateral_raise",
        muscle: "Épaules (deltoïde moyen)",
        sets: 3,
        reps: "15",
        rest: 60,
        work: 35,
        equip: "Haltères",
        desc: "Contrôle + posture (sans trapèzes).",
        steps: ["Épaules basses.", "Monte à hauteur d’épaule.", "Descends en 2s."],
        mistakes: ["Élan", "Trapèzes dominants", "Poignets cassés"],
        progression: "Augmente d’abord les reps propres, puis la charge."
      }),
      ex({
        id: "W3-5",
        name: "Side plank (gainage latéral)",
        icon: "side_plank",
        muscle: "Obliques + gainage",
        type: "time",
        sets: 3,
        reps: "25–40 s / côté",
        seconds: 30,
        rest: 45,
        work: 30,
        equip: "—",
        desc: "Renforce le tronc sans impact.",
        steps: ["Coude sous l’épaule.", "Hanches alignées.", "Respire."],
        mistakes: ["Hanches qui s’affaissent", "Apnée", "Épaule mal placée"],
        progression: "Augmente 5s/semaine."
      }),
      ex({
        id: "W3-6",
        name: "Farmer hold (statique) haltères",
        icon: "farmer_hold",
        muscle: "Gainage + grip + posture",
        type: "time",
        sets: 3,
        reps: "30–45 s",
        seconds: 35,
        rest: 75,
        work: 35,
        equip: "Haltères",
        desc: "Version statique (plus stable que marcher si genou sensible).",
        steps: ["Grandis-toi, épaules basses.", "Respire et serre le tronc.", "Tiens sans te pencher."],
        mistakes: ["Trapèzes", "Se pencher", "Bloquer la respiration"],
        progression: "Plus lourd ou +5s."
      }),
    ]
  };

  // =========================
  // SÉANCE W4 — Bras + haut du corps + fessiers/abdos (sans stress genou)
  // =========================
  window.SESSIONS_YS["W4"] = {
    name: "W4 — Haut du corps + bras (focus fessiers/abdos)",
    warmup: [
      wu("WU-W4-1", "Mobilité poignets/épaules", "wu_wrist_shoulder", "1–2 min", 90,
        "Prépare presses/curls.", ["Rotations poignets.", "Cercles d’épaules, 10 répétitions."], ["Aller trop vite"]),
      wu("WU-W4-2", "Activation coiffe (élastique)", "wu_external_rotation", "2×12", 80,
        "Stabilise l’épaule.", ["Coudes collés, rotation externe.", "Lent + contrôle."], ["Trop lourd", "Épaules hautes"]),
      wu("WU-W4-3", "Glute kickback élastique (léger)", "wu_glute_kickback", "2×12 / côté", 90,
        "Active fessiers sans flexion genou importante.",
        ["Buste stable, extension hanche.", "Pause 1s en arrière."],
        ["Cambrer", "Balancer le buste"]
      ),
      wu("WU-W4-4", "Dead bug léger (prépa)", "wu_dead_bug_light", "1×6 / côté", 70,
        "Réveille le gainage.", ["Lent, dos collé."], ["Dos creusé"]),
    ],
    items: [
      ex({
        id: "W4-1",
        name: "Pompes inclinées mains sur banc",
        icon: "incline_pushup_bench",
        muscle: "Pectoraux + triceps",
        sets: 4,
        reps: "8–12",
        rest: 90,
        work: 45,
        equip: "Banc",
        desc: "Variante ajustable (plus facile et stable).",
        steps: ["Mains sur banc, corps gainé.", "Descends poitrine vers le banc.", "Pousse en expirant."],
        mistakes: ["Hanches qui tombent", "Coudes trop ouverts", "Amplitude courte"],
        progression: "Baisse la hauteur (plus dur) ou +reps."
      }),
      ex({
        id: "W4-2",
        name: "Rowing poitrine appuyée sur banc incliné (haltères)",
        icon: "chest_supported_row",
        muscle: "Dos + posture",
        sets: 3,
        reps: "10–12",
        rest: 75,
        work: 45,
        equip: "Banc incliné + Haltères",
        desc: "Super pour le dos, réduit la fatigue lombaire.",
        steps: ["Buste sur banc incliné.", "Tire les coudes vers l’arrière.", "Pause 1s, contrôle."],
        mistakes: ["Épaules hautes", "Élan", "Amplitude courte"],
        progression: "+1 kg quand 12 reps propres."
      }),
      ex({
        id: "W4-3",
        name: "Hip thrust (pause 2s en haut)",
        icon: "hip_thrust_pause",
        muscle: "Fessiers",
        sets: 4,
        reps: "8–10",
        rest: 90,
        work: 45,
        equip: "Banc + Haltère",
        desc: "Même exercice, plus “qualité” grâce à la pause.",
        steps: ["Monte en gardant le tronc stable.", "Pause 2s en haut.", "Redescends contrôlé."],
        mistakes: ["Cambrer", "Rebond", "Perdre l’alignement genou"],
        progression: "Augmente la charge quand la pause reste propre."
      }),
      ex({
        id: "W4-4",
        name: "Superset : Curl biceps + Extension triceps au-dessus tête",
        icon: "superset_arms",
        muscle: "Bras",
        sets: 3,
        reps: "12 + 12",
        rest: 60,
        work: 45,
        equip: "Haltères",
        desc: "Deux mouvements d’affilée, puis repos.",
        steps: [
          "12 curls stricts (coudes proches).",
          "Sans pause : 12 extensions triceps au-dessus de la tête (coudes serrés).",
          "Repos 60s."
        ],
        mistakes: ["Élan", "Coudes qui partent", "Trop lourd"],
        progression: "+1 kg quand tu fais 12+12 faciles."
      }),
      ex({
        id: "W4-5",
        name: "Hollow hold (ou dead bug si trop dur)",
        icon: "hollow_hold",
        muscle: "Abdos",
        type: "time",
        sets: 3,
        reps: "20–35 s",
        seconds: 25,
        rest: 45,
        work: 25,
        equip: "—",
        desc: "Gainage efficace. Option facile : dead bug.",
        steps: ["Bas du dos collé.", "Respire court et contrôlé.", "Tiens sans cambrer."],
        mistakes: ["Dos creusé", "Apnée", "Trop dur (régresses)"],
        progression: "+5s quand stable."
      }),
      ex({
        id: "W4-6",
        name: "Face pull élastique (finisher posture)",
        icon: "facepull_band",
        muscle: "Arrière épaules + posture",
        sets: 3,
        reps: "15",
        rest: 45,
        work: 35,
        equip: "Élastique",
        desc: "Rééquilibre tout le haut du corps.",
        steps: ["Tire vers le visage, coudes hauts.", "Pause 1s.", "Contrôle."],
        mistakes: ["Épaules hautes", "Cambrure", "Élan"],
        progression: "Plus de tension ou pause 2s."
      }),
    ]
  };

})();

// Expose aussi la variable globale `SESSIONS_YS` pour compatibilité
var SESSIONS_YS = window.SESSIONS_YS;
