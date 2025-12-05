import { prisma } from "../lib/prisma.js";
export const cmsController = {
    // ------------------------------------
    // GET CMS CONTENT BY SECTION
    // /cms/:section
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
            res.status(500).json({ error: err });
        }
    },
    // ------------------------------------
    // UPDATE OR CREATE CMS SECTION
    // /cms/:section
    // ------------------------------------
    updateContent: async (req, res) => {
        try {
            const section = req.params.section;
            const { content, imageUrl } = req.body;
            // Validate required fields
            if (!section || !content) {
                return res
                    .status(400)
                    .json({ message: "Section and content are required" });
            }
            // Try to find existing section
            const existing = await prisma.cMS.findFirst({ where: { section } });
            let updated;
            if (existing) {
                updated = await prisma.cMS.update({
                    where: { id: existing.id }, // must use unique id
                    data: { content, imageUrl: imageUrl ?? null }, // ensure optional field is null if undefined
                });
            }
            else {
                updated = await prisma.cMS.create({
                    data: { section, content, imageUrl: imageUrl ?? null },
                });
            }
            res.json({
                message: "CMS section updated successfully",
                data: updated,
            });
        }
        catch (err) {
            console.error(err);
            res.status(500).json({ error: "Internal Server Error" });
        }
    },
};
