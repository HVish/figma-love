import faker from 'faker/locale/en';

const categories = [
    'About',
    'Activity Feeds',
    'Ask Permission',
    'Book',
    'Bots/Conversations',
    'Browser',
    'Calculators',
    'Calendars & Time',
    'Capture',
    'Cards',
    'Charts',
    'Check In',
    'Checkout',
    'Coach Marks',
    'Comments',
    'Confirmation',
    'Content Screen',
    'Coverpage',
    'Create Post',
    'Discovery',
    'Drawing',
    'Editing',
    'Empty States',
    'Events',
    'Filter',
    'Find Friends',
    'Friends',
    'Games',
    'iOS / App',
    'UI Kit',
];

export function getRandomCategories(count: number) {
    return Array.from({ length: count }).map(() => faker.random.arrayElement(categories));
}

export default categories;
