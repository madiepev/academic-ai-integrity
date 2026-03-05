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

## Reflect

<div class="reflection-box">
	<p class="reflection-question">What principle should guide the instructor's decision about allowing or restricting AI use in this course, and how should that principle shape the instructor's response to the students' concerns?</p>
	<textarea class="reflection-input" id="reflection-case2" placeholder="Write your response here..."></textarea>
	<div class="reflection-actions">
		<button class="save-btn" onclick="saveReflection('case2')">Save response</button>
		<span class="save-status" id="save-status-case2"></span>
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
		const key = "reflection-case2";
		const textarea = document.getElementById("reflection-case2");
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
