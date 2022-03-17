import { fs } from 'fs';

export class Service {
    createFileStream(filename) {
        return fs.createFileStream(filename)
    }
}