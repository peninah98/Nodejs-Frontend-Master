import fs from "fs/promises"
import { fileURLToPath } from "url"
import path from "path"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const readJsonFile = async () => {
  const filePath = path.join(__dirname, "package.json")
  console.log(JSON.parse(await fs.readFile(filePath, "utf-8")))
}

readJsonFile()
