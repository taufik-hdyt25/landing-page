export interface IComments {
  id: number;
  commentBy: string;
  content: string;
  attendance: string;
  createdAt: string;
  replies: any[];
}

export interface ICreateComment {
  commentBy: string;
  content: string;
  attendance: string;
}

export interface IPagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  count: number;
}
