// 

class Timer {

    constructor() {
    // member vars
        this.startTime = 0;
        this.endTime = 0;
        this.stopped = true;
    }

    // member functions
    // start timer
    timerStart() {
        this.startTime = this.endTime = Date.now();
        this.stopped = false;
    }

    // stop the timer
    timerStop() {
        this.endTime = Date.now();
        this.stopped = true;
    }

    // return the elapsed time in ms
    getTime() {
    // if still running, get the current time
        if(!this.stopped)
        {
            this.endTime = Date.now();
        }
        return this.endTime - this.startTime;
    }

    // return human readable time format: h:mm:ss:mmm
    getTimeString() {
        let tet = this.getTime();
        let ms = tet % 1000; // ms only
        let sec = Math.floor(tet / 1000) % 60; // sec only
        let min = Math.floor(tet / 60000) % 60; // min only
        let hr = Math.floor(tet / 3600000) % 60; // hour only
        
        // pad 0s in time string
        return hr + ":" +
        ("0" + min).slice(-2) + ":" +
        ("0" + sec).slice(-2) + ":" +
        ("00" + ms).slice(-3);
    }

}