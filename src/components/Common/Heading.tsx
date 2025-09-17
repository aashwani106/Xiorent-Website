import React from 'react';
import styles from '../../styles/components/Heading.module.css';

const TeamMember = ({ heading, subHeading }) => {
    return (
        <div className="text-center mb-20 relative">
            {/* COMPANY background word */}
            <h2
                className="pointer-events-none select-none absolute inset-x-0 top-0 text-center font-extrabold opacity-70"
                style={{ fontSize: "4rem", lineHeight: 1 }}
            >  
                <span className="text-purple-900 uppercase">{heading}</span>
            </h2>

            {/* Foreground Directors */}
            <h1
                className="relative inline-block font-bold tracking-wide"
                style={{ fontSize: "3.5rem", marginTop: "1.5rem" }}
            >
                
                <span className="text-white">
                    {subHeading}
                </span>
            </h1>
        </div>
    );
};

export default TeamMember;