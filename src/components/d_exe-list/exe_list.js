import React, { Component } from 'react';

export default class ExeList extends Component {
    constructor(props) {
        super(props);
        this.timer = 0;
        this.blank_data = [];
    }
    componentDidMount() {
        setInterval(() => {
            if (this.timer == 30) {
                this.timer = 0;
            } else {
                this.timer += 1;
            }
        }, 1000)
        for (let i = 0; i < 15; i++) {
            this.blank_data.push({ 'process_blank': '_FOR_UI' })
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
            return (
                <div className='processes_container'>
                    <h2 className={'processes_title'}>Processes</h2>
                    <div className={'process_row process_titles'}>
                        <p className={'process_column process_column_display_name'} >
                            App
                        </p>
                        <p className={'process_column process_column_name'} >
                            Executables
                        </p>
                        <p className={'process_column process_column_exe_age'} >
                            Start Time
                        </p>
                        <p className={'process_column process_column_cpu'} >
                            CPU
                        </p>
                        <p className={'process_column process_column_ram'} >
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
                                            {process['exe_age']}
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