// Replace with your VIP Payment Bot username (without @)
const VIP_BOT_URL = "https://t.me/himandhim_vip_bot";

// ============================================================================
// YOUR DRAMA CATALOG — Edit only this file to add episodes, seasons, or posters
// Status options for each drama:
//   "ongoing"     -> 🔴 ONGOING • විකාශය වේ
//   "completed"   -> ✅ COMPLETED • සම්පූර්ණයි
//   "next_season" -> ✨ NEW SEASON • නව සමය ළඟදීම
//   "upcoming"    -> ⏳ COMING SOON • ළඟදීම
// ============================================================================
const DRAMAS = [
  {
    titleSi: "නව කතා මාලාව (Coming Soon)",
    titleEn: "New Original Series",
    year: "2026",
    status: "upcoming",
    statusNoteSi: "ළඟදීම VIP නාලිකාවෙන්",
    statusNoteEn: "Premiering Soon on VIP",
    tagSi: "නව කතා සමය 1 • සිංහල BL",
    tagEn: "NEW SERIES • SINHALA BL",
    descSi: "Him & Him වෙතින් ගෙන එන අලුත්ම සිංහල BL කතා මාලාව! පළමු කොටස ළඟදීම VIP නාලිකාවෙන් බලාපොරොත්තු වන්න... ✨💙🔥",
    descEn: "A brand-new original Sinhala BL series from Him & Him! Stay tuned for the official premiere exclusively on VIP. ✨💙🔥",
    slideUrl: "upcoming_slide.webp",
    posterUrl: "upcoming_cover.webp",
    gradient: "linear-gradient(155deg, #0b4f6c 0%, #1c1138 55%, #07050c 100%)",
    seasons: [
      {
        seasonNameSi: "පූර්ව දැක්ම (Coming Soon)",
        seasonNameEn: "Official Premiere Preview",
        episodes: [
          {
            num: 1,
            titleSi: "පළමු කොටස ළඟදීම • VIP දැනුම්දීම",
            titleEn: "Episode 01 Coming Soon • Join VIP",
            subSi: "ළඟදීම නිකුත් වේ • VIP සාමාජිකත්වය ලබාගන්න",
            subEn: "Premiering Soon • Tap to Join VIP",
            thumbUrl: "upcoming_slide.webp",
            link: "https://t.me/himandhim_vip_bot"
          }
        ]
      }
    ]
  },
  {
    titleSi: "ගරළ",
    titleEn: "Garala",
    year: "2026",
    status: "next_season",
    statusNoteSi: "Season 2 ළඟදීම",
    statusNoteEn: "Season 2 Coming Soon",
    tagSi: "කතා සමයන් 1 • සිංහල BL",
    tagEn: "1 SEASON • SINHALA BL",
    descSi: "සෙවනැලි යුද්ධය ඇරඹී ඇත! අඳුරු මායාවන් සහ පාවාදීම් මැද, අශේන් සහ නෙතුගේ නොබිඳෙන ආදරය ජය ගනීවිද? 🐍⚔️💙",
    descEn: "The Civil War of Shadows has begun. Amid dark sorcery and betrayal, will Ashen and Nethu’s unbreakable bond survive? 🐍⚔️💙",
    slideUrl: "garala_slide.webp",
    posterUrl: "garala_cover.webp",
    gradient: "linear-gradient(155deg, #0d4f3c 0%, #0b2922 55%, #07050c 100%)",
    seasons: [
      {
        seasonNameSi: "Season 1 (පළමු කතා සමය)",
        seasonNameEn: "Season 1",
        episodes: [
          { num: 1, titleSi: "01 වන කොටස", titleEn: "Episode 01", subSi: "සම්පූර්ණ කොටස • VIP", subEn: "Full Uncut • VIP", thumbUrl: "garala_ep1.jpg", link: "https://t.me/c/4339816032/17" },
          { num: 2, titleSi: "02 වන කොටස", titleEn: "Episode 02", subSi: "සම්පූර්ණ කොටස • VIP", subEn: "Full Uncut • VIP", thumbUrl: "garala_ep2.jpg", link: "https://t.me/c/4339816032/18" },
          { num: 3, titleSi: "03 වන කොටස", titleEn: "Episode 03", subSi: "සම්පූර්ණ කොටස • VIP", subEn: "Full Uncut • VIP", thumbUrl: "garala_ep3.jpg", link: "https://t.me/c/4339816032/19" },
          { num: 4, titleSi: "04 වන කොටස", titleEn: "Episode 04", subSi: "සම්පූර්ණ කොටස • VIP", subEn: "Full Uncut • VIP", thumbUrl: "garala_ep4.jpg", link: "https://t.me/c/4339816032/20" },
          { num: 5, titleSi: "05 වන කොටස", titleEn: "Episode 05", subSi: "සම්පූර්ණ කොටස • VIP", subEn: "Full Uncut • VIP", thumbUrl: "garala_ep5.jpg", link: "https://t.me/c/4339816032/21" },
          { num: 6, titleSi: "06 වන කොටස", titleEn: "Episode 06", subSi: "සම්පූර්ණ කොටස • VIP", subEn: "Full Uncut • VIP", thumbUrl: "garala_ep6.jpg", link: "https://t.me/c/4339816032/29" },
          { num: 7, titleSi: "07 වන කොටස", titleEn: "Episode 07", subSi: "සම්පූර්ණ කොටස • VIP", subEn: "Full Uncut • VIP", thumbUrl: "garala_ep7.jpg", link: "https://t.me/c/4339816032/31" },
          { num: 8, titleSi: "08 වන කොටස", titleEn: "Episode 08", subSi: "සම්පූර්ණ කොටස • VIP", subEn: "Full Uncut • VIP", thumbUrl: "garala_ep8.jpg", link: "https://t.me/c/4339816032/33" },
          { num: 9, titleSi: "09 වන කොටස", titleEn: "Episode 09", subSi: "සම්පූර්ණ කොටස • VIP", subEn: "Full Uncut • VIP", thumbUrl: "garala_ep9.jpg", link: "https://t.me/c/4339816032/35" },
          { num: 10, titleSi: "10 වන කොටස", titleEn: "Episode 10", subSi: "සම්පූර්ණ කොටස • VIP", subEn: "Full Uncut • VIP", thumbUrl: "garala_ep10.jpg", link: "https://t.me/c/4339816032/36" },
          { num: 11, titleSi: "11 වන කොටස", titleEn: "Episode 11", subSi: "සම්පූර්ණ කොටස • VIP", subEn: "Full Uncut • VIP", thumbUrl: "garala_ep11.jpg", link: "https://t.me/c/4339816032/38" },
          { num: 12, titleSi: "12 වන කොටස", titleEn: "Episode 12", subSi: "සම්පූර්ණ කොටස • VIP", subEn: "Full Uncut • VIP", thumbUrl: "garala_ep12.jpg", link: "https://t.me/c/4339816032/39" },
          { num: 13, titleSi: "13 වන කොටස", titleEn: "Episode 13", subSi: "සම්පූර්ණ කොටස • VIP", subEn: "Full Uncut • VIP", thumbUrl: "garala_ep13.jpg", link: "https://t.me/c/4339816032/40" }
        ]
      }
    ]
  },
  {
    titleSi: "විරල හුස්ම",
    titleEn: "Virala Husma",
    year: "2026",
    status: "ongoing",
    statusNoteSi: "නව කොටස් ළඟදීම",
    statusNoteEn: "New Episodes Soon",
    tagSi: "කතා සමයන් 1 • සිංහල BL",
    tagEn: "1 SEASON • SINHALA BL",
    descSi: "සැඩ කුණාටුවක් සහ නිහඬ අහසක් එකම හුස්මකට යාවුණු අසම්මත ප්‍රේමය... ⛈️✨",
    descEn: "When a rebellious storm meets unshakeable silence. A boundary-breaking original romance. ⛈️❤️‍🔥",
    slideUrl: "viralahusma_slide.webp",
    posterUrl: "viralahusma_cover.webp",
    gradient: "linear-gradient(155deg, #7c3211 0%, #331618 55%, #07050c 100%)",
    seasons: [
      {
        seasonNameSi: "Season 1 (පළමු කතා සමය)",
        seasonNameEn: "Season 1",
        episodes: [
          { num: 1, titleSi: "01 වන කොටස", titleEn: "Episode 01", subSi: "සම්පූර්ණ කොටස • VIP", subEn: "Full Uncut • VIP", thumbUrl: "viralahusma_ep1.webp", link: "https://t.me/c/4339816032/4" },
          { num: 2, titleSi: "02 වන කොටස", titleEn: "Episode 02", subSi: "සම්පූර්ණ කොටස • VIP", subEn: "Full Uncut • VIP", thumbUrl: "viralahusma_ep2.webp", link: "https://t.me/c/4339816032/5" }
        ]
      }
    ]
  },
  {
    titleSi: "මායාවියා",
    titleEn: "Mayawiya",
    year: "2026",
    status: "ongoing",
    statusNoteSi: "Season 2 විකාශය වේ",
    statusNoteEn: "Season 2 Airing",
    tagSi: "කතා සමයන් 2 • සිංහල BL",
    tagEn: "2 SEASONS • SINHALA BL",
    descSi: "වසර 500ක සංසාර ශාපයක් සහ අමරණීය ප්‍රේමයක කතාව — \"මායාවියා\" දැන් නරඹන්න! 🔥💙",
    descEn: "A 500-year reincarnation curse, forbidden royal love, and a war of magic. Watch Mayawiya now! 🔥💙",
    slideUrl: "mayawiya_slide.webp",
    posterUrl: "mayawiya_cover.webp",
    gradient: "linear-gradient(155deg, #8a0e2c 0%, #3b0923 55%, #07050c 100%)",
    seasons: [
      {
        seasonNameSi: "Season 1 (පළමු කතා සමය)",
        seasonNameEn: "Season 1",
        episodes: [
          { num: 1, titleSi: "01 වන කොටස", titleEn: "Episode 01", subSi: "පළමු කතා සමය • VIP", subEn: "Full Uncut • VIP", thumbUrl: "mayawiya_s1_ep1.webp", link: "https://t.me/c/4339816032/42" },
          { num: 2, titleSi: "02 වන කොටස", titleEn: "Episode 02", subSi: "පළමු කතා සමය • VIP", subEn: "Full Uncut • VIP", thumbUrl: "mayawiya_s1_ep2.webp", link: "https://t.me/c/4339816032/43" },
          { num: 3, titleSi: "03 වන කොටස", titleEn: "Episode 03", subSi: "පළමු කතා සමය • VIP", subEn: "Full Uncut • VIP", thumbUrl: "mayawiya_s1_ep3.webp", link: "https://t.me/c/4339816032/44" },
          { num: 4, titleSi: "04 වන කොටස", titleEn: "Episode 04", subSi: "පළමු කතා සමය • VIP", subEn: "Full Uncut • VIP", thumbUrl: "mayawiya_s1_ep4.webp", link: "https://t.me/c/4339816032/45" },
          { num: 5, titleSi: "කතා මාලාවේ අවසාන කොටස", titleEn: "Season Finale", subSi: "පළමු කතා සමය • VIP", subEn: "Full Uncut • VIP", thumbUrl: "mayawiya_s1_ep5.webp", link: "https://t.me/c/4339816032/46" }
        ]
      },
      {
        seasonNameSi: "Season 2 (දෙවන කතා සමය)",
        seasonNameEn: "Season 2",
        episodes: [
          { num: 1, titleSi: "01 වන කොටස", titleEn: "Episode 01", subSi: "දෙවන කතා සමය • VIP", subEn: "Season 2 • VIP", thumbUrl: "mayawiya_s2_ep1.webp", link: "https://t.me/c/4339816032/9" },
          { num: 2, titleSi: "02 වන කොටස", titleEn: "Episode 02", subSi: "දෙවන කතා සමය • VIP", subEn: "Season 2 • VIP", thumbUrl: "mayawiya_s2_ep2.webp", link: "https://t.me/c/4339816032/48" }
        ]
      }
    ]
  },
  {
    titleSi: "ඝට්ටනය",
    titleEn: "Ghattanaya",
    year: "2026",
    status: "ongoing",
    statusNoteSi: "නව කොටස් ළඟදීම",
    statusNoteEn: "New Episodes Soon",
    tagSi: "කතා සමයන් 1 • සිංහල BL",
    tagEn: "1 SEASON • SINHALA BL",
    descSi: "පන්තිය සහ ප්‍රේමය අතර රළු ගැටුම! ඝට්ටනය කතා මාලාවේ සියලුම සම්පූර්ණ කොටස් බාධාවකින් තොරව නරඹන්න.",
    descEn: "The rough clash between class and love! Stream all complete episodes of Ghattanaya without interruptions.",
    slideUrl: "ghattanaya_slide.webp",
    posterUrl: "ghattanaya_cover.webp",
    gradient: "linear-gradient(155deg, #0f3d68 0%, #152242 55%, #07050c 100%)",
    seasons: [
      {
        seasonNameSi: "Season 1 (පළමු කතා සමය)",
        seasonNameEn: "Season 1",
        episodes: [
          { num: 1, titleSi: "01 වන කොටස", titleEn: "Episode 01", subSi: "සම්පූර්ණ කොටස • VIP", subEn: "Full Uncut • VIP", thumbUrl: "ghattanaya_ep1.webp", link: "https://t.me/c/4339816032/10" },
          { num: 2, titleSi: "02 වන කොටස", titleEn: "Episode 02", subSi: "සම්පූර්ණ කොටස • VIP", subEn: "Full Uncut • VIP", thumbUrl: "ghattanaya_ep2.webp", link: "https://t.me/c/4339816032/11" },
          { num: 3, titleSi: "03 වන කොටස", titleEn: "Episode 03", subSi: "සම්පූර්ණ කොටස • VIP", subEn: "Full Uncut • VIP", thumbUrl: "ghattanaya_ep3.webp", link: "https://t.me/c/4339816032/12" }
        ]
      }
    ]
  },
  {
    titleSi: "O+",
    titleEn: "O Positive",
    year: "2026",
    status: "ongoing",
    statusNoteSi: "නව කොටස් ළඟදීම",
    statusNoteEn: "New Episodes Soon",
    tagSi: "කතා සමයන් 1 • සිංහල BL",
    tagEn: "1 SEASON • SINHALA BL",
    descSi: "මීදුම අස්සේ සැඟවුණු, ලේ බැඳීමකට එහා ගිය අසම්මත ආදර කතාව... 🩸❤️. O+ කතා මාලාවේ සියලුම සම්පූර්ණ කොටස් Him & Him VIP වෙතින් නරඹන්න.",
    descEn: "Bound by blood, torn by fate. Experience the intense Sinhala BL romance hidden in the mist of Badulla. 🩸❤️. Stream all complete uncut episodes of O+ exclusively on Him & Him VIP.",
    slideUrl: "o_slide.webp",
    posterUrl: "o_cover.webp",
    gradient: "linear-gradient(155deg, #6e1028 0%, #2b0915 55%, #07050c 100%)",
    seasons: [
      {
        seasonNameSi: "Season 1 (පළමු කතා සමය)",
        seasonNameEn: "Season 1",
        episodes: [
          { num: 1, titleSi: "01 වන කොටස", titleEn: "Episode 01", subSi: "සම්පූර්ණ කොටස • VIP", subEn: "Full Uncut • VIP", thumbUrl: "o_ep1.webp", link: "https://t.me/c/4339816032/6" },
          { num: 2, titleSi: "02 වන කොටස", titleEn: "Episode 02", subSi: "සම්පූර්ණ කොටස • VIP", subEn: "Full Uncut • VIP", thumbUrl: "o_ep2.webp", link: "https://t.me/c/4339816032/7" },
          { num: 3, titleSi: "03 වන කොටස", titleEn: "Episode 03", subSi: "සම්පූර්ණ කොටස • VIP", subEn: "Full Uncut • VIP", thumbUrl: "o_ep3.webp", link: "https://t.me/c/4339816032/8" },
          { num: 4, titleSi: "04 වන කොටස", titleEn: "Episode 04", subSi: "සම්පූර්ණ කොටස • VIP", subEn: "Full Uncut • VIP", thumbUrl: "o_ep4.webp", link: "https://t.me/c/4339816032/53" }

        ]
      }
    ]
  },
  {
    titleSi: "කළු පාට ටැටූ",
    titleEn: "The Black Tattoo",
    year: "2026",
    status: "completed",
    statusNoteSi: "සම්පූර්ණ කොටස් 11",
    statusNoteEn: "All 11 Episodes",
    tagSi: "කතා සමයන් 1 • සිංහල BL",
    tagEn: "1 SEASON • SINHALA BL",
    descSi: "දුරුතු සහ අයුර්ගේ ඛේදනීය කතාව. සියලුම සම්පූර්ණ කොටස් බාධාවකින් තොරව Him & Him VIP නාලිකාවෙන් නරඹන්න.",
    descEn: "The tragic and emotional love story of Duruthu and Ayur. Stream all complete uncut episodes without interruptions.",
    slideUrl: "kalupatatatoo_slide.webp",
    posterUrl: "kalupatatatoo_cover.webp",
    gradient: "linear-gradient(155deg, #3a1c5c 0%, #1b0e2e 55%, #07050c 100%)",
    seasons: [
      {
        seasonNameSi: "Season 1 (පළමු කතා සමය)",
        seasonNameEn: "Season 1",
        episodes: [
          { num: 1, titleSi: "01 වන කොටස", titleEn: "Episode 01", subSi: "සම්පූර්ණ කොටස • VIP", subEn: "Full Uncut • VIP", thumbUrl: "kpt_ep1.webp", link: "https://t.me/c/4339816032/22" },
          { num: 2, titleSi: "02 වන කොටස", titleEn: "Episode 02", subSi: "සම්පූර්ණ කොටස • VIP", subEn: "Full Uncut • VIP", thumbUrl: "kpt_ep2.webp", link: "https://t.me/c/4339816032/23" },
          { num: 3, titleSi: "03 වන කොටස", titleEn: "Episode 03", subSi: "සම්පූර්ණ කොටස • VIP", subEn: "Full Uncut • VIP", thumbUrl: "kpt_ep3.webp", link: "https://t.me/c/4339816032/24" },
          { num: 4, titleSi: "04 වන කොටස", titleEn: "Episode 04", subSi: "සම්පූර්ණ කොටස • VIP", subEn: "Full Uncut • VIP", thumbUrl: "kpt_ep4.webp", link: "https://t.me/c/4339816032/25" },
          { num: 5, titleSi: "05 වන කොටස", titleEn: "Episode 05", subSi: "සම්පූර්ණ කොටස • VIP", subEn: "Full Uncut • VIP", thumbUrl: "kpt_ep5.webp", link: "https://t.me/c/4339816032/26" },
          { num: 6, titleSi: "06 වන කොටස", titleEn: "Episode 06", subSi: "සම්පූර්ණ කොටස • VIP", subEn: "Full Uncut • VIP", thumbUrl: "kpt_ep6.webp", link: "https://t.me/c/4339816032/27" },
          { num: 7, titleSi: "07 වන කොටස", titleEn: "Episode 07", subSi: "සම්පූර්ණ කොටස • VIP", subEn: "Full Uncut • VIP", thumbUrl: "kpt_ep7.webp", link: "https://t.me/c/4339816032/28" },
          { num: 8, titleSi: "08 වන කොටස", titleEn: "Episode 08", subSi: "සම්පූර්ණ කොටස • VIP", subEn: "Full Uncut • VIP", thumbUrl: "kpt_ep8.webp", link: "https://t.me/c/4339816032/30" },
          { num: 9, titleSi: "09 වන කොටස", titleEn: "Episode 09", subSi: "සම්පූර්ණ කොටස • VIP", subEn: "Full Uncut • VIP", thumbUrl: "kpt_ep9.webp", link: "https://t.me/c/4339816032/34" },
          { num: 10, titleSi: "10 වන කොටස", titleEn: "Episode 10", subSi: "සම්පූර්ණ කොටස • VIP", subEn: "Full Uncut • VIP", thumbUrl: "kpt_ep10.webp", link: "https://t.me/c/4339816032/37" },
          { num: 11, titleSi: "අවසාන කොටස", titleEn: "Final Episode", subSi: "සම්පූර්ණ කොටස • VIP", subEn: "Full Uncut • VIP", thumbUrl: "kpt_ep11.webp", link: "https://t.me/c/4339816032/41" }
        ]
      }
    ]
  }
];

// ============================================================================
// SUNDAY PREMIERE BILLBOARDS — Update Coming Sunday & Previous Sunday here!
// Optional: Upload transparent PNG cutouts named bb_char_left.png & bb_char_right.png
// to replace the built-in BL vector silhouettes flanking the 3D countdown!
// ============================================================================
const SUNDAY_BILLBOARDS = {
  leftCharPng: "bb_char_left.png",
  rightCharPng: "bb_char_right.png",
  comingSunday: {
    pillSi: "✨ ඉදිරි ඉරිදා නිකුත් වන",
    pillEn: "✨ COMING THIS SUNDAY",
    timeSi: "ඉරිදා රාත්‍රී 8:00 • VIP",
    timeEn: "SUNDAY 8:00 PM • VIP",
    titleSi: "විරල හුස්ම — 3 වන කොටස",
    titleEn: "Virala Husama — Episode 3",
    descSi: "සැඩ කුණාටුවක් සහ නිහඬ අහසක් එකම හුස්මකට යාවුණු අසම්මත ප්‍රේමය... ⛈️✨! මේ ඉරිදා VIP නාලිකාවෙන්.",
    descEn: "When a rebellious storm meets unshakeable silence. A boundary-breaking original romance. ⛈️❤️‍🔥! Premiering this Sunday on VIP.",
    ctaSi: "👑 VIP වී සූදානම් වන්න",
    ctaEn: "👑 Join VIP for Premiere",
    imageUrl: "viralahusma_slide.webp",
    fallbackUrl: "viralahusma_slide.webp",
    gradient: "linear-gradient(150deg, #7a104e 0%, #2b0b3d 55%, #07050c 100%)",
    link: "https://t.me/himandhim_vip_bot"
  },
  previousSunday: {
    pillSi: "🔥 පසුගිය ඉරිදා නිකුත් වූ",
    pillEn: "🔥 PREVIOUS SUNDAY RELEASE",
    timeSi: "දැන් නරඹන්න • FULL HD",
    timeEn: "OUT NOW • FULL UNCUT",
    titleSi: "O+(O Positive) — 4 වන කොටස",
    titleEn: "O+(O Positive) — Episode 4",
    descSi: "පසුගිය ඉරිදා නිකුත් වූ සම්පූර්ණ කොටස දැන් VIP නාලිකාවෙන් නරඹන්න.",
    descEn: "Stream last Sunday's complete uncut episode right now on VIP.",
    ctaSi: "▶ දැන්ම නරඹන්න",
    ctaEn: "▶ Watch Release Now",
    imageUrl: "o_slide.webp",
    fallbackUrl: "o_slide.webp",
    gradient: "linear-gradient(150deg, #0c4d63 0%, #16123b 55%, #07050c 100%)",
    link: "https://t.me/c/4339816032/53"
  }
};

// ============================================================================
// SHORT DRAMAS SEGMENT — Standalone Single-Episode Stories (3D Holographic Stage)
// ============================================================================
const SHORT_DRAMAS = [
  {
    titleSi: "අසම්මතයේ සිරකරුවෝ  (Short Film)",
    titleEn: "Prisoners of the Unconventional",
    durationSi: "මිනිත්තු 26",
    durationEn: "26 MIN",
    badgeSi: "VIP කෙටි නාට්‍යය",
    badgeEn: "VIP SHORT",
    isVip: true,
    descSi: "වෙස් මංගල්‍යයේදි  හමුවූ හදවත් දෙකක සංවේදී කෙටි කතාව. සම්පූර්ණ දර්ශනය නරඹන්න.",
    descEn: "A touching short story of two hearts that met at the Ves festival. Stream the complete uncut film.",
    thumbUrl: "asammathe.webp",
    gradient: "linear-gradient(135deg, #5a1238 0%, #1e0b2e 55%, #07050c 100%)",
    link: "https://t.me/c/4339816032/32"
  }
];

// ============================================================================
// BL AESTHETIC SOUND ENGINE (Web Audio Synthesizer — Zero External MP3s Needed)
// Soft romantic heartbeat + music-box timer tick & glassy harp/bell UI chimes
// ============================================================================
(function initBlSoundEngine() {
  if (typeof window === "undefined") return;

  const STORAGE_KEY = "hh_bl_sound_muted";
  let audioCtx = null;
  let isMuted = false;

  try {
    isMuted = localStorage.getItem(STORAGE_KEY) === "1";
  } catch (e) {
    isMuted = false;
  }

  function ensureContext() {
    if (!audioCtx) {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (Ctx) {
        audioCtx = new Ctx();
      }
    }
    if (audioCtx && audioCtx.state === "suspended") {
      audioCtx.resume().catch(() => {});
    }
    return audioCtx;
  }

  // Unlock Web Audio on first user touch/click in Telegram WebView
  function unlockOnGesture() {
    ensureContext();
  }
  window.addEventListener("pointerdown", unlockOnGesture, { passive: true });
  window.addEventListener("touchstart", unlockOnGesture, { passive: true });
  window.addEventListener("keydown", unlockOnGesture, { passive: true });

  // 1. Intimate BL Heartbeat + Crystal Music-Box Timer Tick (every second)
  function playTimerTick(secondNum) {
    if (isMuted || document.hidden) return;
    const ctx = ensureContext();
    if (!ctx || ctx.state !== "running") return;

    const now = ctx.currentTime;

    // Soft warm heartbeat thump
    const heartOsc = ctx.createOscillator();
    const heartGain = ctx.createGain();
    heartOsc.type = "sine";
    heartOsc.frequency.setValueAtTime(108, now);
    heartOsc.frequency.exponentialRampToValueAtTime(52, now + 0.13);

    heartGain.gain.setValueAtTime(0.0001, now);
    heartGain.gain.linearRampToValueAtTime(0.048, now + 0.015);
    heartGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.15);

    heartOsc.connect(heartGain);
    heartGain.connect(ctx.destination);
    heartOsc.start(now);
    heartOsc.stop(now + 0.16);

    // Delicate alternating crystal music-box shimmer (E5 / B5)
    const chimeOsc = ctx.createOscillator();
    const chimeGain = ctx.createGain();
    chimeOsc.type = "sine";
    const freq = (secondNum % 2 === 0) ? 659.25 : 987.77;
    chimeOsc.frequency.setValueAtTime(freq, now + 0.01);

    chimeGain.gain.setValueAtTime(0.0001, now + 0.01);
    chimeGain.gain.linearRampToValueAtTime(0.016, now + 0.025);
    chimeGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.24);

    chimeOsc.connect(chimeGain);
    chimeGain.connect(ctx.destination);
    chimeOsc.start(now + 0.01);
    chimeOsc.stop(now + 0.25);
  }

  // 2. Soft Rose-Quartz Bell Tap (for filter pills, nav arrows, general taps)
  function playSoftTap() {
    if (isMuted) return;
    const ctx = ensureContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const notes = [880, 1318.51]; // A5 -> E6 fifth interval
    notes.forEach((freq, idx) => {
      const start = now + idx * 0.032;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, start);

      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.linearRampToValueAtTime(idx === 0 ? 0.042 : 0.028, start + 0.012);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.24);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(start);
      osc.stop(start + 0.25);
    });
  }

  // 3. Dreamy BL Harp / Chime Glissando (for drama cards, premieres, VIP buttons)
  function playRomanticChime() {
    if (isMuted) return;
    const ctx = ensureContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    // Cmaj9 ethereal arpeggio: C5, G5, B5, D6, E6
    const chord = [523.25, 783.99, 987.77, 1174.66, 1318.51];
    chord.forEach((freq, idx) => {
      const start = now + idx * 0.042;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = idx % 2 === 0 ? "sine" : "triangle";
      osc.frequency.setValueAtTime(freq, start);

      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.linearRampToValueAtTime(0.038 - idx * 0.004, start + 0.018);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.58);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(start);
      osc.stop(start + 0.6);
    });
  }

  function updateSoundButtonUI() {
    const btn = document.getElementById("hh-sound-toggle");
    if (!btn) return;
    const activeLang = typeof currentLang !== "undefined" ? currentLang : "si";
    btn.classList.toggle("is-muted", isMuted);
    if (isMuted) {
      btn.innerHTML = activeLang === "en" ? "🔇 Muted" : "🔇 නිහඬයි";
    } else {
      btn.innerHTML = activeLang === "en" ? "🔊 BL Sound" : "🔊 නාදය";
    }
  }

  function toggleMute() {
    isMuted = !isMuted;
    try {
      localStorage.setItem(STORAGE_KEY, isMuted ? "1" : "0");
    } catch (e) {}
    updateSoundButtonUI();
    if (!isMuted) {
      ensureContext();
      playRomanticChime();
    }
  }

  window.HHBLAudio = {
    tick: playTimerTick,
    tap: playSoftTap,
    chime: playRomanticChime,
    toggle: toggleMute,
    isMuted: () => isMuted,
    syncUI: updateSoundButtonUI
  };

  // Global delegated click sound handler across the entire Mini App
  document.addEventListener("click", (e) => {
    const target = e.target;
    if (!target || typeof target.closest !== "function") return;
    if (target.closest("#hh-sound-toggle")) return;

    // Romantic chime for drama cards, Sunday billboards, Short Dramas, episodes & VIP CTAs
    if (
      target.closest(".hh-bb-prism-wrap") ||
      target.closest(".hh-sd-card") ||
      target.closest(".drama-card") ||
      target.closest(".ep-card") ||
      target.closest(".episode-card") ||
      target.closest(".vip-showcase") ||
      target.closest(".hero-cta") ||
      target.closest("#dramaGrid > *") ||
      target.closest("#dramasGrid > *")
    ) {
      playRomanticChime();
      return;
    }

    // Soft rose-quartz bell tap for filter pills, carousel buttons, language switches & modals
    if (
      target.closest(".hh-flt-btn") ||
      target.closest(".hh-sd-nav-btn") ||
      target.closest("button") ||
      target.closest("a")
    ) {
      playSoftTap();
    }
  });
})();

// ============================================================================
// 0. 3D DRAMA STATUS RIBBONS & INTERACTIVE CATEGORY FILTER BAR
// Clearly labels Ongoing, Completed, Next Season & Upcoming Dramas
// ============================================================================
(function initDramaStatusBadges() {
  if (typeof window === "undefined" || !Array.isArray(DRAMAS) || DRAMAS.length === 0) return;

  let activeFilter = "all";
  let observer = null;
  let applyTimer = null;

  const STATUS_META = {
    ongoing: {
      badgeEn: "ONGOING",
      badgeSi: "විකාශය වේ",
      cls: "hh-st-ongoing",
      dot: true
    },
    completed: {
      badgeEn: "COMPLETED",
      badgeSi: "සම්පූර්ණයි",
      cls: "hh-st-completed",
      dot: false
    },
    next_season: {
      badgeEn: "NEW SEASON",
      badgeSi: "නව සමය ළඟදීම",
      cls: "hh-st-next",
      dot: true
    },
    upcoming: {
      badgeEn: "COMING SOON",
      badgeSi: "ළඟදීම",
      cls: "hh-st-upcoming",
      dot: true
    }
  };

  function injectStatusStyles() {
    if (document.getElementById("hh-drama-status-styles")) return;
    const style = document.createElement("style");
    style.id = "hh-drama-status-styles";
    style.textContent = `
      /* Interactive 3D Filter Pills Bar Above Drama Grid */
      #hh-drama-filter-bar {
        display: flex;
        align-items: center;
        gap: 8px;
        overflow-x: auto;
        padding: 4px 16px 14px 16px;
        margin: 0 auto;
        max-width: 1240px;
        scrollbar-width: none;
      }
      #hh-drama-filter-bar::-webkit-scrollbar {
        display: none;
      }
      .hh-flt-btn {
        flex: 0 0 auto;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 7px 14px;
        border-radius: 999px;
        border: 1px solid rgba(255, 255, 255, 0.16);
        background: linear-gradient(145deg, rgba(26, 15, 44, 0.88), rgba(10, 7, 20, 0.94));
        color: #dfd7ee;
        font-size: 11.5px;
        font-weight: 800;
        letter-spacing: 0.02em;
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.16);
        transition: all 0.25s cubic-bezier(0.22, 1, 0.36, 1);
      }
      .hh-flt-btn:hover {
        transform: translateY(-2px);
        border-color: rgba(238, 93, 183, 0.55);
      }
      .hh-flt-btn.is-active {
        color: #ffffff;
        border-color: transparent;
        background: linear-gradient(135deg, #ee5db7 0%, #ff6d00 100%);
        box-shadow: 0 8px 20px rgba(238, 93, 183, 0.45), inset 0 1px 1px rgba(255, 255, 255, 0.45);
      }
      .hh-flt-btn[data-filter="completed"].is-active {
        background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        box-shadow: 0 8px 20px rgba(16, 185, 129, 0.42), inset 0 1px 1px rgba(255, 255, 255, 0.45);
      }
      .hh-flt-btn[data-filter="upcoming"].is-active {
        background: linear-gradient(135deg, #8b5cf6 0%, #2ee6d6 100%);
        box-shadow: 0 8px 20px rgba(46, 230, 214, 0.38), inset 0 1px 1px rgba(255, 255, 255, 0.45);
      }
      .hh-flt-count {
        padding: 1px 7px;
        border-radius: 999px;
        font-size: 10px;
        font-weight: 900;
        background: rgba(0, 0, 0, 0.38);
        color: #ffe29a;
      }

      /* 3D Top Status Ribbon Attached to Drama Poster Cards */
      .hh-status-host {
        position: relative !important;
      }
      .hh-status-ribbon {
        position: absolute;
        top: 9px;
        left: 9px;
        z-index: 12;
        display: inline-flex;
        align-items: center;
        gap: 5px;
        padding: 4px 10px;
        border-radius: 999px;
        font-size: 9.5px;
        font-weight: 900;
        letter-spacing: 0.04em;
        color: #ffffff;
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        pointer-events: none;
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.72), inset 0 1px 1px rgba(255, 255, 255, 0.45);
        text-shadow: 0 1px 4px rgba(0, 0, 0, 0.75);
        max-width: calc(100% - 18px);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .hh-status-ribbon.hh-st-ongoing {
        background: linear-gradient(135deg, rgba(238, 93, 183, 0.94) 0%, rgba(255, 109, 0, 0.94) 100%);
        border: 1px solid rgba(255, 209, 102, 0.65);
      }
      .hh-status-ribbon.hh-st-completed {
        background: linear-gradient(135deg, rgba(16, 185, 129, 0.94) 0%, rgba(6, 95, 70, 0.96) 100%);
        border: 1px solid rgba(110, 231, 183, 0.65);
      }
      .hh-status-ribbon.hh-st-next {
        background: linear-gradient(135deg, rgba(139, 92, 246, 0.95) 0%, rgba(238, 93, 183, 0.95) 100%);
        border: 1px solid rgba(255, 209, 102, 0.7);
      }
      .hh-status-ribbon.hh-st-upcoming {
        background: linear-gradient(135deg, rgba(46, 230, 214, 0.94) 0%, rgba(37, 99, 235, 0.95) 100%);
        border: 1px solid rgba(143, 247, 238, 0.7);
      }

      .hh-st-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #ffffff;
        box-shadow: 0 0 8px #ffffff;
        flex-shrink: 0;
        animation: hhStatusPulse 1.15s infinite alternate;
      }
      @keyframes hhStatusPulse {
        0% { transform: scale(0.8); opacity: 0.45; }
        100% { transform: scale(1.25); opacity: 1; }
      }

      /* Bottom Poster Schedule / Episode Count Glass Strip */
      .hh-status-subpill {
        position: absolute;
        left: 8px;
        right: 8px;
        bottom: 8px;
        z-index: 12;
        padding: 4px 8px;
        border-radius: 9px;
        font-size: 9.5px;
        font-weight: 800;
        text-align: center;
        color: #ffe29a;
        background: rgba(7, 5, 16, 0.82);
        border: 1px solid rgba(255, 255, 255, 0.18);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        pointer-events: none;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.75);
      }
      .hh-status-subpill.hh-st-completed {
        color: #a7f3d0;
        border-color: rgba(52, 211, 153, 0.35);
      }
      .hh-status-subpill.hh-st-upcoming,
      .hh-status-subpill.hh-st-next {
        color: #8ff7ee;
        border-color: rgba(46, 230, 214, 0.38);
      }
    `;
    document.head.appendChild(style);
  }

  function findDramaGridContainer() {
    const knownSelectors = [
      "#dramaGrid",
      "#dramasGrid",
      "#seriesGrid",
      "#catalogGrid",
      ".dramas-grid",
      ".drama-grid"
    ];
    for (const sel of knownSelectors) {
      const el = document.querySelector(sel);
      if (el) return el;
    }

    const candidates = document.querySelectorAll("div, section");
    for (const el of candidates) {
      if (
        el.id === "hh-sunday-billboard-section" ||
        el.id === "hh-short-dramas-section" ||
        el.id === "hh-drama-filter-bar"
      ) {
        continue;
      }
      const txt = el.textContent || "";
      if (
        txt.includes("Garala") &&
        (txt.includes("Mayawiya") || txt.includes("Ghattanaya")) &&
        el.children.length >= 3 &&
        el.children.length <= 30
      ) {
        return el;
      }
    }
    return null;
  }

  function matchDramaForCard(cardEl) {
    const imgs = Array.from(cardEl.querySelectorAll("img"));
    for (const drama of DRAMAS) {
      if (
        (drama.posterUrl && imgs.some((img) => (img.getAttribute("src") || "").includes(drama.posterUrl))) ||
        (drama.slideUrl && imgs.some((img) => (img.getAttribute("src") || "").includes(drama.slideUrl)))
      ) {
        return drama;
      }
    }
    const text = (cardEl.textContent || "").toLowerCase();
    const sortedByLongestTitle = [...DRAMAS].sort(
      (a, b) => (b.titleEn || b.titleSi || "").length - (a.titleEn || a.titleSi || "").length
    );
    for (const drama of sortedByLongestTitle) {
      if (
        (drama.titleEn && text.includes(drama.titleEn.toLowerCase())) ||
        (drama.titleSi && text.includes(drama.titleSi.toLowerCase()))
      ) {
        return drama;
      }
    }
    return null;
  }

  function buildFilterBar(gridEl, lang) {
    let bar = document.getElementById("hh-drama-filter-bar");
    if (!bar) {
      bar = document.createElement("div");
      bar.id = "hh-drama-filter-bar";
      if (gridEl && gridEl.parentNode) {
        gridEl.parentNode.insertBefore(bar, gridEl);
      }
    }

    const totalCount = DRAMAS.length;
    const ongoingCount = DRAMAS.filter((d) => (d.status || "ongoing") === "ongoing").length;
    const completedCount = DRAMAS.filter((d) => d.status === "completed").length;
    const futureCount = DRAMAS.filter((d) => d.status === "upcoming" || d.status === "next_season").length;

    const buttons = [
      {
        key: "all",
        label: lang === "en" ? "🎬 All Dramas" : "🎬 සියලුම කතා",
        count: totalCount
      },
      {
        key: "ongoing",
        label: lang === "en" ? "🔴 Ongoing" : "🔴 විකාශය වන",
        count: ongoingCount
      },
      {
        key: "completed",
        label: lang === "en" ? "✅ Completed" : "✅ සම්පූර්ණයි",
        count: completedCount
      },
      {
        key: "upcoming",
        label: lang === "en" ? "✨ Coming / Next Season" : "✨ ඉදිරියට එන",
        count: futureCount
      }
    ];

    bar.innerHTML = buttons
      .map(
        (b) => `
        <button type="button" class="hh-flt-btn ${activeFilter === b.key ? "is-active" : ""}" data-filter="${b.key}">
          <span>${b.label}</span>
          <span class="hh-flt-count">${b.count}</span>
        </button>
      `
      )
      .join("");

    bar.querySelectorAll(".hh-flt-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeFilter = btn.dataset.filter;
        applyStatusBadgesAndFilter(lang);
      });
    });
  }

  function applyStatusBadgesAndFilter(langOverride) {
    injectStatusStyles();
    const activeLang = langOverride || (typeof currentLang !== "undefined" ? currentLang : "si");
    const gridEl = findDramaGridContainer();
    if (!gridEl) return;

    buildFilterBar(gridEl, activeLang);

    Array.from(gridEl.children).forEach((card) => {
      const drama = matchDramaForCard(card);
      if (!drama) return;

      const stKey = drama.status || "ongoing";
      const meta = STATUS_META[stKey] || STATUS_META.ongoing;

      const matchesFilter =
        activeFilter === "all" ||
        (activeFilter === "upcoming"
          ? stKey === "upcoming" || stKey === "next_season"
          : stKey === activeFilter);
      card.style.display = matchesFilter ? "" : "none";

      const posterImg = card.querySelector("img");
      const host =
        posterImg && posterImg.parentElement && posterImg.parentElement !== gridEl
          ? posterImg.parentElement
          : card;

      host.classList.add("hh-status-host");

      host.querySelectorAll(".hh-status-ribbon, .hh-status-subpill").forEach((el) => el.remove());

      const ribbon = document.createElement("div");
      ribbon.className = `hh-status-ribbon ${meta.cls}`;
      const mainLabel =
        activeLang === "en"
          ? `${meta.badgeEn} • ${meta.badgeSi}`
          : `${meta.badgeSi} • ${meta.badgeEn}`;
      ribbon.innerHTML = `${meta.dot ? '<span class="hh-st-dot"></span>' : ""}<span>${mainLabel}</span>`;
      host.appendChild(ribbon);

      const noteText = activeLang === "en" ? drama.statusNoteEn : drama.statusNoteSi;
      if (noteText) {
        const subPill = document.createElement("div");
        subPill.className = `hh-status-subpill ${meta.cls}`;
        subPill.textContent = noteText;
        host.appendChild(subPill);
      }
    });
  }

  function startObserver() {
    if (observer) return;
    observer = new MutationObserver((mutations) => {
      const hasExternalChange = mutations.some((m) =>
        Array.from(m.addedNodes).some(
          (n) =>
            n.nodeType === 1 &&
            !n.classList.contains("hh-status-ribbon") &&
            !n.classList.contains("hh-status-subpill") &&
            n.id !== "hh-drama-filter-bar"
        )
      );
      if (!hasExternalChange) return;
      clearTimeout(applyTimer);
      applyTimer = setTimeout(() => applyStatusBadgesAndFilter(), 80);
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  window.refreshDramaStatusLang = function (lang) {
    applyStatusBadgesAndFilter(lang);
  };

  function boot() {
    applyStatusBadgesAndFilter("si");
    startObserver();
    setTimeout(() => applyStatusBadgesAndFilter(), 350);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();

// ============================================================================
// 1. 3D INTERLOCKING DIAGONAL CRYSTAL PRISM BILLBOARD STAGE
// + LIVE 3D BL COUNTDOWN WITH TWO REACHING MALE CHARACTERS & SOUND
// ============================================================================
(function initSundayBillboards() {
  if (typeof window === "undefined" || typeof SUNDAY_BILLBOARDS === "undefined") return;

  let countdownInterval = null;

  function openBillboardUrl(url) {
    if (!url) return;
    const tg = window.Telegram && window.Telegram.WebApp;
    if (tg) {
      if (url.startsWith("https://t.me/") && typeof tg.openTelegramLink === "function") {
        tg.openTelegramLink(url);
        return;
      }
      if (typeof tg.openLink === "function") {
        tg.openLink(url);
        return;
      }
    }
    window.open(url, "_blank", "noopener,noreferrer");
  }

  function getNextSundayParts() {
    const now = new Date();
    const slOffsetMs = 5.5 * 60 * 60 * 1000;
    const utcMs = now.getTime() + now.getTimezoneOffset() * 60000;
    const slNow = new Date(utcMs + slOffsetMs);

    const target = new Date(slNow);
    const dayOfWeek = slNow.getDay();
    let daysUntilSunday = (7 - dayOfWeek) % 7;
    if (daysUntilSunday === 0 && slNow.getHours() >= 20) {
      daysUntilSunday = 7;
    }
    target.setDate(slNow.getDate() + daysUntilSunday);
    target.setHours(20, 0, 0, 0);

    const diffMs = Math.max(0, target.getTime() - slNow.getTime());
    const d = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const h = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diffMs / (1000 * 60)) % 60);
    const s = Math.floor((diffMs / 1000) % 60);

    return {
      rawSec: s,
      days: String(d).padStart(2, "0"),
      hours: String(h).padStart(2, "0"),
      minutes: String(m).padStart(2, "0"),
      seconds: String(s).padStart(2, "0")
    };
  }

  function getLeftBlCharacterSvg() {
    return `
      <svg class="hh-bl-svg left-svg" viewBox="0 0 260 130" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <linearGradient id="hhBlPinkFill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#361242" />
            <stop offset="55%" stop-color="#180929" />
            <stop offset="100%" stop-color="#0b0517" />
          </linearGradient>
          <linearGradient id="hhBlPinkRim" x1="0" y1="0" x2="1" y2="0.4">
            <stop offset="0%" stop-color="#ff94d2" />
            <stop offset="55%" stop-color="#ee5db7" />
            <stop offset="100%" stop-color="#ffd166" />
          </linearGradient>
        </defs>
        <circle cx="62" cy="44" r="32" fill="#ee5db7" opacity="0.22" />
        <circle cx="242" cy="52" r="14" fill="#ff94d2" opacity="0.32" />
        <path d="M16 130
                 L22 92
                 C24 80 33 73 45 70
                 L48 60
                 C41 56 37 48 39 38
                 C33 36 31 29 36 24
                 C34 17 42 10 52 12
                 C58 6 70 7 76 14
                 C84 15 89 22 86 29
                 C90 32 89 37 85 39
                 L87 44
                 C88 46 86 48 84 49
                 L85 53
                 C84 57 79 60 72 60
                 L70 69
                 C84 71 98 73 114 70
                 L178 55
                 C194 51 208 49 222 47
                 C229 46 238 45 244 47
                 C247 48 247 50 243 51
                 L234 52
                 C242 52 248 53 248 55
                 C248 57 241 58 233 58
                 C239 59 243 60 242 62
                 C241 64 234 64 227 63
                 C222 65 215 65 208 63
                 L180 71
                 L116 93
                 C104 97 95 106 92 119
                 L90 130 Z"
              fill="url(#hhBlPinkFill)"
              stroke="url(#hhBlPinkRim)"
              stroke-width="2.1"
              stroke-linejoin="round" />
        <path d="M46 72 L61 88 L73 71" stroke="#ff94d2" stroke-width="1.5" stroke-linecap="round" opacity="0.8" />
        <path d="M104 75 C124 74 146 69 168 62" stroke="#ffd166" stroke-width="1.3" stroke-linecap="round" opacity="0.65" />
      </svg>
    `;
  }

  function getRightBlCharacterSvg() {
    return `
      <svg class="hh-bl-svg right-svg" viewBox="0 0 260 130" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <linearGradient id="hhBlCyanFill" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#133b4a" />
            <stop offset="55%" stop-color="#0d1930" />
            <stop offset="100%" stop-color="#070a18" />
          </linearGradient>
          <linearGradient id="hhBlCyanRim" x1="1" y1="0" x2="0" y2="0.4">
            <stop offset="0%" stop-color="#8ff7ee" />
            <stop offset="55%" stop-color="#2ee6d6" />
            <stop offset="100%" stop-color="#ffd166" />
          </linearGradient>
        </defs>
        <circle cx="198" cy="40" r="32" fill="#2ee6d6" opacity="0.22" />
        <circle cx="18" cy="52" r="14" fill="#8ff7ee" opacity="0.32" />
        <path d="M244 130
                 L238 89
                 C236 77 227 70 214 67
                 L211 57
                 C219 53 223 44 221 34
                 C226 30 225 22 219 18
                 C218 11 209 6 199 9
                 C192 4 180 6 175 13
                 C168 15 165 22 169 28
                 L166 36
                 C165 39 167 41 169 42
                 L168 47
                 C169 52 175 56 183 56
                 L185 66
                 C171 68 157 71 142 68
                 L82 54
                 C66 50 52 48 38 47
                 C31 46 22 45 16 47
                 C13 48 13 50 17 51
                 L26 52
                 C18 52 12 53 12 55
                 C12 57 19 58 27 58
                 C21 59 17 60 18 62
                 C19 64 26 64 33 63
                 C38 65 45 65 52 63
                 L80 71
                 L144 92
                 C156 96 165 105 168 119
                 L170 130 Z"
              fill="url(#hhBlCyanFill)"
              stroke="url(#hhBlCyanRim)"
              stroke-width="2.1"
              stroke-linejoin="round" />
        <path d="M213 69 L198 86 L186 68" stroke="#8ff7ee" stroke-width="1.5" stroke-linecap="round" opacity="0.8" />
        <path d="M155 73 C135 72 114 67 92 61" stroke="#ffd166" stroke-width="1.3" stroke-linecap="round" opacity="0.65" />
      </svg>
    `;
  }

  function injectBillboardStyles() {
    if (document.getElementById("hh-billboard-styles")) return;
    const style = document.createElement("style");
    style.id = "hh-billboard-styles";
    style.textContent = `
      /* Chamfered Octagonal Cinema Marquee Outer Stage */
      #hh-sunday-billboard-section {
        position: relative;
        margin: 0 16px 24px 16px;
        padding: 2px;
        background: linear-gradient(135deg, #ee5db7 0%, #ff6d00 48%, #2ee6d6 100%);
        clip-path: polygon(18px 0, calc(100% - 18px) 0, 100% 18px, 100% calc(100% - 18px), calc(100% - 18px) 100%, 18px 100%, 0 calc(100% - 18px), 0 18px);
        box-shadow: 0 24px 55px rgba(0, 0, 0, 0.88);
      }
      .hh-bb-shell {
        position: relative;
        padding: 18px 14px 20px 14px;
        background: radial-gradient(circle at 50% 0%, rgba(44, 16, 68, 0.96) 0%, rgba(10, 6, 20, 0.98) 65%, #050309 100%);
        clip-path: polygon(17px 0, calc(100% - 17px) 0, 100% 17px, 100% calc(100% - 17px), calc(100% - 17px) 100%, 17px 100%, 0 calc(100% - 17px), 0 17px);
        overflow: hidden;
      }

      /* Overhead Volumetric Cinema Spotlight Beams */
      .hh-bb-beam-a,
      .hh-bb-beam-b {
        position: absolute;
        top: -30px;
        width: 55%;
        height: 280px;
        pointer-events: none;
        z-index: 1;
        filter: blur(18px);
        transform-origin: top center;
      }
      .hh-bb-beam-a {
        left: 0;
        background: conic-gradient(from 150deg at 45% 0%, transparent 0deg, rgba(238, 93, 183, 0.32) 25deg, rgba(255, 109, 0, 0.2) 40deg, transparent 60deg);
        animation: hhBeamSweepA 6.5s ease-in-out infinite alternate;
      }
      .hh-bb-beam-b {
        right: 0;
        background: conic-gradient(from 150deg at 55% 0%, transparent 0deg, rgba(46, 230, 214, 0.28) 25deg, rgba(157, 78, 221, 0.22) 40deg, transparent 60deg);
        animation: hhBeamSweepB 7s ease-in-out infinite alternate;
      }
      @keyframes hhBeamSweepA {
        0% { transform: rotate(-8deg); opacity: 0.7; }
        100% { transform: rotate(7deg); opacity: 1; }
      }
      @keyframes hhBeamSweepB {
        0% { transform: rotate(8deg); opacity: 0.7; }
        100% { transform: rotate(-7deg); opacity: 1; }
      }

      /* Marquee Header */
      .hh-bb-header {
        position: relative;
        z-index: 4;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        margin-bottom: 10px;
        flex-wrap: wrap;
      }
      .hh-bb-title-wrap {
        display: flex;
        flex-direction: column;
        gap: 3px;
      }
      .hh-bb-eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 10px;
        font-weight: 800;
        letter-spacing: 0.09em;
        text-transform: uppercase;
        color: #ff94d2;
      }
      .hh-bb-bulbs {
        display: inline-flex;
        gap: 4px;
      }
      .hh-bb-bulb {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: #ffd166;
        box-shadow: 0 0 7px #ff6d00;
        animation: hhBulbPulse 1.1s infinite alternate;
      }
      .hh-bb-bulb:nth-child(2) { animation-delay: 0.28s; background: #ee5db7; box-shadow: 0 0 7px #ee5db7; }
      .hh-bb-bulb:nth-child(3) { animation-delay: 0.56s; background: #2ee6d6; box-shadow: 0 0 7px #2ee6d6; }
      @keyframes hhBulbPulse {
        0% { opacity: 0.35; transform: scale(0.85); }
        100% { opacity: 1; transform: scale(1.25); }
      }
      .hh-bb-heading {
        font-size: 17px;
        font-weight: 800;
        color: #ffffff;
        text-shadow: 0 2px 12px rgba(238, 93, 183, 0.45);
      }
      .hh-bb-header-pills {
        display: inline-flex;
        align-items: center;
        gap: 6px;
      }
      .hh-bb-sound-btn {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 4px 10px;
        border-radius: 999px;
        font-size: 10px;
        font-weight: 800;
        color: #8ff7ee;
        background: rgba(46, 230, 214, 0.16);
        border: 1px solid rgba(46, 230, 214, 0.45);
        box-shadow: 0 0 12px rgba(46, 230, 214, 0.22);
        transition: all 0.2s ease;
      }
      .hh-bb-sound-btn.is-muted {
        color: rgba(255, 255, 255, 0.65);
        background: rgba(255, 255, 255, 0.08);
        border-color: rgba(255, 255, 255, 0.2);
        box-shadow: none;
      }
      .hh-bb-live-pill {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 4px 10px;
        border-radius: 999px;
        font-size: 10px;
        font-weight: 800;
        letter-spacing: 0.05em;
        color: #ffe29a;
        background: linear-gradient(135deg, rgba(238, 93, 183, 0.24), rgba(46, 230, 214, 0.2));
        border: 1px solid rgba(255, 209, 102, 0.45);
        box-shadow: 0 0 14px rgba(238, 93, 183, 0.28);
      }
      .hh-bb-live-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #ff4d8d;
        box-shadow: 0 0 8px #ff4d8d;
        animation: hhBulbPulse 0.8s infinite alternate;
      }

      /* 3D BL Reaching-Hands Live Countdown Stage */
      .hh-bb-cd-stage {
        position: relative;
        z-index: 4;
        margin: 4px 0 16px 0;
        padding: 74px 10px 14px 10px;
        border-radius: 20px;
        background:
          radial-gradient(ellipse at 22% 28%, rgba(238, 93, 183, 0.26) 0%, transparent 52%),
          radial-gradient(ellipse at 78% 28%, rgba(46, 230, 214, 0.24) 0%, transparent 52%),
          radial-gradient(circle at 50% 34%, rgba(255, 209, 102, 0.16) 0%, rgba(12, 7, 26, 0.94) 68%);
        border: 1px solid rgba(255, 255, 255, 0.15);
        box-shadow:
          0 16px 36px rgba(0, 0, 0, 0.78),
          inset 0 1px 1px rgba(255, 255, 255, 0.2);
        overflow: hidden;
        perspective: 950px;
      }
      .hh-bb-cd-particles {
        position: absolute;
        inset: 0;
        pointer-events: none;
        z-index: 1;
        background-image:
          radial-gradient(2px 2px at 18% 22%, rgba(255, 148, 210, 0.85), transparent),
          radial-gradient(2px 2px at 82% 20%, rgba(143, 247, 238, 0.85), transparent),
          radial-gradient(2.5px 2.5px at 50% 16%, rgba(255, 209, 102, 0.95), transparent),
          radial-gradient(1.5px 1.5px at 36% 35%, rgba(255, 255, 255, 0.7), transparent),
          radial-gradient(1.5px 1.5px at 64% 33%, rgba(255, 255, 255, 0.7), transparent);
        animation: hhParticlesFloat 4.5s ease-in-out infinite alternate;
      }
      @keyframes hhParticlesFloat {
        0% { transform: translateY(2px) scale(0.98); opacity: 0.75; }
        100% { transform: translateY(-5px) scale(1.03); opacity: 1; }
      }

      .hh-bb-char-slot {
        position: absolute;
        top: 2px;
        width: 50%;
        max-width: 245px;
        height: 112px;
        pointer-events: none;
        z-index: 2;
        display: flex;
        align-items: flex-end;
      }
      .hh-bb-char-slot.left-char {
        left: 0;
        justify-content: flex-start;
        transform-origin: bottom left;
        animation: hhReachLeft 3.6s ease-in-out infinite alternate;
      }
      .hh-bb-char-slot.right-char {
        right: 0;
        justify-content: flex-end;
        transform-origin: bottom right;
        animation: hhReachRight 3.6s ease-in-out infinite alternate;
      }
      @keyframes hhReachLeft {
        0% { transform: translateX(-3px) rotate(-0.8deg); }
        100% { transform: translateX(5px) rotate(1.1deg); }
      }
      @keyframes hhReachRight {
        0% { transform: translateX(3px) rotate(0.8deg); }
        100% { transform: translateX(-5px) rotate(-1.1deg); }
      }

      .hh-bl-svg,
      .hh-bl-png {
        width: 100%;
        height: 100%;
        object-fit: contain;
        display: block;
      }
      .hh-bb-char-slot.left-char .hh-bl-svg,
      .hh-bb-char-slot.left-char .hh-bl-png {
        filter: drop-shadow(0 4px 14px rgba(238, 93, 183, 0.65));
      }
      .hh-bb-char-slot.right-char .hh-bl-svg,
      .hh-bb-char-slot.right-char .hh-bl-png {
        filter: drop-shadow(0 4px 14px rgba(46, 230, 214, 0.65));
      }

      .hh-bb-touch-nexus {
        position: absolute;
        top: 32px;
        left: 50%;
        transform: translateX(-50%);
        width: 34px;
        height: 34px;
        z-index: 3;
        pointer-events: none;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.25s ease;
      }
      .hh-bb-touch-ring {
        position: absolute;
        inset: 2px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(255, 232, 163, 0.95) 0%, rgba(238, 93, 183, 0.65) 45%, rgba(46, 230, 214, 0.25) 72%, transparent 100%);
        filter: blur(2px);
        animation: hhNexusGlow 1.6s ease-in-out infinite alternate;
      }
      .hh-bb-touch-star {
        position: relative;
        font-size: 15px;
        line-height: 1;
        filter: drop-shadow(0 0 8px #ffd166);
        animation: hhStarSpin 6s linear infinite;
      }
      .hh-bb-touch-nexus.tick-pulse {
        transform: translateX(-50%) scale(1.32);
      }
      @keyframes hhNexusGlow {
        0% { transform: scale(0.85); opacity: 0.75; }
        100% { transform: scale(1.25); opacity: 1; }
      }
      @keyframes hhStarSpin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }

      .hh-bb-tiles-row {
        position: relative;
        z-index: 4;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 8px;
        transform-style: preserve-3d;
      }
      .hh-bb-tile {
        position: relative;
        padding: 9px 4px 8px 4px;
        border-radius: 14px;
        background: linear-gradient(165deg, rgba(30, 16, 56, 0.94) 0%, rgba(9, 6, 20, 0.98) 100%);
        border: 1px solid rgba(238, 93, 183, 0.45);
        box-shadow:
          0 6px 0 rgba(18, 9, 36, 0.96),
          0 12px 22px rgba(0, 0, 0, 0.85),
          inset 0 1px 1px rgba(255, 255, 255, 0.28);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2px;
        transition: transform 0.22s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.22s ease, box-shadow 0.22s ease;
      }
      .hh-bb-tile.left-tint {
        transform: rotateY(6deg) translateZ(8px);
        border-color: rgba(238, 93, 183, 0.52);
      }
      .hh-bb-tile.right-tint {
        transform: rotateY(-6deg) translateZ(8px);
        border-color: rgba(46, 230, 214, 0.52);
      }
      .hh-bb-tile.is-sec.tick-pulse {
        transform: rotateY(-6deg) translateZ(16px) translateY(-2px) scale(1.06);
        border-color: #ffd166;
        box-shadow:
          0 8px 0 rgba(36, 16, 54, 0.98),
          0 14px 26px rgba(238, 93, 183, 0.45),
          0 0 18px rgba(46, 230, 214, 0.45),
          inset 0 1px 2px rgba(255, 255, 255, 0.5);
      }
      .hh-bb-num {
        font-size: clamp(22px, 6.2vw, 30px);
        font-weight: 900;
        line-height: 1.05;
        font-variant-numeric: tabular-nums;
        letter-spacing: 0.02em;
        background: linear-gradient(180deg, #ffffff 15%, #ffd6ef 65%, #ff94d2 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        filter: drop-shadow(0 2px 8px rgba(238, 93, 183, 0.45));
      }
      .hh-bb-tile.right-tint .hh-bb-num {
        background: linear-gradient(180deg, #ffffff 15%, #ccf9f5 65%, #8ff7ee 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        filter: drop-shadow(0 2px 8px rgba(46, 230, 214, 0.45));
      }
      .hh-bb-unit {
        font-size: 9px;
        font-weight: 800;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: #ffe29a;
        opacity: 0.92;
      }

      .hh-bb-cd-caption {
        position: relative;
        z-index: 4;
        margin-top: 12px;
        text-align: center;
        font-size: 10.5px;
        font-weight: 700;
        letter-spacing: 0.04em;
        color: #e4dcf2;
      }
      .hh-bb-cd-caption span {
        color: #ffd166;
        font-weight: 800;
      }

      /* 3D Interlocking Diagonal Cinerama Stage */
      .hh-bb-prism-stack {
        position: relative;
        z-index: 3;
        display: flex;
        flex-direction: column;
        perspective: 1000px;
        transform-style: preserve-3d;
      }
      .hh-bb-prism-wrap {
        position: relative;
        padding: 2px;
        transform-style: preserve-3d;
        transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), filter 0.35s ease;
        will-change: transform;
      }
      .hh-bb-prism-wrap.top-prism {
        background: linear-gradient(135deg, #ee5db7 0%, #ff6d00 60%, #ffd166 100%);
        clip-path: polygon(0 0, 100% 0, 100% 84%, 0 100%);
        transform: rotateX(-4.5deg) translateZ(8px);
        z-index: 2;
      }
      .hh-bb-prism-wrap.bottom-prism {
        margin-top: -28px;
        background: linear-gradient(135deg, #2ee6d6 0%, #9d4edd 55%, #ee5db7 100%);
        clip-path: polygon(0 16%, 100% 0, 100% 100%, 0 100%);
        transform: rotateX(4.5deg) translateZ(8px);
        z-index: 2;
      }
      .hh-bb-prism-wrap:hover {
        z-index: 5;
        filter: drop-shadow(0 0 18px rgba(238, 93, 183, 0.45));
      }

      .hh-bb-prism-inner {
        position: relative;
        min-height: 215px;
        overflow: hidden;
        background: #0b0716;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      .top-prism .hh-bb-prism-inner {
        clip-path: polygon(0 0, 100% 0, 100% 84%, 0 100%);
        padding: 13px 14px 36px 14px;
      }
      .bottom-prism .hh-bb-prism-inner {
        clip-path: polygon(0 16%, 100% 0, 100% 100%, 0 100%);
        padding: 40px 14px 15px 14px;
      }

      .hh-bb-bg-img {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center 22%;
        z-index: 0;
        transition: transform 0.65s ease;
      }
      .hh-bb-prism-wrap:hover .hh-bb-bg-img {
        transform: scale(1.07);
      }

      .hh-bb-scrim {
        position: absolute;
        inset: 0;
        z-index: 1;
        background: linear-gradient(
          95deg,
          rgba(5, 3, 9, 0.94) 0%,
          rgba(9, 5, 18, 0.78) 52%,
          rgba(5, 3, 9, 0.25) 100%
        );
      }
      .bottom-prism .hh-bb-scrim {
        background: linear-gradient(
          265deg,
          rgba(5, 3, 9, 0.94) 0%,
          rgba(9, 5, 18, 0.78) 52%,
          rgba(5, 3, 9, 0.25) 100%
        );
      }

      .hh-bb-glare {
        position: absolute;
        inset: 0;
        z-index: 2;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.25s ease;
        background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.24), transparent 65%);
      }

      .hh-bb-laser {
        position: absolute;
        inset: 0;
        z-index: 2;
        pointer-events: none;
        background: linear-gradient(115deg, transparent 25%, rgba(255, 255, 255, 0.22) 48%, rgba(238, 93, 183, 0.22) 55%, transparent 75%);
        transform: translateX(-130%);
        animation: hhLaserSweep 5.5s infinite ease-in-out;
      }
      .bottom-prism .hh-bb-laser {
        animation-delay: 2.7s;
      }
      @keyframes hhLaserSweep {
        0%, 60% { transform: translateX(-130%); }
        100% { transform: translateX(130%); }
      }

      .hh-bb-top-row {
        position: relative;
        z-index: 3;
        display: flex;
        align-items: center;
        gap: 7px;
        flex-wrap: wrap;
      }
      .bottom-prism .hh-bb-top-row {
        justify-content: flex-end;
      }
      .hh-bb-badge {
        padding: 4px 10px;
        border-radius: 999px;
        font-size: 10px;
        font-weight: 800;
        letter-spacing: 0.04em;
        color: #ffffff;
        background: linear-gradient(135deg, rgba(238, 93, 183, 0.85), rgba(255, 109, 0, 0.85));
        box-shadow: 0 4px 14px rgba(238, 93, 183, 0.45);
      }
      .bottom-prism .hh-bb-badge {
        background: linear-gradient(135deg, rgba(46, 230, 214, 0.85), rgba(157, 78, 221, 0.85));
        box-shadow: 0 4px 14px rgba(46, 230, 214, 0.4);
      }
      .hh-bb-time-pill {
        padding: 3px 9px;
        border-radius: 999px;
        font-size: 9.5px;
        font-weight: 800;
        color: #ffe29a;
        background: rgba(5, 3, 9, 0.78);
        border: 1px solid rgba(255, 174, 0, 0.45);
        backdrop-filter: blur(6px);
      }
      .bottom-prism .hh-bb-time-pill {
        color: #8ff7ee;
        border-color: rgba(46, 230, 214, 0.45);
      }

      .hh-bb-copy-block {
        position: relative;
        z-index: 3;
        max-width: 78%;
        display: flex;
        flex-direction: column;
        gap: 5px;
      }
      .bottom-prism .hh-bb-copy-block {
        margin-left: auto;
        text-align: right;
        align-items: flex-end;
      }
      .hh-bb-title {
        font-size: 17px;
        font-weight: 800;
        color: #ffffff;
        line-height: 1.25;
        text-shadow: 0 3px 12px rgba(0, 0, 0, 0.95);
      }
      .hh-bb-desc {
        font-size: 11.5px;
        line-height: 1.45;
        color: #e4dcf2;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      .hh-bb-cta {
        margin-top: 4px;
        width: fit-content;
        padding: 7px 14px;
        border-radius: 999px;
        border: none;
        font-size: 11px;
        font-weight: 800;
        color: #ffffff;
        background: linear-gradient(135deg, #ee5db7 0%, #ff6d00 100%);
        box-shadow: 0 5px 16px rgba(238, 93, 183, 0.48), inset 0 1px 1px rgba(255, 255, 255, 0.45);
      }
      .bottom-prism .hh-bb-cta {
        background: linear-gradient(135deg, #2ee6d6 0%, #9d4edd 100%);
        box-shadow: 0 5px 16px rgba(46, 230, 214, 0.42), inset 0 1px 1px rgba(255, 255, 255, 0.45);
      }

      .hh-bb-medallion {
        position: relative;
        z-index: 6;
        align-self: center;
        margin: -18px 0 -10px 0;
        padding: 5px 14px;
        background: linear-gradient(135deg, #1a0d2e 0%, #090612 100%);
        border: 1.5px solid #ffd166;
        clip-path: polygon(10px 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 10px 100%, 0 50%);
        color: #ffe29a;
        font-size: 10px;
        font-weight: 800;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        box-shadow: 0 0 22px rgba(255, 109, 0, 0.65);
        animation: hhMedallionFloat 3.2s ease-in-out infinite alternate;
      }
      @keyframes hhMedallionFloat {
        0% { transform: translateZ(28px) scale(0.98); }
        100% { transform: translateZ(42px) scale(1.04); }
      }
    `;
    document.head.appendChild(style);
  }

  function attachPrismTilt(wrapEl, defaultRotX) {
    const glare = wrapEl.querySelector(".hh-bb-glare");
    function onMove(clientX, clientY) {
      const rect = wrapEl.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      const rx = ((y - rect.height / 2) / (rect.height / 2)) * -6;
      const ry = ((x - rect.width / 2) / (rect.width / 2)) * 6;
      wrapEl.style.transform = `rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translateZ(26px) scale(1.02)`;
      if (glare) {
        glare.style.opacity = "1";
        glare.style.background = `radial-gradient(circle at ${(x / rect.width) * 100}% ${(y / rect.height) * 100}%, rgba(255,255,255,0.28), transparent 65%)`;
      }
    }
    function onReset() {
      wrapEl.style.transform = `rotateX(${defaultRotX}deg) rotateY(0deg) translateZ(8px) scale(1)`;
      if (glare) glare.style.opacity = "0";
    }
    wrapEl.addEventListener("mousemove", (e) => onMove(e.clientX, e.clientY));
    wrapEl.addEventListener("mouseleave", onReset);
    wrapEl.addEventListener("touchmove", (e) => {
      if (e.touches.length === 1) onMove(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });
    wrapEl.addEventListener("touchend", onReset);
  }

  function updateLiveCountdownDom() {
    const parts = getNextSundayParts();
    const dEl = document.getElementById("hh-cd-days");
    const hEl = document.getElementById("hh-cd-hrs");
    const mEl = document.getElementById("hh-cd-min");
    const sEl = document.getElementById("hh-cd-sec");
    const secTile = document.getElementById("hh-tile-sec");
    const nexus = document.getElementById("hh-touch-nexus");

    if (!dEl || !hEl || !mEl || !sEl) return;

    dEl.textContent = parts.days;
    hEl.textContent = parts.hours;
    mEl.textContent = parts.minutes;
    sEl.textContent = parts.seconds;

    if (window.HHBLAudio && typeof window.HHBLAudio.tick === "function") {
      window.HHBLAudio.tick(parts.rawSec);
    }

    if (secTile) {
      secTile.classList.add("tick-pulse");
      setTimeout(() => secTile.classList.remove("tick-pulse"), 260);
    }
    if (nexus) {
      nexus.classList.add("tick-pulse");
      setTimeout(() => nexus.classList.remove("tick-pulse"), 260);
    }
  }

  function renderBillboards(lang) {
    injectBillboardStyles();
    const activeLang = lang || (typeof currentLang !== "undefined" ? currentLang : "si");
    const existing = document.getElementById("hh-sunday-billboard-section");
    if (existing) existing.remove();

    const c = SUNDAY_BILLBOARDS.comingSunday;
    const p = SUNDAY_BILLBOARDS.previousSunday;
    const initParts = getNextSundayParts();

    const leftPng = SUNDAY_BILLBOARDS.leftCharPng || "bb_char_left.png";
    const rightPng = SUNDAY_BILLBOARDS.rightCharPng || "bb_char_right.png";
    const mutedState = window.HHBLAudio && window.HHBLAudio.isMuted();

    const section = document.createElement("section");
    section.id = "hh-sunday-billboard-section";
    section.setAttribute("aria-label", "Sunday Premiere Billboards");

    section.innerHTML = `
      <div class="hh-bb-shell">
        <div class="hh-bb-beam-a"></div>
        <div class="hh-bb-beam-b"></div>

        <div class="hh-bb-header">
          <div class="hh-bb-title-wrap">
            <span class="hh-bb-eyebrow">
              <span class="hh-bb-bulbs"><span class="hh-bb-bulb"></span><span class="hh-bb-bulb"></span><span class="hh-bb-bulb"></span></span>
              ${activeLang === "en" ? "SUNDAY CINEMA MARQUEE" : "ඉරිදා විශේෂ සිනමා පුවරුව"}
            </span>
            <div class="hh-bb-heading">${activeLang === "en" ? "Weekly Premiere Stage" : "ඉදිරි සහ පසුගිය ඉරිදා කතා"}</div>
          </div>
          <div class="hh-bb-header-pills">
            <button type="button" class="hh-bb-sound-btn ${mutedState ? "is-muted" : ""}" id="hh-sound-toggle" aria-label="Toggle BL Sound">
              ${mutedState
                ? (activeLang === "en" ? "🔇 Muted" : "🔇 නිහඬයි")
                : (activeLang === "en" ? "🔊 BL Sound" : "🔊 නාදය")}
            </button>
            <div class="hh-bb-live-pill">
              <span class="hh-bb-live-dot"></span>
              ${activeLang === "en" ? "LIVE" : "සජීවී"}
            </div>
          </div>
        </div>

        <div class="hh-bb-cd-stage">
          <div class="hh-bb-cd-particles"></div>

          <div class="hh-bb-char-slot left-char">
            <img class="hh-bl-png" src="${leftPng}" alt="" onerror="this.style.display='none';this.nextElementSibling.style.display='block';" />
            <div style="display:block;width:100%;height:100%;">${getLeftBlCharacterSvg()}</div>
          </div>

          <div class="hh-bb-touch-nexus" id="hh-touch-nexus">
            <div class="hh-bb-touch-ring"></div>
            <span class="hh-bb-touch-star">💗</span>
          </div>

          <div class="hh-bb-char-slot right-char">
            <img class="hh-bl-png" src="${rightPng}" alt="" onerror="this.style.display='none';this.nextElementSibling.style.display='block';" />
            <div style="display:block;width:100%;height:100%;">${getRightBlCharacterSvg()}</div>
          </div>

          <div class="hh-bb-tiles-row">
            <div class="hh-bb-tile left-tint">
              <div class="hh-bb-num" id="hh-cd-days">${initParts.days}</div>
              <div class="hh-bb-unit">${activeLang === "en" ? "DAYS" : "දින"}</div>
            </div>
            <div class="hh-bb-tile left-tint">
              <div class="hh-bb-num" id="hh-cd-hrs">${initParts.hours}</div>
              <div class="hh-bb-unit">${activeLang === "en" ? "HOURS" : "පැය"}</div>
            </div>
            <div class="hh-bb-tile right-tint">
              <div class="hh-bb-num" id="hh-cd-min">${initParts.minutes}</div>
              <div class="hh-bb-unit">${activeLang === "en" ? "MINUTES" : "මිනිත්තු"}</div>
            </div>
            <div class="hh-bb-tile right-tint is-sec" id="hh-tile-sec">
              <div class="hh-bb-num" id="hh-cd-sec">${initParts.seconds}</div>
              <div class="hh-bb-unit">${activeLang === "en" ? "SECONDS" : "තත්පර"}</div>
            </div>
          </div>

          <div class="hh-bb-cd-caption">
            ${activeLang === "en"
              ? "⏳ Until Next Sunday Premiere • <span>8:00 PM SL Time</span>"
              : "⏳ මීළඟ ඉරිදා නව කොටසට • <span>රාත්‍රී 8:00ට</span>"}
          </div>
        </div>

        <div class="hh-bb-prism-stack">
          <article class="hh-bb-prism-wrap top-prism" id="hh-bb-coming">
            <div class="hh-bb-prism-inner" style="background: ${c.gradient};">
              <img
                class="hh-bb-bg-img"
                src="${c.imageUrl}"
                alt="${c.titleEn}"
                loading="lazy"
                onerror="if(!this.dataset.fb && '${c.fallbackUrl || ""}'){this.dataset.fb='1';this.src='${c.fallbackUrl}';}else{this.style.display='none';}"
              />
              <div class="hh-bb-scrim"></div>
              <div class="hh-bb-glare"></div>
              <div class="hh-bb-laser"></div>

              <div class="hh-bb-top-row">
                <span class="hh-bb-badge">${activeLang === "en" ? c.pillEn : c.pillSi}</span>
                <span class="hh-bb-time-pill">${activeLang === "en" ? c.timeEn : c.timeSi}</span>
              </div>

              <div class="hh-bb-copy-block">
                <div class="hh-bb-title">${activeLang === "en" ? c.titleEn : c.titleSi}</div>
                <div class="hh-bb-desc">${activeLang === "en" ? c.descEn : c.descSi}</div>
                <button type="button" class="hh-bb-cta">${activeLang === "en" ? c.ctaEn : c.ctaSi}</button>
              </div>
            </div>
          </article>

          <div class="hh-bb-medallion">⚡ ${activeLang === "en" ? "SUNDAY TIMELINE" : "ඉරිදා කාලසටහන"} ⚡</div>

          <article class="hh-bb-prism-wrap bottom-prism" id="hh-bb-previous">
            <div class="hh-bb-prism-inner" style="background: ${p.gradient};">
              <img
                class="hh-bb-bg-img"
                src="${p.imageUrl}"
                alt="${p.titleEn}"
                loading="lazy"
                onerror="if(!this.dataset.fb && '${p.fallbackUrl || ""}'){this.dataset.fb='1';this.src='${p.fallbackUrl}';}else{this.style.display='none';}"
              />
              <div class="hh-bb-scrim"></div>
              <div class="hh-bb-glare"></div>
              <div class="hh-bb-laser"></div>

              <div class="hh-bb-top-row">
                <span class="hh-bb-time-pill">${activeLang === "en" ? p.timeEn : p.timeSi}</span>
                <span class="hh-bb-badge">${activeLang === "en" ? p.pillEn : p.pillSi}</span>
              </div>

              <div class="hh-bb-copy-block">
                <div class="hh-bb-title">${activeLang === "en" ? p.titleEn : p.titleSi}</div>
                <div class="hh-bb-desc">${activeLang === "en" ? p.descEn : p.descSi}</div>
                <button type="button" class="hh-bb-cta">${activeLang === "en" ? p.ctaEn : p.ctaSi}</button>
              </div>
            </div>
          </article>
        </div>
      </div>
    `;

    section.querySelectorAll(".hh-bl-png").forEach((imgEl) => {
      const svgWrapper = imgEl.nextElementSibling;
      imgEl.style.display = "none";
      imgEl.addEventListener("load", () => {
        imgEl.style.display = "block";
        if (svgWrapper) svgWrapper.style.display = "none";
      });
    });

    const soundBtn = section.querySelector("#hh-sound-toggle");
    if (soundBtn && window.HHBLAudio) {
      soundBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        window.HHBLAudio.toggle();
      });
    }

    const comingEl = section.querySelector("#hh-bb-coming");
    const prevEl = section.querySelector("#hh-bb-previous");

    attachPrismTilt(comingEl, -4.5);
    attachPrismTilt(prevEl, 4.5);

    comingEl.addEventListener("click", () => openBillboardUrl(c.link));
    prevEl.addEventListener("click", () => openBillboardUrl(p.link));

    const vipCard = document.querySelector(".vip-showcase");
    const homeView = document.getElementById("home-view");
    if (vipCard && vipCard.parentNode) {
      vipCard.parentNode.insertBefore(section, vipCard.nextSibling);
    } else if (homeView) {
      homeView.prepend(section);
    }

    if (countdownInterval) clearInterval(countdownInterval);
    countdownInterval = setInterval(updateLiveCountdownDom, 1000);
  }

  window.refreshBillboardsLang = function (lang) {
    renderBillboards(lang);
    if (typeof window.refreshDramaStatusLang === "function") {
      window.refreshDramaStatusLang(lang);
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => renderBillboards("si"));
  } else {
    renderBillboards("si");
  }
})();

// ============================================================================
// 2. 3D CURVED COVERFLOW & HOLOGRAPHIC DEPTH STAGE FOR SHORT DRAMAS
// ============================================================================
(function initShortDramasSegment() {
  if (typeof window === "undefined" || !Array.isArray(SHORT_DRAMAS) || SHORT_DRAMAS.length === 0) {
    return;
  }

  function openExternalOrTelegramLink(url) {
    if (!url) return;
    const tg = window.Telegram && window.Telegram.WebApp;
    if (tg) {
      if (url.startsWith("https://t.me/") && typeof tg.openTelegramLink === "function") {
        tg.openTelegramLink(url);
        return;
      }
      if (typeof tg.openLink === "function") {
        tg.openLink(url);
        return;
      }
    }
    window.open(url, "_blank", "noopener,noreferrer");
  }

  function injectStyles() {
    if (document.getElementById("hh-short-dramas-styles")) return;
    const style = document.createElement("style");
    style.id = "hh-short-dramas-styles";
    style.textContent = `
      #hh-short-dramas-section {
        position: relative;
        width: calc(100% - 32px);
        max-width: 1208px;
        margin: 30px auto 24px auto;
        padding: 22px 16px 28px 16px;
        box-sizing: border-box;
        border-radius: 24px;
        background: linear-gradient(165deg, rgba(22, 13, 42, 0.88) 0%, rgba(10, 8, 22, 0.94) 55%, rgba(6, 4, 14, 0.98) 100%);
        border: 1px solid rgba(46, 230, 214, 0.34);
        box-shadow:
          0 24px 55px rgba(0, 0, 0, 0.78),
          0 0 34px rgba(46, 230, 214, 0.14),
          inset 0 1px 0 rgba(255, 255, 255, 0.14);
        overflow: hidden;
        backdrop-filter: blur(14px);
      }
      #hh-short-dramas-section::before {
        content: "";
        position: absolute;
        left: -15%;
        right: -15%;
        bottom: -24px;
        height: 130px;
        background-image:
          linear-gradient(to right, rgba(46, 230, 214, 0.16) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(238, 93, 183, 0.16) 1px, transparent 1px);
        background-size: 28px 28px;
        transform: perspective(300px) rotateX(64deg);
        mask-image: linear-gradient(to top, rgba(0,0,0,0.85), transparent);
        -webkit-mask-image: linear-gradient(to top, rgba(0,0,0,0.85), transparent);
        pointer-events: none;
      }
      #hh-short-dramas-section::after {
        content: "";
        position: absolute;
        top: -80px;
        left: 20%;
        width: 260px;
        height: 200px;
        background: radial-gradient(circle, rgba(46, 230, 214, 0.2) 0%, rgba(238, 93, 183, 0.1) 50%, transparent 72%);
        pointer-events: none;
      }
      .hh-sd-header {
        position: relative;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        margin-bottom: 18px;
        flex-wrap: wrap;
      }
      .hh-sd-title-group {
        display: flex;
        flex-direction: column;
        gap: 5px;
      }
      .hh-sd-kicker {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        width: fit-content;
        padding: 4px 11px;
        border-radius: 999px;
        font-size: 10.5px;
        font-weight: 800;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: #8ff7ee;
        background: rgba(46, 230, 214, 0.14);
        border: 1px solid rgba(46, 230, 214, 0.38);
      }
      .hh-sd-pulse-dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: #2ee6d6;
        box-shadow: 0 0 10px #2ee6d6;
        animation: hhSdPulse 1.8s infinite ease-in-out;
      }
      @keyframes hhSdPulse {
        0%, 100% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.45); opacity: 0.45; }
      }
      .hh-sd-heading {
        margin: 0;
        font-size: clamp(18px, 2.6vw, 23px);
        font-weight: 800;
        color: #ffffff;
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .hh-sd-heading span.hh-sd-sub {
        font-size: 13px;
        font-weight: 600;
        color: #ee5db7;
      }
      .hh-sd-controls {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .hh-sd-count-pill {
        padding: 5px 11px;
        border-radius: 999px;
        font-size: 11.5px;
        font-weight: 700;
        color: #d6faf6;
        background: rgba(46, 230, 214, 0.1);
        border: 1px solid rgba(46, 230, 214, 0.25);
      }
      .hh-sd-nav-btn {
        width: 34px;
        height: 34px;
        border-radius: 50%;
        border: 1px solid rgba(46, 230, 214, 0.35);
        background: rgba(255, 255, 255, 0.06);
        color: #ffffff;
        font-size: 15px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        transition: all 0.22s ease;
      }
      .hh-sd-nav-btn:hover {
        background: linear-gradient(135deg, #2ee6d6, #ee5db7);
        border-color: transparent;
        transform: translateY(-2px);
        box-shadow: 0 6px 16px rgba(46, 230, 214, 0.4);
      }

      .hh-sd-reel {
        position: relative;
        z-index: 2;
        display: flex;
        gap: 18px;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        padding: 16px 24px 24px 24px;
        perspective: 1100px;
        transform-style: preserve-3d;
        scrollbar-width: thin;
        scrollbar-color: rgba(46, 230, 214, 0.45) rgba(255, 255, 255, 0.04);
      }
      .hh-sd-reel::-webkit-scrollbar {
        height: 5px;
      }
      .hh-sd-reel::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.04);
        border-radius: 999px;
      }
      .hh-sd-reel::-webkit-scrollbar-thumb {
        background: linear-gradient(90deg, #2ee6d6, #ee5db7);
        border-radius: 999px;
      }

      .hh-sd-card {
        position: relative;
        flex: 0 0 min(305px, 78vw);
        scroll-snap-align: center;
        border-radius: 20px;
        background: linear-gradient(160deg, rgba(26, 17, 46, 0.96) 0%, rgba(11, 8, 22, 0.98) 100%);
        border: 1px solid rgba(255, 255, 255, 0.14);
        display: flex;
        flex-direction: column;
        transform-style: preserve-3d;
        transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.3s ease, box-shadow 0.3s ease;
        box-shadow:
          0 20px 38px rgba(0, 0, 0, 0.85),
          inset 0 1px 1px rgba(255, 255, 255, 0.22);
      }
      .hh-sd-card::after {
        content: "";
        position: absolute;
        left: 10%;
        right: 10%;
        bottom: -14px;
        height: 14px;
        border-radius: 50%;
        background: radial-gradient(ellipse at center, rgba(46, 230, 214, 0.45) 0%, rgba(238, 93, 183, 0.2) 55%, transparent 80%);
        filter: blur(5px);
        transform: translateZ(-20px);
        pointer-events: none;
        transition: opacity 0.3s ease;
      }
      .hh-sd-card.is-center-3d,
      .hh-sd-card:hover {
        border-color: rgba(46, 230, 214, 0.72);
        box-shadow:
          0 26px 48px rgba(0, 0, 0, 0.92),
          0 0 28px rgba(46, 230, 214, 0.26),
          0 0 16px rgba(238, 93, 183, 0.22),
          inset 0 1px 1px rgba(255, 255, 255, 0.35);
      }

      .hh-sd-media {
        position: relative;
        width: 100%;
        aspect-ratio: 16 / 9;
        border-radius: 19px 19px 0 0;
        overflow: hidden;
        transform-style: preserve-3d;
      }
      .hh-sd-media img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: transform 0.5s ease;
      }
      .hh-sd-card:hover .hh-sd-media img,
      .hh-sd-card.is-center-3d .hh-sd-media img {
        transform: scale(1.07);
      }
      .hh-sd-media-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, rgba(5, 3, 9, 0.28) 0%, rgba(5, 3, 9, 0.08) 45%, rgba(11, 8, 22, 0.94) 100%);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 10px 12px;
        transform: translateZ(18px);
      }
      .hh-sd-top-badges {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 6px;
      }
      .hh-sd-badge {
        padding: 3px 9px;
        border-radius: 999px;
        font-size: 10px;
        font-weight: 800;
        letter-spacing: 0.04em;
        backdrop-filter: blur(8px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.55);
      }
      .hh-sd-badge.vip {
        color: #ffe29a;
        background: rgba(255, 109, 0, 0.28);
        border: 1px solid rgba(255, 209, 102, 0.55);
      }
      .hh-sd-badge.free {
        color: #8ff7ee;
        background: rgba(46, 230, 214, 0.22);
        border: 1px solid rgba(46, 230, 214, 0.55);
      }
      .hh-sd-duration {
        padding: 3px 9px;
        border-radius: 999px;
        font-size: 10.5px;
        font-weight: 700;
        color: #ffffff;
        background: rgba(5, 3, 9, 0.78);
        border: 1px solid rgba(255, 255, 255, 0.22);
        backdrop-filter: blur(6px);
      }

      .hh-sd-play-orb {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 30px);
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background: linear-gradient(135deg, rgba(46, 230, 214, 0.92), rgba(238, 93, 183, 0.94));
        border: 2px solid rgba(255, 255, 255, 0.9);
        box-shadow:
          0 10px 24px rgba(0, 0, 0, 0.75),
          0 0 24px rgba(46, 230, 214, 0.75);
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ffffff;
        font-size: 16px;
        padding-left: 3px;
        transition: transform 0.28s ease, box-shadow 0.28s ease;
      }
      .hh-sd-card:hover .hh-sd-play-orb,
      .hh-sd-card.is-center-3d .hh-sd-play-orb {
        transform: translate3d(-50%, -50%, 42px) scale(1.12);
        box-shadow:
          0 14px 28px rgba(0, 0, 0, 0.85),
          0 0 32px rgba(238, 93, 183, 0.95);
      }

      .hh-sd-body {
        padding: 13px 14px 15px 14px;
        display: flex;
        flex-direction: column;
        gap: 6px;
        flex: 1;
        transform: translateZ(14px);
      }
      .hh-sd-card-title {
        margin: 0;
        font-size: 15.5px;
        font-weight: 800;
        color: #ffffff;
        line-height: 1.35;
        text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
      }
      .hh-sd-card-subtitle {
        font-size: 12px;
        font-weight: 700;
        color: #2ee6d6;
      }
      .hh-sd-card-desc {
        margin: 0;
        font-size: 12px;
        line-height: 1.5;
        color: rgba(255, 255, 255, 0.74);
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      .hh-sd-actions {
        margin-top: auto;
        padding-top: 9px;
        display: flex;
        align-items: center;
        gap: 8px;
        transform: translateZ(20px);
      }
      .hh-sd-watch-btn {
        flex: 1;
        padding: 9px 12px;
        border: none;
        border-radius: 11px;
        background: linear-gradient(135deg, #2ee6d6 0%, #ee5db7 60%, #ff6d00 100%);
        color: #ffffff;
        font-size: 12px;
        font-weight: 800;
        text-align: center;
        box-shadow: 0 6px 18px rgba(238, 93, 183, 0.38), inset 0 1px 1px rgba(255, 255, 255, 0.45);
        transition: filter 0.2s ease, transform 0.2s ease;
      }
      .hh-sd-watch-btn:hover {
        filter: brightness(1.12);
      }
      .hh-sd-vip-btn {
        padding: 9px 11px;
        border-radius: 11px;
        border: 1px solid rgba(255, 174, 0, 0.48);
        background: rgba(255, 109, 0, 0.16);
        color: #ffd166;
        font-size: 11.5px;
        font-weight: 800;
        white-space: nowrap;
        transition: background 0.2s ease;
      }
      .hh-sd-vip-btn:hover {
        background: rgba(255, 109, 0, 0.3);
      }
    `;
    document.head.appendChild(style);
  }

  function findInsertionAnchor() {
    const knownSelectors = [
      "#dramaGrid",
      "#dramasGrid",
      "#seriesGrid",
      "#catalogGrid",
      ".dramas-grid",
      ".drama-grid"
    ];
    for (const sel of knownSelectors) {
      const el = document.querySelector(sel);
      if (el) return el;
    }

    const allElements = document.querySelectorAll("div, section");
    for (const el of allElements) {
      if (el.id === "hh-short-dramas-section" || el.id === "hh-sunday-billboard-section") continue;
      if (el.textContent && el.textContent.includes("Garala") && el.children.length >= 2 && el.children.length <= 30) {
        return el;
      }
    }

    return document.querySelector("main") || document.body;
  }

  function updateCoverflow3D(reel, hoveredCard = null) {
    if (!reel) return;
    const cards = Array.from(reel.querySelectorAll(".hh-sd-card")).filter(
      (c) => c.style.display !== "none"
    );
    if (cards.length === 0) return;

    const reelRect = reel.getBoundingClientRect();
    const reelCenter = reelRect.left + reelRect.width / 2;

    let closestCard = null;
    let minDist = Infinity;

    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const dist = Math.abs(reelCenter - cardCenter);
      if (dist < minDist) {
        minDist = dist;
        closestCard = card;
      }
    });

    const activeFocus = hoveredCard || closestCard;

    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const offsetRatio = Math.max(-1.4, Math.min(1.4, (cardCenter - reelCenter) / (reelRect.width * 0.55)));

      if (card === activeFocus) {
        card.classList.add("is-center-3d");
        card.style.transform = "translateZ(32px) rotateY(0deg) scale(1.03)";
      } else {
        card.classList.remove("is-center-3d");
        const rotY = (-offsetRatio * 18).toFixed(2);
        const transZ = (-Math.abs(offsetRatio) * 28).toFixed(1);
        const scale = Math.max(0.9, 1 - Math.abs(offsetRatio) * 0.06).toFixed(3);
        card.style.transform = `translateZ(${transZ}px) rotateY(${rotY}deg) scale(${scale})`;
      }
    });
  }

  function buildShortDramasSection() {
    injectStyles();
    const existing = document.getElementById("hh-short-dramas-section");
    if (existing) existing.remove();

    const section = document.createElement("section");
    section.id = "hh-short-dramas-section";
    section.setAttribute("aria-label", "Short Dramas");

    section.innerHTML = `
      <div class="hh-sd-header">
        <div class="hh-sd-title-group">
          <span class="hh-sd-kicker"><span class="hh-sd-pulse-dot"></span> 3D CINEMA REEL • කෙටි කතා</span>
          <h2 class="hh-sd-heading">⚡ Short Dramas <span class="hh-sd-sub">• කෙටි නාට්‍ය</span></h2>
        </div>
        <div class="hh-sd-controls">
          <span class="hh-sd-count-pill" id="hh-sd-count">${SHORT_DRAMAS.length} Stories</span>
          <button type="button" class="hh-sd-nav-btn" id="hh-sd-prev" aria-label="Scroll Left">❮</button>
          <button type="button" class="hh-sd-nav-btn" id="hh-sd-next" aria-label="Scroll Right">❯</button>
        </div>
      </div>
      <div class="hh-sd-reel" id="hh-sd-reel"></div>
    `;

    const reel = section.querySelector("#hh-sd-reel");

    SHORT_DRAMAS.forEach((item) => {
      const card = document.createElement("article");
      card.className = "hh-sd-card";
      card.dataset.search = `${item.titleSi} ${item.titleEn} ${item.descSi} ${item.descEn}`.toLowerCase();

      const badgeClass = item.isVip ? "vip" : "free";
      const badgeLabel = item.isVip
        ? `👑 ${item.badgeEn || "VIP SHORT"} • ${item.badgeSi || "VIP"}`
        : `▶ ${item.badgeEn || "FREE"} • ${item.badgeSi || "නොමිලේ"}`;
      const durationLabel = `⏱ ${item.durationEn || ""} • ${item.durationSi || ""}`;

      card.innerHTML = `
        <div class="hh-sd-media" style="background: ${item.gradient || "linear-gradient(135deg, #3a1c5c, #07050c)"};">
          ${item.thumbUrl ? `<img src="${item.thumbUrl}" alt="${item.titleEn}" loading="lazy" onerror="this.style.display='none'">` : ""}
          <div class="hh-sd-media-overlay">
            <div class="hh-sd-top-badges">
              <span class="hh-sd-badge ${badgeClass}">${badgeLabel}</span>
              <span class="hh-sd-duration">${durationLabel}</span>
            </div>
          </div>
          <div class="hh-sd-play-orb">▶</div>
        </div>
        <div class="hh-sd-body">
          <h3 class="hh-sd-card-title">${item.titleSi}</h3>
          <div class="hh-sd-card-subtitle">${item.titleEn}</div>
          <p class="hh-sd-card-desc">${item.descSi} — ${item.descEn}</p>
          <div class="hh-sd-actions">
            <button type="button" class="hh-sd-watch-btn">▶ නරඹන්න • Watch Now</button>
            ${item.isVip ? `<button type="button" class="hh-sd-vip-btn">👑 Join VIP</button>` : ""}
          </div>
        </div>
      `;

      card.addEventListener("mouseenter", () => updateCoverflow3D(reel, card));
      card.addEventListener("mouseleave", () => updateCoverflow3D(reel, null));

      card.addEventListener("click", (e) => {
        if (e.target.closest(".hh-sd-vip-btn")) {
          e.stopPropagation();
          openExternalOrTelegramLink(VIP_BOT_URL);
          return;
        }
        openExternalOrTelegramLink(item.link);
      });

      reel.appendChild(card);
    });

    reel.addEventListener("scroll", () => updateCoverflow3D(reel), { passive: true });
    window.addEventListener("resize", () => updateCoverflow3D(reel));

    section.querySelector("#hh-sd-prev").addEventListener("click", () => {
      reel.scrollBy({ left: -320, behavior: "smooth" });
    });
    section.querySelector("#hh-sd-next").addEventListener("click", () => {
      reel.scrollBy({ left: 320, behavior: "smooth" });
    });

    const anchor = findInsertionAnchor();
    const footer = document.querySelector("footer");
    if (anchor && anchor !== document.body && anchor.parentNode) {
      anchor.parentNode.insertBefore(section, anchor.nextSibling);
    } else if (footer && footer.parentNode) {
      footer.parentNode.insertBefore(section, footer);
    } else {
      document.body.appendChild(section);
    }

    requestAnimationFrame(() => updateCoverflow3D(reel));

    const searchInput = document.querySelector('input[type="search"], input[type="text"]');
    if (searchInput && !searchInput.dataset.hhShortBound) {
      searchInput.dataset.hhShortBound = "1";
      searchInput.addEventListener("input", () => {
        const q = searchInput.value.trim().toLowerCase();
        let visibleCount = 0;
        reel.querySelectorAll(".hh-sd-card").forEach((c) => {
          const match = !q || c.dataset.search.includes(q);
          c.style.display = match ? "flex" : "none";
          if (match) visibleCount++;
        });
        const countEl = document.getElementById("hh-sd-count");
        if (countEl) countEl.textContent = `${visibleCount} ${visibleCount === 1 ? "Story" : "Stories"}`;
        updateCoverflow3D(reel);
      });
    }
  }

  function mountWhenReady() {
    buildShortDramasSection();
    setTimeout(() => {
      if (!document.getElementById("hh-short-dramas-section")) {
        buildShortDramasSection();
      }
    }, 350);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mountWhenReady);
  } else {
    mountWhenReady();
  }
})();