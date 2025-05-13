import React from 'react';
import Banner from './Banner';
import RunningCampaign from './RunningCampaign';
import HowItWorks from './HowItWorks';
import EfficiencyTransparency from './EfficiencyTransparency';

const Home = () => {
    return (
        <div className="w-full mx-auto bg-base-200 px-4 md:px-8">
            <Banner />
            <RunningCampaign />
            <HowItWorks />
            <EfficiencyTransparency />
        </div>
    );
};

export default Home;
