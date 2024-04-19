import React from "react";
import { Skeleton } from "./ui/skeleton";

const BookDetailCardSkeleton = () => {
  return (
    <section className="grid grid-cols-2 gap-4 max-w-7xl mx-auto h-full w-fit mt-16">
      {/* image */}
      <Skeleton className="h-[650px] w-[500px] p-10" />
      <div>
        <Skeleton className="min-w-full h-8 mb-2" />
        <Skeleton className="min-w-full h-8" />
        <Skeleton className="max-w-xs h-10 mt-4" />
        <Skeleton className="min-w-full h-6 mt-6" />
        <Skeleton className="min-w-full h-6 mt-2" />
        <Skeleton className="min-w-full h-6 mt-2" />
        <Skeleton className="min-w-full h-6 mt-2" />
        <Skeleton className="max-w-xs h-6 mt-6" />
        <Skeleton className="max-w-52 h-8 mt-6" />
      </div>
    </section>
  );
};

export default BookDetailCardSkeleton;
