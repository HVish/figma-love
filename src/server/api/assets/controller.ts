import Asset from './model';

export default class AssetController {
    static async getMany(query: 'recent' | 'popular' = 'recent', page = 1, perPage = 10) {
        page = Math.max(0, page - 1); // ensure page is not negative and normalize to 0 based index

        if (query === 'recent') {
            const [total, result] = await Promise.all([
                Asset.countDocuments({}),
                Asset.find()
                    .skip(page * perPage)
                    .sort({ createdAt: -1 })
                    .limit(perPage),
            ]);
            return { total, result };
        }

        // else consider query === 'popular'
        const totalAssets = await Asset.countDocuments({});
        const total = Math.ceil(0.1 * totalAssets); // top 10%
        const skip = page * perPage;

        if (skip > total) {
            // skipped top 10% of assets
            return { total, result: [] };
        }

        const result = await Asset.find()
            .skip(skip)
            .sort({ viewCount: -1 })
            .limit(Math.min(perPage, total - skip));

        return { total, result };
    }

    static create(data: Asset) {
        data.createdAt = Date.now();
        const asset = new Asset(data);
        return asset.save();
    }

    static get(slug: string) {
        return Asset.findOne({ slug });
    }

    static increaseViewCount(assetId: string) {
        return Asset.findByIdAndUpdate(assetId, { $inc: { viewCount: 1 } }, { new: true });
    }

    static update(assetId: string, data: Partial<Asset>) {
        return Asset.findByIdAndUpdate(assetId, data, { new: true });
    }

    static remove(assetId: string) {
        return Asset.findByIdAndRemove(assetId);
    }
}
