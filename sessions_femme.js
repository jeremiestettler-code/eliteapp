/* sessions_femme.js
   Yasmine — Pré-op ligament genou gauche
   IMPORTANT: l’app attend window["SESSIONS_YS"]
*/

(function () {

  window.SESSIONS_YS = [

    {
      id: "ys_preop_A",
      title: "Yasmine — Pré-op A (Fessiers)",
      warmup: [
        { name: "Respiration + core", img: "wu_breath_core", work: 35, rest: 10 },
        { name: "Mobilité hanches", img: "wu_hip_mobility", work: 35, rest: 10 },
        { name: "Glute bridge", img: "wu_glute_bridge", work: 35, rest: 10 },
        { name: "Abduction élastique", img: "wu_band_abduction", work: 35, rest: 10 }
      ],
      blocks: [
        {
          name: "Renforcement",
          rounds: 1,
          exercises: [
            { name: "Hip Thrust haltères", img: "hip_thrust_db", sets: 4, reps: "10–12", work: 45, rest: 30 },
            { name: "Glute Bridge haltère", img: "glute_bridge_db", sets: 3, reps: "12–15", work: 40, rest: 25 },
            { name: "Abduction élastique debout", img: "band_abduction_standing", sets: 3, reps: "15–20 / côté", work: 40, rest: 25 }
          ]
        }
      ]
    },

    {
      id: "ys_preop_B",
      title: "Yasmine — Pré-op B (Stabilité)",
      warmup: [
        { name: "Hip hinge", img: "wu_hip_hinge", work: 35, rest: 10 },
        { name: "Dead bug léger", img: "wu_dead_bug_light", work: 35, rest: 10 }
      ],
      blocks: [
        {
          name: "Contrôle",
          rounds: 1,
          exercises: [
            { name: "Farmer hold", img: "farmer_hold", sets: 3, reps: "30–45s", work: 40, rest: 25 },
            { name: "Pallof Press", img: "pallof_press_band", sets: 3, reps: "10–12 / côté", work: 40, rest: 20 },
            { name: "Dead Bug", img: "dead_bug", sets: 3, reps: "8–10 / côté", work: 40, rest: 20 }
          ]
        }
      ]
    },

    {
      id: "ys_preop_C",
      title: "Yasmine — Pré-op C (Core)",
      warmup: [
        { name: "Respiration + core", img: "wu_breath_core", work: 40, rest: 10 }
      ],
      blocks: [
        {
          name: "Gainage",
          rounds: 1,
          exercises: [
            { name: "Plank", img: "plank", sets: 3, reps: "25–40s", work: 35, rest: 20 },
            { name: "Side Plank", img: "side_plank", sets: 2, reps: "25–35s / côté", work: 35, rest: 20 },
            { name: "Hollow Hold", img: "hollow_hold", sets: 2, reps: "15–25s", work: 25, rest: 20 }
          ]
        }
      ]
    },

    {
      id: "ys_preop_D",
      title: "Yasmine — Pré-op D (Haut du corps)",
      warmup: [
        { name: "Mobilité épaules", img: "wu_shoulder_mob", work: 35, rest: 10 },
        { name: "Band pull apart", img: "wu_band_pullapart", work: 35, rest: 10 }
      ],
      blocks: [
        {
          name: "Renforcement",
          rounds: 1,
          exercises: [
            { name: "Row haltère", img: "onearm_row_db", sets: 3, reps: "10–12 / côté", work: 40, rest: 25 },
            { name: "Développé épaules assis", img: "db_ohp_seated", sets: 3, reps: "10–12", work: 40, rest: 25 },
            { name: "Face Pull élastique", img: "facepull_band", sets: 2, reps: "15–20", work: 35, rest: 20 }
          ]
        }
      ]
    }

  ];

})();
