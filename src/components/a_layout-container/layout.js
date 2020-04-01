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
      displayedMachine: 0
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
    // this.setState({
    //   buffer: mock_init_data_generator(30)
    // });
    // this.streamData()
    // this.updateTime = setInterval(
    //   () => this.streamData(),a
    //   1000
    // );
    this.updateTime = setInterval(
      () => this.streamData(),
      1000
    );


    // console.log(this.state.buffer)
    // setInterval(() => {
    //   streamData()

    // }, 1000)
    // this.state.buffer.pop()
    // console.log(this.state.buffer)

    // this.updateTime = setInterval(
    //   () => this.getFreshData(),
    //   1000
    // );
    // setTimeout(() => {
    //   this.getFreshData()
    // }, 1000)
    // setTimeout(() => {
    //   this.getFreshData()
    // }, 2000)
    // setTimeout(() => {
    //   this.getFreshData()
    // }, 3000)
    // setTimeout(() => {
    //   this.getFreshData()
    // }, 4000)
    // setTimeout(() => {
    //   this.getFreshData()
    // }, 5000)
    // setTimeout(() => {
    //   this.getFreshData()
    // }, 6000)
    // setTimeout(() => {
    //   this.getFreshData()
    // }, 7000)
    // setTimeout(() => {
    //   this.getFreshData()
    // }, 9000)
    // setTimeout(() => {
    //   this.getFreshData()
    // }, 10000)
    // setTimeout(() => {
    //   this.getFreshData()
    // }, 11000)
    // setTimeout(() => {
    //   this.getFreshData()
    // }, 12000)
    // setTimeout(() => {
    //   this.getFreshData()
    //   console.error('fkup')
    // }, 13000)
    // setTimeout(() => {
    //   this.getFreshData()
    //   console.error('fkup')
    // }, 14000)
    // setTimeout(() => {
    //   this.getFreshData()
    //   console.error('fkup')
    // }, 15000)
    // setTimeout(() => {
    //   this.getFreshData()
    //   console.error('fkup')
    // }, 16000)
  }

  getFreshData = () => {
    // console.log('mounted')
    // console.log('1 in urma', this.state.buffer)
    // console.log(this.state.stream()["data"])
    return this.setState({
      // buffer: Math.random()
      buffer: this.state.stream()["data"]
    })
  }


  setDisplayedMachineIndex = (machine_index) => {
    // console.log(this.state.buffer[0]["machines"][machine_index])
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


                  // second 10,11,12,13   threadripper     first process   usage
                  // console.log(this.state.buffer)
                  // console.log(this.state.buffer[11]['machines'][0]['processes'][0]['cpu_usage'])
                  // console.log(this.state.buffer[12]['machines'][0]['processes'][0]['cpu_usage'])
                  // console.log(this.state.buffer[13]['machines'][0]['processes'][0]['cpu_usage'])




      
      // this.stream()
      // this.stream()
      return (
        <div className="my_class"> 
          {this.state.buffer[0]["timestamp"]} <br/>
          {this.state.buffer[1]["timestamp"]} <br/>
          {this.state.buffer[2]["timestamp"]} <br/>
          {this.state.buffer[3]["timestamp"]} <br/>
          {this.state.buffer[4]["timestamp"]} <br/>
          {this.state.buffer[5]["timestamp"]} <br/>
          {this.state.buffer[6]["timestamp"]} <br/>
          {this.state.buffer[7]["timestamp"]} <br/>
          {this.state.buffer[8]["timestamp"]} <br/>
          {this.state.buffer[9]["timestamp"]} <br/>
          {this.state.buffer[10]["timestamp"]} <br/>
          {this.state.buffer[11]["timestamp"]} <br/>
          {this.state.buffer[12]["timestamp"]} <br/>
          {this.state.buffer[13]["timestamp"]} <br/>
          {this.state.buffer[14]["timestamp"]} <br/>
          {this.state.buffer[15]["timestamp"]} <br/>
          {this.state.buffer[16]["timestamp"]} <br/>
          {this.state.buffer[17]["timestamp"]} <br/>
          {this.state.buffer[18]["timestamp"]} <br/>
          {this.state.buffer[19]["timestamp"]} <br/>
          {this.state.buffer[20]["timestamp"]} <br/>
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
              historyData={this.state.buffer}
            />
            <ExeList
              specificMachineBufferData={this.state.displayedMachine}
            />
        </div>
      )
    }
}