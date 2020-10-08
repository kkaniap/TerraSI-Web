export interface News{
  id?: number;
  title?: string;
  shortContent: string;
  content: string;
  readTime?: number;
  imgThumbnail?: string;
  imgThumbnailMobile?: string;
  imgNews?: string;
  imgNewsMobile?: string;
  createDate?: Date;
  createUser?: string;
}

export interface NewsResponse{
  _embedded: {
    newsList: News[];
    _links: {self: {href: string}};
    page: {size: string, totalElements: number, totalPages: number, number: number};
  };
}
