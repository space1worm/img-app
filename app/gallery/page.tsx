import CldImage from "@/components/cloudinary/cloudinary-image";
import ImageUploader from "@/components/cloudinary/cloudinary-image-uploader";
import cloudinary from "cloudinary";

type SearchResult = {
  public_id: string;
};

export default async function Gallery() {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("created_at", "desc")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };

  return (
    <div className="py-8 px-6 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl">Gallery</h1>
        <ImageUploader />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {results?.resources?.map(({ public_id }) => (
          <CldImage key={public_id} src={public_id} />
        ))}
      </div>
    </div>
  );
}
