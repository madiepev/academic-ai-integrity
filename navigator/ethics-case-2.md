# Case 2: Student opt-out from an AI-integrated assignment

<div style="margin-bottom: 20px; display: flex; gap: 10px; flex-wrap: wrap;">
	<button onclick="window.location.href='ethics-cases'" style="padding: 10px 20px; font-size: 14px; background-color: #666; color: white; border: none; border-radius: 5px; cursor: pointer;">
		← Back to cases
	</button>
</div>

---

<div class="case-tags" style="margin-bottom: 24px;">
	<span class="case-tag tag-policy">AI integrated</span>
	<span class="case-tag tag-theme">Student values</span>
</div>

## The case

An instructor designs an assignment that integrates the use of generative AI as part of the learning process. The stated purpose of using AI is to support students in developing skills for reading and interpreting academic articles and to provide formative feedback on their work. The use of AI is presented as a meaningful and purposeful component of the assignment's learning objectives, and alternative formats are not specified.

A student approaches the instructor to explain that they do not wish to use generative AI. The student expresses concern about the environmental and sustainability impacts associated with AI technologies and indicates that using such tools would conflict with their personal values. The student is otherwise engaged in the course and does not object to the learning goals of the assignment.

---

## Respond

<div class="reflection-box">
	<p class="reflection-question">How should the instructor respond?</p>
	<textarea class="reflection-input" id="reflection-case2" placeholder="Write your response here..."></textarea>
	<div class="reflection-actions">
		<button class="save-btn" onclick="viewExpertPerspective('case2')">View expert perspective</button>
	</div>
</div>

<div class="expert-panel" id="expert-case2" style="display: none;">
	<div class="expert-perspective">
		<h3 class="expert-title">Expert perspective</h3>
		<p>The instructor should take the student's concern seriously and engage with it rather than dismissing it. The appropriate response is to offer an equivalent alternative that achieves the same learning outcomes — such as using a peer review process, consulting a human tutor, or performing the analytical steps manually — without requiring AI use. This respects student autonomy and avoids imposing a tool that conflicts with sincerely held values. At the same time, the instructor should be transparent about why AI was included: if it is genuinely integral to the learning objective rather than just a convenience, that rationale is worth explaining. If a meaningful alternative cannot be designed, it may also be worth reconsidering whether requiring a specific commercial tool is appropriate as a non-negotiable element of course participation.</p>
	</div>

	<div class="reflection-box" style="margin-top: 20px;">
		<p class="reflection-question">How does your response compare? What did you get right, and what would you do differently?</p>
		<textarea class="reflection-input" id="reflection-case2-compare" placeholder="Write your comparison here..."></textarea>
		<div class="reflection-actions">
			<button class="save-btn" onclick="saveReflection('case2-compare')">Save reflection</button>
			<span class="save-status" id="save-status-case2-compare"></span>
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
		["reflection-case2", "reflection-case2-compare"].forEach(function (key) {
			const el = document.getElementById(key);
			if (el) {
				const saved = localStorage.getItem(key);
				if (saved) el.value = saved;
			}
		});
		if (localStorage.getItem("reflection-case2-compare") !== null) {
			const panel = document.getElementById("expert-case2");
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
