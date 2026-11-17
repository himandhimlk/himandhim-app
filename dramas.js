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

// ============================================================================
// SHORT DRAMAS SEGMENT — Standalone Single-Episode Stories (Widescreen 16:9)
// Edit, add, or remove items below; they render automatically below DRAMAS.
// ============================================================================
const SHORT_DRAMAS = [
  {
    titleSi: "වැස්සක මතක (Short Film)",
    titleEn: "Memories in the Rain",
    durationSi: "මිනිත්තු 14",
    durationEn: "14 MIN",
    badgeSi: "VIP කෙටි නාට්‍යය",
    badgeEn: "VIP SHORT",
    isVip: true,
    descSi: "එක් වැසි රාත්‍රියක අහම්බෙන් හමුවූ හදවත් දෙකක සංවේදී කෙටි කතාව. සම්පූර්ණ දර්ශනය නරඹන්න.",
    descEn: "An emotional short story of two hearts meeting by chance on a rainy night. Stream the complete uncut film.",
    thumbUrl: "short_rain.webp",
    gradient: "linear-gradient(135deg, #5a1238 0%, #1e0b2e 55%, #07050c 100%)",
    link: "https://t.me/c/4339816032/41"
  },
  {
    titleSi: "අවසන් හමුවීම (Short Film)",
    titleEn: "The Last Goodbye",
    durationSi: "මිනිත්තු 10",
    durationEn: "10 MIN",
    badgeSi: "VIP කෙටි නාට්‍යය",
    badgeEn: "VIP SHORT",
    isVip: true,
    descSi: "කාලය විසින් වෙන් කළ ආදරයක නොකී වදන්. Him & Him VIP සාමාජිකයින් සඳහා විශේෂ කෙටි නාට්‍යය.",
    descEn: "Unspoken words of a love separated by time. A special standalone short drama for Him & Him VIP members.",
    thumbUrl: "short_goodbye.webp",
    gradient: "linear-gradient(135deg, #0e4a5c 0%, #101c36 55%, #07050c 100%)",
    link: "https://t.me/c/4339816032/42"
  },
  {
    titleSi: "රහස් බැල්ම (Short Film)",
    titleEn: "Secret Glance",
    durationSi: "මිනිත්තු 08",
    durationEn: "08 MIN",
    badgeSi: "නොමිලේ නරඹන්න",
    badgeEn: "FREE PREVIEW",
    isVip: false,
    descSi: "වචන නැතිව ඇස් වලින් කතා කළ ආදරයක ආරම්භය. දැන්ම සම්පූර්ණ කෙටි කතාව නරඹන්න.",
    descEn: "The beginning of a romance spoken only through glances. Watch the full short story right now.",
    thumbUrl: "short_glance.webp",
    gradient: "linear-gradient(135deg, #6b2614 0%, #261024 55%, #07050c 100%)",
    link: "https://youtu.be/YOUR_VIDEO_ID"
  }
];

// ============================================================================
// INNOVATIVE WIDESCREEN CINEMA REEL ENGINE FOR SHORT DRAMAS
// Automatically injects below the main Series grid & matches site colors
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
        width: 100%;
        max-width: 1240px;
        margin: 34px auto 28px auto;
        padding: 22px 16px 26px 16px;
        box-sizing: border-box;
        border-radius: 22px;
        background: linear-gradient(165deg, rgba(24, 14, 38, 0.86) 0%, rgba(11, 8, 20, 0.94) 60%, rgba(7, 5, 12, 0.98) 100%);
        border: 1px solid rgba(255, 42, 109, 0.28);
        box-shadow: 0 18px 45px rgba(0, 0, 0, 0.65), inset 0 1px 0 rgba(255, 255, 255, 0.08);
        overflow: hidden;
      }
      #hh-short-dramas-section::before {
        content: "";
        position: absolute;
        top: -90px;
        right: -60px;
        width: 240px;
        height: 240px;
        background: radial-gradient(circle, rgba(255, 42, 109, 0.22) 0%, rgba(157, 78, 221, 0.08) 45%, transparent 72%);
        pointer-events: none;
      }
      .hh-sd-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        margin-bottom: 16px;
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
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: #ff8fb3;
        background: rgba(255, 42, 109, 0.14);
        border: 1px solid rgba(255, 42, 109, 0.35);
      }
      .hh-sd-pulse-dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: #ff2a6d;
        box-shadow: 0 0 10px #ff2a6d;
        animation: hhSdPulse 1.8s infinite ease-in-out;
      }
      @keyframes hhSdPulse {
        0%, 100% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.45); opacity: 0.45; }
      }
      .hh-sd-heading {
        margin: 0;
        font-size: clamp(19px, 2.6vw, 24px);
        font-weight: 800;
        color: #ffffff;
        letter-spacing: 0.01em;
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .hh-sd-heading span.hh-sd-sub {
        font-size: 13px;
        font-weight: 500;
        color: rgba(255, 255, 255, 0.62);
      }
      .hh-sd-controls {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .hh-sd-count-pill {
        padding: 5px 11px;
        border-radius: 999px;
        font-size: 12px;
        font-weight: 600;
        color: rgba(255, 255, 255, 0.8);
        background: rgba(255, 255, 255, 0.06);
        border: 1px solid rgba(255, 255, 255, 0.1);
      }
      .hh-sd-nav-btn {
        width: 34px;
        height: 34px;
        border-radius: 50%;
        border: 1px solid rgba(255, 255, 255, 0.16);
        background: rgba(255, 255, 255, 0.06);
        color: #ffffff;
        font-size: 15px;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        transition: all 0.22s ease;
      }
      .hh-sd-nav-btn:hover {
        background: linear-gradient(135deg, #ff2a6d, #9d4edd);
        border-color: transparent;
        transform: translateY(-1px);
      }
      .hh-sd-reel {
        display: flex;
        gap: 16px;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        padding-bottom: 6px;
        scrollbar-width: thin;
        scrollbar-color: rgba(255, 42, 109, 0.45) rgba(255, 255, 255, 0.04);
      }
      .hh-sd-reel::-webkit-scrollbar {
        height: 5px;
      }
      .hh-sd-reel::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.04);
        border-radius: 999px;
      }
      .hh-sd-reel::-webkit-scrollbar-thumb {
        background: linear-gradient(90deg, #ff2a6d, #9d4edd);
        border-radius: 999px;
      }
      .hh-sd-card {
        flex: 0 0 min(320px, 84vw);
        scroll-snap-align: start;
        border-radius: 18px;
        background: rgba(14, 11, 24, 0.92);
        border: 1px solid rgba(255, 255, 255, 0.1);
        overflow: hidden;
        display: flex;
        flex-direction: column;
        transition: transform 0.28s ease, border-color 0.28s ease, box-shadow 0.28s ease;
        cursor: pointer;
      }
      .hh-sd-card:hover {
        transform: translateY(-4px);
        border-color: rgba(255, 42, 109, 0.65);
        box-shadow: 0 14px 30px rgba(255, 42, 109, 0.2);
      }
      .hh-sd-media {
        position: relative;
        width: 100%;
        aspect-ratio: 16 / 9;
        overflow: hidden;
      }
      .hh-sd-media img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: transform 0.45s ease;
      }
      .hh-sd-card:hover .hh-sd-media img {
        transform: scale(1.06);
      }
      .hh-sd-media-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, rgba(7, 5, 12, 0.25) 0%, rgba(7, 5, 12, 0.1) 45%, rgba(7, 5, 12, 0.88) 100%);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 10px 12px;
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
        font-size: 10.5px;
        font-weight: 700;
        letter-spacing: 0.04em;
        backdrop-filter: blur(8px);
      }
      .hh-sd-badge.vip {
        color: #ffe29a;
        background: rgba(255, 183, 3, 0.22);
        border: 1px solid rgba(255, 209, 102, 0.48);
      }
      .hh-sd-badge.free {
        color: #80ffdb;
        background: rgba(6, 214, 160, 0.2);
        border: 1px solid rgba(128, 255, 219, 0.45);
      }
      .hh-sd-duration {
        padding: 3px 9px;
        border-radius: 999px;
        font-size: 11px;
        font-weight: 600;
        color: #ffffff;
        background: rgba(7, 5, 12, 0.72);
        border: 1px solid rgba(255, 255, 255, 0.18);
        backdrop-filter: blur(6px);
      }
      .hh-sd-play-orb {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 46px;
        height: 46px;
        border-radius: 50%;
        background: linear-gradient(135deg, rgba(255, 42, 109, 0.92), rgba(157, 78, 221, 0.92));
        border: 2px solid rgba(255, 255, 255, 0.85);
        box-shadow: 0 0 22px rgba(255, 42, 109, 0.65);
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ffffff;
        font-size: 16px;
        padding-left: 3px;
        transition: transform 0.25s ease, box-shadow 0.25s ease;
      }
      .hh-sd-card:hover .hh-sd-play-orb {
        transform: translate(-50%, -50%) scale(1.12);
        box-shadow: 0 0 30px rgba(255, 42, 109, 0.95);
      }
      .hh-sd-body {
        padding: 13px 14px 15px 14px;
        display: flex;
        flex-direction: column;
        gap: 7px;
        flex: 1;
      }
      .hh-sd-card-title {
        margin: 0;
        font-size: 15.5px;
        font-weight: 700;
        color: #ffffff;
        line-height: 1.35;
      }
      .hh-sd-card-subtitle {
        font-size: 12px;
        font-weight: 600;
        color: #ff8fb3;
      }
      .hh-sd-card-desc {
        margin: 0;
        font-size: 12.5px;
        line-height: 1.5;
        color: rgba(255, 255, 255, 0.72);
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      .hh-sd-actions {
        margin-top: auto;
        padding-top: 8px;
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .hh-sd-watch-btn {
        flex: 1;
        padding: 9px 12px;
        border: none;
        border-radius: 11px;
        background: linear-gradient(135deg, #ff2a6d 0%, #9d4edd 100%);
        color: #ffffff;
        font-size: 12.5px;
        font-weight: 700;
        cursor: pointer;
        text-align: center;
        transition: filter 0.2s ease, transform 0.2s ease;
      }
      .hh-sd-watch-btn:hover {
        filter: brightness(1.12);
      }
      .hh-sd-vip-btn {
        padding: 9px 11px;
        border-radius: 11px;
        border: 1px solid rgba(255, 209, 102, 0.42);
        background: rgba(255, 183, 3, 0.12);
        color: #ffd166;
        font-size: 12px;
        font-weight: 700;
        cursor: pointer;
        white-space: nowrap;
        transition: background 0.2s ease;
      }
      .hh-sd-vip-btn:hover {
        background: rgba(255, 183, 3, 0.24);
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

    // Fallback: locate the container holding the rendered drama cards
    const allElements = document.querySelectorAll("div, section");
    for (const el of allElements) {
      if (el.id === "hh-short-dramas-section") continue;
      if (el.textContent && el.textContent.includes("Garala") && el.children.length >= 2 && el.children.length <= 30) {
        return el;
      }
    }

    return document.querySelector("main") || document.body;
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
          <span class="hh-sd-kicker"><span class="hh-sd-pulse-dot"></span> SINGLE-EPISODE CINEMA • කෙටි කතා</span>
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

    // Horizontal reel navigation buttons
    section.querySelector("#hh-sd-prev").addEventListener("click", () => {
      reel.scrollBy({ left: -340, behavior: "smooth" });
    });
    section.querySelector("#hh-sd-next").addEventListener("click", () => {
      reel.scrollBy({ left: 340, behavior: "smooth" });
    });

    // Place cleanly right below the main Series grid (and above footer)
    const anchor = findInsertionAnchor();
    const footer = document.querySelector("footer");
    if (anchor && anchor !== document.body && anchor.parentNode) {
      anchor.parentNode.insertBefore(section, anchor.nextSibling);
    } else if (footer && footer.parentNode) {
      footer.parentNode.insertBefore(section, footer);
    } else {
      document.body.appendChild(section);
    }

    // Sync with the site's live search input if present
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
      });
    }
  }

  function mountWhenReady() {
    buildShortDramasSection();
    // Re-check once after 350ms in case index.html renders DRAMAS asynchronously
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