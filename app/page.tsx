"use client";

import { useEffect, useRef, useState, useCallback } from "react";

// ─── i18n ────────────────────────────────────────────────────────────────────
const i18n = {
  kk: {
    brandTitle: "Виртуалды зертхана",
    brandSubtitle: "Гармоникалық тербелістердің теңдеулері мен графиктері",
    heroTitle: "Гармоникалық тербелістерді интерактивті түрде зерттеу",
    heroText: "Амплитуда, период және бастапқы фазаны енгізіп, координата, жылдамдық және үдеу графиктерін бірден бақылаңыз.",
    pill1: "Интерактивті басқару", pill2: "x / v / a графиктері", pill3: "Қазақша / Орысша",
    formulaLabel: "Ағымдағы тербеліс теңдеуі",
    controlTitle: "Параметрлерді енгізу",
    controlSub: "Мәндерді қолмен теріңіз",
    funcLabel: "Функция", ampLabel: "Амплитуда A (м)", periodLabel: "Период T (с)",
    phaseLabel: "Бастапқы фаза φ (рад)", timeLabel: "Уақыт аралығы (с)", speedLabel: "Анимация жылд.",
    applyBtn: "Қолдану", playStop: ["Тоқтату", "Жалғастыру"] as [string, string], resetBtn: "Қалпына келтіру",
    stat1Label: "Жиілік", stat2Label: "Бұрыштық жиілік", stat3Label: "Макс. жылдамдық", stat4Label: "Макс. үдеу",
    animTitle: "Қозғалыс анимациясы", animSub: "Нүктенің тербелісін нақты уақытта бақылау",
    graphX: "x(t) — Координата", graphV: "v(t) — Жылдамдық", graphA: "a(t) — Үдеу",
    theoryTitle: "Қысқаша теория", tasksTitle: "Зертханалық тапсырмалар",
    theoryList: [
      "Координата: x(t) = A·sin(ωt + φ)",
      "Жылдамдық: v(t) = Aω·cos(ωt + φ)",
      "Үдеу: a(t) = −Aω²·sin(ωt + φ)",
      "Жиілік: f = 1/T,  бұрыштық жиілік: ω = 2π/T",
      "Максимал жылдамдық: vmax = Aω,  үдеу: amax = Aω²",
    ],
    tasks: [
      "1) A=3 м, T=2 с енгізіп, vmax мен amax мәндерін тап.",
      "2) Периодты азайтқанда бұрыштық жиілік қалай өзгереді?",
      "3) φ=1.57 енгізіп, cos пен sin графиктерінің айырмашылығын түсіндір.",
    ],
    footerText: "Виртуалды зертхана — физика сабағына арналған интерактивті құрал.",
    unitSec: "с", live: "t = {t} с   x = {x} м   v = {v} м/с",
    axisT: "t, с", axisX: "x, м", axisV: "v, м/с", axisAcc: "a, м/с²",
    eqX: "x(t) =", eqV: "v(t) =", eqA: "a(t) =",
    displayMode: "Көрсету режимі", modeAll: "Барлығы", modeX: "x(t)", modeV: "v(t)", modeA: "a(t)",
    validErr: "Қате мән! A > 0, T > 0 болуы керек.",
  },
  ru: {
    brandTitle: "Виртуальная лаборатория",
    brandSubtitle: "Уравнения и графики гармонических колебаний",
    heroTitle: "Интерактивное исследование гармонических колебаний",
    heroText: "Введите амплитуду, период и начальную фазу — наблюдайте графики координаты, скорости и ускорения в реальном времени.",
    pill1: "Ручной ввод", pill2: "x / v / a графики", pill3: "Казахский / Русский",
    formulaLabel: "Текущее уравнение колебания",
    controlTitle: "Ввод параметров",
    controlSub: "Введите значения вручную",
    funcLabel: "Функция", ampLabel: "Амплитуда A (м)", periodLabel: "Период T (с)",
    phaseLabel: "Начальная фаза φ (рад)", timeLabel: "Интервал времени (с)", speedLabel: "Скорость анимации",
    applyBtn: "Применить", playStop: ["Пауза", "Продолжить"] as [string, string], resetBtn: "Сбросить",
    stat1Label: "Частота", stat2Label: "Цикл. частота", stat3Label: "Макс. скорость", stat4Label: "Макс. ускорение",
    animTitle: "Анимация движения", animSub: "Наблюдение за колебанием точки в реальном времени",
    graphX: "x(t) — Координата", graphV: "v(t) — Скорость", graphA: "a(t) — Ускорение",
    theoryTitle: "Краткая теория", tasksTitle: "Лабораторные задания",
    theoryList: [
      "Координата: x(t) = A·sin(ωt + φ)",
      "Скорость: v(t) = Aω·cos(ωt + φ)",
      "Ускорение: a(t) = −Aω²·sin(ωt + φ)",
      "Частота: f = 1/T,  циклическая частота: ω = 2π/T",
      "Макс. скорость: vmax = Aω,  ускорение: amax = Aω²",
    ],
    tasks: [
      "1) Введите A=3 м, T=2 с и найдите vmax и amax.",
      "2) Как меняется циклическая частота при уменьшении периода?",
      "3) Введите φ=1.57 и объясните разницу между графиками sin и cos.",
    ],
    footerText: "Виртуальная лаборатория — интерактивный инструмент для урока физики.",
    unitSec: "с", live: "t = {t} с   x = {x} м   v = {v} м/с",
    axisT: "t, с", axisX: "x, м", axisV: "v, м/с", axisAcc: "a, м/с²",
    eqX: "x(t) =", eqV: "v(t) =", eqA: "a(t) =",
    displayMode: "Режим отображения", modeAll: "Все", modeX: "x(t)", modeV: "v(t)", modeA: "a(t)",
    validErr: "Ошибка! A > 0, T > 0 обязательны.",
  },
};

type Lang = "kk" | "ru";
type Mode = "all" | "x" | "v" | "a";

const fmt = (n: number) => Number(n).toFixed(2);

function calcX(t: number, A: number, omega: number, phi: number, fn: string) {
  return fn === "sin" ? A * Math.sin(omega * t + phi) : A * Math.cos(omega * t + phi);
}
function calcV(t: number, A: number, omega: number, phi: number, fn: string) {
  return fn === "sin" ? A * omega * Math.cos(omega * t + phi) : -A * omega * Math.sin(omega * t + phi);
}
function calcAcc(t: number, A: number, omega: number, phi: number, fn: string) {
  return fn === "sin" ? -A * omega * omega * Math.sin(omega * t + phi) : -A * omega * omega * Math.cos(omega * t + phi);
}

function drawWave(
  canvas: HTMLCanvasElement,
  valueFn: (t: number) => number,
  amplitude: number,
  timeMax: number,
  color: string,
  axisLabel: string,
  axisT: string
) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const w = canvas.width, h = canvas.height;
  ctx.clearRect(0, 0, w, h);

  // BG
  const bg = ctx.createLinearGradient(0, 0, 0, h);
  bg.addColorStop(0, "#050d1c");
  bg.addColorStop(1, "#080f20");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, w, h);

  const m = 56, cy = h / 2;
  const maxAbs = Math.max(Math.abs(amplitude), 0.001);
  const sx = (w - 2 * m) / timeMax;
  const sy = (h / 2 - 32) / maxAbs;

  // Grid dots
  ctx.fillStyle = "rgba(0,229,255,0.07)";
  for (let i = 0; i <= 14; i++) for (let j = 0; j <= 8; j++) {
    const gx = m + (i / 14) * (w - 2 * m);
    const gy = 16 + (j / 8) * (h - 32);
    ctx.beginPath(); ctx.arc(gx, gy, 1.5, 0, Math.PI * 2); ctx.fill();
  }

  // Grid lines
  ctx.strokeStyle = "rgba(0,229,255,0.06)";
  ctx.lineWidth = 1;
  for (let i = 0; i <= 10; i++) {
    const x = m + (i / 10) * (w - 2 * m);
    ctx.beginPath(); ctx.moveTo(x, 16); ctx.lineTo(x, h - 16); ctx.stroke();
  }
  for (let j = 0; j <= 6; j++) {
    const y = 16 + (j / 6) * (h - 32);
    ctx.beginPath(); ctx.moveTo(m, y); ctx.lineTo(w - m, y); ctx.stroke();
  }

  // Axes
  ctx.strokeStyle = "rgba(0,229,255,0.25)";
  ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.moveTo(m, cy); ctx.lineTo(w - m, cy); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(m, 14); ctx.lineTo(m, h - 14); ctx.stroke();

  // Labels
  ctx.fillStyle = "rgba(0,229,255,0.5)";
  ctx.font = "12px 'Courier New', monospace";
  ctx.fillText(axisLabel, 5, 20);
  ctx.fillText(axisT, w - 44, cy - 8);

  // Tick labels
  ctx.fillStyle = "rgba(0,229,255,0.35)";
  ctx.font = "10px 'Courier New', monospace";
  for (let i = 0; i <= 8; i++) {
    const x = m + (i / 8) * (w - 2 * m);
    ctx.fillText(fmt((i * timeMax) / 8), x - 10, cy + 16);
  }
  for (let j = -2; j <= 2; j++) {
    if (j === 0) continue;
    const yv = (j * maxAbs) / 2;
    const y = cy - yv * sy;
    ctx.fillText(fmt(yv), 3, y + 4);
  }

  // Glow curve shadow
  ctx.save();
  ctx.shadowColor = color;
  ctx.shadowBlur = 16;
  ctx.strokeStyle = color;
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  for (let px = 0; px <= w - 2 * m; px++) {
    const y = cy - valueFn(px / sx) * sy;
    px === 0 ? ctx.moveTo(m + px, y) : ctx.lineTo(m + px, y);
  }
  ctx.stroke();
  ctx.restore();

  // Bright core
  ctx.strokeStyle = "rgba(255,255,255,0.65)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  for (let px = 0; px <= w - 2 * m; px++) {
    const y = cy - valueFn(px / sx) * sy;
    px === 0 ? ctx.moveTo(m + px, y) : ctx.lineTo(m + px, y);
  }
  ctx.stroke();
}

export default function Home() {
  const [lang, setLangState] = useState<Lang>("kk");
  const [running, setRunning] = useState(true);
  const [rawA, setRawA] = useState("2");
  const [rawT, setRawT] = useState("4");
  const [rawPhi, setRawPhi] = useState("0");
  const [rawTime, setRawTime] = useState("12");
  const [rawSpeed, setRawSpeed] = useState("1");
  const [fn, setFn] = useState("sin");
  const [mode, setMode] = useState<Mode>("all");
  const [error, setError] = useState("");
  const [A, setA] = useState(2);
  const [T, setT] = useState(4);
  const [phi, setPhi] = useState(0);
  const [timeMax, setTimeMax] = useState(12);
  const [speed, setSpeed] = useState(1);
  const [liveReadout, setLiveReadout] = useState("");

  const animRef = useRef<HTMLCanvasElement>(null);
  const xRef = useRef<HTMLCanvasElement>(null);
  const vRef = useRef<HTMLCanvasElement>(null);
  const aRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  const omega = (2 * Math.PI) / T;
  const f = 1 / T;
  const vmax = A * omega;
  const amax = A * omega * omega;
  const tr = i18n[lang];

  const eqX = fn === "sin"
    ? `${fmt(A)}·sin(${fmt(omega)}t + ${fmt(phi)})`
    : `${fmt(A)}·cos(${fmt(omega)}t + ${fmt(phi)})`;
  const eqV = fn === "sin"
    ? `${fmt(vmax)}·cos(${fmt(omega)}t + ${fmt(phi)})`
    : `-${fmt(vmax)}·sin(${fmt(omega)}t + ${fmt(phi)})`;
  const eqAcc = fn === "sin"
    ? `-${fmt(amax)}·sin(${fmt(omega)}t + ${fmt(phi)})`
    : `-${fmt(amax)}·cos(${fmt(omega)}t + ${fmt(phi)})`;

  const applyParams = useCallback(() => {
    const nA = parseFloat(rawA), nT = parseFloat(rawT), nPhi = parseFloat(rawPhi);
    const nTime = parseFloat(rawTime), nSpd = parseFloat(rawSpeed);
    if (isNaN(nA) || nA <= 0 || isNaN(nT) || nT <= 0 || isNaN(nPhi) || isNaN(nTime) || nTime < 1 || isNaN(nSpd) || nSpd <= 0) {
      setError(tr.validErr); return;
    }
    setError(""); setA(nA); setT(nT); setPhi(nPhi); setTimeMax(nTime); setSpeed(nSpd);
    startRef.current = null;
  }, [rawA, rawT, rawPhi, rawTime, rawSpeed, tr.validErr]);

  const resetAll = () => {
    setRawA("2"); setRawT("4"); setRawPhi("0"); setRawTime("12"); setRawSpeed("1"); setFn("sin");
    setA(2); setT(4); setPhi(0); setTimeMax(12); setSpeed(1); setError(""); startRef.current = null;
  };

  const drawGraphs = useCallback(() => {
    const om = (2 * Math.PI) / T;
    const vm = A * om, am = A * om * om;
    if (xRef.current) drawWave(xRef.current, (t2) => calcX(t2, A, om, phi, fn), A, timeMax, "#00e5ff", tr.axisX, tr.axisT);
    if (vRef.current) drawWave(vRef.current, (t2) => calcV(t2, A, om, phi, fn), vm, timeMax, "#00ff8c", tr.axisV, tr.axisT);
    if (aRef.current) drawWave(aRef.current, (t2) => calcAcc(t2, A, om, phi, fn), am, timeMax, "#ff6b35", tr.axisAcc, tr.axisT);
  }, [A, T, phi, fn, timeMax, tr.axisX, tr.axisV, tr.axisAcc, tr.axisT]);
  useEffect(() => {
  drawGraphs();
}, [mode, drawGraphs]);

  const drawAnim = useCallback((ts: number) => {
    if (startRef.current === null) startRef.current = ts;
    const canvas = animRef.current; if (!canvas) return;
    const ctx = canvas.getContext("2d"); if (!ctx) return;
    const om = (2 * Math.PI) / T;
    const elapsed = ((ts - startRef.current) / 1000) * speed;
    const x = calcX(elapsed, A, om, phi, fn);
    const v = calcV(elapsed, A, om, phi, fn);
    const w = canvas.width, h = canvas.height, cy = h / 2, cx = w / 2;
    const scale = Math.min(80, (w - 160) / (2 * Math.max(A, 1)));

    ctx.clearRect(0, 0, w, h);
    const bg = ctx.createLinearGradient(0, 0, 0, h);
    bg.addColorStop(0, "#050d1c"); bg.addColorStop(1, "#080f20");
    ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);

    // dots grid
    ctx.fillStyle = "rgba(0,229,255,0.05)";
    for (let i = 0; i <= 24; i++) for (let j = 0; j <= 4; j++) {
      ctx.beginPath(); ctx.arc((i / 24) * w, (j / 4) * h, 1.2, 0, Math.PI * 2); ctx.fill();
    }

    // track glow
    ctx.save();
    ctx.shadowColor = "#00e5ff"; ctx.shadowBlur = 24;
    ctx.strokeStyle = "rgba(0,229,255,0.35)"; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(60, cy); ctx.lineTo(w - 60, cy); ctx.stroke();
    ctx.restore();

    // ticks
    ctx.strokeStyle = "rgba(0,229,255,0.25)"; ctx.lineWidth = 1;
    for (let i = -6; i <= 6; i++) {
      const tx = cx + i * scale;
      ctx.beginPath(); ctx.moveTo(tx, cy - 7); ctx.lineTo(tx, cy + 7); ctx.stroke();
    }
    ctx.strokeStyle = "rgba(0,229,255,0.15)";
    ctx.beginPath(); ctx.moveTo(cx, cy - 36); ctx.lineTo(cx, cy + 36); ctx.stroke();

    // velocity arrow
    const vscale = (v / (A * om + 0.001)) * 44;
    ctx.save();
    ctx.strokeStyle = "#00ff8c"; ctx.lineWidth = 2; ctx.shadowColor = "#00ff8c"; ctx.shadowBlur = 10;
    const ballX = cx + x * scale;
    ctx.beginPath(); ctx.moveTo(ballX, cy - 30); ctx.lineTo(ballX + vscale, cy - 30); ctx.stroke();
    // arrowhead
    const dir = vscale > 0 ? 1 : -1;
    ctx.beginPath();
    ctx.moveTo(ballX + vscale, cy - 30);
    ctx.lineTo(ballX + vscale - dir * 7, cy - 35);
    ctx.lineTo(ballX + vscale - dir * 7, cy - 25);
    ctx.fillStyle = "#00ff8c"; ctx.fill();
    ctx.restore();

    // ball
    ctx.save();
    ctx.shadowColor = "#00e5ff"; ctx.shadowBlur = 36;
    const grad = ctx.createRadialGradient(ballX, cy, 3, ballX, cy, 20);
    grad.addColorStop(0, "#ffffff"); grad.addColorStop(0.35, "#00e5ff"); grad.addColorStop(1, "rgba(0,80,180,0.2)");
    ctx.fillStyle = grad;
    ctx.beginPath(); ctx.arc(ballX, cy, 19, 0, Math.PI * 2); ctx.fill();
    ctx.restore();

    const live = tr.live.replace("{t}", fmt(elapsed)).replace("{x}", fmt(x)).replace("{v}", fmt(v));
    setLiveReadout(live);
    if (running) rafRef.current = requestAnimationFrame(drawAnim);
  }, [A, T, phi, fn, speed, running, tr.live]);

  useEffect(() => {
    drawGraphs();
    startRef.current = null;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(drawAnim);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [drawGraphs, drawAnim]);

  const toggleAnim = () => {
    setRunning(prev => {
      const next = !prev;
      if (next) { startRef.current = null; requestAnimationFrame(drawAnim); }
      return next;
    });
  };

  const showX = mode === "all" || mode === "x";
  const showV = mode === "all" || mode === "v";
  const showA2 = mode === "all" || mode === "a";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;800&family=IBM+Plex+Mono:ital,wght@0,300;0,400;0,500;1,300&display=swap');
        :root {
          --bg:#040b18; --surface:rgba(6,16,40,0.88); --surface2:rgba(3,10,28,0.92);
          --text:#c8deff; --muted:#3d5a84;
          --cyan:#00e5ff; --green:#00ff8c; --orange:#ff6b35;
          --border:rgba(0,229,255,0.1); --bh:rgba(0,229,255,0.32);
          --glow:0 0 30px rgba(0,229,255,0.1); --shadow:0 24px 70px rgba(0,0,0,0.7);
        }
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        html,body{height:100%}
        body{font-family:'IBM Plex Mono','Courier New',monospace;background:var(--bg);color:var(--text);overflow-x:hidden}
        .bg-grid{position:fixed;inset:0;z-index:0;pointer-events:none;
          background-image:linear-gradient(rgba(0,229,255,0.025) 1px,transparent 1px),
          linear-gradient(90deg,rgba(0,229,255,0.025) 1px,transparent 1px);
          background-size:52px 52px}
        .bg-glow{position:fixed;inset:0;z-index:0;pointer-events:none;
          background:radial-gradient(ellipse 70% 55% at 15% 8%,rgba(0,40,120,0.3) 0%,transparent 65%),
          radial-gradient(ellipse 55% 70% at 88% 92%,rgba(0,80,60,0.15) 0%,transparent 65%)}
        .scan{position:fixed;left:0;right:0;height:3px;z-index:0;pointer-events:none;
          background:linear-gradient(90deg,transparent,rgba(0,229,255,0.07),transparent);
          animation:sc 9s linear infinite}
        @keyframes sc{from{top:-3px}to{top:100vh}}
        .page{position:relative;z-index:1;width:min(1440px,96%);margin:0 auto;padding:18px 0 40px}

        /* TOPBAR */
        .topbar{display:flex;justify-content:space-between;align-items:center;
          padding:13px 20px;border-radius:14px;margin-bottom:16px;
          background:var(--surface);border:1px solid var(--border);
          box-shadow:var(--glow),var(--shadow);position:sticky;top:10px;z-index:10;
          backdrop-filter:blur(24px)}
        .brand{display:flex;align-items:center;gap:13px}
        .logo{width:44px;height:44px;border-radius:11px;
          background:linear-gradient(135deg,var(--cyan),var(--green));
          display:grid;place-items:center;font-family:'Orbitron',monospace;
          font-weight:800;font-size:17px;color:#040b18;
          box-shadow:0 0 22px rgba(0,229,255,0.45)}
        .brand h1{font-family:'Orbitron',monospace;font-size:14px;font-weight:600;
          color:var(--cyan);letter-spacing:.06em}
        .brand small{font-size:10px;color:var(--muted);display:block;margin-top:2px}
        .top-actions{display:flex;gap:8px}

        /* BUTTONS */
        .btn{font-family:'IBM Plex Mono',monospace;font-size:11px;font-weight:500;
          padding:8px 14px;border-radius:9px;cursor:pointer;transition:all .18s;
          border:1px solid var(--border);background:var(--surface2);color:var(--text);
          letter-spacing:.06em;text-transform:uppercase}
        .btn:hover{border-color:var(--bh);box-shadow:var(--glow);transform:translateY(-1px)}
        .btn-cyan{background:linear-gradient(135deg,rgba(0,229,255,0.18),rgba(0,180,220,0.08));
          border-color:rgba(0,229,255,0.38);color:var(--cyan);box-shadow:0 0 14px rgba(0,229,255,0.08)}
        .btn-cyan:hover{box-shadow:0 0 28px rgba(0,229,255,0.28)}
        .lang-btn.active{background:rgba(0,229,255,0.12);border-color:rgba(0,229,255,0.45);
          color:var(--cyan);box-shadow:0 0 12px rgba(0,229,255,0.18)}

        /* HERO */
        .hero{display:grid;grid-template-columns:1.35fr .65fr;gap:16px;
          padding:26px;border-radius:18px;margin-bottom:16px;
          background:var(--surface);border:1px solid var(--border);
          box-shadow:var(--glow),var(--shadow);backdrop-filter:blur(24px)}
        .hero h2{font-family:'Orbitron',monospace;font-size:24px;font-weight:800;
          line-height:1.2;margin-bottom:10px;
          background:linear-gradient(135deg,var(--cyan),var(--green));
          -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
        .hero p{color:var(--muted);font-size:12px;line-height:1.9;margin-bottom:12px}
        .pills{display:flex;gap:7px;flex-wrap:wrap}
        .pill{padding:5px 12px;border-radius:999px;font-size:10px;
          border:1px solid var(--border);color:rgba(200,222,255,0.5);background:rgba(0,229,255,0.03)}
        .formula-box{padding:18px;border-radius:14px;
          background:linear-gradient(135deg,rgba(0,229,255,0.06),rgba(0,255,140,0.03));
          border:1px solid rgba(0,229,255,0.18);display:flex;flex-direction:column;gap:10px}
        .fl{font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.12em;margin-bottom:2px}
        .fr{display:flex;align-items:baseline;gap:8px}
        .fk{font-size:10px;color:var(--muted);min-width:50px}
        .fv{font-size:14px;font-weight:500;letter-spacing:.02em}
        .fv.cx{color:var(--cyan)}.fv.gn{color:var(--green)}.fv.or{color:var(--orange)}

        /* LAYOUT */
        .main-grid{display:grid;grid-template-columns:310px 1fr;gap:16px;margin-bottom:16px}

        /* CONTROL PANEL */
        .panel{background:var(--surface);border:1px solid var(--border);
          border-radius:18px;padding:20px;box-shadow:var(--glow),var(--shadow);
          backdrop-filter:blur(24px);display:flex;flex-direction:column}
        .panel-title{font-family:'Orbitron',monospace;font-size:12px;font-weight:600;
          color:var(--cyan);letter-spacing:.08em;margin-bottom:3px}
        .panel-sub{font-size:10px;color:var(--muted);margin-bottom:16px}
        .field{margin-bottom:12px}
        .field-label{font-size:10px;color:var(--muted);text-transform:uppercase;
          letter-spacing:.09em;margin-bottom:5px;display:block}
        .field-input{width:100%;padding:10px 13px;border-radius:9px;
          border:1px solid var(--border);background:rgba(0,8,22,0.9);
          color:var(--cyan);font-family:'IBM Plex Mono',monospace;font-size:18px;
          font-weight:500;transition:all .18s;outline:none;letter-spacing:.04em;
          -moz-appearance:textfield}
        .field-input::-webkit-outer-spin-button,.field-input::-webkit-inner-spin-button{-webkit-appearance:none}
        .field-input:focus{border-color:rgba(0,229,255,0.48);
          box-shadow:0 0 0 3px rgba(0,229,255,0.07),0 0 18px rgba(0,229,255,0.1)}
        .field-input.gn{color:var(--green)}
        .field-input.or{color:var(--orange)}
        .field-select{width:100%;padding:10px 13px;border-radius:9px;
          border:1px solid var(--border);background:rgba(0,8,22,0.9);
          color:var(--text);font-family:'IBM Plex Mono',monospace;font-size:12px;
          cursor:pointer;outline:none;transition:all .18s}
        .field-select:focus{border-color:rgba(0,229,255,0.4)}
        .fields-row{display:grid;grid-template-columns:1fr 1fr;gap:8px}
        .btn-row{display:flex;gap:7px;flex-wrap:wrap;margin:12px 0 14px}
        .err{font-size:10px;color:#ff6b6b;padding:7px 11px;border-radius:7px;
          background:rgba(255,50,50,0.07);border:1px solid rgba(255,50,50,0.2);margin-bottom:10px}

        /* MODE */
        .mode-label{font-family:'Orbitron',monospace;font-size:11px;color:var(--cyan);
          letter-spacing:.07em;margin-bottom:6px;margin-top:4px}
        .mode-row{display:flex;gap:5px;flex-wrap:wrap;margin-bottom:14px}
        .mbtn{font-family:'IBM Plex Mono',monospace;font-size:10px;padding:6px 9px;
          border-radius:7px;cursor:pointer;border:1px solid var(--border);
          background:var(--surface2);color:var(--muted);transition:all .18s;
          text-transform:uppercase;letter-spacing:.05em}
        .mbtn:hover{border-color:var(--bh);color:var(--text)}
        .mbtn.ax{border-color:rgba(0,229,255,0.45);color:var(--cyan);background:rgba(0,229,255,0.07)}
        .mbtn.av{border-color:rgba(0,255,140,0.45);color:var(--green);background:rgba(0,255,140,0.06)}
        .mbtn.aa{border-color:rgba(255,107,53,0.45);color:var(--orange);background:rgba(255,107,53,0.06)}
        .mbtn.aall{border-color:rgba(200,222,255,0.25);color:var(--text);background:rgba(200,222,255,0.04)}

        /* STATS */
        .stats{display:grid;grid-template-columns:1fr 1fr;gap:7px}
        .sc{border-radius:10px;padding:11px;border:1px solid var(--border);background:rgba(0,6,18,0.7)}
        .sl{font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.09em}
        .sv{font-size:16px;font-weight:500;margin-top:5px}

        /* WORKSPACE */
        .workspace{display:flex;flex-direction:column;gap:14px}
        .cc{border-radius:16px;padding:14px;
          background:var(--surface);border:1px solid var(--border);
          box-shadow:var(--glow),var(--shadow);backdrop-filter:blur(24px)}
        .chead{display:flex;justify-content:space-between;align-items:flex-start;
          margin-bottom:9px;gap:10px;flex-wrap:wrap}
        .chead h3{font-family:'Orbitron',monospace;font-size:12px;font-weight:600;letter-spacing:.07em}
        .chead h3.cx{color:var(--cyan)}.chead h3.gn{color:var(--green)}.chead h3.or{color:var(--orange)}.chead h3.wh{color:var(--text)}
        .csub{font-size:10px;color:var(--muted);margin-top:2px}
        .live{font-size:10px;color:rgba(0,229,255,0.65);font-family:'IBM Plex Mono',monospace;letter-spacing:.04em;white-space:nowrap}
        canvas{display:block;width:100%;border-radius:10px}

        /* THEORY */
        .theory{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:16px}
        .tc{border-radius:16px;padding:20px;
          background:var(--surface);border:1px solid var(--border);
          box-shadow:var(--glow),var(--shadow);backdrop-filter:blur(24px)}
        .stitle{font-family:'Orbitron',monospace;font-size:12px;color:var(--cyan);
          letter-spacing:.09em;margin-bottom:12px}
        ul{padding-left:16px}
        ul li{color:var(--muted);font-size:11px;line-height:2.1}
        .task{padding:10px 13px;border-radius:9px;margin-top:7px;
          background:rgba(0,229,255,0.03);border:1px solid rgba(0,229,255,0.07);
          font-size:11px;color:rgba(200,220,255,0.6);line-height:1.7}
        .footer{text-align:center;font-size:10px;color:var(--muted);padding-top:8px;letter-spacing:.06em}

        @media(max-width:960px){.hero,.main-grid,.theory{grid-template-columns:1fr}.hero h2{font-size:18px}}
      `}</style>

      <div className="bg-grid" />
      <div className="bg-glow" />
      <div className="scan" />

      <div className="page">

        
        {/* TOPBAR */}
        <div className="topbar">
          <div className="brand">
            <div className="logo">φ</div>
            <div>
              <h1>{tr.brandTitle}</h1>
              <small>{tr.brandSubtitle}</small>
            </div>
          </div>
          <div className="top-actions">
            <button className={`btn lang-btn${lang === "kk" ? " active" : ""}`} onClick={() => setLangState("kk")}>ҚАЗ</button>
            <button className={`btn lang-btn${lang === "ru" ? " active" : ""}`} onClick={() => setLangState("ru")}>РУС</button>
          </div>
        </div>

        {/* HERO */}
        <section className="hero">
          <div>
            <h2>{tr.heroTitle}</h2>
            <p>{tr.heroText}</p>
            <div className="pills">
              <span className="pill">{tr.pill1}</span>
              <span className="pill">{tr.pill2}</span>
              <span className="pill">{tr.pill3}</span>
            </div>
          </div>
          <div className="formula-box">
            <div className="fl">{tr.formulaLabel}</div>
            <div className="fr"><span className="fk">{tr.eqX}</span><span className="fv cx">{eqX}</span></div>
            <div className="fr"><span className="fk">{tr.eqV}</span><span className="fv gn">{eqV}</span></div>
            <div className="fr"><span className="fk">{tr.eqA}</span><span className="fv or">{eqAcc}</span></div>
          </div>
        </section>

        {/* MAIN */}
        <div className="main-grid">
          {/* CONTROLS */}
          <aside className="panel">
            <div className="panel-title">{tr.controlTitle}</div>
            <div className="panel-sub">{tr.controlSub}</div>

            <div className="field">
              <label className="field-label">{tr.funcLabel}</label>
              <select className="field-select" value={fn} onChange={e => setFn(e.target.value)}>
                <option value="sin">sin — A·sin(ωt + φ)</option>
                <option value="cos">cos — A·cos(ωt + φ)</option>
              </select>
            </div>

            <div className="field">
              <label className="field-label">{tr.ampLabel}</label>
              <input className="field-input" type="number" value={rawA} min="0.01" max="999" step="0.1" placeholder="2"
                onChange={e => setRawA(e.target.value)} />
            </div>

            <div className="field">
              <label className="field-label">{tr.periodLabel}</label>
              <input className="field-input gn" type="number" value={rawT} min="0.01" max="999" step="0.1" placeholder="4"
                onChange={e => setRawT(e.target.value)} />
            </div>

            <div className="field">
              <label className="field-label">{tr.phaseLabel}</label>
              <input className="field-input or" type="number" value={rawPhi} min="-100" max="100" step="0.01" placeholder="0"
                onChange={e => setRawPhi(e.target.value)} />
            </div>

            <div className="fields-row">
              <div className="field">
                <label className="field-label">{tr.timeLabel}</label>
                <input className="field-input" type="number" value={rawTime} min="1" max="999" step="1" placeholder="12"
                  style={{ fontSize: 15 }} onChange={e => setRawTime(e.target.value)} />
              </div>
              <div className="field">
                <label className="field-label">{tr.speedLabel}</label>
                <input className="field-input" type="number" value={rawSpeed} min="0.1" max="20" step="0.1" placeholder="1"
                  style={{ fontSize: 15 }} onChange={e => setRawSpeed(e.target.value)} />
              </div>
            </div>

            {error && <div className="err">{error}</div>}

            <div className="btn-row">
              <button className="btn btn-cyan" onClick={applyParams}>{tr.applyBtn}</button>
              <button className="btn" onClick={toggleAnim}>{running ? tr.playStop[0] : tr.playStop[1]}</button>
              <button className="btn" onClick={resetAll}>{tr.resetBtn}</button>
            </div>

            <div className="mode-label">{tr.displayMode}</div>
            <div className="mode-row">
              <button className={`mbtn${mode === "all" ? " aall" : ""}`} onClick={() => setMode("all")}>{tr.modeAll}</button>
              <button className={`mbtn${mode === "x" ? " ax" : ""}`} onClick={() => setMode("x")}>{tr.modeX}</button>
              <button className={`mbtn${mode === "v" ? " av" : ""}`} onClick={() => setMode("v")}>{tr.modeV}</button>
              <button className={`mbtn${mode === "a" ? " aa" : ""}`} onClick={() => setMode("a")}>{tr.modeA}</button>
            </div>

            <div className="stats">
              <div className="sc"><div className="sl">{tr.stat1Label}</div><div className="sv" style={{ color: "var(--cyan)" }}>{fmt(f)} Гц</div></div>
              <div className="sc"><div className="sl">{tr.stat2Label}</div><div className="sv" style={{ color: "var(--cyan)" }}>{fmt(omega)} рад/с</div></div>
              <div className="sc"><div className="sl">{tr.stat3Label}</div><div className="sv" style={{ color: "var(--green)" }}>{fmt(vmax)} м/с</div></div>
              <div className="sc"><div className="sl">{tr.stat4Label}</div><div className="sv" style={{ color: "var(--orange)" }}>{fmt(amax)} м/с²</div></div>
            </div>
          </aside>

          {/* WORKSPACE */}
          <div className="workspace">
            {/* Animation */}
            <div className="cc">
              <div className="chead">
                <div><h3 className="wh">{tr.animTitle}</h3><div className="csub">{tr.animSub}</div></div>
                <div className="live">{liveReadout}</div>
              </div>
              <canvas ref={animRef} width={920} height={160} />
            </div>

            {/* x(t) */}
            {showX && (
              <div className="cc">
                <div className="chead">
                  <div><h3 className="cx">{tr.graphX}</h3><div className="csub">{tr.eqX} {eqX}</div></div>
                </div>
                <canvas ref={xRef} width={920} height={210} />
              </div>
            )}

            {/* v(t) */}
            {showV && (
              <div className="cc">
                <div className="chead">
                  <div><h3 className="gn">{tr.graphV}</h3><div className="csub">{tr.eqV} {eqV}</div></div>
                </div>
                <canvas ref={vRef} width={920} height={210} />
              </div>
            )}

            {/* a(t) */}
            {showA2 && (
              <div className="cc">
                <div className="chead">
                  <div><h3 className="or">{tr.graphA}</h3><div className="csub">{tr.eqA} {eqAcc}</div></div>
                </div>
                <canvas ref={aRef} width={920} height={210} />
              </div>
            )}
          </div>
        </div>

        {/* THEORY + TASKS */}
        <div className="theory">
          <div className="tc">
            <div className="stitle">{tr.theoryTitle}</div>
            <ul>{tr.theoryList.map((item, i) => <li key={i}>{item}</li>)}</ul>
          </div>
          <div className="tc">
            <div className="stitle">{tr.tasksTitle}</div>
            {tr.tasks.map((task, i) => <div className="task" key={i}>{task}</div>)}
          </div>
        </div>

        <div className="footer">{tr.footerText}</div>
      </div>
    </>
  );
}