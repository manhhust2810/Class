import React, { Component } from 'react';
import Footer from './Footer';
import styled from 'styled-components';
class Home extends Component {
  handle = () => {
    console.log('log');
  };

  render() {
    return (
      <div>
        <h1 className="text" onClick={this.handle}>
          This is Home Page
        </h1>
        <FooterStyle>
          <Footer />
        </FooterStyle>
      </div>
    );
  }
}

const FooterStyle = styled.div`
   position: fixed;
   bottom: 0;
   width: 100%;
   height: 60px;   /* Height of the footer */
   background: #1F568B;
   text-align: center;
   padding: 10px;
   color: white;
`;

export default Home;
