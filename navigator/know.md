# Know: understanding AI and hallucinations

<div style="margin-bottom: 20px;">
  <button onclick="window.location.href='../'" style="padding: 10px 20px; font-size: 14px; background-color: #666; color: white; border: none; border-radius: 5px; cursor: pointer;">
    ← Back to home
  </button>
</div>

---

## Introduction to AI in academic contexts

<div style="background-color: #f0f0f0; padding: 40px; text-align: center; border-radius: 8px; margin: 20px 0;">
  <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; border-radius: 8px;">
    <iframe
      src="https://www.youtube.com/embed/MaRyiz19HpM"
      title="Understanding AI tools and their limitations"
      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  </div>
  <p style="color: #999; font-size: 12px; font-style: italic; margin-top: 10px;">Topic: understanding AI tools and their limitations</p>
</div>

---

## Overview of relevant AI tools

Understanding the landscape of AI tools is essential for making informed decisions about when and how to use them in academic work.

### Common AI tools in academic settings

**Large Language Models (LLMs)**
- ChatGPT, Claude, Gemini
- Used for: brainstorming, drafting, summarizing, explaining concepts
- Key limitation: Can generate plausible but incorrect information

**Research Assistants**
- Perplexity, Elicit, Semantic Scholar
- Used for: literature searches, summarizing papers
- Key limitation: May miss nuanced interpretations or recent studies

**Writing Assistants**
- Grammarly, QuillBot, Wordtune
- Used for: grammar checking, paraphrasing, style improvement
- Key limitation: May alter intended meaning or voice

**Code Assistants**
- GitHub Copilot, Tabnine
- Used for: code completion, debugging suggestions
- Key limitation: May suggest inefficient or insecure code

### Key concept: AI hallucinations

**What is a hallucination?** When an AI generates information that sounds confident and plausible but is factually incorrect or entirely fabricated.

**Why do hallucinations occur?**
- AI models generate text based on patterns, not factual databases
- They prioritize fluency and coherence over accuracy
- They cannot verify information in real-time
- They may "fill in gaps" with plausible-sounding but false information

---

## Check your understanding: spotting hallucinations

Below are three scenarios where students used AI tools. Each contains a hallucination. Can you identify why the hallucination occurred?

### Question 1

**Student Prompt:** "Who won the Nobel Prize in Literature in 2024?"

**AI Response:** "The 2024 Nobel Prize in Literature was awarded to Haruki Murakami for his masterful blend of magical realism and contemporary Japanese culture."

<div style="margin: 20px 0; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #0066cc;">

**Why does this hallucination exist?**

<form>
  <label style="display: block; margin: 10px 0;">
    <input type="radio" name="q1" value="a">
    A) The AI's training data has a cutoff date and doesn't include 2024 events, so it generated a plausible answer based on patterns
  </label>
  <label style="display: block; margin: 10px 0;">
    <input type="radio" name="q1" value="b">
    B) Haruki Murakami refused the award, so the AI was technically correct
  </label>
  <label style="display: block; margin: 10px 0;">
    <input type="radio" name="q1" value="c">
    C) The AI was confused between literature and peace prizes
  </label>
  <label style="display: block; margin: 10px 0;">
    <input type="radio" name="q1" value="d">
    D) The AI intentionally provided false information to test the student
  </label>
</form>

<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #0066cc; font-weight: bold;">Show Answer</summary>
<p style="margin-top: 10px;"><strong>Correct Answer: A</strong></p>
<p>The AI's training data has a cutoff date and doesn't include real-time information about 2024 events. When asked about something beyond its knowledge cutoff, it generated a plausible-sounding answer based on patterns it learned (Murakami is a famous author often mentioned for the Nobel Prize). This is a classic hallucination where the AI fills knowledge gaps with convincing but false information.</p>
</details>

</div>

### Question 2

**Student Prompt:** "Can you cite three studies about the effectiveness of spaced repetition in learning?"

**AI Response:** "Certainly! Here are three relevant studies:
1. Johnson, M. & Williams, K. (2019). 'The Impact of Spaced Repetition on Long-term Retention.' Journal of Educational Psychology, 45(3), 287-302.
2. Chen, L. et al. (2021). 'Cognitive Benefits of Distributed Practice.' Memory and Cognition Studies, 12(1), 45-67.
3. Rodriguez, A. & Patel, S. (2020). 'Spaced Learning in Digital Environments.' Educational Technology Review, 28(4), 112-128."

<div style="margin: 20px 0; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #0066cc;">

**Why does this hallucination exist?**

<form>
  <label style="display: block; margin: 10px 0;">
    <input type="radio" name="q2" value="a">
    A) The studies are real but the page numbers are incorrect
  </label>
  <label style="display: block; margin: 10px 0;">
    <input type="radio" name="q2" value="b">
    B) The AI generated plausible-looking citations by combining common academic patterns (author names, dates, journal formats) without verifying they actually exist
  </label>
  <label style="display: block; margin: 10px 0;">
    <input type="radio" name="q2" value="c">
    C) These are real studies but from a different field entirely
  </label>
  <label style="display: block; margin: 10px 0;">
    <input type="radio" name="q2" value="d">
    D) The AI accessed outdated databases that have since been corrected
  </label>
</form>

<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #0066cc; font-weight: bold;">Show Answer</summary>
<p style="margin-top: 10px;"><strong>Correct Answer: B</strong></p>
<p>This is one of the most dangerous types of hallucinations. The AI generated citations that follow correct academic formatting patterns but may not actually exist. It learned what citations "look like" from its training data and created plausible but potentially fictional references. This is why you should NEVER use AI-generated citations without independently verifying them in actual databases.</p>
</details>

</div>

### Question 3

**Student Prompt:** "Explain the main arguments in Professor Smith's 2023 paper on climate policy."

**AI Response:** "In her 2023 paper, Professor Smith argues that carbon taxation is ineffective and proposes instead a system of voluntary corporate commitments. She provides case studies from Norway and Denmark showing that voluntary measures resulted in 40% emissions reductions over five years. Smith concludes that market-based solutions are superior to government intervention."

<div style="margin: 20px 0; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #0066cc;">

**Why does this hallucination exist?**

<form>
  <label style="display: block; margin: 10px 0;">
    <input type="radio" name="q3" value="a">
    A) Professor Smith changed their position after publication
  </label>
  <label style="display: block; margin: 10px 0;">
    <input type="radio" name="q3" value="b">
    B) The AI only read the abstract, not the full paper
  </label>
  <label style="display: block; margin: 10px 0;">
    <input type="radio" name="q3" value="c">
    C) The AI doesn't have access to the specific paper and generated plausible-sounding arguments based on common climate policy debates, potentially misrepresenting the author's actual position
  </label>
  <label style="display: block; margin: 10px 0;">
    <input type="radio" name="q3" value="d">
    D) The AI mixed up Professor Smith with another researcher
  </label>
</form>

<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #0066cc; font-weight: bold;">Show Answer</summary>
<p style="margin-top: 10px;"><strong>Correct Answer: C</strong></p>
<p>When asked about specific papers it hasn't been trained on, the AI generates content based on general knowledge of the topic. It creates arguments that sound like they could be in a climate policy paper, but they may completely misrepresent what Professor Smith actually wrote. This is particularly problematic in academic work because it could lead to misattributing positions to scholars and spreading misinformation.</p>
</details>

</div>

---

## Key takeaways

- **Always verify** AI-generated information, especially facts, quotes, and citations
- **Understand** that AI tools generate text based on patterns, not truth
- **Recognize** that confident tone ≠ accurate information
- **Use AI appropriately** as a starting point, not a final source

---

<div style="text-align: center; margin: 40px 0;">
  <button onclick="window.location.href='apply'" style="padding: 15px 40px; font-size: 16px; background-color: #28a745; color: white; border: none; border-radius: 5px; cursor: pointer; font-weight: bold;">
    Continue to apply →
  </button>
</div>
