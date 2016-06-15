import LoggerService from './logger.service';

const logger = angular
    .module('myApp.common.logger', [])
    .service('LoggerService', LoggerService)
    .name;

export default logger;