import {htmlGenerator} from "./warmup";

const clockElement = document.getElementById("clock");

class Clock {
    constructor() {
        let date = new Date();
        this.hours = date.getHours();
        this.minutes = date.getMinutes();
        this.seconds = date.getSeconds();
    
        this.printTime();
        setInterval(() => this._tick(), 1000)
    }
  
    printTime() {
        return [this.hours, this.minutes, this.seconds].join(":");
    }
  
    _tick() {
        this.seconds++;

        if(this.seconds === 60) {
            this.seconds = 0;
            this.minutes++;
          
            if(this.minutes===60) {
                this.minutes = 0;
                this.hours++;
              
                if (this.hours===24) {
                    this.hours = 0;
                };
            };
        };
        
        htmlGenerator(this.printTime(), clockElement);
    };
};

let clock = new Clock();

export default Clock;