import { getImages } from "~/server/queries";

export async function Images() {
  const images = await getImages();

  return (
    <div className="flex flex-wrap gap-4">
      Hello (gallery in progress)
      {[...images, ...images, ...images, ...images].map((image, index) => (
        <div key={`${image.id}-${index}`} className="w-48">
          <img src={image.url} alt="image" />
        </div>
      ))}
    </div>
  );
}
