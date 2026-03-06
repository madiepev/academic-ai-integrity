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

<div id="ai-tool-explorer">
<style>
#ai-tool-explorer { margin: 16px 0 24px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
#ai-tool-explorer p.ate-intro { color: #374151; line-height: 1.7; margin-bottom: 18px; font-size: 14px; }

/* Filter pills */
#ai-tool-explorer .ate-filters { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 20px; }
#ai-tool-explorer .ate-filter { padding: 6px 15px; border-radius: 20px; border: 1.5px solid #d1d5db; background: white; color: #374151; font-size: 12px; font-weight: 600; cursor: pointer; transition: all 0.15s; font-family: inherit; }
#ai-tool-explorer .ate-filter:hover { border-color: #6366f1; color: #6366f1; }
#ai-tool-explorer .ate-filter.active { background: #6366f1; border-color: #6366f1; color: white; }

/* Tool cards grid */
#ai-tool-explorer .ate-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(210px, 1fr)); gap: 12px; margin-bottom: 20px; }
#ai-tool-explorer .ate-card { border: 1.5px solid #e5e7eb; border-radius: 12px; padding: 15px; background: white; cursor: pointer; transition: all 0.18s; display: flex; flex-direction: column; gap: 9px; }
#ai-tool-explorer .ate-card:hover { border-color: #6366f1; box-shadow: 0 4px 16px rgba(99,102,241,0.12); transform: translateY(-1px); }
#ai-tool-explorer .ate-card.selected { border-color: #6366f1; box-shadow: 0 0 0 3px rgba(99,102,241,0.15); }
#ai-tool-explorer .ate-card.hidden { display: none; }
#ai-tool-explorer .ate-card-top { display: flex; align-items: center; gap: 10px; }
#ai-tool-explorer .ate-logo { width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: 800; color: white; }
#ai-tool-explorer .ate-name { font-size: 13.5px; font-weight: 700; color: #111827; }
#ai-tool-explorer .ate-provider { font-size: 11px; color: #9ca3af; }
#ai-tool-explorer .ate-desc { font-size: 12px; color: #6b7280; line-height: 1.6; }
#ai-tool-explorer .ate-tags { display: flex; flex-wrap: wrap; gap: 5px; margin-top: auto; padding-top: 4px; }
#ai-tool-explorer .ate-tag { padding: 2px 9px; border-radius: 10px; font-size: 10px; font-weight: 600; }
#ai-tool-explorer .ate-tag.general-chat { background: #ede9fe; color: #5b21b6; }
#ai-tool-explorer .ate-tag.research { background: #dbeafe; color: #1e40af; }
#ai-tool-explorer .ate-tag.document-chat { background: #dcfce7; color: #166534; }
#ai-tool-explorer .ate-tag.vu-available { background: #fef3c7; color: #92400e; }

/* No results */
#ai-tool-explorer .ate-empty { display: none; text-align: center; padding: 28px; color: #9ca3af; font-size: 13px; border: 1px dashed #e5e7eb; border-radius: 10px; margin-bottom: 18px; }
#ai-tool-explorer .ate-empty.visible { display: block; }

/* Preview panel */
#ai-tool-explorer .ate-preview-wrap { display: none; border: 1.5px solid #e5e7eb; border-radius: 14px; overflow: hidden; margin-bottom: 24px; box-shadow: 0 4px 24px rgba(0,0,0,0.07); }
#ai-tool-explorer .ate-preview-wrap.visible { display: block; }
#ai-tool-explorer .ate-preview-header { padding: 11px 16px; background: #f9fafb; border-bottom: 1px solid #f1f5f9; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px; }
#ai-tool-explorer .ate-preview-title { font-size: 13px; font-weight: 700; color: #374151; display: flex; align-items: center; gap: 8px; }
#ai-tool-explorer .ate-preview-badge { font-size: 10px; font-weight: 600; background: #ede9fe; color: #5b21b6; padding: 2px 8px; border-radius: 10px; }
#ai-tool-explorer .ate-preview-actions { display: flex; align-items: center; gap: 10px; }
#ai-tool-explorer .ate-preview-link { font-size: 12px; color: #6366f1; font-weight: 600; text-decoration: none; }
#ai-tool-explorer .ate-preview-link:hover { opacity: 0.75; }
#ai-tool-explorer .ate-preview-close { background: none; border: none; color: #9ca3af; font-size: 16px; cursor: pointer; padding: 2px 6px; border-radius: 4px; font-family: inherit; line-height: 1; }
#ai-tool-explorer .ate-preview-close:hover { background: #f1f5f9; color: #374151; }
#ai-tool-explorer .ate-mock { min-height: 288px; overflow: hidden; }

/* --- Shared mock reset --- */
#ai-tool-explorer .ate-mock * { box-sizing: border-box; margin: 0; padding: 0; list-style: none; }
#ai-tool-explorer .ate-mock ol { padding-left: 18px; list-style: decimal; }
#ai-tool-explorer .ate-mock ul { padding-left: 18px; list-style: disc; }
#ai-tool-explorer .ate-mock li { margin-bottom: 5px; }

/* --- ChatGPT mock --- */
#ai-tool-explorer .mock-chatgpt { display: flex; min-height: 300px; }
#ai-tool-explorer .mock-chatgpt-sidebar { width: 172px; background: #212121; padding: 14px 11px; flex-shrink: 0; }
#ai-tool-explorer .mock-chatgpt-logo { color: white; font-size: 13px; font-weight: 700; display: flex; align-items: center; gap: 6px; margin-bottom: 14px; padding-bottom: 12px; border-bottom: 1px solid #383838; }
#ai-tool-explorer .mock-chatgpt-logo .gpt-icon { width: 22px; height: 22px; background: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 11px; color: #212121; font-weight: 900; flex-shrink: 0; }
#ai-tool-explorer .mock-chatgpt-model { background: #383838; border-radius: 6px; padding: 6px 9px; font-size: 11px; color: #acacac; margin-bottom: 10px; }
#ai-tool-explorer .mock-chatgpt-hist-label { font-size: 9.5px; text-transform: uppercase; letter-spacing: 0.06em; color: #555; font-weight: 700; margin-bottom: 5px; }
#ai-tool-explorer .mock-chatgpt-hist-item { font-size: 11px; color: #acacac; padding: 5px 7px; border-radius: 5px; margin-bottom: 2px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
#ai-tool-explorer .mock-chatgpt-hist-item.active { background: #383838; color: white; }
#ai-tool-explorer .mock-chatgpt-main { flex: 1; background: white; display: flex; flex-direction: column; overflow: hidden; }
#ai-tool-explorer .mock-chatgpt-topbar { padding: 9px 14px; border-bottom: 1px solid #f1f5f9; font-size: 12px; color: #374151; font-weight: 600; display: flex; align-items: center; gap: 6px; }
#ai-tool-explorer .mock-chatgpt-topbar .model-badge { font-size: 10px; background: #f1f5f9; border-radius: 6px; padding: 2px 7px; color: #6b7280; font-weight: 500; }
#ai-tool-explorer .mock-chatgpt-messages { flex: 1; padding: 14px; display: flex; flex-direction: column; gap: 14px; overflow: hidden; }
#ai-tool-explorer .mock-msg-user { align-self: flex-end; background: #f1f5f9; border-radius: 14px 14px 2px 14px; padding: 9px 13px; max-width: 78%; font-size: 12px; color: #1f2937; line-height: 1.5; }
#ai-tool-explorer .mock-msg-ai { display: flex; gap: 8px; max-width: 92%; }
#ai-tool-explorer .mock-msg-ai-icon { width: 24px; height: 24px; background: #212121; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 11px; color: white; font-weight: 800; flex-shrink: 0; margin-top: 2px; }
#ai-tool-explorer .mock-msg-ai-body { font-size: 12px; color: #1f2937; line-height: 1.65; padding-top: 2px; }
#ai-tool-explorer .mock-chatgpt-input { border-top: 1px solid #f1f5f9; padding: 9px 14px; display: flex; align-items: center; gap: 8px; background: white; }
#ai-tool-explorer .mock-input-box { flex: 1; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 7px 11px; font-size: 11px; color: #9ca3af; }

/* --- Copilot mock --- */
#ai-tool-explorer .mock-copilot { background: #f3f4f6; display: flex; flex-direction: column; min-height: 300px; }
#ai-tool-explorer .mock-copilot-nav { background: white; padding: 9px 18px; border-bottom: 1px solid #e5e7eb; display: flex; align-items: center; gap: 10px; }
#ai-tool-explorer .copilot-nav-logo { display: flex; align-items: center; gap: 6px; font-size: 14px; font-weight: 700; color: #1f2937; }
#ai-tool-explorer .copilot-icon { width: 24px; height: 24px; background: linear-gradient(135deg, #0078d4, #50e6ff); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; color: white; flex-shrink: 0; }
#ai-tool-explorer .mock-copilot-body { flex: 1; padding: 18px; max-width: 680px; margin: 0 auto; width: 100%; display: flex; flex-direction: column; gap: 14px; }
#ai-tool-explorer .copilot-user-msg { align-self: flex-end; background: #ede9fe; border-radius: 12px 12px 2px 12px; padding: 9px 13px; max-width: 80%; font-size: 12px; color: #1f2937; line-height: 1.5; }
#ai-tool-explorer .copilot-ai-msg { display: flex; gap: 10px; align-items: flex-start; }
#ai-tool-explorer .copilot-ai-icon { width: 28px; height: 28px; background: linear-gradient(135deg,#0078d4,#50e6ff); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 13px; flex-shrink: 0; }
#ai-tool-explorer .copilot-ai-body { background: white; border: 1px solid #e5e7eb; border-radius: 2px 12px 12px 12px; padding: 11px 14px; font-size: 12px; color: #1f2937; line-height: 1.7; flex: 1; }
#ai-tool-explorer .copilot-ai-body ol { padding-left: 18px; list-style: decimal; }
#ai-tool-explorer .copilot-sources { display: flex; gap: 6px; flex-wrap: wrap; margin-top: 9px; }
#ai-tool-explorer .copilot-source-chip { background: #f1f5f9; border-radius: 6px; padding: 3px 8px; font-size: 10px; color: #6b7280; border: 1px solid #e5e7eb; }
#ai-tool-explorer .mock-copilot-input { background: white; border-top: 1px solid #e5e7eb; padding: 10px 18px; display: flex; align-items: center; gap: 10px; }
#ai-tool-explorer .mock-copilot-input .mock-input-box { border-radius: 20px; }

/* --- Perplexity mock --- */
#ai-tool-explorer .mock-perplexity { background: #1e2028; min-height: 300px; display: flex; flex-direction: column; }
#ai-tool-explorer .mock-perplexity-nav { background: #16181f; padding: 9px 18px; display: flex; align-items: center; gap: 10px; }
#ai-tool-explorer .perplexity-logo { font-size: 13px; font-weight: 800; color: white; display: flex; align-items: center; gap: 6px; }
#ai-tool-explorer .perplexity-icon { width: 22px; height: 22px; background: linear-gradient(135deg,#20b2aa,#00d4ff); border-radius: 6px; flex-shrink: 0; }
#ai-tool-explorer .perplexity-nav-btn { font-size: 11px; color: #6b7280; background: #1e2028; padding: 4px 10px; border-radius: 6px; }
#ai-tool-explorer .mock-perplexity-body { flex: 1; padding: 18px; display: grid; grid-template-columns: 1fr 190px; gap: 14px; min-height: 230px; }
#ai-tool-explorer .perplexity-main { display: flex; flex-direction: column; gap: 12px; }
#ai-tool-explorer .perplexity-query { font-size: 15px; font-weight: 700; color: white; line-height: 1.4; padding-bottom: 10px; border-bottom: 1px solid #2e3040; }
#ai-tool-explorer .perplexity-answer { font-size: 12px; color: #d1d5db; line-height: 1.75; }
#ai-tool-explorer .perplexity-cite { display: inline-flex; align-items: center; justify-content: center; width: 15px; height: 15px; background: #2e3040; border-radius: 4px; font-size: 9px; color: #20b2aa; font-weight: 700; margin: 0 1px; vertical-align: middle; }
#ai-tool-explorer .perplexity-sources-col { background: #16181f; border-radius: 9px; padding: 11px; }
#ai-tool-explorer .sources-heading { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.07em; color: #6b7280; margin-bottom: 9px; }
#ai-tool-explorer .source-item { display: flex; gap: 7px; margin-bottom: 9px; align-items: flex-start; }
#ai-tool-explorer .source-num { width: 16px; height: 16px; background: #2e3040; border-radius: 4px; font-size: 9px; color: #20b2aa; font-weight: 700; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
#ai-tool-explorer .source-text { font-size: 10.5px; color: #9ca3af; line-height: 1.5; }
#ai-tool-explorer .source-text strong { color: #d1d5db; font-size: 10.5px; display: block; }

/* --- ChatPDF mock --- */
#ai-tool-explorer .mock-chatpdf { display: flex; min-height: 300px; background: white; }
#ai-tool-explorer .chatpdf-sidebar { width: 44%; background: #f8fafc; border-right: 1px solid #e5e7eb; display: flex; flex-direction: column; flex-shrink: 0; }
#ai-tool-explorer .chatpdf-pdf-header { background: #dc2626; padding: 7px 11px; font-size: 11px; font-weight: 700; color: white; display: flex; align-items: center; gap: 5px; }
#ai-tool-explorer .chatpdf-pdf-body { flex: 1; padding: 12px; overflow: hidden; }
#ai-tool-explorer .pdf-page { background: white; border: 1px solid #d1d5db; border-radius: 3px; padding: 14px; font-size: 9.5px; color: #374151; line-height: 1.7; box-shadow: 0 2px 8px rgba(0,0,0,0.07); font-family: 'Times New Roman', serif; }
#ai-tool-explorer .pdf-title { font-size: 11px; font-weight: 700; text-align: center; margin-bottom: 6px; color: #111827; }
#ai-tool-explorer .pdf-authors { font-size: 9px; text-align: center; color: #6b7280; margin-bottom: 8px; }
#ai-tool-explorer .pdf-abstract-head { font-weight: 700; margin-bottom: 3px; }
#ai-tool-explorer .pdf-highlight { background: #fef08a; border-radius: 2px; }
#ai-tool-explorer .chatpdf-chat { flex: 1; display: flex; flex-direction: column; background: white; }
#ai-tool-explorer .chatpdf-chat-header { padding: 9px 13px; border-bottom: 1px solid #e5e7eb; font-size: 12px; font-weight: 700; color: #111827; display: flex; align-items: center; gap: 5px; }
#ai-tool-explorer .chatpdf-msgs { flex: 1; padding: 11px 13px; display: flex; flex-direction: column; gap: 11px; overflow: hidden; }
#ai-tool-explorer .chatpdf-msg-user { align-self: flex-end; background: #dc2626; color: white; border-radius: 12px 12px 2px 12px; padding: 8px 11px; font-size: 11.5px; max-width: 82%; line-height: 1.4; }
#ai-tool-explorer .chatpdf-msg-ai { align-self: flex-start; background: #f1f5f9; color: #1f2937; border-radius: 2px 12px 12px 12px; padding: 9px 11px; font-size: 11.5px; max-width: 87%; line-height: 1.6; }
#ai-tool-explorer .chatpdf-input-row { border-top: 1px solid #e5e7eb; padding: 7px 11px; display: flex; align-items: center; gap: 7px; }

/* --- Explain Paper mock --- */
#ai-tool-explorer .mock-explainpaper { background: white; min-height: 290px; display: flex; flex-direction: column; }
#ai-tool-explorer .explainpaper-nav { background: white; border-bottom: 1px solid #e5e7eb; padding: 9px 15px; display: flex; align-items: center; justify-content: space-between; }
#ai-tool-explorer .explainpaper-logo { font-size: 13px; font-weight: 800; color: #111827; display: flex; align-items: center; gap: 6px; }
#ai-tool-explorer .explainpaper-logo-icon { width: 22px; height: 22px; background: #4f46e5; border-radius: 6px; color: white; display: flex; align-items: center; justify-content: center; font-size: 11px; flex-shrink: 0; }
#ai-tool-explorer .explainpaper-body { flex: 1; display: flex; overflow: hidden; }
#ai-tool-explorer .ep-paper-col { flex: 1; padding: 18px; border-right: 1px solid #e5e7eb; overflow: hidden; font-family: 'Times New Roman', serif; font-size: 11px; color: #374151; line-height: 1.75; }
#ai-tool-explorer .ep-section-head { font-weight: 700; font-size: 12px; margin-bottom: 7px; color: #111827; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
#ai-tool-explorer .ep-annotate-bar { background: #ede9fe; border: 1.5px dashed #7c3aed; border-radius: 6px; padding: 4px 8px; font-size: 10.5px; color: #5b21b6; font-style: italic; margin: 8px 0; text-align: center; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
#ai-tool-explorer .ep-explanation-col { width: 270px; background: #faf5ff; border-left: 3px solid #7c3aed; padding: 15px; display: flex; flex-direction: column; gap: 10px; flex-shrink: 0; }
#ai-tool-explorer .ep-explanation-head { font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.07em; color: #7c3aed; }
#ai-tool-explorer .ep-explanation-text { font-size: 11.5px; color: #374151; line-height: 1.7; }
#ai-tool-explorer .ep-explanation-text em { color: #5b21b6; font-style: normal; font-weight: 600; }
#ai-tool-explorer .ep-follow-up { background: white; border: 1px solid #e9d5ff; border-radius: 8px; padding: 8px 10px; font-size: 11px; color: #6b7280; margin-top: auto; }
#ai-tool-explorer .ep-follow-up strong { color: #7c3aed; display: block; font-size: 9.5px; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 2px; }

/* --- Gemini mock --- */
#ai-tool-explorer .mock-gemini { background: white; min-height: 300px; display: flex; flex-direction: column; }
#ai-tool-explorer .gemini-nav { background: white; border-bottom: 1px solid #e5e7eb; padding: 9px 18px; display: flex; align-items: center; gap: 10px; }
#ai-tool-explorer .gemini-logo { display: flex; align-items: center; gap: 6px; font-size: 14px; font-weight: 700; color: #1f2937; }
#ai-tool-explorer .gemini-star { font-size: 20px; background: linear-gradient(135deg,#4285f4,#9c27b0,#e91e63); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
#ai-tool-explorer .gemini-body { flex: 1; padding: 18px 22px; max-width: 660px; margin: 0 auto; width: 100%; display: flex; flex-direction: column; gap: 13px; }
#ai-tool-explorer .gemini-user-msg { align-self: flex-end; background: #e8f0fe; border-radius: 14px 14px 2px 14px; padding: 9px 13px; max-width: 80%; font-size: 12px; color: #1f2937; line-height: 1.5; }
#ai-tool-explorer .gemini-ai-msg { display: flex; gap: 10px; align-items: flex-start; }
#ai-tool-explorer .gemini-ai-icon { width: 26px; height: 26px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; background: linear-gradient(135deg,#4285f4 0%,#9c27b0 50%,#e91e63 100%); }
#ai-tool-explorer .gemini-ai-body { flex: 1; font-size: 12px; color: #1f2937; line-height: 1.75; padding-top: 2px; }
#ai-tool-explorer .gemini-ai-body ul { padding-left: 18px; list-style: disc; }
#ai-tool-explorer .gemini-week-badge { display: inline-block; background: #e8f0fe; color: #1a73e8; font-size: 10px; font-weight: 700; padding: 2px 8px; border-radius: 8px; margin-right: 3px; }
#ai-tool-explorer .mock-gemini-input { border-top: 1px solid #e5e7eb; padding: 10px 22px; display: flex; align-items: center; gap: 10px; background: white; }
#ai-tool-explorer .mock-gemini-input .mock-input-box { border-radius: 22px; }

@media (max-width: 600px) {
  #ai-tool-explorer .ate-grid { grid-template-columns: 1fr 1fr; }
  #ai-tool-explorer .mock-chatgpt-sidebar { display: none; }
  #ai-tool-explorer .mock-perplexity-body { grid-template-columns: 1fr; }
  #ai-tool-explorer .perplexity-sources-col { display: none; }
  #ai-tool-explorer .mock-chatpdf { flex-direction: column; }
  #ai-tool-explorer .chatpdf-sidebar { width: 100%; max-height: 130px; overflow: hidden; }
  #ai-tool-explorer .explainpaper-body { flex-direction: column; }
  #ai-tool-explorer .ep-explanation-col { width: 100%; }
}
</style>

<p class="ate-intro">Below is a curated overview of conversational AI tools relevant to academic work. These tools differ in how they interact with information — some are general assistants, others search the web in real time, and some let you work directly with documents. Select a tool to see a simulated example of what it looks like in practice.</p>

<div class="ate-filters" id="ate-filters">
  <button class="ate-filter active" data-filter="all">All tools</button>
  <button class="ate-filter" data-filter="general-chat">General chat</button>
  <button class="ate-filter" data-filter="research">Research</button>
  <button class="ate-filter" data-filter="document-chat">Document chat</button>
  <button class="ate-filter" data-filter="vu-available">VU available</button>
</div>

<div class="ate-grid" id="ate-grid">

  <div class="ate-card" data-tool="chatgpt" data-tags="general-chat" onclick="ateSelect(this)">
    <div class="ate-card-top">
      <div class="ate-logo" style="background:#212121;">G</div>
      <div><div class="ate-name">ChatGPT</div><div class="ate-provider">OpenAI</div></div>
    </div>
    <div class="ate-desc">A general-purpose AI assistant for brainstorming, drafting, summarising, and explaining concepts across virtually any topic.</div>
    <div class="ate-tags"><span class="ate-tag general-chat">General chat</span></div>
  </div>

  <div class="ate-card" data-tool="copilot" data-tags="general-chat vu-available" onclick="ateSelect(this)">
    <div class="ate-card-top">
      <div class="ate-logo" style="background:linear-gradient(135deg,#0078d4,#50e6ff);">M</div>
      <div><div class="ate-name">Microsoft Copilot</div><div class="ate-provider">Microsoft</div></div>
    </div>
    <div class="ate-desc">Microsoft's web-connected AI assistant, available to VU students via institutional account with data privacy protections.</div>
    <div class="ate-tags">
      <span class="ate-tag general-chat">General chat</span>
      <span class="ate-tag vu-available">VU available</span>
    </div>
  </div>

  <div class="ate-card" data-tool="perplexity" data-tags="general-chat research" onclick="ateSelect(this)">
    <div class="ate-card-top">
      <div class="ate-logo" style="background:linear-gradient(135deg,#20b2aa,#00d4ff);">P</div>
      <div><div class="ate-name">Perplexity</div><div class="ate-provider">Perplexity AI</div></div>
    </div>
    <div class="ate-desc">A research-oriented AI assistant that answers questions with real-time web search and automatically cites its sources.</div>
    <div class="ate-tags">
      <span class="ate-tag general-chat">General chat</span>
      <span class="ate-tag research">Research</span>
    </div>
  </div>

  <div class="ate-card" data-tool="chatpdf" data-tags="document-chat" onclick="ateSelect(this)">
    <div class="ate-card-top">
      <div class="ate-logo" style="background:#dc2626;">C</div>
      <div><div class="ate-name">ChatPDF</div><div class="ate-provider">ChatPDF.com</div></div>
    </div>
    <div class="ate-desc">Upload a PDF — a research paper, textbook chapter, or report — and ask questions directly about its content.</div>
    <div class="ate-tags"><span class="ate-tag document-chat">Document chat</span></div>
  </div>

  <div class="ate-card" data-tool="explainpaper" data-tags="document-chat research" onclick="ateSelect(this)">
    <div class="ate-card-top">
      <div class="ate-logo" style="background:#4f46e5;">E</div>
      <div><div class="ate-name">Explain Paper</div><div class="ate-provider">Explainpaper.com</div></div>
    </div>
    <div class="ate-desc">Upload a research paper and highlight any passage you find confusing to get a plain-language explanation of that section.</div>
    <div class="ate-tags">
      <span class="ate-tag document-chat">Document chat</span>
      <span class="ate-tag research">Research</span>
    </div>
  </div>

  <div class="ate-card" data-tool="gemini" data-tags="general-chat" onclick="ateSelect(this)">
    <div class="ate-card-top">
      <div class="ate-logo" style="background:linear-gradient(135deg,#4285f4,#9c27b0);">✦</div>
      <div><div class="ate-name">Google Gemini</div><div class="ate-provider">Google</div></div>
    </div>
    <div class="ate-desc">Google's multimodal AI assistant for text, reasoning, and planning tasks, accessible via a personal or university Google account.</div>
    <div class="ate-tags"><span class="ate-tag general-chat">General chat</span></div>
  </div>

</div>

<div class="ate-empty" id="ate-empty">No tools match this filter.</div>

<div class="ate-preview-wrap" id="ate-preview-wrap">
  <div class="ate-preview-header">
    <div class="ate-preview-title">
      <span id="ate-preview-name">Tool</span>
      <span class="ate-preview-badge">Simulated interface</span>
    </div>
    <div class="ate-preview-actions">
      <a class="ate-preview-link" id="ate-preview-link" href="#" target="_blank">Open tool &#8599;</a>
      <button class="ate-preview-close" onclick="ateClose()">&#x2715;</button>
    </div>
  </div>
  <div class="ate-mock" id="ate-mock-area"></div>
</div>

<script>
(function() {
  var TOOLS = {
    chatgpt: {
      name: 'ChatGPT',
      url: 'https://chat.openai.com',
      html: '<div class="mock-chatgpt"><div class="mock-chatgpt-sidebar"><div class="mock-chatgpt-logo"><div class="gpt-icon">G</div>ChatGPT</div><div class="mock-chatgpt-model">GPT-4o &#9662;</div><div class="mock-chatgpt-hist-label">Today</div><div class="mock-chatgpt-hist-item active">Confirmation bias in res&#8230;</div><div class="mock-chatgpt-hist-item">Literature review structure</div><div class="mock-chatgpt-hist-item">APA citation format</div></div><div class="mock-chatgpt-main"><div class="mock-chatgpt-topbar">ChatGPT <span class="model-badge">GPT-4o</span></div><div class="mock-chatgpt-messages"><div class="mock-msg-user">Explain the concept of confirmation bias and why it is relevant in academic research.</div><div class="mock-msg-ai"><div class="mock-msg-ai-icon">G</div><div class="mock-msg-ai-body"><strong>Confirmation bias</strong> is the tendency to search for, interpret, and recall information in a way that confirms your pre-existing beliefs, while giving less attention to contradictory evidence.<br><br>In academic research, this can show up when a researcher focuses selectively on studies that support their hypothesis and dismisses conflicting findings as outliers. It also affects data interpretation &#8212; two researchers looking at identical results may reach different conclusions based on prior beliefs.<br><br><strong>Why it matters:</strong> Peer review, pre-registration of hypotheses, and systematic reviews are all partly designed to counteract confirmation bias in research practice.</div></div></div><div class="mock-chatgpt-input"><div class="mock-input-box">Message ChatGPT</div></div></div></div>'
    },
    copilot: {
      name: 'Microsoft Copilot',
      url: 'https://copilot.microsoft.com',
      html: '<div class="mock-copilot"><div class="mock-copilot-nav"><div class="copilot-nav-logo"><div class="copilot-icon">&#9671;</div>Microsoft Copilot</div></div><div class="mock-copilot-body"><div class="copilot-user-msg">Help me structure an essay introduction about the effectiveness of climate policy.</div><div class="copilot-ai-msg"><div class="copilot-ai-icon">&#9671;</div><div class="copilot-ai-body">Here is a suggested structure for your introduction:<ol><li><strong style="color:#0078d4">Hook</strong> &#8212; Open with a striking fact, e.g. &#8220;Global temperatures have now risen 1.2&#8201;&#176;C above pre-industrial levels, yet emission trajectories remain off-track.&#8221;</li><li><strong style="color:#0078d4">Context</strong> &#8212; Briefly situate climate policy within the scientific consensus and political landscape.</li><li><strong style="color:#0078d4">Issue</strong> &#8212; Identify the specific tension your essay addresses (e.g. the gap between policy ambition and measurable outcomes).</li><li><strong style="color:#0078d4">Thesis</strong> &#8212; State your central argument clearly in 1&#8211;2 sentences.</li></ol><div class="copilot-sources"><span class="copilot-source-chip">&#128279; IPCC AR6 Summary</span><span class="copilot-source-chip">&#128279; IEA Policy Review 2024</span></div></div></div></div><div class="mock-copilot-input"><div class="mock-input-box">Ask me anything&#8230;</div></div></div>'
    },
    perplexity: {
      name: 'Perplexity',
      url: 'https://www.perplexity.ai',
      html: '<div class="mock-perplexity"><div class="mock-perplexity-nav"><div class="perplexity-logo"><div class="perplexity-icon"></div>Perplexity</div><div class="perplexity-nav-btn">New thread +</div></div><div class="mock-perplexity-body"><div class="perplexity-main"><div class="perplexity-query">What are the current academic debates around AI hallucinations?</div><div class="perplexity-answer">Researchers are actively debating several aspects of large language model hallucinations&#160;<span class="perplexity-cite">1</span>. Key disagreements concern: (1)&#160;root causes &#8212; whether they stem from training data quality or the fundamental nature of next-token prediction&#160;<span class="perplexity-cite">2</span>; (2)&#160;how to reliably benchmark hallucination rates across tasks; and (3)&#160;whether retrieval-augmented generation (RAG) reduces hallucinations without introducing new citation accuracy tradeoffs&#160;<span class="perplexity-cite">3</span>.<br><br>Some researchers argue hallucinations are intrinsic to probabilistic language models and cannot be fully eliminated, while others contend that grounding models in verified knowledge bases brings rates to acceptable levels for specific academic use cases.</div></div><div class="perplexity-sources-col"><div class="sources-heading">Sources</div><div class="source-item"><div class="source-num">1</div><div class="source-text"><strong>Huang et al. (2023)</strong>A Survey on Hallucination in LLMs</div></div><div class="source-item"><div class="source-num">2</div><div class="source-text"><strong>Ji et al. (2023)</strong>Survey of Hallucination in NLG</div></div><div class="source-item"><div class="source-num">3</div><div class="source-text"><strong>Lewis et al. (2020)</strong>RAG for Knowledge-Intensive Tasks</div></div></div></div></div>'
    },
    chatpdf: {
      name: 'ChatPDF',
      url: 'https://www.chatpdf.com',
      html: '<div class="mock-chatpdf"><div class="chatpdf-sidebar"><div class="chatpdf-pdf-header">&#128196; uploaded-paper.pdf</div><div class="chatpdf-pdf-body"><div class="pdf-page"><div class="pdf-title">The Effect of Spaced Repetition on Long-term Retention in L2 Vocabulary Learning</div><div class="pdf-authors">Andersen, T. &amp; Nguyen, L. (2022). Journal of Applied Linguistics, 18(2), 44&#8211;61.</div><div class="pdf-abstract-head">Abstract</div>This study investigates whether spaced repetition schedules outperform massed practice for vocabulary retention among second-language learners. A randomised controlled trial (n&#160;=&#160;120) was conducted over eight weeks. <span class="pdf-highlight">Results indicate significantly higher retention scores in the spaced repetition group at both four-week and eight-week follow-up assessments</span>, with an effect size of d&#160;=&#160;0.68 (p&#160;&lt;&#160;.001). Implications for digital vocabulary platforms are discussed.</div></div></div><div class="chatpdf-chat"><div class="chatpdf-chat-header">&#128172; Chat with paper</div><div class="chatpdf-msgs"><div class="chatpdf-msg-user">What is the main research question and method used in this paper?</div><div class="chatpdf-msg-ai">The paper asks: <strong style="color:#dc2626">Does spaced repetition outperform massed practice for L2 vocabulary retention?</strong><br><br>The authors used a randomised controlled trial with 120 undergraduate students assigned to either a spaced repetition group or a control (massed practice) group. Retention was measured at four and eight weeks post-training.</div></div><div class="chatpdf-input-row"><div class="mock-input-box">Ask about this paper&#8230;</div></div></div></div>'
    },
    explainpaper: {
      name: 'Explain Paper',
      url: 'https://www.explainpaper.com',
      html: '<div class="mock-explainpaper"><div class="explainpaper-nav"><div class="explainpaper-logo"><div class="explainpaper-logo-icon">E</div>Explainpaper</div><div style="font-size:11px;color:#6b7280;">Highlight any text to explain it</div></div><div class="explainpaper-body"><div class="ep-paper-col"><div class="ep-section-head">3. Methods</div><p style="margin-bottom:8px;">Participants were randomly assigned to either the spaced repetition condition or the massed practice condition using a computer-generated allocation sequence concealed from the researchers until assignment.</p><div class="ep-annotate-bar">&#9646; Highlighted: &#8220;computer-generated allocation sequence concealed from the researchers&#8221;</div><p>Outcome measures consisted of a 50-item receptive vocabulary test administered at baseline, four weeks, and eight weeks. Retention scores were analysed using a mixed-effects model with condition and time as fixed predictors, controlling for baseline performance.</p></div><div class="ep-explanation-col"><div class="ep-explanation-head">Explanation</div><div class="ep-explanation-text">This phrase describes <em>concealed (blinded) allocation</em> &#8212; a method to prevent bias. The list assigning participants to groups was generated by a computer beforehand, hidden from the researchers until each person was enrolled. This ensures researchers could not &#8212; even unconsciously &#8212; steer participants toward the group they expected to perform better.<br><br>It is a key quality marker of a well-designed randomised controlled trial.</div><div class="ep-follow-up"><strong>Follow-up question</strong>&#8220;What is a mixed-effects model?&#8221;</div></div></div></div>'
    },
    gemini: {
      name: 'Google Gemini',
      url: 'https://gemini.google.com',
      html: '<div class="mock-gemini"><div class="gemini-nav"><div class="gemini-logo"><span class="gemini-star">&#10022;</span>Gemini</div></div><div class="gemini-body"><div class="gemini-user-msg">Create a 2-week study plan for understanding statistical inference, aimed at a first-year social science student.</div><div class="gemini-ai-msg"><div class="gemini-ai-icon">&#10022;</div><div class="gemini-ai-body"><strong>2-week study plan: Statistical inference</strong><br><br><span class="gemini-week-badge">Week 1</span> <strong style="color:#1a73e8">Foundations</strong><ul><li><strong>Days 1&#8211;2:</strong> Probability basics &#8212; distributions, mean, variance, expected value</li><li><strong>Days 3&#8211;4:</strong> Sampling distributions and the central limit theorem</li><li><strong>Day 5:</strong> Practice problems + review</li></ul><br><span class="gemini-week-badge">Week 2</span> <strong style="color:#1a73e8">Inference</strong><ul><li><strong>Days 6&#8211;7:</strong> Confidence intervals &#8212; construction and interpretation</li><li><strong>Days 8&#8211;9:</strong> Hypothesis testing &#8212; null/alternative hypotheses, t-tests, p-values</li><li><strong>Days 10&#8211;11:</strong> Type I and II errors; statistical power</li><li><strong>Day 14:</strong> Review + past exam questions</li></ul></div></div></div><div class="mock-gemini-input"><div class="mock-input-box">Ask Gemini</div></div></div>'
    }
  };

  window.ateSelect = function(card) {
    var id = card.getAttribute('data-tool');
    var tool = TOOLS[id];
    if (!tool) return;
    document.querySelectorAll('#ate-grid .ate-card').forEach(function(c) { c.classList.remove('selected'); });
    card.classList.add('selected');
    document.getElementById('ate-preview-name').textContent = tool.name;
    document.getElementById('ate-preview-link').href = tool.url;
    document.getElementById('ate-mock-area').innerHTML = tool.html;
    var wrap = document.getElementById('ate-preview-wrap');
    wrap.classList.add('visible');
    setTimeout(function() { wrap.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }, 50);
  };

  window.ateClose = function() {
    document.getElementById('ate-preview-wrap').classList.remove('visible');
    document.querySelectorAll('#ate-grid .ate-card').forEach(function(c) { c.classList.remove('selected'); });
  };

  document.getElementById('ate-filters').addEventListener('click', function(e) {
    var btn = e.target.closest('.ate-filter');
    if (!btn) return;
    document.querySelectorAll('.ate-filter').forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active');
    var f = btn.getAttribute('data-filter');
    var visible = 0;
    document.querySelectorAll('#ate-grid .ate-card').forEach(function(card) {
      var tags = card.getAttribute('data-tags') || '';
      var show = f === 'all' || tags.indexOf(f) !== -1;
      card.classList.toggle('hidden', !show);
      if (!show && card.classList.contains('selected')) { ateClose(); }
      if (show) visible++;
    });
    document.getElementById('ate-empty').classList.toggle('visible', visible === 0);
  });
})();
</script>
</div>

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
