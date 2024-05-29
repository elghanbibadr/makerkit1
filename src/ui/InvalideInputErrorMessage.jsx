import React from 'react'

const InvalidInputErrorMessage = ({ errorMessage }) => {
  return (
    <>
      { (
        <p className="text-red-600 text-xs font-medium">
          {errorMessage}
        </p>
      )}
    </>
  )
}

export default InvalidInputErrorMessage
