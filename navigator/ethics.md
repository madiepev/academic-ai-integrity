# Ethics: VU policy and AI in assessment

<div style="margin-bottom: 20px;">
	<button onclick="window.location.href='../'" style="padding: 10px 20px; font-size: 14px; background-color: #666; color: white; border: none; border-radius: 5px; cursor: pointer;">
		← Back to home
	</button>
</div>

---

## VU policy on generative AI

This module adopts the perspective of the Vrije Universiteit Amsterdam (VU) policy on the use of generative AI in courses. If you are studying or teaching outside the VU, your institution may follow a different policy. Always check the local rules that apply to you.

*Are students allowed to use generative AI in their courses?*

In short: according to VU policy, students are **not** permitted to use generative AI **unless** the lecturer or examiner explicitly states *if* and *how* it may be used.

This means that:

- **Teachers** clearly describe in the course manual whether generative AI is allowed, and under which conditions.
- **Students** check the course manual at the start of the course to understand the rules around AI use.

If the course manual or study guide does not mention generative AI, students are encouraged to ask the lecturer for clarification.

---

## AI Assessment Scale (AIAS)

The AI Assessment Scale (AIAS) is a framework designed to evaluate how generative AI is integrated into educational assessments.

It serves two main purposes:

1. **Facilitating dialogue** – encouraging open discussions between educators and students about the appropriate use of generative AI in courses and assessments.
2. **Supporting assessment redesign** – helping educators rethink and redesign assessments so they stay aligned with learning goals while accounting for evolving AI capabilities.

The AIAS categorizes the use of generative AI in assessments into five levels, ranging from "No AI" to "AI exploration." This structure helps educators decide how AI can be integrated into their teaching practice while maintaining educational goals and academic integrity.

### Key features

- **Clarity and transparency** – the AIAS provides clear guidance on how students may use generative AI in their assessments, fostering trust and a shared understanding of expectations.
- **Equity and fairness** – it supports equal opportunities for students by offering structured, supervised experience with current AI tools.
- **Flexibility** – instead of a rigid policy that simply bans or mandates AI, the AIAS helps educators make informed decisions that fit their specific learning contexts and needs.

---

## Explore the AI Assessment Scale interactively

Use the interactive viewer below to explore the five AI Assessment Scale levels. Select a level to see what it means for an assessment and what guidance applies to students.

<div class="aias-wrapper">
	<div class="aias-header">
		<div>
			<h3 class="aias-title">The AI Assessment Scale</h3>
			<p class="aias-subtitle">Select a level to see how AI may be used in an assessment.</p>
		</div>
		<div class="aias-level-indicator">
			<span id="aias-current-level-label">Level 1</span>
			<span>of 5</span>
		</div>
	</div>

	<div class="aias-layout">
		<div class="aias-level-list">
			<button class="aias-level-button" data-level-id="1">
				<span class="aias-level-number">1</span>
				<span class="aias-level-name">No AI</span>
			</button>
			<button class="aias-level-button" data-level-id="2">
				<span class="aias-level-number">2</span>
				<span class="aias-level-name">AI planning</span>
			</button>
			<button class="aias-level-button" data-level-id="3">
				<span class="aias-level-number">3</span>
				<span class="aias-level-name">AI collaboration</span>
			</button>
			<button class="aias-level-button" data-level-id="4">
				<span class="aias-level-number">4</span>
				<span class="aias-level-name">Full AI</span>
			</button>
			<button class="aias-level-button" data-level-id="5">
				<span class="aias-level-number">5</span>
				<span class="aias-level-name">AI exploration</span>
			</button>
		</div>

		<div class="aias-detail-card">
			<div class="aias-detail-header">
				<span id="aias-detail-badge" class="aias-detail-badge">Level 1</span>
				<h4 id="aias-detail-title" class="aias-detail-title">No AI</h4>
			</div>
			<p id="aias-detail-description" class="aias-detail-text"></p>
			<div class="aias-guidance-box">
				<p class="aias-guidance-label">Student guidance</p>
				<p id="aias-detail-guidance" class="aias-guidance-text"></p>
			</div>
			<p class="aias-tip">
				Tip: compare levels to decide which one best matches your assessment. You can always combine this with additional course-specific rules.
			</p>
		</div>
	</div>
</div>

<style>
	.aias-wrapper {
		background: #ffffff;
		border-radius: 16px;
		padding: 24px 24px 28px 24px;
		margin: 32px 0;
		box-shadow: 0 16px 40px rgba(0, 0, 0, 0.08);
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
	}

	.aias-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 16px;
		margin-bottom: 20px;
		padding-bottom: 16px;
		border-bottom: 1px solid #dddddd;
	}

	.aias-title {
		margin: 0 0 4px 0;
		font-size: 20px;
		font-weight: 600;
		color: #333333;
	}

	.aias-subtitle {
		margin: 0;
		font-size: 14px;
		color: #666666;
	}

	.aias-level-indicator {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		font-size: 13px;
		color: #666666;
	}

	.aias-level-indicator span:first-child {
		font-weight: 600;
		color: #0066cc;
	}

	.aias-layout {
		display: flex;
		gap: 24px;
		margin-top: 8px;
		flex-wrap: wrap;
	}

	.aias-level-list {
		display: flex;
		flex-direction: column;
		gap: 10px;
		flex: 0 0 220px;
	}

	.aias-level-button {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 10px 14px;
		border-radius: 10px;
		border: 2px solid #e0e0e0;
		background-color: #f8f9fa;
		cursor: pointer;
		transition: all 0.2s ease;
		text-align: left;
	}

	.aias-level-button:hover {
		border-color: #667eea;
		background-color: #eef0ff;
	}

	.aias-level-button.active {
		border-color: #667eea;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		color: #ffffff;
	}

	.aias-level-button.active .aias-level-number {
		background-color: rgba(255, 255, 255, 0.18);
		color: #ffffff;
	}

	.aias-level-button.active .aias-level-name {
		color: #ffffff;
	}

	.aias-level-number {
		width: 28px;
		height: 28px;
		border-radius: 50%;
		background-color: #ffffff;
		color: #0066cc;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 600;
		font-size: 14px;
	}

	.aias-level-name {
		font-size: 14px;
		font-weight: 600;
		color: #333333;
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}

	.aias-detail-card {
		flex: 1 1 280px;
		background-color: #f8f9fa;
		border-radius: 12px;
		padding: 18px 18px 20px 18px;
		border: 1px solid #dddddd;
	}

	.aias-detail-header {
		display: flex;
		align-items: baseline;
		gap: 10px;
		margin-bottom: 10px;
	}

	.aias-detail-badge {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 4px 10px;
		border-radius: 999px;
		font-size: 11px;
		font-weight: 600;
		background-color: #e3f2fd;
		color: #0066cc;
		text-transform: uppercase;
		letter-spacing: 0.06em;
	}

	.aias-detail-title {
		margin: 0;
		font-size: 18px;
		font-weight: 600;
		color: #333333;
	}

	.aias-detail-text {
		font-size: 14px;
		color: #444444;
		line-height: 1.6;
		margin: 4px 0 14px 0;
	}

	.aias-guidance-box {
		background-color: #ffffff;
		border-radius: 8px;
		padding: 10px 12px;
		border-left: 4px solid #0066cc;
		margin-bottom: 10px;
	}

	.aias-guidance-label {
		font-size: 12px;
		font-weight: 600;
		text-transform: uppercase;
		color: #666666;
		margin: 0 0 4px 0;
	}

	.aias-guidance-text {
		font-size: 14px;
		color: #333333;
		margin: 0;
	}

	.aias-tip {
		font-size: 12px;
		color: #777777;
		margin: 4px 0 0 0;
	}

	@media (max-width: 768px) {
		.aias-layout {
			flex-direction: column;
		}

		.aias-level-list {
			flex-direction: row;
			flex-wrap: wrap;
			gap: 8px;
		}

		.aias-level-button {
			flex: 1 1 calc(50% - 8px);
		}
	}
</style>

<script>
	(function () {
		const levels = [
			{
				id: 1,
				name: "No AI",
				badgeLabel: "Level 1 · No AI",
				description:
					"The assessment is completed entirely without AI assistance in a controlled environment. Students rely solely on their existing knowledge, understanding, and skills.",
				guidance:
					"You must not use AI at any point during the assessment. You demonstrate your core skills and knowledge without AI support.",
			},
			{
				id: 2,
				name: "AI planning",
				badgeLabel: "Level 2 · AI planning",
				description:
					"AI may be used for pre-task activities such as brainstorming, outlining, and initial research. The focus is on using AI for planning, synthesis, and ideation, while independently developing and refining ideas.",
				guidance:
					"You may use AI for planning, idea development, and research. Your final submission shows how you developed and refined these ideas independently.",
			},
			{
				id: 3,
				name: "AI collaboration",
				badgeLabel: "Level 3 · AI collaboration",
				description:
					"AI may be used to help complete the task, including idea generation, drafting, feedback, and refinement. Students are expected to critically evaluate and modify AI-suggested outputs.",
				guidance:
					"You may use AI to assist with specific tasks such as drafting text, refining, and evaluating your work. You must critically evaluate and adapt any AI-generated content you include.",
			},
			{
				id: 4,
				name: "Full AI",
				badgeLabel: "Level 4 · Full AI",
				description:
					"AI may be used to complete any elements of the task, with students directing AI to achieve the assessment goals. Assessments may also require engagement with AI to reach goals or solve problems.",
				guidance:
					"You may use AI extensively throughout your work, either as you choose or as directed in the assessment. You focus on steering AI to achieve your goals while demonstrating critical thinking.",
			},
			{
				id: 5,
				name: "AI exploration",
				badgeLabel: "Level 5 · AI exploration",
				description:
					"AI is used creatively to enhance problem-solving, generate novel insights, or develop innovative solutions. Students and educators may co-design assessments to explore new AI applications in the field of study.",
				guidance:
					"You use AI creatively to solve the task, potentially co-designing new approaches with your instructor while staying aligned with learning goals.",
			},
		];

		function setActiveLevel(id) {
			const level = levels.find((l) => l.id === id);
			if (!level) return;

			const buttons = document.querySelectorAll(".aias-level-button");
			buttons.forEach((button) => {
				const buttonId = Number(button.getAttribute("data-level-id"));
				if (buttonId === id) {
					button.classList.add("active");
				} else {
					button.classList.remove("active");
				}
			});

			const badge = document.getElementById("aias-detail-badge");
			const title = document.getElementById("aias-detail-title");
			const description = document.getElementById("aias-detail-description");
			const guidance = document.getElementById("aias-detail-guidance");
			const currentLevelLabel = document.getElementById("aias-current-level-label");

			if (badge) badge.textContent = level.badgeLabel;
			if (title) title.textContent = level.name;
			if (description) description.textContent = level.description;
			if (guidance) guidance.textContent = level.guidance;
			if (currentLevelLabel) currentLevelLabel.textContent = `Level ${level.id}`;
		}

		function setupInteractions() {
			const buttons = document.querySelectorAll(".aias-level-button");
			if (!buttons.length) return;

			buttons.forEach((button) => {
				button.addEventListener("click", () => {
					const id = Number(button.getAttribute("data-level-id"));
					setActiveLevel(id);
				});
			});

			// Initialise with level 1 selected
			setActiveLevel(1);
		}

		if (document.readyState === "loading") {
			document.addEventListener("DOMContentLoaded", setupInteractions);
		} else {
			setupInteractions();
		}
	})();
</script>
