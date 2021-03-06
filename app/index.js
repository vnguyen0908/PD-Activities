import document from "document";
import { init } from "./views";
import { HeartRateSensor } from "heart-rate";
import { Barometer } from "barometer";
import { Gyroscope} from "gyroscope";
import { Accelerometer} from "accelerometer";
import {OrientationSensor} from "orientation";

// Fetch UI elements we will need to change
let hrLabel = document.getElementById("hrm");
let updatedLabel = document.getElementById("updated");

// Keep a timestamp of the last reading received. Start when the app is started.
let lastValueTimestamp = Date.now();

class Gyroscope {
    constructor(x,y,z){
      this.x=x;
      this.y=y;
      this.z=z;
    }
  }
  class Accelerometer{
    constructor(x,y,z){
      this.x=x;
      this.y=y;
      this.z=z;
    }
  }
  class OrientationSensor{
    constructor(q0,q1,q2,q4){
      this.quaternion0=q0;
      this.quaternion1=q1;
      this.quaternion2=q2;
      this.quaternion3=q4;
    }
  }

const views = init(
    [
        ["view-1", () => import("./views/view-1")],
        ["view-2", () => import("./views/view-2")],
        ["view-3", () => import("./views/view-3")]
    ],
    "./resources/views/"
);
// Select the first view (view-1) after 1 second
setTimeout(() => {              
    views.navigate("view-1");   
}, 1000);    



// Create a new instance of the HeartRateSensor object
var hrm = new HeartRateSensor();
var bar = new Barometer ({frequency: 1}) ;  
var gyro= new Gyroscope ({frequency:30, batch:60});
var accel= new Accelerometer({frequency:1});
var orien= new OrientationSensor({frequency:60})  ;                           
                                               
function updateDisplay() {
    var gyroData= gyro.x1 +","+ gyro.y +","+ gyro.z;
    let gyString= JSON.stringify(gyroData);

  var accelData=accel.x2 +"," + accel.y +","+ accel.z;
    let acString=JSON.stringify(accelData);
  
  var orienData= orien.q0+","+orien.q1+","+orien.q2+","+orien.q4;
    let orString=JSON.stringify(orienData)
    console.log(+hrm.heartRate+","+acString+"," +bar.pressure+","+gyString+ ","+orString)
};

// Begin monitoring the sensor
hrm.start();
bar.start();
class Gyroscope {
    constructor(gyro) {
      gyro.start();
    }
  }
  class Accelerometer{
    constructor(accel){
      accel.start();
    }
  }
  class OrientationSensor{
    constructor(orien){
      orien.start();
    }
  }
// And update the display every second
setInterval(updateDisplay, 1000);




    