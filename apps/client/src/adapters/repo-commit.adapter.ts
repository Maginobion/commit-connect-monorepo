import { RepoCommit } from '../models/repo-commit.model';

export interface AdaptedRepoCommit {
    sha: string;
    date: string;
    authorName: string;
    authorImage: string;
    message: string;
}

export const RepoCommitAdapter = (repo: RepoCommit): AdaptedRepoCommit => {
    return {
        sha: repo.sha,
        date: repo.date,
        authorName: repo.authorName,
        authorImage: repo.authorImg,
        message: repo.message,
    };
};
