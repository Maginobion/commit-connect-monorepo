import { AdaptedRepoCommit } from '@/adapters/repo-commit.adapter';
import { formatDate } from '@/utils/formatDate';

interface Props {
    commits: AdaptedRepoCommit[];
}

const CommitList = ({ commits }: Props) => {
    return commits.map(({ message, authorImage, authorName, date, sha }) => (
        <article
            key={sha}
            className={`
                mb-3 p-4 rounded-lg flex gap-4 items-center duration-150
                bg-slate-600
                hover:bg-slate-700
            `}
        >
            <img src={authorImage} className="rounded-full aspect-auto w-14 h-14" alt="Avatar Icon" />
            <div className="rounded-lg text-left text-slate-300 w-full">
                <p className="text-sm md:text-xl mb-1">{message}</p>
                <div className="flex justify-between text-xs md:text-sm">
                    <cite>{authorName}</cite>
                    <time dateTime={date}>{formatDate(date)}</time>
                </div>
            </div>
        </article>
    ));
};

export default CommitList;
