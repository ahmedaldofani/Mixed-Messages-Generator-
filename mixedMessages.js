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

  // Generate the mixed message
  const mixedMessage = `Star Sign: ${starSigns[starSignIndex]}\nLife Event: ${lifeEvents[lifeEventIndex]}\nLife Advice: ${lifeAdvice[lifeAdviceIndex]}`;

  // Return the mixed message
  return mixedMessage;
}

// Generate and display the mixed message
const mixedMessage = generateMessage();
console.log(mixedMessage);

