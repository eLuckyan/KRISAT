import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Typography, Box } from '@mui/material';
import './staticTemplate.scss';
import { Circle } from '@mui/icons-material';
import faci from "../../Assets/Images/img_infra.jpg"

const steps = ['College View', 'Infrastructure', 'Laboratory', 'Observatory', 'MI room', "Smart Class", "Exam Hall", "Cafeteria", "Gym", "Mess"];

const contentMap = {
    0: 'Welcome to the Home Page!',
    1: 'Learn more About Us.',
    2: 'These are our Services.',
    3: 'Get in touch with us!',
  };

const StaticTemplate = () => {
    const [activeStep, setActiveStep] = useState(0); // Start with no active step

    const handleStepClick = (index) => {
        setActiveStep(index);
    };

  return (
    <div className='layout'>
        <div className='heading'>
            <h1>Facilities</h1>
            <div className='content-layout'>
                <div className='content-layout-left'>
                    <Stepper activeStep={activeStep} orientation="vertical" className='layout-stepper'>
                        {steps.map((label, index) => (
                            <Step key={label} onClick={() => handleStepClick(index)} style={{ cursor: 'pointer' }}>
                            <StepLabel
                                sx={{
                                color: activeStep === index ? 'green' : 'rgba(0, 0, 0, 0.1)', // Active step green, inactive steps faded
                                fontWeight: activeStep === index ? 'bold' : 'normal',
                                opacity: activeStep !== index ? 0.5 : 1, // Fade inactive steps
                                }}
                                StepIconComponent={()=><Circle fontSize='small' />}
                            >
                                {label}
                            </StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </div>
                <div className='content-layout-right'>
                    {activeStep !== null && (
                        <>
                        <Typography variant="h6" sx={{color:"#B6753C", fontWeight:"700"}}>{steps[activeStep]}</Typography>
                        <Box sx={{display:"flex"}}>
                            <img src={faci} width="20%" style={{padding:"1%"}} />
                            <img src={faci} width="20%" style={{padding:"1%"}} />
                            <img src={faci} width="20%" style={{padding:"1%"}} />
                            <img src={faci} width="20%" style={{padding:"1%"}} />
                        </Box>
                        <p style={{color:"black", width:"90%", padding:"1%", fontWeight:"400", fontSize:"15px", lineHeight:"22px"}}>
                        The infrastructure is constructed in 110 acre landscape with focus on sustainable environment. The area is 360 degree surrounded with elegant hillocks to let students dwell with nature.
                        </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default StaticTemplate