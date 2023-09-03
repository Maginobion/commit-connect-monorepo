import { Commit } from 'src/domain/entities/commit.entity';

export class RepoDTO {
    sha: string;
    date: string;
    authorName: string;
    authorImg: string;
    message: string;

    constructor({ author, commit, sha }: Commit) {
        this.authorName = commit.author.name;
        this.authorImg = author.avatar_url;
        this.message = commit.message;
        this.date = commit.author.date;
        this.sha = sha;
    }
}
