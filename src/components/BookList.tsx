import React from "react";
import BookCard from "./BookCard";
import { Book } from "@/types";

type Props = {};

const BookList = async (props: Props) => {
  const response = await fetch(`${process.env.BACKEND_URL}/books`, {
    cache: "no-store",
  });
  const books = await response.json();
  // console.log(books);
  return (
    <section className=" max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
      {books.map((bk: Book) => (
        <BookCard
          _id={bk._id}
          author={bk.author}
          title={bk.title}
          coverImage={bk.coverImage}
          file={bk.file}
          genre={bk.genre}
          description={bk.description}
        />
      ))}
    </section>
  );
};

export default BookList;
