import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { CommitModule } from 'src/domain/modules/commit.module';
import { RepoModule } from 'src/domain/modules/repo.module';

@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '../../../../', 'client/dist'),
        }),
        RepoModule,
        CommitModule,
    ],
})
export class AppModule {}
