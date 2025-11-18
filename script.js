const wrapper = document.createElement("div");
wrapper.className = "wrapper";

const ball = document.createElement("div");
ball.className = "ball";

const ballText = document.createElement("div");
ballText.className = "ballText";
ballText.textContent = "Задай питання";

ball.appendChild(ballText);
wrapper.appendChild(ball);

const input = document.createElement("input");
input.type = "text";
input.placeholder = "Введіть питання...";
wrapper.appendChild(input);

const btn = document.createElement("button");
btn.textContent = "Дати відповідь";
wrapper.appendChild(btn);

document.body.appendChild(wrapper);

const answers = [
    "Так",
    "Ні",
    "Можливо",
    "Поки що ні",
    "Однозначно так!",
    "Краще не треба",
    "Зірки кажуть — так",
    "Сумнівно",
    "Ще не час..."
];

btn.onclick = () => {
    const question = input.value.trim();

    if (question.length < 3) {
        ballText.textContent = "Напиши питання!";
    } else {
        const random = Math.floor(Math.random() * answers.length);
        ballText.textContent = answers[random];
    }

    ballText.classList.add("shake");

    setTimeout(() => {
        ballText.classList.remove("shake");
    }, 100);

    input.value = "";
};
