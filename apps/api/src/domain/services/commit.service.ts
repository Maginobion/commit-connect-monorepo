import { Injectable } from '@nestjs/common';
import { CommitSearchParams } from 'src/shared/interfaces/commit-search-params.interface';
import { CommitRepository } from 'src/infrastructure/repositories/commit.repository';
import { DetailedCommit } from '../entities/commit.entity';

@Injectable()
export class CommitService {
    constructor(readonly commitRepository: CommitRepository) {}

    async getCommit(params: CommitSearchParams): Promise<DetailedCommit> {
        const results: DetailedCommit = await this.commitRepository.getCommit(params);
        return results;
    }
}
