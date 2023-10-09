import path from 'path';

export const resolvePath = (relativePath: string): string => path.resolve(__dirname, relativePath);
