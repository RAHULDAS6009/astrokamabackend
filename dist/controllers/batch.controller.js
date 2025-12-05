import { prisma } from "../lib/prisma.js";
export const batchController = {
    createBatch: async (req, res) => {
        const batch = await prisma.batch.create({ data: req.body });
        res.json(batch);
    },
    getBatches: async (req, res) => {
        const batches = await prisma.batch.findMany({
            include: { students: true },
        });
        res.json(batches);
    },
    updateBatch: async (req, res) => {
        const batch = await prisma.batch.update({
            where: { id: Number(req.params.id) },
            data: req.body,
        });
        res.json(batch);
    },
};
