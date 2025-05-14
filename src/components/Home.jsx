import React from 'react';
import Banner from './Banner';
import RunningCampaign from './RunningCampaign';
import HowItWorks from './HowItWorks';
import EfficiencyTransparency from './EfficiencyTransparency';
import UseTitle from '../hooks/UseTitle';

const Home = () => {
    UseTitle();
    return (
        <div className="w-full mx-auto bg-[#E2DFD2] dark:bg-gray-800 px-4 md:px-8">
            <Banner />
            <RunningCampaign />
            <HowItWorks />
            <EfficiencyTransparency />
        </div>
    );
};

export default Home;
