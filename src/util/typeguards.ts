import { GitHubUser } from "types";

export const IsGitHubUser = (user: any): user is GitHubUser => "id" in user;
