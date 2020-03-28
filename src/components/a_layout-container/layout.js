import React, { Component } from 'react';
import SidePanel from '../b_side-panel/side_panel';
import GraphsContainer from '../c_graphs/graphs_container';
import ExeList from '../d_exe-list/exe_list';

export default class Layout extends Component {
    render () {
      return (
        <div className="my_class"> 
            asds
            <SidePanel />
            <GraphsContainer />
            <ExeList />
        </div>
      )
    }
}