document.getElementById("new-quote").addEventListener("click", generateQuote);

async function generateQuote() {
  try {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    document.getElementById("quote").textContent = `"${data.content}"`;
    document.getElementById("author").textContent = `- ${data.author}`;
  } catch (error) {
    document.getElementById("quote").textContent = "Oops Something wen wrong.";
    document.getElementById("author").textContent = "";
  }
}
