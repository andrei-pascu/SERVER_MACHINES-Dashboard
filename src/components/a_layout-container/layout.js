import React, { Component } from 'react';
import SidePanel from '../b_side-panel/side_panel';
import GraphsContainer from '../c_graphs/graphs_container';
import ExeList from '../d_exe-list/exe_list';
import stream_method from '../../api/data_stream';

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.buffer = this.buffer
    // this.a_var = a_var(1000);
// console.log(this.data_stream())
    // this.test = cached_data[29]["machine_name"];

    this.state = {
      inited:false,
      stream: stream_method,
      buffer: null,
      magicNumber: 25
    }
  }

  // stream_intermediary() {
  //     // setInterval(() => {
  //     //   this.setState({buffer: this.state.stream()["data"][0]["timestamp"]})
  //     // }, 100000);

  //     this.setState((state) => {
  //       return {buffer: state.stream_method};
  //     });
  // }


  // wtfAAAA() {
  //   return this.setState({
  //     buffer: this.state.stream()
  //   })
  // }

  // wtfAAAA() {
  //   console.log('a function dude')
  // }
componentWillMount() {
  this.setState({
    buffer: this.state.stream()["data"]
  })
  this.updateTime = setInterval(
    () => this.getFreshData(),
    1000
  )
}

getFreshData = () => {
  // console.log(this.state.stream()["data"])
  return this.setState({
    // buffer: Math.random()
    buffer: this.state.stream()["data"]
  })
}






  // stream() {
  //   this.stream_intermediary()
  //     // this.setState({buffer: this.state.stream()["data"][0]["timestamp"]})
  //     setInterval(() => {
  //       // this.buffer = this.state.stream()[0]["timestamp"];
  //       // console.log(this.state.stream()["data"][0]["timestamp"])
  //     }, 1000);
  //     console.log(this.state.buffer)
  // }


    render () {
      // this.stream()
      // this.blahblah()






      
      // this.stream()
      // this.stream()
      return (
        <div className="my_class"> 
          {this.state.buffer[0]["timestamp"]} <br/>
          {this.state.buffer[0]["machines"][0]["machine_name"]} <br/>
          {this.state.buffer[0]["machines"][0]["machine_ip"]} <br/>
          {this.state.buffer[0]["machines"][0]["cpu_core_nr"]} <br/>
          {this.state.buffer[0]["machines"][0]["ram_max_size"] / 1000000 + ' gb'} <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
            <SidePanel />
            <GraphsContainer />
            <ExeList />
        </div>
      )
    }
}