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
  #ai-tool-explorer .chatpdf-nav { width: 100%; max-height: 80px; }
  #ai-tool-explorer .chatpdf-pdf-panel { display: none; }
  #ai-tool-explorer .explainpaper-body { flex-direction: column; }
  #ai-tool-explorer .ep-explanation-col { width: 100%; }
}
</style>

<p class="ate-intro">Below is a curated overview of conversational AI tools relevant to academic work. These tools differ in how they interact with information — use the filters to browse by category:</p>
<ul class="ate-intro" style="margin: -8px 0 16px 18px; color: #374151; font-size: 14px; line-height: 1.8;">
  <li><strong>General chat</strong> — open-ended assistants for brainstorming, drafting, or explaining concepts</li>
  <li><strong>Research</strong> — tools that search the web in real time and cite their sources, suited for literature orientation</li>
  <li><strong>Document chat</strong> — tools that let you upload a PDF and ask questions directly about its content</li>
  <li><strong>VU license available</strong> — tools you can access through your institutional account</li>
</ul>
<p class="ate-intro">Most tools offer a free version with core functionality, alongside a paid tier that unlocks additional features such as higher usage limits, more powerful models, or advanced capabilities. Select a tool to see a simulated example of what it looks like in practice.</p>

<div class="ate-filters" id="ate-filters">
  <button class="ate-filter active" data-filter="all">All tools</button>
  <button class="ate-filter" data-filter="general-chat">General chat</button>
  <button class="ate-filter" data-filter="research">Research</button>
  <button class="ate-filter" data-filter="document-chat">Document chat</button>
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
      <div class="ate-logo" style="background:linear-gradient(135deg,#0078d4,#50e6ff);">M</div>
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
      html: '<div class="mock-chatpdf"><div class="chatpdf-nav"><div class="chatpdf-nav-top"><div class="chatpdf-logo-row"><div class="chatpdf-logo-icon">C</div><span class="chatpdf-logo-text">ChatPDF</span><button class="chatpdf-new-btn">+ New</button></div></div><div class="chatpdf-nav-section"><div class="chatpdf-nav-label">Chats</div><div class="chatpdf-nav-item active">Asynchronous learning&#8211; a general review of best prac&#8230;</div></div><div class="chatpdf-nav-section"><div class="chatpdf-nav-label">Folders <span class="chatpdf-nav-label-subfolder">+ New folder</span></div></div><div class="chatpdf-nav-section"><div class="chatpdf-nav-label">Tools</div><div class="chatpdf-nav-item">AI Writer</div><div class="chatpdf-nav-item">AI Detector</div><div class="chatpdf-nav-item">YouTube Chat</div><div class="chatpdf-nav-item">Research</div></div><div class="chatpdf-nav-footer"><div class="chatpdf-nav-footer-text">Sign up for free to save your chat history</div><button class="chatpdf-signup-btn">Sign up</button></div></div><div class="chatpdf-pdf-panel"><div class="chatpdf-pdf-topbar">Asynchronous learning&#8211; a general review of best practices&#8230;</div><div class="chatpdf-pdf-inner"><div class="pdf-page"><div class="pdf-title">Asynchronous learning: a general review of best practices for the 21st century</div><div class="pdf-authors">Thomas Chandy Varkey et al.<br>JRIT, Vol.&#160;16 No.&#160;1, 2023</div><div class="pdf-abstract-head">Abstract</div>The purpose of this paper is to create a &#8220;go-to-guide&#8221; of best practices in the creation of asynchronous courses. Due to the global pandemic, millions of students transitioned from in-class instruction to online programs&#8230;</div></div></div><div class="chatpdf-chat"><div class="chatpdf-msgs"><div class="chatpdf-question">How does spacing and interleaving improve learning in asynchronous courses?</div><div class="chatpdf-answer">Spacing and interleaving enhance learning in asynchronous courses by promoting better retention through the strategic distribution of learning episodes over time. Spacing involves distributing study sessions with intervals between them, improving long-term memory recall <span class="chatpdf-cite">&#8599;3</span> <span class="chatpdf-cite">&#8599;4</span>. Interleaving, or sequencing different topics in an interspersed manner, encourages learners to differentiate between concepts and apply knowledge more flexibly <span class="chatpdf-cite">&#8599;3</span> <span class="chatpdf-cite">&#8599;4</span>.</div><div class="chatpdf-actions"><span class="chatpdf-action-icon">&#128203;</span><span class="chatpdf-action-icon">&#128077;</span><span class="chatpdf-action-icon">&#128078;</span></div></div><div class="chatpdf-input-row"><div class="mock-input-box" style="flex:1;">Ask any question&#8230;</div><div class="chatpdf-input-chips"><span class="chatpdf-chip active">Fast</span><span class="chatpdf-chip">Quality</span></div></div></div></div>'
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
