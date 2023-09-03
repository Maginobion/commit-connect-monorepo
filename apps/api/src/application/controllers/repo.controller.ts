import { Controller, Post, Body } from '@nestjs/common';
import { RepoService } from '../../domain/services/repo.service';
import { RepositorySearchParams } from 'src/shared/interfaces/repository-search-params.interface';
import { RepoDTO } from '../dtos/repo.dto';

@Controller('repo')
export class RepoController {
    constructor(private repoService: RepoService) {}

    @Post()
    async getRepoCommits(@Body() params: RepositorySearchParams): Promise<RepoDTO[]> {
        const repoCommits = await this.repoService.getRepoCommits(params);
        const dtos: RepoDTO[] = repoCommits.map((commit) => new RepoDTO(commit));

        return dtos;
    }
}
