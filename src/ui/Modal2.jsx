import React from 'react'


const Modal2 = ({onClick}) => {
  return (
    <>
    {/* The button to open modal */}
<label htmlFor="my_modal_7" className="btn">open modal</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_7" className="modal-toggle" />
<div className="modal" role="dialog">
  <div className="modal-box">
    <h3 className="text-lg font-bold">Create Team    </h3>
    <p className="py-4">Create a new Team to manage your projects and members.</p>
    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" required />
    <button onClick={onClick} className="btn btn-neutral">Create Team</button>

  </div>
  <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
</div>
    </>
  )
}

export default Modal2