import React from 'react';
import Header from './Header';
import Section1 from './section1';
import ContactForm from './ContactForm';
import Footer from './Footer';
import SignupForm from './SignupForm';
import AdminNav from './AdminNav';
import SlickDemo from './SlickDemo';


function App() {
  return (
    <div>
      <Header />

      <Section1 />
      <SlickDemo />
      <SignupForm />
      <ContactForm />
      <Footer />

    </div>
  );
}

export default App;
