# Case 3: Restricting AI due to limited instructor expertise

<div style="margin-bottom: 20px; display: flex; gap: 10px; flex-wrap: wrap;">
	<button onclick="window.location.href='ethics-cases'" style="padding: 10px 20px; font-size: 14px; background-color: #666; color: white; border: none; border-radius: 5px; cursor: pointer;">
		← Back to cases
	</button>
</div>

---

<div class="case-tags" style="margin-bottom: 24px;">
	<span class="case-tag tag-policy">AI restricted</span>
	<span class="case-tag tag-theme">Instructor expertise</span>
</div>

## The case

An instructor teaches a course in which the primary learning outcomes focus on disciplinary knowledge and skills that do not rely on the use of generative AI. The instructor decides not to permit the use of AI tools in the course, explaining that AI is not relevant to the subject matter and that its use would not meaningfully support the intended learning outcomes.

The instructor is also aware that they have limited experience with generative AI and insufficient time to stay informed about rapidly evolving AI tools and practices. As a result, they are uncertain about what guidance they could realistically provide to students regarding appropriate or inappropriate AI use. Some students question the restriction, arguing that AI is increasingly common in academic and professional contexts and should be addressed in coursework.

---

## Respond

<div class="reflection-box">
	<p class="reflection-question">How should the instructor respond?</p>
	<textarea class="reflection-input" id="reflection-case3" placeholder="Write your response here..."></textarea>
	<div class="reflection-actions">
		<button class="save-btn" onclick="viewExpertPerspective('case3')">View expert perspective</button>
	</div>
</div>

<div class="expert-panel" id="expert-case3" style="display: none;">
	<div class="expert-perspective">
		<h3 class="expert-title">Expert perspective</h3>
		<p>The instructor's decision to restrict AI is pedagogically defensible if the learning outcomes do not require it, and their honesty about limited expertise is itself a sign of professional integrity. The recommended response to students is to explain the restriction in terms of the course's learning goals — not as a blanket moral stance on AI — and to acknowledge students' broader concerns openly without being dismissive. The instructor might say something like: "AI is not part of this course's assessment design, and I don't yet have the expertise to supervise its use responsibly here. If you want to develop AI skills, I'd encourage you to explore resources outside this course." This is transparent, honest, and keeps the focus on what the course is actually designed to achieve. It avoids both defensiveness and overclaiming authority on a topic where the instructor themselves has acknowledged limits.</p>
	</div>

	<div class="reflection-box" style="margin-top: 20px;">
		<p class="reflection-question">How does your response compare? What did you get right, and what would you do differently?</p>
		<textarea class="reflection-input" id="reflection-case3-compare" placeholder="Write your comparison here..."></textarea>
		<div class="reflection-actions">
			<button class="save-btn" onclick="saveReflection('case3-compare')">Save reflection</button>
			<span class="save-status" id="save-status-case3-compare"></span>
		</div>
	</div>
</div>

---

<div style="text-align: center; margin: 32px 0;">
	<p style="font-size: 14px; color: #555; margin-bottom: 12px;">Have a case of your own? Share it with us.</p>
	<a href="https://vuamsterdam.eu.qualtrics.com/jfe/form/SV_aYwf8ohZt4Udz70" target="_blank" style="display: inline-block; padding: 11px 28px; font-size: 14px; font-weight: 500; background-color: #0066cc; color: white; border-radius: 6px; text-decoration: none;">Submit your own case</a>
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
		["reflection-case3", "reflection-case3-compare"].forEach(function (key) {
			const el = document.getElementById(key);
			if (el) {
				const saved = localStorage.getItem(key);
				if (saved) el.value = saved;
			}
		});
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
