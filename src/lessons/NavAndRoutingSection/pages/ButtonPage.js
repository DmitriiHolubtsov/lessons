import React from 'react';
import { GoCheck, GoIssueOpened, GoAlert, GoDatabase } from 'react-icons/go';
import Button from './components/Button';


function ButtonPage() {

    const handleClick = () => {
        console.log('Click!');
    };

    return (
        <div className='pl-2'>
            <div className='mb-2'>
                <Button onClick={handleClick} success rounded>
                    <GoCheck />
                    Success rounded outline
                </Button>
            </div>
            <div className='mb-2'>
                <Button danger>
                    <GoIssueOpened />
                    Danger outline
                </Button>
            </div>
            <div className='mb-2'>
                <Button warning>
                    <GoAlert />
                    Warning
                </Button>
            </div>
            <div className='mb-2'>
                <Button secondary>
                    <GoDatabase />
                    Secondary outline
                </Button>
            </div>
            <div className='mb-2'>
                <Button primary rounded>
                    Primary rounded
                </Button>
            </div>
        </div>
    );
}

export default ButtonPage;