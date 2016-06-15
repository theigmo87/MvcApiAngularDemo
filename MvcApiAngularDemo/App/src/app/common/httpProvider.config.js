class httpProviderConfig{
    /*@ngInject*/
    static SetResponseInterceptors($httpProvider) {
        $httpProvider.interceptors.push(setCustomInterceptors);
        /*@ngInject*/
        function setCustomInterceptors($q, $rootScope){
            return {
                request: function(config){
                    console.log("request", config);
                    return config;
                },
                requestError: function(rejection){
                    console.log("requestError", rejection);
                    // do something on error
                    if (canRecover(rejection)) {
                        console.log("i was able to recover from request error!", rejection);
                        return responseOrNewPromise
                    }
                    return $q.reject(rejection);
                },
                response: function(response) {
                    // do something on success
                    console.log("response", response);
                    return response;
                },
                responseError: function(rejection) {
                    var deferred;
                    console.log("responseError", rejection);
                    // If rejection is due to user not being authenticated
                    if ( rejection.status === 401 ) {

                        $rootScope.$broadcast('unauthenticated', rejection);

                        // Return a new promise since this error can be recovered
                        // from, like redirecting to login page. The rejection and
                        // and promise could potentially be stored to be re-run
                        // after user is authenticated.
                        deferred = $q.defer();
                        return deferred.promise;
                    }
                    //LoggerService.error("There was a response error: " + rejection.data.ExceptionMessage, rejection)
                    $rootScope.$broadcast('serverError', rejection);
                    // Just reject since this probably isn't recoverable from
                    return $q.reject(rejection);

                }
            };
        }
    }
}

export default httpProviderConfig;