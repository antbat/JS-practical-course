// Will have 4 steps:
// 1. create timer
// 2. create random huge array
// 3. find top N=10 from different numbers
// 4. merge all branches to main

class Timer{}
class HugeArrayRandom{}
class GetTop{}

class Timer{
    Start(){
        const now = new Date();            
        this.timer = now.getMilliseconds();
        return now;
    }
    timeDelay(){
        const now = new Date();      
        const timeDelay = now.getMilliseconds() - this.timer
        return timeDelay;
    }
}