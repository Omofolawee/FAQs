// 1. Select all the elements with the class '.faq-question'
const faqQuestions = document.querySelectorAll(".questions");

// 2. Loop through each question element
faqQuestions.forEach((question) => {
  // 3. Add a click event listener to each question
  question.addEventListener("click", function () {
    // 4. Find the next sibling element (the answer)
    const answer = this.nextElementSibling;

    // 5. Toggle the 'show' class to show/hide the answer
    answer.classList.toggle("show");
  });
});
