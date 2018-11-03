function (user, context, callback) {

    user.user_metadata = user.user_metadata || {};
    user.app_metadata = user.app_metadata || {};

    var preferences = user.user_metadata.preferences || {};
    var roles = user.app_metadata.roles || {};

    if (preferences.redirectURL !== null) { 
        context.idToken["http://not-piedpiper.com.au/logoutredirect"] = preferences.redirectURL; 
    }

    context.accessToken["http://not-piedpiper.com.au/roles"] = roles;
    
    callback(null, user, context);
}