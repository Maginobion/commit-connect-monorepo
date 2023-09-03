import { Injectable } from '@nestjs/common';
import client from '../config/octokit.config';
import { DetailedCommit } from 'src/domain/entities/commit.entity';
import { CommitSearchParams } from 'src/shared/interfaces/commit-search-params.interface';

@Injectable()
export class CommitRepository {
    async getCommit({ owner, repo, sha }: CommitSearchParams): Promise<DetailedCommit> {
        const res = await client.request('GET /repos/{owner}/{repo}/commits/{ref}', {
            owner,
            repo,
            ref: sha,
            headers: {
                'X-GitHub-Api-Version': '2022-11-28',
            },
        });

        return res.data;
    }
}
