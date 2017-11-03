import { Talent } from '../types/user';

const API_URL_DEV = process.env.APP_API_URL || 'http://127.0.0.1:4000';

async function getTalents(): Promise<Talent[]> {
    const response = await fetch(API_URL_DEV + '/talents');
    const json = await response.json();
    return json.data;
}

export {
    getTalents
};