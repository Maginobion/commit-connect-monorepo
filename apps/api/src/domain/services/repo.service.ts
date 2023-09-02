import { Injectable } from '@nestjs/common';
import { RepoRepository } from '../../infrastructure/repositories/repo.repository';
import { Repo } from '../entities/repo.entity';
import { RepositorySearchParams } from 'src/shared/interfaces/repository-search-params.interface';

@Injectable()
export class RepoService {
    constructor(readonly repoRepository: RepoRepository) {}

    async getRepoCommits(params: RepositorySearchParams): Promise<Repo> {
        const results: Repo = await this.repoRepository.getRepositoryCommits(params);
        return results;
    }
}
