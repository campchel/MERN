import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className= "d-flex d grid gap-3 justify-content-center">
            <Link to='/'>Home</Link>
            <Link to='/products/list'>All</Link>
        </div>
    )
}