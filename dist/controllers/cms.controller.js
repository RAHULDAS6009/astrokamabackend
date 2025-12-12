import { prisma } from "../lib/prisma.js";
export const cmsController = {
    // ------------------------------------
    // GET CMS CONTENT BY SECTION
    // GET /cms/:section
    // ------------------------------------
    getContent: async (req, res) => {
        try {
            const section = req.params.section;
            const content = await prisma.cMS.findFirst({
                where: { section },
            });
            if (!content) {
                return res.status(404).json({ message: "Section not found" });
            }
            res.json(content);
        }
        catch (err) {
            console.error(err);
            res.status(500).json({ error: "Internal Server Error" });
        }
    },
    // ------------------------------------
    // CREATE CMS CONTENT
    // POST /cms
    // ------------------------------------
    createContent: async (req, res) => {
        try {
            const { section, content, imageUrl } = req.body;
            if (!section || !content) {
                return res
                    .status(400)
                    .json({ message: "Section and content are required" });
            }
            // Prevent duplicating a section
            const exists = await prisma.cMS.findFirst({ where: { section } });
            if (exists) {
                return res.status(400).json({
                    message: "Section already exists, use update API instead",
                });
            }
            const created = await prisma.cMS.create({
                data: { section, content, imageUrl: imageUrl ?? null },
            });
            res.status(201).json({
                message: "CMS section created successfully",
                data: created,
            });
        }
        catch (err) {
            console.error(err);
            res.status(500).json({ error: "Internal Server Error" });
        }
    },
    // ------------------------------------
    // UPDATE OR CREATE CMS SECTION
    // PUT /cms/:section
    // ------------------------------------
    updateContent: async (req, res) => {
        try {
            const section = req.params.section;
            const { content, imageUrl } = req.body;
            if (!section || !content) {
                return res
                    .status(400)
                    .json({ message: "Section and content are required" });
            }
            const existing = await prisma.cMS.findFirst({ where: { section } });
            let updated;
            if (existing) {
                updated = await prisma.cMS.update({
                    where: { id: existing.id },
                    data: { content, imageUrl: imageUrl ?? null },
                });
            }
            else {
                updated = await prisma.cMS.create({
                    data: { section, content, imageUrl: imageUrl ?? null },
                });
            }
            res.json({
                message: "CMS section saved successfully",
                data: updated,
            });
        }
        catch (err) {
            console.error(err);
            res.status(500).json({ error: "Internal Server Error" });
        }
    },
    // ------------------------------------
    // DELETE CMS CONTENT
    // DELETE /cms/:section
    // ------------------------------------
    deleteContent: async (req, res) => {
        try {
            const section = req.params.section;
            const existing = await prisma.cMS.findFirst({ where: { section } });
            if (!existing) {
                return res.status(404).json({ message: "Section not found" });
            }
            await prisma.cMS.delete({
                where: { id: existing.id },
            });
            res.json({ message: "CMS section deleted successfully" });
        }
        catch (err) {
            console.error(err);
            res.status(500).json({ error: "Internal Server Error" });
        }
    },
};
