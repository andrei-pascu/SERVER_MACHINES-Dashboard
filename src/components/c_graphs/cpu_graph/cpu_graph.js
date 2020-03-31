import React, { Component } from 'react';

// this.props.historyData
// this contains the 20 item history


export default class CpuGraph extends Component {
  constructor(props) {
    super(props);
  }
  

  logData() {
    // console.log('cpu_graph')
    // console.log(this.props.historyData)
  }

  calculateGraphCpuUsage() {
    // get all 20 items
    // calculateCpuUsage for all 20 seconds
    // generate SVG points for every one of them
  }

  calculateCurrentCpuUsage() {
    var processes = this.props.specificMachineProcesses;
    var sum = 0;
    for(let x = 0; x < processes.length; x++) {
      sum += processes[x]['cpu_usage']
    }
    // console.log('cpu_usage ' + sum)
    return sum;
  }

    render () {
      if (!this.props.specificMachineProcesses) {
        return (
          <span className="my_class"> 
              TEMP_LAST_GENERATED_SECOND_CPUusage:
          </span>
        )
      } else {
        this.logData()
        return (
          <span className="my_class"> 
              TEMP_LAST_GENERATED_SECOND_CPUusage: {': ' + this.calculateCurrentCpuUsage()}
          </span>
        )
      }
    }
}