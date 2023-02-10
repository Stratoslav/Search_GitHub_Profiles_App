export interface LocalGitHubUser {
  login: string;

  avatar: string;

  name: string;
  company: string | null;
  blog: string;
  location: string;
  bio: string;
  repos: number;
  followers: number;
  following: number;
  created: string;
  twitter: string;
}

export interface GitHubUser {
  login: string;
  id: number;
  avatar_url: string;

  name: string;
  company: string | null;
  blog: string;
  location: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  twitter_username: string;
}

export type GitHubError = {
  message: string;
  documentation_url: string;
};
