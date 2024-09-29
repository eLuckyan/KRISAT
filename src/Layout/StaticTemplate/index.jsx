import React, { useEffect, useState } from 'react';
import { Typography, Box } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom'; // Import useParams
import './staticTemplate.scss';
import faci from "../../Assets/Images/img_infra.jpg";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const contentMap = {
    0: 'The infrastructure is constructed in 110 acre landscape with focus on sustainable environment. The area is 360 degree surrounded with elegant hillocks to let students dwell with nature.',
    1: 'Learn more About Us.',
    2: 'Our laboratory are highly equipped with world-class facilities that caters to the technical needs of cultivation.',
    3: 'Get in touch with us!',
};

const StaticTemplate = ({ navItem, subNav, content }) => {
    const { index } = useParams();
    const [activeStep, setActiveStep] = useState(index ? Number(index) : 0);
    const navigate = useNavigate();

    useEffect(() => {
        if (index !== undefined) {
            setActiveStep(Number(index)); // Update active step based on URL index
        }
    }, [index]);

    const handleStepClick = (index) => {
        setActiveStep(index);
        navigate(`/${navItem}/${index}`); // Correctly update the URL with the clicked index
    };

    return (
        <div className='layout'>
            <div className='heading'>
                <h1>{navItem}</h1>
                <div className='content-layout'>
                    <div className='content-layout-left'>
                    <Timeline position="left">
                        {subNav.map((label, i) => (
                            <TimelineItem key={label} onClick={() => handleStepClick(i)} style={{ cursor: 'pointer' }}>
                                <TimelineSeparator>
                                    <TimelineDot style={{ flexShrink: 0 }} color={activeStep === i ? 'success' : 'grey'} />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent style={{ wordBreak: 'break-word', maxWidth: '200px' }}>
                                    {label}
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>

                    </div>
                    <div className='content-layout-right'>
                        {activeStep !== null && (
                            <>
                                <Typography variant="h6" sx={{ color: "#B6753C", fontWeight: "700" }}>{subNav[activeStep]}</Typography>
                                {/* Additional content based on activeStep */}
                                {content}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StaticTemplate;