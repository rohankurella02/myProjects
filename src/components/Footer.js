import React from 'react'
import { useState } from 'react'
import Modal from "./Modal"

function Footer() {

    const [modal, setModal] = useState(false);
    const toggle = () => {
        setModal(!modal);
    }

    return (
        <div>
            <footer className="footer">
                <div className="createdby">
                    Created By Rohan Kurella
                </div>
                <button className="rules" onClick={toggle} >Rules</button>
            </footer>
            {
                modal?
                <Modal toggle={toggle} /> : null
            }
        </div>
    )
}

export default Footer
