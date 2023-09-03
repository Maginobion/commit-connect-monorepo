import { AdaptedSingleCommit } from '@/adapters/single-commit.adapter';

interface Props {
    commit: AdaptedSingleCommit | null;
    error: Error;
}

const CommitDetail = ({ commit, error }: Props) => {
    const styling = `
        w-full  
        overflow-auto
        duration-75
        flex
        flex-col
        items-center
        rounded-b-lg
        bg-slate-800
        ${commit ? 'flex-grow min-h-[100px] max-h-40 border-t-2 border-emerald-900' : 'flex-none max-h-0'}
    `;

    if (!commit) return <div className={styling}>{error ? <p>Unexpected error</p> : <p>Loading...</p>}</div>;

    return (
        <ul className={styling}>
            {commit.files.map((file) => (
                <li
                    className="
                        my-2 py-2 px-6 w-full max-w-xs sm:max-w-md rounded-md  
                        flex flex-row justify-between items-center bg-cyan-800 hover:bg-cyan-900
                    "
                    key={file.sha}
                >
                    <div className="text-start text-xs md:text-base w-5/6">
                        <p className="break-words">File: {file.filename}</p>
                        <p>Changes: {file.changes}</p>
                    </div>
                    <div className="text-xs md:text-base">
                        <p className="text-green-500">+{file.additions}</p>
                        <p className="text-red-500">-{file.deletions}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default CommitDetail;
