---
title: ""
---

# Academic AI Integrity e-learning

<div style="text-align: center; margin: 40px 0;">
  <button onclick="switchContent('student')" style="padding: 15px 30px; margin: 10px; font-size: 16px; background-color: #0066cc; color: white; border: none; border-radius: 5px; cursor: pointer;">
    Student information
  </button>
  <button onclick="switchContent('teacher')" style="padding: 15px 30px; margin: 10px; font-size: 16px; background-color: #0066cc; color: white; border: none; border-radius: 5px; cursor: pointer;">
    Teacher information
  </button>
</div>

---

## <span id="welcome-title">Welcome to the Academic AI Integrity e-learning platform</span>

<span id="welcome-text">This interactive learning platform is designed to help students and teachers navigate the evolving landscape of artificial intelligence in academic settings. Our goal is to promote responsible, ethical, and effective use of AI tools while maintaining academic integrity.</span>

### Learning objectives

By completing this e-learning module, you will:

- **Understand** the fundamentals of AI literacy in academic contexts
- **Recognize** appropriate and inappropriate uses of AI tools in academic work
- **Apply** best practices for transparent AI usage and disclosure
- **Develop** strategies for integrating AI tools responsibly into your learning or teaching practice
- **Create** personalized guidelines that align with academic integrity standards

---

## Assess your AI literacy

Wondering where you stand with AI literacy? Take our **10-minute assessment** to discover your current level and get personalized recommendations.

<div style="text-align: center; margin: 30px 0;">
  <button onclick="window.location.href='assessment.html'" style="padding: 15px 40px; font-size: 16px; background-color: #28a745; color: white; border: none; border-radius: 5px; cursor: pointer; font-weight: bold;">
    Start the AI Literacy Assessment
  </button>
</div>

### Already know your level? Select your profile

<div style="display: flex; justify-content: center; align-items: stretch; gap: 30px; margin: 40px 0; flex-wrap: wrap;">
  <div style="border: 2px solid #0066cc; border-radius: 10px; padding: 20px; width: 300px; text-align: center; display: flex; flex-direction: column;">
    <h4 style="margin: 0 0 15px 0;">AI pilot</h4>
    <p style="font-size: 14px; color: #555; flex-grow: 1;">
      You're the daredevil who has already explored the territory. You've experimented with AI in various contexts and are ready to refine your judgment on when AI use is appropriate or crosses ethical boundaries.
    </p>
    <button onclick="window.location.href='pilot/know'" style="padding: 10px 25px; margin-top: 15px; font-size: 14px; background-color: #0066cc; color: white; border: none; border-radius: 5px; cursor: pointer;">
      Start Pilot Track
    </button>
  </div>
  
  <div style="border: 2px solid #ff6600; border-radius: 10px; padding: 20px; width: 300px; text-align: center; display: flex; flex-direction: column;">
    <h4 style="margin: 0 0 15px 0;">AI navigator</h4>
    <p style="font-size: 14px; color: #555; flex-grow: 1;">
      You're curious and seeking the best information to guide your journey. You want to understand when AI use is appropriate in academic settings and build your skills in making ethical judgments.
    </p>
    <button onclick="window.location.href='navigator/know'" style="padding: 10px 25px; margin-top: 15px; font-size: 14px; background-color: #ff6600; color: white; border: none; border-radius: 5px; cursor: pointer;">
      Start Navigator Track
    </button>
  </div>
</div>

---

## Quick access tools

<div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin-top: 40px;">
  <h3 style="margin-top: 0;">Need to create documentation?</h3>
  <div style="display: flex; gap: 20px; flex-wrap: wrap; justify-content: center;">
    <div>
      <strong>For students:</strong><br>
      <a href="disclosure.html" style="color: #0066cc; text-decoration: none; font-size: 16px;">
        AI disclosure builder
      </a>
      <p style="font-size: 13px; color: #666; margin: 5px 0 0 0;">Document how you used AI in your assignment</p>
    </div>
    <div>
      <strong>For teachers:</strong><br>
      <a href="teacher-rationale.html" style="color: #0066cc; text-decoration: none; font-size: 16px;">
        AI rationale builder
      </a>
      <p style="font-size: 13px; color: #666; margin: 5px 0 0 0;">Create AI usage guidelines for your course</p>
    </div>
  </div>
</div>

---

<footer style="text-align: center; margin-top: 60px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
  <p>Academic AI Integrity e-Learning Platform | © 2026</p>
</footer>

<script>
function switchContent(role) {
  const titleElement = document.getElementById('welcome-title');
  const textElement = document.getElementById('welcome-text');
  
  if (role === 'student') {
    titleElement.textContent = 'Learn what Academic AI Integrity means for students';
    textElement.textContent = 'As a student, understanding how to use AI tools responsibly is essential for your academic success. This platform will help you navigate the ethical use of AI in your assignments, develop transparent disclosure practices, and maintain academic integrity while leveraging AI as a learning tool.';
  } else if (role === 'teacher') {
    titleElement.textContent = 'Learn what Academic AI Integrity means for teachers';
    textElement.textContent = 'As a teacher, guiding students in responsible AI use is crucial for maintaining academic standards. This platform will help you develop clear AI usage policies, create fair assessment strategies, and foster an environment where AI tools enhance learning while preserving academic integrity.';
  }
}
</script>
