import { Module } from '@nestjs/common';
import { RepoService } from '../services/repo.service';
import { RepoController } from '../../application/controllers/repo.controller';
import { RepoRepository } from '../../infrastructure/repositories/repo.repository';

@Module({
    controllers: [RepoController],
    providers: [RepoService, RepoRepository],
    exports: [RepoService, RepoRepository],
})
export class RepoModule {}
