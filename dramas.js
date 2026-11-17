// Replace with your VIP Payment Bot username (without @)
const VIP_BOT_URL = "https://t.me/himandhim_vip_bot";

// ============================================================================
// YOUR DRAMA CATALOG — Edit only this file to add episodes, seasons, or posters
// ============================================================================
const DRAMAS = [
  {
    titleSi: "ගරළ",
    titleEn: "Garala",
    year: "2026",
    tagSi: "කතා සමයන් 2 • සිංහල BL",
    tagEn: "2 SEASONS • SINHALA BL",
    descSi: "සෙවනැලි යුද්ධය ඇරඹී ඇත! අඳුරු මායාවන් සහ පාවාදීම් මැද, අශේන් සහ නෙතුගේ නොබිඳෙන ආදරය ජය ගනීවිද? 🐍⚔️💙",
    descEn: "The Civil War of Shadows has begun. Amid dark sorcery and betrayal, will Ashen and Nethu’s unbreakable bond survive? 🐍⚔️💙",
    posterUrl: "", // Upload poster to GitHub and type filename here (e.g., "garala_poster.webp")
    gradient: "linear-gradient(155deg, #0d4f3c 0%, #0b2922 55%, #07050c 100%)",
    seasons: [
      {
        seasonNameSi: "Season 1 (පළමු කතා සමය)",
        seasonNameEn: "Season 1",
        episodes: [
          { num: 1, titleSi: "01 වන කොටස", titleEn: "Episode 01", subSi: "සම්පූර්ණ කොටස • VIP", subEn: "Full Uncut • VIP", thumbUrl: "", link: "https://t.me/c/4339816032/2" },
          { num: 2, titleSi: "02 වන කොටස", titleEn: "Episode 02", subSi: "සම්පූර්ණ කොටස • VIP", subEn: "Full Uncut • VIP", thumbUrl: "", link: "https://t.me/c/4339816032/3" }
        ]
      },
      {
        seasonNameSi: "Season 2 (දෙවන කතා සමය)",
        seasonNameEn: "Season 2",
        episodes: [
          { num: 1, titleSi: "01 වන කොටස", titleEn: "Episode 01", subSi: "දෙවන කතා සමය • VIP", subEn: "Season 2 • VIP", thumbUrl: "", link: "https://t.me/c/4339816032/4" }
        ]
      }
    ]
  },
  {
    titleSi: "කළු පාට ටැටූ",
    titleEn: "Kalu Pata Tattoo",
    year: "2026",
    tagSi: "ඛේදනීය ආදර කතාව • සිංහල BL",
    tagEn: "TRAGIC ROMANCE • SINHALA BL",
    descSi: "දුරුතු සහ අයුර්ගේ ඛේදනීය කතාව. සියලුම සම්පූර්ණ කොටස් බාධාවකින් තොරව Him & Him VIP නාලිකාවෙන් නරඹන්න.",
    descEn: "The tragic and emotional love story of Duruthu and Ayur. Stream all complete uncut episodes without interruptions.",
    posterUrl: "", // e.g., "tattoo_poster.webp"
    gradient: "linear-gradient(155deg, #3a1c5c 0%, #1b0e2e 55%, #07050c 100%)",
    seasons: [
      {
        seasonNameSi: "Season 1 (පළමු කතා සමය)",
        seasonNameEn: "Season 1",
        episodes: [
          { num: 1, titleSi: "01 වන කොටස", titleEn: "Episode 01", subSi: "සම්පූර්ණ කොටස • VIP", subEn: "Full Uncut • VIP", thumbUrl: "", link: "https://t.me/c/4339816032/5" }
        ]
      }
    ]
  },
  {
    titleSi: "මායාවියා",
    titleEn: "Mayaviya",
    year: "2026",
    tagSi: "කතා සමයන් 2 • සිංහල BL",
    tagEn: "2 SEASONS • SINHALA BL",
    descSi: "ආත්ම ගත බැඳීමක මායා ලෝකය. මායාවියා කතා මාලාවේ පළමු සහ දෙවන කතා සමයන්හි සියලුම සම්පූර්ණ කොටස් නරඹන්න.",
    descEn: "A magical world of a deep soulmate bond. Watch all complete episodes across Season 1 and Season 2 of Mayaviya.",
    posterUrl: "", // e.g., "mayaviya_poster.webp"
    gradient: "linear-gradient(155deg, #8a0e2c 0%, #3b0923 55%, #07050c 100%)",
    seasons: [
      {
        seasonNameSi: "Season 1 (පළමු කතා සමය)",
        seasonNameEn: "Season 1",
        episodes: [
          { num: 1, titleSi: "01 වන කොටස", titleEn: "Episode 01", subSi: "සම්පූර්ණ කොටස • VIP", subEn: "Full Uncut • VIP", thumbUrl: "", link: "https://t.me/c/4339816032/6" }
        ]
      },
      {
        seasonNameSi: "Season 2 (දෙවන කතා සමය)",
        seasonNameEn: "Season 2",
        episodes: [
          { num: 1, titleSi: "01 වන කොටස", titleEn: "Episode 01", subSi: "දෙවන කතා සමය • VIP", subEn: "Season 2 • VIP", thumbUrl: "", link: "https://t.me/c/4339816032/7" }
        ]
      }
    ]
  },
  {
    titleSi: "විරල හුස්ම",
    titleEn: "Virala Husma",
    year: "2026",
    tagSi: "ආදර කතාව • සිංහල BL",
    tagEn: "ROMANCE • SINHALA BL",
    descSi: "සිනමාත්මක AI දර්ශන සමඟින් ඔබ වෙත ගෙන එන දුර්ලභ ආදර කතාවක්. Him & Him VIP සාමාජිකයින් සඳහා පමණි.",
    descEn: "A rare love story brought to life in cinematic AI visuals. Available exclusively for Him & Him VIP members.",
    posterUrl: "", // e.g., "viralahusma_poster.webp"
    gradient: "linear-gradient(155deg, #7c3211 0%, #331618 55%, #07050c 100%)",
    seasons: [
      {
        seasonNameSi: "Season 1 (පළමු කතා සමය)",
        seasonNameEn: "Season 1",
        episodes: [
          { num: 1, titleSi: "01 වන කොටස", titleEn: "Episode 01", subSi: "සම්පූර්ණ කොටස • VIP", subEn: "Full Uncut • VIP", thumbUrl: "", link: "https://t.me/c/4339816032/8" }
        ]
      }
    ]
  },
  {
    titleSi: "ඝට්ටනය",
    titleEn: "Gattanaya",
    year: "2026",
    tagSi: "සිංහල BL නාට්‍යය",
    tagEn: "BL DRAMA • SINHALA",
    descSi: "ගැටෙන හදවත් සහ නොකී රහස්. ඝට්ටනය කතා මාලාවේ සියලුම සම්පූර්ණ කොටස් බාධාවකින් තොරව නරඹන්න.",
    descEn: "Clashing hearts and untold secrets. Stream all complete episodes of Gattanaya without interruptions.",
    posterUrl: "", // e.g., "gattanaya_poster.webp"
    gradient: "linear-gradient(155deg, #0f3d68 0%, #152242 55%, #07050c 100%)",
    seasons: [
      {
        seasonNameSi: "Season 1 (පළමු කතා සමය)",
        seasonNameEn: "Season 1",
        episodes: [
          { num: 1, titleSi: "01 වන කොටස", titleEn: "Episode 01", subSi: "සම්පූර්ණ කොටස • VIP", subEn: "Full Uncut • VIP", thumbUrl: "", link: "https://t.me/c/4339816032/9" }
        ]
      }
    ]
  }
];