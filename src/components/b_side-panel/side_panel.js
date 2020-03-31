import React, { Component } from 'react';

export default class SidePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      the_machines: []
    }
  }

  passSelectedMachine = (selected) => {
    this.props.sidePanelClickSendsData(selected)
  }
  
  componentWillMount() {
  }
  
  componentDidMount() {
    this.setState({
      the_machines: this.props.bufferData[0]["machines"]
    })
  }

    render () {
      return (
        <div className="my_class"> 
            {this.state.the_machines.map(
              (fresh_data, index) => 
                <p key={index} onClick={() => this.passSelectedMachine(index)}>
                  {fresh_data['machine_name']}
                </p>
            )}
        </div>
      )
    }
}