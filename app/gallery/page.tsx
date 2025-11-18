import GalleryTabs from "@/components/GalleryTabs";
import {
    getFilmImages,
    getModellingImages,
    getTheaterImages,
} from "@/lib/gallery";

export default async function Page() {
    const [modelling, films, theater] = await Promise.all([
        getModellingImages(),
        getFilmImages(),
        getTheaterImages(),
    ]);

    return <GalleryTabs galleries={{ modelling, films, theater }} />;
}
