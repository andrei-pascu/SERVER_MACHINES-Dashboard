import React, { Component } from 'react';

export default class ExeList extends Component {
  constructor(props) {
    super(props);
    this.timer = 0;
  }
  componentDidMount() {
    // console.log(this.props.specificMachineBufferData['processes'][0]['process_name'])
    // console.log('exe_list "mounted"')
    // setTimeout(() => {
    //   console.log(this.props.specificMachineBufferData['processes'][0]['process_name'])
    // }, 3000);
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
          <div className="my_class"> 
            ExeList <br/>
          </div> 
        )
      } else {
        var processes_arr = this.props.historyData[this.timer]['machines'][this.props.specificMachineIndex]['processes'];
        return (
          <div className="my_class"> 
              ExeList <br/>
              {/* {this.props.specificMachineBufferData['machine_name']} */}
              {/* {
                console.log('aaa', this.props.specificMachineIndex)
              }
              {
                console.log(this.props.historyData[this.timer])
              }
              {'aici_____ ' + this.props.specificMachineBufferData['processes'][0]['process_name']}

              {this.props.historyData[this.timer]['machines'][this.props.specificMachineIndex]['processes'][0]['cpu_usage']} */}

              {processes_arr.map(
                (process, index) => 
                  <div key={index}>
                    <span>
                      {process['process_name'] + '_______'}
                    </span>
                    <span>
                      {process['display_name'] + '_______'}
                    </span>
                    <span>
                      {process['exe_age'] + '_______'}
                    </span>
                    <span>
                      {process['cpu_usage'] + '_______'}
                    </span>
                    <span>
                      {process['memory_usage']/1000000 + ' mb'}
                    </span>
                  </div>
              )}
          </div>
        )
      }
    }
}