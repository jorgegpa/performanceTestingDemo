import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    stages: [
        { duration: '2s', target: 10 }, // below normal load
        { duration: '5s', target: 20 },
        { duration: '2s', target: 30 }, // normal load
        { duration: '30s', target: 40 },
        { duration: '1m', target: 50 }, // around the breaking point
        { duration: '30s', target: 40 },
        { duration: '45s', target: 30 }, // beyond the breaking point
        { duration: '2s', target: 30 },
        { duration: '1m', target: 0 }, // scale down. Recovery stage.
    ],
};

export default function () {
    const BASE_URL = 'https://test-api.k6.io'; // make sure this is not production

    let responses = http.batch([
        [
            'GET',
            `${BASE_URL}/public/crocodiles/1/`,
            null,
            { tags: { name: 'PublicCrocs' } },
        ],
        [
            'GET',
            `${BASE_URL}/public/crocodiles/2/`,
            null,
            { tags: { name: 'PublicCrocs' } },
        ],
        [
            'GET',
            `${BASE_URL}/public/crocodiles/3/`,
            null,
            { tags: { name: 'PublicCrocs' } },
        ],
        [
            'GET',
            `${BASE_URL}/public/crocodiles/4/`,
            null,
            { tags: { name: 'PublicCrocs' } },
        ],
    ]);

    sleep(1);
}