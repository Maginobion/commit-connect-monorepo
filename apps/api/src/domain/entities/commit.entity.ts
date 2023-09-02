export interface CommitAuthor {
    name?: string;
    email?: string;
    date?: string;
}

interface CommitTree {
    sha: string;
    url: string;
}

interface CommitVerification {
    verified: boolean;
    reason: string;
    signature: string | null;
    payload: string | null;
}

interface CommitParent {
    sha: string;
    url: string;
    html_url?: string;
}

interface CommitUser {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
}

interface CommitFile {
    sha: string;
    filename: string;
    status: string;
    additions: number;
    deletions: number;
    changes: number;
    blob_url: string;
    raw_url: string;
    contents_url: string;
    patch: string;
}

interface BaseCommit {
    sha: string;
    node_id: string;
    commit: {
        author: CommitAuthor;
        committer: CommitAuthor;
        message: string;
        tree: CommitTree;
        url: string;
        comment_count: number;
        verification?: CommitVerification;
    };
    url: string;
    html_url: string;
    comments_url: string;
    author: CommitUser;
    committer: CommitUser;
    parents: CommitParent[];
}

export interface DetailedCommit extends BaseCommit {
    stats: {
        total: number;
        additions: number;
        deletions: number;
    };
    files: CommitFile[];
}

export interface Commit extends BaseCommit {}
