/* sessions_femme.js — Programme Femme (Yasmine) — genou gauche pré-op ligament
   - Objectif : renforcement avant opération, rester en forme, full body, focus fessiers/abdos + stabilité
   - Contraintes genou : éviter flexion profonde, impacts, pivots/rotations, fentes/squats lourds
   - Matériel : banc, haltères réglables, landmine, KB, élastiques, poulie (triceps vertical prise serrée)

   Format compatible avec ton index.html:
   - window.SESSIONS_YS["W1"] = { name, warmup:[...], items:[...], cooldown:[...] }
*/

(function () {
  window.SESSIONS_YS = window.SESSIONS_YS || {};

  // Helpers pour garder les formats homogènes
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

  // Cooldown (étirements) : on reste doux, sans rotation genou
  const cd = {
    breathe: wu("CD-BREATH", "Respiration / relâchement", "wu_breath_core", "2 min", 120,
      "Inspire 4s, expire 6s. Relâche épaules, mâchoire, nuque."),
    hips: wu("CD-HIPS", "Ouverture hanches (douce)", "wu_hip_mobility", "2 min", 120,
      "Mobilité douce des hanches, amplitude confortable, zéro douleur."),
    posterior: wu("CD-POST", "Chaîne postérieure (hinge doux)", "wu_hip_hinge", "2 min", 120,
      "Hinge léger (dos neutre). Sensation douce ischios, sans à-coups."),
    shoulders: wu("CD-SHOUL", "Relâche épaules / haut du dos", "wu_shoulder_mob", "2 min", 120,
      "Cercles d’épaules lents + respiration. Pas de tension dans le cou.")
  };

  // =========================
  // SÉANCE W1 — Full body doux (focus fessiers + gainage) ~45 min
  // =========================
  window.SESSIONS_YS["W1"] = {
    name: "W1 — Full body doux (focus fessiers + gainage)",
    warmup: [
      wu("WU-W1-1","Respiration + gainage léger","wu_breath_core","1 min",60,
        "Respire bas (ventre/côtes), posture neutre.",
        ["Allongée ou debout, inspire 3s, expire 4s.","Gaine léger, épaules basses."],
        ["Bloquer la respiration","Cambrer le bas du dos"]),
      wu("WU-W1-2","Mobilité hanches (sans douleur genou)","wu_hip_mobility","1–2 min",90,
        "Ouvertures hanches contrôlées, amplitude confortable.",
        ["Cercles de hanches lents.","Garde le genou dans une zone confortable."],
        ["Forcer l’amplitude","Aller en douleur"]),
      wu("WU-W1-3","Activation fessiers — abductions élastique","wu_band_abduction","2×12",80,
        "Réveille le moyen fessier (stabilité).",
        ["Élastique au-dessus des genoux.","Petite amplitude, contrôle."],
        ["Compensation bas du dos","Aller trop vite"]),
      wu("WU-W1-4","Épaules + haut du dos (élastique)","wu_band_pullapart","2×12",80,
        "Prépare le haut du corps.",
        ["Tire l’élastique en ouvrant la poitrine.","Pause 1s en fin d’ouverture."],
        ["Épaules qui montent","Dos qui se cambre"]),
    ],
    items: [
      ex({
        id:"W1-1", name:"Hip thrust sur banc (haltère)", icon:"hip_thrust_db",
        muscle:"Fessiers", sets:4, reps:"10–12", rest:90, work:45, equip:"Banc + Haltère",
        desc:"Exercice clé fessiers, genou plutôt tolérant (amplitude selon confort).",
        steps:["Haut du dos sur banc, pieds au sol (position confortable).","Rétroversion légère du bassin, pousse les hanches vers le haut.","Pause 1s en haut, redescends contrôlé."],
        mistakes:["Cambrer en haut","Pousser sur les lombaires","Descente trop rapide"],
        progression:"Quand 12 reps faciles sur 4 séries : +1–2 kg."
      }),
      ex({
        id:"W1-2", name:"Développé couché haltères (banc)", icon:"dbbench",
        muscle:"Pectoraux + triceps", sets:4, reps:"8–10", rest:120, work:45, equip:"Banc + Haltères",
        desc:"Mouvement de base. Pieds posés confortablement (pas de poussée jambes).",
        steps:["Omoplates serrées, cage stable.","Descends en contrôle, coudes ~45° du buste.","Pousse sans cogner les haltères."],
        mistakes:["Épaules qui montent","Poignets cassés","Amplitude incomplète"],
        progression:"Garde 1–2 reps en réserve. +1 kg quand tu atteins 10 reps."
      }),
      ex({
        id:"W1-3", name:"Rowing unilatéral haltère (appui banc)", icon:"onearm_row_db",
        muscle:"Dos (grand dorsal) + posture", sets:3, reps:"10–12 / côté", rest:75, work:45, equip:"Banc + Haltère",
        desc:"Tirage stable, sans contrainte genou.",
        steps:["Main sur banc, buste stable.","Tire le coude vers la hanche (pause 1s).","Redescends lentement."],
        mistakes:["Tourner le buste","Tirer vers l’épaule","Élan"],
        progression:"Quand 12/12 propres : +1 kg."
      }),
      ex({
        id:"W1-4", name:"Landmine press (debout stable)", icon:"landmine_press",
        muscle:"Épaules + haut pec", sets:3, reps:"8–10 / côté", rest:75, work:45, equip:"Landmine",
        desc:"Presse très friendly pour l’épaule. Debout = plus simple pour le genou.",
        steps:["Gainage fort, trajectoire en diagonale.","Pousse en gardant l’épaule basse.","Contrôle la descente."],
        mistakes:["Cambrure","Épaule qui monte","Rotation du tronc"],
        progression:"+1–2 kg quand tu tiens 10 reps propres."
      }),
      ex({
        id:"W1-5", name:"Dead bug (gainage anti-extension)", icon:"dead_bug",
        muscle:"Abdos profonds", sets:3, reps:"8–10 / côté", rest:45, work:40, equip:"—",
        desc:"Excellent pour renforcer sans charge sur le genou.",
        steps:["Bas du dos collé au sol (ribs down).","Allonge bras + jambe opposée lentement.","Reviens sans perdre le gainage."],
        mistakes:["Dos qui se creuse","Aller trop vite","Apnée"],
        progression:"Ralentis (3s aller / 3s retour) avant d’augmenter."
      }),
      ex({
        id:"W1-6", name:"Poulie triceps vertical prise serrée", icon:"cable_tri_close",
        muscle:"Triceps", sets:3, reps:"12–15", rest:60, work:40, equip:"Poulie",
        desc:"Compatible avec ta poulie (prise serrée).",
        steps:["Coudes collés, épaules basses.","Extension complète + pause 1s.","Retour contrôlé."],
        mistakes:["Coudes qui s’écartent","Se balancer","Trop lourd"],
        progression:"+1 kg quand 15 reps faciles."
      }),
    ],
    cooldown: [cd.breathe, cd.hips, cd.shoulders]
  };

  // =========================
  // W2 — Full body (dos/épaules + fessiers/abdos) ~45 min
  // =========================
  window.SESSIONS_YS["W2"] = {
    name: "W2 — Full body (dos/épaules + fessiers/abdos)",
    warmup: [
      wu("WU-W2-1","Mobilité épaules","wu_shoulder_mob","1–2 min",90,"Cercles + rétractions omoplates.",
        ["Cercles d’épaules lents.","5 rétractions omoplates (pause 1s)."],["Hausser les épaules"]),
      wu("WU-W2-2","Charnière hanche (hinge) à vide","wu_hip_hinge","2×8",70,"Prépare RDL (sans douleur genou).",
        ["Fesses en arrière, dos neutre.","Genoux légèrement fléchis, amplitude confortable."],["Dos rond","Squat au lieu de hinge"]),
      wu("WU-W2-3","Glute bridge au sol (sans charge)","wu_glute_bridge","2×10",70,"Activation fessiers.",
        ["Pousse via talons, monte les hanches.","Pause 1s en haut."],["Cambrer en haut"]),
      wu("WU-W2-4","Row élastique","wu_band_row","2×12",80,"Active le dos.",
        ["Tire vers le nombril, pause 1s.","Épaules basses."],["Élan","Épaules hautes"]),
    ],
    items: [
      ex({
        id:"W2-1", name:"Soulevé de terre roumain haltères (RDL)", icon:"rdl_db",
        muscle:"Ischios + fessiers", sets:4, reps:"8–10", rest:120, work:45, equip:"Haltères",
        desc:"Hinge dominant, peu de flexion genou (ajuster amplitude).",
        steps:["Genoux légèrement fléchis, hanches en arrière.","Descends jusqu’à sentir l’étirement ischios.","Remonte en serrant les fessiers."],
        mistakes:["Dos rond","Rebond","Genoux trop pliés"],
        progression:"+1–2 kg quand 10 reps propres."
      }),
      ex({
        id:"W2-2", name:"Rowing landmine (buste penché)", icon:"landminerow",
        muscle:"Dos + gainage", sets:3, reps:"10–12", rest:90, work:45, equip:"Landmine",
        desc:"Tirage puissant et stable.",
        steps:["Hinge stable, dos neutre.","Tire vers le bas du sternum.","Pause 1s, redescends contrôlé."],
        mistakes:["Dos arrondi","Épaules qui montent","Tirer avec les bras uniquement"],
        progression:"+1–2 kg quand 12 reps faciles."
      }),
      ex({
        id:"W2-3", name:"Développé épaules haltères assis", icon:"db_ohp_seated",
        muscle:"Épaules + triceps", sets:3, reps:"8–10", rest:90, work:45, equip:"Banc + Haltères",
        desc:"Assis = stabilité, genou tranquille.",
        steps:["Côtes rentrées, fessiers en contact.","Pousse au-dessus de la tête.","Contrôle la descente."],
        mistakes:["Cambrure","Poignets cassés","Amplitude courte"],
        progression:"+1 kg quand 10 reps propres."
      }),
      ex({
        id:"W2-4", name:"Abduction debout élastique (moyen fessier)", icon:"band_abduction_standing",
        muscle:"Fessiers (moyen)", sets:3, reps:"15 / côté", rest:45, work:40, equip:"Élastique",
        desc:"Stabilité bassin, bon pour soutenir le genou (sans forcer).",
        steps:["Posture haute, bassin stable.","Écarte la jambe sans tourner le pied.","Retour contrôlé."],
        mistakes:["Se pencher","Tourner la hanche","Aller trop vite"],
        progression:"Augmente la tension de l’élastique."
      }),
      ex({
        id:"W2-5", name:"Pallof press (anti-rotation) élastique", icon:"pallof_press_band",
        muscle:"Abdos + stabilité", type:"time", sets:3, reps:"30–40 s / côté", seconds:35, rest:45, work:35, equip:"Élastique",
        desc:"Gainage très safe genou, top pour le tronc.",
        steps:["Élastique sur le côté, bras tendus devant.","Résiste à la rotation.","Respire lentement."],
        mistakes:["Se tourner","Apnée","Épaules hautes"],
        progression:"Plus loin du point d’ancrage = plus dur."
      }),
      ex({
        id:"W2-6", name:"Curl marteau haltères", icon:"hammer_curl",
        muscle:"Brachial + avant-bras", sets:3, reps:"10–12", rest:60, work:40, equip:"Haltères",
        desc:"Renforce le bras et la prise.",
        steps:["Poignets neutres.","Monte sans bouger le buste.","Descends lentement."],
        mistakes:["Élan","Poignets cassés","Amplitude courte"],
        progression:"+1 kg quand 12 reps faciles."
      }),
    ],
    cooldown: [cd.breathe, cd.posterior, cd.shoulders]
  };

  // =========================
  // W3 — Circuit doux (haut du corps + fessiers + core) ~45 min
  // =========================
  window.SESSIONS_YS["W3"] = {
    name: "W3 — Circuit doux (haut du corps + fessiers + core)",
    warmup: [
      wu("WU-W3-1","Cardio doux sans impact","wu_cardio_lowimpact","2 min",120,
        "Marche sur place / step-touch léger (sans douleur).",
        ["Rythme facile, respiration nasale si possible."],
        ["Sauter","Aller trop vite"]),
      wu("WU-W3-3","Glute bridge isométrique","wu_glute_bridge_iso","2×20s",70,
        "Active les fessiers sans bouger le genou.",
        ["Monte les hanches, tiens 20s.","Respire."],
        ["Cambrer","Trembler trop tôt (réduis durée)"]),
      wu("WU-W3-4","Face pull élastique","wu_facepull","2×12",80,
        "Prépare épaules, coiffe, posture.",
        ["Tire vers le visage, coudes hauts.","Pause 1s."],
        ["Épaules qui montent","Tirer avec le bas du dos"]),
    ],
    items: [
      ex({
        id:"W3-1", name:"Développé incliné haltères (banc)", icon:"inclinedb",
        muscle:"Haut pectoraux + épaules", sets:3, reps:"10–12", rest:90, work:45, equip:"Banc incliné + Haltères",
        desc:"Variante pecs, sans contrainte genou.",
        steps:["Inclinaison modérée.","Descends en contrôle.","Pousse stable (expire)."],
        mistakes:["Inclinaison trop forte","Cambrure","Amplitude courte"],
        progression:"+1 kg quand 12 reps faciles."
      }),
      ex({
        id:"W3-2", name:"Row élastique assis", icon:"band_row_seated",
        muscle:"Dos + posture", sets:3, reps:"12–15", rest:60, work:40, equip:"Élastique",
        desc:"Tirage simple et knee-friendly.",
        steps:["Assise, dos grand.","Tire coudes vers l’arrière.","Pause 1s, contrôle."],
        mistakes:["Arrondir le dos","Épaules hautes","Élan"],
        progression:"Plus de tension élastique."
      }),
      ex({
        id:"W3-3", name:"Glute bridge au sol (haltère sur bassin)", icon:"glute_bridge_db",
        muscle:"Fessiers", sets:4, reps:"12–15", rest:75, work:45, equip:"Haltère",
        desc:"Très efficace, peu stressant pour le genou.",
        steps:["Pieds confortables, genoux stables.","Monte, pause 1s.","Redescends contrôlé."],
        mistakes:["Cambrer","Pousser sur les lombaires","Rebond"],
        progression:"+1–2 kg quand 15 reps faciles."
      }),
      ex({
        id:"W3-4", name:"Élévations latérales (léger/strict)", icon:"lateral_raise",
        muscle:"Épaules (deltoïde moyen)", sets:3, reps:"15", rest:60, work:35, equip:"Haltères",
        desc:"Contrôle + posture (sans trapèzes).",
        steps:["Épaules basses.","Monte à hauteur d’épaule.","Descends en 2s."],
        mistakes:["Élan","Trapèzes dominants","Poignets cassés"],
        progression:"Augmente d’abord les reps propres, puis la charge."
      }),
      ex({
        id:"W3-5", name:"Side plank (gainage latéral)", icon:"side_plank",
        muscle:"Obliques + gainage", type:"time", sets:3, reps:"25–40 s / côté", seconds:30, rest:45, work:30, equip:"—",
        desc:"Renforce le tronc sans impact.",
        steps:["Coude sous l’épaule.","Hanches alignées.","Respire."],
        mistakes:["Hanches qui s’affaissent","Apnée","Épaule mal placée"],
        progression:"Augmente 5s/semaine."
      }),
      ex({
        id:"W3-6", name:"Farmer hold (statique) haltères", icon:"farmer_hold",
        muscle:"Gainage + grip + posture", type:"time", sets:3, reps:"30–45 s", seconds:35, rest:75, work:35, equip:"Haltères",
        desc:"Version statique (plus stable que marcher si genou sensible).",
        steps:["Grandis-toi, épaules basses.","Respire et serre le tronc.","Tiens sans te pencher."],
        mistakes:["Trapèzes","Se pencher","Bloquer la respiration"],
        progression:"Plus lourd ou +5s."
      }),
    ],
    cooldown: [cd.breathe, cd.hips, cd.shoulders]
  };

  // =========================
  // W4 — Haut du corps + bras (focus fessiers/abdos) ~45 min
  // =========================
  window.SESSIONS_YS["W4"] = {
    name: "W4 — Haut du corps + bras (focus fessiers/abdos)",
    warmup: [
      wu("WU-W4-2","Activation coiffe (élastique)","wu_external_rotation","2×12",80,
        "Stabilise l’épaule.", ["Coudes collés, rotation externe.","Lent + contrôle."], ["Trop lourd","Épaules hautes"]),
      wu("WU-W4-3","Glute kickback élastique (léger)","wu_glute_kickback","2×12 / côté",90,
        "Active fessiers sans flexion genou importante.",
        ["Buste stable, extension hanche.","Pause 1s en arrière."],
        ["Cambrer","Balancer le buste"]),
      wu("WU-W4-4","Dead bug léger (prépa)","wu_dead_bug_light","1×6 / côté",70,"Réveille le gainage.",["Lent, dos collé."],["Dos creusé"]),
    ],
    items: [
      ex({
        id:"W4-1", name:"Pompes inclinées mains sur banc", icon:"incline_pushup_bench",
        muscle:"Pectoraux + triceps", sets:4, reps:"8–12", rest:90, work:45, equip:"Banc",
        desc:"Variante ajustable (plus facile et stable).",
        steps:["Mains sur banc, corps gainé.","Descends poitrine vers le banc.","Pousse en expirant."],
        mistakes:["Hanches qui tombent","Coudes trop ouverts","Amplitude courte"],
        progression:"Baisse la hauteur (plus dur) ou +reps."
      }),
      ex({
        id:"W4-2", name:"Rowing poitrine appuyée sur banc incliné (haltères)", icon:"chest_supported_row",
        muscle:"Dos + posture", sets:3, reps:"10–12", rest:75, work:45, equip:"Banc incliné + Haltères",
        desc:"Super pour le dos, réduit la fatigue lombaire.",
        steps:["Buste sur banc incliné.","Tire les coudes vers l’arrière.","Pause 1s, contrôle."],
        mistakes:["Épaules hautes","Élan","Amplitude courte"],
        progression:"+1 kg quand 12 reps propres."
      }),
      ex({
        id:"W4-3", name:"Hip thrust (pause 2s en haut)", icon:"hip_thrust_pause",
        muscle:"Fessiers", sets:4, reps:"8–10", rest:90, work:45, equip:"Banc + Haltère",
        desc:"Plus “qualité” grâce à la pause.",
        steps:["Monte en gardant le tronc stable.","Pause 2s en haut.","Redescends contrôlé."],
        mistakes:["Cambrer","Rebond","Perdre l’alignement genou"],
        progression:"Augmente la charge quand la pause reste propre."
      }),
      ex({
        id:"W4-4", name:"Superset : Curl biceps + Extension triceps", icon:"superset_arms",
        muscle:"Bras", sets:3, reps:"12 + 12", rest:60, work:45, equip:"Haltères",
        desc:"Deux mouvements d’affilée, puis repos.",
        steps:["12 curls stricts (coudes proches).","Sans pause : 12 extensions triceps au-dessus tête (coudes serrés).","Repos 60s."],
        mistakes:["Élan","Coudes qui partent","Trop lourd"],
        progression:"+1 kg quand tu fais 12+12 faciles."
      }),
      ex({
        id:"W4-5", name:"Hollow hold (ou dead bug si trop dur)", icon:"hollow_hold",
        muscle:"Abdos", type:"time", sets:3, reps:"20–35 s", seconds:25, rest:45, work:25, equip:"—",
        desc:"Gainage efficace. Option facile : dead bug.",
        steps:["Bas du dos collé.","Respire court et contrôlé.","Tiens sans cambrer."],
        mistakes:["Dos creusé","Apnée","Trop dur (régresses)"],
        progression:"+5s quand stable."
      }),
      ex({
        id:"W4-6", name:"Face pull élastique (finisher posture)", icon:"facepull_band",
        muscle:"Arrière épaules + posture", sets:3, reps:"15", rest:45, work:35, equip:"Élastique",
        desc:"Rééquilibre tout le haut du corps.",
        steps:["Tire vers le visage, coudes hauts.","Pause 1s.","Contrôle."],
        mistakes:["Épaules hautes","Cambrure","Élan"],
        progression:"Plus de tension ou pause 2s."
      }),
    ],
    cooldown: [cd.breathe, cd.shoulders, cd.hips]
  };

  // =========================================================
  // 8 NOUVELLES SÉANCES — W5 à W12 (≈45 min chacune)
  // =========================================================

  // W5 — Posterior chain + posture + core
  window.SESSIONS_YS["W5"] = {
    name: "W5 — Chaîne postérieure (ischios/fessiers) + posture + core",
    warmup: [
      wu("WU-W5-1","Cardio doux sans impact","wu_cardio_lowimpact","2–3 min",150,"Marche active / step-touch, sans douleur."),
      wu("WU-W5-2","Charnière hanche à vide","wu_hip_hinge","2×8",70,"Prépare RDL/hinge."),
      wu("WU-W5-3","Glute bridge activation","wu_glute_bridge","2×10",70,"Pause 1s en haut, genoux stables."),
      wu("WU-W5-4","Band pull-apart","wu_band_pullapart","2×12",80,"Active posture/haut du dos.")
    ],
    items: [
      ex({ id:"W5-1", name:"RDL haltères (tempo lent)", icon:"rdl_db", muscle:"Ischios + fessiers",
        sets:4, reps:"8–10", rest:120, work:45, equip:"Haltères",
        desc:"Tempo 3s en descente. Amplitude confortable.",
        steps:["Descends en 3s, remonte en 1–2s.","Dos neutre, haltères près des cuisses."],
        mistakes:["Dos rond","Rebond","Amplitude trop grande"],
        progression:"+1–2 kg quand 10 reps propres." }),
      ex({ id:"W5-2", name:"Hip thrust haltères", icon:"hip_thrust_db", muscle:"Fessiers",
        sets:4, reps:"8–12", rest:90, work:45, equip:"Banc + Haltère",
        desc:"Pause 1s en haut, genoux dans l’axe." }),
      ex({ id:"W5-3", name:"Rowing poitrine appuyée (banc)", icon:"chest_supported_row", muscle:"Dos + posture",
        sets:3, reps:"10–12", rest:75, work:45, equip:"Banc incliné + Haltères",
        desc:"Stable, excellent pour posture." }),
      ex({ id:"W5-4", name:"Face pull élastique", icon:"facepull_band", muscle:"Arrière épaules + posture",
        sets:3, reps:"15–20", rest:60, work:35, equip:"Élastique",
        desc:"Contrôle, omoplates basses." }),
      ex({ id:"W5-5", name:"Pallof press (anti-rotation)", icon:"pallof_press_band", muscle:"Core anti-rotation",
        type:"time", sets:3, reps:"30–40 s / côté", seconds:35, rest:45, work:35, equip:"Élastique",
        desc:"Parfait pour contrainte “pas de rotation” (anti-rotation)." }),
      ex({ id:"W5-6", name:"Farmer hold (statique)", icon:"farmer_hold", muscle:"Gainage + posture",
        type:"time", sets:3, reps:"40–50 s", seconds:45, rest:60, work:45, equip:"Haltères",
        desc:"Reste immobile, respiration lente." })
    ],
    cooldown: [cd.breathe, cd.posterior, cd.hips]
  };

  // W6 — Dos dominant + épaules (knee-friendly)
  window.SESSIONS_YS["W6"] = {
    name: "W6 — Dos dominant + épaules (knee-friendly)",
    warmup: [
      wu("WU-W6-1","Mobilité épaules","wu_shoulder_mob","2 min",120,"Cercles + rétractions omoplates."),
      wu("WU-W6-2","Row élastique (léger)","wu_band_row","2×12",80,"Pause 1s en fin de tirage."),
      wu("WU-W6-3","Face pull (léger)","wu_facepull","2×12",80,"Active coiffe/posture.")
    ],
    items: [
      ex({ id:"W6-1", name:"Rowing landmine", icon:"landminerow", muscle:"Dos + gainage",
        sets:4, reps:"8–12", rest:90, work:45, equip:"Landmine",
        desc:"Buste stable, dos neutre." }),
      ex({ id:"W6-2", name:"Row unilatéral haltère (appui banc)", icon:"onearm_row_db", muscle:"Dos (grand dorsal)",
        sets:3, reps:"10–12 / côté", rest:75, work:45, equip:"Banc + Haltère",
        desc:"Contrôle, pause 1s." }),
      ex({ id:"W6-3", name:"Développé épaules assis", icon:"db_ohp_seated", muscle:"Épaules + triceps",
        sets:4, reps:"8–10", rest:90, work:45, equip:"Banc + Haltères",
        desc:"Côtes basses, pas de cambrure." }),
      ex({ id:"W6-4", name:"Élévations latérales (strict)", icon:"lateral_raise", muscle:"Deltoïde moyen",
        sets:3, reps:"12–15", rest:60, work:35, equip:"Haltères",
        desc:"Lent, sans trapèzes." }),
      ex({ id:"W6-5", name:"Reverse fly (léger)", icon:"reversefly", muscle:"Arrière d'épaule / posture",
        sets:3, reps:"12–15", rest:60, work:35, equip:"Haltères",
        desc:"Contrôle, omoplates." }),
      ex({ id:"W6-6", name:"Plank", icon:"plank", muscle:"Core", type:"time",
        sets:3, reps:"35–50 s", seconds:45, rest:40, work:45, equip:"—",
        desc:"Gainage solide, respiration lente." })
    ],
    cooldown: [cd.breathe, cd.shoulders, cd.hips]
  };

  // W7 — Pecs/triceps + core (stable)
  window.SESSIONS_YS["W7"] = {
    name: "W7 — Pecs + triceps + core (stable)",
    warmup: [
      wu("WU-W7-1","Mobilité épaules","wu_shoulder_mob","2 min",120,"Cercles lents + ouverture thoracique."),
      wu("WU-W7-2","Band pull-apart","wu_band_pullapart","2×12",80,"Épaules basses, contrôle."),
      wu("WU-W7-3","Pompes inclinées (facile)","incline_pushup_bench","1×6–8",60,"Prépare la poussée.")
    ],
    items: [
      ex({ id:"W7-1", name:"Développé couché haltères", icon:"dbbench", muscle:"Pectoraux + triceps",
        sets:4, reps:"8–10", rest:120, work:45, equip:"Banc + Haltères",
        desc:"Technique propre, 1–2 reps en réserve." }),
      ex({ id:"W7-2", name:"Développé incliné haltères", icon:"inclinedb", muscle:"Haut pec + épaules",
        sets:3, reps:"10–12", rest:90, work:45, equip:"Banc incliné + Haltères",
        desc:"Contrôle en descente (2–3s)." }),
      ex({ id:"W7-3", name:"Pompes inclinées", icon:"incline_pushup_bench", muscle:"Pecs + gainage",
        sets:3, reps:"8–12", rest:75, work:45, equip:"Banc",
        desc:"Corps gainé, coudes ~45°." }),
      ex({ id:"W7-4", name:"Poulie triceps prise serrée", icon:"cable_tri_close", muscle:"Triceps",
        sets:4, reps:"12–15", rest:60, work:40, equip:"Poulie",
        desc:"Pause 1s en bas." }),
      ex({ id:"W7-5", name:"Pallof press (anti-rotation)", icon:"pallof_press_band", muscle:"Core",
        type:"time", sets:3, reps:"30–40 s / côté", seconds:35, rest:45, work:35, equip:"Élastique",
        desc:"Résiste à la rotation." }),
      ex({ id:"W7-6", name:"Dead bug", icon:"dead_bug", muscle:"Core profond",
        sets:3, reps:"8–10 / côté", rest:45, work:40, equip:"—",
        desc:"Lent, bas du dos collé." })
    ],
    cooldown: [cd.breathe, cd.shoulders, cd.hips]
  };

  // W8 — Fessiers dominant (variations) + abdos
  window.SESSIONS_YS["W8"] = {
    name: "W8 — Fessiers dominant + abdos (sans rotation genou)",
    warmup: [
      wu("WU-W8-1","Cardio doux sans impact","wu_cardio_lowimpact","2–3 min",150,"Marche active / step-touch."),
      wu("WU-W8-2","Glute kickback (élastique)","wu_glute_kickback","2×12 / côté",90,"Bassin stable."),
      wu("WU-W8-3","Abduction élastique","wu_band_abduction","2×12",80,"Réveil moyen fessier.")
    ],
    items: [
      ex({ id:"W8-1", name:"Hip thrust (pause 2s)", icon:"hip_thrust_pause", muscle:"Fessiers",
        sets:4, reps:"8–10", rest:90, work:45, equip:"Banc + Haltère",
        desc:"Pause 2s en haut, contrôle." }),
      ex({ id:"W8-2", name:"Glute bridge haltère", icon:"glute_bridge_db", muscle:"Fessiers",
        sets:4, reps:"12–15", rest:75, work:45, equip:"Haltère",
        desc:"Pause 1s en haut, tempo lent." }),
      ex({ id:"W8-3", name:"RDL haltères (modéré)", icon:"rdl_db", muscle:"Ischios + fessiers",
        sets:3, reps:"10–12", rest:90, work:45, equip:"Haltères",
        desc:"Dos neutre, amplitude confortable." }),
      ex({ id:"W8-4", name:"Abduction debout élastique", icon:"band_abduction_standing", muscle:"Moyen fessier",
        sets:4, reps:"12–15 / côté", rest:45, work:40, equip:"Élastique",
        desc:"Bassin fixe, pas de rotation." }),
      ex({ id:"W8-5", name:"Hollow hold", icon:"hollow_hold", muscle:"Abdos",
        type:"time", sets:3, reps:"20–35 s", seconds:25, rest:45, work:25, equip:"—",
        desc:"Option facile: genoux fléchis." }),
      ex({ id:"W8-6", name:"Side plank", icon:"side_plank", muscle:"Obliques",
        type:"time", sets:3, reps:"25–40 s / côté", seconds:30, rest:45, work:30, equip:"—",
        desc:"Hanches alignées, respiration." })
    ],
    cooldown: [cd.breathe, cd.posterior, cd.hips]
  };

  // W9 — Full body landmine + posture (low impact)
  window.SESSIONS_YS["W9"] = {
    name: "W9 — Full body landmine + posture (low impact)",
    warmup: [
      wu("WU-W9-1","Mobilité hanches","wu_hip_mobility","2 min",120,"Amplitude douce, sans douleur."),
      wu("WU-W9-2","Band row (léger)","wu_band_row","2×12",80,"Active le dos."),
      wu("WU-W9-3","Glute bridge activation","wu_glute_bridge","2×10",70,"Pause 1s en haut.")
    ],
    items: [
      ex({ id:"W9-1", name:"Landmine press", icon:"landmine_press", muscle:"Épaules + pec",
        sets:4, reps:"8–10 / côté", rest:75, work:45, equip:"Landmine",
        desc:"Trajectoire diagonale, gainage." }),
      ex({ id:"W9-2", name:"Landmine row", icon:"landminerow", muscle:"Dos",
        sets:4, reps:"10–12", rest:90, work:45, equip:"Landmine",
        desc:"Buste stable, dos neutre." }),
      ex({ id:"W9-3", name:"Hip thrust haltères", icon:"hip_thrust_db", muscle:"Fessiers",
        sets:4, reps:"8–12", rest:90, work:45, equip:"Banc + Haltère",
        desc:"Genoux stables, pause 1s." }),
      ex({ id:"W9-4", name:"Reverse fly (léger)", icon:"reversefly", muscle:"Arrière épaules",
        sets:3, reps:"12–15", rest:60, work:35, equip:"Haltères",
        desc:"Contrôle, sans trapèzes." }),
      ex({ id:"W9-5", name:"Farmer hold (statique)", icon:"farmer_hold", muscle:"Gainage + posture",
        type:"time", sets:3, reps:"40–50 s", seconds:45, rest:60, work:45, equip:"Haltères",
        desc:"Grandis-toi, respiration lente." }),
      ex({ id:"W9-6", name:"Dead bug", icon:"dead_bug", muscle:"Core",
        sets:3, reps:"8–10 / côté", rest:45, work:40, equip:"—",
        desc:"Lent, dos collé." })
    ],
    cooldown: [cd.breathe, cd.shoulders, cd.hips]
  };

  // W10 — Core/stabilité + haut du corps (anti-rotation)
  window.SESSIONS_YS["W10"] = {
    name: "W10 — Core & stabilité (anti-rotation) + haut du corps",
    warmup: [
      wu("WU-W10-1","Respiration + core","wu_breath_core","1–2 min",90,"Ribs down, posture neutre."),
      wu("WU-W10-2","Dead bug léger","wu_dead_bug_light","2×6 / côté",80,"Contrôle."),
      wu("WU-W10-3","Band pull-apart","wu_band_pullapart","2×12",80,"Posture.")
    ],
    items: [
      ex({ id:"W10-1", name:"Pallof press (anti-rotation)", icon:"pallof_press_band", muscle:"Core anti-rotation",
        type:"time", sets:4, reps:"30–40 s / côté", seconds:35, rest:45, work:35, equip:"Élastique",
        desc:"Résiste à la rotation, bassin stable." }),
      ex({ id:"W10-2", name:"Plank", icon:"plank", muscle:"Core",
        type:"time", sets:4, reps:"35–50 s", seconds:45, rest:40, work:45, equip:"—",
        desc:"Gainage solide, respiration." }),
      ex({ id:"W10-3", name:"Side plank", icon:"side_plank", muscle:"Obliques",
        type:"time", sets:3, reps:"25–40 s / côté", seconds:30, rest:45, work:30, equip:"—",
        desc:"Hanches hautes." }),
      ex({ id:"W10-4", name:"Row poitrine appuyée (banc)", icon:"chest_supported_row", muscle:"Dos",
        sets:4, reps:"10–12", rest:75, work:45, equip:"Banc incliné + Haltères",
        desc:"Stable, posture." }),
      ex({ id:"W10-5", name:"Développé épaules assis", icon:"db_ohp_seated", muscle:"Épaules",
        sets:3, reps:"8–10", rest:90, work:45, equip:"Banc + Haltères",
        desc:"Côtes basses, contrôle." }),
      ex({ id:"W10-6", name:"Face pull élastique", icon:"facepull_band", muscle:"Posture",
        sets:3, reps:"15–20", rest:60, work:35, equip:"Élastique",
        desc:"Omoplates basses." })
    ],
    cooldown: [cd.breathe, cd.shoulders, cd.hips]
  };

  // W11 — Endurance force (haut du corps + fessiers) — safe genou
  window.SESSIONS_YS["W11"] = {
    name: "W11 — Endurance force (haut du corps + fessiers) — safe genou",
    warmup: [
      wu("WU-W11-1","Cardio doux sans impact","wu_cardio_lowimpact","2 min",120,"Rythme facile."),
      wu("WU-W11-2","Glute bridge activation","wu_glute_bridge","2×10",70,"Pause 1s."),
      wu("WU-W11-3","Row élastique léger","wu_band_row","2×12",80,"Pause 1s."),
      wu("WU-W11-4","Mobilité épaules","wu_shoulder_mob","1–2 min",90,"Cercles lents.")
    ],
    items: [
      ex({ id:"W11-1", name:"Hip thrust haltères", icon:"hip_thrust_db", muscle:"Fessiers",
        sets:4, reps:"10–12", rest:90, work:45, equip:"Banc + Haltère",
        desc:"Qualité avant charge." }),
      ex({ id:"W11-2", name:"Développé incliné haltères", icon:"inclinedb", muscle:"Pecs/épaules",
        sets:4, reps:"10–12", rest:90, work:45, equip:"Banc incliné + Haltères",
        desc:"Contrôle." }),
      ex({ id:"W11-3", name:"Row unilatéral haltère", icon:"onearm_row_db", muscle:"Dos",
        sets:3, reps:"10–12 / côté", rest:75, work:45, equip:"Banc + Haltère",
        desc:"Pause 1s en haut." }),
      ex({ id:"W11-4", name:"Élévations latérales", icon:"lateral_raise", muscle:"Épaules",
        sets:3, reps:"15", rest:60, work:35, equip:"Haltères",
        desc:"Strict." }),
      ex({ id:"W11-5", name:"Curl biceps haltères", icon:"dbcurl", muscle:"Biceps",
        sets:3, reps:"10–15", rest:60, work:40, equip:"Haltères",
        desc:"Contrôle en descente." }),
      ex({ id:"W11-6", name:"Triceps poulie prise serrée", icon:"cable_tri_close", muscle:"Triceps",
        sets:3, reps:"12–15", rest:60, work:40, equip:"Poulie",
        desc:"Coudes collés." }),
      ex({ id:"W11-7", name:"Dead bug", icon:"dead_bug", muscle:"Core",
        sets:2, reps:"8–10 / côté", rest:45, work:40, equip:"—",
        desc:"Lent." })
    ],
    cooldown: [cd.breathe, cd.shoulders, cd.hips]
  };

  // W12 — “Qualité & contrôle” (deload) — 45 min doux
  window.SESSIONS_YS["W12"] = {
    name: "W12 — Qualité & contrôle (deload doux) — 45 min",
    warmup: [
      wu("WU-W12-1","Respiration + posture","wu_breath_core","2 min",120,"Souffle long, relâche."),
      wu("WU-W12-2","Mobilité hanches","wu_hip_mobility","2 min",120,"Amplitude douce."),
      wu("WU-W12-3","Mobilité épaules","wu_shoulder_mob","2 min",120,"Cercles lents."),
      wu("WU-W12-4","Glute bridge iso","wu_glute_bridge_iso","2×20s",70,"Active fessiers sans stress.")
    ],
    items: [
      ex({ id:"W12-1", name:"Hip thrust (léger, tempo)", icon:"hip_thrust_db", muscle:"Fessiers",
        sets:3, reps:"10–12", rest:75, work:45, equip:"Banc + Haltère",
        desc:"Tempo 2–1–2, charge légère/modérée." }),
      ex({ id:"W12-2", name:"RDL léger", icon:"rdl_db", muscle:"Ischios",
        sets:3, reps:"10–12", rest:90, work:45, equip:"Haltères",
        desc:"Ampleur confortable, dos neutre." }),
      ex({ id:"W12-3", name:"Row élastique assis", icon:"band_row_seated", muscle:"Dos",
        sets:3, reps:"12–15", rest:60, work:40, equip:"Élastique",
        desc:"Pause 1s." }),
      ex({ id:"W12-4", name:"Pompes inclinées", icon:"incline_pushup_bench", muscle:"Pecs",
        sets:3, reps:"8–12", rest:75, work:45, equip:"Banc",
        desc:"Corps gainé." }),
      ex({ id:"W12-5", name:"Face pull", icon:"facepull_band", muscle:"Posture",
        sets:3, reps:"15–20", rest:60, work:35, equip:"Élastique",
        desc:"Contrôle." }),
      ex({ id:"W12-6", name:"Pallof press", icon:"pallof_press_band", muscle:"Core anti-rotation",
        type:"time", sets:3, reps:"30–40 s / côté", seconds:35, rest:45, work:35, equip:"Élastique",
        desc:"Anti-rotation." }),
      ex({ id:"W12-7", name:"Plank (court)", icon:"plank", muscle:"Core",
        type:"time", sets:3, reps:"25–40 s", seconds:30, rest:40, work:30, equip:"—",
        desc:"Qualité, respiration." })
    ],
    cooldown: [cd.breathe, cd.hips, cd.shoulders, cd.posterior]
  };

})();

// Expose aussi la variable globale `SESSIONS_YS` pour compatibilité
var SESSIONS_YS = window.SESSIONS_YS;
