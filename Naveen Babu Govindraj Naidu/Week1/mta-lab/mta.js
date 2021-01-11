console.log("Mta-Lab");
// MTA-Lab:

  const N =["TS","34th","28th","23rd","US","8th"];
  const L =["8","6th","US","3rd","1st"];
  const S =["GC","33rd","28th","23","US","AP"];

  let noOfStops = 0;
  let stopsTravelled = [];
const journeyOfUser = function(startLine,getIn,endLine,getOff){

    let getInIndex = startLine.indexOf(getIn);
    let startInterIndex = startLine.indexOf("US");
    let endInterIndex = endLine.indexOf("US");
    let getOffIndex = endLine.indexOf(getOff);
    let totalStops1 = startInterIndex - getInIndex;
    let totalStops2 = Math.abs(endInterIndex-getOffIndex);
    noOfStops = totalStops1 + totalStops2;
    getInIndex = getInIndex + 1;
    for (i = 0; i < totalStops1; i++){
      stopsTravelled[i] = startLine[getInIndex];
      getInIndex++;
    }

    for(i = totalStops1 - 1;i < noOfStops - 1; i++){
      if(getOffIndex < endInterIndex){
        stopsTravelled[i] = endLine[endInterIndex];
        endInterIndex--;
      }else{
        stopsTravelled[i] = endLine[endInterIndex];
        endInterIndex++;
      }
    }
    console.log(`The total number of stops:${noOfStops -1}`);
    console.log(`You must travel through the following stops:${stopsTravelled}`);
    
  };
     function planTrip(startLine,getIn,endLine,getOff){
      if(startLine == "N" || "L" || "S" && endLine == "N" || "L" || "S"){
        journeyOfUser(startLine,getIn,endLine,getOff);
      }else{
        console.log("The line name is Incorrect!!!");
      }
    };
planTrip(S, 'GC', N, 'TS');
