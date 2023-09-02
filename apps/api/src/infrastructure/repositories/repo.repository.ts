import { Injectable } from '@nestjs/common';
import client from '../config/octokit.config';
import { Repo } from 'src/domain/entities/repo.entity';
import { RepositorySearchParams } from 'src/shared/interfaces/repository-search-params.interface';

@Injectable()
export class RepoRepository {
    async getRepositoryCommits({ owner, repo }: RepositorySearchParams): Promise<Repo> {
        const res = await client.request('GET /repos/{owner}/{repo}/commits', {
            owner,
            repo,
            headers: {
                'X-GitHub-Api-Version': '2022-11-28',
            },
        });

        return res.data;
    }
}
