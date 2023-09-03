import { Controller, Post, Body } from '@nestjs/common';
import { CommitService } from 'src/domain/services/commit.service';
import { CommitSearchParams } from 'src/shared/interfaces/commit-search-params.interface';
import { CommitDTO } from '../dtos/commit.dto';

@Controller('commit')
export class CommitController {
    constructor(private commitService: CommitService) {}

    @Post()
    async getRepoCommits(@Body() params: CommitSearchParams): Promise<CommitDTO> {
        const commit = await this.commitService.getCommit(params);
        const dtos: CommitDTO = new CommitDTO(commit);

        return dtos;
    }
}
