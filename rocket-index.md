---
title: "Cleared for launch"
---

<style>
/* ── Reset ── */
*, *::before, *::after { box-sizing: border-box; }

/* ── Base wrapper ── */
.vu-home {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  color: #333;
}

/* ── Hero ── */
.vu-hero {
  background: linear-gradient(175deg, #060b2e 0%, #0d1b6b 55%, #1a3a7a 100%);
  color: white;
  text-align: center;
  padding: 80px 30px 90px;
  position: relative;
  overflow: hidden;
}
.vu-stars { position: absolute; inset: 0; pointer-events: none; }
.vu-star {
  position: absolute;
  background: white;
  border-radius: 50%;
  animation: vu-twinkle var(--d, 3s) ease-in-out infinite var(--delay, 0s);
}
@keyframes vu-twinkle { 0%, 100% { opacity: 0.15; } 50% { opacity: 1; } }

.vu-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.25);
  color: rgba(255,255,255,0.85);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 5px 14px;
  border-radius: 20px;
  margin-bottom: 28px;
}
.vu-hero h1 {
  font-size: clamp(32px, 6vw, 62px);
  font-weight: 800;
  letter-spacing: -1px;
  line-height: 1.1;
  margin: 0 0 20px;
}
.vu-hero h1 em {
  font-style: normal;
  color: #7ecfff;
}
.vu-tagline {
  font-size: clamp(14px, 2.5vw, 19px);
  color: rgba(255,255,255,0.75);
  max-width: 640px;
  margin: 0 auto;
  line-height: 1.65;
}
.vu-tagline strong { color: white; font-weight: 600; }

/* ── Mission ── */
.vu-mission {
  max-width: 840px;
  margin: 0 auto;
  padding: 64px 28px;
}
.vu-mc-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #060b2e;
  color: #7ecfff;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 5px 14px;
  border-radius: 20px;
  margin-bottom: 20px;
}
.vu-mission h2 {
  font-size: 26px;
  font-weight: 700;
  color: #060b2e;
  margin: 0 0 18px;
  line-height: 1.3;
}
.vu-mission p {
  font-size: 16px;
  line-height: 1.7;
  color: #444;
  margin-bottom: 18px;
}
.vu-personas {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  margin: 28px 0;
}
@media (max-width: 580px) { .vu-personas { grid-template-columns: 1fr; } }
.vu-persona {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 18px 20px;
  border-left: 4px solid #0066cc;
}
.vu-persona.student { border-left-color: #ff6600; }
.vu-persona-role {
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #0066cc;
  margin-bottom: 8px;
}
.vu-persona.student .vu-persona-role { color: #ff6600; }
.vu-persona-quote {
  font-size: 14px;
  line-height: 1.65;
  color: #444;
  font-style: italic;
}
.vu-integrity-box {
  background: linear-gradient(135deg, #eff3ff, #e8f0fe);
  border: 1.5px solid #c7d2fe;
  border-radius: 12px;
  padding: 22px 26px;
  margin-top: 28px;
}
.vu-integrity-box h3 {
  font-size: 16px;
  font-weight: 700;
  color: #1e1b4b;
  margin: 0 0 10px;
}
.vu-integrity-box p {
  font-size: 14px;
  line-height: 1.65;
  color: #374151;
  margin: 0;
}
.vu-integrity-example {
  margin-top: 14px;
  padding-top: 14px;
  border-top: 1px solid #c7d2fe;
  font-size: 14px;
  color: #4b5563;
  font-style: italic;
  line-height: 1.65;
}

/* ── Your task ── */
.vu-task-wrap { background: #f8f9fa; }
.vu-task {
  max-width: 840px;
  margin: 0 auto;
  padding: 60px 28px;
}
.vu-task h2 {
  font-size: 26px;
  font-weight: 700;
  color: #060b2e;
  margin: 0 0 10px;
}
.vu-task-intro {
  font-size: 15px;
  color: #555;
  line-height: 1.7;
  margin-bottom: 30px;
}
.vu-modules {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  margin-bottom: 32px;
}
@media (max-width: 660px) { .vu-modules { grid-template-columns: repeat(2, 1fr); } }
.vu-mod {
  background: white;
  border-radius: 10px;
  padding: 18px 14px;
  text-align: center;
  text-decoration: none;
  color: inherit;
  border: 2px solid #ebebeb;
  transition: border-color 0.2s, transform 0.15s;
  display: block;
}
.vu-mod:hover { border-color: var(--c); transform: translateY(-2px); }
.vu-mod-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--c);
  margin: 0 auto 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.vu-mod-name { font-size: 14px; font-weight: 700; color: #1e1b4b; margin-bottom: 5px; }
.vu-mod-desc { font-size: 12px; color: #666; line-height: 1.5; }
.vu-outcomes {
  display: flex;
  gap: 16px;
}
@media (max-width: 560px) { .vu-outcomes { flex-direction: column; } }
.vu-outcome {
  flex: 1;
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  padding: 18px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
}
.vu-outcome-icon {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.vu-outcome-title { font-size: 13px; font-weight: 700; color: #1e1b4b; margin-bottom: 4px; }
.vu-outcome-desc { font-size: 12px; color: #666; line-height: 1.5; }

/* ── Rocket section ── */
.vu-rocket-section {
  background: #060b2e;
  padding: 0 20px 80px;
  text-align: center;
}
.vu-rocket-svg {
  max-width: 620px;
  width: 100%;
  display: block;
  margin: 0 auto;
}

/* Flame flicker */
@keyframes vu-flicker {
  0%, 100% { transform: scaleY(1)   scaleX(1);   }
  25%       { transform: scaleY(1.06) scaleX(0.96); }
  50%       { transform: scaleY(0.94) scaleX(1.04); }
  75%       { transform: scaleY(1.08) scaleX(0.95); }
}
.vu-flame { transform-origin: 300px 385px; animation: vu-flicker 0.45s ease-in-out infinite; }
</style>

<div class="vu-home">

<!-- ════════════════════════════════════════════
     HERO
     ════════════════════════════════════════════ -->
<section class="vu-hero">
  <div class="vu-stars" id="vu-stars"></div>
  <div class="vu-badge">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="12" height="12"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
    Vrije Universiteit Amsterdam &middot; Academic AI Integrity
  </div>
  <h1>Cleared for launch:<br><em>AI integrity</em> at VU</h1>
  <p class="vu-tagline">
    <strong>Our mission:</strong> to guide students and teachers in their journey towards responsible AI use.
  </p>
</section>

<script>
(function(){
  var c=document.getElementById('vu-stars');
  if(!c)return;
  for(var i=0;i<90;i++){
    var s=document.createElement('div');
    s.className='vu-star';
    var sz=Math.random()*2.4+0.6;
    s.style.cssText='width:'+sz+'px;height:'+sz+'px;top:'+Math.random()*100+'%;left:'+Math.random()*100+'%;--d:'+(2+Math.random()*3)+'s;--delay:'+(Math.random()*5)+'s;';
    c.appendChild(s);
  }
})();
</script>

<!-- ════════════════════════════════════════════
     MESSAGE FROM MISSION CONTROL
     ════════════════════════════════════════════ -->
<section class="vu-mission">
  <div class="vu-mc-badge">
    <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
    Message from mission control
  </div>
  <h2>AI is here. The question is: what's the responsible thing to do?</h2>
  <p>At Vrije Universiteit Amsterdam, the default is clear: AI tools are <strong>not permitted</strong> in academic work unless a course explicitly allows it. The VU AI Assessment Scale gives teachers a structured framework for that decision — from full prohibition to full AI integration — and gives students the clarity they need to act accordingly. The policy exists. The harder question is what to do with it day to day.</p>
  <p>Across campus, students and teachers are navigating unfamiliar terrain every day.</p>

  <div class="vu-personas">
    <div class="vu-persona">
      <div class="vu-persona-role">Teacher</div>
      <div class="vu-persona-quote">"I know AI can generate convincing essays. But I'm not sure whether to ban it outright, allow it for brainstorming only, or require students to disclose what they used. And even once I've decided — what exactly do I write in my study guide so students actually understand?"</div>
    </div>
    <div class="vu-persona student">
      <div class="vu-persona-role">Student</div>
      <div class="vu-persona-quote">"I used AI to help structure my argument. It didn't write my text, but it did shape my thinking. I honestly don't know whether I was supposed to disclose that — or what I'd even say. I don't want to get it wrong."</div>
    </div>
  </div>

  <p>These aren't failures of knowledge. They're moments of judgment. And <em>judgment</em> is exactly what this e-learning develops.</p>

  <div class="vu-integrity-box">
    <h3>AI literacy vs. AI integrity — what's the difference?</h3>
    <p>AI literacy means understanding how AI systems work: what they can and cannot do, why they produce plausible-sounding errors, and how output quality varies by task. That foundation matters — but it doesn't tell you what you should do.</p>
    <div class="vu-integrity-example">
      <strong>Consider Yara.</strong> She's a third-year student who fully understands how large language models work. She can explain tokens, temperature settings, and the mechanics of hallucination. She deliberately used AI to synthesise sources for a literature review — accurately, efficiently, and with critical oversight. But before she submits, she pauses: <em>Is this appropriate here? Should I disclose it? What would my lecturer expect from me?</em> Yara doesn't need a lesson in AI literacy. She needs a framework for AI <strong>integrity</strong>.
    </div>
  </div>
</section>

<!-- ════════════════════════════════════════════
     YOUR TASK
     ════════════════════════════════════════════ -->
<div class="vu-task-wrap">
<section class="vu-task">
  <h2>Your task</h2>
  <p class="vu-task-intro">This e-learning centres on one core question: <strong>when is AI use appropriate — and when isn't it?</strong> Four interlocking modules build the judgment to answer that question in your own context — and to put that judgment into practice in a transparent and principled way.</p>

  <div class="vu-modules">
    <a class="vu-mod" href="know.html" style="--c:#3498db">
      <div class="vu-mod-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" width="24" height="24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4m0-4h.01"/></svg>
      </div>
      <div class="vu-mod-name">Know</div>
      <div class="vu-mod-desc">Understand how AI systems work and where they fall short</div>
    </a>
    <a class="vu-mod" href="use.html" style="--c:#2ecc71">
      <div class="vu-mod-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" width="24" height="24"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/></svg>
      </div>
      <div class="vu-mod-name">Use</div>
      <div class="vu-mod-desc">Judge which tasks AI genuinely supports and which it undermines</div>
    </a>
    <a class="vu-mod" href="evaluate.html" style="--c:#9b59b6">
      <div class="vu-mod-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" width="24" height="24"><path d="m9 11 3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
      </div>
      <div class="vu-mod-name">Evaluate</div>
      <div class="vu-mod-desc">Critically assess AI outputs before using them in your work</div>
    </a>
    <a class="vu-mod" href="ethics.html" style="--c:#e74c3c">
      <div class="vu-mod-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" width="24" height="24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      </div>
      <div class="vu-mod-name">Ethics</div>
      <div class="vu-mod-desc">Navigate the ethical dimensions of AI use in academic contexts</div>
    </a>
  </div>

  <p style="font-size:15px;color:#555;line-height:1.7;margin-bottom:22px;">Your work through these modules leads to a concrete outcome: better judgment about when AI is appropriate. That judgment takes shape in a tangible artefact. <strong>Teachers</strong> produce a ready-to-use AI rationale for their study guide or syllabus. <strong>Students</strong> produce a complete AI disclosure statement ready to submit alongside their work.</p>

  <div class="vu-outcomes">
    <div class="vu-outcome">
      <div class="vu-outcome-icon" style="background:#e8f0fe">
        <svg viewBox="0 0 24 24" fill="none" stroke="#1a237e" stroke-width="2" width="20" height="20"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
      </div>
      <div>
        <div class="vu-outcome-title">For teachers — AI rationale</div>
        <div class="vu-outcome-desc">A justified position on AI use for your course, ready to add to your study guide or syllabus.</div>
      </div>
    </div>
    <div class="vu-outcome">
      <div class="vu-outcome-icon" style="background:#fff7ed">
        <svg viewBox="0 0 24 24" fill="none" stroke="#ea580c" stroke-width="2" width="20" height="20"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
      </div>
      <div>
        <div class="vu-outcome-title">For students — AI disclosure</div>
        <div class="vu-outcome-desc">A transparent account of how AI was used in your assignment, ready to submit.</div>
      </div>
    </div>
  </div>
</section>
</div>

<!-- ════════════════════════════════════════════
     ROCKET VISUAL
     ════════════════════════════════════════════ -->
<section class="vu-rocket-section">
  <svg class="vu-rocket-svg" viewBox="0 0 620 860" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Navigation diagram showing the pilot and navigator paths through four learning modules: Ethics, Evaluate, Use, and Know">

    <defs>
      <!-- Space background stars (static) -->
      <!-- Planet gradients -->
      <radialGradient id="vu-rg-r" cx="38%" cy="32%" r="62%">
        <stop offset="0%" stop-color="#7986cb"/>
        <stop offset="100%" stop-color="#1a237e"/>
      </radialGradient>
      <radialGradient id="vu-rg-d" cx="38%" cy="32%" r="62%">
        <stop offset="0%" stop-color="#4db6ac"/>
        <stop offset="100%" stop-color="#004d40"/>
      </radialGradient>
      <!-- Rocket body gradient -->
      <linearGradient id="vu-rbody" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%"   stop-color="#b0bec5"/>
        <stop offset="45%"  stop-color="#eceff1"/>
        <stop offset="100%" stop-color="#78909c"/>
      </linearGradient>
      <!-- Flame outer -->
      <linearGradient id="vu-rflame" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%"   stop-color="#fff176"/>
        <stop offset="20%"  stop-color="#ffb300"/>
        <stop offset="55%"  stop-color="#ff5722"/>
        <stop offset="100%" stop-color="#ff572200"/>
      </linearGradient>
      <!-- Flame inner -->
      <linearGradient id="vu-riflame" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%"   stop-color="#ffffff"/>
        <stop offset="35%"  stop-color="#fff9c4"/>
        <stop offset="100%" stop-color="#fff9c400"/>
      </linearGradient>
      <!-- Trail -->
      <linearGradient id="vu-rtrail" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%"   stop-color="#ff7043" stop-opacity="0.55"/>
        <stop offset="100%" stop-color="#ff7043" stop-opacity="0.06"/>
      </linearGradient>
      <!-- Clip for planet ring front halves -->
      <clipPath id="vu-rclip-l">
        <rect x="0" y="100" width="310" height="200"/>
      </clipPath>
      <clipPath id="vu-rclip-r">
        <rect x="310" y="100" width="310" height="200"/>
      </clipPath>
      <!-- Glow -->
      <filter id="vu-rglow" x="-60%" y="-60%" width="220%" height="220%">
        <feGaussianBlur stdDeviation="5" result="b"/>
        <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
      <!-- Module circle glow on hover via filter -->
      <filter id="vu-mhover" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="3" result="b"/>
        <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>

    <!-- ── Background ── -->
    <rect width="620" height="860" fill="#060b2e"/>
    <!-- subtle star field -->
    <circle cx="42"  cy="20"  r="1"   fill="white" opacity="0.5"/>
    <circle cx="110" cy="55"  r="1.5" fill="white" opacity="0.7"/>
    <circle cx="185" cy="15"  r="1"   fill="white" opacity="0.4"/>
    <circle cx="260" cy="40"  r="1"   fill="white" opacity="0.6"/>
    <circle cx="360" cy="12"  r="1.5" fill="white" opacity="0.5"/>
    <circle cx="430" cy="48"  r="1"   fill="white" opacity="0.7"/>
    <circle cx="500" cy="22"  r="1"   fill="white" opacity="0.4"/>
    <circle cx="570" cy="60"  r="1"   fill="white" opacity="0.6"/>
    <circle cx="75"  cy="165" r="1"   fill="white" opacity="0.35"/>
    <circle cx="545" cy="148" r="1"   fill="white" opacity="0.4"/>
    <circle cx="22"  cy="310" r="1"   fill="white" opacity="0.3"/>
    <circle cx="598" cy="295" r="1"   fill="white" opacity="0.35"/>
    <circle cx="35"  cy="440" r="1"   fill="white" opacity="0.25"/>
    <circle cx="590" cy="460" r="1"   fill="white" opacity="0.3"/>
    <circle cx="18"  cy="580" r="1"   fill="white" opacity="0.2"/>
    <circle cx="602" cy="595" r="1"   fill="white" opacity="0.25"/>
    <circle cx="48"  cy="710" r="1"   fill="white" opacity="0.2"/>
    <circle cx="572" cy="720" r="1"   fill="white" opacity="0.2"/>

    <!-- ════════════════════════════════════════
         PLANETS (y ≈ 18–185)
         Left = Rationale (teacher), Right = Disclosure (student)
         ════════════════════════════════════════ -->

    <!-- LEFT PLANET: Rationale -->
    <a href="rationale.html">
      <!-- ring back -->
      <ellipse cx="155" cy="118" rx="68" ry="17" fill="none" stroke="#5c6bc0" stroke-width="3" opacity="0.35"/>
      <!-- body -->
      <circle cx="155" cy="96" r="54" fill="url(#vu-rg-r)"/>
      <!-- surface marks -->
      <ellipse cx="140" cy="80"  rx="15" ry="8"   fill="rgba(255,255,255,0.12)" transform="rotate(-20 140 80)"/>
      <ellipse cx="168" cy="108" rx="10" ry="5.5" fill="rgba(0,0,0,0.12)"       transform="rotate(10 168 108)"/>
      <ellipse cx="146" cy="107" rx="5"  ry="3"   fill="rgba(255,255,255,0.07)"/>
      <!-- ring front (clipped to below equator) -->
      <ellipse cx="155" cy="118" rx="68" ry="17" fill="none" stroke="#3949ab" stroke-width="3.5" opacity="0.75" clip-path="url(#vu-rclip-l)"/>
      <!-- label -->
      <rect x="107" y="156" width="96" height="28" rx="14" fill="#1a237e"/>
      <text x="155" y="170" text-anchor="middle" dominant-baseline="middle" font-family="-apple-system,BlinkMacSystemFont,sans-serif" font-size="12" font-weight="700" fill="white">Rationale</text>
    </a>

    <!-- RIGHT PLANET: Disclosure -->
    <a href="disclosure.html">
      <ellipse cx="465" cy="118" rx="68" ry="17" fill="none" stroke="#26a69a" stroke-width="3" opacity="0.35"/>
      <circle cx="465" cy="96" r="54" fill="url(#vu-rg-d)"/>
      <ellipse cx="450" cy="82"  rx="14" ry="7.5" fill="rgba(255,255,255,0.13)" transform="rotate(-15 450 82)"/>
      <ellipse cx="478" cy="109" rx="9"  ry="5"   fill="rgba(0,0,0,0.10)"       transform="rotate(8  478 109)"/>
      <ellipse cx="452" cy="108" rx="4"  ry="2.5" fill="rgba(255,255,255,0.07)"/>
      <ellipse cx="465" cy="118" rx="68" ry="17" fill="none" stroke="#00796b" stroke-width="3.5" opacity="0.75" clip-path="url(#vu-rclip-r)"/>
      <rect x="416" y="156" width="98" height="28" rx="14" fill="#00695c"/>
      <text x="465" y="170" text-anchor="middle" dominant-baseline="middle" font-family="-apple-system,BlinkMacSystemFont,sans-serif" font-size="12" font-weight="700" fill="white">Disclosure</text>
    </a>

    <!-- ════════════════════════════════════════
         ROCKET (centered x=310, y=200–375)
         ════════════════════════════════════════ -->

    <!-- Pilot label (left, with connector to pilot in window) -->
    <a href="pilot/">
      <rect x="44"  y="264" width="72" height="28" rx="14" fill="#1a237e"/>
      <text x="80" y="278" text-anchor="middle" dominant-baseline="middle" font-family="-apple-system,BlinkMacSystemFont,sans-serif" font-size="12" font-weight="700" fill="white">
        <tspan>&#x2708;</tspan> Pilot
      </text>
      <line x1="116" y1="278" x2="278" y2="282" stroke="#7986cb" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.8"/>
      <circle cx="278" cy="282" r="3" fill="#7986cb"/>
    </a>

    <!-- Navigator label (right, with connector to navigator in window) -->
    <a href="navigator/">
      <rect x="504" y="264" width="96" height="28" rx="14" fill="#ff6600"/>
      <text x="552" y="278" text-anchor="middle" dominant-baseline="middle" font-family="-apple-system,BlinkMacSystemFont,sans-serif" font-size="12" font-weight="700" fill="white">
        Navigator
      </text>
      <line x1="504" y1="278" x2="344" y2="282" stroke="#ff9966" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.8"/>
      <circle cx="344" cy="282" r="3" fill="#ff9966"/>
    </a>

    <!-- Nose cone -->
    <path d="M310,205 L282,272 L338,272 Z" fill="#e53935"/>
    <path d="M310,205 L294,272 L310,222 Z" fill="rgba(255,255,255,0.18)"/>

    <!-- Body -->
    <rect x="282" y="271" width="56" height="88" rx="5" fill="url(#vu-rbody)"/>
    <!-- Stripe -->
    <rect x="282" y="293" width="56" height="7" fill="#e53935" opacity="0.5"/>

    <!-- Window -->
    <circle cx="310" cy="320" r="21" fill="#0d47a1" stroke="#90a4ae" stroke-width="2.5"/>
    <!-- Pilot (left, blue suit) -->
    <circle cx="301" cy="314" r="6" fill="#ffd54f"/>
    <rect x="296" y="320" width="10" height="11" rx="3" fill="#1a237e"/>
    <!-- Navigator (right, orange suit) -->
    <circle cx="319" cy="314" r="6" fill="#ffd54f"/>
    <rect x="314" y="320" width="10" height="11" rx="3" fill="#e65100"/>
    <!-- Window glare -->
    <ellipse cx="300" cy="307" rx="7" ry="4" fill="rgba(255,255,255,0.25)" transform="rotate(-25 300 307)"/>

    <!-- Left fin -->
    <path d="M282,285 L254,335 L282,322 Z" fill="#c62828"/>
    <!-- Right fin -->
    <path d="M338,285 L366,335 L338,322 Z" fill="#c62828"/>

    <!-- Nozzle -->
    <rect x="292" y="357" width="36" height="13" rx="4" fill="#546e7a"/>
    <rect x="297" y="368" width="26" height="9"  rx="3" fill="#37474f"/>

    <!-- ════════════════════════════════════════
         FLAME (y=377–490, animated)
         ════════════════════════════════════════ -->
    <g class="vu-flame">
      <!-- outer flame -->
      <path d="M293,377 Q281,415 284,450 Q289,474 310,492 Q331,474 336,450 Q339,415 327,377 Z" fill="url(#vu-rflame)" opacity="0.95"/>
      <!-- inner flame -->
      <path d="M300,377 Q293,407 295,435 Q299,456 310,470 Q321,456 325,435 Q327,407 320,377 Z" fill="url(#vu-riflame)" opacity="0.88"/>
      <!-- core glow -->
      <ellipse cx="310" cy="400" rx="18" ry="24" fill="#ff9800" opacity="0.22" filter="url(#vu-rglow)"/>
    </g>

    <!-- ════════════════════════════════════════
         TRAIL (y=490–760)
         ════════════════════════════════════════ -->
    <rect x="304" y="490" width="12" height="270" rx="6" fill="url(#vu-rtrail)"/>
    <!-- trail particles -->
    <circle cx="310" cy="508" r="3.5" fill="#ff7043" opacity="0.5"/>
    <circle cx="310" cy="545" r="3"   fill="#ff7043" opacity="0.4"/>
    <circle cx="310" cy="585" r="2.5" fill="#ff7043" opacity="0.32"/>
    <circle cx="310" cy="635" r="2.5" fill="#ff7043" opacity="0.24"/>
    <circle cx="310" cy="685" r="2"   fill="#ff7043" opacity="0.18"/>
    <circle cx="310" cy="730" r="2"   fill="#ff7043" opacity="0.12"/>

    <!-- ════════════════════════════════════════
         MODULE CIRCLES along trail

         Left:  Ethics  (higher) at y=542
                Use     (lower)  at y=652
         Right: Evaluate (higher) at y=542
                Know     (lower)  at y=710  ← below Use
         ════════════════════════════════════════ -->

    <!-- ETHICS — left, y=542 -->
    <a href="ethics.html">
      <circle cx="122" cy="542" r="44" fill="#c0392b"/>
      <circle cx="122" cy="542" r="44" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>
      <!-- shield icon -->
      <path d="M122,524 l-11,5v7.5c0,7 4.8,13 11,15 6.2-2 11-8 11-15V529z" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="1.5" stroke-linejoin="round"/>
      <text x="122" y="558" text-anchor="middle" dominant-baseline="middle" font-family="-apple-system,BlinkMacSystemFont,sans-serif" font-size="14" font-weight="800" fill="white">Ethics</text>
      <!-- connector -->
      <line x1="166" y1="542" x2="304" y2="542" stroke="rgba(255,255,255,0.18)" stroke-width="1.5" stroke-dasharray="5,4"/>
      <circle cx="164" cy="542" r="2.5" fill="rgba(255,255,255,0.4)"/>
    </a>

    <!-- EVALUATE — right, y=542 -->
    <a href="evaluate.html">
      <circle cx="498" cy="542" r="44" fill="#8e44ad"/>
      <circle cx="498" cy="542" r="44" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>
      <!-- checkmark icon -->
      <path d="M486,538 l8,8 16-16" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="498" y="559" text-anchor="middle" dominant-baseline="middle" font-family="-apple-system,BlinkMacSystemFont,sans-serif" font-size="12" font-weight="800" fill="white">Evaluate</text>
      <line x1="454" y1="542" x2="316" y2="542" stroke="rgba(255,255,255,0.18)" stroke-width="1.5" stroke-dasharray="5,4"/>
      <circle cx="456" cy="542" r="2.5" fill="rgba(255,255,255,0.4)"/>
    </a>

    <!-- USE — left, y=652 -->
    <a href="use.html">
      <circle cx="122" cy="652" r="44" fill="#27ae60"/>
      <circle cx="122" cy="652" r="44" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>
      <!-- tool/settings icon -->
      <path d="M113,644 a10,10 0 0 1 18,0 a10,10 0 0 1-18,0z" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"/>
      <circle cx="122" cy="644" r="3" fill="rgba(255,255,255,0.35)"/>
      <text x="122" y="668" text-anchor="middle" dominant-baseline="middle" font-family="-apple-system,BlinkMacSystemFont,sans-serif" font-size="15" font-weight="800" fill="white">Use</text>
      <line x1="166" y1="652" x2="304" y2="652" stroke="rgba(255,255,255,0.18)" stroke-width="1.5" stroke-dasharray="5,4"/>
      <circle cx="164" cy="652" r="2.5" fill="rgba(255,255,255,0.4)"/>
    </a>

    <!-- KNOW — right, y=710 (lower than Use at 652) -->
    <a href="know.html">
      <circle cx="498" cy="710" r="44" fill="#2980b9"/>
      <circle cx="498" cy="710" r="44" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>
      <!-- info icon -->
      <circle cx="498" cy="694" r="4" fill="rgba(255,255,255,0.4)"/>
      <rect x="495" y="701" width="6" height="14" rx="3" fill="rgba(255,255,255,0.35)"/>
      <text x="498" y="727" text-anchor="middle" dominant-baseline="middle" font-family="-apple-system,BlinkMacSystemFont,sans-serif" font-size="15" font-weight="800" fill="white">Know</text>
      <line x1="454" y1="710" x2="316" y2="710" stroke="rgba(255,255,255,0.18)" stroke-width="1.5" stroke-dasharray="5,4"/>
      <circle cx="456" cy="710" r="2.5" fill="rgba(255,255,255,0.4)"/>
    </a>

    <!-- ════════════════════════════════════════
         START HERE (bottom)
         ════════════════════════════════════════ -->
    <!-- upward arrow above badge -->
    <line x1="310" y1="764" x2="310" y2="748" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M303,756 L310,748 L317,756" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <!-- badge -->
    <rect x="244" y="776" width="132" height="38" rx="19" fill="#7ecfff"/>
    <text x="310" y="799" text-anchor="middle" dominant-baseline="middle" font-family="-apple-system,BlinkMacSystemFont,sans-serif" font-size="13" font-weight="800" fill="#060b2e" letter-spacing="1.2">START HERE</text>

  </svg>
</section>

</div>
