export interface Link {
  href: string;
}

export interface UserLinks {
  self: Link;
  avatar: Link;
  html: Link;
}

export interface User {
  display_name: string;
  links: UserLinks;
  type: string;
  uuid: string;
  account_id: string;
  nickname: string;
}

export interface Author {
  type: string;
  raw: string;
  user: User;
}

export interface Summary {
  type: string;
  raw: string;
  markup: string;
  html: string;
}

export interface CommitLinks {
  self: Link;
  html: Link;
  diff: Link;
  approve: Link;
  comments: Link;
  statuses: Link;
  patch: Link;
}

export interface ParentCommitLinks {
  self: Link;
  html: Link;
}

export interface ParentCommit {
  hash: string;
  links: ParentCommitLinks;
  type: string;
}

export interface RenderedMessage {
  type: string;
  raw: string;
  markup: string;
  html: string;
}

export interface Rendered {
  message: RenderedMessage;
}

export interface RepositoryLinks {
  self: Link;
  html: Link;
  avatar: Link;
}

export interface Repository {
  type: string;
  full_name: string;
  links: RepositoryLinks;
  name: string;
  uuid: string;
}

export interface Participant {
  type: string;
  user: User;
  role: string;
  approved: boolean;
  state: string | null;
  participated_on: string;
}

export interface CommitResponse {
  type: string;
  hash: string;
  date: string;
  author: Author;
  message: string;
  summary: Summary;
  links: CommitLinks;
  parents: ParentCommit[];
  rendered: Rendered;
  repository: Repository;
  participants: Participant[];
}
