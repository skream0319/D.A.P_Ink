import React from 'react';
import "./_burger.scss"

const Burger = ({ open, setOpen }) => {
    
    return (
        <React.Fragment>
            <div className="hamburger">
                <button
                    className="button b-hamburger"
                    aria-controls="global-nav"
                    aria-expanded={open}
                    onClick={() => setOpen(!open)}
                    type="button"
                >
                    <span className="h_line">
                        <span className="visuallyHidden">
                            メニューを開閉する
                        </span>
                    </span>
                </button>
            </div>

        </React.Fragment>
    )
}

export default Burger