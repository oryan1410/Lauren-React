import React from "react"
import { useState, useEffect } from "react"
import {Link } from "react-router-dom"

export default function Navbar () {

    return (
        <>
        <div className="navbar">
            <Link to="/home">Home</Link>
            <Link to="/wines">Wines</Link>
            <Link to="/dishes">Dishes</Link>
            <Link to="/events">Events</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login">Login</Link>
        </div>
        
        </>
    )
}