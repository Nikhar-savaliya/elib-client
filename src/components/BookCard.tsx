import { Book } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const BookCard = (book: Book) => {
  return (
    <div className="flex gap-5 border p-5 bg-card text-card-foreground rounded overflow-hidden">
      <Image
        src={book.coverImage}
        className=" w-1/4 object-cover object-center border shadow-sm rounded-md"
        alt={book.title}
        width={900}
        height={1600}
      />
      <div className="relative">
        <h2 className="line-clamp-2 mx-2 text-xl tracking-tight  font-bold text-primary-600 text-balance">
          {book.title}
        </h2>
        <p className="text-secondary-foreground text-sm font-medium mt-1 mx-2 ">
          {book.author.name}
        </p>
        <p className="text-secondary-foreground text-sm mt-2 mx-2 line-clamp-4">
          {book.description}
        </p>
        <Link href={`/book/${book._id}`} className="inline-block bottom-0">
          <Button size={"sm"} variant={"link"} className="mt-4">
            Read more
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
