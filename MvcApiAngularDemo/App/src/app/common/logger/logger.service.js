class LoggerService {
    constructor($log, $mdToast) {
        this.$log = $log;
        this.$mdToast = $mdToast;
        this._showToasts = true;
    }

    get showToasts(){
        return this._showToasts;
    }

    set showToasts(value){
        this._showToasts = value;
    }

    log(message, data){
        this.$log.log(message, data);
    }

    error(message, data, title) {
        this._showToast(message);
        this.$log.error('Error: ' + message, data);
    }

    info(message, data, title) {
        this._showToast(message);
        this.$log.info('Info: ' + message, data);
    }

    success(message, data, title) {
        this._showToast(message);
        this.$log.info('Success: ' + message, data);
    }

    warning(message, data, title) {
        this._showToast(message);
        this.$log.warn('Warning: ' + message, data);
    }

    _showToast(message){
        if (this._showToasts)
            this.$mdToast.show(
                this.$mdToast.simple()
                    .textContent(message)
                    .position("bottom right")
                    .hideDelay(3000)
            );
    }
}

LoggerService.$inject = ['$log', '$mdToast'];

export default LoggerService;