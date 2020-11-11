import { Request, Response } from 'express'
import { getRepository } from 'typeorm';
import Orphanage from '../models/Orphanage';

export default {
    async create(req: Request, res: Response) {
        const {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
        } = req.body;

        const orphanesRepository = getRepository(Orphanage);
        const orphanage = orphanesRepository.create({
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
        });

        await orphanesRepository.save(orphanage);

        return res.status(201).json(orphanage);
    }
}