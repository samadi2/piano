/* Script js */
let clap = new Audio('../sounds/clap.wav');
let hihat = new Audio('../sounds/hihat.wav');
let kick = new Audio('../sounds/kick.wav');
let openhat = new Audio('../sounds/openhat.wav');
let boom = new Audio('../sounds/boom.wav');
let ride = new Audio('../sounds/ride.wav');
let snare = new Audio('../sounds/snare.wav');
let tom = new Audio('../sounds/tom.wav');
let tink = new Audio('../sounds/tink.wav');

document.addEventListener('keyup',(event) => {
    if (event.key === "a") {
        clap.play();
    } else if (event.key === "s") {
        hihat.play();
    } else if (event.key ==="d") {
        kick.play();
    } else if (event.key === "f") {
        openhat.play();
    } else if (event.key === "g") {
        boom.play();
    } else if (event.key === "h") {
        ride.play();
    } else if (event.key ==="j") {
        snare.play();
    } else if (event.key ==="k") {
        tom.play();        
    } else if (event.key === "l") {
        tink.play();
    }
})