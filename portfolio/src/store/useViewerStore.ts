import { create } from 'zustand'
import type {ViewerSource} from '../data'

type ViewerState = {
    source: ViewerSource | null
    selectedId: string | null
    open: (source: ViewerSource, id: string) => void
    close: () => void
}

export const useViewerStore = create<ViewerState>((set) => ({
    source: null,
    selectedId: null,

    open: (source, id) => set({ source, selectedId: id }),
    close: () => set({ source: null, selectedId: null }),
}))