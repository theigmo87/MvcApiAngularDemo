class DashboardController {
    constructor() {
        
    }

    $onInit() {
        this.message = "dashboard controller.";
    }

    changeMessage() {
        this.message = "updated message, dashboard controller";
    }
}

export default DashboardController;