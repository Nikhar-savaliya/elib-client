export type Book = {
  _id: string;
  title: string;
  genre: string;
  description: string;
  coverImage: string;
  file: string;
  author: Author;
};

export type Author = {
  name: string;
};
