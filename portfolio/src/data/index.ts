import { projects } from './projects'
import { experience } from './experience'
import type {ViewerItem} from './types';
import {education} from "./education.ts";

export type ViewerSource = 'projects' | 'experience' | 'education'

export const dataSources: Record<ViewerSource, ViewerItem[]> = {
    projects,
    experience,
    education,
}