import { Html } from '@react-three/drei'
import type {ViewerSource} from '../../data'
import { useViewerStore } from '../../store/useViewerStore'
import { useUiLock } from '../../store/useUiLock'

type Props = {
    source: ViewerSource
    id: string
}

export function OpenButton3D({ source, id }: Props) {
    const open = useViewerStore((s) => s.open)
    const lock = useUiLock((s) => s.lock)
    const unlock = useUiLock((s) => s.unlock)

    return (
        <Html transform>
            <div
                className="pointer-events-auto"
                onPointerDown={lock}
                onPointerUp={unlock}
                onTouchStart={lock}
                onTouchEnd={unlock}
            >
                <button
                    className="px-3 py-1.5 rounded-md bg-indigo-600 text-white text-sm"
                    onClick={() => open(source, id)}
                    onPointerDown={(e) => e.stopPropagation()}
                    onTouchStart={(e) => e.stopPropagation()}
                >
                    Open
                </button>
            </div>
        </Html>
    )
}