export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  language: string;
  stargazers_count: number;
  owner: {
    avatar_url: string;
    login: string;
    html_url: string;
  };
}

export interface GitHubApiResponse {
  items: GitHubRepo[];
}
