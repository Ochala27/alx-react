import './Notifications.css';
import React from 'react';
import closeIcon from './close-icon.png';

function getLatestNotification() {
    return "<strong>Urgent requirement</strong> - complete by EOD";
}

export default function Notifications() {
    return (
        <div className="Notifications" style={{ position: 'relative'}}>
            
            <button style={{ position: 'absolute', top: 0, right: 0 }} aria-label='Close' onClick={() => console.log('Close button has been clicked')}>
                <img src={closeIcon} alt="close icon" width={'8px'}/>
            </button>

            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
            </ul>
        </div>
    );
}
