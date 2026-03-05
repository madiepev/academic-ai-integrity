# Case 1: AI disclosure in a formative assessment

<div style="margin-bottom: 20px; display: flex; gap: 10px; flex-wrap: wrap;">
	<button onclick="window.location.href='ethics-cases'" style="padding: 10px 20px; font-size: 14px; background-color: #666; color: white; border: none; border-radius: 5px; cursor: pointer;">
		← Back to cases
	</button>
</div>

---

<div class="case-tags" style="margin-bottom: 24px;">
	<span class="case-tag tag-policy">Disclosure required</span>
	<span class="case-tag tag-theme">Transparency</span>
	<span class="case-tag tag-assessment">Formative</span>
</div>

## The case

An instructor allows the use of generative AI in a course, provided that any such use is disclosed in the assignment. A student submits a draft assignment for feedback and includes a disclosure statement indicating that AI was used for one section of the text.

While reviewing the draft, the instructor notices that within the disclosed section the student has used a technical term that is unrelated to the course and not addressed in the readings or lectures. The term appears inappropriate in context and raises concerns about the student's understanding of the material. The remainder of the assignment appears consistent with the student's previous work, and there is no indication that the student attempted to conceal the use of AI.

The assignment is formative and does not contribute to the student's final grade.

---

## Respond

<div class="reflection-box">
	<p class="reflection-question">How should the instructor respond?</p>
	<textarea class="reflection-input" id="reflection-case1" placeholder="Write your response here..."></textarea>
	<div class="reflection-actions">
		<button class="save-btn" onclick="viewExpertPerspective('case1')">View expert perspective</button>
	</div>
</div>

<div class="expert-panel" id="expert-case1" style="display: none;">
	<div class="expert-perspective">
		<h3 class="expert-title">Expert perspective</h3>
		<p>Because the assignment is formative and does not contribute to the student's grade, and because the student disclosed their AI use as required, a punitive response is not appropriate. The instructor should treat this as a learning opportunity. Feedback should acknowledge the disclosure positively and then address the specific issue directly: note that the technical term appears out of place, explain why it does not align with the course content, and invite the student to reconsider that section using their own understanding. This is precisely the situation that formative assessment and disclosure policies are designed to surface. The instructor might also use the conversation to discuss how AI-generated text can introduce vocabulary that sounds plausible but is contextually incorrect — a useful critical AI literacy lesson.</p>
	</div>

	<div class="reflection-box" style="margin-top: 20px;">
		<p class="reflection-question">How does your response compare? What did you get right, and what would you do differently?</p>
		<textarea class="reflection-input" id="reflection-case1-compare" placeholder="Write your comparison here..."></textarea>
		<div class="reflection-actions">
			<button class="save-btn" onclick="saveReflection('case1-compare')">Save reflection</button>
			<span class="save-status" id="save-status-case1-compare"></span>
		</div>
	</div>
</div>

<style>
	.case-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}

	.case-tag {
		font-size: 12px;
		font-weight: 500;
		padding: 4px 12px;
		border-radius: 999px;
	}

	.tag-policy {
		background-color: #e3f2fd;
		color: #0066cc;
	}

	.tag-theme {
		background-color: #f3e5f5;
		color: #7b1fa2;
	}

	.tag-assessment {
		background-color: #e8f5e9;
		color: #2e7d32;
	}

	.reflection-box {
		background-color: #f8f9fa;
		border: 1px solid #dddddd;
		border-radius: 12px;
		padding: 24px;
		margin-top: 8px;
	}

	.reflection-question {
		font-size: 16px;
		font-weight: 600;
		color: #333333;
		line-height: 1.5;
		margin: 0 0 16px 0;
		border-left: 4px solid #ff6600;
		padding-left: 14px;
	}

	.reflection-input {
		width: 100%;
		min-height: 160px;
		padding: 14px;
		font-size: 14px;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
		line-height: 1.6;
		color: #333333;
		background-color: #ffffff;
		border: 1px solid #cccccc;
		border-radius: 8px;
		box-sizing: border-box;
		resize: vertical;
		transition: border-color 0.15s ease;
	}

	.reflection-input:focus {
		outline: none;
		border-color: #ff6600;
		box-shadow: 0 0 0 3px rgba(255, 102, 0, 0.1);
	}

	.reflection-actions {
		display: flex;
		align-items: center;
		gap: 14px;
		margin-top: 12px;
	}

	.save-btn {
		padding: 9px 22px;
		font-size: 14px;
		font-weight: 500;
		background-color: #ff6600;
		color: #ffffff;
		border: none;
		border-radius: 6px;
		cursor: pointer;
		transition: background-color 0.15s ease;
	}

	.save-btn:hover {
		background-color: #e05a00;
	}

	.save-status {
		font-size: 13px;
		color: #28a745;
		font-weight: 500;
	}

	.expert-panel {
		margin-top: 24px;
	}

	.expert-perspective {
		background-color: #fff8f0;
		border: 1px solid #ffd099;
		border-left: 4px solid #ff6600;
		border-radius: 12px;
		padding: 24px;
	}

	.expert-title {
		font-size: 15px;
		font-weight: 700;
		color: #cc4400;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		margin: 0 0 12px 0;
	}

	.expert-perspective p {
		font-size: 14px;
		line-height: 1.7;
		color: #333333;
		margin: 0;
	}
</style>

<script>
	(function () {
		["reflection-case1", "reflection-case1-compare"].forEach(function (key) {
			const el = document.getElementById(key);
			if (el) {
				const saved = localStorage.getItem(key);
				if (saved) el.value = saved;
			}
		});
		if (localStorage.getItem("reflection-case1-compare") !== null) {
			const panel = document.getElementById("expert-case1");
			if (panel) panel.style.display = "block";
		}
	})();

	function viewExpertPerspective(caseId) {
		const textarea = document.getElementById("reflection-" + caseId);
		if (textarea) {
			localStorage.setItem("reflection-" + caseId, textarea.value);
		}
		const panel = document.getElementById("expert-" + caseId);
		if (panel) {
			panel.style.display = "block";
			panel.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	}

	function saveReflection(caseId) {
		const textarea = document.getElementById("reflection-" + caseId);
		const status = document.getElementById("save-status-" + caseId);
		if (textarea) {
			localStorage.setItem("reflection-" + caseId, textarea.value);
			if (status) {
				status.textContent = "Saved.";
				setTimeout(function () { status.textContent = ""; }, 2500);
			}
		}
	}
</script>
