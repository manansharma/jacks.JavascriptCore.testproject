var config = {
    userdatabase: {
        search_username: 'databaseImplementation.getUsername'
    }
}
var username = req.params.username;
var dbUsername = eval(config.userdatabase.search_username + '("' + username + '")');