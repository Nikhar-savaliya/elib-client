import BookDetailCard from "@/components/BookDetailCard";
import BookDetailCardSkeleton from "@/components/BookDetailCardSkeleton";
import { Suspense } from "react";

const BookDetailPage = ({ params }: { params: { bookId: string } }) => {
  const bookId = params.bookId;

  //   console.log(bookDetail);

  return (
    <Suspense fallback={<BookDetailCardSkeleton />}>
      <BookDetailCard bookId={bookId} />
    </Suspense>
  );
};

export default BookDetailPage;
