import React, { Component } from 'react';

export default class CpuGraph extends Component {
  constructor(props) {
    super(props);
    this.svg_inner = {
      width: 950,
      height: 200
    };
    this.svg_inner_viewbox = `0 0 ${this.svg_inner['width']} ${this.svg_inner['height']}`;
    this.last_sum = 0;
  }
  

  getCpuUsageHistory() {
    var selected_machine = this.props.specificMachineIndex;
    var history = this.props.historyData;
    var selectedMachineHistory = [];
    for (let x = 0; x < history.length - 10; x++) {
      // console.log(history[x+10]["timestamp"])
        var processes = history[x+10]['machines'][selected_machine]['processes'];
        var cpu_usage_sum = 0;
      for (let j = 0; j < processes.length; j++) {
        cpu_usage_sum += processes[j]['cpu_usage'];
      }
      selectedMachineHistory.push(cpu_usage_sum);
    }

    return selectedMachineHistory;
  }

  generate_svg() {
    var selectedMachineHistory = this.getCpuUsageHistory();
    var generated_svg_polyline_points = '';
    var point_x_axis = 0;
    // skips several at line 28
    // selectedMachineHistory.length ==== 50
    // then the length-1 == 48
    // you were rendering 10-30 before 
    this.last_sum =  100 - parseInt(selectedMachineHistory[selectedMachineHistory.length - 21])



    for (let x = selectedMachineHistory.length - 1; x >= 0; x--) {
      var point_y_axis_selectedMachineHistory = parseInt((selectedMachineHistory[x]/100)*this.svg_inner['height']);
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
          <span className="my_class"> 
              TEMP_LAST_GENERATED_SECOND_CPUusage:
          </span>
        )
      } else {
        return (
          <span className="my_class"> 
              TEMP_LAST_GENERATED_SECOND_CPUusage: {': ' + this.last_sum + '%'} <br/>
              <svg viewBox={this.svg_inner_viewbox} className="chart">
              <polyline fill="red" stroke="#0074d9" strokeWidth="2" points={this.generate_svg()}>
                </polyline>
              </svg>
              <br/>
              
          </span>
        )
      }
    }
}