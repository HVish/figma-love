import express from 'express';
import AssetController from './controller';

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const { query = 'recent', page = 1, perPage = 10 } = req.query;
        const assets = await AssetController.getMany(query, parseInt(page), parseInt(perPage));
        res.json(assets);
    } catch (err) {
        next(err);
    }
});

router.get('/:assetSlug', async (req, res, next) => {
    try {
        const slug: string = req.params.assetSlug;
        res.json(await AssetController.get(slug));
    } catch (err) {
        next(err);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const data: Asset = req.body;
        res.json(await AssetController.create(data));
    } catch (err) {
        next(err);
    }
});

router.put('/:assetId', async (req, res, next) => {
    try {
        const assetId: string = req.params.assetId;
        const data: Partial<Asset> = req.body;
        res.json(await AssetController.update(assetId, data));
    } catch (err) {
        next(err);
    }
});

router.put('/:assetId/increase-views', async (req, res, next) => {
    try {
        const assetId: string = req.params.assetId;
        res.json(await AssetController.increaseViewCount(assetId));
    } catch (err) {
        next(err);
    }
});

router.delete('/:assetId', async (req, res, next) => {
    try {
        const assetId: string = req.params.assetId;
        res.json(await AssetController.remove(assetId));
    } catch (err) {
        next(err);
    }
});

export default router;
