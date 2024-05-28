import React from 'react'

const InvalidInputErrorMessage = ({ errorMessage }) => {
  return (
    <>
      { (
        <p className="text-red-600 text-sm font-semibold">
          {errorMessage}
        </p>
      )}
    </>
  )
}

export default InvalidInputErrorMessage
