



function calculate_time(current_time, offset) {
  (offset) ? offset = offset: offset = 0;
  var current_time = current_time.getTime();
  current_time = current_time - offset*1000;
  var seconds = parseInt((current_time/1000)%60)
  var minutes = parseInt((current_time/(1000*60))%60)
  var hours = parseInt((current_time/(1000*60*60))%24) + 1;

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds;
}

// const imutable_date = new Date();
// function msToTime(new_data, offset) {
//   if (!new_data) {
//     // console.log('old date cica')
//     return calculate_time(imutable_date, offset)
//   } else {
//     // console.log('new date cica')
//     var new_date = new Date();
//     return calculate_time(new_date, offset)
//   }
// }

export default calculate_time;
  // setInterval(() => {
  //   gets buffer_data
    //   iterates through buffer_data
        //   asks, 
        //   is it a new timestamp?
          //   if yes
            //   push to LOCAL DATA STREAMING
    
  //   it can take 4 seconds
      //   to get ONLY2 new (every second) timestamps
  //   next 2s, youll get 6 new timestamps
      //   => buffer will be filled
  // }, 1000);




  // GENERATE DATA 
    // RANDOM add/remove PROCESSES
    // RANDOM NR'S 9999 MOCK REAL-TIME
        // ----> LOW USAGE NR'S (DONT EXCEED 100% lul)
    // RANDOM DELAY 