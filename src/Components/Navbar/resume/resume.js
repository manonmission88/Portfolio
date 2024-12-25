import React from 'react';
import myResume from './updated_niure_manish_resume_swe.pdf';
import './resume.css'
import transition from '../../../transition';

function Resume() {
    return (
        <div className='resumebox'>
            <embed  src={myResume} type="application/pdf" width="100%" height="900px" />
        </div>
    );
}

export default transition(Resume);
