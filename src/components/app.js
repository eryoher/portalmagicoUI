import React, { Component } from 'react'
import Header from './common/header';
import Footer from './common/footer';

export default class App extends Component {
  render() {
    return (
      <div className="main-content">
        <Header />        
        <div className="content-body">        
            {this.props.children}  
        </div>
        <div className="footer">
         <Footer />
        </div>
      </div>
    )
  }
}
