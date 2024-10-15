import React from 'react'

const loading = () => {
  return (
    <div>
        <div className="fixed top-0 left-0 z-50 w-screen h-screen bg-black bg-opacity-50 flex items-center justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-700"></div>
        </div>
    </div>
  )
}

export default loading
