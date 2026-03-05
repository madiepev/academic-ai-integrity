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

## Reflect

<div class="reflection-box">
	<p class="reflection-question">How should the instructor respond?</p>
	<textarea class="reflection-input" id="reflection-case3" placeholder="Write your response here..."></textarea>
	<div class="reflection-actions">
		<button class="save-btn" onclick="saveReflection('case3')">Save response</button>
		<span class="save-status" id="save-status-case3"></span>
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
</style>

<script>
	(function () {
		const key = "reflection-case3";
		const textarea = document.getElementById("reflection-case3");
		if (textarea) {
			const saved = localStorage.getItem(key);
			if (saved) textarea.value = saved;
		}
	})();

	function saveReflection(caseId) {
		const textarea = document.getElementById("reflection-" + caseId);
		const status = document.getElementById("save-status-" + caseId);
		if (textarea) {
			localStorage.setItem("reflection-" + caseId, textarea.value);
			if (status) {
				status.textContent = "Response saved.";
				setTimeout(function () { status.textContent = ""; }, 2500);
			}
		}
	}
</script>
