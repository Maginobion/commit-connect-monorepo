import { CommitFile, SingleCommit } from '@/models/single-commit.model';

export interface AdaptedSingleCommit {
    sha: string;
    files: CommitFile[];
}

export const SingleCommitAdapter = (repo: SingleCommit): AdaptedSingleCommit => {
    return {
        sha: repo.sha,
        files: repo.files,
    };
};
