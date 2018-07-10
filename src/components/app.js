import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div className="main-content">
        <div className="header">
          <h1>EL header</h1>
        </div>
        <div className="content-body">        
            {this.props.children}  
        </div>
        <div className="footer">
          <h1>el footer</h1>
        </div>
      </div>
    )
  }
}
