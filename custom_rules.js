function (user, context, callback) {


    user.user_metadata = user.user_metadata || {};
    var preferences = user.user_metadata.preferences || {};

    if (preferences.redirectURL !== null) { 
        context.idToken["http://notpiedpiper/logoutredirect"] = preferences.redirectURL; 
    }


    callback(null, user, context);
}