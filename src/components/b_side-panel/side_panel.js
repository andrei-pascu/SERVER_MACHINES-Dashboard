import React, { Component } from 'react';

export default class SidePanel extends Component {
  constructor(props) {
    super(props);
    this.toggle = 'collapsed';
    this.state = {
      the_machines: []
    }
  }

  passSelectedMachine = (selected) => {
    this.toggleMenu();
    return this.props.sidePanelClickSendsData(selected);
  }
  
  componentWillMount() {
  }
  
  componentDidMount() {
    this.setState({
      the_machines: this.props.bufferData[0]["machines"]
    })
  }

  toggleMenu() {
    if (this.toggle == 'collapsed') {
      this.toggle = 'expanded';
    } else if (this.toggle = 'expanded') {
      this.toggle = 'collapsed';
    }
  }

    render () {
      return (
        <div className={this.toggle + ' side_panel'}> 
            <div onClick={() => this.toggleMenu()} className="side_panel_toggle-container flex-centered">
              <div className="burger-menu-ico flex-centered">
                burger-menu-ico
              </div>
            </div>
            
            <div className={'machines_list'}>
              <h2>
                Machines
              </h2>
              {this.state.the_machines.map(
                (fresh_data, index) => 
                  <p key={index} onClick={() => this.passSelectedMachine(index)}>
                    {fresh_data['machine_name']}
                  </p>
              )}
            </div>
        </div>
      )
    }
}