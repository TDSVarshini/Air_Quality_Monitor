// Demo simulation of values (replace with ESP32 data fetch later)
function updateValues() {
  let temp = (20 + Math.random() * 10).toFixed(1);
  let humidity = (40 + Math.random() * 20).toFixed(1);
  let air = (50 + Math.random() * 50).toFixed(0);
  let gas = (200 + Math.random() * 300).toFixed(0);

  document.getElementById("temp-value").innerText = temp + " °C";
  document.getElementById("humidity-value").innerText = humidity + " %";
  document.getElementById("air-value").innerText = air + " AQI";
  document.getElementById("gas-value").innerText = gas + " ppm";
}

// Update every 2s
setInterval(updateValues, 2000);
updateValues();

// FAQ Accordion
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;

    // Close other open answers
    document.querySelectorAll(".faq-answer").forEach(item => {
      if (item !== answer) {
        item.style.maxHeight = null;
        item.style.padding = "0 15px";
      }
    });

    // Toggle current one
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      answer.style.padding = "0 15px";
      question.querySelector("span").textContent = "+";
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
      answer.style.padding = "10px 15px";
      question.querySelector("span").textContent = "-";
    }
  });
});
