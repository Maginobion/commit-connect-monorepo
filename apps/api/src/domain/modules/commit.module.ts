import { Module } from '@nestjs/common';
import { CommitController } from 'src/application/controllers/commit.controller';
import { CommitService } from '../services/commit.service';
import { CommitRepository } from 'src/infrastructure/repositories/commit.repository';

@Module({
    controllers: [CommitController],
    providers: [CommitService, CommitRepository],
    exports: [CommitService, CommitRepository],
})
export class CommitModule {}
