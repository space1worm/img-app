import CldImage from "@/components/cloudinary/cloudinary-image";
import ImageUploader from "@/components/cloudinary/cloudinary-image-uploader";

import cloudinary from "cloudinary";

export type SearchResult = {
  public_id: string;
  tags: string[];
};

export default async function Gallery() {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(5)
    .execute()) as { resources: SearchResult[] };

  return (
    <div className="py-8 px-6 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl">Gallery</h1>
        <ImageUploader />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {results.resources.map(({ public_id, tags }) => (
          <CldImage key={public_id} src={public_id} tags={tags} />
        ))}
      </div>
    </div>
  );
}
