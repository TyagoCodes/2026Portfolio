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
        Swift: 'bg-orange-800 text-white',
        ReactNative: 'bg-blue-300 text-black',
        Kotlin: 'bg-purple-700 text-white',
        Firestore: 'bg-red-700 text-white',
        TypeScript: 'bg-blue-500 text-white',
        R3F: 'bg-yellow-300 text-black',
        React: 'bg-cyan-400 text-black',
        Tailwind: 'bg-teal-500 text-white',
        Threejs: 'bg-yellow-300 text-black',
        SQL: 'bg-red-700 text-white',
        Database: 'bg-green-800 text-white',
        SvelteKit: 'bg-orange-700 text-white',
        Node: 'bg-yellow-600 text-black',
        Supabase: 'bg-green-400 text-black',
        Unity: 'bg-gray-900 text-gray',
        Figma: 'bg-purple-800 text-white'
    }

    return (
        <Html transform position={[-1.6, 2.8, 0]} scale={[0.6,0.6,0.6]} rotation={[0,0.3,0]}>
            <div
                className="
                pointer-events-auto
                w-60
                sm:w-72
                md:w-80
                lg:w-96
                max-h-96
                sm:max-h-full
                overflow-y-auto
                rounded-xl
                bg-neutral-900/97
                backdrop-blur-md
                border border-white/10
                shadow-2xl
                text-white
                p-4
                sm:p-5
                flex flex-col gap-4
                z-20
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
                    <button onClick={close} className="text-white/50 hover:text-white text-2xl">
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

                {item.video && (
                    <div className="w-full">
                        <video
                            src={item.video}
                            controls
                            autoPlay
                            muted
                            className="w-full h-40 sm:h-60 object-contain rounded-md mt-2"
                        />
                    </div>
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