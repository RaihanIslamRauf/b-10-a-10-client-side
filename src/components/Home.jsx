import React from 'react';
import Banner from './Banner';
import RunningCampaign from './RunningCampaign';
import HowItWorks from './HowItWorks';
import EfficiencyTransparency from './EfficiencyTransparency';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <RunningCampaign></RunningCampaign>
            <HowItWorks></HowItWorks>
            <EfficiencyTransparency></EfficiencyTransparency>
        </div>
    );
};

export default Home;