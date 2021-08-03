import Head from 'next/head'
import React, { useState } from 'react'


function Humbrger({ isOpen, setIsOpen }) {
    return (
        <div className="relative cursor-pointer transform scale-75" onClick={() => setIsOpen(prev => !prev)}>
            <button className={"burgermenu " + (isOpen ? "opened" : '')}>
                <span></span>
            </button>
        </div>
    )
}

export default Humbrger
