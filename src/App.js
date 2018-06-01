import React, { Component } from 'react';
import { Button } from 'primereact/components/button/Button';

import { Growl } from 'primereact/components/growl/Growl';

import './App.css';
import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/primereact.min.css';
import 'font-awesome/css/font-awesome.css';

class App extends Component {

  constructor() {
    super();
    this.state = { count: 0 };
    this.increment = this.increment.bind(this);
    this.showSuccess = this.showSuccess.bind(this);
    this.showInfo = this.showInfo.bind(this);
    this.showWarn = this.showWarn.bind(this);
    this.showError = this.showError.bind(this);
    this.showMultiple = this.showMultiple.bind(this);
    this.showSticky = this.showSticky.bind(this);
    this.showCustom = this.showCustom.bind(this);
    this.clear = this.clear.bind(this);
  }


  showSuccess() {
    this.growl.show({ severity: 'success', summary: 'Success Message', detail: 'Order submitted' });
}

showInfo() {
    this.growl.show({ severity: 'info', summary: 'Info Message', detail: 'PrimeReact rocks' });
}

showWarn() {
    this.growl.show({ severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes' });
}

showError() {
    this.growl.show({ severity: 'error', summary: 'Error Message', detail: 'Validation failed' });
}

showSticky() {
    this.growl.show({ severity: 'info', summary: 'Sticky Message', detail: 'You need to close Me', sticky: true });
}

showCustom() {
    let summary = <span><i className="fa fa-check" /> <strong>PrimeReact</strong></span>;
    let detail = <img alt="PrimeReact" src="showcase/resources/images/primereact-logo.png" width="250px"/> 

    this.growl.show({ severity: 'info', summary: summary, detail: detail, sticky: true });
}

showMultiple() {
    this.growl.show([
        {severity:'info', summary:'Message 1', detail:'PrimeReact rocks'},
        {severity:'info', summary:'Message 2', detail:'PrimeReact rocks'},
        {severity:'info', summary:'Message 3', detail:'PrimeFaces rocks'}
    ]);
}

clear() {
    this.growl.clear();
}

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
                <div className="content-section introduction growl-demo">
                    <div className="feature-intro">
                        <h1>Growl</h1>
                        <p>Growl is used to display messages in an overlay.</p>
                    </div>
                </div>

                <div className="content-section implementation ui-fluid">
                    <Growl ref={(el) => { this.growl = el; }}></Growl>

                    <h3>Severities</h3>
                    <div className="ui-g">
                        <div className="ui-g-12 ui-md-3">
                            <Button onClick={this.showSuccess} label="Success" className="ui-button-success" />
                        </div>
                        <div className="ui-g-12 ui-md-3">
                            <Button onClick={this.showInfo} label="Info" className="ui-button-info" />
                        </div>
                        <div className="ui-g-12 ui-md-3">
                            <Button onClick={this.showWarn} label="Warn" className="ui-button-warning" />
                        </div>
                        <div className="ui-g-12 ui-md-3">
                            <Button onClick={this.showError} label="Error" className="ui-button-danger" />
                        </div>
                    </div>
                    
                    <h3>Options</h3>
                    <div className="ui-g">
                        <div className="ui-g-12 ui-md-4">
                            <Button onClick={this.showMultiple} label="Multiple" className="ui-button-warning" />
                        </div>
                        <div className="ui-g-12 ui-md-4">
                            <Button onClick={this.showSticky} label="Sticky" />
                        </div>
                        <div className="ui-g-12 ui-md-4">
                            <Button onClick={this.showCustom} label="Custom" className="ui-button-success" />
                        </div>
                    </div>
                    
                    <h3>Remove All</h3>
                    <Button onClick={this.clear} label="Clear" style={{width: 'auto', marginLeft: '.5em'}}/>
                </div>
                
            
            </div>

    );
  }
}

export default App;
