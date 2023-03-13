import React from 'react';
import Button from './components/Button';

function NavAndRoutingSection() {
    return (
        <div>
            <div><Button success>Click!</Button></div>
            <div><Button>Buy now</Button></div>
            <div><Button>See deal</Button></div>
            <div><Button>Add</Button></div>
            <div><Button>Remove</Button></div>
        </div>
    );
}

export default NavAndRoutingSection;