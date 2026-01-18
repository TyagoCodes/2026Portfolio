import type {ViewerItem} from './types.ts'

export const projects: ViewerItem[] = [
    {
        id: 'portfolio',
        name: 'Threejs/R3F Portfolio',
        image: 'images/portfolioSS.png',
        description: 'React Three Fiber portfolio using typescript, tailwind, vite, zustand, drei, blender and nomad sculpt to create the 3D models.  ',
        repo: 'https://github.com/tyagocodes/2026Portfolio',
        site: 'https://tyagocodes.dev',
        tags: ['R3F', 'TypeScript', 'Threejs', 'Tailwind'],
    },
    {
        id: 'Tennis',
        name: 'Tennis Meetings App (Squadra)',
        video: 'videos/squadra.mp4',
        description: 'Squadra was my end of program project where I was the team lead and with a team of 4 and using agile methods, we created an app for casual tennis players to meet at local parks using auth, match invitations, push notifications etc. It was all done trough ReactNative Expo for android and web and Native iOS it all communicated trough Firestore.',
        site: 'https://github.com/HugoLapointeAhuntsic/Projet_Integrateur_React_HSES',
        repo: 'https://github.com/StrawberryBeds/GitGorilles_Swift',
        tags: ['Swift', 'ReactNative', 'TypeScript', "Kotlin", 'Firestore', "Tailwind"],
    },
]