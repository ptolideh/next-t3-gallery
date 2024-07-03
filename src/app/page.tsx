import Image from "next/image";
import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/c8d82705-baee-4d8b-ab40-f93337a73a08-9vmive.avif",
  "https://utfs.io/f/6a0bdd85-16ec-4d73-badd-3515d08b4238-ehdy0w.jpg"
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url
})) 

export default async function HomePage() {
  const posts = await db.query.posts.findMany(); 
  

  return (
    <main className="">
      <h3 className="text-xl">posts</h3>
      <div>{posts.map(post => (<span key={post.id}>{post.name}</span>))}</div>
      {/* <code>{JSON.stringify(posts)}</code> */}
      <br/>
      <div className="flex flex-wrap gap-4">
        {
          [...mockImages, ...mockImages, ...mockImages, ...mockImages].map((image, index) => (
            <div key={`${image.id}-${index}`} className="w-48">
              <img src={image.url} alt="image" />
            </div>
          ))
        }
      </div>
      Hello (gallery in progress)
    </main>
  );
}
