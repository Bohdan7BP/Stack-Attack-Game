export function setAnimationTimeout(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
}

export function random(n) {
    return Math.floor(Math.random() * Math.floor(n));
}

export function shuffle(arr) {
    arr.sort(() => Math.round(Math.random() * 100) - 50);
}