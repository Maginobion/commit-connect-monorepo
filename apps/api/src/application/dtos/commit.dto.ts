import { CommitFile, DetailedCommit } from 'src/domain/entities/commit.entity';

export class CommitDTO {
    sha: string;
    files: CommitFile[];

    constructor({ sha, files }: DetailedCommit) {
        this.sha = sha;
        this.files = files;
    }
}
