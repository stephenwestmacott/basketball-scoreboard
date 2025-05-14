let homeScore = 0
let guestScore = 0
let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")

function plusOneHome() {
    homeScore += 1
    homeEl.textContent = homeScore
}

function plusTwoHome() {
    homeScore += 2
    homeEl.textContent = homeScore
}

function plusThreeHome() {
    homeScore += 3
    homeEl.textContent = homeScore
}

function plusOneGuest() {
    guestScore += 1
    guestEl.textContent = guestScore
}

function plusTwoGuest() {
    guestScore += 2
    guestEl.textContent = guestScore
}

function plusThreeGuest() {
    guestScore += 3
    guestEl.textContent = guestScore
}