import { GITHUB_REPO_OWNER, GITHUB_REPO_NAME } from '@/config/app';
import { AdaptedRepoCommit, RepoCommitAdapter } from '../adapters/repo-commit.adapter';
import { RepoCommit } from '../models/repo-commit.model';

const RepoService = {
    async getCurrentRepoCommits(): Promise<AdaptedRepoCommit[]> {
        const body = {
            owner: GITHUB_REPO_OWNER,
            repo: GITHUB_REPO_NAME,
        };
        const data = await fetch('/api/repo', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((res: RepoCommit[]) => res.map((elem) => RepoCommitAdapter(elem)));

        return data;
    },
};

export default RepoService;
