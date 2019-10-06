interface BaseProps {
    style?: React.CSSProperties;
    className?: string;
}

interface Asset {
    id: string;
    title: string;
    description: string;
    categories: string[];
    image: string;
    slug: string;
    assetURL: string;
    keywords: string[];
}
