document.addEventListener("DOMContentLoaded", function () {

    // ================= LOCK SCREEN =================
    const PASSWORD = "22-05-24/20-07-24";  // ❤️ UPDATED PASSWORD ❤️

    const lockScreen = document.getElementById("lock-screen");
    const mainContent = document.getElementById("main-content");
    const unlockBtn = document.getElementById("unlock-btn");
    const passwordInput = document.getElementById("password-input");
    const errorMsg = document.getElementById("error-msg");
    const music = document.getElementById("bg-music");

    unlockBtn.addEventListener("click", () => {
        if (passwordInput.value === PASSWORD) {
            lockScreen.style.display = "none";
            mainContent.style.display = "block";

            // Start music after interaction
            music.play().catch(() => {});

            startLoveLetter();
            startSlideshow();
            createFloatingHearts();
        } else {
            errorMsg.textContent = "Wrong password! Try again 💔";
        }
    });

    // ================= LOVE LETTER =================
    const letterTitle = document.getElementById("letter-title");
    const letterText = document.getElementById("letter-text");

    const loveMessage =
       "My love, ❤️\n\n" +
        "I don’t always know how to put everything I feel into words, but today I want to try—because you deserve to know just how much you mean to me. " +
        "Being with you feels like home. In the quiet moments and the loud, laughing ones, you make my life softer and brighter just by being in it.\n\n" +
        "You see me in ways no one else ever has, and you love me not just for who I am on my best days, but for who I am on the hard ones too. " +
        "I love the little things about you—the way you smile without realizing it, the sound of your laugh, the way you make even ordinary moments feel special.\n\n" +
        "I love how safe I feel with you, how I can be completely myself and know I’m accepted, wanted, and cherished. " +
        "Thank you for not giving up on us. Thank you for always trying, even when things aren’t easy, and for choosing us over and over again.\n\n" +
        "Your effort, your commitment, and your belief in what we have mean more to me than I can ever fully explain. " +
        "No matter where life takes us, I want you to know this: I’m on your side. I’m proud of you. I believe in you.\n\n" +
        "And I love you more deeply than I ever thought possible. ❤️\n\n" +
        "Always yours,\n💕"

    function typeWriter(text, element, index = 0) {
        if (index < text.length) {
            element.innerHTML += text.charAt(index) === "\n" ? "<br>" : text.charAt(index);
            setTimeout(() => typeWriter(text, element, index + 1), 40);
        }
    }

    function startLoveLetter() {
        letterTitle.textContent = "A Letter For You 💌";
        letterText.innerHTML = "";
        typeWriter(loveMessage, letterText);
    }
    
    // ================= SLIDESHOW =================
    function startSlideshow() {
        const slides = document.querySelectorAll(".slide");
        let index = 0;

        setInterval(() => {
            slides[index].classList.remove("active");
            index = (index + 1) % slides.length;
            slides[index].classList.add("active");
        }, 3000); // change every 3 seconds
    }

    // ================= QUIZ =================
    window.checkAnswer = function (btn, result, feedbackId) {
        const feedback = document.getElementById(feedbackId);
        
        // Disable all buttons in this question
        const questionDiv = btn.closest('.quiz-question');
        const buttons = questionDiv.querySelectorAll('button');
        buttons.forEach(b => {
            b.disabled = true;
            if (b === btn) {
                b.style.opacity = '1';
            } else {
                b.style.opacity = '0.5';
            }
        });
        
        if (result === "correct") {
            feedback.textContent = "✓ Correct! You know me so well 😘";
            feedback.style.color = "green";
        } else {
            feedback.textContent = "✗ Wrong 😅 Try again!";
            feedback.style.color = "red";
        }
    };

    // ================= HEART EASTER EGGS =================
    const heartContainer = document.getElementById("heart-container");

    const heartMessages = [
        // OLD (restored ❤️)
        "I love you ❤️",
        "Forever us 💍",
        "My safe place 🏡",
        "You make me smile 😊",
        "My favorite person 🥰",
        "Always you 💖",
        "Endless love 💘",
        // NEW (added ✨)
        "My home is you 🫶",
        "Every day, I choose you 💞",
        "My heart knows you 💓",
        "You’re my best decision 💫",
        "With you, always 🌸"
    ];

    heartMessages.forEach(msg => {
        const heart = document.createElement("span");
        heart.textContent = "❤️";

        heart.onclick = () => {
            heart.textContent = msg;
            heart.style.fontSize = "20px";
        };

        heartContainer.appendChild(heart);
    });

    // ================= NO BUTTON (STAYS VISIBLE) =================
    const noBtn = document.getElementById("no-btn");
    const valentine = document.getElementById("valentine");

    noBtn.addEventListener("mouseover", () => {
        const maxX = valentine.clientWidth - noBtn.offsetWidth - 20;
        const maxY = valentine.clientHeight - noBtn.offsetHeight - 20;

        const x = Math.random() * maxX;
        const y = Math.random() * maxY;

        noBtn.style.position = "absolute";
        noBtn.style.left = x + "px";
        noBtn.style.top = y + "px";
    });

    // ================= YES BUTTON + CONFETTI =================
    const yesBtn = document.getElementById("yes-btn");

    yesBtn.addEventListener("click", () => {
        valentine.innerHTML = `
            <h1>HEHE MUAHH!!! 💖</h1>
            <p>You just made me the happiest person alive 🥰</p>
            <img src="gifs/celebration.gif" width="320">
        `;

        confetti({
            particleCount: 300,
            spread: 120,
            startVelocity: 45,
            gravity: 0.8,
            origin: { y: 0.6 }
        });
    });

    // ================= FLOATING HEARTS BACKGROUND =================
    function createFloatingHearts() {
        const hearts = ['💖', '💕', '💗', '💓', '💝', '💞', '❤️', '🧡'];
        const numHearts = 15;

        for (let i = 0; i < numHearts; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
                heart.style.position = 'fixed';
                heart.style.fontSize = Math.random() * 20 + 20 + 'px';
                heart.style.left = Math.random() * 100 + '%';
                heart.style.top = '100%';
                heart.style.opacity = Math.random() * 0.5 + 0.3;
                heart.style.pointerEvents = 'none';
                heart.style.zIndex = '0';
                heart.style.animation = `floatUp ${Math.random() * 10 + 15}s linear infinite`;
                heart.style.animationDelay = Math.random() * 5 + 's';
                
                document.body.appendChild(heart);

                // Remove heart after animation
                setTimeout(() => {
                    if (heart.parentNode) {
                        heart.parentNode.removeChild(heart);
                    }
                }, 25000);
            }, i * 1000);
        }

        // Continuously create new hearts
        setInterval(() => {
            const heart = document.createElement('div');
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.position = 'fixed';
            heart.style.fontSize = Math.random() * 20 + 20 + 'px';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = '100%';
            heart.style.opacity = Math.random() * 0.5 + 0.3;
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '0';
            heart.style.animation = `floatUp ${Math.random() * 10 + 15}s linear infinite`;
            
            document.body.appendChild(heart);

            setTimeout(() => {
                if (heart.parentNode) {
                    heart.parentNode.removeChild(heart);
                }
            }, 25000);
        }, 2000);
    }

});