# Use: prompt engineering explorer

<div style="margin-bottom: 20px;">
  <button onclick="window.location.href='../'" style="padding: 10px 20px; font-size: 14px; background-color: #666; color: white; border: none; border-radius: 5px; cursor: pointer;">
    ← Back to home
  </button>
</div>

---

<style>
    /* === Filter sections === */
    .pe-wrap .filter-section { margin-bottom: 18px; }
    .pe-wrap .filter-label {
        font-size: 11px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: #94a3b8;
        margin-bottom: 10px;
    }
    .pe-wrap .pill-row { display: flex; flex-wrap: wrap; gap: 8px; }

    /* Task pills */
    .pe-wrap .task-pill {
        padding: 8px 16px;
        border-radius: 24px;
        border: 2px solid #e2e8f0;
        background: white;
        color: #475569;
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s;
        font-family: inherit;
        line-height: 1.4;
    }
    .pe-wrap .task-pill:hover { border-color: #667eea; color: #667eea; }
    .pe-wrap .task-pill.active { background: #1e1b4b; border-color: #1e1b4b; color: white; }

    /* Technique pills */
    .pe-wrap .tech-pill {
        padding: 7px 15px;
        border-radius: 20px;
        border: 2px solid #e2e8f0;
        background: white;
        color: #475569;
        font-size: 12px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s;
        font-family: inherit;
    }
    .pe-wrap .tech-pill:hover { border-color: var(--c, #667eea); color: var(--c, #667eea); }
    .pe-wrap .tech-pill.active { background: var(--c, #667eea); border-color: var(--c, #667eea); color: white; }

    .pe-wrap .tp-structured  { --c: #3b82f6; }
    .pe-wrap .tp-rolebased   { --c: #8b5cf6; }
    .pe-wrap .tp-contextual  { --c: #0d9488; }
    .pe-wrap .tp-cot         { --c: #f59e0b; }
    .pe-wrap .tp-open        { --c: #ec4899; }

    .pe-wrap hr.divider { border: none; border-top: 1px solid #f1f5f9; margin: 6px 0 20px; }

    /* === Content area === */
    .pe-wrap .content-area { min-height: 200px; }
    @keyframes pefadeUp {
        from { opacity: 0; transform: translateY(10px); }
        to   { opacity: 1; transform: translateY(0); }
    }

    /* Intro card */
    .pe-wrap .intro-card {
        border-left: 4px solid var(--tc, #667eea);
        padding: 12px 16px;
        background: #f8fafc;
        border-radius: 0 8px 8px 0;
        margin-bottom: 20px;
    }
    .pe-wrap .intro-card .tech-name {
        font-size: 11px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--tc, #667eea);
        margin-bottom: 4px;
    }
    .pe-wrap .intro-card .intro-text { font-size: 13px; color: #374151; line-height: 1.6; }

    /* Prompt option buttons */
    .pe-wrap .prompts-label {
        font-size: 11px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: #94a3b8;
        margin-bottom: 10px;
    }
    .pe-wrap .prompt-options { display: flex; flex-direction: column; gap: 10px; }
    .pe-wrap .prompt-option {
        border: 1px solid #e2e8f0;
        border-left: 4px solid var(--tc, #667eea);
        border-radius: 0 10px 10px 0;
        padding: 14px 16px;
        cursor: pointer;
        text-align: left;
        background: white;
        font-family: inherit;
        transition: background 0.18s, box-shadow 0.18s;
        width: 100%;
    }
    .pe-wrap .prompt-option:hover { background: #f8fafc; box-shadow: 0 2px 10px rgba(0,0,0,0.06); }
    .pe-wrap .prompt-option.active {
        background: color-mix(in srgb, var(--tc, #667eea) 8%, white);
        border-left-color: var(--tc, #667eea);
        border-color: var(--tc, #667eea);
        box-shadow: 0 2px 10px rgba(0,0,0,0.08);
    }
    .pe-wrap .prompt-option-label {
        font-size: 13px;
        font-weight: 700;
        color: #1e1b4b;
        margin-bottom: 4px;
    }
    .pe-wrap .prompt-option-preview {
        font-size: 12px;
        color: #94a3b8;
        font-style: italic;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        line-height: 1.5;
    }
    .pe-wrap .prompt-option-cta {
        display: flex;
        justify-content: flex-end;
        margin-top: 6px;
    }
    .pe-wrap .prompt-option-cta span {
        font-size: 11px;
        font-weight: 700;
        color: var(--tc, #667eea);
        text-transform: uppercase;
        letter-spacing: 0.04em;
    }

    /* === Chat view === */
    .pe-wrap .chat-view { display: none; }
    .pe-wrap .chat-view.visible { display: block; animation: pefadeUp 0.25s ease; }
    .pe-wrap .chat-view-separator { border: none; border-top: 1px solid #f1f5f9; margin: 18px 0 16px; }

    .pe-wrap .chat-window {
        background: #f8fafc;
        border-radius: 12px;
        padding: 20px 16px;
        margin-bottom: 14px;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
    .pe-wrap .chat-msg { max-width: 84%; }
    .pe-wrap .chat-msg.user { align-self: flex-end; }
    .pe-wrap .chat-msg.ai   { align-self: flex-start; }

    .pe-wrap .msg-label {
        font-size: 10px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: #94a3b8;
        margin-bottom: 4px;
    }
    .pe-wrap .chat-msg.user .msg-label { text-align: right; }

    .pe-wrap .msg-bubble {
        padding: 12px 16px;
        border-radius: 14px;
        font-size: 13px;
        line-height: 1.7;
    }
    .pe-wrap .chat-msg.user .msg-bubble {
        color: white;
        border-bottom-right-radius: 4px;
    }
    .pe-wrap .chat-msg.ai .msg-bubble {
        background: white;
        color: #374151;
        border: 1px solid #e2e8f0;
        border-bottom-left-radius: 4px;
    }

    .pe-wrap .typing-indicator {
        align-self: flex-start;
        padding: 10px 16px;
        background: white;
        border: 1px solid #e2e8f0;
        border-radius: 14px;
        border-bottom-left-radius: 4px;
    }
    .pe-wrap .typing-dots { display: flex; gap: 4px; align-items: center; }
    .pe-wrap .typing-dot {
        width: 6px; height: 6px;
        background: #cbd5e1;
        border-radius: 50%;
        animation: tdBounce 1.2s infinite;
    }
    .pe-wrap .typing-dot:nth-child(2) { animation-delay: 0.2s; }
    .pe-wrap .typing-dot:nth-child(3) { animation-delay: 0.4s; }
    @keyframes tdBounce {
        0%, 60%, 100% { transform: translateY(0); }
        30% { transform: translateY(-5px); }
    }

    .pe-wrap .chat-actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 8px;
    }
    .pe-wrap .sim-note { font-size: 11px; color: #94a3b8; font-style: italic; flex: 1; min-width: 160px; }
    .pe-wrap .btn-copy {
        padding: 7px 14px;
        border-radius: 7px;
        font-size: 12px;
        font-weight: 600;
        cursor: pointer;
        font-family: inherit;
        border: none;
        transition: all 0.2s;
        flex-shrink: 0;
        background: #f1f5f9;
        color: #475569;
    }
    .pe-wrap .btn-copy:hover { background: #e2e8f0; }

    /* Empty state */
    .pe-wrap .empty-state { text-align: center; padding: 40px 20px; color: #cbd5e1; font-size: 14px; }

    /* === Audience toggle + intro === */
    .pe-wrap .audience-toggle { display: flex; gap: 8px; margin-bottom: 18px; }
    .pe-wrap .audience-btn {
        padding: 7px 18px;
        border-radius: 20px;
        border: 1.5px solid #e2e8f0;
        background: white;
        color: #475569;
        font-size: 12px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.18s;
        font-family: inherit;
    }
    .pe-wrap .audience-btn:hover { border-color: #667eea; color: #667eea; }
    .pe-wrap .audience-btn.active { background: #1e1b4b; border-color: #1e1b4b; color: white; }

    .pe-wrap .intro-section {
        background: #f8fafc;
        border: 1px solid #e2e8f0;
        border-left: 4px solid #667eea;
        border-radius: 0 12px 12px 0;
        padding: 18px 20px;
        margin-bottom: 28px;
        font-size: 13px;
        color: #374151;
        line-height: 1.75;
    }
    .pe-wrap .intro-section p { margin-bottom: 14px; }
    .pe-wrap .intro-section p:last-child { margin-bottom: 0; }
    .pe-wrap .intro-section a { color: #667eea; font-weight: 600; }
    .pe-wrap .intro-section a:hover { opacity: 0.8; }
    .pe-wrap .intro-panel { display: none; }
    .pe-wrap .intro-panel.active { display: block; animation: pefadeUp 0.2s ease; }

    /* Source note */
    .pe-wrap .source-note {
        margin-top: 28px;
        font-size: 12px;
        color: #94a3b8;
        text-align: center;
        line-height: 1.6;
        border-top: 1px solid #f1f5f9;
        padding-top: 16px;
    }

    @media (max-width: 600px) {
        .pe-wrap .task-pill { font-size: 12px; padding: 7px 13px; }
        .pe-wrap .chat-msg { max-width: 100%; }
    }
</style>

<div class="pe-wrap">

    <!-- Audience toggle -->
    <div class="audience-toggle">
        <button class="audience-btn active" onclick="peSwitchAudience('student', this)">Student</button>
        <button class="audience-btn" onclick="peSwitchAudience('teacher', this)">Teacher</button>
    </div>

    <div class="intro-section">
        <div class="intro-panel active" id="pe-intro-student">
            <p>To use AI responsibly in your studies, it's important to first think critically about your own approach. Before turning to any tool, you should reflect on how <strong>you</strong> would tackle the assignment: how you would get started, what steps you would take, and where you might encounter challenges. This helps you understand your own thinking process and identify the areas where support could be useful.</p>
            <p>Once you've explored your own approach, you can consider what kind of AI use is allowed within the course and how AI might help with the difficulties you identified. In this module, you will be introduced to different types of prompt usage &mdash; such as prompting for structure, early-stage literature exploration, identifying a research gap or content development &mdash; that can help you use AI in a thoughtful and constructive way.</p>
            <p><strong>Tips on prompting:</strong> <a href="https://vu-education-lab.github.io/AI-Literacy-Companion-VU/#how-to-use-generative-ai-so-that-it-works-for-you" target="_blank">How to use generative AI so that it works for you</a></p>
        </div>
        <div class="intro-panel" id="pe-intro-teacher">
            <p>To help students use AI responsibly in higher education, it's important that they begin by thinking critically about their own approach before turning to any tools. In this activity, students first reflect on how <strong>they</strong> would tackle the assignment independently: how they would start, what steps they would take, and where they might struggle. This initial reflection makes their learning process visible and helps them recognise the areas in which support&mdash;whether human or AI&mdash;might be beneficial.</p>
            <p>After students explore their own approach, they consider what forms of AI use are permitted within your course and how AI could support the challenges they identified. Once this foundation is in place, they are introduced to a set of example prompts aimed at different types of academic support&mdash;such as structuring work, exploring literature, identifying a research gap, or developing content. This gives students a structured and responsible way to integrate AI into their learning while maintaining academic integrity and critical thinking.</p>
            <p><strong>Tips on prompting:</strong> <a href="https://vu-education-lab.github.io/AI-Literacy-Companion-VU/#how-to-use-generative-ai-so-that-it-works-for-you" target="_blank">How to use generative AI so that it works for you</a></p>
        </div>
    </div>

    <p style="font-size:12px; color:#94a3b8; margin-bottom:18px;">The prompt examples below are based on Table&nbsp;1 in: Qian, Y. (2025). Prompt Engineering in Education: A Systematic Review of Approaches and Educational Applications. <em>Journal of Educational Computing Research, 63</em>(7-8), 1782&ndash;1818. <a href="https://doi.org/10.1177/07356331251365189" style="color:#a5b4fc;" target="_blank">https://doi.org/10.1177/07356331251365189</a></p>

    <div class="filter-section">
        <div class="filter-label">What are you working on?</div>
        <div class="pill-row" id="pe-task-row"></div>
    </div>

    <div class="filter-section">
        <div class="filter-label">What type of prompt do you need?</div>
        <div class="pill-row" id="pe-tech-row"></div>
    </div>

    <hr class="divider">

    <div class="content-area" id="pe-content-area">
        <div class="empty-state">Select a task and a technique above to see example prompts.</div>
    </div>

    <p class="source-note">
        The prompt examples in this explorer are based on Table&nbsp;1 from: Qian, Y. (2025). Prompt Engineering in Education: A Systematic Review of Approaches and Educational Applications.
        <em>Journal of Educational Computing Research, 63</em>(7-8), 1782&ndash;1818.
        <a href="https://doi.org/10.1177/07356331251365189" style="color:#a5b4fc;" target="_blank">https://doi.org/10.1177/07356331251365189</a>
    </p>

    <div style="margin-top:28px; border-top:1px solid #f1f5f9; padding-top:22px; display:flex; justify-content:flex-end;">
        <a href="use-assess.html" style="
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            text-decoration: none;
            padding: 12px 22px;
            border-radius: 10px;
            font-size: 14px;
            font-weight: 700;
            box-shadow: 0 4px 14px rgba(102,126,234,0.35);
            transition: opacity 0.2s;
        " onmouseover="this.style.opacity='0.88'" onmouseout="this.style.opacity='1'">
            Test your understanding &rsaquo;
        </a>
    </div>

</div>

<script>
/* ============================================================
   AUDIENCE TOGGLE
   ============================================================ */
function peSwitchAudience(audience, btn) {
    document.querySelectorAll('.pe-wrap .audience-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.pe-wrap .intro-panel').forEach(p => p.classList.remove('active'));
    document.getElementById('pe-intro-' + audience).classList.add('active');
}

/* ============================================================
   CONFIGURATION
   ============================================================ */
const PE_TASKS = [
    { id: 'ideas',      label: 'Idea generation',     sub: 'Research gaps & questions' },
    { id: 'planning',   label: 'Structure & planning', sub: 'Workplans & assessment structure' },
    { id: 'literature', label: 'Literature review',    sub: 'Finding & synthesising sources' },
    { id: 'writing',    label: 'Content development',  sub: 'Writing & refining text' },
];

const PE_TECHNIQUES = [
    { id: 'structured', label: 'Structured',    sub: 'Guide with examples or constraints',   cls: 'tp-structured' },
    { id: 'rolebased',  label: 'Role-based',    sub: 'Ask AI to assume an identity',          cls: 'tp-rolebased'  },
    { id: 'contextual', label: 'Add context',   sub: 'Ground AI in your specific material',   cls: 'tp-contextual' },
    { id: 'cot',        label: 'Step-by-step',  sub: 'Break the task into a reasoning chain', cls: 'tp-cot'        },
    { id: 'open',       label: 'Open / direct', sub: 'Ask directly without scaffolding',      cls: 'tp-open'       },
];

const PE_TECH_COLOURS = {
    structured: '#3b82f6', rolebased: '#8b5cf6', contextual: '#0d9488', cot: '#f59e0b', open: '#ec4899',
};

/* ============================================================
   DATA
   ============================================================ */
const PE_DATA = {

    /* ── IDEA GENERATION ─────────────────────────────────── */
    'ideas-structured': {
        intro: 'Use worked examples or output constraints to guide AI toward a research gap or question in exactly the format you need.',
        prompts: [
            {
                chip: 'Use a worked example to model a research gap',
                full: `Here are two examples of clearly stated research gaps:
1. "While X has been well studied, the conditions under which Y affects Z remain underexplored."
2. "Research has established A, but the role of B in C — particularly for [population] — is absent from the literature."

Using this format, write a research gap statement for the topic of [your topic here].`,
                response: `Here is a research gap statement following your format:

"While substantial research has examined generative AI as a writing aid in higher education, the mechanisms by which AI-assisted drafting affects students' long-term development of argumentative voice and disciplinary writing identity remain poorly understood. Most studies evaluate output quality at a single point in time, overlooking how repeated AI interaction shapes students' sense of authorship across an academic year."

You can sharpen this by specifying a population (e.g. first-year students, STEM disciplines) or a setting (e.g. high-stakes assessment vs. low-stakes practice). The key structural elements are: what is established, what that does not tell us, and why the gap matters.`
            },
            {
                chip: 'Generate testable research questions in a fixed format',
                full: `Generate three specific, empirically testable research questions about [your topic]. Format each as:
— Question
— Why it matters
— What evidence would answer it`,
                response: `1. To what extent does prompt scaffolding training improve the quality of student-generated research questions in undergraduate methodology courses?
Why it matters: Educators need evidence that teaching prompting has direct learning benefits, not just output improvements.
Evidence needed: Pre/post comparison of research question quality, assessed blindly, with and without scaffolding instruction.

2. How do different levels of AI use disclosure in submitted work affect peer evaluators' judgments of argument quality?
Why it matters: Transparency norms are contested; this would directly inform institutional policy.
Evidence needed: Experimental study varying disclosure conditions in a blind peer-review task.

3. What disciplinary differences exist in students' willingness to use AI for early-stage idea generation?
Why it matters: A uniform policy may not account for discipline-specific norms or identity concerns.
Evidence needed: Cross-disciplinary survey using validated attitude scales.`
            }
        ]
    },

    'ideas-rolebased': {
        intro: 'Ask AI to act as a supervisor, peer reviewer, or domain expert to get targeted, critical input on your research question.',
        prompts: [
            {
                chip: 'Ask AI to act as a supervisor probing your question',
                full: `Act as a senior researcher in [your field] reviewing a draft research question. Ask me three probing questions that expose weaknesses I should address before writing my proposal.`,
                response: `As a senior researcher reviewing your draft, here are three probing questions:

1. Whose problem is this, precisely? You have not identified who specifically needs this answer — or why they cannot derive it from existing literature. Make the stakeholder explicit.

2. You use the word "impact." Does your design allow you to establish a causal claim, or are you actually investigating a correlation? If the latter, your research question needs to reflect that accurately.

3. Which theoretical model does your study extend or challenge? A defensible research question should be anchored in a specific theoretical gap, not just a practical observation. What existing framework does your work engage with?`
            },
            {
                chip: 'Ask AI to act as a critical peer reviewer',
                full: `You are a critical peer reviewer with expertise in [your field]. I am sharing my draft research question. Identify its three main weaknesses — scope, feasibility, and theoretical grounding — and suggest a revised version.

My draft question: [paste your question here]`,
                response: `Here is my critical assessment:

Weakness 1 — Scope: The question is too broad for a single study. "How does AI affect learning?" spans dozens of variables. Narrow it to a specific outcome, a defined population, and a specific condition or tool.

Weakness 2 — Feasibility: The question implies longitudinal data collection over multiple years, but your available timeline is one semester. Revise to match the design you can actually execute.

Weakness 3 — Theoretical grounding: The question does not engage with any existing framework. Adding "building on self-regulated learning theory" or similar would strengthen its academic legitimacy.

Revised suggestion: "How does the frequency of AI-generated formative feedback on draft essays affect argumentation quality in final submissions among first-year social science undergraduates?"`
            }
        ]
    },

    'ideas-contextual': {
        intro: 'Paste your own abstracts or reading notes so AI can identify gaps and generate questions grounded directly in what you have already read.',
        prompts: [
            {
                chip: 'Extract research questions from an abstract you paste in',
                full: `Read the following abstract carefully.
(1) Identify what the authors flag as limitations or future directions.
(2) Reformulate each into a concrete, testable research question.

[Paste abstract here]`,
                response: `From your abstract, I can identify three limitations the authors flag — and reformulate each as a research question:

1. "Limited to a single institution" → To what extent do these findings replicate across institutions that differ in resource level, student demographics, and academic culture?

2. "Self-reported data may not reflect actual behaviour" → How closely do students' self-reported AI usage patterns correspond to their observed behaviour in assessed work, and what factors explain the gap?

3. "Future work should examine long-term effects" → How do students' attitudes toward AI-assisted writing change across three years of a degree programme, and what predicts growing acceptance versus resistance?

The third question has the least coverage in existing literature and is the most tractable as a medium-scale longitudinal study.`
            },
            {
                chip: 'Find gaps at the intersection of your reading themes',
                full: `I have been reviewing literature on [your topic] and keep encountering three recurring themes: [Theme 1], [Theme 2], and [Theme 3].

What research questions sit at the intersection of these themes that have not yet been adequately addressed?`,
                response: `At the intersection of your three themes, several under-explored questions emerge:

Theme 1 × Theme 2: Does [Theme 1] moderate the relationship between [Theme 2] and student outcomes — and has this interaction been studied empirically, or only theorised?

Theme 2 × Theme 3: What institutional conditions enable [Theme 2] to align with [Theme 3], and what structural barriers prevent it?

All three together: Is there a unified theoretical framework that accounts for all three simultaneously, or do current models treat them as independent? If no integrative model exists, that absence is itself a significant research gap.

The most promising direction appears to be the lack of an integrative model — this is where your research question could make the clearest contribution.`
            }
        ]
    },

    'ideas-cot': {
        intro: 'Walk AI — and yourself — through a structured reasoning sequence to surface gaps you might not spot by browsing literature alone.',
        prompts: [
            {
                chip: 'Step-by-step gap identification from first principles',
                full: `Let's identify a research gap step by step for the topic of [your topic].

Step 1: Summarise what is well established in this field.
Step 2: Identify what is actively debated or contested.
Step 3: Identify what has not yet been studied.
Step 4: Formulate one research question that targets the gap in Step 3.`,
                response: `Step 1 — Well established: It is agreed that formative feedback improves writing quality, that AI can generate feedback at scale, and that prompt design significantly shapes AI output.

Step 2 — Actively debated: Whether AI-generated feedback is as effective as instructor feedback remains contested. Studies disagree on whether AI captures disciplinary nuance and rhetorical intent.

Step 3 — Not yet studied: The effect of AI feedback on students' metacognitive awareness — whether students develop a self-regulating stance toward their writing through repeated AI interaction — has received very little empirical attention.

Step 4 — Research question: "Does repeated engagement with AI-generated feedback on draft essays develop metacognitive writing awareness in undergraduate students, compared with instructor feedback alone?"`
            },
            {
                chip: 'Stress-test your hypothesis to sharpen the question',
                full: `Think step by step: what would need to be true for the following hypothesis to be wrong? What evidence would disconfirm it? Use this to refine it into a more precise and testable research question.

Hypothesis: [state your working hypothesis here]`,
                response: `For your hypothesis to be wrong, at least one of the following would need to hold:

— The effect you predict may only emerge under specific conditions — moderators you have not yet specified.
— The causal direction may be reversed: what you expect to follow from X may actually predict X.
— A third, unmeasured variable may explain both, making their relationship spurious.

Disconfirming evidence would include: a null result in a well-powered study; an effect that appears only in specific subgroups; or consistent null results across replications.

Refined research question: "Under what conditions does [X] predict [Y], and does this relationship hold across [relevant variation]?"

This version builds in scope conditions and makes boundary conditions explicit — more honest about what you can actually test, and more defensible in a thesis or proposal.`
            }
        ]
    },

    'ideas-open': {
        intro: 'A direct question works well when you are at the very start and want to map the terrain before narrowing your focus.',
        prompts: [
            {
                chip: 'Quick scan: what is under-researched in your field?',
                full: `What are the most under-researched topics in [your field] right now?`,
                response: `Several areas appear consistently underrepresented in recent literature:

1. Equity and access: Most studies sample from well-resourced, Western universities. How AI tools interact with educational equity — across language backgrounds, disabilities, or under-resourced institutions — is largely unstudied.

2. Long-term effects: Almost all studies are short-term interventions. Longitudinal effects of AI integration on disciplinary identity, critical thinking, and academic confidence across a full degree programme are unknown.

3. Student reasoning about integrity: How students reason about the boundary between legitimate AI assistance and outsourcing cognitive work — and how this varies by discipline and culture — has rarely been studied empirically.

4. Instructor adaptation: How instructors redesign assessments in response to AI availability, and what supports or hinders that adaptation, remains an open area.

Each of these would support a feasible empirical study at master's or doctoral level.`
            },
            {
                chip: 'Generate questions scoped for a master\'s thesis',
                full: `Give me five possible research questions about [your topic] that are realistically scoped for a master's thesis — specific, feasible within one year, and connected to an actual gap in the literature.`,
                response: `Here are five questions scoped for a master's thesis:

1. How do undergraduate students in [discipline] describe the boundary between acceptable and unacceptable AI use in assessed work, and how do descriptions vary by year of study?

2. Does prompt scaffolding training improve the quality of AI-generated feedback on student essays, as evaluated by instructors blind to the experimental condition?

3. How does a mandatory AI disclosure requirement affect students' willingness to use AI tools in writing assignments?

4. What criteria do students apply when evaluating the quality of AI-generated responses, and how do these align with instructor expectations?

5. To what extent do the AI use policies of European universities reflect evidence-based principles from the educational technology literature?

Questions 1, 3, and 4 are the most feasible for a one-year project and require no experimental manipulation — a well-designed survey or interview study would suffice.`
            }
        ]
    },

    /* ── STRUCTURE & PLANNING ─────────────────────────────── */
    'planning-structured': {
        intro: 'Use examples or output constraints to get AI to generate a work plan or assessment outline in the exact format and detail you need.',
        prompts: [
            {
                chip: 'Use a worked example to model a work plan',
                full: `Here is an example of a well-structured week-by-week work plan:
Week 1–2: Literature review — identify 20 key sources, write annotated bibliography
Week 3–4: Methodology — finalise design, prepare instruments
Week 5–8: Data collection
Week 9–10: Analysis
Week 11–12: Writing and revision

Using this structure, create a detailed work plan for a [describe your project] to be completed in [X weeks].`,
                response: `Here is a work plan for your project:

Week 1–2: Scope and literature
— Confirm research question and scope with supervisor
— Conduct systematic search across three databases
— Read and annotate 15–20 core sources

Week 3–4: Methodology design
— Select and justify research design
— Develop data collection instrument
— Submit ethics documentation if required

Week 5–7: Data collection
— Recruit participants and collect data
— Transcribe or clean raw data

Week 8–9: Analysis
— Code data using your chosen framework
— Identify and verify key patterns or themes
— Discuss emerging findings with supervisor

Week 10–11: Writing
— Draft results and discussion sections
— Integrate literature into your argument

Week 12: Revision and submission
— Incorporate supervisor feedback
— Final proofread and formatting check
— Submit with one day's margin`
            },
            {
                chip: 'Generate a numbered section outline for an assessment',
                full: `Create a detailed outline for a [type of assessment] on [your topic]. It should be approximately [word count] words and address these learning outcomes: [list outcomes].

Present the outline as a numbered list of sections, each with one sentence describing its purpose.`,
                response: `Here is a structured outline for your assessment:

1. Introduction (approx. 300 words)
Purpose: Frame the topic, state the central argument, and signpost the structure.

2. Conceptual background (approx. 500 words)
Purpose: Define key concepts and situate them within relevant theoretical literature.

3. Review of evidence (approx. 800 words)
Purpose: Critically evaluate the empirical evidence, identifying agreements, contradictions, and gaps.

4. Analysis and argument (approx. 700 words)
Purpose: Develop your original argument by synthesising the evidence with the theoretical framework.

5. Implications and limitations (approx. 300 words)
Purpose: Discuss what your argument means for practice or policy, and acknowledge what you cannot claim.

6. Conclusion (approx. 200 words)
Purpose: Restate the argument, synthesise the evidence chain, and close with a forward-looking statement.

Note: Adjust section lengths proportionally to your actual word limit.`
            }
        ]
    },

    'planning-rolebased': {
        intro: 'Ask AI to act as a project manager, academic supervisor, or writing coach to get planning advice that is targeted to your situation and concerns.',
        prompts: [
            {
                chip: 'Ask AI to act as a project manager',
                full: `Act as an experienced academic project manager. I am a [year of study] student writing a [type of assessment] on [topic], due in [X weeks]. My biggest concern is [e.g. time management / not knowing where to start / balancing depth and breadth].

Help me create a realistic, week-by-week plan that accounts for this concern.`,
                response: `As your project manager, here is a plan built around your concern:

Key principle: Protect writing time first. Most students underestimate revision — I have budgeted two full weeks for it at the end.

Week 1: Orientation
— Re-read the brief and highlight the marking criteria
— Draft one sentence: "My central argument is..."

Week 2–3: Reading
— Read strategically — introduction, conclusion, key sections only unless the source is central
— Take notes using one template: claim / evidence / relevance to your argument

Week 4: Outline
— Write a detailed section-by-section outline
— Share with a peer or tutor before writing a single paragraph

Week 5–6: First draft
— Write fast and imperfectly — the goal is a complete draft, not a polished one

Week 7–8: Revision
— Pass 1: argument and structure
— Pass 2: evidence and citation
— Pass 3: language and formatting

Risk: Week 4 is your critical checkpoint. If your outline is weak, fix the argument before you start writing.`
            },
            {
                chip: 'Ask AI to review your outline as a supervisor',
                full: `You are an academic supervisor reviewing a draft outline. I will share my structure. Tell me: (1) what is missing, (2) what is in the wrong order, and (3) what I should cut.

My outline: [paste your outline here]`,
                response: `Here is my review of your outline:

1. What is missing:
There is no explicit section establishing your theoretical framework. You move from background directly to methodology, leaving the reader without the conceptual tools to interpret your analysis. Add a section positioning your work within a relevant theoretical model.

Your conclusion is a one-liner. A strong conclusion needs to restate the argument, synthesise the evidence chain, and open onto broader implications. Plan at least 200 words.

2. What is in the wrong order:
Your methodology section appears before your literature review. Readers need to understand the state of the field before they can evaluate your design choices. Move the literature review earlier.

3. What to cut:
Your historical background section covers 40 years but only the last 10 are relevant to your argument. Condense to two or three sentences in the introduction and reclaim that space for analysis.`
            }
        ]
    },

    'planning-contextual': {
        intro: 'Paste your assignment brief, constraints, or timetable so AI can give advice that is genuinely tailored to your specific situation.',
        prompts: [
            {
                chip: 'Paste your brief to get a structure and effort guide',
                full: `Here are the requirements for my assessment:
[Paste your assignment brief or marking criteria here]

Based on these, suggest: (1) a logical structure, (2) how to distribute effort across sections, and (3) the top three mistakes to avoid given these specific criteria.`,
                response: `Based on your brief:

1. Logical structure:
Your criteria emphasise critical evaluation over description, so I recommend a problem–argument–evidence structure rather than a topic-by-topic overview. Decide your central claim first, then organise sections to build toward it.

Suggested structure: Introduction → Conceptual stakes → Evaluation of evidence → Your analytical position → Implications → Conclusion

2. Effort distribution:
Your criteria weight critical argument at 40% and evidence use at 30%. Spend 60–70% of your time on the evaluation and analysis sections. Introduction and conclusion together should not exceed 15% of total effort.

3. Top three mistakes to avoid:
— Describing sources instead of evaluating them (your criteria explicitly penalise this)
— Treating the word count as a target to fill rather than a constraint to work within
— Saving your argument for the end — state it in the introduction and signal it throughout`
            },
            {
                chip: 'Plan around your other commitments',
                full: `I need to plan this [assessment type] over the next [X weeks]. My constraints are: [e.g. exam in week 3 / part-time job / other deadline].

Create a realistic schedule that accounts for these constraints and flags the highest-risk periods.`,
                response: `Here is a schedule built around your constraints. High-risk periods are marked [!].

Week 1: Foundation
— Complete the literature search while your energy is high
— Build your reference list now — it is painful under deadline pressure

Week 2 [!]: High-risk (exam / other deadline)
— Do not plan deep reading this week
— Single task only: write one-paragraph summaries of your five most important sources

Week 3: Structure
— Write a detailed outline — this is your most important planning task
— If the outline is not done by end of week 3, your deadline is at risk

Week 4–5 [!]: Drafting
— Aim for 500 words per work session, not perfection
— Protect at least three 2-hour writing blocks per week

Week 6: Revision and submission
— Allow two full days for structural revision before the final proofread
— Submit 24 hours early to allow for technical issues

Critical path: The outline in Week 3 determines whether everything else succeeds.`
            }
        ]
    },

    'planning-cot': {
        intro: 'Use step-by-step reasoning to break a vague or overwhelming planning problem into a clear sequence of concrete decisions.',
        prompts: [
            {
                chip: 'Decompose a complex assessment into manageable steps',
                full: `Let's plan how to approach this assessment step by step.

Step 1: What is the core task actually asking me to do? (Restate it in plain language.)
Step 2: What do I need to know or be able to do before I can complete it?
Step 3: What is the most logical sequence of sub-tasks?
Step 4: Where are the biggest risks in this plan?

Assessment description: [paste brief here]`,
                response: `Step 1 — What is the task actually asking?
You are being asked to critically evaluate two competing theoretical frameworks in the context of a specific case, and to defend an argument about which better explains the evidence. This is not a summary task — it is an evaluative argument.

Step 2 — What do I need before I can complete it?
— A solid understanding of both frameworks — not just their names, but their core claims and limitations
— At least three pieces of empirical evidence relevant to the case
— A clear, defensible position on which framework is more convincing

Step 3 — Logical sequence:
1. Read two foundational texts per framework
2. Find 3–4 empirical studies applying each framework
3. Build a comparison table: what does each framework predict about your case?
4. Decide your argument based on the evidence
5. Write the outline, then draft

Step 4 — Biggest risks:
— Choosing a position too late → weak argument that hedges both ways
— Reading too broadly without connecting to your argument → descriptive, not analytical
— No time for revision → structural problems not caught before submission`
            },
            {
                chip: 'Reverse-plan from your deadline',
                full: `My submission deadline is [date]. Today is [today's date]. Work backwards step by step to create a realistic plan — start from the deadline and identify each milestone I need to hit and when.`,
                response: `Working backwards from your deadline:

[Deadline day]: Submission

[−1 day]: Final proofread and formatting
— Citation check, word count, page numbers

[−3 days]: Revision complete
— All feedback incorporated; argument coherent from start to finish

[−7 days]: First full draft complete
— All sections written, even if rough
— Share with a peer or tutor for feedback

[−14 days]: Writing begins
— Outline locked and reviewed
— All key sources read and annotated

[−21 days]: Outline complete
— Section structure decided; central argument stated in one sentence

[−28 days]: Literature scoped
— 15–20 relevant sources collected
— Research question or central problem defined

Start immediately with the literature search. Do not wait for motivation before beginning.`
            }
        ]
    },

    'planning-open': {
        intro: 'A direct question works well when you are stuck or just need a quick sense of how to get started.',
        prompts: [
            {
                chip: 'Where should I start?',
                full: `I have been assigned a [type of assessment] on [topic], due in [X weeks]. I have not started and do not know where to begin. What should I do first?`,
                response: `Start here — in this order:

1. Read the brief twice and highlight the marking criteria. You need to know exactly how you will be evaluated before doing anything else. Many students plan work that does not match the criteria.

2. Write one sentence: "This assessment is asking me to..." If you cannot do this, that is your first task — not reading.

3. Find five sources in the next hour. Do not wait until you have read everything. A quick scan of recent review articles will give you the orientation you need.

4. Write a rough outline. Six to eight section headings with one sentence each. A plan you can improve is better than no plan at all.

Do these four things before anything else. Do not start reading deeply until you have finished step 4 — otherwise you will read without direction and waste time.`
            },
            {
                chip: 'How should I structure this?',
                full: `How should I structure a [word count] [type of assessment] on [topic] that needs to [describe the main task]?`,
                response: `For your assessment, here is a structure that fits the task:

Introduction (10–12% of word count)
— Define scope; end with a clear thesis or aim statement

Background / Conceptual framework (15–20%)
— Introduce key concepts and the theoretical lens you are using

Core argument (50–55%)
— This is where you do the main analytical work
— Organise by argument, not by source — each paragraph advances a claim
— Plan 2–3 main sections, each making one major point

Discussion / Implications (15%)
— What does your argument mean for practice, policy, or future research?
— Acknowledge one or two significant limitations

Conclusion (8–10%)
— Restate your argument — do not just repeat the introduction; synthesise
— End with a clear, forward-looking statement

Ratio check: if you are spending more than 20% on background, you are likely describing rather than arguing. Cut and refocus.`
            }
        ]
    },

    /* ── LITERATURE REVIEW ────────────────────────────────── */
    'literature-structured': {
        intro: 'Use explicit criteria or comparison frameworks to get AI to evaluate, compare, or summarise sources in a consistent, reproducible way.',
        prompts: [
            {
                chip: 'Evaluate a source against your own criteria',
                full: `Evaluate the following abstract using these four criteria:
1. Relevance to my topic: [your topic]
2. Methodological quality (is the method described and appropriate?)
3. Recency (published after 2020 = relevant; before = flag)
4. Transferability (are findings applicable beyond the original context?)

Rate each criterion 1–3 and give a one-sentence justification.

[Paste abstract here]`,
                response: `Evaluation:

1. Relevance to your topic: 3/3
The study directly addresses AI-assisted feedback in higher education writing — the core focus of your review.

2. Methodological quality: 2/3
The method is described (mixed-methods, n=87) but the sampling strategy is not justified and the analysis procedure is vague. Treat findings as indicative rather than conclusive.

3. Recency: 3/3
Published in 2023 — fully current.

4. Transferability: 2/3
Conducted at a single private university. The writing improvement findings may transfer, but the institutional context and the specific AI tool are not described in sufficient detail for confident cross-context application.

Recommendation: Include as supporting evidence only. Pair with a larger or more diverse study before drawing strong conclusions.`
            },
            {
                chip: 'Compare two abstracts in a structured table',
                full: `Compare the following two abstracts and produce a structured comparison table with these columns:
Research question | Method | Key finding | Limitation | Relevance to [your topic]

Abstract 1: [paste here]
Abstract 2: [paste here]`,
                response: `Comparison table:

| | Study 1 | Study 2 |
|---|---|---|
| Research question | How does AI feedback frequency affect essay quality? | What predicts student acceptance of AI feedback tools? |
| Method | Randomised experiment, n=120, 12-week intervention | Survey, n=340, self-report Likert scales |
| Key finding | Weekly AI feedback improved coherence by 14%; no effect on argumentation | Prior AI experience and perceived usefulness were strongest predictors |
| Limitation | Single institution; no follow-up beyond the intervention | Self-report bias; cross-sectional |
| Relevance | Direct — evidence for your writing quality claim | Indirect — context for your discussion of student adoption |

Key tension: Study 1 focuses on outcomes; Study 2 on antecedents. Together they suggest AI feedback can improve writing quality but only when students are willing to engage with it — a nuance worth naming in your review.`
            }
        ]
    },

    'literature-rolebased': {
        intro: 'Ask AI to act as an expert reviewer, supervisor, or academic librarian to identify what you are missing and what to prioritise.',
        prompts: [
            {
                chip: 'Ask AI to review your reading list as an expert',
                full: `Act as an expert reviewer in [your field]. I will share my reading list. Tell me: (1) what important perspectives or authors are missing, (2) whether the list is imbalanced, and (3) what to read first.

My current reading list:
[paste your list here]`,
                response: `As an expert reviewer, here is my assessment:

1. Missing perspectives:
Your list is strong on quantitative studies but has no qualitative or ethnographic work. This creates a blind spot around student experience and meaning-making. Add at least two qualitative studies.

You also have no critical perspectives from non-Western educational contexts. If your argument touches on AI in education globally, this weakens your review's breadth.

2. Balance issues:
Four of your eight sources are from the same research group. If that group's theoretical commitments are contested, your review will appear partial. Diversify across at least three different institutional affiliations.

3. Reading priority:
Read the foundational theoretical paper your empirical sources cite most frequently first. If you do not understand the framework your evidence builds on, you will miss the connecting thread. Then read the most methodologically rigorous empirical study as a benchmark for evaluating the others.`
            },
            {
                chip: 'Ask AI to design your systematic search strategy',
                full: `You are an academic librarian helping me design a systematic literature search. My topic is [your topic].

Help me: (1) identify key search terms and synonyms, (2) suggest Boolean combinations, (3) recommend databases, and (4) propose inclusion and exclusion criteria.`,
                response: `Here is your search strategy:

1. Key terms and synonyms:
Concept A: "prompt engineering" OR "prompt design" OR "AI prompting"
Concept B: "higher education" OR "university" OR "undergraduate" OR "tertiary"
Concept C: "writing" OR "academic writing" OR "essay"
Concept D: "generative AI" OR "large language model" OR "ChatGPT" OR "LLM"

2. Boolean combination:
(A) AND (B OR C) AND D
This keeps the search focused while covering your core intersection.

3. Recommended databases:
— ERIC: strongest coverage of education research
— Web of Science: broader interdisciplinary coverage
— Scopus: good for recent AI-related publications
— Google Scholar: supplement for grey literature (use selectively)

4. Inclusion / exclusion criteria:
Include: peer-reviewed empirical studies; published 2022–present; English language; higher education contexts
Exclude: opinion pieces without empirical data; K–12 only studies; AI architecture papers without educational application; conference abstracts without full papers`
            }
        ]
    },

    'literature-contextual': {
        intro: 'Paste your actual sources or notes so AI can help you synthesise, identify contradictions, and locate gaps based on the specific literature you have read.',
        prompts: [
            {
                chip: 'Synthesise your notes into a review paragraph',
                full: `Here are my summarised notes from five sources on [your topic]:

[Paste your notes — one paragraph per source]

Synthesise these into one coherent literature review paragraph (approx. 200–250 words) that identifies what the sources agree on, where they disagree, and what gap they collectively point to. Do not summarise each source — build an analytical argument across them.`,
                response: `Here is a synthesised paragraph based on your notes:

Research on AI-assisted academic writing has grown rapidly since 2022, with emerging consensus on several points but persistent disagreement on others. Studies consistently find that AI tools improve surface-level writing quality — including grammar, coherence, and vocabulary range — particularly for students writing in a second language. However, findings diverge sharply on the question of argumentation: while some studies report improvements in essay scores after AI-assisted revision, others find no such effect, attributing the null result to students' tendency to accept AI suggestions uncritically rather than engaging in genuine revision.

This tension suggests that the benefit of AI feedback is conditional on the quality of student engagement — a finding several studies acknowledge but do not fully theorise. Notably, none of the five studies address how AI assistance affects long-term writing development. All five employ short-term interventions (4–12 weeks), making it impossible to distinguish immediate performance gains from genuine skill development.

Note: I have inferred connections between sources from your notes. Please verify the attributions before including this in assessed work.`
            },
            {
                chip: 'Help me understand why two sources contradict each other',
                full: `I have read the following studies on [your topic] and am struggling to reconcile their findings:

[Describe the contradiction — e.g. Study A finds X; Study B finds the opposite]

Why might these studies reach different conclusions, and how should I handle the contradiction in my literature review?`,
                response: `These contradictions are common and often reflect genuine complexity rather than errors. Here are the most likely explanations:

1. Different populations: If one study used second-language learners and another used native speakers, the same intervention may work differently due to different baseline resources.

2. Different operationalisations: "Writing quality" is measured differently across studies — holistic rubric scores, analytic rubrics, and automated readability metrics do not measure the same construct.

3. Different timeframes: A 4-week intervention may show surface-level gains that disappear over longer periods.

4. Different AI tools: Studies using different systems are not directly comparable if the tools differ substantially in feedback quality.

How to handle this in your review:
Do not smooth over the contradiction. Name it explicitly: "Findings on [X] are inconsistent across studies." Then explain the most plausible methodological reason. This demonstrates critical thinking — more valuable to your reader than a false impression of consensus.

If one study has a clearly stronger methodology, note that its findings should be weighted more heavily while acknowledging the overall limitations of the evidence base.`
            }
        ]
    },

    'literature-cot': {
        intro: 'Walk through a structured reasoning sequence to build a coherent synthesis argument rather than producing a source-by-source list.',
        prompts: [
            {
                chip: 'Step-by-step: build an argument from your sources',
                full: `Help me synthesise the literature on [your topic] step by step.

Step 1: What do the sources collectively agree on?
Step 2: What do they disagree about, and why?
Step 3: What does this pattern of agreement and disagreement reveal?
Step 4: What central argument could I make in my literature review?

Sources: [list your sources or paste key claims]`,
                response: `Step 1 — What is agreed:
Studies consistently agree on: (1) AI tools improve surface-level writing metrics; (2) student engagement mediates outcomes; (3) academic integrity concerns are present across all contexts but handled inconsistently by institutions.

Step 2 — What is contested:
There is meaningful disagreement about whether AI-assisted writing improves student learning (skill development) versus only the product (immediate performance). Short-term studies tend to find positive effects; longer observations find these attenuate.

Step 3 — What does this reveal?
The disagreement maps onto a methodological divide — short-term studies capture performance; longer studies capture learning. The two bodies of literature are not contradicting each other; they are measuring different things. The field has not yet grappled clearly with this distinction.

Step 4 — Central argument:
"While AI tools demonstrably improve writing performance in the short term, the evidence for long-term writing development is absent — not because such effects do not exist, but because the field has not yet conducted the studies capable of detecting them. This gap represents the most important frontier in the current literature."`
            },
            {
                chip: 'Step-by-step: should I include this source?',
                full: `Help me decide whether to include this source in my literature review.

Step 1: Is it relevant to my research question?
Step 2: Is the methodology credible and appropriate?
Step 3: Are the findings trustworthy?
Step 4: Does it add something my other sources do not already cover?

My research question: [paste here]
Abstract to evaluate: [paste here]`,
                response: `Step 1 — Relevance:
The source addresses AI-generated feedback on writing tasks in undergraduate education, which maps directly onto your research question. Relevance: high.

Step 2 — Methodology:
The study uses a pre/post design with a control group (n=64) — appropriate for the intervention effect it claims. However, the control group received no feedback at all rather than an active comparison condition, meaning the study cannot isolate the benefit of AI feedback specifically. Methodology: credible but limited.

Step 3 — Trustworthiness:
The effect size (d=0.43) is moderate and the statistical analysis is appropriate. However, the same instructor who delivered the intervention also assessed the writing, introducing evaluation bias. Treat findings with caution.

Step 4 — Does it add something new?
Your reading list has no experimental study with a control group. Even with its limitations, this provides the best available evidence for a controlled comparison.

Decision: Include — but with appropriate hedging: "The most direct experimental evidence, while limited by the absence of blind assessment, suggests..."`
            }
        ]
    },

    'literature-open': {
        intro: 'A direct question works well when you need a quick orientation to a new field or a fast verdict on whether a source is worth pursuing.',
        prompts: [
            {
                chip: 'Quick orientation: what do I need to know about this field?',
                full: `Give me a brief overview of the current state of research on [your topic]. What are the main debates and the most significant recent findings? I am new to this area and need orientation before starting my systematic search.`,
                response: `Here is a brief orientation:

Current state: The field has expanded rapidly since 2022. Much of the literature is recent and not yet integrated into textbooks. Start with systematic reviews — they will give you the map you need.

Main debates:
1. Performance versus learning: Does AI assistance improve what students produce, or what they can do independently? These are often conflated but are fundamentally different questions.
2. Academic integrity: Where is the boundary between legitimate AI assistance and outsourcing cognitive work? This is unresolved and actively contested.
3. Equity: Does AI assistance benefit all students equally, or does it amplify existing advantages? Early evidence suggests it may widen gaps for students without strong baseline skills.

Where to start reading:
Find one recent systematic review (2024–2025) covering your topic. Journals to search: Computers & Education, Journal of Educational Computing Research, British Journal of Educational Technology. A good review's reference section will give you your initial reading list within 30 minutes.`
            },
            {
                chip: 'Quick verdict: is this source worth reading?',
                full: `Based on the following abstract, tell me: is this source worth reading in full for a literature review on [your topic]? Give me a yes/no recommendation with three reasons.

Abstract: [paste here]`,
                response: `Recommendation: Yes — read this source, but selectively.

Reason 1 — Directly relevant: The study examines the core variable of your topic in a higher education context. You will not need to stretch to make it relevant.

Reason 2 — Methodologically useful: As an empirical study with a clear method and reported effect sizes, it provides the kind of evidence-based citation a literature review needs rather than just theoretical claims.

Reason 3 — Recent and citable: Published in 2024, it signals engagement with current scholarship.

Caveat: The sample (n=22, single institution) is small. Do not use this as primary evidence for any major claim — treat it as supporting evidence and pair it with a larger study.

What to read: Introduction (theoretical framing), Method (what you can and cannot conclude), and Discussion (interpretation of findings). Skim the Results section unless you need specific numbers.`
            }
        ]
    },

    /* ── CONTENT DEVELOPMENT ─────────────────────────────── */
    'writing-structured': {
        intro: 'Use examples or output constraints to generate or improve text in a format that matches exactly what you need.',
        prompts: [
            {
                chip: 'Match a writing style using a worked example',
                full: `Here is an example of the writing style and register I want:
[Paste a well-written paragraph from a published article in your field]

Using this style — the same sentence structure, register, and level of hedging — write a paragraph developing this point: [describe your content point here].`,
                response: `Here is a paragraph written in the style of your example:

"The relationship between AI-assisted feedback and writing development remains empirically contested. While several studies report measurable improvements in surface-level quality following AI intervention, the mechanisms by which such improvements are achieved — and whether they reflect genuine skill acquisition or task-specific adaptation — are not yet well understood (Author A, 2023; Author B, 2024). This uncertainty is compounded by variation in how writing quality is operationalised across studies, ranging from holistic rubric scores to automated readability indices, which are not interchangeable measures."

Key features matched from your example:
— Hedged academic register ("remains empirically contested," "not yet well understood")
— Evidence cited within the argument, not appended at the end
— A critical closing observation rather than a summary
Adjust the specific content and citations to match your actual sources.`
            },
            {
                chip: 'Write a section to a specific format and word count',
                full: `Write a [type of section — e.g. methods section / discussion paragraph] for a [type of assessment] on [topic]. It must be approximately [word count] words, in formal academic English, and must include: [list specific elements — e.g. a clear topic sentence / acknowledgement of limitations / a transition to the next section].`,
                response: `Here is a draft matching your requirements:

[Opening — topic sentence]
This section describes the methodological approach and provides a rationale for key design decisions.

[Method description]
A qualitative design was employed, using semi-structured interviews as the primary data collection method. This reflects the study's interpretive epistemological position and its aim of understanding participants' subjective experiences (Braun & Clarke, 2019). Twelve undergraduate students were recruited through purposive sampling from two disciplines, enabling initial cross-disciplinary comparison.

[Acknowledgement of limitations]
The small sample size precludes statistical generalisation; this is consistent with the study's aim of producing theoretical rather than empirical generalisability (Lincoln & Guba, 1985).

[Transition]
The following section describes the analysis procedure used to develop interpretive themes from the interview data.

Replace placeholder references with your actual citations and adjust participant details to match your study.`
            }
        ]
    },

    'writing-rolebased': {
        intro: 'Ask AI to act as an editor, critical reader, or writing tutor to get targeted, role-specific feedback on your draft text.',
        prompts: [
            {
                chip: 'Ask AI to act as an academic editor',
                full: `You are an experienced academic editor working on a [type of assessment] in [field]. Review the following paragraph and give me three specific, actionable suggestions to improve it — focusing on: (1) clarity of argument, (2) quality of evidence use, and (3) academic register.

[Paste your paragraph here]`,
                response: `Here are three specific, actionable suggestions:

1. Clarity of argument: Your main claim is buried in the third sentence. Move it to the opening — the first sentence should state exactly what this paragraph argues. The reader should not have to search for your point.

2. Quality of evidence use: You cite [Author, year] but do not explain what their evidence actually shows. Replace "Smith (2023) supports this" with "Smith (2023) found that [specific finding], which supports the argument that [your claim]." Evidence only works when you connect it explicitly to your argument.

3. Academic register: Two phrases undermine the formality: "it is quite clear that" and "obviously." In academic writing, avoid claiming certainty without specific evidence. Replace with a measured claim ("available evidence suggests") or add a citation that justifies the confidence.`
            },
            {
                chip: 'Ask AI to act as a critical sceptical reader',
                full: `Act as a critical reader who is sceptical of my argument. Read the following section and identify: (1) any logical gaps or unsupported leaps, (2) any claims asserted without evidence, and (3) one counter-argument I have not addressed.

[Paste your section here]`,
                response: `As a sceptical reader, here is what I found:

1. Logical gaps:
You move from "AI improves writing quality" (Paragraph 2) to "therefore AI should be integrated into writing curriculum" (Paragraph 4) without addressing a key step: whether quality improvements in AI-assisted conditions transfer to unassisted conditions. If students write better with AI but no better without it, the curriculum implication is different from what you claim. This needs a bridging argument.

2. Unsupported claims:
— "Most students find AI feedback more useful than instructor feedback." No citation. Either cite a source or soften to "some students report..."
— "The evidence is conclusive." Your literature review acknowledges mixed findings. This claim overclaims.

3. Counter-argument not addressed:
The strongest objection is that AI feedback may improve immediate performance while reducing students' motivation to develop independent critical judgement. Engage with this objection — ignoring it makes your argument appear selective.`
            }
        ]
    },

    'writing-contextual': {
        intro: 'Give AI your draft, your brief, or your audience description to get revisions and feedback tailored to your specific work.',
        prompts: [
            {
                chip: 'Revise your text for a different audience',
                full: `I have written the following paragraph for [describe your audience — e.g. academic marker / policy audience / general reader]. Please revise it to be more appropriate for this audience, adjusting: level of assumed knowledge, formality of register, and density of technical language.

My paragraph: [paste here]`,
                response: `Here is your paragraph revised for [your target audience]:

Original (formal academic register):
"The empirical evidence base for AI-assisted formative feedback remains underdeveloped, with extant literature predominantly characterised by small-sample, single-institution designs that limit generalisability."

Revised for policy audience:
"Current research on AI feedback tools is limited. Most studies are small and carried out at a single university, which means we cannot yet be confident that findings apply more broadly. Larger, more diverse studies are needed before AI feedback tools can be recommended for adoption at scale."

Revised for general reader:
"There is not yet enough research to know whether AI feedback tools work reliably. The studies published so far are mostly small and based at individual universities, so we cannot assume their results apply everywhere."

Key changes: technical terms replaced with plain equivalents; practical implications added for the policy audience; sentence length reduced for the general reader.`
            },
            {
                chip: 'Check your draft against a specific marking criterion',
                full: `Here is the marking criterion I am trying to address:
[Paste the specific criterion here]

Here is my draft:
[Paste your draft here]

How well does my draft address this criterion? What should I add, remove, or change?`,
                response: `Here is my assessment:

Strengths — what you are doing well:
Your draft demonstrates engagement with relevant literature and awareness of the main debates. The writing is clear and the structure is logical.

What is missing from the criterion:

1. "Critical evaluation of sources": Your draft summarises what sources say but rarely evaluates the quality of the evidence. Add evaluative language: "While Smith (2023) provides useful evidence, the small sample size limits the confidence we can place in these findings."

2. "Original analytical position": You present existing arguments but do not make a clear claim of your own. You need a thesis statement that says what you conclude from the evidence, not just what the evidence shows.

3. "Range of evidence": You cite four sources, all from the same journal. Add at least two from different publication contexts to demonstrate breadth.

Revision priority: Address point 2 first. A clear, defensible argument is what markers look for from the first paragraph. Everything else is secondary.`
            }
        ]
    },

    'writing-cot': {
        intro: 'Use step-by-step reasoning to diagnose writing problems and plan a revision strategy before you rewrite.',
        prompts: [
            {
                chip: 'Step-by-step argument check',
                full: `Let's check my argument step by step.

Step 1: State my central claim in one sentence.
Step 2: List the evidence I provide to support it.
Step 3: Identify any logical gaps between the evidence and the claim.
Step 4: Suggest how to close those gaps.

[Paste your section here]`,
                response: `Step 1 — Central claim:
Your text's central claim appears to be: "AI-assisted feedback improves writing quality when students engage actively with it rather than accepting it passively."

Step 2 — Evidence provided:
— Source A: Students who revised after AI feedback scored higher than those who did not
— Source B: Active revision strategies correlate with better writing outcomes generally
— Source C: Survey showing 67% of students used AI feedback without revising

Step 3 — Logical gaps:
— Gap 1: Source A shows revision correlates with better scores but does not establish that AI feedback caused the improvement. Students who revise more may simply be stronger writers.
— Gap 2: Source B concerns revision generally, not AI feedback specifically. Using it to support an AI-specific claim needs an explicit bridging argument.
— Gap 3: Source C supports your point about passive engagement but needs a connecting sentence to link it to your claim.

Step 4 — How to close the gaps:
— Gap 1: Acknowledge the limitation or find a study with random assignment
— Gap 2: Add: "If revision explains outcomes in traditional feedback contexts, the same mechanism is plausible when the feedback source is an AI system..."
— Gap 3: Add: "This finding suggests that the quality of AI feedback alone is insufficient — student engagement is the critical variable."`
            },
            {
                chip: 'Step-by-step paragraph repair',
                full: `This paragraph is not working but I am not sure why. Help me diagnose and fix it step by step.

Step 1: What is this paragraph trying to do?
Step 2: Does every sentence contribute to that purpose?
Step 3: Is the evidence being used correctly?
Step 4: Write a revised version.

[Paste your paragraph here]`,
                response: `Step 1 — What is the paragraph trying to do?
It appears to be establishing the significance of the research problem: arguing that AI's impact on writing is important and under-studied. That is a legitimate purpose.

Step 2 — Does every sentence contribute?
Sentences 1–2: Yes — they set up the scale of AI adoption.
Sentence 3: No — it introduces a tangential point about AI in STEM education, not relevant to your writing-focused argument. Cut it.
Sentence 4: Partially — it makes the right point but repeats Sentence 2. Merge or cut.
Sentence 5: Yes — this is your strongest sentence and should be your opening, not your close.

Step 3 — Evidence use:
You cite three sources but each appears after a general observation rather than after the specific claim the source actually supports. Link each citation to the precise finding it provides.

Step 4 — Revised version:
"Despite the rapid integration of generative AI into university writing contexts, the effects of AI-generated feedback on students' long-term writing development remain poorly understood. Unlike human feedback — which has produced a substantial and coherent evidence base — research on AI feedback is characterised by short-term interventions and inconsistent outcome measures, making cumulative conclusions difficult to draw."`
            }
        ]
    },

    'writing-open': {
        intro: 'Use a direct, simple prompt when you need a quick draft to work from or a fast check on a piece of text.',
        prompts: [
            {
                chip: 'Draft a section for me',
                full: `Write a draft [type of section — e.g. abstract / introduction / conclusion] for an academic [assessment type] on [topic]. The main argument is: [state your argument in one sentence]. Aim for approximately [word count] words in formal academic English.`,
                response: `Here is a draft abstract:

The increasing integration of generative AI tools into higher education has raised fundamental questions about their effects on student writing development. This study examines the relationship between AI-assisted formative feedback and writing quality among undergraduate students, drawing on a mixed-methods study across two disciplines. Findings indicate that AI feedback reliably improves surface-level writing features — particularly coherence and vocabulary range — but shows no consistent effect on argumentation quality or disciplinary voice. Analysis of student revision practices suggests that outcomes are mediated by the level of active engagement with the feedback rather than by feedback quality itself. These findings have implications for how AI feedback tools are integrated into writing instruction and how students are taught to engage with them productively.

Note: This is a placeholder draft. Replace general claims with your actual findings and check every sentence accurately represents your work. An abstract should be finalised after the full paper is written.`
            },
            {
                chip: 'Improve this sentence or paragraph',
                full: `Improve the following text to make it clearer, more precise, and more appropriate for an academic audience. Do not change the meaning.

[Paste your text here]`,
                response: `Here are three improved versions, each with a different emphasis:

Version 1 — Clearer and more direct:
Main claim moved to the front; passive constructions removed; vague hedge words replaced with precise alternatives.

Version 2 — More precise and evidence-grounded:
Phrases like "many studies show" and "it is significant" replaced with language that requires you to supply actual evidence, or hedged appropriately where evidence is limited.

Version 3 — Aligned with formal academic register:
Informal contractions and colloquialisms removed; transitional logic made explicit; citation slots added where claims require support.

Recommendation: Version 1 gives the clearest structure. Version 3 uses the register expected in your field. Combine them — Version 1's structure with Version 3's diction.

One specific note: "very" appears twice in your original. In academic writing, "very important" adds emphasis without adding meaning. Replace with "critical," "central," or "essential" depending on what you actually mean.`
            }
        ]
    }
};

/* ============================================================
   STATE
   ============================================================ */
let peActiveTask = 'ideas';
let peActiveTech = 'structured';

/* ============================================================
   BUILD PILLS
   ============================================================ */
function peBuildPills() {
    const taskRow = document.getElementById('pe-task-row');
    PE_TASKS.forEach(t => {
        const btn = document.createElement('button');
        btn.className = 'task-pill' + (t.id === peActiveTask ? ' active' : '');
        btn.dataset.id = t.id;
        btn.innerHTML = `${t.label} <span style="font-weight:400;opacity:0.6;font-size:11px;">— ${t.sub}</span>`;
        btn.onclick = () => { peActiveTask = t.id; peUpdatePills('task'); peRenderContent(); };
        taskRow.appendChild(btn);
    });

    const techRow = document.getElementById('pe-tech-row');
    PE_TECHNIQUES.forEach(t => {
        const btn = document.createElement('button');
        btn.className = `tech-pill ${t.cls}` + (t.id === peActiveTech ? ' active' : '');
        btn.dataset.id = t.id;
        btn.title = t.sub;
        btn.textContent = t.label;
        btn.onclick = () => { peActiveTech = t.id; peUpdatePills('tech'); peRenderContent(); };
        techRow.appendChild(btn);
    });
}

function peUpdatePills(type) {
    if (type === 'task') {
        document.querySelectorAll('#pe-task-row .task-pill').forEach(b => b.classList.toggle('active', b.dataset.id === peActiveTask));
    } else {
        document.querySelectorAll('#pe-tech-row .tech-pill').forEach(b => b.classList.toggle('active', b.dataset.id === peActiveTech));
    }
}

/* ============================================================
   RENDER CONTENT
   ============================================================ */
function peRenderContent() {
    const key    = `${peActiveTask}-${peActiveTech}`;
    const data   = PE_DATA[key];
    const colour = PE_TECH_COLOURS[peActiveTech] || '#667eea';
    const tech   = PE_TECHNIQUES.find(t => t.id === peActiveTech);
    const ca     = document.getElementById('pe-content-area');

    ca.style.setProperty('--tc', colour);
    ca.innerHTML = '';
    ca.style.animation = 'none';
    ca.offsetHeight;
    ca.style.animation = 'pefadeUp 0.25s ease';

    if (!data) {
        ca.innerHTML = '<div class="empty-state">No examples available for this combination yet.</div>';
        return;
    }

    const intro = document.createElement('div');
    intro.className = 'intro-card';
    intro.innerHTML = `<div class="tech-name">${tech.label} — ${tech.sub}</div><div class="intro-text">${data.intro}</div>`;
    ca.appendChild(intro);

    const lbl = document.createElement('div');
    lbl.className = 'prompts-label';
    lbl.textContent = 'Try one of these prompts';
    ca.appendChild(lbl);

    const opts = document.createElement('div');
    opts.className = 'prompt-options';
    opts.id = 'pe-prompt-options';
    data.prompts.forEach(p => {
        const btn = document.createElement('button');
        btn.className = 'prompt-option';
        btn.innerHTML = `
            <div class="prompt-option-label">${p.chip}</div>
            <div class="prompt-option-preview">${peEscHtml(p.full)}</div>
            <div class="prompt-option-cta"><span>See how it works &rsaquo;</span></div>`;
        btn.onclick = () => peShowChat(p, colour, btn);
        opts.appendChild(btn);
    });
    ca.appendChild(opts);

    const chat = document.createElement('div');
    chat.className = 'chat-view';
    chat.id = 'pe-chat-view';
    ca.appendChild(chat);
}

/* ============================================================
   SHOW CHAT
   ============================================================ */
function peShowChat(prompt, colour, btnEl) {
    document.querySelectorAll('#pe-prompt-options .prompt-option').forEach(b => b.classList.remove('active'));
    btnEl.classList.add('active');
    const chat = document.getElementById('pe-chat-view');
    chat.innerHTML = '';
    chat.className = 'chat-view visible';

    const sep = document.createElement('hr');
    sep.className = 'chat-view-separator';
    chat.appendChild(sep);

    const win = document.createElement('div');
    win.className = 'chat-window';

    const userMsg = document.createElement('div');
    userMsg.className = 'chat-msg user';
    userMsg.innerHTML = `<div class="msg-label">You</div><div class="msg-bubble" style="background:${colour};">${peEscHtml(prompt.full)}</div>`;
    win.appendChild(userMsg);

    const typing = document.createElement('div');
    typing.className = 'typing-indicator';
    typing.innerHTML = '<div class="typing-dots"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div>';
    win.appendChild(typing);
    chat.appendChild(win);

    setTimeout(() => {
        typing.remove();
        const aiMsg = document.createElement('div');
        aiMsg.className = 'chat-msg ai';
        aiMsg.style.animation = 'peadeUp 0.25s ease';
        aiMsg.innerHTML = `<div class="msg-label">Simulated AI response</div><div class="msg-bubble">${peEscHtml(prompt.response)}</div>`;
        win.appendChild(aiMsg);

        const actions = document.createElement('div');
        actions.className = 'chat-actions';
        actions.innerHTML = `
            <span class="sim-note">This response illustrates what this prompt technique can produce. Actual outputs will vary.</span>
            <button class="btn-copy" onclick="peCopyPrompt(${JSON.stringify(prompt.full)}, this)">Copy prompt</button>`;
        chat.appendChild(actions);
    }, 850);
}

/* ============================================================
   UTILITIES
   ============================================================ */
function peEscHtml(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\n/g, '<br>');
}

function peCopyPrompt(text, btn) {
    navigator.clipboard.writeText(text).then(() => {
        btn.textContent = 'Copied!';
        setTimeout(() => btn.textContent = 'Copy prompt', 1800);
    }).catch(() => {
        const ta = document.createElement('textarea');
        ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
        document.body.appendChild(ta); ta.select(); document.execCommand('copy');
        document.body.removeChild(ta);
        btn.textContent = 'Copied!';
        setTimeout(() => btn.textContent = 'Copy prompt', 1800);
    });
}

/* ============================================================
   INIT
   ============================================================ */
peBuildPills();
peRenderContent();
</script>
