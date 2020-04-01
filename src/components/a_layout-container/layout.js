import React, { Component } from 'react';
import SidePanel from '../b_side-panel/side_panel';
import GraphsContainer from '../c_graphs/graphs_container';
import ExeList from '../d_exe-list/exe_list';
// import stream_method from '../../api/data_stream';
import mock_init_data_generator from '../../mocked_datacenter/mock_init_data_generator';

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.buffer = this.buffer;
    this.useSideDataFromSidepanel = this.useSideDataFromSidepanel.bind(this);
    // this.a_var = a_var(1000);
// console.log(this.data_stream())
    // this.test = cached_data[29]["machine_name"];

    this.state = {
      inited:false,
      stream: mock_init_data_generator,
      buffer: mock_init_data_generator(60),
      displayedMachine: 0,
      displayedMachineList: 0
    }
  }

  
  componentDidMount() {
    // console.log(data_generator(5))
    // this.getFreshData()
    this.setDisplayedMachineIndex(0);
  }


  streamData = () => {
    if (this.state.buffer.length == 30) {
      var x = mock_init_data_generator(60);
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

  getFreshData = () => {
    return this.setState({
      buffer: this.state.stream()["data"]
    })
  }


  setDisplayedMachineIndex = (machine_index) => {
    return this.setState({
      displayedMachine: this.state.buffer[0]["machines"][machine_index],
      displayedMachineList: machine_index
    })
  }

  useSideDataFromSidepanel(val){
    this.setDisplayedMachineIndex(val)
  }


    render () {
      return (
        <div className="my_class"> 
          <br/>
          <br/>
          <br/>
          <br/>
            <SidePanel 
              sidePanelClickSendsData={this.useSideDataFromSidepanel}
              bufferData={this.state.buffer}
            />
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
      )
    }
}