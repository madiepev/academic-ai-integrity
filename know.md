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
#ai-tool-explorer .ate-tag.writing-tools { background: #e0f2fe; color: #0369a1; }

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
#ai-tool-explorer .mock-copilot { background: #f5f6f7; display: flex; flex-direction: column; min-height: 300px; }
#ai-tool-explorer .mock-copilot-nav { background: white; padding: 8px 16px; border-bottom: 1px solid #e5e7eb; display: flex; align-items: center; gap: 8px; }
#ai-tool-explorer .copilot-nav-logo { display: flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 700; color: #1f2937; }
#ai-tool-explorer .copilot-icon { width: 22px; height: 22px; background: linear-gradient(135deg, #cc4fc8, #f9961c); border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 11px; color: white; flex-shrink: 0; }
#ai-tool-explorer .copilot-nav-auto { margin-left: auto; font-size: 11px; font-weight: 600; color: #374151; border: 1.5px solid #d1d5db; border-radius: 18px; padding: 3px 10px; }
#ai-tool-explorer .mock-copilot-body { flex: 1; padding: 14px 20px; max-width: 700px; margin: 0 auto; width: 100%; display: flex; flex-direction: column; gap: 10px; }
#ai-tool-explorer .copilot-date-sep { display: flex; align-items: center; gap: 8px; font-size: 10px; color: #9ca3af; }
#ai-tool-explorer .copilot-date-sep::before, #ai-tool-explorer .copilot-date-sep::after { content: ''; flex: 1; height: 1px; background: #e5e7eb; }
#ai-tool-explorer .copilot-user-msg { align-self: flex-end; background: #e8eaed; border-radius: 12px 12px 2px 12px; padding: 9px 13px; max-width: 80%; font-size: 12px; color: #1f2937; line-height: 1.5; }
#ai-tool-explorer .copilot-response-label { display: flex; align-items: center; gap: 7px; font-size: 13px; font-weight: 700; color: #111827; }
#ai-tool-explorer .copilot-ai-body { font-size: 12px; color: #111827; line-height: 1.7; }
#ai-tool-explorer .copilot-ai-body strong { color: #111827; }
#ai-tool-explorer .copilot-ai-body ul { padding-left: 18px; list-style: disc; }
#ai-tool-explorer .copilot-divider { border: none; border-top: 1px solid #e5e7eb; margin: 6px 0; }
#ai-tool-explorer .copilot-section-head { font-size: 13px; font-weight: 700; color: #111827; margin: 6px 0; }
#ai-tool-explorer .copilot-sub-head { font-size: 12px; font-weight: 700; color: #111827; margin: 7px 0 3px; }
#ai-tool-explorer .copilot-example-label { font-style: italic; font-size: 11.5px; color: #6b7280; margin: 4px 0 2px; }
#ai-tool-explorer .copilot-sources { display: flex; gap: 6px; flex-wrap: wrap; margin-top: 9px; }
#ai-tool-explorer .copilot-source-chip { background: #f1f5f9; border-radius: 6px; padding: 3px 8px; font-size: 10px; color: #6b7280; border: 1px solid #e5e7eb; }
#ai-tool-explorer .mock-copilot-input { background: white; border-top: 1px solid #e5e7eb; padding: 10px 18px; display: flex; align-items: center; gap: 10px; }
#ai-tool-explorer .mock-copilot-input .mock-input-box { border-radius: 20px; }

/* --- Perplexity mock --- */
#ai-tool-explorer .mock-perplexity { background: white; min-height: 300px; display: flex; flex-direction: column; }
#ai-tool-explorer .mock-perplexity-nav { background: white; border-bottom: 1px solid #e5e7eb; padding: 0 18px; display: flex; align-items: center; gap: 4px; }
#ai-tool-explorer .perplexity-tab { font-size: 12px; font-weight: 600; color: #6b7280; padding: 10px 12px; border-bottom: 2px solid transparent; margin-bottom: -1px; display: flex; align-items: center; gap: 5px; }
#ai-tool-explorer .perplexity-tab.active { color: #111827; border-bottom-color: #111827; }
#ai-tool-explorer .perplexity-tab-icon { font-size: 11px; }
#ai-tool-explorer .perplexity-nav-right { margin-left: auto; display: flex; align-items: center; gap: 8px; }
#ai-tool-explorer .perplexity-share-btn { font-size: 10.5px; color: #374151; border: 1px solid #d1d5db; border-radius: 6px; padding: 4px 10px; font-weight: 500; }
#ai-tool-explorer .perplexity-dl-btn { font-size: 10.5px; color: white; background: #111827; border-radius: 6px; padding: 4px 10px; font-weight: 600; }
#ai-tool-explorer .mock-perplexity-body { flex: 1; padding: 14px 22px 6px; display: flex; flex-direction: column; gap: 10px; overflow: hidden; }
#ai-tool-explorer .perplexity-query-bubble { align-self: flex-end; background: #f1f5f9; border-radius: 18px; padding: 7px 14px; font-size: 12px; color: #1f2937; font-weight: 500; max-width: 80%; }
#ai-tool-explorer .perplexity-answer { font-size: 12px; color: #1f2937; line-height: 1.75; }
#ai-tool-explorer .perplexity-answer p { margin-bottom: 8px; }
#ai-tool-explorer .perplexity-source-badge { display: inline-flex; align-items: center; gap: 3px; background: #f1f5f9; border: 1px solid #e5e7eb; border-radius: 10px; padding: 1px 7px; font-size: 9.5px; color: #374151; font-weight: 600; margin: 0 2px; vertical-align: middle; cursor: default; }
#ai-tool-explorer .perplexity-source-badge .psb-dot { width: 7px; height: 7px; border-radius: 50%; background: #6366f1; flex-shrink: 0; }
#ai-tool-explorer .perplexity-h2 { font-size: 13px; font-weight: 700; color: #111827; margin: 6px 0 4px; }
#ai-tool-explorer .perplexity-answer ul { padding-left: 16px; list-style: disc; }
#ai-tool-explorer .perplexity-answer li { margin-bottom: 5px; }
#ai-tool-explorer .perplexity-source-tooltip { background: white; border: 1px solid #e5e7eb; border-radius: 10px; padding: 10px 12px; box-shadow: 0 4px 16px rgba(0,0,0,0.09); max-width: 280px; margin: 2px 0 6px; }
#ai-tool-explorer .pst-header { display: flex; align-items: center; gap: 6px; margin-bottom: 6px; }
#ai-tool-explorer .pst-nav { font-size: 10px; color: #6b7280; display: flex; align-items: center; gap: 4px; }
#ai-tool-explorer .pst-sources-count { font-size: 10px; color: #6b7280; margin-left: auto; display: flex; align-items: center; gap: 4px; }
#ai-tool-explorer .pst-model-icon { width: 14px; height: 14px; border-radius: 3px; background: linear-gradient(135deg,#6366f1,#8b5cf6); }
#ai-tool-explorer .pst-source-icon { width: 18px; height: 18px; border-radius: 4px; background: #1a3a6b; display: flex; align-items: center; justify-content: center; font-size: 8px; font-weight: 800; color: white; flex-shrink: 0; }
#ai-tool-explorer .pst-title { font-size: 11px; font-weight: 700; color: #111827; margin-bottom: 3px; }
#ai-tool-explorer .pst-snippet { font-size: 10.5px; color: #6b7280; line-height: 1.5; }
#ai-tool-explorer .mock-perplexity-input { border-top: 1px solid #e5e7eb; padding: 8px 16px; background: white; display: flex; align-items: center; gap: 8px; }
#ai-tool-explorer .perplexity-followup-box { flex: 1; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 7px 11px; font-size: 11px; color: #9ca3af; }
#ai-tool-explorer .perplexity-input-btns { display: flex; align-items: center; gap: 6px; flex-shrink: 0; }
#ai-tool-explorer .perplexity-input-btn { width: 26px; height: 26px; border-radius: 50%; background: #18a461; display: flex; align-items: center; justify-content: center; font-size: 13px; color: white; }

/* --- ChatPDF mock --- */
#ai-tool-explorer .mock-chatpdf { display: flex; min-height: 300px; background: white; }
#ai-tool-explorer .chatpdf-nav { width: 130px; background: #1a1726; display: flex; flex-direction: column; flex-shrink: 0; overflow: hidden; }
#ai-tool-explorer .chatpdf-nav-top { padding: 10px 9px 8px; border-bottom: 1px solid #2e2840; }
#ai-tool-explorer .chatpdf-logo-row { display: flex; align-items: center; gap: 5px; }
#ai-tool-explorer .chatpdf-logo-icon { width: 18px; height: 18px; background: linear-gradient(135deg,#a855f7,#ec4899); border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 10px; color: white; font-weight: 800; flex-shrink: 0; }
#ai-tool-explorer .chatpdf-logo-text { color: white; font-size: 11.5px; font-weight: 700; flex: 1; }
#ai-tool-explorer .chatpdf-new-btn { background: transparent; border: 1px solid #4b4468; border-radius: 5px; color: #c4b5d4; font-size: 9.5px; padding: 2px 6px; cursor: pointer; font-family: inherit; white-space: nowrap; }
#ai-tool-explorer .chatpdf-nav-section { padding: 8px 9px 4px; }
#ai-tool-explorer .chatpdf-nav-label { font-size: 9.5px; font-weight: 700; color: #7c6f9a; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px; display: flex; align-items: center; justify-content: space-between; }
#ai-tool-explorer .chatpdf-nav-label-subfolder { font-size: 9px; color: #7c6f9a; font-weight: 400; text-transform: none; letter-spacing: 0; }
#ai-tool-explorer .chatpdf-nav-item { font-size: 10px; color: #b0a5c8; padding: 4px 6px; border-radius: 5px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
#ai-tool-explorer .chatpdf-nav-item.active { background: #2e2840; color: white; }
#ai-tool-explorer .chatpdf-nav-footer { margin-top: auto; padding: 9px; border-top: 1px solid #2e2840; }
#ai-tool-explorer .chatpdf-nav-footer-text { font-size: 9px; color: #6b6080; line-height: 1.5; margin-bottom: 7px; }
#ai-tool-explorer .chatpdf-signup-btn { width: 100%; background: #7c3aed; border: none; border-radius: 6px; color: white; font-size: 10px; font-weight: 700; padding: 5px 0; cursor: pointer; font-family: inherit; }
#ai-tool-explorer .chatpdf-pdf-panel { width: 190px; border-right: 1px solid #e5e7eb; background: #f3f4f6; overflow: hidden; display: flex; flex-direction: column; flex-shrink: 0; }
#ai-tool-explorer .chatpdf-pdf-topbar { background: white; border-bottom: 1px solid #e5e7eb; padding: 6px 10px; font-size: 9.5px; color: #6b7280; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
#ai-tool-explorer .chatpdf-pdf-inner { flex: 1; padding: 10px; }
#ai-tool-explorer .pdf-page { background: white; border: 1px solid #d1d5db; padding: 12px; font-size: 8.5px; color: #374151; line-height: 1.7; box-shadow: 0 2px 8px rgba(0,0,0,0.07); font-family: 'Times New Roman', serif; }
#ai-tool-explorer .pdf-title { font-size: 10px; font-weight: 700; text-align: center; margin-bottom: 5px; color: #111827; }
#ai-tool-explorer .pdf-authors { font-size: 8.5px; text-align: center; color: #6b7280; margin-bottom: 7px; }
#ai-tool-explorer .pdf-abstract-head { font-weight: 700; margin-bottom: 3px; }
#ai-tool-explorer .pdf-highlight { background: #fef08a; border-radius: 2px; }
#ai-tool-explorer .chatpdf-chat { flex: 1; display: flex; flex-direction: column; background: white; min-width: 0; }
#ai-tool-explorer .chatpdf-msgs { flex: 1; padding: 14px 14px 8px; display: flex; flex-direction: column; gap: 10px; overflow: hidden; }
#ai-tool-explorer .chatpdf-question { font-size: 12px; color: #111827; font-weight: 500; line-height: 1.5; }
#ai-tool-explorer .chatpdf-answer { font-size: 11px; color: #374151; line-height: 1.7; }
#ai-tool-explorer .chatpdf-cite { display: inline-flex; align-items: center; background: #e0f2fe; color: #0369a1; font-size: 9px; font-weight: 700; border-radius: 10px; padding: 0 5px; margin: 0 1px; vertical-align: middle; }
#ai-tool-explorer .chatpdf-actions { display: flex; gap: 8px; align-items: center; }
#ai-tool-explorer .chatpdf-action-icon { font-size: 12px; color: #9ca3af; }
#ai-tool-explorer .chatpdf-input-row { border-top: 1px solid #f1f5f9; padding: 7px 10px; display: flex; align-items: center; gap: 6px; }
#ai-tool-explorer .chatpdf-input-chips { display: flex; gap: 4px; flex-shrink: 0; }
#ai-tool-explorer .chatpdf-chip { font-size: 9.5px; font-weight: 600; padding: 3px 9px; border-radius: 12px; border: 1px solid #e5e7eb; color: #6b7280; }
#ai-tool-explorer .chatpdf-chip.active { background: #7c3aed; border-color: #7c3aed; color: white; }

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
#ai-tool-explorer .gemini-logo { display: flex; align-items: center; gap: 6px; font-size: 14px; font-weight: 700; color: #1f2937; flex-shrink: 0; }
#ai-tool-explorer .gemini-star { font-size: 18px; color: #1a73e8; -webkit-text-fill-color: #1a73e8; }
#ai-tool-explorer .gemini-nav-title { flex: 1; text-align: center; font-size: 12px; color: #374151; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
#ai-tool-explorer .gemini-body { flex: 1; padding: 18px 22px; max-width: 660px; margin: 0 auto; width: 100%; display: flex; flex-direction: column; gap: 13px; }
#ai-tool-explorer .gemini-user-msg { align-self: flex-end; background: #e8f0fe; border-radius: 14px 14px 2px 14px; padding: 9px 13px; max-width: 80%; font-size: 12px; color: #1f2937; line-height: 1.5; }
#ai-tool-explorer .gemini-ai-msg { display: flex; gap: 10px; align-items: flex-start; }
#ai-tool-explorer .gemini-ai-icon { width: 26px; height: 26px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 13px; flex-shrink: 0; background: #1a73e8; color: white; }
#ai-tool-explorer .gemini-ai-body { flex: 1; font-size: 12px; color: #111827; line-height: 1.75; padding-top: 2px; }
#ai-tool-explorer .gemini-ai-body ul { padding-left: 18px; list-style: disc; }
#ai-tool-explorer .gemini-ai-body strong { color: #111827; }
#ai-tool-explorer .gemini-section-head { font-size: 12.5px; font-weight: 700; color: #111827; margin: 10px 0 4px; }
#ai-tool-explorer .gemini-divider { border: none; border-top: 1px solid #e5e7eb; margin: 8px 0; }
#ai-tool-explorer .mock-gemini-input { border-top: 1px solid #e5e7eb; padding: 10px 22px; display: flex; align-items: center; gap: 10px; background: white; }
#ai-tool-explorer .mock-gemini-input .mock-input-box { border-radius: 22px; }

/* --- Jenni.ai mock --- */
#ai-tool-explorer .mock-jenni { display: flex; min-height: 300px; background: white; }
#ai-tool-explorer .jenni-library { width: 185px; background: #f9fafb; border-right: 1px solid #e5e7eb; display: flex; flex-direction: column; flex-shrink: 0; overflow: hidden; }
#ai-tool-explorer .jenni-lib-header { padding: 9px 12px; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #e5e7eb; background: white; }
#ai-tool-explorer .jenni-lib-title { font-size: 13px; font-weight: 700; color: #111827; }
#ai-tool-explorer .jenni-lib-add { width: 22px; height: 22px; background: #1d2d50; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 15px; color: white; line-height: 1; }
#ai-tool-explorer .jenni-lib-tabs { display: flex; align-items: center; background: white; border-bottom: 1px solid #e5e7eb; padding: 0 7px; }
#ai-tool-explorer .jenni-lib-tab { flex: 1; padding: 6px 0; text-align: center; font-size: 10.5px; font-weight: 600; color: #9ca3af; border-bottom: 2px solid transparent; margin-bottom: -1px; }
#ai-tool-explorer .jenni-lib-tab.active { color: #111827; border-bottom-color: #111827; }
#ai-tool-explorer .jenni-lib-filter-btn { font-size: 10px; color: #9ca3af; padding: 4px 5px; white-space: nowrap; }
#ai-tool-explorer .jenni-lib-search { margin: 7px 9px; background: white; border: 1px solid #e5e7eb; border-radius: 6px; padding: 5px 9px; font-size: 10px; color: #b0b8c2; }
#ai-tool-explorer .jenni-lib-item { padding: 8px 10px; border-bottom: 1px solid #f1f5f9; }
#ai-tool-explorer .jenni-lib-item.active { background: #f0f4ff; border-bottom-color: #e0e7ff; }
#ai-tool-explorer .jenni-lib-item-meta { display: flex; align-items: center; justify-content: space-between; margin-bottom: 2px; }
#ai-tool-explorer .jenni-lib-item-type { font-size: 9.5px; color: #9ca3af; }
#ai-tool-explorer .jenni-lib-item-oa { font-size: 9px; color: #059669; font-weight: 600; background: #d1fae5; padding: 1px 5px; border-radius: 8px; }
#ai-tool-explorer .jenni-lib-item-title { font-size: 10.5px; color: #111827; font-weight: 600; line-height: 1.4; margin-bottom: 2px; }
#ai-tool-explorer .jenni-lib-item-authors { font-size: 9.5px; color: #6b7280; }
#ai-tool-explorer .jenni-main { flex: 1; display: flex; flex-direction: column; overflow: hidden; min-width: 0; }
#ai-tool-explorer .jenni-main-topbar { padding: 8px 16px; border-bottom: 1px solid #e5e7eb; display: flex; align-items: center; gap: 8px; flex-shrink: 0; }
#ai-tool-explorer .jenni-main-title { font-size: 12px; font-weight: 600; color: #111827; flex: 1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
#ai-tool-explorer .jenni-main-btns { display: flex; gap: 6px; flex-shrink: 0; }
#ai-tool-explorer .jenni-btn { font-size: 10px; color: #374151; background: #f3f4f6; border-radius: 5px; padding: 3px 9px; }
#ai-tool-explorer .jenni-main-body { flex: 1; display: flex; overflow: hidden; }
#ai-tool-explorer .jenni-doc-col { flex: 1; padding: 16px 20px; overflow: hidden; border-right: 1px solid #e5e7eb; }
#ai-tool-explorer .jenni-doc-h1 { font-size: 17px; font-weight: 800; color: #111827; margin-bottom: 12px; }
#ai-tool-explorer .jenni-doc-text { font-size: 11.5px; color: #374151; line-height: 1.8; }
#ai-tool-explorer .jenni-cite-chip { color: #4f46e5; font-size: 10.5px; background: #ede9fe; border-radius: 4px; padding: 1px 4px; border: 1px solid #ddd6fe; }
#ai-tool-explorer .jenni-chat-col { width: 230px; flex-shrink: 0; display: flex; flex-direction: column; background: white; }
#ai-tool-explorer .jenni-chat-header { padding: 8px 12px; border-bottom: 1px solid #e5e7eb; display: flex; align-items: center; justify-content: space-between; }
#ai-tool-explorer .jenni-chat-title { font-size: 12px; font-weight: 700; color: #111827; }
#ai-tool-explorer .jenni-chat-new { font-size: 16px; color: #9ca3af; }
#ai-tool-explorer .jenni-chat-msgs { flex: 1; padding: 10px 12px; display: flex; flex-direction: column; gap: 9px; overflow: hidden; }
#ai-tool-explorer .jenni-user-msg { align-self: flex-end; background: #f3f4f6; border-radius: 10px 10px 2px 10px; padding: 7px 9px; font-size: 11px; color: #1f2937; line-height: 1.5; max-width: 88%; }
#ai-tool-explorer .jenni-ai-response { font-size: 11px; color: #374151; line-height: 1.65; }
#ai-tool-explorer .jenni-cite-ref { color: #4f46e5; font-size: 10px; font-weight: 600; }
#ai-tool-explorer .jenni-chat-context { padding: 6px 10px; border-top: 1px solid #e5e7eb; display: flex; flex-wrap: wrap; gap: 4px; background: #f9fafb; }
#ai-tool-explorer .jenni-ctx-chip { font-size: 9.5px; color: #374151; background: white; border: 1px solid #d1d5db; border-radius: 12px; padding: 2px 7px; }
#ai-tool-explorer .jenni-chat-input-row { border-top: 1px solid #e5e7eb; padding: 8px 10px; }
#ai-tool-explorer .jenni-chat-input-row .mock-input-box { border-radius: 8px; font-size: 10.5px; }

/* --- QuillBot mock --- */
#ai-tool-explorer .mock-quillbot { display: flex; min-height: 300px; }
#ai-tool-explorer .qb-sidebar { width: 72px; background: white; border-right: 1px solid #e5e7eb; display: flex; flex-direction: column; align-items: center; padding: 10px 0; gap: 2px; flex-shrink: 0; }
#ai-tool-explorer .qb-sidebar-logo { width: 32px; height: 32px; background: #18a461; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 800; color: white; margin-bottom: 10px; }
#ai-tool-explorer .qb-nav-item { display: flex; flex-direction: column; align-items: center; gap: 3px; padding: 6px 4px; border-radius: 8px; width: 62px; }
#ai-tool-explorer .qb-nav-item.active { background: #f0fdf4; }
#ai-tool-explorer .qb-nav-icon { font-size: 14px; color: #6b7280; line-height: 1; text-align: center; }
#ai-tool-explorer .qb-nav-item.active .qb-nav-icon { color: #18a461; }
#ai-tool-explorer .qb-nav-label { font-size: 9px; color: #6b7280; text-align: center; line-height: 1.3; }
#ai-tool-explorer .qb-nav-item.active .qb-nav-label { color: #15803d; font-weight: 700; }
#ai-tool-explorer .qb-main { flex: 1; background: #f4fdf8; display: flex; flex-direction: column; min-width: 0; }
#ai-tool-explorer .qb-topbar { padding: 9px 14px; display: flex; justify-content: flex-end; }
#ai-tool-explorer .qb-suggestion-chip { background: white; border: 1.5px solid #d1d5db; border-radius: 20px; padding: 5px 14px; font-size: 11px; color: #374151; font-weight: 500; }
#ai-tool-explorer .qb-chat-area { flex: 1; padding: 4px 18px 8px; display: flex; flex-direction: column; gap: 6px; }
#ai-tool-explorer .qb-msg { display: flex; gap: 10px; align-items: flex-start; }
#ai-tool-explorer .qb-bot-icon { width: 28px; height: 28px; background: #18a461; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 800; color: white; flex-shrink: 0; }
#ai-tool-explorer .qb-msg-body { font-size: 12px; color: #1f2937; line-height: 1.7; padding-top: 3px; }
#ai-tool-explorer .qb-ai-label { font-size: 10px; color: #9ca3af; margin-left: 38px; margin-top: 2px; }
#ai-tool-explorer .qb-feedback { display: flex; gap: 10px; margin-left: 38px; }
#ai-tool-explorer .qb-feedback span { font-size: 12px; color: #9ca3af; }
#ai-tool-explorer .qb-input-wrap { background: white; border: 1.5px solid #18a461; border-radius: 12px; margin: 10px 14px; padding: 9px 11px 8px; display: flex; flex-direction: column; gap: 7px; }
#ai-tool-explorer .qb-input-text { font-size: 12px; color: #9ca3af; padding: 0 2px; }
#ai-tool-explorer .qb-input-actions { display: flex; align-items: center; gap: 7px; }
#ai-tool-explorer .qb-attach-btn { font-size: 13px; color: #6b7280; }
#ai-tool-explorer .qb-input-sep { width: 1px; height: 13px; background: #e5e7eb; flex-shrink: 0; }
#ai-tool-explorer .qb-tools-btn { font-size: 11px; color: #374151; font-weight: 500; }
#ai-tool-explorer .qb-send-btn { width: 26px; height: 26px; background: #18a461; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 13px; color: white; margin-left: auto; }

/* --- SciFlow mock --- */
#ai-tool-explorer .mock-sciflow { display: flex; flex-direction: column; background: white; min-height: 300px; }
#ai-tool-explorer .sciflow-topbar { background: white; border-bottom: 1px solid #e5e7eb; padding: 7px 16px; display: flex; align-items: center; gap: 10px; }
#ai-tool-explorer .sciflow-logo-icon { width: 26px; height: 26px; border-radius: 50%; border: 2.5px solid #0e6ead; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
#ai-tool-explorer .sciflow-logo-inner { width: 13px; height: 13px; border-radius: 50%; background: #0e6ead; }
#ai-tool-explorer .sciflow-doctitle { flex: 1; text-align: center; font-size: 12px; color: #9ca3af; }
#ai-tool-explorer .sciflow-topbar-btns { display: flex; gap: 6px; flex-shrink: 0; }
#ai-tool-explorer .sciflow-btn-primary { background: #0e6ead; color: white; border-radius: 6px; padding: 4px 12px; font-size: 11px; font-weight: 600; }
#ai-tool-explorer .sciflow-btn-secondary { background: white; color: #374151; border: 1px solid #d1d5db; border-radius: 6px; padding: 4px 12px; font-size: 11px; font-weight: 500; }
#ai-tool-explorer .sciflow-btn-arrow { background: white; color: #374151; border: 1px solid #d1d5db; border-left: none; border-radius: 0 6px 6px 0; padding: 4px 7px; font-size: 11px; margin-left: -1px; }
#ai-tool-explorer .sciflow-toolbar { background: white; border-bottom: 1px solid #e5e7eb; padding: 5px 14px; display: flex; align-items: center; gap: 7px; }
#ai-tool-explorer .sciflow-tool-btn { font-size: 11px; font-weight: 700; color: #374151; padding: 2px 4px; }
#ai-tool-explorer .sciflow-tool-sep { width: 1px; height: 14px; background: #e5e7eb; flex-shrink: 0; }
#ai-tool-explorer .sciflow-tool-small { font-size: 10.5px; color: #6b7280; padding: 1px 3px; }
#ai-tool-explorer .sciflow-body { flex: 1; display: flex; overflow: hidden; }
#ai-tool-explorer .sciflow-left-margin { width: 55px; flex-shrink: 0; display: flex; flex-direction: column; align-items: flex-end; padding-top: 56px; gap: 30px; padding-right: 8px; }
#ai-tool-explorer .sciflow-section-label { font-size: 9px; color: #9ca3af; white-space: nowrap; }
#ai-tool-explorer .sciflow-doc-area { flex: 1; padding: 12px 18px; overflow: hidden; }
#ai-tool-explorer .sciflow-add-block { display: flex; justify-content: center; margin: 6px 0; }
#ai-tool-explorer .sciflow-add-btn { width: 20px; height: 20px; border: 1.5px solid #0e6ead; border-radius: 4px; color: #0e6ead; display: flex; align-items: center; justify-content: center; font-size: 14px; line-height: 1; }
#ai-tool-explorer .sciflow-doc-title { font-size: 17px; font-weight: 700; color: #111827; text-align: center; margin-bottom: 12px; font-family: Georgia, serif; }
#ai-tool-explorer .sciflow-abstract-block { border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden; }
#ai-tool-explorer .sciflow-abstract-head { background: #f3f4f6; padding: 6px 14px; font-size: 13px; font-weight: 700; color: #111827; font-family: Georgia, serif; }
#ai-tool-explorer .sciflow-abstract-body { padding: 9px 14px; font-size: 11px; color: #374151; line-height: 1.75; }
#ai-tool-explorer .sciflow-keywords { font-style: italic; margin-top: 7px; font-size: 10.5px; color: #6b7280; }
#ai-tool-explorer .sciflow-right-rail { width: 36px; background: #f9fafb; border-left: 1px solid #e5e7eb; display: flex; flex-direction: column; align-items: center; padding: 12px 0; gap: 14px; flex-shrink: 0; }
#ai-tool-explorer .sciflow-rail-icon { font-size: 14px; color: #0e6ead; }
#ai-tool-explorer .sciflow-no-chat-notice { background: #eff6ff; border-top: 1px solid #bfdbfe; padding: 6px 16px; font-size: 10.5px; color: #1e40af; text-align: center; }

@media (max-width: 600px) {
  #ai-tool-explorer .ate-grid { grid-template-columns: 1fr 1fr; }
  #ai-tool-explorer .mock-chatgpt-sidebar { display: none; }
  #ai-tool-explorer .mock-perplexity-body { grid-template-columns: 1fr; }
  #ai-tool-explorer .perplexity-sources-col { display: none; }
  #ai-tool-explorer .mock-chatpdf { flex-direction: column; }
  #ai-tool-explorer .chatpdf-nav { width: 100%; max-height: 80px; }
  #ai-tool-explorer .chatpdf-pdf-panel { display: none; }
  #ai-tool-explorer .explainpaper-body { flex-direction: column; }
  #ai-tool-explorer .ep-explanation-col { width: 100%; }
}
</style>

<p class="ate-intro">Below is a curated overview of conversational AI tools relevant to academic work. These tools differ in how they interact with information — use the filters to browse by category:</p>
<ul class="ate-intro" style="margin: -8px 0 16px 18px; color: #374151; font-size: 14px; line-height: 1.8;">
  <li><strong>General chat</strong> — open-ended assistants for brainstorming, drafting, or explaining concepts</li>
  <li><strong>Research</strong> — tools that perform structured, multi-step research with source retrieval and citations</li>
  <li><strong>Document chat</strong> — tools that let you upload a PDF and ask questions directly about its content</li>
  <li><strong>Writing tools</strong> — dedicated editors for structuring and formatting academic manuscripts (no chat interface)</li>
  <li><strong>VU license available</strong> — tools you can access through your institutional account</li>
</ul>
<p class="ate-intro">Most tools offer a free version with core functionality, alongside a paid tier that unlocks additional features such as higher usage limits, more powerful models, or advanced capabilities. Select a tool to see a simulated example of what it looks like in practice. For a more comprehensive overview, see the <a href="https://buas.libguides.com/az/ai-tools" target="_blank" style="color:#6366f1;font-weight:600;">BUas AI Tools library guide ↗</a>.</p>


<div class="ate-filters" id="ate-filters">
  <button class="ate-filter active" data-filter="all">All tools</button>
  <button class="ate-filter" data-filter="general-chat">General chat</button>
  <button class="ate-filter" data-filter="research">Research</button>
  <button class="ate-filter" data-filter="document-chat">Document chat</button>
  <button class="ate-filter" data-filter="writing-tools">Writing tools</button>
  <button class="ate-filter" data-filter="vu-available">VU license available</button>
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
      <div class="ate-logo" style="background:linear-gradient(135deg,#cc4fc8,#f9961c);">M</div>
      <div><div class="ate-name">Microsoft Copilot</div><div class="ate-provider">Microsoft</div></div>
    </div>
    <div class="ate-desc">Microsoft's web-connected AI assistant, available to VU students via institutional account with data privacy protections.</div>
    <div class="ate-tags">
      <span class="ate-tag general-chat">General chat</span>
      <span class="ate-tag vu-available">VU license available</span>
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

  <div class="ate-card" data-tool="jenni" data-tags="document-chat research" onclick="ateSelect(this)">
    <div class="ate-card-top">
      <div class="ate-logo" style="background:linear-gradient(135deg,#16a34a,#059669);">J</div>
      <div><div class="ate-name">Jenni.ai</div><div class="ate-provider">Jenni</div></div>
    </div>
    <div class="ate-desc">An AI writing assistant built for academic work — manage your reference library, draft with inline citations, and chat with your sources in one workspace.</div>
    <div class="ate-tags">
      <span class="ate-tag document-chat">Document chat</span>
      <span class="ate-tag research">Research</span>
    </div>
  </div>

  <div class="ate-card" data-tool="quillbot" data-tags="general-chat" onclick="ateSelect(this)">
    <div class="ate-card-top">
      <div class="ate-logo" style="background:#18a461;">Q</div>
      <div><div class="ate-name">QuillBot</div><div class="ate-provider">QuillBot AI</div></div>
    </div>
    <div class="ate-desc">A writing assistance suite with a paraphraser, grammar checker, plagiarism detector, and AI chat — designed to help you refine and polish academic writing.</div>
    <div class="ate-tags"><span class="ate-tag general-chat">General chat</span></div>
  </div>

  <div class="ate-card" data-tool="sciflow" data-tags="writing-tools" onclick="ateSelect(this)">
    <div class="ate-card-top">
      <div class="ate-logo" style="background:#0e6ead;">S</div>
      <div><div class="ate-name">SciFlow</div><div class="ate-provider">SciFlow GmbH</div></div>
    </div>
    <div class="ate-desc">A structured academic writing editor for manuscripts and theses — handles formatting, references, and journal export. No AI chat interface.</div>
    <div class="ate-tags"><span class="ate-tag writing-tools">Writing tools</span></div>
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
      html: '<div class="mock-copilot"><div class="mock-copilot-nav"><div class="copilot-nav-logo"><div class="copilot-icon">&#9671;</div>Microsoft Copilot</div><div class="copilot-nav-auto">Auto &#8964;</div></div><div class="mock-copilot-body"><div class="copilot-date-sep">Today</div><div class="copilot-user-msg">Help me structure an essay introduction about the effectiveness of climate policy.</div><div class="copilot-response-label"><div class="copilot-icon">&#9671;</div>Copilot</div><div class="copilot-ai-body">Here&#8217;s a clear, academically solid way to <strong>structure an essay introduction on the effectiveness of climate policy</strong>. You can treat this as a template&#8212;plug in your specific arguments, case studies, or theoretical frameworks.<hr class="copilot-divider"><div class="copilot-section-head">&#129521; Suggested Structure for the Introduction</div><div class="copilot-sub-head">1. Start with a broad, compelling opening</div>Set the context for why climate policy matters&#8212;its global relevance, urgency, and complexity.<div class="copilot-example-label">Example approach:</div><ul><li>Introduce the accelerating impacts of climate change (e.g., rising temperatures, extreme weather).</li></ul><div class="copilot-sub-head">2. Narrow to your specific focus</div>Identify the particular policy dimension your essay examines, such as carbon pricing or international agreements.<div class="copilot-sources"><span class="copilot-source-chip">&#128279; IPCC AR6 Summary</span><span class="copilot-source-chip">&#128279; IEA Policy Review 2024</span></div></div></div><div class="mock-copilot-input"><div class="mock-input-box">Message Copilot</div></div></div>'
    },
    perplexity: {
      name: 'Perplexity',
      url: 'https://www.perplexity.ai',
      html: '<div class="mock-perplexity"><div class="mock-perplexity-nav"><div class="perplexity-tab active"><span class="perplexity-tab-icon">&#9654;</span> Answer</div><div class="perplexity-tab"><span class="perplexity-tab-icon">&#128279;</span> Links</div><div class="perplexity-tab"><span class="perplexity-tab-icon">&#128444;</span> Images</div><div class="perplexity-nav-right"><div class="perplexity-share-btn">&#8679; Share</div><div class="perplexity-dl-btn">Download Comet</div></div></div><div class="mock-perplexity-body"><div class="perplexity-query-bubble">What are the academic debates around AI hallucinations?</div><div class="perplexity-answer"><p>AI hallucinations remain a contested research area, with scholars debating both causes and remedies. <span class="perplexity-source-badge"><span class="psb-dot"></span>arxiv +3</span></p><div class="perplexity-h2">Core debates</div><ul><li><strong>Root causes:</strong> Some researchers attribute hallucinations to training data gaps; others argue they are intrinsic to next-token prediction itself. <span class="perplexity-source-badge"><span class="psb-dot" style="background:#e55"></span>nature +2</span></li><li><strong>Benchmarking:</strong> There is no consensus on how to reliably measure hallucination rates across tasks and domains.</li><li><strong>RAG trade-offs:</strong> Retrieval-augmented generation reduces fabrication but can introduce new citation accuracy issues. <span class="perplexity-source-badge"><span class="psb-dot" style="background:#059669"></span>acl +4</span></li></ul><div class="perplexity-source-tooltip"><div class="pst-header"><div class="pst-nav">&#8249; 1/3 &#8250;</div><div class="pst-sources-count"><div class="pst-model-icon"></div><div class="pst-model-icon" style="background:linear-gradient(135deg,#f59e0b,#ef4444)"></div> 3 sources</div></div><div style="display:flex;gap:7px;align-items:flex-start"><div class="pst-source-icon">acl</div><div><div class="pst-title">Survey on Hallucination in Neural NLG &mdash; ACL Anthology</div><div class="pst-snippet">Hallucination in NLG refers to generated content that is nonsensical or unfaithful to source data. This survey categorises causes and mitigation strategies&#8230;</div></div></div></div></div><div class="mock-perplexity-input"><div class="perplexity-followup-box">Ask a follow-up</div><div class="perplexity-input-btns"><div class="perplexity-input-btn">&#8594;</div></div></div></div>'
    },
    chatpdf: {
      name: 'ChatPDF',
      url: 'https://www.chatpdf.com',
      html: '<div class="mock-chatpdf"><div class="chatpdf-nav"><div class="chatpdf-nav-top"><div class="chatpdf-logo-row"><div class="chatpdf-logo-icon">C</div><span class="chatpdf-logo-text">ChatPDF</span><button class="chatpdf-new-btn">+ New</button></div></div><div class="chatpdf-nav-section"><div class="chatpdf-nav-label">Chats</div><div class="chatpdf-nav-item active">Asynchronous learning&#8211; a general review of best prac&#8230;</div></div><div class="chatpdf-nav-section"><div class="chatpdf-nav-label">Folders <span class="chatpdf-nav-label-subfolder">+ New folder</span></div></div><div class="chatpdf-nav-section"><div class="chatpdf-nav-label">Tools</div><div class="chatpdf-nav-item">AI Writer</div><div class="chatpdf-nav-item">AI Detector</div><div class="chatpdf-nav-item">YouTube Chat</div><div class="chatpdf-nav-item">Research</div></div><div class="chatpdf-nav-footer"><div class="chatpdf-nav-footer-text">Sign up for free to save your chat history</div><button class="chatpdf-signup-btn">Sign up</button></div></div><div class="chatpdf-pdf-panel"><div class="chatpdf-pdf-topbar">Asynchronous learning&#8211; a general review of best practices&#8230;</div><div class="chatpdf-pdf-inner"><div class="pdf-page"><div class="pdf-title">Asynchronous learning: a general review of best practices for the 21st century</div><div class="pdf-authors">Thomas Chandy Varkey et al.<br>JRIT, Vol.&#160;16 No.&#160;1, 2023</div><div class="pdf-abstract-head">Abstract</div>The purpose of this paper is to create a &#8220;go-to-guide&#8221; of best practices in the creation of asynchronous courses. Due to the global pandemic, millions of students transitioned from in-class instruction to online programs&#8230;</div></div></div><div class="chatpdf-chat"><div class="chatpdf-msgs"><div class="chatpdf-question">How does spacing and interleaving improve learning in asynchronous courses?</div><div class="chatpdf-answer">Spacing and interleaving enhance learning in asynchronous courses by promoting better retention through the strategic distribution of learning episodes over time. Spacing involves distributing study sessions with intervals between them, improving long-term memory recall <span class="chatpdf-cite">&#8599;3</span> <span class="chatpdf-cite">&#8599;4</span>. Interleaving, or sequencing different topics in an interspersed manner, encourages learners to differentiate between concepts and apply knowledge more flexibly <span class="chatpdf-cite">&#8599;3</span> <span class="chatpdf-cite">&#8599;4</span>.</div><div class="chatpdf-actions"><span class="chatpdf-action-icon">&#128203;</span><span class="chatpdf-action-icon">&#128077;</span><span class="chatpdf-action-icon">&#128078;</span></div></div><div class="chatpdf-input-row"><div class="mock-input-box" style="flex:1;">Ask any question&#8230;</div><div class="chatpdf-input-chips"><span class="chatpdf-chip active">Fast</span><span class="chatpdf-chip">Quality</span></div></div></div></div>'
    },
    explainpaper: {
      name: 'Explain Paper',
      url: 'https://www.explainpaper.com',
      html: '<div class="mock-explainpaper"><div class="explainpaper-nav"><div class="explainpaper-logo"><div class="explainpaper-logo-icon">E</div>Explainpaper</div><div style="font-size:11px;color:#6b7280;">Highlight any text to explain it</div></div><div class="explainpaper-body"><div class="ep-paper-col"><div class="ep-section-head">3. Methods</div><p style="margin-bottom:8px;">Participants were randomly assigned to either the spaced repetition condition or the massed practice condition using a computer-generated allocation sequence concealed from the researchers until assignment.</p><div class="ep-annotate-bar">&#9646; Highlighted: &#8220;computer-generated allocation sequence concealed from the researchers&#8221;</div><p>Outcome measures consisted of a 50-item receptive vocabulary test administered at baseline, four weeks, and eight weeks. Retention scores were analysed using a mixed-effects model with condition and time as fixed predictors, controlling for baseline performance.</p></div><div class="ep-explanation-col"><div class="ep-explanation-head">Explanation</div><div class="ep-explanation-text">This phrase describes <em>concealed (blinded) allocation</em> &#8212; a method to prevent bias. The list assigning participants to groups was generated by a computer beforehand, hidden from the researchers until each person was enrolled. This ensures researchers could not &#8212; even unconsciously &#8212; steer participants toward the group they expected to perform better.<br><br>It is a key quality marker of a well-designed randomised controlled trial.</div><div class="ep-follow-up"><strong>Follow-up question</strong>&#8220;What is a mixed-effects model?&#8221;</div></div></div></div>'
    },
    jenni: {
      name: 'Jenni.ai',
      url: 'https://jenni.ai',
      html: '<div class="mock-jenni"><div class="jenni-library"><div class="jenni-lib-header"><span class="jenni-lib-title">Library</span><span class="jenni-lib-add">+</span></div><div class="jenni-lib-tabs"><div class="jenni-lib-tab active">Sources</div><div class="jenni-lib-tab">Collections</div><div class="jenni-lib-filter-btn">&#9776; Filter</div></div><div class="jenni-lib-search">Search library&#8230;</div><div class="jenni-lib-item active"><div class="jenni-lib-item-meta"><span class="jenni-lib-item-type">Article &#183; IF 8.8</span><span class="jenni-lib-item-oa">Open Access</span></div><div class="jenni-lib-item-title">Prototyping Hardware &amp; Software for Teaching Digital Circuit Design</div><div class="jenni-lib-item-authors">Tro&#353;t, &#381;emva, Verderber &#183; 2021</div></div><div class="jenni-lib-item"><div class="jenni-lib-item-meta"><span class="jenni-lib-item-type">Article &#183; IF 2.9</span></div><div class="jenni-lib-item-title">AI in Autonomous Vehicles: Challenges and Opportunities</div><div class="jenni-lib-item-authors">Hall, Smith, Johnson &#183; 2021</div></div><div class="jenni-lib-item"><div class="jenni-lib-item-meta"><span class="jenni-lib-item-type">Preprint</span><span class="jenni-lib-item-oa">Open Access</span></div><div class="jenni-lib-item-title">Neural Networks in Natural Language Processing: A Survey</div><div class="jenni-lib-item-authors">Martinez and Clark &#183; 2021</div></div></div><div class="jenni-main"><div class="jenni-main-topbar"><span class="jenni-main-title">Hardware Prototyping for Digital Systems: A Review</span><div class="jenni-main-btns"><span class="jenni-btn">Publish</span><span class="jenni-btn">Export</span></div></div><div class="jenni-main-body"><div class="jenni-doc-col"><div class="jenni-doc-h1">Introduction</div><div class="jenni-doc-text">Traditional logic simulation has proven inadequate for comprehensive digital design verification due to its inability to interact with complete systems <span class="jenni-cite-chip">(Tro&#353;t et al., 2001)</span>. As a result, hardware prototyping has gained prominence as an essential verification step, which can range from simple 3D models to highly complex embedded configurations <span class="jenni-cite-chip">(Tro&#353;t et al., 2001)</span>.</div></div><div class="jenni-chat-col"><div class="jenni-chat-header"><span class="jenni-chat-title">&gt;&gt; AI Chat</span><span class="jenni-chat-new">+</span></div><div class="jenni-chat-msgs"><div class="jenni-user-msg">What did @trost et al conclude in this paper?</div><div class="jenni-ai-response">The paper <span class="jenni-cite-ref">(Tro&#353;t et al., 2001)</span> discusses a prototyping environment for teaching digital circuits. Key findings:<ul><li>FPGA modules provide flexibility for digital design tasks</li><li>Students progress from specification to their own design implementations</li><li>The CPLD interface handles standalone hardware verification</li></ul></div></div><div class="jenni-chat-context"><span class="jenni-ctx-chip">&#128196; Current document &#215;</span><span class="jenni-ctx-chip">&#127760; Web &#215;</span><span class="jenni-ctx-chip">Library &#215;</span></div><div class="jenni-chat-input-row"><div class="mock-input-box">Ask assistant, use @ to mention specific PDFs&#8230;</div></div></div></div></div></div>'
    },
    sciflow: {
      name: 'SciFlow',
      url: 'https://sciflow.net',
      html: '<div class="mock-sciflow"><div class="sciflow-topbar"><div class="sciflow-logo-icon"><div class="sciflow-logo-inner"></div></div><div class="sciflow-doctitle">Document title</div><div class="sciflow-topbar-btns"><div class="sciflow-btn-primary">Invite authors</div><div class="sciflow-btn-secondary">Create revision</div><div class="sciflow-btn-arrow">&#9660;</div></div></div><div class="sciflow-toolbar"><span class="sciflow-tool-btn active">B</span><span class="sciflow-tool-btn"><em>I</em></span><span class="sciflow-tool-small">X&#178;</span><span class="sciflow-tool-small">X&#8322;</span><span class="sciflow-tool-sep"></span><span class="sciflow-tool-small">&#8220; &#8221;</span><span class="sciflow-tool-small">&#9776;</span><span class="sciflow-tool-small">&#8470;</span><span class="sciflow-tool-sep"></span><span class="sciflow-tool-small">cite</span><span class="sciflow-tool-small">&#9636;</span><span class="sciflow-tool-small">&#8721;</span><span class="sciflow-tool-small">&#128279;</span></div><div class="sciflow-body"><div class="sciflow-left-margin"><span class="sciflow-section-label">&mdash;</span><span class="sciflow-section-label">Abstract</span><span class="sciflow-section-label">&mdash;</span></div><div class="sciflow-doc-area"><div class="sciflow-doc-title">Effect of spaced repetition on long-term vocabulary retention</div><div class="sciflow-add-block"><div class="sciflow-add-btn">+</div></div><div class="sciflow-abstract-block"><div class="sciflow-abstract-head">Abstract</div><div class="sciflow-abstract-body">This study investigates whether spaced repetition outperforms massed practice for long-term vocabulary retention in second-language learners. Participants were randomly assigned to either condition over an eight-week intervention.<div class="sciflow-keywords"><em>Keywords:</em> spaced repetition, vocabulary acquisition, long-term retention, SLA</div></div></div><div class="sciflow-add-block"><div class="sciflow-add-btn">+</div></div></div><div class="sciflow-right-rail"><span class="sciflow-rail-icon">&#9783;</span><span class="sciflow-rail-icon">&#128101;</span><span class="sciflow-rail-icon">&#9635;</span><span class="sciflow-rail-icon">&#10003;</span><span class="sciflow-rail-icon">&#8214;</span></div></div><div class="sciflow-no-chat-notice">&#128274; No AI chat interface &mdash; SciFlow is a structured writing and formatting editor</div></div>'
    },
    quillbot: {
      name: 'QuillBot',
      url: 'https://quillbot.com',
      html: '<div class="mock-quillbot"><div class="qb-sidebar"><div class="qb-sidebar-logo">Q</div><div class="qb-nav-item"><div class="qb-nav-icon">&#8635;</div><div class="qb-nav-label">Paraphraser</div></div><div class="qb-nav-item"><div class="qb-nav-icon">Aa</div><div class="qb-nav-label">Grammar Checker</div></div><div class="qb-nav-item"><div class="qb-nav-icon">&#9673;</div><div class="qb-nav-label">AI Detector</div></div><div class="qb-nav-item"><div class="qb-nav-icon">&#8801;</div><div class="qb-nav-label">Plagiarism Checker</div></div><div class="qb-nav-item active"><div class="qb-nav-icon">&#10022;</div><div class="qb-nav-label">AI Chat</div></div></div><div class="qb-main"><div class="qb-topbar"><div class="qb-suggestion-chip">Brainstorm a research idea</div></div><div class="qb-chat-area"><div class="qb-msg"><div class="qb-bot-icon">Q</div><div class="qb-msg-body">Sure! Could you please specify the area or topic you want the idea to be about? For example, <strong>AI in education</strong>, <strong>academic integrity</strong>, or <strong>research methods</strong>? This will help me tailor the brainstorming to your needs.</div></div><div class="qb-ai-label">AI Generated</div><div class="qb-feedback"><span>&#128203;</span><span>&#128077;</span><span>&#128078;</span></div><div style="align-self:flex-end;background:#e5e7eb;border-radius:10px 10px 2px 10px;padding:7px 10px;font-size:12px;color:#1f2937;line-height:1.5;max-width:85%;margin-top:6px;">I\'m a chemistry student at a Dutch university \u2014 what could I research?</div><div class="qb-msg" style="margin-top:4px;"><div class="qb-bot-icon">Q</div><div class="qb-msg-body">Here are a few thesis-worthy angles for a chemistry student:<br><br><strong>1. Green solvent alternatives</strong> \u2014 Evaluate bio-based solvents as replacements for hazardous ones in common organic synthesis protocols.<br><strong>2. Microplastics degradation</strong> \u2014 Investigate photocatalytic methods for breaking down microplastics in aquatic environments.<br><strong>3. Drug stability analysis</strong> \u2014 Study how temperature and humidity affect the shelf life of a common pharmaceutical compound.</div></div><div class="qb-ai-label">AI Generated</div></div><div class="qb-input-wrap"><div class="qb-input-text">Ask me anything</div><div class="qb-input-actions"><span class="qb-attach-btn">&#128206;</span><span class="qb-input-sep"></span><div class="qb-tools-btn">&#10022; Tools</div><div class="qb-send-btn">&#8594;</div></div></div></div></div>'
    },
    gemini: {
      name: 'Google Gemini',
      url: 'https://gemini.google.com',
      html: '<div class="mock-gemini"><div class="gemini-nav"><div class="gemini-logo"><span class="gemini-star">&#10022;</span>Gemini</div><div class="gemini-nav-title">Statistical Inference Study Plan</div></div><div class="gemini-body"><div class="gemini-user-msg">Create a 2-week study plan for understanding statistical inference, aimed at a first-year social science student.</div><div class="gemini-ai-msg"><div class="gemini-ai-icon">&#10022;</div><div class="gemini-ai-body">Statistical inference is the art of using a sample to draw conclusions about a larger population. Since you&#8217;re in your first year, this plan focuses on <strong>intuition and logic</strong> rather than heavy calculus.<hr class="gemini-divider"><div class="gemini-section-head">Week 1: Foundations &amp; The &#8220;Why&#8221;</div>Before you can infer, you need to understand the bridge between your data and the real world.<ul><li><strong>Days 1&#8211;2:</strong> Probability basics &#8212; distributions, mean, variance</li><li><strong>Days 3&#8211;4:</strong> Sampling distributions and the central limit theorem</li><li><strong>Day 5:</strong> Practice problems + review</li></ul><div class="gemini-section-head">Week 2: Inference in Practice</div><ul><li><strong>Days 6&#8211;7:</strong> Confidence intervals &#8212; construction and interpretation</li><li><strong>Days 8&#8211;9:</strong> Hypothesis testing &#8212; null/alternative hypotheses, t-tests, p-values</li><li><strong>Days 10&#8211;11:</strong> Type I and II errors; statistical power</li><li><strong>Day 14:</strong> Review + past exam questions</li></ul></div></div></div><div class="mock-gemini-input"><div class="mock-input-box">Ask Gemini 3</div></div></div>'
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

---

## Check your knowledge

Before moving on, test how well you've understood the key concepts. Choose the path that best matches your experience level:

<div style="display: flex; gap: 20px; margin: 24px 0; flex-wrap: wrap;">
  <a href="navigator/know-assess.html" style="flex: 1; min-width: 220px; text-decoration: none; display: block; padding: 24px; border: 2px solid #667eea; border-radius: 12px; background: #f0f4ff; color: inherit;">
    <div style="font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em; color: #667eea; margin-bottom: 8px;">Navigator track</div>
    <div style="font-size: 16px; font-weight: 700; color: #1e1b4b; margin-bottom: 8px;">Foundation check →</div>
    <div style="font-size: 13px; color: #475569; line-height: 1.6;">New to AI or building on the basics. 3 questions.</div>
  </a>
  <a href="pilot/know-assess.html" style="flex: 1; min-width: 220px; text-decoration: none; display: block; padding: 24px; border: 2px solid #d97706; border-radius: 12px; background: #fffbeb; color: inherit;">
    <div style="font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em; color: #d97706; margin-bottom: 8px;">Pilot track</div>
    <div style="font-size: 16px; font-weight: 700; color: #1e1b4b; margin-bottom: 8px;">Advanced check →</div>
    <div style="font-size: 13px; color: #475569; line-height: 1.6;">Already familiar with AI tools and ready to test deeper knowledge. 5 questions.</div>
  </a>
</div>
