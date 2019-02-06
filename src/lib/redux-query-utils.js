import { defaults } from 'lodash/fp';
import { getQueryKey } from 'redux-query';

const withDefaultStatus = defaults({
    isFinished: false,
    isPending: true,
    code: 0
});

export default function selectQueryStatus(state, queryConfig) {
    const queryKey = getQueryKey(queryConfig);
    const {
        isFinished,
        isPending,
        status: code,
        lastUpdated,
        queryCount
    } = state[queryKey] || {};

    return withDefaultStatus({
        isFinished,
        isPending,
        ...code && {
            code,
            lastUpdated,
            queryCount
        }
    });
}
