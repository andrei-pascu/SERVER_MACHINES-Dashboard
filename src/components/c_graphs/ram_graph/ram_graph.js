import React, { Component } from 'react';

// this.props.historyData
// this contains the 20 item history

export default class RamGraph extends Component {
  constructor(props) {
    super(props);
  }


  calculateGraphMemoryUsage() {
    // get all 20 items
    // calculateMemoryUsage for all 20 seconds
    // generate SVG points for every one of them
  }

  calculateCurrentMemoryUsage() {
    var processes = this.props.specificMachineProcesses;
    var sum = 0;
    for(let x = 0; x < processes.length; x++) {
      sum += processes[x]['memory_usage']
    }
    // console.log('memory_usage ' + sum)
    return sum/1000000;
  }



  render () {
    if (!this.props.specificMachineProcesses) {
      return (
        <span className="my_class"> 
            TEMP_LAST_GENERATED_SECOND_RAMusage:
        </span>
      )
    } else {
      
      return (
        <span className="my_class"> 
            TEMP_LAST_GENERATED_SECOND_RAMusage: {': ' + this.calculateCurrentMemoryUsage()}
        </span>
      )
    }
  }
}