import { prisma } from "./lib/prisma";

async function main() {
  console.log("🌱 Starting seed...");

  // -------------------------
  // 1. ADMIN
  // -------------------------
  const admin = await prisma.admin.create({
    data: {
      email: "admin@example.com",
      password: "admin123",
      name: "Super Admin",
    },
  });

  console.log("✔ Admin created");
}

main()
  .catch((e) => {
    console.error("❌ Seed failed", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
