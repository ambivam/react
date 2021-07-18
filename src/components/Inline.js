import React from 'react'

const heading = {
    fontSize: '72pix',
    color: 'blue'
}

function Inline() {
    return (
        <div>
            <h1 className='error'>Error</h1>
            <h1 style={heading}>Inline</h1>
            {/* <h1 className={styles.success}>Success</h1> -> this would fail, we need to import explicitly.Here inheritance will not work*/}
        </div>
    )
}

export default Inline
