import RepoService from '@/services/repo.service';
import { useQuery } from '@tanstack/react-query';

const useCommits = () => {
    return useQuery({
        queryKey: ['commits'],
        queryFn: () => RepoService.getCurrentRepoCommits(),
        keepPreviousData: true,
        initialData: [],
    });
};

export default useCommits;
