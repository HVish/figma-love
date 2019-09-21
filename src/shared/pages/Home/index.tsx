import React from 'react';

import Navbar from 'components/Navbar';
import styles from './Home.module.scss';

const categories = [
    'About',
    'Activity',
    'Feeds',
    'Ask',
    'Permission',
    'Book',
    'Bots/Conversations',
    'Browser',
    'Calculators',
    'Calendars & Time',
    'Capture',
    'Cards',
    'Charts',
    'Check',
    'In',
    'Checkout',
    'Coach',
    'Marks',
    'Comments',
    'Confirmation',
    'Content',
    'Screen',
    'Coverpage',
    'Create',
    'Post',
    'Discovery',
    'Drawing',
    'Editing',
    'Empty',
    'States',
    'Events',
    'Filter',
    'Find',
    'Friends',
    'Friends',
    'Games',
];

const Home = () => {
    return (
        <div className={styles.home}>
            <Navbar options={categories} />
        </div>
    );
};

export default Home;
