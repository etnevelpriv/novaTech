import "./style.css";

const init = function () {
    const faqElements = document.querySelectorAll('.faq-element');
    faqElements.forEach((element) => {
        const question = element.firstElementChild;
        const answer = element.lastElementChild;
        answer?.classList.add('closed')
        question?.addEventListener("click", () => {
            answer?.classList.toggle('closed');
        });
    });
};

document.addEventListener("DOMContentLoaded", init)