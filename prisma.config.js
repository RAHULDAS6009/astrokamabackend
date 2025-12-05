import "dotenv/config";
import { defineConfig, env } from "prisma/config";
export default defineConfig({
    schema: "./prisma/schema.prisma", // path to schema file
    migrations: {
        path: "./prisma/migrations", // path to migrations folder
    },
    datasource: {
        url: env("DATABASE_URL"), // REQUIRED
    },
});
