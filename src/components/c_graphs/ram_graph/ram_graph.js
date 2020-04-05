import React, { Component } from 'react';

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
            var processes = history[x + 10]['machines'][selected_machine]['processes'];
            var memory_usage_sum = 0;
            for (let j = 0; j < processes.length; j++) {
                memory_usage_sum += processes[j]['memory_usage'];
            }
            var transformUsageToPercent = parseInt((memory_usage_sum / history[x + 10]['machines'][selected_machine]['ram_max_size']) * 100);
            selectedMachineHistory.push(transformUsageToPercent);
        }
        return selectedMachineHistory;
    }

    generate_svg() {
        var selectedMachineHistory = this.getMemoryUsageHistory();
        var generated_svg_polyline_points = '';
        var point_x_axis = 0;


        var graph_new_entry = selectedMachineHistory.length - 21;

        // console.log('__Seconds BUFFERED IN SVG:',  graph_new_entry)
        console.log('__Seconds BUFFERED IN SVG: ' + (graph_new_entry+1) + ' 🔂_RENDER: ' +  this.props.historyData[(graph_new_entry)]['timestamp'])


        this.last_sum = parseInt(selectedMachineHistory[graph_new_entry]);
        var selected_machine_gb = (this.props.historyData[graph_new_entry]['machines'][this.props.specificMachineIndex]['ram_max_size'] / 1000000000)
        this.total_memory_bytes = ((this.last_sum * selected_machine_gb) / 100).toFixed(1);

        for (let x = selectedMachineHistory.length - 1; x >= 0; x--) {
            var point_y_axis_selectedMachineHistory = parseInt(this.svg_inner['height'] - (selectedMachineHistory[x] / 100) * this.svg_inner['height']);

            generated_svg_polyline_points += ` ${point_x_axis},${point_y_axis_selectedMachineHistory} `;
            point_x_axis += parseInt(this.svg_inner['width'] / 19);
        }
        var svg_start = `0,${this.svg_inner['height']}`;
        var svg_end = `${this.svg_inner['width']},${this.svg_inner['height']}`;
        var the_svg = ''
        the_svg = `${svg_start} ${generated_svg_polyline_points} ${svg_end}`;
        return the_svg;
    }

    render() {
        if (!this.props.specificMachineProcesses) {
            return (
                <span className="ram_graph-container">
                </span>
            )
        } else {
            return (
                <div className="ram_graph-container">
                    <p>{this.total_memory_bytes + 'GB : ' + this.last_sum + '%'}</p>
                    <svg viewBox={this.svg_inner_viewbox} className="ram_chart">
                        <polyline points={this.generate_svg()}>
                        </polyline>
                    </svg>
                </div>
            )
        }
    }
}