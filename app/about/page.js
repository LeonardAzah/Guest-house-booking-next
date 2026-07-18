import Image from "next/image";
import about_1 from "../../public/about-1.jpg";
import { getCabins } from "../_lib/data-service";

export const revalidate = 86400;
const page = async () => {
  const cabins = await getCabins();
  return (
    <div className="grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center">
      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Welcome to Paradis Homes
        </h1>

        <div className="space-y-8">
          <p>
            Where comfort, convenience, and genuine hospitality come together.
            Nestled in a prime location, our guest houses offer a welcoming
            retreat for travelers seeking relaxation, whether you&apos;re
            visiting for business, a family getaway, or a weekend escape. More
            than just a place to stay, we provide an experience that makes you
            feel at home from the moment you arrive.
          </p>
          <p>
            Our beautifully appointed guest rooms combine modern comfort with
            thoughtful amenities to ensure a restful stay. Step outside and
            discover the city&apos;s vibrant culture, local attractions,
            shopping, and dining, or simply unwind in our peaceful surroundings
            after a busy day. Every visit is an opportunity to create lasting
            memories, enjoy exceptional service, and experience the warmth of
            true hospitality. This is your home away from home where every stay
            feels special.
          </p>
        </div>
      </div>

      <div className="col-span-2">
        <Image
          src={about_1}
          alt="Family sitting around a fire pit in front of cabin"
          placeholder="blur"
          quality={80}
        />
      </div>

      <div className="col-span-2 relative aspect-square">
        <Image
          src="/about-2.jpg"
          alt="Family that manages The Wild Oasis"
          fill
          className="object-cover"
        />
      </div>

      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Managed by our family since 1962
        </h1>

        <div className="space-y-8">
          <p>
            Since 1962, Paradis Homes has been a cherished family-run retreat.
            Started by our grandparents, this haven has been nurtured with love
            and care, passing down through our family as a testament to our
            dedication to creating a warm, welcoming environment.
          </p>
          <p>
            Over the years, we&apos;ve maintained the essence of Paradis Homes,
            blending the timeless beauty of the mountains with the personal
            touch only a family business can offer. Here, you&apos;re not just a
            guest; you&apos;re part of our extended family. So join us at The
            Wild Oasis soon, where tradition meets tranquility, and every visit
            is like coming home.
          </p>

          <div>
            <a
              href="/cabins"
              className="inline-block mt-4 bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
            >
              Explore our luxury homes
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
