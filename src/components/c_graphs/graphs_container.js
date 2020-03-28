import React, { Component } from 'react';
import CpuGraph from './cpu_graph/cpu_graph';
import RamGraph from './ram_graph/ram_graph';

export default class GraphsContainer extends Component {
    render () {
      return (
        <div className="my_class"> 
            GraphsContainer <br/>
            <span>_____<CpuGraph/></span> <br/>
            <span>_____<RamGraph/></span>
        </div>
      )
    }
}