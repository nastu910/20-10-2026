// quà 20/10

(function () {
  'use strict';

  // sửa tên, lời chúc, nhạc ở đây

  const GIFT_CONFIG = {
    recipientName: 'Mommy',

    welcomeGreeting: 'Mommy ơi, hôm nay là ngày của mommy đó nha.',

    externalAudioPath: 'assets/music.mp3',

    flowers: [
      {
        id: 'tulip',
        name: 'Tulip hồng',
        shortMeaning: 'Dịu dàng',
        wish: '“Hôm nay mommy cứ nhẹ nhàng với bản thân một chút nha, và mong mommy được thương thật nhiều.”',
        svg: `
          <svg viewBox="0 0 180 210" width="100%" height="100%">
            <path d="M35 95 L90 190 L145 95 L125 75 L55 75 Z" fill="#f7dde2" stroke="#e4b6c0" stroke-width="2"/>
            <path d="M48 100 L90 185 L132 100 Z" fill="#fff5f7"/>
            <path d="M90 85 L90 155 M72 95 L88 150 M108 95 L92 150" stroke="#5e8c6a" stroke-width="3.5" stroke-linecap="round"/>
            <path d="M65 125 Q55 95 75 90 Q72 115 85 135" fill="#76a382"/>
            <path d="M115 125 Q125 95 105 90 Q108 115 95 135" fill="#76a382"/>
            <g transform="translate(90, 56)">
              <path d="M-16 0 C-18 -22, -6 -30, 0 -20 C6 -30, 18 -22, 16 0 C14 14, -14 14, -16 0 Z" fill="#ec8396"/>
              <path d="M-10 -4 C-6 -20, 6 -20, 10 -4 C6 10, -6 10, -10 -4 Z" fill="#f7a8b8"/>
            </g>
            <g transform="translate(62, 68) rotate(-16)">
              <path d="M-14 0 C-16 -20, -5 -26, 0 -18 C5 -26, 16 -20, 14 0 C12 12, -12 12, -14 0 Z" fill="#f297a8"/>
              <path d="M-8 -3 C-5 -16, 5 -16, 8 -3 C5 8, -5 8, -8 -3 Z" fill="#fbc2ce"/>
            </g>
            <g transform="translate(118, 68) rotate(16)">
              <path d="M-14 0 C-16 -20, -5 -26, 0 -18 C5 -26, 16 -20, 14 0 C12 12, -12 12, -14 0 Z" fill="#e57388"/>
              <path d="M-8 -3 C-5 -16, 5 -16, 8 -3 C5 8, -5 8, -8 -3 Z" fill="#f7a8b8"/>
            </g>
            <path d="M74 152 Q90 144 106 152" stroke="#d4a359" stroke-width="5" fill="none" stroke-linecap="round"/>
            <path d="M86 152 L76 175 M94 152 L104 175" stroke="#d4a359" stroke-width="3.5" stroke-linecap="round"/>
            <circle cx="90" cy="152" r="5" fill="#c28e3e"/>
          </svg>
        `
      },
      {
        id: 'rose',
        name: 'Hoa hồng',
        shortMeaning: 'Yêu thương',
        wish: '“Mommy là người đẹp nhất trong lòng con, và con thương mommy nhiều lắm.”',
        svg: `
          <svg viewBox="0 0 180 210" width="100%" height="100%">
            <path d="M32 92 L90 192 L148 92 L128 70 L52 70 Z" fill="#f9ece4" stroke="#dfc3b4" stroke-width="2"/>
            <path d="M46 98 L90 184 L134 98 Z" fill="#fffaf6"/>
            <ellipse cx="62" cy="92" rx="14" ry="8" transform="rotate(-30 62 92)" fill="#4f7d5c"/>
            <ellipse cx="118" cy="92" rx="14" ry="8" transform="rotate(30 118 92)" fill="#4f7d5c"/>
            <path d="M90 88 L90 155" stroke="#4f7d5c" stroke-width="4"/>
            <g transform="translate(90, 56)">
              <circle cx="0" cy="0" r="22" fill="#c94257"/>
              <path d="M-14 -6 C-6 -18, 10 -16, 14 -2 C10 12, -10 14, -14 -6 Z" fill="#df5b70"/>
              <path d="M-8 -2 C-3 -10, 6 -9, 8 -1 C5 6, -5 7, -8 -2 Z" fill="#f48b9b"/>
              <circle cx="0" cy="-1" r="3.5" fill="#ffd1da"/>
            </g>
            <g transform="translate(62, 72)">
              <circle cx="0" cy="0" r="17" fill="#d85267"/>
              <path d="M-10 -4 C-4 -12, 8 -11, 10 -1 C7 9, -7 10, -10 -4 Z" fill="#ec7689"/>
              <circle cx="0" cy="0" r="3" fill="#ffd1da"/>
            </g>
            <g transform="translate(118, 72)">
              <circle cx="0" cy="0" r="17" fill="#b8374b"/>
              <path d="M-10 -4 C-4 -12, 8 -11, 10 -1 C7 9, -7 10, -10 -4 Z" fill="#df5b70"/>
              <circle cx="0" cy="0" r="3" fill="#ffd1da"/>
            </g>
            <path d="M72 150 C62 140, 62 162, 88 152 C114 162, 114 140, 104 150" fill="#c94257"/>
            <circle cx="90" cy="151" r="5.5" fill="#9e2a3b"/>
          </svg>
        `
      },
      {
        id: 'sunflower',
        name: 'Hướng dương',
        shortMeaning: 'Ấm áp',
        wish: '“Mommy như mặt trời nhỏ của nhà mình vậy. Chúc mommy mỗi ngày đều có một chuyện nhỏ làm mommy mỉm cười.”',
        svg: `
          <svg viewBox="0 0 180 210" width="100%" height="100%">
            <path d="M35 94 L90 192 L145 94 L125 74 L55 74 Z" fill="#faeed7" stroke="#e2c99e" stroke-width="2"/>
            <path d="M48 100 L90 184 L132 100 Z" fill="#fffdf7"/>
            <path d="M90 82 L90 155" stroke="#58855c" stroke-width="4.5"/>
            <path d="M62 105 Q45 88 68 82 Q76 96 86 115 Z" fill="#6b9c6f"/>
            <path d="M118 105 Q135 88 112 82 Q104 96 94 115 Z" fill="#6b9c6f"/>
            <g transform="translate(90, 62)">
              <g fill="#f6b93b">
                <ellipse cx="0" cy="-26" rx="6" ry="14"/>
                <ellipse cx="0" cy="26" rx="6" ry="14"/>
                <ellipse cx="-26" cy="0" rx="14" ry="6"/>
                <ellipse cx="26" cy="0" rx="14" ry="6"/>
                <ellipse cx="-18" cy="-18" rx="6" ry="14" transform="rotate(-45 -18 -18)"/>
                <ellipse cx="18" cy="-18" rx="6" ry="14" transform="rotate(45 18 -18)"/>
                <ellipse cx="-18" cy="18" rx="6" ry="14" transform="rotate(45 -18 18)"/>
                <ellipse cx="18" cy="18" rx="6" ry="14" transform="rotate(-45 18 18)"/>
              </g>
              <g fill="#feca57" transform="rotate(22.5)">
                <ellipse cx="0" cy="-24" rx="5" ry="12"/>
                <ellipse cx="0" cy="24" rx="5" ry="12"/>
                <ellipse cx="-24" cy="0" rx="12" ry="5"/>
                <ellipse cx="24" cy="0" rx="12" ry="5"/>
                <ellipse cx="-17" cy="-17" rx="5" ry="12" transform="rotate(-45 -17 -17)"/>
                <ellipse cx="17" cy="-17" rx="5" ry="12" transform="rotate(45 17 -17)"/>
                <ellipse cx="-17" cy="17" rx="5" ry="12" transform="rotate(45 -17 17)"/>
                <ellipse cx="17" cy="17" rx="5" ry="12" transform="rotate(-45 17 17)"/>
              </g>
              <circle cx="0" cy="0" r="15" fill="#6e473b"/>
              <circle cx="0" cy="0" r="11" fill="#523329" stroke="#d4a359" stroke-width="1.5" stroke-dasharray="2 3"/>
            </g>
            <path d="M73 152 Q90 144 107 152" stroke="#d86c7c" stroke-width="5" fill="none" stroke-linecap="round"/>
            <circle cx="90" cy="152" r="5" fill="#b84a5b"/>
          </svg>
        `
      }
    ],

    mysteryGifts: [
      {
        id: 'compliment-set',
        styleClass: 'mystery-style-compliment',
        heading: 'Lời cảm ơn',
        quote: '“Cảm ơn mommy vì đã luôn thương con, kể cả những lúc con chưa ngoan.”',
        pills: [],
        iconSvg: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#d86c7c" stroke-width="1.8"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6z"/></svg>`
      },
      {
        id: 'positive-note',
        styleClass: 'mystery-style-positive',
        heading: 'Chúc sức khỏe',
        quote: '“Mong mommy luôn khỏe, ngủ ngon, và ít phải lo nghĩ chuyện gì.”',
        pills: [],
        iconSvg: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#d4a359" stroke-width="1.8"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`
      },
      {
        id: 'mini-card',
        styleClass: 'mystery-style-minicard',
        heading: 'Thiệp 20/10',
        quote: '“Chúc mommy ngày vui nhiều hơn ngày buồn nha. Con thương mommy nhiều lắm.”',
        pills: [],
        iconSvg: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#b84a5b" stroke-width="1.8"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`
      },
      {
        id: 'self-care',
        styleClass: 'mystery-style-selfcare',
        heading: 'Ngày được nghỉ ngơi',
        quote: '“Hôm nay mommy cứ nghỉ ngơi nha, việc nhà để con phụ, mommy đừng lo gì hết.”',
        pills: [],
        iconSvg: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#9b59b6" stroke-width="1.8"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`
      }
    ],

    letterParagraphs: [
      'Nhân ngày 20/10, con gửi mommy một lời chúc nhỏ: mong mommy luôn khỏe, luôn vui, và gặp thật nhiều điều dễ thương.',
      'Con biết mommy lúc nào cũng lo cho cả nhà trước rồi mới tới mình. Hôm nay con muốn mommy được nghĩ cho bản thân một chút.',
      'Có những hôm mệt, mommy cứ nghỉ một chút nha. Mommy đã cố gắng nhiều lắm rồi, con thấy hết đó.',
      'Cảm ơn mommy vì đã thương con, chịu thương chịu khó vì con, và luôn ở đó mỗi khi con cần.',
      'Chúc mommy một ngày 20/10 thật vui và thật nhẹ nhàng nha.'
    ],
    letterSignature: 'Con yêu mommy nhiều lắm. Happy 20/10! 💗',

    finaleWishes: [
      'Chúc mommy luôn khỏe, luôn xinh, và được thương thật nhiều.',
      'Hôm nay và cả những ngày bình thường nữa, mong mommy vẫn luôn có lý do để mỉm cười.',
      'Quà nhỏ thôi, nhưng con gửi bằng cả tấm lòng. 💗'
    ]
  };

  const state = {
    currentScreen: 'screen-welcome',
    selectedFlower: GIFT_CONFIG.flowers[0],
    lastGiftIndex: -1,
    letterTimers: [],
    isAudioPlaying: false
  };

  const audioController = (function () {
    let audioCtx = null;
    let melodyTimer = null;
    let externalAudio = null;
    let useExternalMp3 = false;

    const notes = [523.25, 659.25, 783.99, 659.25, 698.46, 880.0, 783.99, 587.33, 659.25, 523.25];
    let noteIndex = 0;

    function initExternalAudio() {
      if (externalAudio) return;
      externalAudio = new Audio();
      externalAudio.src = GIFT_CONFIG.externalAudioPath;
      externalAudio.loop = true;
      externalAudio.volume = 0.45;

      externalAudio.addEventListener('canplaythrough', function () {
        useExternalMp3 = true;
      });
      externalAudio.addEventListener('error', function () {
        useExternalMp3 = false;
      });
    }

    function playSinglePianoNote(freq, duration = 1.4) {
      if (!audioCtx || audioCtx.state === 'suspended') return;
      const now = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.exponentialRampToValueAtTime(0.055, now + 0.06);
      gain.gain.exponentialRampToValueAtTime(0.0008, now + duration);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start(now);
      osc.stop(now + duration);
    }

    function startSynthLoop() {
      if (melodyTimer) clearInterval(melodyTimer);
      playSinglePianoNote(notes[noteIndex]);
      melodyTimer = setInterval(function () {
        if (!state.isAudioPlaying) return;
        noteIndex = (noteIndex + 1) % notes.length;
        playSinglePianoNote(notes[noteIndex]);
      }, 950);
    }

    function stopSynthLoop() {
      if (melodyTimer) {
        clearInterval(melodyTimer);
        melodyTimer = null;
      }
    }

    function updateAudioUI() {
      const toggleBtn = document.getElementById('btn-audio-toggle');
      if (!toggleBtn) return;
      const iconOff = toggleBtn.querySelector('.icon-sound-off');
      const iconOn = toggleBtn.querySelector('.icon-sound-on');
      const label = toggleBtn.querySelector('.audio-label');

      toggleBtn.setAttribute('aria-pressed', String(state.isAudioPlaying));
      if (state.isAudioPlaying) {
        iconOff.classList.add('hidden');
        iconOn.classList.remove('hidden');
        if (label) label.textContent = 'Nhạc: Bật';
      } else {
        iconOff.classList.remove('hidden');
        iconOn.classList.add('hidden');
        if (label) label.textContent = 'Nhạc: Tắt';
      }
    }

    function toggle(forceState) {
      initExternalAudio();
      const nextState = typeof forceState === 'boolean' ? forceState : !state.isAudioPlaying;

      if (nextState) {
        if (useExternalMp3 && externalAudio) {
          externalAudio.play().then(function () {
            state.isAudioPlaying = true;
            updateAudioUI();
          }).catch(function () {
            useExternalMp3 = false;
            startWebAudio();
          });
        } else {
          startWebAudio();
        }
      } else {
        state.isAudioPlaying = false;
        if (externalAudio) externalAudio.pause();
        stopSynthLoop();
        updateAudioUI();
      }
    }

    function startWebAudio() {
      try {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (!audioCtx && AudioContextClass) {
          audioCtx = new AudioContextClass();
        }
        if (audioCtx && audioCtx.state === 'suspended') {
          audioCtx.resume();
        }
        state.isAudioPlaying = true;
        startSynthLoop();
        updateAudioUI();
      } catch (e) {
        state.isAudioPlaying = false;
        updateAudioUI();
      }
    }

    function playChimeEffect() {
      if (!state.isAudioPlaying || !audioCtx) return;
      [659.25, 783.99, 1046.5].forEach(function (freq, idx) {
        setTimeout(function () {
          playSinglePianoNote(freq, 0.7);
        }, idx * 110);
      });
    }

    return {
      toggle: toggle,
      playChimeEffect: playChimeEffect
    };
  })();

  const ambientEffects = (function () {
    const canvas = document.getElementById('ambient-canvas');
    const ctx = canvas ? canvas.getContext('2d') : null;
    let width = 0;
    let height = 0;
    let petals = [];
    let bursts = [];
    let fireworkInterval = null;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function resize() {
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }

    function createPetal() {
      const isFinale = state.currentScreen === 'screen-finale';
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 6 + 4,
        speedY: isFinale ? -(Math.random() * 0.6 + 0.3) : Math.random() * 0.7 + 0.35,
        speedX: (Math.random() - 0.5) * 0.5,
        angle: Math.random() * Math.PI * 2,
        spin: (Math.random() - 0.5) * 0.02,
        alpha: Math.random() * 0.55 + 0.25,
        type: isFinale && Math.random() > 0.45 ? 'heart' : 'petal',
        color: isFinale ? '#ffb8c9' : '#f4a7b9'
      };
    }

    function initParticles() {
      if (!canvas || reducedMotion) return;
      resize();
      const count = width < 600 ? 18 : 30;
      petals = [];
      for (let i = 0; i < count; i++) {
        petals.push(createPetal());
      }
    }

    function triggerBurst(x, y, isFirework) {
      if (!ctx || reducedMotion) return;
      const palette = isFirework
        ? ['#ffd1dc', '#ffe6a7', '#f7b2bd', '#e0a96d', '#ffffff']
        : ['#e88d96', '#d4a359', '#f7cad0', '#ffeaad'];
      const total = isFirework ? 26 : 32;

      for (let i = 0; i < total; i++) {
        const angle = (Math.PI * 2 * i) / total + (Math.random() - 0.5) * 0.3;
        const speed = Math.random() * (isFirework ? 3.2 : 4.5) + 1.2;
        bursts.push({
          x: x,
          y: y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - (isFirework ? 0.5 : 1.5),
          size: Math.random() * 4 + 2.5,
          color: palette[Math.floor(Math.random() * palette.length)],
          alpha: 1,
          decay: Math.random() * 0.015 + 0.012
        });
      }
    }

    function setFinaleMode(enabled) {
      if (fireworkInterval) {
        clearInterval(fireworkInterval);
        fireworkInterval = null;
      }
      initParticles();
      if (enabled && !reducedMotion) {
        triggerBurst(width * 0.5, height * 0.28, true);
        fireworkInterval = setInterval(function () {
          if (state.currentScreen !== 'screen-finale') return;
          const rx = width * (0.2 + Math.random() * 0.6);
          const ry = height * (0.15 + Math.random() * 0.35);
          triggerBurst(rx, ry, true);
        }, 2600);
      }
    }

    function drawHeart(x, y, size) {
      ctx.beginPath();
      const topCurveHeight = size * 0.3;
      ctx.moveTo(x, y + topCurveHeight);
      ctx.bezierCurveTo(x, y, x - size / 2, y, x - size / 2, y + topCurveHeight);
      ctx.bezierCurveTo(x - size / 2, y + (size + topCurveHeight) / 2, x, y + (size + topCurveHeight) / 1.4, x, y + size);
      ctx.bezierCurveTo(x, y + (size + topCurveHeight) / 1.4, x + size / 2, y + (size + topCurveHeight) / 2, x + size / 2, y + topCurveHeight);
      ctx.bezierCurveTo(x + size / 2, y, x, y, x, y + topCurveHeight);
      ctx.closePath();
      ctx.fill();
    }

    function animate() {
      if (!ctx || reducedMotion) return;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < petals.length; i++) {
        const p = petals[i];
        p.x += p.speedX + Math.sin(p.angle) * 0.25;
        p.y += p.speedY;
        p.angle += p.spin;

        if (p.speedY > 0 && p.y > height + 20) {
          p.y = -15;
          p.x = Math.random() * width;
        } else if (p.speedY < 0 && p.y < -20) {
          p.y = height + 15;
          p.x = Math.random() * width;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;

        if (p.type === 'heart') {
          drawHeart(-p.size / 2, -p.size / 2, p.size * 1.3);
        } else {
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size, p.size * 0.58, 0, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }

      for (let j = bursts.length - 1; j >= 0; j--) {
        const b = bursts[j];
        b.x += b.vx;
        b.y += b.vy;
        b.vy += 0.04;
        b.alpha -= b.decay;

        if (b.alpha <= 0) {
          bursts.splice(j, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = b.alpha;
        ctx.fillStyle = b.color;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resize);
    initParticles();
    requestAnimationFrame(animate);

    return {
      triggerBurst: triggerBurst,
      setFinaleMode: setFinaleMode
    };
  })();

  let toastTimeout = null;
  function showToast(message, duration = 2200) {
    const toastEl = document.getElementById('toast-notification');
    const msgEl = document.getElementById('toast-message');
    if (!toastEl || !msgEl) return;

    msgEl.textContent = message;
    toastEl.classList.add('show');

    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(function () {
      toastEl.classList.remove('show');
    }, duration);
  }

  const screenOrder = [
    'screen-welcome',
    'screen-flowers',
    'screen-gift',
    'screen-letter',
    'screen-finale'
  ];

  function navigateToScreen(targetId) {
    if (!screenOrder.includes(targetId)) return;

    const allScreens = document.querySelectorAll('.screen');
    allScreens.forEach(function (sec) {
      if (sec.id === targetId) {
        sec.hidden = false;
        void sec.offsetWidth;
        sec.classList.add('active');
      } else {
        sec.classList.remove('active');
        sec.hidden = true;
      }
    });

    state.currentScreen = targetId;

    const stepIndex = screenOrder.indexOf(targetId) + 1;
    document.querySelectorAll('.step-dot').forEach(function (dot) {
      const dotStep = Number(dot.getAttribute('data-step'));
      dot.classList.toggle('active', dotStep === stepIndex);
    });

    const isFinale = targetId === 'screen-finale';
    document.body.classList.toggle('is-finale-mode', isFinale);
    ambientEffects.setFinaleMode(isFinale);

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function initFlowerShop() {
    const gridEl = document.getElementById('flower-grid');
    const showcaseEl = document.getElementById('flower-showcase');
    const svgContainer = document.getElementById('showcase-svg-container');
    const nameEl = document.getElementById('showcase-name');
    const wishEl = document.getElementById('showcase-wish');
    const btnReselect = document.getElementById('btn-reselect-flower');
    const btnConfirm = document.getElementById('btn-confirm-flower');

    if (!gridEl) return;

    gridEl.innerHTML = GIFT_CONFIG.flowers.map(function (flower) {
      return `
        <div class="flower-option-card" role="option" tabindex="0" data-flower-id="${flower.id}" aria-label="Chọn ${flower.name}">
          <div class="flower-svg-thumb">${flower.svg}</div>
          <h3 class="flower-card-title">${flower.name}</h3>
          <p class="flower-card-meaning">${flower.shortMeaning}</p>
          <span class="flower-select-hint">Click flowers</span>
        </div>
      `;
    }).join('');

    function selectFlowerById(flowerId) {
      const found = GIFT_CONFIG.flowers.find(function (f) { return f.id === flowerId; });
      if (!found) return;

      state.selectedFlower = found;
      svgContainer.innerHTML = found.svg;
      nameEl.textContent = found.name;
      wishEl.textContent = found.wish;

      const finaleFlowerEl = document.getElementById('finale-flower-name');
      if (finaleFlowerEl) finaleFlowerEl.textContent = found.name;

      gridEl.classList.add('hidden');
      showcaseEl.classList.remove('hidden');

      audioController.playChimeEffect();
      ambientEffects.triggerBurst(window.innerWidth / 2, window.innerHeight * 0.42, false);
    }

    gridEl.addEventListener('click', function (e) {
      const card = e.target.closest('.flower-option-card');
      if (card) selectFlowerById(card.getAttribute('data-flower-id'));
    });

    gridEl.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        const card = e.target.closest('.flower-option-card');
        if (card) {
          e.preventDefault();
          selectFlowerById(card.getAttribute('data-flower-id'));
        }
      }
    });

    btnReselect.addEventListener('click', function () {
      showcaseEl.classList.add('hidden');
      gridEl.classList.remove('hidden');
    });

    btnConfirm.addEventListener('click', function () {
      audioController.playChimeEffect();
      showToast('Bó hoa này dành cho mommy nè! 💐', 2000);
      setTimeout(function () {
        navigateToScreen('screen-gift');
      }, 1050);
    });
  }

  function initMysteryGift() {
    const boxWrapper = document.getElementById('gift-box-wrapper');
    const cardReveal = document.getElementById('gift-card-reveal');
    const initialActions = document.getElementById('gift-initial-actions');
    const openedActions = document.getElementById('gift-opened-actions');
    const btnOpen = document.getElementById('btn-open-gift');
    const btnReopen = document.getElementById('btn-reopen-gift');
    const btnExplore = document.getElementById('btn-explore-gift');
    const instructionEl = document.getElementById('gift-instruction');

    let isAnimatingGift = false;

    function pickRandomGift() {
      const list = GIFT_CONFIG.mysteryGifts;
      if (list.length <= 1) return list[0];
      let nextIdx = Math.floor(Math.random() * list.length);
      while (nextIdx === state.lastGiftIndex) {
        nextIdx = Math.floor(Math.random() * list.length);
      }
      state.lastGiftIndex = nextIdx;
      return list[nextIdx];
    }

    function renderMysteryCard(gift) {
      const pillsHtml = gift.pills.map(function (p) {
        return `<span class="mystery-pill">${p}</span>`;
      }).join('');

      cardReveal.innerHTML = `
        <div class="mystery-item-card ${gift.styleClass}">
          <div class="mystery-badge-icon">${gift.iconSvg}</div>
          <h3 class="mystery-card-heading">${gift.heading}</h3>
          <p class="mystery-card-quote">${gift.quote}</p>
          <div class="mystery-extra-pills">${pillsHtml}</div>
        </div>
      `;
    }

    function openGiftSequence() {
      if (isAnimatingGift) return;
      isAnimatingGift = true;

      cardReveal.classList.add('hidden');
      boxWrapper.classList.remove('hidden', 'opened');
      boxWrapper.classList.add('shaking');

      setTimeout(function () {
        boxWrapper.classList.remove('shaking');
        boxWrapper.classList.add('opened');
        audioController.playChimeEffect();
        ambientEffects.triggerBurst(window.innerWidth / 2, window.innerHeight * 0.45, false);
      }, 550);

      setTimeout(function () {
        const chosenGift = pickRandomGift();
        renderMysteryCard(chosenGift);

        boxWrapper.classList.add('hidden');
        cardReveal.classList.remove('hidden');
        initialActions.classList.add('hidden');
        openedActions.classList.remove('hidden');
        instructionEl.textContent = 'Quà của mommy nè:';
        isAnimatingGift = false;
      }, 1150);
    }

    btnOpen.addEventListener('click', openGiftSequence);
    btnReopen.addEventListener('click', openGiftSequence);

    boxWrapper.addEventListener('click', openGiftSequence);
    boxWrapper.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openGiftSequence();
      }
    });

    btnExplore.addEventListener('click', function () {
      navigateToScreen('screen-letter');
    });
  }

  function initSecretLetter() {
    const envelopeStage = document.getElementById('envelope-stage');
    const envelopeWrapper = document.getElementById('envelope-interactive');
    const letterPaper = document.getElementById('letter-paper');
    const salutationEl = document.getElementById('letter-salutation');
    const bodyContentEl = document.getElementById('letter-body-content');
    const signatureEl = document.getElementById('letter-signature');
    const letterActions = document.getElementById('letter-actions');
    const subtitleEl = document.getElementById('letter-subtitle');
    const btnReplay = document.getElementById('btn-replay-letter');
    const btnToFinale = document.getElementById('btn-to-finale');

    function clearLetterTimers() {
      state.letterTimers.forEach(function (t) { clearTimeout(t); });
      state.letterTimers = [];
    }

    function playLetterReveal() {
      clearLetterTimers();

      const recipient = GIFT_CONFIG.recipientName.trim();
      salutationEl.textContent = recipient ? `Gửi ${recipient},` : 'Gửi Mommy,';
      signatureEl.textContent = GIFT_CONFIG.letterSignature;

      bodyContentEl.innerHTML = GIFT_CONFIG.letterParagraphs.map(function (text) {
        return `<p>${text}</p>`;
      }).join('');

      const paragraphs = bodyContentEl.querySelectorAll('p');
      paragraphs.forEach(function (p, index) {
        const timer = setTimeout(function () {
          p.classList.add('visible');
        }, 280 + index * 550);
        state.letterTimers.push(timer);
      });
    }

    function handleOpenEnvelope() {
      if (envelopeWrapper.classList.contains('opening')) return;
      envelopeWrapper.classList.add('opening');
      audioController.playChimeEffect();

      setTimeout(function () {
        envelopeStage.classList.add('hidden');
        letterPaper.classList.remove('hidden');
        letterActions.classList.remove('hidden');
        subtitleEl.textContent = 'Mommy đọc nha, con viết riêng cho mommy đó.';
        playLetterReveal();
      }, 650);
    }

    envelopeWrapper.addEventListener('click', handleOpenEnvelope);
    envelopeWrapper.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleOpenEnvelope();
      }
    });

    btnReplay.addEventListener('click', function () {
      playLetterReveal();
    });

    btnToFinale.addEventListener('click', function () {
      audioController.playChimeEffect();
      navigateToScreen('screen-finale');
    });
  }

  function initApp() {
    const welcomeGreetingEl = document.getElementById('welcome-greeting');
    const name = GIFT_CONFIG.recipientName.trim();
    if (welcomeGreetingEl) {
      welcomeGreetingEl.textContent = GIFT_CONFIG.welcomeGreeting;
    }

    const finaleWishesBox = document.getElementById('finale-wishes-box');
    if (finaleWishesBox) {
      finaleWishesBox.innerHTML = GIFT_CONFIG.finaleWishes.map(function (line) {
        return `<p>${line}</p>`;
      }).join('');
    }

    const btnOpenWelcome = document.getElementById('btn-open-welcome');
    const welcomePortal = document.getElementById('welcome-portal');

    if (btnOpenWelcome) {
      btnOpenWelcome.addEventListener('click', function () {
        if (!state.isAudioPlaying) {
          audioController.toggle(true);
        }
        if (welcomePortal) {
          welcomePortal.classList.add('opening');
        }
        ambientEffects.triggerBurst(window.innerWidth / 2, window.innerHeight * 0.45, false);

        setTimeout(function () {
          navigateToScreen('screen-flowers');
          if (welcomePortal) welcomePortal.classList.remove('opening');
        }, 800);
      });
    }

    document.querySelectorAll('[data-nav-target]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const target = btn.getAttribute('data-nav-target');
        navigateToScreen(target);
      });
    });

    const btnAudioHeader = document.getElementById('btn-audio-toggle');
    const btnAudioFinale = document.getElementById('btn-finale-audio');
    const btnReviewGift = document.getElementById('btn-review-gift');
    const btnRereadLetter = document.getElementById('btn-reread-letter');

    if (btnAudioHeader) {
      btnAudioHeader.addEventListener('click', function () {
        audioController.toggle();
      });
    }

    if (btnAudioFinale) {
      btnAudioFinale.addEventListener('click', function () {
        audioController.toggle();
      });
    }

    if (btnReviewGift) {
      btnReviewGift.addEventListener('click', function () {
        navigateToScreen('screen-flowers');
      });
    }

    if (btnRereadLetter) {
      btnRereadLetter.addEventListener('click', function () {
        navigateToScreen('screen-letter');
      });
    }

    initFlowerShop();
    initMysteryGift();
    initSecretLetter();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();