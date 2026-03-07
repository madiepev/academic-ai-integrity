# Ethics: practice cases

<div style="margin-bottom: 20px;">
	<button onclick="window.location.href='ethics'" style="padding: 10px 20px; font-size: 14px; background-color: #666; color: white; border: none; border-radius: 5px; cursor: pointer;">
		← Back to ethics
	</button>
</div>

---

## Choose a case

Each case below describes a real-world scenario involving an instructor's decision about AI use. Select a case to read the full scenario and reflect on the key issues it raises.

Use the filters to narrow down cases by policy type or theme.

<div class="cases-filters">
	<div class="filter-group">
		<span class="filter-label">Policy type</span>
		<div class="filter-buttons">
			<button class="filter-btn" data-filter="disclosure">Disclosure required</button>
			<button class="filter-btn" data-filter="ai-integrated">AI integrated</button>
			<button class="filter-btn" data-filter="ai-restricted">AI restricted</button>
		</div>
	</div>
	<div class="filter-group">
		<span class="filter-label">Key theme</span>
		<div class="filter-buttons">
			<button class="filter-btn" data-filter="transparency">Transparency</button>
			<button class="filter-btn" data-filter="student-values">Student values</button>
			<button class="filter-btn" data-filter="instructor-expertise">Instructor expertise</button>
		</div>
	</div>
	<div class="filter-group filter-reset-group">
		<button class="filter-reset-btn" id="reset-filters">Clear filters</button>
	</div>
</div>

<div id="cases-grid" class="cases-grid">

	<div class="case-card" data-tags="disclosure transparency" onclick="window.location.href='ethics-case-1'">
		<div class="case-card-header">
			<span class="case-number">Case 1</span>
		</div>
		<h3 class="case-title">AI disclosure in a formative assessment</h3>
		<div class="case-tags">
			<span class="case-tag tag-policy">Disclosure required</span>
			<span class="case-tag tag-theme">Transparency</span>
			<span class="case-tag tag-assessment">Formative</span>
		</div>
	</div>

	<div class="case-card" data-tags="ai-integrated student-values" onclick="window.location.href='ethics-case-2'">
		<div class="case-card-header">
			<span class="case-number">Case 2</span>
		</div>
		<h3 class="case-title">Student opt-out from an AI-integrated assignment</h3>
		<div class="case-tags">
			<span class="case-tag tag-policy">AI integrated</span>
			<span class="case-tag tag-theme">Student values</span>
		</div>
	</div>

	<div class="case-card" data-tags="ai-restricted instructor-expertise" onclick="window.location.href='ethics-case-3'">
		<div class="case-card-header">
			<span class="case-number">Case 3</span>
		</div>
		<h3 class="case-title">Restricting AI due to limited instructor expertise</h3>
		<div class="case-tags">
			<span class="case-tag tag-policy">AI restricted</span>
			<span class="case-tag tag-theme">Instructor expertise</span>
		</div>
	</div>

</div>

<p id="no-cases-message" class="no-cases-message" style="display:none;">No cases match the selected filters. Try clearing a filter to see more cases.</p>

<style>
	.cases-filters {
		background: #f8f9fa;
		border: 1px solid #dddddd;
		border-radius: 12px;
		padding: 20px 24px;
		margin: 28px 0 32px 0;
		display: flex;
		flex-direction: column;
		gap: 14px;
	}

	.filter-group {
		display: flex;
		align-items: center;
		gap: 12px;
		flex-wrap: wrap;
	}

	.filter-label {
		font-size: 13px;
		font-weight: 600;
		color: #666666;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		min-width: 120px;
		flex-shrink: 0;
	}

	.filter-buttons {
		display: flex;
		gap: 8px;
		flex-wrap: wrap;
	}

	.filter-btn {
		padding: 6px 14px;
		font-size: 13px;
		font-weight: 500;
		border: 2px solid #dddddd;
		border-radius: 999px;
		background-color: #ffffff;
		color: #444444;
		cursor: pointer;
		transition: all 0.18s ease;
	}

	.filter-btn:hover {
		border-color: #ff6600;
		color: #ff6600;
	}

	.filter-btn.active {
		background-color: #ff6600;
		border-color: #ff6600;
		color: #ffffff;
	}

	.filter-reset-group {
		justify-content: flex-end;
	}

	.filter-reset-btn {
		padding: 6px 14px;
		font-size: 12px;
		border: 1px solid #bbbbbb;
		border-radius: 5px;
		background-color: transparent;
		color: #666666;
		cursor: pointer;
		transition: all 0.15s ease;
	}

	.filter-reset-btn:hover {
		background-color: #eeeeee;
	}

	.cases-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: 20px;
		margin-top: 8px;
	}

	.case-card {
		background: #ffffff;
		border: 2px solid #dddddd;
		border-radius: 12px;
		padding: 20px 22px 22px 22px;
		cursor: pointer;
		transition: all 0.2s ease;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.case-card:hover {
		border-color: #ff6600;
		box-shadow: 0 6px 20px rgba(255, 102, 0, 0.12);
		transform: translateY(-2px);
	}

	.case-card-header {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.case-number {
		font-size: 11px;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: #ff6600;
		background-color: #fff3eb;
		padding: 3px 9px;
		border-radius: 999px;
	}

	.case-title {
		margin: 0;
		font-size: 17px;
		font-weight: 600;
		color: #333333;
		line-height: 1.4;
	}

	.case-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
		margin-top: 4px;
	}

	.case-tag {
		font-size: 12px;
		font-weight: 500;
		padding: 3px 10px;
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

	.no-cases-message {
		font-size: 14px;
		color: #666666;
		padding: 20px;
		text-align: center;
		background-color: #f8f9fa;
		border-radius: 8px;
	}

	.case-card.hidden {
		display: none;
	}
</style>

<script>
	(function () {
		const activeFilters = new Set();

		const filterBtns = document.querySelectorAll(".filter-btn");
		const resetBtn = document.getElementById("reset-filters");
		const caseCards = document.querySelectorAll(".case-card");
		const noMessage = document.getElementById("no-cases-message");

		function applyFilters() {
			if (activeFilters.size === 0) {
				caseCards.forEach(function (card) {
					card.classList.remove("hidden");
				});
				if (noMessage) noMessage.style.display = "none";
				return;
			}

			let visible = 0;
			caseCards.forEach(function (card) {
				const tags = (card.getAttribute("data-tags") || "").split(" ");
				const matches = Array.from(activeFilters).some(function (f) {
					return tags.indexOf(f) !== -1;
				});
				if (matches) {
					card.classList.remove("hidden");
					visible++;
				} else {
					card.classList.add("hidden");
				}
			});

			if (noMessage) {
				noMessage.style.display = visible === 0 ? "block" : "none";
			}
		}

		filterBtns.forEach(function (btn) {
			btn.addEventListener("click", function () {
				const filter = btn.getAttribute("data-filter");
				if (activeFilters.has(filter)) {
					activeFilters.delete(filter);
					btn.classList.remove("active");
				} else {
					activeFilters.add(filter);
					btn.classList.add("active");
				}
				applyFilters();
			});
		});

		if (resetBtn) {
			resetBtn.addEventListener("click", function () {
				activeFilters.clear();
				filterBtns.forEach(function (btn) {
					btn.classList.remove("active");
				});
				applyFilters();
			});
		}
	})();
</script>
