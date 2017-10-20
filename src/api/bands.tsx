import { Band } from '../types/band';

const API_URL_DEV = 'http://127.0.0.1:4000';

async function getBands(): Promise<Band[]> {
    const response = await fetch(API_URL_DEV + '/bands');
    const json = await response.json();
    return json.data;
}

async function getBandById(bandId: number): Promise<Band> {
    const response = await fetch(API_URL_DEV + '/bands/' + bandId);
    const json = await response.json();
    return json.data;
}

export {
    getBands,
    getBandById
};
