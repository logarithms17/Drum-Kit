// let tom1 = document.querySelector(".w")
// let tom2 = document.querySelector(".a")
// let tom3 = document.querySelector(".s")
// let tom4 = document.querySelector(".d")
// let snare = document.querySelector(".j")
// let crash = document.querySelector(".k")
// let kick = document.querySelector(".l")

// console.log(tom1)

// function tomOneSound(e) {
    
//     if (e.key === "w") {
//     let audio = new Audio('./sounds/tom-1.mp3')
//     audio.play()
//     }
// }
// function tomTwoSound(e) {
//     if (e.key === "a") {
//         let audio = new Audio('./sounds/tom-2.mp3');
//         audio.play();
//     }
// }
// function tomThreeSound(e) {
//     if (e.key === "s") {
//         let audio = new Audio('./sounds/tom-3.mp3');
//         audio.play();
//     }
// }
// function tomFourSound(e) {
//     if (e.key === "d") {
//         let audio = new Audio('./sounds/tom-4.mp3');
//         audio.play();
//     }
// }
// function snareSound(e) {
//     if (e.key === "j") {
//         let audio = new Audio('./sounds/snare.mp3');
//         audio.play();
//     }
// }
// function crashSound(e) {
//     if (e.key === "k") {
//         let audio = new Audio('./sounds/crash.mp3');
//         audio.play();
//     }
// }
// function kickSound(e) {
//     let audio = new Audio('./sounds/kick-bass.mp3');
//     audio.play();
// }


// document.addEventListener("keydown", tomOneSound)
// document.addEventListener("keydown", tomTwoSound)
// document.addEventListener("keydown", tomThreeSound)
// document.addEventListener("keydown", tomFourSound)
// document.addEventListener("keydown", snareSound)
// document.addEventListener("keydown", crashSound)
// document.addEventListener("keydown", kickSound)

let drums = document.querySelectorAll(".drum")
console.log(drums)

let numberOfDrums = drums.length
console.log(numberOfDrums)


document.addEventListener("keydown", function (e) {
    console.log(e.key)
    let keyInput = (e.key).toLowerCase()
    if (keyInput === "w") {
        let audio = new Audio('./sounds/tom-1.mp3')
        audio.play()
    } else if (keyInput === "a") {
        console.log(e.key)
        let audio = new Audio('./sounds/tom-2.mp3');
        audio.play();
    } else if (keyInput === "s") {
        console.log(e.key)
        let audio = new Audio('./sounds/tom-3.mp3');
        audio.play();
    } else if (keyInput === "d") {
        console.log(e.key)
        let audio = new Audio('./sounds/tom-4.mp3');
        audio.play();
    } else if (keyInput === "j") {
        console.log(e.key)
        let audio = new Audio('./sounds/snare.mp3');
        audio.play();
    } else if (keyInput === "k") {
        console.log(e.key)
        let audio = new Audio('./sounds/crash.mp3');
        audio.play();
    } else if (keyInput === "l") {
        console.log(e.key)
        let audio = new Audio('./sounds/kick-bass.mp3');
        audio.play();   
    }
})

