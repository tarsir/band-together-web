import { push } from 'react-router-redux';

function redirectTo(target: string, dispatch: Function): void {
    dispatch(push(target));
}

export { redirectTo };