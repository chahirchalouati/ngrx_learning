export interface Movie {
  id: string;
  title: string;
  description: string;
  thumbnails: string;
  authors: Array<Author>;
}

export interface Author {
  id: string;
  firstName: string;
  lastName: string;
}
