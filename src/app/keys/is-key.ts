import { allKeys } from './all-keys';

export function isKey(keyCode: string) {
    return keyCode && allKeys.findIndex(k => k.keyCode === keyCode) > -1; 
}
