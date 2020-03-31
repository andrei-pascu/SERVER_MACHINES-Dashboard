import React, { Component } from 'react';

export default class CpuGraph extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    // var processes = this.props.specificMachineProcesses;
    // setTimeout(() => {
    //   console.log('cpu_graph ' + this.props.specificMachineProcesses[0]['cpu_usage'])
    // }, 3000);
    // this.setState({
    //   the_machines: this.props.bufferData[0]["machines"]
    // })
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
              CpuGraph:
          </span>
        )
      } else {
        
        return (
          <span className="my_class"> 
              CpuGraph: {': ' + this.calculateCurrentCpuUsage()}
          </span>
        )
      }
    }
}