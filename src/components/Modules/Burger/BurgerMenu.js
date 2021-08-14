import React, { useState } from 'react';
import Burger from './parts/burger';
import Nav from './parts/nav';
//sass
import './styles/burger.scss';
import './styles/nav.scss';


const BurgerMenu = () => {
    const [open, setOpen] = useState(false);
    
    return (
        <React.Fragment>
            <Burger open={open} setOpen={setOpen} />
            <Nav open={open} setOpen={setOpen}  />
        </React.Fragment>

    ) 
}

export default BurgerMenu