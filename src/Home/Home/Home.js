import React from 'react';
import Bannar from '../Bannar/Bannar';
import InfoCard from '../InfoCard/InfoCard';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <InfoCard></InfoCard>
            <Services></Services>
        </div>
    );
};

export default Home;