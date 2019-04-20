var Clock = /** @class */ (function () {
    function Clock() {
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
var instanceOfClock = function (props) { return typeof props['currentTime'] !== 'undefined'; };
var clock = new Clock();
console.log(instanceOfClock(clock));
var rhombus = {};
rhombus.color = 'red';
rhombus.sideLength = 10;
