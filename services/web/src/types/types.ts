export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  users: Array<User>;
  user?: Maybe<User>;
  videos: Array<Video>;
  video?: Maybe<Video>;
};


export type QueryUserArgs = {
  id: Scalars['String'];
};


export type QueryVideoArgs = {
  id: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  username: Scalars['String'];
  videos: Array<Video>;
};

export type Video = {
  __typename?: 'Video';
  id: Scalars['String'];
  title: Scalars['String'];
  tags: Scalars['String'];
  uploader: User;
};

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_Query = { __typename?: 'Query', videos: Array<{ __typename?: 'Video', id: string, title: string, tags: string, uploader: { __typename?: 'User', id: string, username: string } }> };
