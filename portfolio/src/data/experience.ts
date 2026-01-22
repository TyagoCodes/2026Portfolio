import type {ViewerItem} from './types'

export const experience: ViewerItem[] = [
    {
        id: 'Work1',
        name: 'Revenu Quebec',
        description: 'Database Public Servant (Source deduction Area)',
        image: '/images/rq.jpg',
        site: 'https://www.revenuquebec.ca/emplois/',
        tags: ['Database', 'SQL'],
    },
    {
        id: 'Work2',
        name: 'Software Developer at interactivoo.inc ',
        description: 'A web app designed as a sales and purchasing support tool for condominium properties, where interactivity and visual presentation play a key role in attracting clients.\n' +
            'It is built with SvelteKit and features an image sequence overlaid with an interactive Three.js scene, including selection boxes and interactive elements, along with advanced filters, a multimedia gallery, and Mapbox-based points of interest.',
        image: '/images/urbanno.png',
        site: '',
        tags: ['Unity', 'TypeScript', 'R3F', 'React', 'Tailwind', 'Threejs', 'SvelteKit', 'Node', 'Supabase'],
    },
]