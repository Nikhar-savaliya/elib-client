import { Book } from "@/types";
import Image from "next/image";
import React from "react";
import { Badge } from "./ui/badge";
import DownloadButton from "./DownloadButton";
import { Skeleton } from "./ui/skeleton";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

const BookDetailCard = async ({ bookId }: { bookId: string }) => {
  const response = await fetch(`${process.env.BACKEND_URL}/books/${bookId}`);
  const bookDetail = await response.json();

  return (
    <section className="flex max-w-7xl mx-auto  h-full w-fit mt-16">
      {/* image */}
      <div>
        <Image
          src={bookDetail.coverImage}
          alt={bookDetail.title}
          width={500}
          height={1000}
          className="p-10"
        />
      </div>
      {/* detail */}
      <div className="py-10 w-full max-w-3xl">
        <h1 className="pb-1 text-4xl font-bold tracking-tighter text-foreground">
          {bookDetail.title}
        </h1>
        <h4 className="pb-6 text-lg font-semibold tracking-tight text-secondary-foreground">
          {bookDetail.author.name}
        </h4>
        <p className="pb-2">{bookDetail.description}</p>
        <Badge className="mb-6" variant={"secondary"}>
          {bookDetail.genre}
        </Badge>
        <DownloadButton bookUrl={bookDetail.file} />
      </div>
    </section>
  );
};

export default BookDetailCard;
