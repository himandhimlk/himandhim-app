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
    slideUrl: "kalupatatatoo_slide.webp",
    posterUrl: "kalupatatatoo_cover.webp",
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
// SUNDAY PREMIERE BILLBOARDS — Update Coming Sunday & Previous Sunday here!
// Upload two separate images to your GitHub folder and set imageUrl below.
// ============================================================================
const SUNDAY_BILLBOARDS = {
  comingSunday: {
    pillSi: "✨ ඉදිරි ඉරිදා නිකුත් වන",
    pillEn: "✨ COMING THIS SUNDAY",
    timeSi: "ඉරිදා රාත්‍රී 8:00 • VIP",
    timeEn: "SUNDAY 8:00 PM • VIP",
    titleSi: "O+(O Positive) — 4 වන කොටස",
    titleEn: "O+(O Positive) — Episode 4",
    descSi: "මීදුම අස්සේ සැඟවුණු, ලේ බැඳීමකට එහා ගිය අසම්මත ආදර කතාව... 🩸❤️! මේ ඉරිදා VIP නාලිකාවෙන්.",
    descEn: "Bound by blood, torn by fate. Experience the intense Sinhala BL romance hidden in the mist of Badulla. 🩸❤️! Premiering this Sunday on VIP.",
    ctaSi: "👑 VIP වී සූදානම් වන්න",
    ctaEn: "👑 Join VIP for Premiere",
    imageUrl: "o_slide.webp",
    fallbackUrl: "o_side.webp",
    gradient: "linear-gradient(150deg, #7a104e 0%, #2b0b3d 55%, #07050c 100%)",
    link: "https://t.me/himandhim_vip_bot"
  },
  previousSunday: {
    pillSi: "🔥 පසුගිය ඉරිදා නිකුත් වූ",
    pillEn: "🔥 PREVIOUS SUNDAY RELEASE",
    timeSi: "දැන් නරඹන්න • FULL HD",
    timeEn: "OUT NOW • FULL UNCUT",
    titleSi: "මායාවියා S02 — 02 වන කොටස",
    titleEn: "Mayawiya — Episode 02",
    descSi: "පසුගිය ඉරිදා නිකුත් වූ සම්පූර්ණ කොටස දැන් VIP නාලිකාවෙන් නරඹන්න.",
    descEn: "Stream last Sunday's complete uncut episode right now on VIP.",
    ctaSi: "▶ දැන්ම නරඹන්න",
    ctaEn: "▶ Watch Release Now",
    imageUrl: "mayawiya_slide.webp",
    fallbackUrl: "mayawiya_cover.webp",
    gradient: "linear-gradient(150deg, #0c4d63 0%, #16123b 55%, #07050c 100%)",
    link: "https://t.me/c/4339816032/48"
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
// 1. 3D INTERLOCKING DIAGONAL CRYSTAL PRISM BILLBOARD STAGE
// Non-rectangular slanted geometry + curved IMAX 3D tilt + floating medallion
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

  function getNextSundayCountdown(lang) {
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

    if (lang === "en") {
      return `⏳ Next Drop: ${d}d ${h}h ${m}m`;
    }
    return `⏳ මීළඟ කොටසට: දින ${d} පැය ${h} මි. ${m}`;
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
        margin-bottom: 14px;
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
      .hh-bb-countdown {
        padding: 5px 11px;
        border-radius: 999px;
        font-size: 10.5px;
        font-weight: 800;
        color: #ffe29a;
        background: linear-gradient(135deg, rgba(238, 93, 183, 0.24), rgba(255, 109, 0, 0.24));
        border: 1px solid rgba(255, 174, 0, 0.45);
        box-shadow: 0 0 16px rgba(255, 109, 0, 0.25);
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

      /* Outer Slanted Neon Polygon Border Wrapper */
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

      /* Inner Slanted Crystal Screen */
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

      /* Holographic Specular Glare */
      .hh-bb-glare {
        position: absolute;
        inset: 0;
        z-index: 2;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.25s ease;
        background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.24), transparent 65%);
      }

      /* Sweeping Diagonal Laser Beam */
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

      /* Content Inside Top & Bottom Slanted Prisms */
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

      /* Center Floating 3D Hexagonal Seam Medallion */
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

  function renderBillboards(lang) {
    injectBillboardStyles();
    const activeLang = lang || (typeof currentLang !== "undefined" ? currentLang : "si");
    const existing = document.getElementById("hh-sunday-billboard-section");
    if (existing) existing.remove();

    const c = SUNDAY_BILLBOARDS.comingSunday;
    const p = SUNDAY_BILLBOARDS.previousSunday;

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
          <div class="hh-bb-countdown" id="hh-bb-countdown">${getNextSundayCountdown(activeLang)}</div>
        </div>

        <div class="hh-bb-prism-stack">
          <!-- UPPER DIAGONAL CRYSTAL PRISM: COMING SUNDAY -->
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

          <!-- FLOATING 3D HEXAGONAL SEAM MEDALLION -->
          <div class="hh-bb-medallion">⚡ ${activeLang === "en" ? "SUNDAY TIMELINE" : "ඉරිදා කාලසටහන"} ⚡</div>

          <!-- LOWER DIAGONAL CRYSTAL PRISM: PREVIOUS SUNDAY -->
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
    countdownInterval = setInterval(() => {
      const cdEl = document.getElementById("hh-bb-countdown");
      if (cdEl) {
        const cur = typeof currentLang !== "undefined" ? currentLang : activeLang;
        cdEl.textContent = getNextSundayCountdown(cur);
      }
    }, 30000);
  }

  window.refreshBillboardsLang = function (lang) {
    renderBillboards(lang);
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