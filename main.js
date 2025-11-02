// Spark Effect - by xCristiano
const canvas = document.getElementById('sparkCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let sparks = [];

function createSpark() {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height * 0.5;
  const size = Math.random() * 2 + 1;
  const speedX = Math.random() * 2 - 1;
  const speedY = Math.random() * -2 - 1;
  sparks.push({ x, y, size, speedX, speedY, alpha: 1 });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  sparks.forEach((s, i) => {
    s.x += s.speedX;
    s.y += s.speedY;
    s.alpha -= 0.02;
    ctx.fillStyle = `rgba(255, 165, 0, ${s.alpha})`;
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
    ctx.fill();
    if (s.alpha <= 0) sparks.splice(i, 1);
  });
  requestAnimationFrame(animate);
}

setInterval(createSpark, 40);
animate();

// Handle resize
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
<script>
  function addSuggestion() {
    const input = document.getElementById("suggestionInput");
    const list = document.getElementById("suggestionList");

    const text = input.value.trim();
    if (!text) return;

    // حفظ في localStorage
    const suggestions = JSON.parse(localStorage.getItem("suggestions") || "[]");
    suggestions.unshift(text); // الأحدث في الأعلى
    localStorage.setItem("suggestions", JSON.stringify(suggestions));

    input.value = "";
    renderSuggestions();
  }

  function renderSuggestions() {
    const list = document.getElementById("suggestionList");
    const suggestions = JSON.parse(localStorage.getItem("suggestions") || "[]");

    list.innerHTML = suggestions.map(s => `<li>${s}</li>`).join("");
  }

  // تحميل الاقتراحات عند فتح الموقع
  window.addEventListener("load", renderSuggestions);
</script>

