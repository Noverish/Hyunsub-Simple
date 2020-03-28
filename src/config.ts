export const PORT = parseInt(process.env.PORT || '80');
export const ROOT_PATH = process.env.ROOT_PATH || '/archive';
export const COOKIE_KEY = 'x-hyunsub-simple';
export const ENCRYPT_KEY = 'TVVdxFy6eI6x9OH692RMawYI1JYu9ocL'; // Must be 256 bits (32 characters)
export const USER_DB_FILE_PATH = 'assets/users.json';
export const COOKIE_EXPIRE_MILLIS = 30 * 86400 * 1000;
export const USER_FIELD = 'user';
