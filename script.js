let military = 50;
let economy = 50;
let happiness = 50;
let turn = 0;
let currentEvent;

const events = [
    {
        text: "Barbarians threaten the northern border.",
        option1: { text: "Send troops", military: -10, economy: -5, happiness: +5 },
        option2: { text: "Negotiate peace", military: -5, economy: -10, happiness: +10 }
    },
    {
        text: "Build a grand Colosseum?",
        option1: { text: "Yes, build it", military: 0, economy: -15, happiness: +20 },
        option2: { text: "No, save money", military: 0, economy: +10, happiness: -10 }
    },
    {
        text: "Increase taxes to fund army?",
        option1: { text: "Raise taxes", military: +10, economy: +15, happiness: -20 },
        option2: { text: "Keep taxes low", military: -5, economy: -10, happiness: +10 }
    }
];

function updateStats() {
    document.getElementById("military").innerText = military;
    document.getElementById("economy").innerText = economy;
    document.getElementById("happiness").innerText = happiness;
}

function nextTurn() {
    if (turn >= 10) {
        alert("You successfully ruled Rome!");
        location.reload();
        return;
    }

    currentEvent = events[Math.floor(Math.random() * events.length)];
    document.getElementById("event-text").innerText = currentEvent.text;

    document.querySelectorAll(".buttons button")[0].innerText = currentEvent.option1.text;
    document.querySelectorAll(".buttons button")[1].innerText = currentEvent.option2.text;

    turn++;
}

function chooseOption(choice) {
    let option = choice === 1 ? currentEvent.option1 : currentEvent.option2;

    military += option.military;
    economy += option.economy;
    happiness += option.happiness;

    updateStats();

    if (military <= 0 || economy <= 0 || happiness <= 0) {
        alert("Your empire has fallen!");
        location.reload();
    }
}
