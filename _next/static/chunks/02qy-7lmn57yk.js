(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,16244,e=>{"use strict";var a=e.i(29428),r=e.i(18857);let l={kk:{brandTitle:"Виртуалды зертхана",brandSubtitle:"Гармоникалық тербелістердің теңдеулері мен графиктері",heroTitle:"Гармоникалық тербелістерді интерактивті түрде зерттеу",heroText:"Амплитуда, период және бастапқы фазаны енгізіп, координата, жылдамдық және үдеу графиктерін бірден бақылаңыз.",pill1:"Интерактивті басқару",pill2:"x / v / a графиктері",pill3:"Қазақша / Орысша",formulaLabel:"Ағымдағы тербеліс теңдеуі",controlTitle:"Параметрлерді енгізу",controlSub:"Мәндерді қолмен теріңіз",funcLabel:"Функция",ampLabel:"Амплитуда A (м)",periodLabel:"Период T (с)",phaseLabel:"Бастапқы фаза φ (рад)",timeLabel:"Уақыт аралығы (с)",speedLabel:"Анимация жылд.",applyBtn:"Қолдану",playStop:["Тоқтату","Жалғастыру"],resetBtn:"Қалпына келтіру",stat1Label:"Жиілік",stat2Label:"Бұрыштық жиілік",stat3Label:"Макс. жылдамдық",stat4Label:"Макс. үдеу",animTitle:"Қозғалыс анимациясы",animSub:"Нүктенің тербелісін нақты уақытта бақылау",graphX:"x(t) — Координата",graphV:"v(t) — Жылдамдық",graphA:"a(t) — Үдеу",theoryTitle:"Қысқаша теория",tasksTitle:"Зертханалық тапсырмалар",theoryList:["Координата: x(t) = A·sin(ωt + φ)","Жылдамдық: v(t) = Aω·cos(ωt + φ)","Үдеу: a(t) = −Aω²·sin(ωt + φ)","Жиілік: f = 1/T,  бұрыштық жиілік: ω = 2π/T","Максимал жылдамдық: vmax = Aω,  үдеу: amax = Aω²"],tasks:["1) A=3 м, T=2 с енгізіп, vmax мен amax мәндерін тап.","2) Периодты азайтқанда бұрыштық жиілік қалай өзгереді?","3) φ=1.57 енгізіп, cos пен sin графиктерінің айырмашылығын түсіндір."],footerText:"Виртуалды зертхана — физика сабағына арналған интерактивті құрал.",unitSec:"с",live:"t = {t} с   x = {x} м   v = {v} м/с",axisT:"t, с",axisX:"x, м",axisV:"v, м/с",axisAcc:"a, м/с²",eqX:"x(t) =",eqV:"v(t) =",eqA:"a(t) =",displayMode:"Көрсету режимі",modeAll:"Барлығы",modeX:"x(t)",modeV:"v(t)",modeA:"a(t)",validErr:"Қате мән! A > 0, T > 0 болуы керек."},ru:{brandTitle:"Виртуальная лаборатория",brandSubtitle:"Уравнения и графики гармонических колебаний",heroTitle:"Интерактивное исследование гармонических колебаний",heroText:"Введите амплитуду, период и начальную фазу — наблюдайте графики координаты, скорости и ускорения в реальном времени.",pill1:"Ручной ввод",pill2:"x / v / a графики",pill3:"Казахский / Русский",formulaLabel:"Текущее уравнение колебания",controlTitle:"Ввод параметров",controlSub:"Введите значения вручную",funcLabel:"Функция",ampLabel:"Амплитуда A (м)",periodLabel:"Период T (с)",phaseLabel:"Начальная фаза φ (рад)",timeLabel:"Интервал времени (с)",speedLabel:"Скорость анимации",applyBtn:"Применить",playStop:["Пауза","Продолжить"],resetBtn:"Сбросить",stat1Label:"Частота",stat2Label:"Цикл. частота",stat3Label:"Макс. скорость",stat4Label:"Макс. ускорение",animTitle:"Анимация движения",animSub:"Наблюдение за колебанием точки в реальном времени",graphX:"x(t) — Координата",graphV:"v(t) — Скорость",graphA:"a(t) — Ускорение",theoryTitle:"Краткая теория",tasksTitle:"Лабораторные задания",theoryList:["Координата: x(t) = A·sin(ωt + φ)","Скорость: v(t) = Aω·cos(ωt + φ)","Ускорение: a(t) = −Aω²·sin(ωt + φ)","Частота: f = 1/T,  циклическая частота: ω = 2π/T","Макс. скорость: vmax = Aω,  ускорение: amax = Aω²"],tasks:["1) Введите A=3 м, T=2 с и найдите vmax и amax.","2) Как меняется циклическая частота при уменьшении периода?","3) Введите φ=1.57 и объясните разницу между графиками sin и cos."],footerText:"Виртуальная лаборатория — интерактивный инструмент для урока физики.",unitSec:"с",live:"t = {t} с   x = {x} м   v = {v} м/с",axisT:"t, с",axisX:"x, м",axisV:"v, м/с",axisAcc:"a, м/с²",eqX:"x(t) =",eqV:"v(t) =",eqA:"a(t) =",displayMode:"Режим отображения",modeAll:"Все",modeX:"x(t)",modeV:"v(t)",modeA:"a(t)",validErr:"Ошибка! A > 0, T > 0 обязательны."}},t=e=>Number(e).toFixed(2);function s(e,a,r,l,t){return"sin"===t?a*Math.sin(r*e+l):a*Math.cos(r*e+l)}function i(e,a,r,l,t){return"sin"===t?a*r*Math.cos(r*e+l):-a*r*Math.sin(r*e+l)}function o(e,a,r,l,s,i,o){let n=e.getContext("2d");if(!n)return;let d=e.width,c=e.height;n.clearRect(0,0,d,c);let p=n.createLinearGradient(0,0,0,c);p.addColorStop(0,"#050d1c"),p.addColorStop(1,"#080f20"),n.fillStyle=p,n.fillRect(0,0,d,c);let x=c/2,b=Math.max(Math.abs(r),.001),m=(d-112)/l,g=(c/2-32)/b;n.fillStyle="rgba(0,229,255,0.07)";for(let e=0;e<=14;e++)for(let a=0;a<=8;a++){let r=56+e/14*(d-112),l=16+a/8*(c-32);n.beginPath(),n.arc(r,l,1.5,0,2*Math.PI),n.fill()}n.strokeStyle="rgba(0,229,255,0.06)",n.lineWidth=1;for(let e=0;e<=10;e++){let a=56+e/10*(d-112);n.beginPath(),n.moveTo(a,16),n.lineTo(a,c-16),n.stroke()}for(let e=0;e<=6;e++){let a=16+e/6*(c-32);n.beginPath(),n.moveTo(56,a),n.lineTo(d-56,a),n.stroke()}n.strokeStyle="rgba(0,229,255,0.25)",n.lineWidth=1.5,n.beginPath(),n.moveTo(56,x),n.lineTo(d-56,x),n.stroke(),n.beginPath(),n.moveTo(56,14),n.lineTo(56,c-14),n.stroke(),n.fillStyle="rgba(0,229,255,0.5)",n.font="12px 'Courier New', monospace",n.fillText(i,5,20),n.fillText(o,d-44,x-8),n.fillStyle="rgba(0,229,255,0.35)",n.font="10px 'Courier New', monospace";for(let e=0;e<=8;e++){let a=56+e/8*(d-112);n.fillText(t(e*l/8),a-10,x+16)}for(let e=-2;e<=2;e++){if(0===e)continue;let a=e*b/2,r=x-a*g;n.fillText(t(a),3,r+4)}n.save(),n.shadowColor=s,n.shadowBlur=16,n.strokeStyle=s,n.lineWidth=2.5,n.beginPath();for(let e=0;e<=d-112;e++){let r=x-a(e/m)*g;0===e?n.moveTo(56+e,r):n.lineTo(56+e,r)}n.stroke(),n.restore(),n.strokeStyle="rgba(255,255,255,0.65)",n.lineWidth=1,n.beginPath();for(let e=0;e<=d-112;e++){let r=x-a(e/m)*g;0===e?n.moveTo(56+e,r):n.lineTo(56+e,r)}n.stroke()}e.s(["default",0,function(){let[e,n]=(0,r.useState)("kk"),[d,c]=(0,r.useState)(!0),[p,x]=(0,r.useState)("2"),[b,m]=(0,r.useState)("4"),[g,h]=(0,r.useState)("0"),[f,u]=(0,r.useState)("12"),[v,j]=(0,r.useState)("1"),[N,y]=(0,r.useState)("sin"),[k,w]=(0,r.useState)("all"),[T,S]=(0,r.useState)(""),[A,L]=(0,r.useState)(2),[z,C]=(0,r.useState)(4),[M,P]=(0,r.useState)(0),[$,B]=(0,r.useState)(12),[O,R]=(0,r.useState)(1),[q,V]=(0,r.useState)(""),X=(0,r.useRef)(null),I=(0,r.useRef)(null),F=(0,r.useRef)(null),E=(0,r.useRef)(null),W=(0,r.useRef)(null),U=(0,r.useRef)(null),G=2*Math.PI/z,K=1/z,Y=A*G,H=A*G*G,D=l[e],J="sin"===N?`${t(A)}\xb7sin(${t(G)}t + ${t(M)})`:`${t(A)}\xb7cos(${t(G)}t + ${t(M)})`,Q="sin"===N?`${t(Y)}\xb7cos(${t(G)}t + ${t(M)})`:`-${t(Y)}\xb7sin(${t(G)}t + ${t(M)})`,Z="sin"===N?`-${t(H)}\xb7sin(${t(G)}t + ${t(M)})`:`-${t(H)}\xb7cos(${t(G)}t + ${t(M)})`,_=(0,r.useCallback)(()=>{let e=parseFloat(p),a=parseFloat(b),r=parseFloat(g),l=parseFloat(f),t=parseFloat(v);isNaN(e)||e<=0||isNaN(a)||a<=0||isNaN(r)||isNaN(l)||l<1||isNaN(t)||t<=0?S(D.validErr):(S(""),L(e),C(a),P(r),B(l),R(t),U.current=null)},[p,b,g,f,v,D.validErr]),ee=(0,r.useCallback)(()=>{let e=2*Math.PI/z,a=A*e,r=A*e*e;I.current&&o(I.current,a=>s(a,A,e,M,N),A,$,"#00e5ff",D.axisX,D.axisT),F.current&&o(F.current,a=>i(a,A,e,M,N),a,$,"#00ff8c",D.axisV,D.axisT),E.current&&o(E.current,a=>"sin"===N?-A*e*e*Math.sin(e*a+M):-A*e*e*Math.cos(e*a+M),r,$,"#ff6b35",D.axisAcc,D.axisT)},[A,z,M,N,$,D.axisX,D.axisV,D.axisAcc,D.axisT]);(0,r.useEffect)(()=>{ee()},[k,ee]);let ea=(0,r.useCallback)(e=>{null===U.current&&(U.current=e);let a=X.current;if(!a)return;let r=a.getContext("2d");if(!r)return;let l=2*Math.PI/z,o=(e-U.current)/1e3*O,n=s(o,A,l,M,N),c=i(o,A,l,M,N),p=a.width,x=a.height,b=x/2,m=p/2,g=Math.min(80,(p-160)/(2*Math.max(A,1)));r.clearRect(0,0,p,x);let h=r.createLinearGradient(0,0,0,x);h.addColorStop(0,"#050d1c"),h.addColorStop(1,"#080f20"),r.fillStyle=h,r.fillRect(0,0,p,x),r.fillStyle="rgba(0,229,255,0.05)";for(let e=0;e<=24;e++)for(let a=0;a<=4;a++)r.beginPath(),r.arc(e/24*p,a/4*x,1.2,0,2*Math.PI),r.fill();r.save(),r.shadowColor="#00e5ff",r.shadowBlur=24,r.strokeStyle="rgba(0,229,255,0.35)",r.lineWidth=1.5,r.beginPath(),r.moveTo(60,b),r.lineTo(p-60,b),r.stroke(),r.restore(),r.strokeStyle="rgba(0,229,255,0.25)",r.lineWidth=1;for(let e=-6;e<=6;e++){let a=m+e*g;r.beginPath(),r.moveTo(a,b-7),r.lineTo(a,b+7),r.stroke()}r.strokeStyle="rgba(0,229,255,0.15)",r.beginPath(),r.moveTo(m,b-36),r.lineTo(m,b+36),r.stroke();let f=c/(A*l+.001)*44;r.save(),r.strokeStyle="#00ff8c",r.lineWidth=2,r.shadowColor="#00ff8c",r.shadowBlur=10;let u=m+n*g;r.beginPath(),r.moveTo(u,b-30),r.lineTo(u+f,b-30),r.stroke();let v=f>0?1:-1;r.beginPath(),r.moveTo(u+f,b-30),r.lineTo(u+f-7*v,b-35),r.lineTo(u+f-7*v,b-25),r.fillStyle="#00ff8c",r.fill(),r.restore(),r.save(),r.shadowColor="#00e5ff",r.shadowBlur=36;let j=r.createRadialGradient(u,b,3,u,b,20);j.addColorStop(0,"#ffffff"),j.addColorStop(.35,"#00e5ff"),j.addColorStop(1,"rgba(0,80,180,0.2)"),r.fillStyle=j,r.beginPath(),r.arc(u,b,19,0,2*Math.PI),r.fill(),r.restore(),V(D.live.replace("{t}",t(o)).replace("{x}",t(n)).replace("{v}",t(c))),d&&(W.current=requestAnimationFrame(ea))},[A,z,M,N,O,d,D.live]);return(0,r.useEffect)(()=>(ee(),U.current=null,W.current&&cancelAnimationFrame(W.current),W.current=requestAnimationFrame(ea),()=>{W.current&&cancelAnimationFrame(W.current)}),[ee,ea]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("style",{children:`
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
      `}),(0,a.jsx)("div",{className:"bg-grid"}),(0,a.jsx)("div",{className:"bg-glow"}),(0,a.jsx)("div",{className:"scan"}),(0,a.jsxs)("div",{className:"page",children:[(0,a.jsxs)("div",{className:"topbar",children:[(0,a.jsxs)("div",{className:"brand",children:[(0,a.jsx)("div",{className:"logo",children:"φ"}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{children:D.brandTitle}),(0,a.jsx)("small",{children:D.brandSubtitle})]})]}),(0,a.jsxs)("div",{className:"top-actions",children:[(0,a.jsx)("button",{className:`btn lang-btn${"kk"===e?" active":""}`,onClick:()=>n("kk"),children:"ҚАЗ"}),(0,a.jsx)("button",{className:`btn lang-btn${"ru"===e?" active":""}`,onClick:()=>n("ru"),children:"РУС"})]})]}),(0,a.jsxs)("section",{className:"hero",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{children:D.heroTitle}),(0,a.jsx)("p",{children:D.heroText}),(0,a.jsxs)("div",{className:"pills",children:[(0,a.jsx)("span",{className:"pill",children:D.pill1}),(0,a.jsx)("span",{className:"pill",children:D.pill2}),(0,a.jsx)("span",{className:"pill",children:D.pill3})]})]}),(0,a.jsxs)("div",{className:"formula-box",children:[(0,a.jsx)("div",{className:"fl",children:D.formulaLabel}),(0,a.jsxs)("div",{className:"fr",children:[(0,a.jsx)("span",{className:"fk",children:D.eqX}),(0,a.jsx)("span",{className:"fv cx",children:J})]}),(0,a.jsxs)("div",{className:"fr",children:[(0,a.jsx)("span",{className:"fk",children:D.eqV}),(0,a.jsx)("span",{className:"fv gn",children:Q})]}),(0,a.jsxs)("div",{className:"fr",children:[(0,a.jsx)("span",{className:"fk",children:D.eqA}),(0,a.jsx)("span",{className:"fv or",children:Z})]})]})]}),(0,a.jsxs)("div",{className:"main-grid",children:[(0,a.jsxs)("aside",{className:"panel",children:[(0,a.jsx)("div",{className:"panel-title",children:D.controlTitle}),(0,a.jsx)("div",{className:"panel-sub",children:D.controlSub}),(0,a.jsxs)("div",{className:"field",children:[(0,a.jsx)("label",{className:"field-label",children:D.funcLabel}),(0,a.jsxs)("select",{className:"field-select",value:N,onChange:e=>y(e.target.value),children:[(0,a.jsx)("option",{value:"sin",children:"sin — A·sin(ωt + φ)"}),(0,a.jsx)("option",{value:"cos",children:"cos — A·cos(ωt + φ)"})]})]}),(0,a.jsxs)("div",{className:"field",children:[(0,a.jsx)("label",{className:"field-label",children:D.ampLabel}),(0,a.jsx)("input",{className:"field-input",type:"number",value:p,min:"0.01",max:"999",step:"0.1",placeholder:"2",onChange:e=>x(e.target.value)})]}),(0,a.jsxs)("div",{className:"field",children:[(0,a.jsx)("label",{className:"field-label",children:D.periodLabel}),(0,a.jsx)("input",{className:"field-input gn",type:"number",value:b,min:"0.01",max:"999",step:"0.1",placeholder:"4",onChange:e=>m(e.target.value)})]}),(0,a.jsxs)("div",{className:"field",children:[(0,a.jsx)("label",{className:"field-label",children:D.phaseLabel}),(0,a.jsx)("input",{className:"field-input or",type:"number",value:g,min:"-100",max:"100",step:"0.01",placeholder:"0",onChange:e=>h(e.target.value)})]}),(0,a.jsxs)("div",{className:"fields-row",children:[(0,a.jsxs)("div",{className:"field",children:[(0,a.jsx)("label",{className:"field-label",children:D.timeLabel}),(0,a.jsx)("input",{className:"field-input",type:"number",value:f,min:"1",max:"999",step:"1",placeholder:"12",style:{fontSize:15},onChange:e=>u(e.target.value)})]}),(0,a.jsxs)("div",{className:"field",children:[(0,a.jsx)("label",{className:"field-label",children:D.speedLabel}),(0,a.jsx)("input",{className:"field-input",type:"number",value:v,min:"0.1",max:"20",step:"0.1",placeholder:"1",style:{fontSize:15},onChange:e=>j(e.target.value)})]})]}),T&&(0,a.jsx)("div",{className:"err",children:T}),(0,a.jsxs)("div",{className:"btn-row",children:[(0,a.jsx)("button",{className:"btn btn-cyan",onClick:_,children:D.applyBtn}),(0,a.jsx)("button",{className:"btn",onClick:()=>{c(e=>{let a=!e;return a&&(U.current=null,requestAnimationFrame(ea)),a})},children:d?D.playStop[0]:D.playStop[1]}),(0,a.jsx)("button",{className:"btn",onClick:()=>{x("2"),m("4"),h("0"),u("12"),j("1"),y("sin"),L(2),C(4),P(0),B(12),R(1),S(""),U.current=null},children:D.resetBtn})]}),(0,a.jsx)("div",{className:"mode-label",children:D.displayMode}),(0,a.jsxs)("div",{className:"mode-row",children:[(0,a.jsx)("button",{className:`mbtn${"all"===k?" aall":""}`,onClick:()=>w("all"),children:D.modeAll}),(0,a.jsx)("button",{className:`mbtn${"x"===k?" ax":""}`,onClick:()=>w("x"),children:D.modeX}),(0,a.jsx)("button",{className:`mbtn${"v"===k?" av":""}`,onClick:()=>w("v"),children:D.modeV}),(0,a.jsx)("button",{className:`mbtn${"a"===k?" aa":""}`,onClick:()=>w("a"),children:D.modeA})]}),(0,a.jsxs)("div",{className:"stats",children:[(0,a.jsxs)("div",{className:"sc",children:[(0,a.jsx)("div",{className:"sl",children:D.stat1Label}),(0,a.jsxs)("div",{className:"sv",style:{color:"var(--cyan)"},children:[t(K)," Гц"]})]}),(0,a.jsxs)("div",{className:"sc",children:[(0,a.jsx)("div",{className:"sl",children:D.stat2Label}),(0,a.jsxs)("div",{className:"sv",style:{color:"var(--cyan)"},children:[t(G)," рад/с"]})]}),(0,a.jsxs)("div",{className:"sc",children:[(0,a.jsx)("div",{className:"sl",children:D.stat3Label}),(0,a.jsxs)("div",{className:"sv",style:{color:"var(--green)"},children:[t(Y)," м/с"]})]}),(0,a.jsxs)("div",{className:"sc",children:[(0,a.jsx)("div",{className:"sl",children:D.stat4Label}),(0,a.jsxs)("div",{className:"sv",style:{color:"var(--orange)"},children:[t(H)," м/с²"]})]})]})]}),(0,a.jsxs)("div",{className:"workspace",children:[(0,a.jsxs)("div",{className:"cc",children:[(0,a.jsxs)("div",{className:"chead",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"wh",children:D.animTitle}),(0,a.jsx)("div",{className:"csub",children:D.animSub})]}),(0,a.jsx)("div",{className:"live",children:q})]}),(0,a.jsx)("canvas",{ref:X,width:920,height:160})]}),("all"===k||"x"===k)&&(0,a.jsxs)("div",{className:"cc",children:[(0,a.jsx)("div",{className:"chead",children:(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"cx",children:D.graphX}),(0,a.jsxs)("div",{className:"csub",children:[D.eqX," ",J]})]})}),(0,a.jsx)("canvas",{ref:I,width:920,height:210})]}),("all"===k||"v"===k)&&(0,a.jsxs)("div",{className:"cc",children:[(0,a.jsx)("div",{className:"chead",children:(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"gn",children:D.graphV}),(0,a.jsxs)("div",{className:"csub",children:[D.eqV," ",Q]})]})}),(0,a.jsx)("canvas",{ref:F,width:920,height:210})]}),("all"===k||"a"===k)&&(0,a.jsxs)("div",{className:"cc",children:[(0,a.jsx)("div",{className:"chead",children:(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"or",children:D.graphA}),(0,a.jsxs)("div",{className:"csub",children:[D.eqA," ",Z]})]})}),(0,a.jsx)("canvas",{ref:E,width:920,height:210})]})]})]}),(0,a.jsxs)("div",{className:"theory",children:[(0,a.jsxs)("div",{className:"tc",children:[(0,a.jsx)("div",{className:"stitle",children:D.theoryTitle}),(0,a.jsx)("ul",{children:D.theoryList.map((e,r)=>(0,a.jsx)("li",{children:e},r))})]}),(0,a.jsxs)("div",{className:"tc",children:[(0,a.jsx)("div",{className:"stitle",children:D.tasksTitle}),D.tasks.map((e,r)=>(0,a.jsx)("div",{className:"task",children:e},r))]})]}),(0,a.jsx)("div",{className:"footer",children:D.footerText})]})]})}])}]);