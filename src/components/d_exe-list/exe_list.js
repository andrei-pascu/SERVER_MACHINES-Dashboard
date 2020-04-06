import React, { Component } from 'react';
import calculate_time from '../../mocked_datacenter/generate_timestamp';

export default class ExeList extends Component {
    constructor(props) {
        super(props);
        this.timer = 20;
        this.blank_data = [];
        this.toggle = 0;
        this.sortBy = null;
        this.dir = 'asc';
    }
    componentDidMount() {
        this.timer -= 1;
        setInterval(() => {
            if (this.timer == 11) {
                this.timer = 20;
            } else {
                this.timer -= 1;
            }
        }, 1000)
        for (let i = 0; i < 20; i++) {
            this.blank_data.push({ 'process_blank': 'UI---UI' })
        }

    }

    selectSorting(column) {
        if ((this.sortBy === column) && (this.dir === 'desc')) {
            this.dir = 'asc';
        } else if (this.sortBy === column) {
            this.dir = 'desc';
        } else if (this.sortBy !== column) {
            this.sortBy = column;
            this.dir = 'asc';
        }
    }
    sortByName(sort_by, dir, processes_arr) {
        if (sort_by === null) {
            return
        }
        var while_switch = true;
        var should_switch = true;
        var counter = 0;
        var i;
        while (while_switch) {
            should_switch = false;
            for (i = 0; i < processes_arr.length-1; i++) {
                should_switch = false;
                if (dir === 'asc') {
                    if(sort_by === 'exe_age') {
                        if (processes_arr[i][sort_by][1] > processes_arr[i+1][sort_by][1]) {
                            should_switch = true
                            break;
                        }
                    } else {
                        if (processes_arr[i][sort_by] > processes_arr[i+1][sort_by]) {
                            should_switch = true
                            break;
                        }
                    }
                } else if (dir === 'desc') {
                    if(sort_by === 'exe_age') {
                        if (processes_arr[i][sort_by][1] < processes_arr[i+1][sort_by][1]) {
                            should_switch = true
                            break;
                        }
                    } else {
                        if (processes_arr[i][sort_by] < processes_arr[i+1][sort_by]) {
                            should_switch = true
                            break;
                        }
                    }
                }
            }

            if (should_switch) {
                var x_11 = processes_arr[i]['process_name'];
                var x_21 = processes_arr[i+1]['process_name'];
                processes_arr[i]['process_name'] = x_21;
                processes_arr[i+1]['process_name'] = x_11;


                var x_12 = processes_arr[i]['display_name'];
                var x_22 = processes_arr[i+1]['display_name'];
                processes_arr[i]['display_name'] = x_22;
                processes_arr[i+1]['display_name'] = x_12;

                var x_13 = processes_arr[i]['exe_age'];
                var x_23 = processes_arr[i+1]['exe_age'];
                processes_arr[i]['exe_age'] = x_23;
                processes_arr[i+1]['exe_age'] = x_13;

                var x_14 = processes_arr[i]['cpu_usage'];
                var x_24 = processes_arr[i+1]['cpu_usage'];
                processes_arr[i]['cpu_usage'] = x_24;
                processes_arr[i+1]['cpu_usage'] = x_14;

                var x_15 = processes_arr[i]['memory_usage'];
                var x_25 = processes_arr[i+1]['memory_usage'];
                processes_arr[i]['memory_usage'] = x_25;
                processes_arr[i+1]['memory_usage'] = x_15;
                while_switch = true;
            }
            counter++
            if (counter > 20) {
                while_switch = false
            }
        }
    }
    render() {
        if (!this.props.specificMachineBufferData) {
            return (
                <div className="exe_list">
                    ExeList <br />
                </div>
            )
        } else {
            var processes_arr = this.props.historyData[this.timer]['machines'][this.props.specificMachineIndex]['processes'];
            if (this.sortBy !== null) {
                this.sortByName(this.sortBy, this.dir, processes_arr)
            }
            return (
                <div className={'processes_container _'+this.sortBy+' '+this.dir}>
                    <h2 className={'processes_title'}>Processes</h2>
                    <div className={'process_row process_titles'}>
                        <p onClick={() => this.selectSorting('display_name')} className={'process_column process_column_display_name'} >
                            App
                        </p>
                        <p onClick={() => this.selectSorting('process_name')} className={'process_column process_column_name'} >
                            Executables
                        </p>
                        <p onClick={() => this.selectSorting('exe_age')} className={'process_column process_column_exe_age'} >
                            Start Time
                        </p>
                        <p onClick={() => this.selectSorting('cpu_usage')} className={'process_column process_column_cpu'} >
                            CPU
                        </p>
                        <p onClick={() => this.selectSorting('memory_usage')} className={'process_column process_column_ram'} >
                            RAM
                        </p>
                    </div>
                    <div className="exe_list">

                        <div className="process_table">
                            {processes_arr.map(
                                (process, index) =>
                                    <div className={'process_row'} key={index}>
                                        <p className={'process_column process_column_display_name'} >
                                            {process['display_name']}
                                        </p>
                                        <p className={'process_column process_column_name'} >
                                            {process['process_name']}
                                        </p>
                                        <p className={'process_column process_column_exe_age'} >
                                            {calculate_time(process['exe_age'][0], process['exe_age'][1])}
                                        </p>
                                        <p className={'process_column process_column_cpu'} >
                                            {process['cpu_usage'] + '%'}
                                        </p>
                                        <p className={'process_column process_column_ram'} >
                                            {(process['memory_usage'] / 1000000).toFixed(1) + ' mb'}
                                        </p>
                                    </div>
                            )}
                            {this.blank_data.map(
                                (process, index) =>
                                    <div className={'process_row'} key={index}>
                                        <p className={'process_column process_column_display_name'} >
                                            {process['process_blank']}
                                        </p>
                                        <p className={'process_column process_column_name'} >
                                            {process['process_blank']}
                                        </p>
                                        <p className={'process_column process_column_exe_age'} >
                                            {process['process_blank']}
                                        </p>
                                        <p className={'process_column process_column_cpu'} >
                                            {'10%'}
                                        </p>
                                        <p className={'process_column process_column_ram'} >
                                            {(process['process_blank'] / 1000000).toFixed(1) + ' mb'}
                                        </p>
                                    </div>
                            )}
                        </div>
                    </div>
                </div>
            )
        }
    }
}