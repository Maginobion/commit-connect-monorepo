import { AdaptedSingleCommit, SingleCommitAdapter } from '@/adapters/single-commit.adapter';
import { GITHUB_REPO_NAME, GITHUB_REPO_OWNER } from '@/config/app';
import { SingleCommit } from '@/models/single-commit.model';

const CommitService = {
    async getCommitInfo(sha: string): Promise<AdaptedSingleCommit> {
        const body = {
            owner: GITHUB_REPO_OWNER,
            repo: GITHUB_REPO_NAME,
            sha,
        };
        const res = await fetch('api/commit', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data: SingleCommit) => SingleCommitAdapter(data));

        return res;
    },
};

export default CommitService;
