// To add more photos: drop them in /public and append them to the images array below.
import Image from "next/image";

export default function GalleryShowcase() {
  return (
    <div className="section">
      <div className="surface p-6 sm:p-10">
        <h2 className="h2 text-white mb-6">Gallery</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <Image src="/bmw.PNG" alt="BMW Hail Repair" width={520} height={360} className="rounded-2xl shadow-xl" />
          <Image src="/ferrari.jpg" alt="Ferrari Hail Repair" width={520} height={360} className="rounded-2xl shadow-xl" />
        </div>
      </div>
    </div>
  );
}

