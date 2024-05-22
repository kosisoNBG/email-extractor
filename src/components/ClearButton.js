import React from 'react'

const ClearButton = () => {
  return (
    <>
    <button type="button" className="btn btn-secondary btn-lg" onClick={() => window.location.reload()}>Clear</button>
    </>
  )
}

export default ClearButton