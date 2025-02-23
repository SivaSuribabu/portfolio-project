import React from 'react';
import Header from './components/Header';
import Summary from './components/Summary';
import DevOpsTools from './components/DevOpsTools';
import CloudTechnologies from './components/CloudTechnologies';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Summary />
        <DevOpsTools />
        <CloudTechnologies />
        <Certifications />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;