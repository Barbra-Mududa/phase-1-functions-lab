// Code your solution in this file!

function distanceFromHqInBlocks(blocks){
    let distanceInBlocks = blocks - 42;
    if(blocks < 42){
    distanceInBlocks = 42 - blocks;
     }
    return distanceInBlocks;
}

function distanceFromHqInFeet(blocks){
    let distanceInFeet = (blocks - 42)*264;
    if(blocks < 42){
        distanceInFeet = (42 - blocks)*264;
         }
    return distanceInFeet;
}

function distanceTravelledInFeet(distance, destination){
    let distanceTravelled = (distance - destination)*264;
    if(destination > distance){
        distanceTravelled = (destination - distance)*264;
    }
    return distanceTravelled;
}

function calculatesFarePrice(start, destination) {
    let distanceTravelledInFeet = (start - destination) * 264;
    if (start < destination) {
      distanceTravelledInFeet = (destination - start) * 264;
    }
  
    if (distanceTravelledInFeet <= 400) {
      return 0;
    } else if (distanceTravelledInFeet > 400 && distanceTravelledInFeet <= 2000) {
      return (distanceTravelledInFeet - 400) * 0.02;
    } else if (
      distanceTravelledInFeet > 2000 &&
      distanceTravelledInFeet <= 2500
    ) {
      return 25;
    } else {
      return "cannot travel that far";
    }
}
