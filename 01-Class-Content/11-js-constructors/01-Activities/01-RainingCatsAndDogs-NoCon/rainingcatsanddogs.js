const dogs = (raining, noise) => {
    this.raining = true
    this.noise = ("woof!")
    this.makenoise = function() {
        if (this.raining === true) {
            console.log(this.noise);
        }
    }
}

const cats = (raining, noise) => {
    this.raining = false
    this.noise = ("meow!")
    this.makenoise = function() {
        if (this.raining === true) {
            console.log(this.noise);
        }
    }
}

function makeitrain() {
    cats.raining === true 
}

function massHysteria() {
    if (dogs.raining === true && cats.raining === true) {
        console.log("CATS AND DOGS LIVE TOGETHER, MASS HYSTERIA!!")
    } 
}

dogs.makenoise;
cats.makenoise;
makeitrain;
massHysteria; 