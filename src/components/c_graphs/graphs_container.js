import React, { Component } from 'react';
import CpuGraph from './cpu_graph/cpu_graph';
import RamGraph from './ram_graph/ram_graph';

// this.props.historyData
// this contains the 20 item history

export default class GraphsContainer extends Component {
  constructor(props) {
    super(props);
  }

  
    render () {
      return (
        <div className="my_class"> 
            ____GraphsContainer______ <br/>
            {'H1______________ NAME: ' + this.props.specificMachineBufferData['machine_name']} <br/>
            {'H2______________ IP: ' + this.props.specificMachineBufferData['machine_ip']} <br/>
            {'H2______________ CPU: ' + this.props.specificMachineBufferData['cpu_core_nr'] + ' cores'} <br/>
            {'H2______________ RAM: ' + this.props.specificMachineBufferData['ram_max_size']/1000000 + 'mb'} <br/>
            <div style={{display: 'flex'}}>
              <span>_____
                <CpuGraph
                  specificMachineProcesses={this.props.specificMachineBufferData['processes']}
                  specificMachineIndex={this.props.specificMachineIndex}
                  historyData={this.props.historyData}
                />
                </span> <br/>
              <span>_____
                <RamGraph
                  specificMachineProcesses={this.props.specificMachineBufferData['processes']}
                  specificMachineIndex={this.props.specificMachineIndex}
                  historyData={this.props.historyData}
                />
                </span>
            </div>
        </div>
      )
    }
}