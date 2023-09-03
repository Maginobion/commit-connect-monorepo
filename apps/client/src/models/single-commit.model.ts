type CommitStatus = 'added' | 'removed' | 'modified' | 'renamed' | 'copied' | 'changed' | 'unchanged';

export interface CommitFile {
    sha: string;
    filename: string;
    status: CommitStatus;
    additions: number;
    deletions: number;
    changes: number;
    blob_url: string;
    raw_url: string;
    contents_url: string;
    patch?: string;
}

export interface SingleCommit {
    sha: string;
    files: CommitFile[];
}
