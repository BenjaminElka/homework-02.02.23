class Stopwatch {
    constructor() {
        this.time = 0;
        this.intervalId = null;
    }
    start() {
        
        this.intervalId = setInterval(() => {
            this.time++;
            document.getElementById("time").innerHTML = this.time;
        }, 1000);
    }
    stop() {
        clearInterval(this.intervalId);
    }
}

let sw = new Stopwatch();
document.getElementById("start").addEventListener("click", sw.start.bind(sw));
document.getElementById("stop").addEventListener("click", sw.stop.bind(sw));


