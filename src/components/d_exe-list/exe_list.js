import React, { Component } from 'react';

export default class ExeList extends Component {
  constructor(props) {
    super(props);
    this.timer = 0;
  }
  componentDidMount() {
    setInterval(() => {
      if (this.timer == 30) {
        this.timer = 0;
      } else {
        this.timer += 1;
      }
    }, 1000)
  }


    render () {
      if (!this.props.specificMachineBufferData) {
        return (
          <div className="exe_list"> 
            ExeList <br/>
          </div> 
        )
      } else {
        var processes_arr = this.props.historyData[this.timer]['machines'][this.props.specificMachineIndex]['processes'];
        return (
          <div className="exe_list"> 
              <h2 className={'processes_title'}>Processes</h2>
              <div className="process_table">
                  <div className={'process_row'}>
                    <p className={'process_column'} >
                      App
                    </p>
                    <p className={'process_column'} >
                      Executables
                    </p>
                    <p className={'process_column'} >
                      Start Time
                    </p>
                    <p className={'process_column process_column_cpu'} >
                      CPU
                    </p>
                    <p className={'process_column process_column_ram'} >
                      RAM
                    </p>
                  </div>
                  {processes_arr.map(
                    (process, index) => 
                      <div className={'process_row'} key={index}>
                        <p className={'process_column'} >
                          {process['display_name']}
                        </p>
                        <p className={'process_column'} >
                          {process['process_name']}
                        </p>
                        <p className={'process_column'} >
                          {process['exe_age']}
                        </p>
                        <p className={'process_column process_column_cpu'} >
                          {process['cpu_usage']+'%'}
                        </p>
                        <p className={'process_column process_column_ram'} >
                          {(process['memory_usage']/1000000).toFixed(1) + ' mb'}
                        </p>
                      </div>
                  )}
              </div>
          </div>
        )
      }
    }
}