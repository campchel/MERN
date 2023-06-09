import React, { useState } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './css/styles.css';

const Tabs = (props) => {
    const [openTab, setOpenTab] = useState(""); 
    const handleTabClick = (index) => {
        console.log(index);
        setOpenTab(contentInfo[index]);
    };

    const contentInfo = [
            "Black dog syndrome, also known as BDS, is a phenomenon in pet adoption in which black dogs are ignored in favor of light-colored ones.",
            "Due to the phenomenon, larger, black dog breeds tend to stay at the shelter significantly longer than smaller, lighter-colored dogs. Many black dogs even get euthanized as a result.",
            "Adopting a black dog is a surefire way for you to help black dogs find forever homes. You can also make a difference by sharing your thoughts on the issue with friends, family, and community members. Encourage them to adopt a black dog or cat and be sure to share photos of adoptable pets on your website or social media channels to give them a boost. Raising awareness makes a surprisingly big impact."
    ];

    return (
        <>

            <nav className="nav-container" >
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button onClick={() => handleTabClick(0)} className="nav-link"type="button" role="tab">What is Black Dog Syndrome?</button>
                    <button onClick={() => handleTabClick(1)} className="nav-link"type="button" role="tab">Impact of BDS</button>
                    <button onClick={() => handleTabClick(2)} className="nav-link" type="button" role="tab">How To Help</button>
                </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">

                <div>{openTab}</div>
            </div>
        </>
    )
};


export default Tabs;