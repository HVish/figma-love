import faker from 'faker/locale/en';

import asset1Image from 'shared/assets/mocks/asset-1.png';
import asset2Image from 'shared/assets/mocks/asset-2.png';
import asset3Image from 'shared/assets/mocks/asset-3.png';
import asset4Image from 'shared/assets/mocks/asset-4.png';
import asset5Image from 'shared/assets/mocks/asset-5.png';
import asset6Image from 'shared/assets/mocks/asset-6.png';
import asset7Image from 'shared/assets/mocks/asset-7.png';

import slugify from 'helpers/slugify';
import { getRandomCategories } from './categories';

export const assetImages = [
    asset1Image,
    asset2Image,
    asset3Image,
    asset4Image,
    asset5Image,
    asset6Image,
    asset7Image,
];

export default function getRandomAssets(count: number): Asset[] {
    return Array.from({ length: count }).map(() => {
        const title = faker.company.catchPhrase();
        return {
            id: faker.random.uuid(),
            title,
            description: faker.lorem.paragraphs(),
            image: faker.random.arrayElement(assetImages),
            categories: getRandomCategories(
                faker.random.number({
                    min: 1,
                    max: 3,
                })
            ),
            keywords: faker.random.words(3).split(' '),
            assetURL: faker.internet.url(),
            slug: slugify(title),
            viewCount: faker.random.number({
                min: 560,
                max: 4238,
            }),
            createdAt: faker.date.past().valueOf(),
        };
    });
}
