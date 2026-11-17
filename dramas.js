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
    tagSi: "කතා සමයන් 1 • සිංහල BL",
    tagEn: "1 SEASON • SINHALA BL",
    descSi: "සෙවනැලි යුද්ධය ඇරඹී ඇත! අඳුරු මායාවන් සහ පාවාදීම් මැද, අශේන් සහ නෙතුගේ නොබිඳෙන ආදරය ජය ගනීවිද? 🐍⚔️💙",
    descEn: "The Civil War of Shadows has begun. Amid dark sorcery and betrayal, will Ashen and Nethu’s unbreakable bond survive? 🐍⚔️💙",
    slideUrl: "garala_slide.webp",
    posterUrl: "garala.jpg",
    gradient: "linear-gradient(155deg, #0d4f3c 0%, #0b2922 55%, #07050c 100%)",
    seasons: [
      {
        seasonNameSi: "Season 1 (පළමු කතා සමය)",
        seasonNameEn: "Season 1",
        episodes: [
          { num: 1, titleSi: "01 වන කොටස", titleEn: "Episode 01", subSi: "සම්පූර්ණ කොටස • VIP", subEn: "Full Uncut • VIP", thumbUrl: "garala_ep1.jpg", link: "https://t.me/c/4339816032/17" },
          { num: 2, titleSi: "02 වන කොටස", titleEn: "Episode 02", subSi: "සම්පූර්ණ කොටස • VIP", subEn: "Full Uncut • VIP", thumbUrl: "garala_ep2.jpg", link: "https://t.me/c/4339816032/18" }
          { num: 2, titleSi: "03 වන කොටස", titleEn: "Episode 03", subSi: "සම්පූර්ණ කොටස • VIP", subEn: "Full Uncut • VIP", thumbUrl: "garala_ep3.jpg", link: "https://t.me/c/4339816032/19" }
          { num: 2, titleSi: "04 වන කොටස", titleEn: "Episode 04", subSi: "සම්පූර්ණ කොටස • VIP", subEn: "Full Uncut • VIP", thumbUrl: "garala_ep4.jpg", link: "https://t.me/c/4339816032/20" }
          { num: 2, titleSi: "05 වන කොටස", titleEn: "Episode 05", subSi: "සම්පූර්ණ කොටස • VIP", subEn: "Full Uncut • VIP", thumbUrl: "garala_ep5.jpg", link: "https://t.me/c/4339816032/21" }
          { num: 2, titleSi: "06 වන කොටස", titleEn: "Episode 06", subSi: "සම්පූර්ණ කොටස • VIP", subEn: "Full Uncut • VIP", thumbUrl: "garala_ep6.jpg", link: "https://t.me/c/4339816032/29" }
          { num: 2, titleSi: "07 වන කොටස", titleEn: "Episode 07", subSi: "සම්පූර්ණ කොටස • VIP", subEn: "Full Uncut • VIP", thumbUrl: "garala_ep7.jpg", link: "https://t.me/c/4339816032/31" }
          { num: 2, titleSi: "08 වන කොටස", titleEn: "Episode 08", subSi: "සම්පූර්ණ කොටස • VIP", subEn: "Full Uncut • VIP", thumbUrl: "garala_ep8.jpg", link: "https://t.me/c/4339816032/33" }
          { num: 2, titleSi: "09 වන කොටස", titleEn: "Episode 09", subSi: "සම්පූර්ණ කොටස • VIP", subEn: "Full Uncut • VIP", thumbUrl: "garala_ep9.jpg", link: "https://t.me/c/4339816032/35" }
          { num: 2, titleSi: "10 වන කොටස", titleEn: "Episode 10", subSi: "සම්පූර්ණ කොටස • VIP", subEn: "Full Uncut • VIP", thumbUrl: "garala_ep10.jpg", link: "https://t.me/c/4339816032/36" }
          { num: 2, titleSi: "11 වන කොටස", titleEn: "Episode 11", subSi: "සම්පූර්ණ කොටස • VIP", subEn: "Full Uncut • VIP", thumbUrl: "garala_ep11.jpg", link: "https://t.me/c/4339816032/38" }
          { num: 2, titleSi: "12 වන කොටස", titleEn: "Episode 12", subSi: "සම්පූර්ණ කොටස • VIP", subEn: "Full Uncut • VIP", thumbUrl: "garala_ep12.jpg", link: "https://t.me/c/4339816032/39" }
          { num: 2, titleSi: "13 වන කොටස", titleEn: "Episode 13", subSi: "සම්පූර්ණ කොටස • VIP", subEn: "Full Uncut • VIP", thumbUrl: "garala_ep13.jpg", link: "https://t.me/c/4339816032/40" }

        ]
      }
    ]
  },
  {
    titleSi: "විරල හුස්ම",
    titleEn: "Virala Husma",
    year: "2026",
    tagSi: "කතා සමයන් 1 • සිංහල BL",
    tagEn: "1 SEASON • SINHALA BL",
    descSi: "සිනමාත්මක AI දර්ශන සමඟින් ඔබ වෙත ගෙන එන දුර්ලභ ආදර කතාවක්. Him & Him VIP සාමාජිකයින් සඳහා පමණි.",
    descEn: "A rare love story brought to life in cinematic AI visuals. Available exclusively for Him & Him VIP members.",
    slideUrl: "viralahusma_slide.webp",
    posterUrl: "viralahusma_cover.webp",
    gradient: "linear-gradient(155deg, #7c3211 0%, #331618 55%, #07050c 100%)",
    seasons: [
      {
        seasonNameSi: "Season 1 (පළමු කතා සමය)",
        seasonNameEn: "Season 1",
        episodes: [
          { num: 1, titleSi: "01 වන කොටස", titleEn: "Episode 01", subSi: "සම්පූර්ණ කොටස • VIP", subEn: "Full Uncut • VIP", thumbUrl: "viralahusma_ep1.webp", link: "https://t.me/c/4339816032/8" }
        ]
      }
    ]
  },
  {
    titleSi: "මායාවියා",
    titleEn: "Mayawiya",
    year: "2026",
    tagSi: "කතා සමයන් 2 • සිංහල BL",
    tagEn: "2 SEASONS • SINHALA BL",
    descSi: "ආත්ම ගත බැඳීමක මායා ලෝකය. මායාවියා කතා මාලාවේ පළමු සහ දෙවන කතා සමයන්හි සියලුම සම්පූර්ණ කොටස් නරඹන්න.",
    descEn: "A magical world of a deep soulmate bond. Watch all complete episodes across Season 1 and Season 2 of Mayawiya.",
    slideUrl: "mayawiya_slide.webp",
    posterUrl: "mayawiya_cover.webp",
    gradient: "linear-gradient(155deg, #8a0e2c 0%, #3b0923 55%, #07050c 100%)",
    seasons: [
      {
        seasonNameSi: "Season 1 (පළමු කතා සමය)",
        seasonNameEn: "Season 1",
        episodes: [
          { num: 1, titleSi: "01 වන කොටස", titleEn: "Episode 01", subSi: "සම්පූර්ණ කොටස • VIP", subEn: "Full Uncut • VIP", thumbUrl: "mayawiya_s1_ep1.webp", link: "https://t.me/c/4339816032/6" }
        ]
      },
      {
        seasonNameSi: "Season 2 (දෙවන කතා සමය)",
        seasonNameEn: "Season 2",
        episodes: [
          { num: 1, titleSi: "01 වන කොටස", titleEn: "Episode 01", subSi: "දෙවන කතා සමය • VIP", subEn: "Season 2 • VIP", thumbUrl: "mayawiya_s2_ep1.webp", link: "https://t.me/c/4339816032/7" }
        ]
      }
    ]
  },
  {
    titleSi: "ඝට්ටනය",
    titleEn: "Ghattanaya",
    year: "2026",
    tagSi: "කතා සමයන් 1 • සිංහල BL",
    tagEn: "1 SEASON • SINHALA BL",
    descSi: "ගැටෙන හදවත් සහ නොකී රහස්. ඝට්ටනය කතා මාලාවේ සියලුම සම්පූර්ණ කොටස් බාධාවකින් තොරව නරඹන්න.",
    descEn: "Clashing hearts and untold secrets. Stream all complete episodes of Ghattanaya without interruptions.",
    slideUrl: "ghattanaya_slide.webp",
    posterUrl: "ghattanaya_cover.webp",
    gradient: "linear-gradient(155deg, #0f3d68 0%, #152242 55%, #07050c 100%)",
    seasons: [
      {
        seasonNameSi: "Season 1 (පළමු කතා සමය)",
        seasonNameEn: "Season 1",
        episodes: [
          { num: 1, titleSi: "01 වන කොටස", titleEn: "Episode 01", subSi: "සම්පූර්ණ කොටස • VIP", subEn: "Full Uncut • VIP", thumbUrl: "ghattanaya_ep1.webp", link: "https://t.me/c/4339816032/9" }
        ]
      }
    ]
  },
  {
    titleSi: "O+ (O Positive)",
    titleEn: "O+ (O Positive)",
    year: "2026",
    tagSi: "කතා සමයන් 1 • සිංහල BL",
    tagEn: "1 SEASON • SINHALA BL",
    descSi: "එකම ලේ බැඳීමකින් සහ නොසිතූ ඉරණමකින් එකට බැඳුණු හදවත් දෙකක කතාව. O+ කතා මාලාවේ සියලුම සම්පූර්ණ කොටස් Him & Him VIP වෙතින් නරඹන්න.",
    descEn: "Two hearts bound together by a rare bloodline and an unexpected destiny. Stream all complete uncut episodes of O+ exclusively on Him & Him VIP.",
    slideUrl: "opositive_slide.webp",
    posterUrl: "opositive_cover.webp",
    gradient: "linear-gradient(155deg, #6e1028 0%, #2b0915 55%, #07050c 100%)",
    seasons: [
      {
        seasonNameSi: "Season 1 (පළමු කතා සමය)",
        seasonNameEn: "Season 1",
        episodes: [
          { num: 1, titleSi: "01 වන කොටස", titleEn: "Episode 01", subSi: "සම්පූර්ණ කොටස • VIP", subEn: "Full Uncut • VIP", thumbUrl: "opositive_ep1.webp", link: "https://t.me/c/4339816032/10" }
        ]
      }
    ]
  },
  {
    titleSi: "කළු පාට ටැටූ",
    titleEn: "The Black Tattoo",
    year: "2026",
    tagSi: "කතා සමයන් 1 • සිංහල BL",
    tagEn: "1 SEASON • SINHALA BL",
    descSi: "දුරුතු සහ අයුර්ගේ ඛේදනීය කතාව. සියලුම සම්පූර්ණ කොටස් බාධාවකින් තොරව Him & Him VIP නාලිකාවෙන් නරඹන්න.",
    descEn: "The tragic and emotional love story of Duruthu and Ayur. Stream all complete uncut episodes without interruptions.",
    slideUrl: "blacktattoo_slide.webp",
    posterUrl: "blacktattoo_cover.webp",
    gradient: "linear-gradient(155deg, #3a1c5c 0%, #1b0e2e 55%, #07050c 100%)",
    seasons: [
      {
        seasonNameSi: "Season 1 (පළමු කතා සමය)",
        seasonNameEn: "Season 1",
        episodes: [
          { num: 1, titleSi: "01 වන කොටස", titleEn: "Episode 01", subSi: "සම්පූර්ණ කොටස • VIP", subEn: "Full Uncut • VIP", thumbUrl: "blacktattoo_ep1.webp", link: "https://t.me/c/4339816032/5" }
        ]
      }
    ]
  }
];