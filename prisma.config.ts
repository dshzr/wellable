import { config } from "dotenv";
import { defineConfig, env } from "prisma/config";
import { resolve } from "path";

// Carrega as variáveis de ambiente do arquivo .env explicitamente
// usando o caminho absoluto para garantir que seja encontrado
config({ path: resolve(process.cwd(), ".env") });

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: env("DATABASE_URL"),
  },
});
