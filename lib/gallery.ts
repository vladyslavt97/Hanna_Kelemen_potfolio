import path from "path";
import { promises as fs } from "fs";

const GALLERY_ROOT = path.join(process.cwd(), "public", "gallery");
const ALLOWED_EXTENSIONS = new Set([
    ".jpg",
    ".jpeg",
    ".png",
    ".webp",
    ".gif",
]);
const collator = new Intl.Collator(undefined, {
    numeric: true,
    sensitivity: "base",
});

async function listFolder(folder: string) {
    try {
        const directory = path.join(GALLERY_ROOT, folder);
        const entries = await fs.readdir(directory);

        const files = entries
            .filter((file) =>
                ALLOWED_EXTENSIONS.has(path.extname(file).toLowerCase())
            )
            .map((file) => `/gallery/${folder}/${file}`);

        return files.sort((a, b) => collator.compare(a, b));
    } catch (error) {
        console.error("Gallery folder read failed", folder, error);
        return [];
    }
}

export async function getModellingImages() {
    return listFolder("modelling");
}

export async function getFilmImages() {
    return listFolder("films");
}

export async function getTheaterImages() {
    return listFolder("theater");
}
