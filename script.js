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
