import React, { Component } from 'react';

// this.props.historyData
// this contains the 20 item history

export default class RamGraph extends Component {
  constructor(props) {
    super(props);
    this.svg_inner = {
      width: 950,
      height: 400
    };
    this.svg_inner_viewbox = `0 0 ${this.svg_inner['width']} ${this.svg_inner['height']}`;
    this.last_sum = 0;
    this.total_memory_bytes = 0;
  }
  

  getMemoryUsageHistory() {
    var selected_machine = this.props.specificMachineIndex;
    var history = this.props.historyData;
    var selectedMachineHistory = [];
    this.total_memory_bytes = 0;

    for (let x = 0; x < history.length - 10; x++) {
        var processes = history[x+10]['machines'][selected_machine]['processes'];
        var memory_usage_sum = 0;
      for (let j = 0; j < processes.length; j++) {
        memory_usage_sum += processes[j]['memory_usage'];
      }
      this.total_memory_bytes = (memory_usage_sum/1000000000).toFixed(1) + 'GB';
      var transformUsageToPercent = parseInt((memory_usage_sum/history[x+10]['machines'][selected_machine]['ram_max_size']) *  100);
      selectedMachineHistory.push(transformUsageToPercent);
    }

    return selectedMachineHistory;
  }

  generate_svg() {
    var selectedMachineHistory = this.getMemoryUsageHistory();
    // console.log(selectedMachineHistory)
    var generated_svg_polyline_points = '';
    var point_x_axis = 0;
    this.last_sum = 100 - parseInt(selectedMachineHistory[selectedMachineHistory.length - 21])

    for (let x = selectedMachineHistory.length - 1; x >= 0; x--) {
      var point_y_axis_selectedMachineHistory = parseInt((selectedMachineHistory[x]/100)*this.svg_inner['height']);
      // console.log(point_y_axis_selectedMachineHistory)
      generated_svg_polyline_points += ` ${point_x_axis},${point_y_axis_selectedMachineHistory} `;
      point_x_axis += parseInt(this.svg_inner['width'] / 19);
    }
    var svg_start = `0,${this.svg_inner['height']}`;
    var svg_end = `${this.svg_inner['width']},${this.svg_inner['height']}`;
    var the_svg = ''
    the_svg = `${svg_start} ${generated_svg_polyline_points} ${svg_end}`;
    return  the_svg;
  }

    render () {
      if (!this.props.specificMachineProcesses) {
        return (
          <span className="ram_graph-container"> 
              TEMP_LAST_GENERATED_SECOND_Memoryusage:
          </span>
        )
      } else {
        return (
          <div className="ram_graph-container"> 
              <p>{this.total_memory_bytes + ' : ' + this.last_sum + '%'}</p>
              <svg viewBox={this.svg_inner_viewbox} className="chart">
              <polyline fill="red" stroke="#0074d9" strokeWidth="2" points={this.generate_svg()}>
                </polyline>
              </svg>
          </div>
        )
      }
    }
}