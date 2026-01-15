import { Html } from '@react-three/drei'
import { dataSources } from '../../data'
import { useViewerStore } from '../../store/useViewerStore'
import { useUiLock } from '../../store/useUiLock'

export function ViewerCard3D() {
    const { source, selectedId, close } = useViewerStore()
    const lock = useUiLock((s) => s.lock)
    const unlock = useUiLock((s) => s.unlock)

    if (!source || !selectedId) return null

    const list = dataSources[source]
    const currentIndex = list.findIndex((i) => i.id === selectedId)
    if (currentIndex === -1) return null

    const item = list[currentIndex]

    const prev = () => {
        const prevIndex = currentIndex === 0 ? list.length - 1 : currentIndex - 1
        useViewerStore.getState().open(source, list[prevIndex].id)
    }

    const next = () => {
        const nextIndex = currentIndex === list.length - 1 ? 0 : currentIndex + 1
        useViewerStore.getState().open(source, list[nextIndex].id)
    }

    const tagColors: Record<string, string> = {
        TypeScript: 'bg-blue-500 text-white',
        R3F: 'bg-yellow-300 text-black',
        React: 'bg-cyan-400 text-black',
        Tailwind: 'bg-teal-500 text-white',
        Threejs: 'bg-yellow-300 text-black',
    }

    return (
        <Html transform position={[0, 2, 0]} scale={[0.6,0.6,0.6]}>
            <div
                className="
                pointer-events-auto
                w-60
                sm:w-72
                md:w-80
                lg:w-96
                rounded-xl
                bg-neutral-900/90
                backdrop-blur-md
                border border-white/10
                shadow-2xl
                text-white
                p-4
                sm:p-5
                flex flex-col gap-4
                "
                onPointerDown={lock}
                onPointerUp={unlock}
                onPointerCancel={unlock}
                onTouchCancel={unlock}
                onTouchStart={lock}
                onTouchEnd={unlock}
            >
                <div className="flex justify-between items-start">
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <button onClick={close} className="text-white/50 hover:text-white">
                        ✕
                    </button>
                </div>

                {item.image && (
                    <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-40 object-cover rounded-md mt-2"
                    />
                )}

                <p className="text-sm text-white/70">{item.description}</p>

                {item.tags && (
                    <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => {
                            const colorClass = tagColors[tag] || 'bg-white/10 text-white'
                            return (
                                <span
                                    key={tag}
                                    className={`text-xs px-2 py-1 rounded-full ${colorClass}`}
                                >
                                    {tag}
                                </span>
                            )
                        })}
                    </div>
                )}

                <div className="flex gap-3 mt-2">
                    {item.repo && (
                        <a
                            href={item.repo}
                            target="_blank"
                            className="text-indigo-400 hover:underline"
                        >
                            GitHub ↗
                        </a>
                    )}
                    {item.site && (
                        <a
                            href={item.site}
                            target="_blank"
                            className="text-emerald-400 hover:underline"
                        >
                            Live ↗
                        </a>
                    )}
                </div>

                <div className="flex justify-between mt-2">
                    <button
                        onClick={prev}
                        className="px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20 text-sm"
                    >
                        ← Prev
                    </button>
                    <button
                        onClick={next}
                        className="px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20 text-sm"
                    >
                        Next →
                    </button>
                </div>

            </div>
        </Html>
    )
}