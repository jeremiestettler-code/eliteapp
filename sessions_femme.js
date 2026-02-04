/* sessions_femme.js — Yasmine (Pré-op ligament genou gauche)
   Contraintes: éviter rotation + impact, volume modéré (20 min), 4 séances
   + mode "jour douleur" (ultra light)
   Images: UNIQUEMENT clés existantes dans images.js
*/

(function () {
  const PREOP_TAG = ["Pré-op"];
  const PAIN_TAG = ["Pré-op", "Jour douleur"];

  const NOTE = "Zéro rotation. Mouvement lent. Stop si douleur > 3/10.";
  const NOTE_PAIN = "Version ultra light: amplitude réduite, respiration, isométrie douce.";

  window.SESSIONS = [
    // =========================
    // A — FESSIERS / HANCHES
    // =========================
    {
      id: "ys_preop_A",
      title: "Yasmine — Fessiers & Hanches A",
      tags: PREOP_TAG,
      preop: true,
      mode: "normal",
      duration: "20 min",
      warmup: [
        { name: "Respiration + gainage", img: "wu_breath_core", work: 35, rest: 10, cues: "Souffle long." },
        { name: "Mobilité hanches", img: "wu_hip_mobility", work: 35, rest: 10, cues: NOTE },
        { name: "Glute bridge activation", img: "wu_glute_bridge", work: 35, rest: 10, cues: NOTE }
      ],
      blocks: [
        {
          name: "Renforcement",
          rounds: 1,
          exercises: [
            {
              name: "Hip Thrust haltères",
              img: "hip_thrust_db",
              sets: 4,
              reps: "10–12",
              work: 45,
              rest: 30,
              cues: "Pause en haut 1s. " + NOTE,
              loadKey: "ys_hip_thrust_db"
            },
            {
              name: "Abduction élastique debout",
              img: "band_abduction_standing",
              sets: 3,
              reps: "15–20 / côté",
              work: 40,
              rest: 25,
              cues: "Bassin fixe. " + NOTE,
              loadKey: "ys_band_abduction_standing"
            },
            {
              name: "Glute bridge haltères",
              img: "glute_bridge_db",
              sets: 3,
              reps: "12–15",
              work: 40,
              rest: 25,
              cues: "Serrer fessiers, pas de cambrure.",
              loadKey: "ys_glute_bridge_db"
            }
          ]
        }
      ]
    },

    // A (Jour douleur)
    {
      id: "ys_preop_A_pain",
      title: "Yasmine — Jour douleur A (ultra light)",
      tags: PAIN_TAG,
      preop: true,
      mode: "pain",
      painVariantOf: "ys_preop_A",
      duration: "15–18 min",
      warmup: [
        { name: "Respiration + gainage", img: "wu_breath_core", work: 40, rest: 10, cues: NOTE_PAIN },
        { name: "Mobilité hanches douce", img: "wu_hip_mobility", work: 40, rest: 10, cues: NOTE_PAIN }
      ],
      blocks: [
        {
          name: "Activation douce",
          rounds: 1,
          exercises: [
            {
              name: "Glute bridge isométrique",
              img: "wu_glute_bridge_iso",
              sets: 3,
              reps: "25–35s",
              work: 35,
              rest: 20,
              cues: NOTE_PAIN,
              loadKey: "ys_glute_bridge_iso"
            },
            {
              name: "Abduction élastique debout",
              img: "band_abduction_standing",
              sets: 2,
              reps: "12–15 / côté",
              work: 35,
              rest: 20,
              cues: NOTE_PAIN,
              loadKey: "ys_band_abduction_standing_light"
            }
          ]
        }
      ]
    },

    // =========================
    // B — QUADS / STABILITÉ (sans rotation)
    // =========================
    {
      id: "ys_preop_B",
      title: "Yasmine — Jambes B (contrôle genou safe)",
      tags: PREOP_TAG,
      preop: true,
      mode: "normal",
      duration: "20 min",
      warmup: [
        { name: "Hinge pattern", img: "wu_hip_hinge", work: 35, rest: 10, cues: NOTE },
        { name: "Glute kickback (activation)", img: "wu_glute_kickback", work: 35, rest: 10, cues: NOTE }
      ],
      blocks: [
        {
          name: "Renforcement (amplitude partielle)",
          rounds: 1,
          exercises: [
            {
              name: "Goblet squat (box / amplitude partielle)",
              img: "goblet",
              sets: 4,
              reps: "8–10",
              work: 45,
              rest: 35,
              cues: "Descendre peu, genou aligné, pas de pivot. " + NOTE,
              loadKey: "ys_goblet_partial"
            },
            {
              name: "Hip thrust pause (léger)",
              img: "hip_thrust_pause",
              sets: 3,
              reps: "8–10",
              work: 40,
              rest: 30,
              cues: "Pause 2s en haut. " + NOTE,
              loadKey: "ys_hip_thrust_pause"
            },
            {
              name: "Farmer hold (stabilité)",
              img: "farmer_hold",
              sets: 2,
              reps: "30–45s",
              work: 40,
              rest: 25,
              cues: "Gainage, bassin stable, marche possible si OK.",
              loadKey: "ys_farmer_hold"
            }
          ]
        }
      ]
    },

    // B (Jour douleur)
    {
      id: "ys_preop_B_pain",
      title: "Yasmine — Jour douleur B (ultra light)",
      tags: PAIN_TAG,
      preop: true,
      mode: "pain",
      painVariantOf: "ys_preop_B",
      duration: "15–18 min",
      warmup: [
        { name: "Respiration + gainage", img: "wu_breath_core", work: 40, rest: 10, cues: NOTE_PAIN },
        { name: "Activation douce", img: "wu_glute_bridge", work: 35, rest: 10, cues: NOTE_PAIN }
      ],
      blocks: [
        {
          name: "Contrôle & posture",
          rounds: 1,
          exercises: [
            {
              name: "Plank",
              img: "plank",
              sets: 3,
              reps: "20–35s",
              work: 35,
              rest: 20,
              cues: NOTE_PAIN,
              loadKey: "ys_plank_light"
            },
            {
              name: "Farmer hold (léger)",
              img: "farmer_hold",
              sets: 2,
              reps: "25–35s",
              work: 35,
              rest: 20,
              cues: "Gainage, très léger.",
              loadKey: "ys_farmer_hold_light"
            }
          ]
        }
      ]
    },

    // =========================
    // C — CORE anti-rotation
    // =========================
    {
      id: "ys_preop_C",
      title: "Yasmine — Core C (anti-rotation)",
      tags: PREOP_TAG,
      preop: true,
      mode: "normal",
      duration: "18–20 min",
      warmup: [
        { name: "Respiration + core", img: "wu_breath_core", work: 40, rest: 10, cues: "Côtes basses." },
        { name: "Dead bug light", img: "wu_dead_bug_light", work: 35, rest: 10, cues: NOTE }
      ],
      blocks: [
        {
          name: "Gainage",
          rounds: 1,
          exercises: [
            {
              name: "Pallof press",
              img: "pallof_press_band",
              sets: 3,
              reps: "10–12 / côté",
              work: 40,
              rest: 20,
              cues: "Résiste à la rotation.",
              loadKey: "ys_pallof_press"
            },
            {
              name: "Dead bug",
              img: "dead_bug",
              sets: 3,
              reps: "8–10 / côté",
              work: 40,
              rest: 20,
              cues: "Lent, souffle long.",
              loadKey: "ys_dead_bug"
            },
            {
              name: "Side plank",
              img: "side_plank",
              sets: 2,
              reps: "30–40s / côté",
              work: 35,
              rest: 20,
              cues: "Alignée, bassin haut.",
              loadKey: "ys_side_plank"
            },
            {
              name: "Hollow hold (option facile)",
              img: "hollow_hold",
              sets: 2,
              reps: "20–30s",
              work: 30,
              rest: 20,
              cues: "Genoux fléchis si besoin.",
              loadKey: "ys_hollow_hold"
            }
          ]
        }
      ]
    },

    // C (Jour douleur)
    {
      id: "ys_preop_C_pain",
      title: "Yasmine — Jour douleur C (ultra light)",
      tags: PAIN_TAG,
      preop: true,
      mode: "pain",
      painVariantOf: "ys_preop_C",
      duration: "14–16 min",
      warmup: [
        { name: "Respiration + core", img: "wu_breath_core", work: 45, rest: 10, cues: NOTE_PAIN }
      ],
      blocks: [
        {
          name: "Gainage doux",
          rounds: 1,
          exercises: [
            {
              name: "Pallof press (léger)",
              img: "pallof_press_band",
              sets: 2,
              reps: "8–10 / côté",
              work: 35,
              rest: 20,
              cues: NOTE_PAIN,
              loadKey: "ys_pallof_light"
            },
            {
              name: "Plank (court)",
              img: "plank",
              sets: 2,
              reps: "15–25s",
              work: 25,
              rest: 20,
              cues: NOTE_PAIN,
              loadKey: "ys_plank_very_light"
            }
          ]
        }
      ]
    },

    // =========================
    // D — HAUT DU CORPS / POSTURE
    // =========================
    {
      id: "ys_preop_D",
      title: "Yasmine — Haut du corps D (posture)",
      tags: PREOP_TAG,
      preop: true,
      mode: "normal",
      duration: "18–20 min",
      warmup: [
        { name: "Shoulder mob", img: "wu_shoulder_mob", work: 35, rest: 10 },
        { name: "Band pull-apart", img: "wu_band_pullapart", work: 35, rest: 10 }
      ],
      blocks: [
        {
          name: "Renforcement",
          rounds: 1,
          exercises: [
            {
              name: "One-arm row haltère",
              img: "onearm_row_db",
              sets: 3,
              reps: "10–12 / côté",
              work: 40,
              rest: 25,
              cues: "Buste stable, gainage.",
              loadKey: "ys_onearm_row"
            },
            {
              name: "Développé épaules (assis)",
              img: "db_ohp_seated",
              sets: 3,
              reps: "10–12",
              work: 40,
              rest: 25,
              cues: "Côtes basses, contrôle.",
              loadKey: "ys_db_ohp_seated"
            },
            {
              name: "Facepull élastique",
              img: "facepull_band",
              sets: 2,
              reps: "15–20",
              work: 35,
              rest: 20,
              cues: "Coudes hauts, omoplates.",
              loadKey: "ys_facepull_band"
            },
            {
              name: "Hammer curl",
              img: "hammer_curl",
              sets: 2,
              reps: "12–15",
              work: 30,
              rest: 20,
              loadKey: "ys_hammer_curl"
            }
          ]
        }
      ]
    },

    // D (Jour douleur)
    {
      id: "ys_preop_D_pain",
      title: "Yasmine — Jour douleur D (ultra light)",
      tags: PAIN_TAG,
      preop: true,
      mode: "pain",
      painVariantOf: "ys_preop_D",
      duration: "14–16 min",
      warmup: [
        { name: "Shoulder mob", img: "wu_shoulder_mob", work: 40, rest: 10 }
      ],
      blocks: [
        {
          name: "Posture douce",
          rounds: 1,
          exercises: [
            {
              name: "Facepull élastique (léger)",
              img: "facepull_band",
              sets: 2,
              reps: "12–15",
              work: 35,
              rest: 20,
              loadKey: "ys_facepull_light"
            },
            {
              name: "Band pull-apart",
              img: "wu_band_pullapart",
              sets: 2,
              reps: "12–15",
              work: 35,
              rest: 20,
              loadKey: "ys_pullapart_light"
            }
          ]
        }
      ]
    }
  ];
})();
