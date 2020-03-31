import React, { Component } from 'react';
import SidePanel from '../b_side-panel/side_panel';
import GraphsContainer from '../c_graphs/graphs_container';
import ExeList from '../d_exe-list/exe_list';
import stream_method from '../../api/data_stream';

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
      stream: stream_method,
      buffer: null,
      displayedMachine: 0
    }
  }

  
  componentDidMount() {
    this.getFreshData()
    this.setDisplayedMachineIndex(0);
  }

  componentWillMount() {
    this.setState({
      buffer: this.state.stream()["data"]
    });
    this.updateTime = setInterval(
      () => this.getFreshData(),
      5000
    );
  }

  getFreshData = () => {
    // console.log(this.state.stream()["data"])
    return this.setState({
      // buffer: Math.random()
      buffer: this.state.stream()["data"]
    })
  }


  setDisplayedMachineIndex = (machine_index) => {
    console.log(this.state.buffer[0]["machines"][machine_index])
    return this.setState({
      // buffer: Math.random()
      displayedMachine: this.state.buffer[0]["machines"][machine_index]
    })
  }

  useSideDataFromSidepanel(val){
    // val = val + ' value'
    this.setDisplayedMachineIndex(val)
    // console.log(val);
    // console.log(this.state.displayedMachine);
  }


    render () {
      // this.stream()
      // this.blahblah()






      
      // this.stream()
      // this.stream()
      return (
        <div className="my_class"> 
          {this.state.buffer[0]["timestamp"]} <br/>
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
            />
            <ExeList
              specificMachineBufferData={this.state.displayedMachine}
            />
        </div>
      )
    }
}