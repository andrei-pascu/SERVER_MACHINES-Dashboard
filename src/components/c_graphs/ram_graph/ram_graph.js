import React, { Component } from 'react';

export default class RamGraph extends Component {
  constructor(props) {
    super(props);
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
            RAMGraph:
        </span>
      )
    } else {
      
      return (
        <span className="my_class"> 
            RAMGraph: {': ' + this.calculateCurrentMemoryUsage()}
        </span>
      )
    }
  }
}