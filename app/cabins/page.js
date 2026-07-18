import { Suspense } from "react";
import CabinList from "../_components/CabinList";
import Spinner from "../_components/Spinner";
import Filter from "../_components/Filter";
import ReservationReminder from "../_components/ReservationReminder";

// export const revalidate = 3600;

export const metadata = {
  title: "Cabins",
};

const page = ({ searchParams }) => {
  const filter = searchParams?.capacity ?? "all";
  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Guest Houses
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Experience the perfect blend of comfort, elegance, and exceptional
        hospitality at our guest houses. Whether you&apos;re visiting for
        business or leisure, enjoy thoughtfully designed rooms, modern
        amenities, and a welcoming atmosphere that makes every stay memorable.
        Conveniently located near the city&apos;s top attractions, restaurants,
        and business districts, our guest houses provide a peaceful retreat
        after a busy day. Relax, unwind, and feel at home while enjoying
        personalized service and a stay you&apos;ll always remember. Welcome to
        Paradise Homes.
      </p>
      <div className="flex justify-end mb-8">
        <Filter />
      </div>
      <Suspense fallback={<Spinner />} key={filter}>
        <CabinList filter={filter} />
        <ReservationReminder />
      </Suspense>
    </div>
  );
};

export default page;
