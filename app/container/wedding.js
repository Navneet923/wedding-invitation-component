import React from 'react';

import Header from '../components/dump/header';
import BorderDesign from '../components/dump/border-design';
import NameSection from '../components/dump/name-section';
import Footer from '../components/dump/footer';

import '../styles/style.scss';

class Wedding extends React.Component {
  render() {
    return (
      <main className="wrapper">
        <Header />
        <BorderDesign />
        <NameSection />
        <Footer />
      </main>
    )
  }
}
export default Wedding;
