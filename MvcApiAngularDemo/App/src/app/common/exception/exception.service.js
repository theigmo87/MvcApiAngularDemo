//        function catcher(message) {
//            return function(reason) {
//                logger.error(message, reason);
//            };
//        }

class ExceptionService {
    /*@ngInject*/
    ExceptionService(LoggerService) {
        this._LoggerService = LoggerService;
    }

    catcher(message){
        return (reason) => this._LoggerService.error(message, reason);
    }
}

export default ExceptionService;