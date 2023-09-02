import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { RepoModule } from 'src/domain/modules/repo.module';

@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '../../', 'client/dist'),
        }),
        RepoModule,
    ],
})
export class AppModule {}
