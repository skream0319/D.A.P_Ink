import React, { useState } from 'react';
import Burger from './_burger';
import Nav from './_nav';

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