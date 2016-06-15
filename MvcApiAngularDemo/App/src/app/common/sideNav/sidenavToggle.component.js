import controller from './sideNavToggle.controller';
import template from './sideNavToggle.component.html';

const SideNavToggleComponent = {
    bindings: {
        componentid: '<'
    },
    controller,
    template,
    transclude: true
}

export default SideNavToggleComponent;