import React from 'react';
import './App.css';
import Header from './components/HeaderComponent';
import Navigation from './components/NavigationComponent';
import Main from './components/MainComponent';
import SubContents from './components/SubContentsComponent';
import Advertisement from './components/AdvertisementComponent';
 
                
function App() {
  return (
    <div className="app">
      <Header />
      <div className='flex'>
      <Navigation />
        <Main>
        <div className='flex main-gap'>
          <SubContents />
          <SubContents />
          <SubContents />
        </div>
        <Advertisement />
        </Main>
      </div>
    </div>
  );
}
                
export default App;


