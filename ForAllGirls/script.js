/**
 * ============================================================================
 * A LITTLE GIFT FOR YOU — 20/10 EDITION
 * Kiến trúc mô-đun, không biến toàn cục dư thừa, dễ dàng cá nhân hóa.
 * ============================================================================
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. CẤU HÌNH CÁ NHÂN HÓA (CHỈNH SỬA TÊN, LỜI CHÚC & NHẠC TẠI ĐÂY)
     ========================================================================== */
  const GIFT_CONFIG = {
    // Điền tên người nhận vào đây (Ví dụ: "Lan Anh"). Để chuỗi rỗng "" nếu muốn gọi "bạn".
    recipientName: '',

    // Lời chào ở màn hình 1
    welcomeGreeting: 'Chào bạn, hôm nay là ngày đặc biệt dành cho những điều xinh đẹp.',

    // Đường dẫn nhạc MP3 bên ngoài (nếu có). Nếu không có file, hệ thống tự động chơi nhạc Piano Web Audio API.
    externalAudioPath: 'assets/music.mp3',

    // Dữ liệu 3 bó hoa trong Flower Shop (kèm minh họa SVG riêng biệt)
    flowers: [
      {
        id: 'tulip',
        name: 'Hoa Tulip Hồng',
        shortMeaning: 'Dịu dàng & Ấm áp',
        wish: '“Mong bạn luôn dịu dàng với chính mình và luôn được yêu thương theo cách bạn xứng đáng.”',
        svg: `
          <svg viewBox="0 0 180 210" width="100%" height="100%">
            <!-- Giấy gói Kraft Hồng Kem -->
            <path d="M35 95 L90 190 L145 95 L125 75 L55 75 Z" fill="#f7dde2" stroke="#e4b6c0" stroke-width="2"/>
            <path d="M48 100 L90 185 L132 100 Z" fill="#fff5f7"/>
            <!-- Cành và lá -->
            <path d="M90 85 L90 155 M72 95 L88 150 M108 95 L92 150" stroke="#5e8c6a" stroke-width="3.5" stroke-linecap="round"/>
            <path d="M65 125 Q55 95 75 90 Q72 115 85 135" fill="#76a382"/>
            <path d="M115 125 Q125 95 105 90 Q108 115 95 135" fill="#76a382"/>
            <!-- 3 Bông Tulip Hồng -->
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
            <!-- Nơ ruy băng vàng Champagne -->
            <path d="M74 152 Q90 144 106 152" stroke="#d4a359" stroke-width="5" fill="none" stroke-linecap="round"/>
            <path d="M86 152 L76 175 M94 152 L104 175" stroke="#d4a359" stroke-width="3.5" stroke-linecap="round"/>
            <circle cx="90" cy="152" r="5" fill="#c28e3e"/>
          </svg>
        `
      },
      {
        id: 'rose',
        name: 'Hoa Hồng Kiêu Hãnh',
        shortMeaning: 'Tự tin & Tỏa sáng',
        wish: '“Chúc bạn luôn tự tin, xinh đẹp và tỏa sáng theo cách riêng của mình.”',
        svg: `
          <svg viewBox="0 0 180 210" width="100%" height="100%">
            <!-- Giấy gói Kem Champagne -->
            <path d="M32 92 L90 192 L148 92 L128 70 L52 70 Z" fill="#f9ece4" stroke="#dfc3b4" stroke-width="2"/>
            <path d="M46 98 L90 184 L134 98 Z" fill="#fffaf6"/>
            <!-- Lá hồng -->
            <ellipse cx="62" cy="92" rx="14" ry="8" transform="rotate(-30 62 92)" fill="#4f7d5c"/>
            <ellipse cx="118" cy="92" rx="14" ry="8" transform="rotate(30 118 92)" fill="#4f7d5c"/>
            <path d="M90 88 L90 155" stroke="#4f7d5c" stroke-width="4"/>
            <!-- Bông Hồng Trung Tâm & 2 Bông Phụ -->
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
            <!-- Nơ ruy băng đỏ Rose -->
            <path d="M72 150 C62 140, 62 162, 88 152 C114 162, 114 140, 104 150" fill="#c94257"/>
            <circle cx="90" cy="151" r="5.5" fill="#9e2a3b"/>
          </svg>
        `
      },
      {
        id: 'sunflower',
        name: 'Hoa Hướng Dương',
        shortMeaning: 'Rạng rỡ & Hy vọng',
        wish: '“Mong mỗi ngày của bạn đều có một lý do để mỉm cười và một điều tốt đẹp để chờ đợi.”',
        svg: `
          <svg viewBox="0 0 180 210" width="100%" height="100%">
            <!-- Giấy gói vàng kem ấm -->
            <path d="M35 94 L90 192 L145 94 L125 74 L55 74 Z" fill="#faeed7" stroke="#e2c99e" stroke-width="2"/>
            <path d="M48 100 L90 184 L132 100 Z" fill="#fffdf7"/>
            <!-- Cành & Lá -->
            <path d="M90 82 L90 155" stroke="#58855c" stroke-width="4.5"/>
            <path d="M62 105 Q45 88 68 82 Q76 96 86 115 Z" fill="#6b9c6f"/>
            <path d="M118 105 Q135 88 112 82 Q104 96 94 115 Z" fill="#6b9c6f"/>
            <!-- Hoa Hướng Dương Lớn -->
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
            <!-- Nơ ruy băng -->
            <path d="M73 152 Q90 144 107 152" stroke="#d86c7c" stroke-width="5" fill="none" stroke-linecap="round"/>
            <circle cx="90" cy="152" r="5" fill="#b84a5b"/>
          </svg>
        `
      }
    ],

    // 4 Loại quà kỹ thuật số trong Mystery Gift (Mỗi loại có giao diện & cấu trúc riêng)
    mysteryGifts: [
      {
        id: 'compliment-set',
        styleClass: 'mystery-style-compliment',
        heading: 'Bông Hoa Kiêu Hãnh',
        quote: '“Thế giới này đẹp hơn rất nhiều vì có sự hiện diện của bạn đấy.”',
        pills: [],
        iconSvg: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#d86c7c" stroke-width="1.8"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6z"/></svg>`
      },
      {
        id: 'positive-note',
        styleClass: 'mystery-style-positive',
        heading: 'Hạnh Phúc Ngày Mới',
        quote: '“Mong bạn luôn gặp những người trân trọng sự hiện diện của mình.”',
        pills: [],
        iconSvg: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#d4a359" stroke-width="1.8"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`
      },
      {
        id: 'mini-card',
        styleClass: 'mystery-style-minicard',
        heading: 'Bưu Thiếp Mùa Thu 20/10',
        quote: '“Chúc bạn có thật nhiều ngày vui hơn những ngày buồn.”',
        pills: [],
        iconSvg: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#b84a5b" stroke-width="1.8"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`
      },
      {
        id: 'self-care',
        styleClass: 'mystery-style-selfcare',
        heading: 'Đặc Quyền Lười Biếng',
        quote: '“Hôm nay là ngày của bạn, hãy dành cho bản thân một chút thời gian nghỉ ngơi.”',
        pills: [],
        iconSvg: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#9b59b6" stroke-width="1.8"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`
      }
    ],

    // Nội dung bức thư ở Màn hình 4 (Tách theo từng đoạn để chạy hiệu ứng xuất hiện dần)
    letterParagraphs: [
      'Nhân ngày 20/10, chúc bạn luôn vui vẻ, tự tin và gặp thật nhiều điều tốt đẹp.',
      'Mong bạn luôn được là chính mình, được làm những điều mình yêu thích và được ở bên những người khiến bạn cảm thấy thoải mái.',
      'Nếu có những ngày mệt mỏi, mong bạn nhớ rằng mình vẫn luôn có giá trị, ngay cả khi chưa làm được mọi thứ như mong đợi.',
      'Cảm ơn bạn vì đã là một phần đáng yêu của tập thể này.',
      'Chúc bạn có một ngày 20/10 thật vui, nhận được nhiều yêu thương và luôn tìm thấy những điều xinh đẹp trong cuộc sống.'
    ],
    letterSignature: "Happy Vietnamese Women's Day! 💗",

    // Lời chúc cuối ở Màn hình 5 (Finale)
    finaleWishes: [
      'Chúc bạn luôn xinh đẹp theo cách của riêng mình, luôn được yêu thương, luôn có đủ dũng khí để theo đuổi điều mình muốn và luôn tìm thấy niềm vui trong những điều giản dị nhất.',
      'Mong rằng hôm nay và cả những ngày bình thường khác, bạn đều có lý do để mỉm cười.',
      'Một món quà nhỏ, gửi đến bạn bằng tất cả sự chân thành. 💗'
    ]
  };

  /* ==========================================================================
     2. TRẠNG THÁI ỨNG DỤNG (STATE)
     ========================================================================== */
  const state = {
    currentScreen: 'screen-welcome',
    selectedFlower: GIFT_CONFIG.flowers[0],
    lastGiftIndex: -1,
    letterTimers: [],
    isAudioPlaying: false
  };

  /* ==========================================================================
     3. HÀM ĐIỀU KHIỂN NHẠC NỀN (WEB AUDIO API PIANO + FALLBACK MP3)
     ========================================================================== */
  const audioController = (function () {
    let audioCtx = null;
    let melodyTimer = null;
    let externalAudio = null;
    let useExternalMp3 = false;

    // Giai điệu Music Box nhẹ nhàng (Tần số Hz các nốt nhạc)
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
        // Không có file mp3 ngoài -> dùng Web Audio Piano nội tuyến hoàn toàn bình thường
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

    // Âm thanh lấp lánh nhẹ khi mở quà/chọn hoa
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

  /* ==========================================================================
     4. HÀM KHỞI TẠO HIỆU ỨNG CANVAS (CÁNH HOA, TIM, CONFETTI, PHÁO HOA)
     ========================================================================== */
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

    // Hiệu ứng tung Confetti hoặc Pháo hoa nhẹ
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
        // Bắn pháo hoa nhẹ nhàng định kỳ ở màn hình Finale
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

      // Vẽ cánh hoa / trái tim bay
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

      // Vẽ hạt confetti / pháo hoa
      for (let j = bursts.length - 1; j >= 0; j--) {
        const b = bursts[j];
        b.x += b.vx;
        b.y += b.vy;
        b.vy += 0.04; // Trọng lực nhẹ
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

  /* ==========================================================================
     5. TIỆN ÍCH HIỂN THỊ TOAST THÔNG BÁO (THAY THẾ ALERT)
     ========================================================================== */
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

  /* ==========================================================================
     6. HÀM ĐIỀU HƯỚNG MÀN HÌNH (NAVIGATION)
     ========================================================================== */
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
        // Kích hoạt reflow để transition mượt
        void sec.offsetWidth;
        sec.classList.add('active');
      } else {
        sec.classList.remove('active');
        sec.hidden = true;
      }
    });

    state.currentScreen = targetId;

    // Cập nhật thanh tiến trình (Step Dots)
    const stepIndex = screenOrder.indexOf(targetId) + 1;
    document.querySelectorAll('.step-dot').forEach(function (dot) {
      const dotStep = Number(dot.getAttribute('data-step'));
      dot.classList.toggle('active', dotStep === stepIndex);
    });

    // Bật giao diện đêm lung linh khi tới màn hình Finale
    const isFinale = targetId === 'screen-finale';
    document.body.classList.toggle('is-finale-mode', isFinale);
    ambientEffects.setFinaleMode(isFinale);

    // Cuộn nhẹ lên đầu khung nhìn trên điện thoại
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ==========================================================================
     7. MÀN HÌNH 2: CHỌN VÀ HIỂN THỊ BÓ HOA (FLOWER SHOP)
     ========================================================================== */
  function initFlowerShop() {
    const gridEl = document.getElementById('flower-grid');
    const showcaseEl = document.getElementById('flower-showcase');
    const svgContainer = document.getElementById('showcase-svg-container');
    const nameEl = document.getElementById('showcase-name');
    const wishEl = document.getElementById('showcase-wish');
    const btnReselect = document.getElementById('btn-reselect-flower');
    const btnConfirm = document.getElementById('btn-confirm-flower');

    if (!gridEl) return;

    // Render 3 lựa chọn bó hoa
    gridEl.innerHTML = GIFT_CONFIG.flowers.map(function (flower) {
      return `
        <div class="flower-option-card" role="option" tabindex="0" data-flower-id="${flower.id}" aria-label="Chọn ${flower.name}">
          <div class="flower-svg-thumb">${flower.svg}</div>
          <h3 class="flower-card-title">${flower.name}</h3>
          <p class="flower-card-Meaning">${flower.shortMeaning}</p>
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

      // Cập nhật tên hoa ở màn hình Finale
      const finaleFlowerEl = document.getElementById('finale-flower-name');
      if (finaleFlowerEl) finaleFlowerEl.textContent = found.name;

      gridEl.classList.add('hidden');
      showcaseEl.classList.remove('hidden');

      audioController.playChimeEffect();
      ambientEffects.triggerBurst(window.innerWidth / 2, window.innerHeight * 0.42, false);
    }

    // Lắng nghe sự kiện click và bàn phím (Enter/Space) cho từng bó hoa
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

    // Nút chọn lại bó hoa khác
    btnReselect.addEventListener('click', function () {
      showcaseEl.classList.add('hidden');
      gridEl.classList.remove('hidden');
    });

    // Nút xác nhận nhận bó hoa này
    btnConfirm.addEventListener('click', function () {
      audioController.playChimeEffect();
      showToast('Bó hoa này là dành cho bạn! 💐', 2000);
      setTimeout(function () {
        navigateToScreen('screen-gift');
      }, 1050);
    });
  }

  /* ==========================================================================
     8. MÀN HÌNH 3: MỞ HỘP QUÀ BÍ MẬT (MYSTERY GIFT)
     ========================================================================== */
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
      // Đảm bảo không lặp lại ngay món quà vừa nhận
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

      // Reset trạng thái trước khi mở
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
        instructionEl.textContent = 'Một món quà nhỏ mang năng lượng tích cực gửi tới bạn:';
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

  /* ==========================================================================
     9. MÀN HÌNH 4: HIỂN THỊ BỨC THƯ BÍ MẬT (SECRET LETTER)
     ========================================================================== */
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

      // Thiết lập lời chào đầu thư theo tên người nhận (nếu có)
      const recipient = GIFT_CONFIG.recipientName.trim();
      salutationEl.textContent = recipient ? `Gửi ${recipient},` : 'Gửi bạn,';
      signatureEl.textContent = GIFT_CONFIG.letterSignature;

      // Tạo các thẻ đoạn văn
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
        subtitleEl.textContent = 'Cảm ơn bạn đã dành thời gian đọc những dòng chữ này.';
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

  /* ==========================================================================
     10. KHỞI TẠO MÀN HÌNH WELCOME, FINALE & SỰ KIỆN CHUNG
     ========================================================================== */
  function initApp() {
    // 1. Cá nhân hóa lời chào ở màn hình 1
    const welcomeGreetingEl = document.getElementById('welcome-greeting');
    const name = GIFT_CONFIG.recipientName.trim();
    if (welcomeGreetingEl) {
      welcomeGreetingEl.textContent = name
        ? `Chào ${name}, hôm nay là ngày đặc biệt dành cho những điều xinh đẹp.`
        : GIFT_CONFIG.welcomeGreeting;
    }

    // 2. Nạp lời chúc kết ở màn hình 5 (Finale)
    const finaleWishesBox = document.getElementById('finale-wishes-box');
    if (finaleWishesBox) {
      finaleWishesBox.innerHTML = GIFT_CONFIG.finaleWishes.map(function (line) {
        return `<p>${line}</p>`;
      }).join('');
    }

    // 3. Sự kiện mở cánh cửa ở màn hình 1 (Welcome)
    const btnOpenWelcome = document.getElementById('btn-open-welcome');
    const welcomePortal = document.getElementById('welcome-portal');

    if (btnOpenWelcome) {
      btnOpenWelcome.addEventListener('click', function () {
        // Bật nhạc sau thao tác rõ ràng đầu tiên của người dùng
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

    // 4. Sự kiện các nút Quay lại (data-nav-target)
    document.querySelectorAll('[data-nav-target]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const target = btn.getAttribute('data-nav-target');
        navigateToScreen(target);
      });
    });

    // 5. Sự kiện các nút ở màn hình Finale & Header Audio
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

    // Khởi tạo các phân hệ tương tác
    initFlowerShop();
    initMysteryGift();
    initSecretLetter();
  }

  // Khởi chạy khi DOM đã sẵn sàng
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();