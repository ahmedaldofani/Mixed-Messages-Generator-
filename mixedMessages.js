// Define arrays with star signs, life event predictions, and life advice
const starSigns = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
const lifeEvents = ['You will find a new job opportunity.', 'You will travel to an exciting destination.', 'You will meet someone special.', 'You will achieve a long-term goal.'];
const lifeAdvice = ['Stay focused and determined.', 'Take risks and embrace new experiences.', 'Nurture your relationships.', 'Set clear goals and work towards them.'];

// Function to generate a random message
function generateMessage() {
  // Generate random indices for each array
  const starSignIndex = Math.floor(Math.random() * starSigns.length);
  const lifeEventIndex = Math.floor(Math.random() * lifeEvents.length);
  const lifeAdviceIndex = Math.floor(Math.random() * lifeAdvice.length);

  // Retrieve the message container elements
  const starSignElement = document.getElementById('star-sign');
  const lifeEventElement = document.getElementById('life-event');
  const lifeAdviceElement = document.getElementById('life-advice');

  // Set the text content of each element
  starSignElement.textContent = `Star Sign: ${starSigns[starSignIndex]}`;
  lifeEventElement.textContent = `Life Event: ${lifeEvents[lifeEventIndex]}`;
  lifeAdviceElement.textContent = `Life Advice: ${lifeAdvice[lifeAdviceIndex]}`;
}

// Attach the generateMessage function to the button click event
const generateButton = document.getElementById('generate-btn');
generateButton.addEventListener('click', generateMessage);

// Generate initial message on page load
generateMessage();
