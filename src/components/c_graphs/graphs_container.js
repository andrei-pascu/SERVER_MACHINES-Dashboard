import React, { Component } from 'react';
import CpuGraph from './cpu_graph/cpu_graph';
import RamGraph from './ram_graph/ram_graph';
import './graphs_container.css';

export default class GraphsContainer extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="graphs_header_container">
                <header>
                    <div className='machine_name_ip'>
                        <h2 className='machine_name'>
                            {this.props.specificMachineBufferData['machine_name']}
                        </h2>
                        <p className='machine_name_ip'>
                            {this.props.specificMachineBufferData['machine_ip']}
                        </p>
                    </div>
                    <div className='machine_details'>
                        <p>
                            {this.props.specificMachineBufferData['cpu_core_nr'] + ' cores'}
                        </p>
                        <p>
                            {this.props.specificMachineBufferData['ram_max_size'] / 1000000 + 'mb'}
                        </p>
                    </div>
                </header>
                <div className="graphs_container">
                    <span>
                        <CpuGraph
                            specificMachineProcesses={this.props.specificMachineBufferData['processes']}
                            specificMachineIndex={this.props.specificMachineIndex}
                            historyData={this.props.historyData}
                        />
                    </span> <br />
                    <span>
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