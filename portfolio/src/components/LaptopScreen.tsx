export default function LaptopScreen() {
    return (
        <div
            style={{
                width: '175px',
                height: '125px',
                backgroundColor: '#000',
                border: '2px solid #00ffff',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                pointerEvents: 'auto',
            }}
        >
            <div style={{ color: '#00ffff', fontSize: '12px' }}>
                Laptop Screen
            </div>
        </div>
    )
}
