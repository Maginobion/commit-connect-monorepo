import CommitList from './components/CommitList';
// import useCommitInfo from '@/hooks/useCommitInfo';
import useCommits from '@/hooks/useCommits';

const Home = () => {
    const { data: commits, isFetching: loading, error, refetch: reload } = useCommits();

    return (
        <>
            <h1 className="mb-4 text-3xl md:text-5xl">Commit Connect</h1>
            {Boolean(error) && <p className={'my-2 hidden'}>Something went wrong...</p>}
            <button className="mt-2 mb-6" onClick={() => reload}>
                <i className="fa-solid fa-rotate-right mr-2" />
                Reload
            </button>
            <section className="flex flex-col h-[75%] max-h-[60vh] max-w-sm sm:max-w-lg ">
                {!error && (
                    <>
                        <div
                            className={`
                                    overflow-auto 
                                    ${loading ? 'opacity-40' : 'opacity-100'}
                                `}
                        >
                            <CommitList commits={commits} />
                        </div>
                    </>
                )}
            </section>
        </>
    );
};

export default Home;
