import _ from 'lodash';
import {
    LIKE_JOB,
    CLEAR_LIKED_JOBS
} from '../actions/types.js';

export default function(state = [], action) {
    switch (action.type) {
        case LIKE_JOB:
            return _.uniqBy([
                action.payload, ...state
            ], 'jobkey');
        case CLEAR_LIKED_JOBS:
            return [];
        default:
            return state;
    }
};
