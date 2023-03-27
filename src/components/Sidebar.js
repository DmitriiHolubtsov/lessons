import Link from './Link';
import { links } from '../content/date';

function Sidebar () {

    const renderedLinks = links.map((link) => {
        return (
        <Link 
            key={link.label} 
            to={link.path} 
            className='mb-3'
            activeClassName="font-bold border-l-4 border-blue-500 pl-2"
        >
            {link.label}
        </Link>
        )
    });

    return (
        <div className='ml-5 sticky top-0 overflow-y-scroll flex flex-col items-start'>
            {renderedLinks}
        </div>
    )
}

export default Sidebar;