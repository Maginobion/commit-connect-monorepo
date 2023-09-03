import { useState } from 'react';
import CommitService from '@/services/commit.service';
import { useQuery } from '@tanstack/react-query';

const useCommitInfo = () => {
    const [selectedCommit, setSelectedCommit] = useState<string | null>(null);

    const selectCommit = (sha: string | null) => {
        setSelectedCommit(sha);
    };

    const query = useQuery({
        queryKey: [`commit`, selectedCommit],
        queryFn: () => {
            if (!selectedCommit) return null;
            return CommitService.getCommitInfo(selectedCommit);
        },
        initialData: null,
    });

    return {
        ...query,
        selectedCommit,
        selectCommit,
    };
};

export default useCommitInfo;
