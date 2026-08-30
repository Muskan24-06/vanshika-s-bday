/* =====================================================
   PAGE SYSTEM
===================================================== */

function showPage(pageId) {

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    createHearts(10);
}


/* =====================================================
   QUIZ
===================================================== */

const questions = [

    {
        question:
            "Babu, sabse pehle batao... hum pehli baar kahan mile the? 📚❤️",

        answers: [
            "College ke exam days mein ❤️",
            "Ek restaurant mein 😂",
            "School mein",
            "Instagram par 😂"
        ],

        correct: 0,

        right:
            "Haan Babu! ❤️ Bilkul right! Exam days mein hi toh hum pehli baar mile the. 🥹",

        wrong:
            "Nahi Babu 😂 ye galat hai! Thoda aur socho... 📚"
    },


    {
        question:
            "Pehli meeting ke baad hum kya bane the? 👀",

        answers: [
            "Enemies 😂",
            "Friends ❤️",
            "Neighbours",
            "Strangers hi rahe"
        ],

        correct: 1,

        right:
            "Bilkul right, Babu! ❤️ Pehle hum friends hi toh bane the. 🫶",

        wrong:
            "Aree Babu 😂 ye wrong hai! Ek baar phir socho. ❤️"
    },


    {
        question:
            "Friends ke baad hum kya bane? 🫂",

        answers: [
            "Classmates",
            "Best Friends ❤️",
            "Enemies 😂",
            "Business Partners"
        ],

        correct: 1,

        right:
            "Haan Babu! 🥹❤️ Best Friends! Aur wahi friendship sabse special ban gayi.",

        wrong:
            "Nahi Babu 😂 ye answer galat hai. Tumhe toh pata hona chahiye! ❤️"
    },


    {
        question:
            "Meri sabse annoying habit kya hai? 😂",

        answers: [
            "Main tumhe bahut pareshan karti hoon 😂",
            "Main kabhi baat nahi karti",
            "Main bahut serious rehti hoon",
            "Meri koi annoying habit nahi hai 😇"
        ],

        correct: 0,

        right:
            "Haan Babu 😂❤️ Exactly! Aur phir bhi tum mujhe tolerate karte ho. 🥹",

        wrong:
            "Wrong Babu 😂 Tum mujhe itna bhi nahi jaante kya? 😭❤️"
    },


    {
        question:
            "Hamari friendship kab dheere-dheere love mein badalne lagi? ❤️",

        answers: [
            "Ek hi din mein 😂",
            "Pata hi nahi chala... slowly ❤️",
            "Pehli meeting mein",
            "Kabhi love hua hi nahi 😭"
        ],

        correct: 1,

        right:
            "Haan Babu... 🥹❤️ Pata hi nahi chala kab friendship love ban gayi.",

        wrong:
            "Nahi Babu ❤️ ye nahi... hamari story itni simple thodi thi. 😂"
    },


    {
        question:
            "Last question... kya tum is little journey ko aage bhi mere saath continue karna chahoge? ❤️",

        answers: [
            "No 😭",
            "Maybe 😂",
            "Haan, always ❤️",
            "Mujhe sochna padega 😌"
        ],

        correct: 2,

        right:
            "Haan Babu! 🥹❤️ I was hoping you'd choose that...",

        wrong:
            "Aree Babu 😂 wrong answer! Dobara try karo. ❤️"
    }

];


let currentQuestion = 0;


/* =====================================================
   START QUIZ
===================================================== */

function startQuiz() {

    currentQuestion = 0;

    showPage("quiz");

    loadQuestion();

    createHearts(15);
}


/* =====================================================
   LOAD QUESTION
===================================================== */

function loadQuestion() {

    const current = questions[currentQuestion];

    document.getElementById("questionCount").innerText =
        `Question ${currentQuestion + 1} / ${questions.length}`;


    document.getElementById("progressBar").style.width =
        ((currentQuestion + 1) / questions.length * 100) + "%";


    document.getElementById("question").innerText =
        current.question;


    document.getElementById("answerMessage").innerText = "";


    const answers =
        document.getElementById("answers");

    answers.innerHTML = "";


    current.answers.forEach((answer, index) => {

        const button =
            document.createElement("button");

        button.className = "answer";

        button.innerText = answer;

        button.onclick = function () {
            selectAnswer(index);
        };

        answers.appendChild(button);

    });

}


/* =====================================================
   CHECK ANSWER
===================================================== */

function selectAnswer(selectedIndex) {

    const current = questions[currentQuestion];

    const message =
        document.getElementById("answerMessage");

    const buttons =
        document.querySelectorAll(".answer");


    /* RIGHT */

    if (selectedIndex === current.correct) {

        message.innerText =
            "✅ " + current.right;

        message.style.color =
            "#64e59b";


        buttons[selectedIndex].style.background =
            "#183c2b";

        buttons[selectedIndex].style.borderColor =
            "#48c985";


        buttons.forEach(button => {
            button.disabled = true;
        });


        createHearts(15);


        setTimeout(() => {

            currentQuestion++;


            if (currentQuestion < questions.length) {

                loadQuestion();

            } else {

                showPage("firstMeeting");

            }

        }, 1800);

    }


    /* WRONG */

    else {

        message.innerText =
            "❌ " + current.wrong;

        message.style.color =
            "#ff668b";


        buttons[selectedIndex].style.background =
            "#431728";

        buttons[selectedIndex].style.borderColor =
            "#e64b72";


        buttons[selectedIndex].style.animation =
            "shake 0.4s";


        setTimeout(() => {

            buttons[selectedIndex].style.animation = "";

            buttons[selectedIndex].style.background = "";

            buttons[selectedIndex].style.borderColor = "";

        }, 600);

    }

}


/* =====================================================
   BIRTHDAY PAGE
===================================================== */

function showBirthday() {

    showPage("birthday");

    startFireworks();

    createHearts(35);

}


/* =====================================================
   BIRTHDAY SURPRISE
===================================================== */

function openGift() {

    document.getElementById("gift").innerText =
        "💝";


    document.getElementById("surprise")
        .classList
        .remove("hidden");


    createHearts(40);

    createFireworkBurst(
        window.innerWidth / 2,
        window.innerHeight / 2
    );

}


/* =====================================================
   YES
===================================================== */

function sayYes() {

    createHearts(100);

    createFireworkBurst(
        window.innerWidth / 2,
        window.innerHeight / 2
    );


    setTimeout(() => {

        showPage("final");

        createHearts(100);

        startFireworks();

    }, 700);

}


/* =====================================================
   NO BUTTON
===================================================== */

function moveNoButton() {

    const button =
        document.getElementById("noButton");


    const x =
        Math.random() * 250 - 125;

    const y =
        Math.random() * 180 - 90;


    button.style.transform =
        `translate(${x}px, ${y}px)`;

}


/* =====================================================
   FLOATING HEARTS
===================================================== */

function createHearts(number) {

    for (let i = 0; i < number; i++) {

        setTimeout(() => {

            const heart =
                document.createElement("div");

            heart.className = "heart";


            const heartList = [
                "❤️",
                "💕",
                "💗",
                "💖",
                "💓",
                "🩷"
            ];


            heart.innerText =
                heartList[
                    Math.floor(
                        Math.random() *
                        heartList.length
                    )
                ];


            heart.style.left =
                Math.random() * 100 + "vw";


            heart.style.fontSize =
                (15 + Math.random() * 25) + "px";


            heart.style.animationDuration =
                (4 + Math.random() * 4) + "s";


            document.body.appendChild(heart);


            setTimeout(() => {

                heart.remove();

            }, 8000);


        }, i * 50);

    }

}


/* =====================================================
   FIREWORKS
===================================================== */

const canvas =
    document.getElementById("fireworks");

const ctx =
    canvas.getContext("2d");


let particles = [];

let fireworksRunning = false;


function resizeCanvas() {

    if (!canvas) return;

    canvas.width =
        window.innerWidth;

    canvas.height =
        window.innerHeight;

}


window.addEventListener(
    "resize",
    resizeCanvas
);


resizeCanvas();


/* CREATE FIREWORK */

function createFireworkBurst(x, y) {

    const particleCount = 80;


    for (let i = 0; i < particleCount; i++) {

        const angle =
            Math.random() *
            Math.PI * 2;


        const speed =
            Math.random() * 6 + 2;


        particles.push({

            x: x,

            y: y,

            vx:
                Math.cos(angle) * speed,

            vy:
                Math.sin(angle) * speed,

            life: 1,

            size:
                Math.random() * 3 + 1,

            hue:
                Math.random() * 360

        });

    }

}


/* UPDATE FIREWORKS */

function animateFireworks() {

    if (!fireworksRunning) return;


    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    particles.forEach((particle, index) => {

        particle.x += particle.vx;

        particle.y += particle.vy;

        particle.vy += 0.04;

        particle.life -= 0.012;


        ctx.beginPath();

        ctx.arc(
            particle.x,
            particle.y,
            particle.size,
            0,
            Math.PI * 2
        );


        ctx.fillStyle =
            `hsla(${particle.hue},100%,70%,${particle.life})`;


        ctx.fill();


        if (particle.life <= 0) {

            particles.splice(index, 1);

        }

    });


    requestAnimationFrame(
        animateFireworks
    );

}


/* START FIREWORKS */

function startFireworks() {

    fireworksRunning = true;

    particles = [];

    animateFireworks();


    setInterval(() => {

        if (
            document
                .getElementById("birthday")
                .classList
                .contains("active")
        ) {

            createFireworkBurst(

                Math.random() *
                canvas.width,

                Math.random() *
                canvas.height *
                0.65

            );

        }

    }, 900);

}


/* =====================================================
   SHAKE ANIMATION
===================================================== */

const style =
    document.createElement("style");

style.innerHTML = `

@keyframes shake {

    0% {
        transform: translateX(0);
    }

    25% {
        transform: translateX(-8px);
    }

    50% {
        transform: translateX(8px);
    }

    75% {
        transform: translateX(-8px);
    }

    100% {
        transform: translateX(0);
    }

}

`;

document.head.appendChild(style);