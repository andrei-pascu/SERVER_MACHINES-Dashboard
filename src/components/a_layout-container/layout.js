import React, { Component } from 'react';
import SidePanel from '../b_side-panel/side_panel';
import GraphsContainer from '../c_graphs/graphs_container';
import ExeList from '../d_exe-list/exe_list';
import data_stream from '../../api/data_stream';

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.data_stream = data_stream;
// console.log(this.data_stream)
    // this.test = cached_data[29]["machine_name"];

    this.state = {
      inited:false
    }
  }


    render () {
      return (
        <div className="my_class"> 
            {/* {test} */}
            {/* {this.test} */}
            asds
            <SidePanel />
            <GraphsContainer />
            <ExeList />
        </div>
      )
    }
}