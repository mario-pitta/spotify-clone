import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const currentDirectory = dirname(fileURLToPath(
    import.meta.url))

const root = join(currentDirectory, '../')
const audioDirectory = join(root, 'audio')
const publicDirectory = join(root, 'public')
const fxDirectory = join(audioDirectory, 'fx')
const songsDirectory = join(audioDirectory, 'songs')



export default {
    port: process.env.PORT || 3000,
    dir: {
        root,
        audioDirectory,
        publicDirectory,
        fxDirectory,
        songsDirectory
    },
    pages: {
        homeHTML: 'home/index.html',
        controllerHTML: 'controller/index.html'
    },
    location: 'home'
}