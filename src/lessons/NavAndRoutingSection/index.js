import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import { itemsAccordion, optionsDropdown } from './date'

function NavAndRoutingSection() {
    return (
        <>
          <Accordion items={itemsAccordion} />
          <Dropdown options={optionsDropdown} />
        </>
    );
}

export default NavAndRoutingSection;