import { Talent } from '../types/talent';

const API_URL_DEV = 'http://127.0.0.1:4000';

async function getTalents(): Promise<Talent[]> {
    const response = await fetch(API_URL_DEV + '/talents');
    const json = await response.json();
    return json.data;
}

export {
    getTalents
};