// Preload sacred text passages
const passages = {
  Bible: [
    "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life. - John 3:16",
    "Trust in the Lord with all your heart and lean not on your own understanding. - Proverbs 3:5",
    "The Lord is my shepherd; I shall not want. - Psalm 23:1"
  ],
  Quran: [
    "Indeed, Allah is with those who fear Him and those who are doers of good. - Quran 16:128",
    "And We have certainly made the Quran easy for remembrance, so is there any who will remember? - Quran 54:17",
    "Allah does not burden a soul beyond that it can bear. - Quran 2:286"
  ],
  Gita: [
    "You have the right to work, but never to the fruit of work. - Bhagavad Gita 2:47",
    "The soul is neither born, nor does it ever die. - Bhagavad Gita 2:20",
    "He who has no attachment can really love others, for his love flows out spontaneously. - Bhagavad Gita 2:71"
  ],
  Torah: [
    "Hear, O Israel: The Lord our God, the Lord is one. - Deuteronomy 6:4",
    "Love your neighbor as yourself. - Leviticus 19:18",
    "The Lord is my strength and my shield; my heart trusts in him, and he helps me. - Psalm 28:7"
  ]
};

// Get DOM elements
const textSelector = document.getElementById("text-selector");
const passageDisplay = document.getElementById("passage-display");

// Add event listener to dropdown
textSelector.addEventListener("change", () => {
  const selectedText = textSelector.value;
  if (selectedText) {
    const randomPassage = passages[selectedText][Math.floor(Math.random() * passages[selectedText].length)];
    passageDisplay.textContent = randomPassage;
  } else {
    passageDisplay.textContent = "Select a sacred text to display a random passage.";
  }
});