import React from 'react'

const Button = ({ onclick,text }) => {
    return (
        <>
            <button onClick={onclick} className="mt-6 px-6 py-3 bg-[#9D2DF0] cursor-pointer rounded-lg text-white">
                {text}
            </button>
        </>
    )
}

export default Button