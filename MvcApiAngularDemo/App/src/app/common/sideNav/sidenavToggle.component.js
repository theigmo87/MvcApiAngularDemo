import controller from './sideNavToggle.controller';
import template from './sideNavToggle.component.html';

const SideNavToggleComponent = {
    bindings: {
        componentid: '<',
        buttontext: '<'
    },
    controller,
    template
}

export default SideNavToggleComponent;