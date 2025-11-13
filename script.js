const moods = [
  { emoji: "🐻", text: "Bearish — the market is feeling cold and cautious.", color: "#3b82f6" },
  { emoji: "🦍", text: "Ape Mode — everyone’s buying dips and screaming HODL!", color: "#f59e0b" },
  { emoji: "🚀", text: "Bullish — the rockets are launching!", color: "#22c55e" },
  { emoji: "😐", text: "Neutral — sideways like a crab 🦀", color: "#a3a3a3" },
  { emoji: "🔥", text: "Volatile — chaos everywhere but profits await!", color: "#ef4444" }
];

const moodDiv = document.getElementById("mood");
const desc = document.getElementById("description");
const refreshBtn = document.getElementById("refresh");

function setRandomMood() {
  const mood = moods[Math.floor(Math.random() * moods.length)];
  moodDiv.textContent = mood.emoji;
  desc.textContent = mood.text;
  document.body.style.background = `linear-gradient(135deg, #000, ${mood.color})`;
  moodDiv.style.transform = "scale(1.2)";
  setTimeout(() => (moodDiv.style.transform = "scale(1)"), 300);
}

refreshBtn.addEventListener("click", setRandomMood);
setRandomMood();
