import React, { Component } from 'react';

export default class ExeList extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // console.log(this.props.specificMachineBufferData['processes'][0]['process_name'])
    console.log('exe_list "mounted"')
    setTimeout(() => {
      console.log(this.props.specificMachineBufferData['processes'][0]['process_name'])
    }, 3000);
  }


    render () {
      if (!this.props.specificMachineBufferData) {
        return (
          <div className="my_class"> 
            ExeList <br/>
          </div> 
        )
      } else {
        return (
          <div className="my_class"> 
              ExeList <br/>
              {/* {this.props.specificMachineBufferData['machine_name']} */}
              if ()
              {'aici_____ ' + this.props.specificMachineBufferData['processes'][0]['process_name']}



              {this.props.specificMachineBufferData['processes'].map(
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