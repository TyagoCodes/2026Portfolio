import { projects } from './projects'
import { experience } from './experience'
import type {ViewerItem} from './types';
import {education} from "./education.ts";
import {iOS} from "./iOS.ts";


export type ViewerSource = 'projects' | 'experience' | 'education' | 'iOS'

export const dataSources: Record<ViewerSource, ViewerItem[]> = {
    projects,
    experience,
    education,
    iOS,
}