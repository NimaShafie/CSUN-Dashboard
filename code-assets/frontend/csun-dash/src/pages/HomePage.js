import Header from '../components/Header'
import LandingPageSection from '../components/LandingPageSection';
import React from 'react';

function HomePage() {


    return (
        <div style={{ backgroundColor: "#1C1C1C", height: '100vh' }}>
            <Header></Header>
            <LandingPageSection></LandingPageSection>
        </div>
    )
}

export default HomePage;