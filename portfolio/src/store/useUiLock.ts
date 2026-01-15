import {create} from 'zustand'

type UiLockState = {
    locked: boolean
    lock: () => void
    unlock: () => void
}

export const useUiLock = create<UiLockState>((set) => ({
    locked: false,
    lock: () => set({locked: true}),
    unlock: () => set({locked: false})
}))