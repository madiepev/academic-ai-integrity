# Evaluate: assessing AI output

<div style="margin-bottom: 20px;">
  <button onclick="window.location.href='./'" style="padding: 10px 20px; font-size: 14px; background-color: #666; color: white; border: none; border-radius: 5px; cursor: pointer;">
    ← Back to home
  </button>
</div>

---

## AI output is not self-certifying

AI tools generate fluent, well-structured, confident-sounding text. But fluency is not accuracy, and structural coherence is not the same as factual correctness. An AI response that looks authoritative may contain fabricated statistics, real-sounding citations to papers that do not exist, or plausible-sounding conclusions that misrepresent the actual state of the evidence.

Learning to evaluate AI output before you build on it, cite it, or submit it is one of the most important skills for working critically with these tools in academic contexts. This module introduces five evaluation criteria, structured as a rater training exercise: you will learn what each criterion means, study examples at different quality levels, and then practise rating a complete AI response.

---

## Rater training: five evaluation criteria

Rater training is used in research and educational assessment to calibrate evaluators so they apply shared criteria consistently. The approach involves three steps: understanding a criterion's definition, comparing anchored examples across quality levels, and practising on new material until your ratings become reliable.

Work through each of the five criteria below. For each one, read the definition, understand why it matters for academic work, and compare the three anchor examples — rated 1 (unacceptable), 3 (partial), and 5 (strong).

<div class="eval-crit-explorer" id="evalCrit">
<style>
#evalCrit { margin: 20px 0 32px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }

#evalCrit .ece-intro { font-size: 13px; color: #6b7280; line-height: 1.65; margin-bottom: 20px; }

/* Layout */
#evalCrit .ece-layout { display: flex; gap: 20px; align-items: flex-start; }
@media (max-width: 680px) { #evalCrit .ece-layout { flex-direction: column; } }

/* Left panel */
#evalCrit .ece-list { display: flex; flex-direction: column; gap: 8px; flex-shrink: 0; width: 200px; }
@media (max-width: 680px) { #evalCrit .ece-list { flex-direction: row; flex-wrap: wrap; width: 100%; } }

#evalCrit .ece-crit-btn {
  display: flex; align-items: flex-start; gap: 10px;
  border: 1.5px solid #e5e7eb; border-radius: 10px;
  padding: 11px 13px; background: white; cursor: pointer;
  text-align: left; font-family: inherit;
  transition: border-color 0.15s, background 0.15s;
  width: 100%;
}
#evalCrit .ece-crit-btn:hover { border-color: #0d9488; }
#evalCrit .ece-crit-btn.active { border-color: #0d9488; background: #f0fdfa; }

#evalCrit .ece-crit-num {
  font-size: 11px; font-weight: 800; color: #9ca3af;
  letter-spacing: 0.06em; flex-shrink: 0; margin-top: 1px;
}
#evalCrit .ece-crit-btn.active .ece-crit-num { color: #0d9488; }
#evalCrit .ece-crit-label { font-size: 12px; font-weight: 700; color: #374151; line-height: 1.4; }
#evalCrit .ece-crit-btn.active .ece-crit-label { color: #0d9488; }

/* Right panel */
#evalCrit .ece-detail {
  flex: 1; border: 1.5px solid #e5e7eb; border-radius: 12px;
  padding: 22px; background: white; min-height: 320px;
}
#evalCrit .ece-detail-num {
  font-size: 10px; font-weight: 800; letter-spacing: 0.08em;
  text-transform: uppercase; color: #0d9488; margin-bottom: 6px;
}
#evalCrit .ece-detail-name {
  font-size: 18px; font-weight: 800; color: #1e1b4b; margin-bottom: 10px;
}
#evalCrit .ece-detail-def {
  font-size: 13px; color: #374151; line-height: 1.7; margin-bottom: 14px;
  padding-bottom: 14px; border-bottom: 1px solid #f1f5f9;
}
#evalCrit .ece-matters-label {
  font-size: 10px; font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.07em; color: #94a3b8; margin-bottom: 6px;
}
#evalCrit .ece-matters-text {
  font-size: 12.5px; color: #374151; line-height: 1.7;
  margin-bottom: 18px; padding-bottom: 16px; border-bottom: 1px solid #f1f5f9;
}

/* Anchors */
#evalCrit .ece-anchors-label {
  font-size: 10px; font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.07em; color: #94a3b8; margin-bottom: 12px;
}
#evalCrit .ece-anchors { display: flex; flex-direction: column; gap: 10px; }

#evalCrit .ece-anchor {
  border-radius: 8px; padding: 12px 15px;
  border-left: 4px solid #e5e7eb;
}
#evalCrit .ece-anchor.r1 { background: #fef2f2; border-left-color: #ef4444; }
#evalCrit .ece-anchor.r3 { background: #fffbeb; border-left-color: #f59e0b; }
#evalCrit .ece-anchor.r5 { background: #f0fdf4; border-left-color: #16a34a; }

#evalCrit .ece-anchor-badge {
  display: inline-flex; align-items: center; gap: 5px;
  font-size: 10px; font-weight: 800; text-transform: uppercase;
  letter-spacing: 0.06em; margin-bottom: 6px;
}
#evalCrit .ece-anchor.r1 .ece-anchor-badge { color: #dc2626; }
#evalCrit .ece-anchor.r3 .ece-anchor-badge { color: #b45309; }
#evalCrit .ece-anchor.r5 .ece-anchor-badge { color: #15803d; }

#evalCrit .ece-anchor-dot {
  width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0;
}
#evalCrit .ece-anchor.r1 .ece-anchor-dot { background: #ef4444; }
#evalCrit .ece-anchor.r3 .ece-anchor-dot { background: #f59e0b; }
#evalCrit .ece-anchor.r5 .ece-anchor-dot { background: #16a34a; }

#evalCrit .ece-anchor-excerpt {
  font-size: 12px; color: #374151; line-height: 1.65;
  font-style: italic; margin-bottom: 5px;
  padding: 6px 8px; background: rgba(255,255,255,0.6);
  border-radius: 5px;
}
#evalCrit .ece-anchor-note { font-size: 11px; color: #6b7280; line-height: 1.6; }
</style>

<p class="ece-intro">Select a criterion from the left to see its definition, why it matters in academic work, and three anchored examples showing what a rating of 1, 3, and 5 looks like in practice.</p>

<div class="ece-layout">
  <div class="ece-list" id="eceCritList"></div>
  <div class="ece-detail" id="eceDetail">
    <p style="font-size: 13px; color: #9ca3af; line-height: 1.7; margin-top: 20px;">Select a criterion on the left to get started.</p>
  </div>
</div>
</div>

<script>
(function() {
const CRITERIA = [
  {
    num: "01", name: "Factual accuracy",
    short: "Are specific claims and statistics correct?",
    def: "The degree to which specific claims, statistics, dates, named studies, and described findings in an AI response are correct and verifiable. This criterion focuses on precision: not whether the general topic is addressed, but whether the specific details can be confirmed against a reliable source.",
    matters: "AI tools generate text by predicting plausible word sequences, not by checking a fact database. This means confident-sounding numerical claims may be invented. In academic work, a single fabricated statistic can lead you to build an argument on a foundation that does not exist — and if discovered, undermines your credibility entirely.",
    anchors: [
      { r: "r1", rating: "1 — Unacceptable", excerpt: "\"A major 2022 Cambridge study found that students using AI weekly scored 38% higher on critical thinking assessments (Cambridge AI Education Institute, 2022).\"", note: "Specific institution, statistic, and year — but the institute does not exist and the statistic cannot be verified. The confidence of the output conceals the fabrication." },
      { r: "r3", rating: "3 — Partial", excerpt: "\"Research suggests that the use of AI tools in education can support learning outcomes, particularly for structured tasks, though effects vary by subject and student group.\"", note: "General direction is broadly supported, but no specific claims are made that could be wrong. Accurate by not committing to anything checkable." },
      { r: "r5", rating: "5 — Strong", excerpt: "\"Large language models generate text through next-token prediction rather than retrieval of factual information (Vaswani et al., 2017). This architecture means they can produce fluent, plausible-sounding text that contains factual errors.\"", note: "Specific, traceable claim with a real citation. The content is accurate and verifiable." }
    ]
  },
  {
    num: "02", name: "Source transparency",
    short: "Are references real, specific, and traceable?",
    def: "The extent to which an AI response clearly attributes claims to identifiable, real, and locatable sources. This includes whether citations are specific enough to retrieve (author, year, title), whether named sources actually exist, and whether the AI distinguishes between its own general knowledge and evidence from cited work.",
    matters: "A source you cannot find is no source at all. AI tools frequently produce citations that look correct — author name, year, journal title — but refer to papers that have never been published. Building on unverifiable references is a form of academic fraud, even if unintentional. You must verify every citation before including it in your work.",
    anchors: [
      { r: "r1", rating: "1 — Unacceptable", excerpt: "\"Multiple peer-reviewed studies across leading universities confirm that late-night studying is consistently less effective than sleep. Researchers agree this effect is universal.\"", note: "No source named at all. 'Researchers agree' and 'multiple studies' are empty authority claims that cannot be followed up." },
      { r: "r3", rating: "3 — Partial", excerpt: "\"According to research from MIT's Digital Learning Lab (2021), spaced repetition outperforms massed practice for long-term retention.\"", note: "A specific-sounding institution and year are named. The claim about spaced repetition is well-supported in the literature — but 'MIT's Digital Learning Lab' is vague and may not correspond to a real publication, making verification difficult." },
      { r: "r5", rating: "5 — Strong", excerpt: "\"The spacing effect — where material studied across multiple sessions is retained better than the same total time in a single session — is one of the most replicated findings in cognitive psychology (Cepeda et al., 2006, Psychological Bulletin).\"", note: "Specific author, year, and journal. Real, traceable, verifiable. The reader can locate this source independently." }
    ]
  },
  {
    num: "03", name: "Task relevance",
    short: "Does the response address what was actually asked?",
    def: "The degree to which an AI response addresses the actual question asked, at the right level of scope, specificity, and format. A response may be accurate and coherent but still score poorly on task relevance if it answers a different or broader question, omits key parts of the task, or provides information in a format the user did not request.",
    matters: "AI tools tend to interpret prompts as invitations to produce polished, complete-looking content. This can mean expanding scope, adding unsolicited advice, or delivering a generic overview when the task required something specific. Including off-topic AI content in academic work suggests you used it without critically checking the output against your actual needs.",
    anchors: [
      { r: "r1", rating: "1 — Unacceptable", excerpt: "Student asks for a three-bullet summary of the limitations of AI plagiarism detection. The AI produces a 500-word essay on the history of plagiarism detection in higher education.", note: "The format is wrong (essay vs. bullets), the scope is wrong (history vs. limitations), and the specific task requirement is ignored entirely." },
      { r: "r3", rating: "3 — Partial", excerpt: "Student asks for the exact APA 7th edition format for citing an AI-generated text. The AI explains when and why it is important to cite AI tools, and ends by noting the format may vary by institution.", note: "Related to the task, but the actual requested format is never provided. The student gets context they didn't ask for, and still lacks what they needed." },
      { r: "r5", rating: "5 — Strong", excerpt: "Student asks for a three-bullet summary of the limitations of AI plagiarism detection. The AI returns exactly three bullets covering: false positive rates, inability to detect paraphrased AI content, and the arms race problem with evolving generation tools.", note: "Matches the exact format, scope, and content requested. Nothing irrelevant is added." }
    ]
  },
  {
    num: "04", name: "Coherence",
    short: "Is the response logically consistent and well-structured?",
    def: "The degree to which an AI response is logically organized, internally consistent, and free from contradictions. A coherent response has a clear structure, each claim supports the overall argument, and the conclusion follows from the evidence presented. It does not contradict itself within the same text.",
    matters: "AI tools generate text sequentially, without a stable 'working memory' of what was already claimed. This can produce contradictions — particularly in longer responses — where an early claim is undermined later in the same text. Incoherent content submitted without review is a clear signal that AI output was not critically examined.",
    anchors: [
      { r: "r1", rating: "1 — Unacceptable", excerpt: "\"AI tools are essential for modern academic research and all students should use them. However, AI tools are unreliable for academic research due to frequent hallucination. Therefore, we recommend using AI to locate and cite academic sources.\"", note: "The same response first endorses AI, then warns against it, then recommends using it for the exact purpose it just warned against. The conclusion contradicts the reasoning." },
      { r: "r3", rating: "3 — Partial", excerpt: "\"Cognitive load theory explains that learning is most effective when working memory is not overwhelmed. Students should therefore use active recall strategies, which reduce cognitive load. This approach has been shown to improve exam performance significantly.\"", note: "The logic works, but the final claim ('significantly') is not supported by anything presented. The structure is reasonable but the conclusion slightly outpaces the evidence given." },
      { r: "r5", rating: "5 — Strong", excerpt: "\"Retrieval practice strengthens long-term retention by forcing the learner to reconstruct knowledge from memory (Roediger & Butler, 2011). This process, unlike passive re-reading, activates the memory consolidation pathways activated during sleep. The implication for exam preparation is that spaced retrieval sessions are more effective than reviewing notes the night before.\"", note: "Clear logical chain from mechanism to implication. Each sentence builds on the previous one. Conclusion follows naturally from the evidence." }
    ]
  },
  {
    num: "05", name: "Critical depth",
    short: "Does the response acknowledge complexity and uncertainty?",
    def: "The degree to which an AI response accurately represents the state of debate on a topic — acknowledging limitations, uncertainties, counterarguments, and conditions under which claims hold or do not hold. A response with strong critical depth distinguishes between established findings and contested claims, and avoids presenting one perspective as the universal truth.",
    matters: "Academic writing requires nuance. Research findings are almost always conditional, contested, or limited in scope. AI tools tend to present information with more certainty than is warranted, because confident-sounding text is statistically more common in their training data. Copy-pasting or lightly editing overconfident AI output will lower the intellectual quality of your work and may misrepresent the actual state of knowledge.",
    anchors: [
      { r: "r1", rating: "1 — Unacceptable", excerpt: "\"Social media is definitively harmful to adolescent mental health. All research confirms that heavy use leads to depression and anxiety. There are no credible arguments to the contrary, and this is now settled science.\"", note: "Multiple absolute claims about a genuinely contested area. Orben & Przybylski (2019) found very small effect sizes; the direction of causality is actively debated. 'Settled science' is false." },
      { r: "r3", rating: "3 — Partial", excerpt: "\"Research suggests that social media may have some negative effects on adolescent mental health, though findings vary and more research may be needed to draw firm conclusions.\"", note: "Hedging language is present ('may,' 'some,' 'suggests') but the response does not engage meaningfully with what the debate actually is, or why findings vary. Vague uncertainty is not the same as informed nuance." },
      { r: "r5", rating: "5 — Strong", excerpt: "\"While correlational studies consistently link heavy social media use with increased anxiety, Orben & Przybylski (2019) found effect sizes comparable to wearing glasses or eating potatoes — statistically significant but practically small. The direction of causality remains contested, and effects appear to differ markedly by platform, use type, and gender.\"", note: "Specific, named counterargument. Distinguishes statistical from practical significance. Identifies the conditions under which the effect varies. This is what calibrated academic uncertainty looks like." }
    ]
  }
];

function renderDetail(idx) {
  const c = CRITERIA[idx];
  const anchorHTML = c.anchors.map(a => `
    <div class="ece-anchor ${a.r}">
      <div class="ece-anchor-badge"><span class="ece-anchor-dot"></span>${a.rating}</div>
      <div class="ece-anchor-excerpt">${a.excerpt}</div>
      <div class="ece-anchor-note">${a.note}</div>
    </div>`).join('');

  document.getElementById('eceDetail').innerHTML = `
    <div class="ece-detail-num">Criterion ${c.num}</div>
    <div class="ece-detail-name">${c.name}</div>
    <div class="ece-detail-def">${c.def}</div>
    <div class="ece-matters-label">Why it matters</div>
    <div class="ece-matters-text">${c.matters}</div>
    <div class="ece-anchors-label">Rating anchors — 1, 3, and 5</div>
    <div class="ece-anchors">${anchorHTML}</div>
  `;
}

function renderList() {
  const list = document.getElementById('eceCritList');
  CRITERIA.forEach((c, i) => {
    const btn = document.createElement('button');
    btn.className = 'ece-crit-btn';
    btn.innerHTML = `<span class="ece-crit-num">${c.num}</span><span class="ece-crit-label">${c.name}</span>`;
    btn.addEventListener('click', () => {
      document.querySelectorAll('#evalCrit .ece-crit-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderDetail(i);
    });
    list.appendChild(btn);
  });
  // Activate first by default
  list.querySelector('.ece-crit-btn').classList.add('active');
  renderDetail(0);
}

renderList();
})();
</script>

---

## The 1–5 rating scale at a glance

<div style="overflow-x: auto; margin: 20px 0 32px 0;">
<table style="width: 100%; border-collapse: collapse; font-size: 13px;">
  <thead>
    <tr style="background: #1e1b4b; color: white;">
      <th style="padding: 10px 16px; text-align: center; font-weight: 700; width: 10%;">Rating</th>
      <th style="padding: 10px 16px; text-align: left; font-weight: 700; width: 18%;">Label</th>
      <th style="padding: 10px 16px; text-align: left; font-weight: 700; width: 72%;">What this means for the criterion</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #e5e7eb;">
      <td style="padding: 11px 16px; text-align: center; font-weight: 800; color: #dc2626;">1</td>
      <td style="padding: 11px 16px; font-weight: 700; color: #374151;">Unacceptable</td>
      <td style="padding: 11px 16px; color: #374151; line-height: 1.65;">The criterion is clearly failed. The problem is significant enough that the content should not be used without substantial revision.</td>
    </tr>
    <tr style="border-bottom: 1px solid #e5e7eb; background: #fafbfc;">
      <td style="padding: 11px 16px; text-align: center; font-weight: 800; color: #f97316;">2</td>
      <td style="padding: 11px 16px; font-weight: 700; color: #374151;">Inadequate</td>
      <td style="padding: 11px 16px; color: #374151; line-height: 1.65;">The criterion is mostly failed, with only minor elements that partially meet it. Major revision is required before the content is usable.</td>
    </tr>
    <tr style="border-bottom: 1px solid #e5e7eb;">
      <td style="padding: 11px 16px; text-align: center; font-weight: 800; color: #d97706;">3</td>
      <td style="padding: 11px 16px; font-weight: 700; color: #374151;">Partial</td>
      <td style="padding: 11px 16px; color: #374151; line-height: 1.65;">The criterion is met in some respects but not others. Specific problems are present alongside genuine strengths. Targeted revision is needed.</td>
    </tr>
    <tr style="border-bottom: 1px solid #e5e7eb; background: #fafbfc;">
      <td style="padding: 11px 16px; text-align: center; font-weight: 800; color: #16a34a;">4</td>
      <td style="padding: 11px 16px; font-weight: 700; color: #374151;">Adequate</td>
      <td style="padding: 11px 16px; color: #374151; line-height: 1.65;">The criterion is mostly met with minor issues. The content is usable with light editing or verification.</td>
    </tr>
    <tr style="border-bottom: 1px solid #e5e7eb;">
      <td style="padding: 11px 16px; text-align: center; font-weight: 800; color: #0d9488;">5</td>
      <td style="padding: 11px 16px; font-weight: 700; color: #374151;">Strong</td>
      <td style="padding: 11px 16px; color: #374151; line-height: 1.65;">The criterion is fully met. No significant problems are present. The content meets the standard a critical reader would expect.</td>
    </tr>
  </tbody>
</table>
</div>

---

## Practice: evaluate this AI response

Now apply the criteria to a complete AI response. Read the scenario and output below, then decide what you would rate it on each of the five criteria — and why.

<div style="background: #f8fafc; border: 1px solid #e5e7eb; border-radius: 0 12px 12px 0; border-left: 4px solid #0d9488; padding: 18px 22px; margin-bottom: 20px;">
  <div style="font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #0d9488; margin-bottom: 8px;">Student scenario</div>
  <div style="font-size: 15px; font-weight: 800; color: #1e1b4b; margin-bottom: 8px;">Abel, 1st-year student</div>
  <div style="font-size: 13px; color: #374151; line-height: 1.75;">Abel is writing a study advice essay and asks ChatGPT: <strong>"What does research say about the effects of sleep deprivation before exams on memory? I need this for my study advice essay."</strong></div>
</div>

<div style="background: #1e1b4b; border-radius: 14px; padding: 22px; margin-bottom: 24px; position: relative;">
  <div style="font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.07em; color: #a5b4fc; margin-bottom: 12px; display: flex; justify-content: space-between; align-items: center;">
    <span>AI response — ChatGPT</span>
    <span style="background: #2d2566; color: #a5b4fc; padding: 2px 8px; border-radius: 10px; font-size: 10px;">Simulated output</span>
  </div>
  <div style="font-size: 13.5px; color: #f1f5f9; line-height: 1.85;">
    <p style="margin-bottom: 14px;">Research clearly shows that sleeping the night before an exam is significantly more effective than late-night cramming. A landmark 2021 study from the Sleep Research Institute at Cambridge University followed 840 students across twelve universities and found that those who slept eight hours before an exam scored 34% higher than students who instead spent those hours reviewing material. This effect held across all subject areas tested.</p>
    <p style="margin-bottom: 14px;">The neuroscience behind this is well understood. During sleep, the hippocampus transfers encoded memories to the neocortex for long-term storage — a process called memory consolidation. Cramming disrupts this by elevating cortisol levels, which directly impair hippocampal function. Matthew Walker (2017) explains in <em>Why We Sleep</em> that prolonged sleep deprivation causes permanent neuronal damage that cannot be reversed by later recovery sleep.</p>
    <p>For your essay, the case is clear: any student who sacrifices sleep for extra study time is actively harming their academic results. All peer-reviewed evidence supports this conclusion, and there are no credible contrary findings.</p>
  </div>
</div>

<div style="display: flex; align-items: flex-start; gap: 12px; background: #fef3c7; border: 1px solid #fde68a; border-radius: 10px; padding: 14px 16px; margin-bottom: 28px;">
  <div style="font-size: 18px; flex-shrink: 0;">🔍</div>
  <div style="font-size: 13px; color: #374151; line-height: 1.65;"><strong>Before you continue:</strong> mentally assign a 1–5 rating to each of the five criteria. Note where you see clear strengths and where you see problems. Then take the knowledge check to compare your ratings with the model evaluation.</div>
</div>

<div style="display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 32px;">
  <a href="navigator/evaluate-assess.html" style="flex: 1; min-width: 220px; display: block; text-decoration: none; border: 2px solid #6366f1; border-radius: 10px; padding: 18px 20px; background: #f8f8ff; text-align: center;">
    <div style="font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.07em; color: #6366f1; margin-bottom: 6px;">AI Navigator</div>
    <div style="font-size: 14px; font-weight: 700; color: #1e1b4b; margin-bottom: 6px;">Guided knowledge check</div>
    <div style="font-size: 12px; color: #64748b; line-height: 1.6;">Rate three criteria with hints and worked explanations. Designed for those building their evaluation skills.</div>
  </a>
  <a href="pilot/evaluate-assess.html" style="flex: 1; min-width: 220px; display: block; text-decoration: none; border: 2px solid #d97706; border-radius: 10px; padding: 18px 20px; background: #fffbeb; text-align: center;">
    <div style="font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.07em; color: #d97706; margin-bottom: 6px;">AI Pilot</div>
    <div style="font-size: 14px; font-weight: 700; color: #1e1b4b; margin-bottom: 6px;">Advanced knowledge check</div>
    <div style="font-size: 12px; color: #64748b; line-height: 1.6;">Rate all five criteria without guidance, identify reference gaps, and reflect on how the response could be improved.</div>
  </a>
</div>

---

## After you evaluate: document your AI use

Once you have evaluated and edited AI output, the next step is transparent documentation. If you decide to use any part of the AI response — even a revised version — you are expected to disclose this in your assignment submission.

<div style="margin: 20px 0 40px 0;">
  <a href="disclosure.html" style="display: inline-flex; align-items: center; gap: 10px; text-decoration: none; border: 1.5px solid #0ea5e9; border-radius: 10px; padding: 16px 20px; background: #f0f9ff;">
    <div style="font-size: 20px;">📋</div>
    <div>
      <div style="font-size: 13px; font-weight: 700; color: #1e1b4b; margin-bottom: 2px;">AI disclosure builder &rsaquo;</div>
      <div style="font-size: 12px; color: #64748b;">Generate a structured statement documenting how you used and evaluated AI in your work.</div>
    </div>
  </a>
</div>

---

<footer style="text-align: center; margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #9ca3af; font-size: 12px;">
  <p>Academic AI Integrity e-Learning Platform | © 2026 Vrije Universiteit Amsterdam</p>
</footer>
