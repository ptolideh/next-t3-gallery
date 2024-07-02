import Image from "next/image";
import Link from "next/link";


const mockUrls = [
  "https://utfs.io/f/c8d82705-baee-4d8b-ab40-f93337a73a08-9vmive.avif",
  "https://utfs.io/f/6a0bdd85-16ec-4d73-badd-3515d08b4238-ehdy0w.jpg"
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url
}))

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {
          [...mockImages, ...mockImages, ...mockImages, ...mockImages].map(image => (
            <div key={image.id} className="w-48">
              <img src={image.url} alt="image" />
            </div>
          ))
        }
      </div>
      Hello (gallery in progress)
    </main>
  );
}
