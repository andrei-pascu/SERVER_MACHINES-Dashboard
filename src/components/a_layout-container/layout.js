import React, { Component } from 'react';
import SidePanel from '../b_side-panel/side_panel';
import GraphsContainer from '../c_graphs/graphs_container';
import ExeList from '../d_exe-list/exe_list';

import secondGenerator from '../../mocked_datacenter/mock_init_data_generator';
import mockDataExample from '../../mocked_datacenter/DATA_cache_buffer';

export default class Layout extends Component {
    constructor(props) {
        super(props);
        this.buffer = this.buffer;
        this.useSideDataFromSidepanel = this.useSideDataFromSidepanel.bind(this);

        this.state = {
            inited: false,
            buffer: new secondGenerator(new mockDataExample()).generate(60),
            displayedMachine: 0,
            displayedMachineList: 0
        };
        console.log(this.state.stream)
        console.log(this.state.buffer)
    }


    componentDidMount() {
        this.setDisplayedMachineIndex(0);
    }


    streamData = () => {
        if (this.state.buffer.length == 31) {
            var x = new secondGenerator(new mockDataExample()).generate(60);
            return this.setState({
                buffer: x
            })
        } else {
            this.state.buffer.pop()
            var x = this.state.buffer;
            return this.setState({
                buffer: x
            })
        }
    }

    componentWillMount() {
        this.updateTime = setInterval(
            () => this.streamData(),
            1000
        );
    }


    setDisplayedMachineIndex = (machine_index) => {
        return this.setState({
            displayedMachine: this.state.buffer[0]["machines"][machine_index],
            displayedMachineList: machine_index
        })
    }

    useSideDataFromSidepanel(val) {
        this.setDisplayedMachineIndex(val)
    }


    render() {
        return (
            <div className="layout">
                <SidePanel
                    sidePanelClickSendsData={this.useSideDataFromSidepanel}
                    bufferData={this.state.buffer}
                />
                <div className="constant-display-container">
                    <GraphsContainer
                        specificMachineBufferData={this.state.displayedMachine}
                        specificMachineIndex={this.state.displayedMachineList}
                        historyData={this.state.buffer}
                    />
                    <ExeList
                        specificMachineBufferData={this.state.displayedMachine}
                        specificMachineIndex={this.state.displayedMachineList}
                        historyData={this.state.buffer}
                    />
                </div>
            </div>
        )
    }
}