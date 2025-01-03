import React from 'react';
import Banner from './Banner';
import RunningCampaign from './RunningCampaign';
import HowItWorks from './HowItWorks';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <RunningCampaign></RunningCampaign>
            <HowItWorks></HowItWorks>
        </div>
    );
};

export default Home;