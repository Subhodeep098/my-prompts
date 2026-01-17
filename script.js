function addPrompt() {
  const input = document.getElementById("promptInput");
  const text = input.value.trim();
  if (!text) return;

  const div = document.createElement("div");
  div.textContent = text;

  document.getElementById("promptList").prepend(div);
  input.value = "";
}
