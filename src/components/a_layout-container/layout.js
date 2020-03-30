import React, { Component } from 'react';
import SidePanel from '../b_side-panel/side_panel';
import GraphsContainer from '../c_graphs/graphs_container';
import ExeList from '../d_exe-list/exe_list';
import cached_data from '../../api/init_data';
// import buffer_data from '../../api/init_data';

export default class Layout extends Component {
  constructor(props) {
    super(props);
    // this.cached_data = cached_data;
// console.log(this.cached_data)
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