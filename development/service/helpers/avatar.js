module.exports = function(app) {

    var crypto = require("crypto");

    var avatar = {
        /**
         * Gets a avatar image for the specified email address or facebook id and optional arguments.
         * @param  {String} ID The email address to get a profile image from Gravatar or FacebookID to get a profile image from Facebook.
         * @param  {String} args  Arguments to set size of profile image. Optional, defaults to "". Ex: Gravatar => ".jpg?s=200" or Facebook => "picture?width=200 or picture?type=large"
         * @return {String}       A fully qualified HREF for a avatar image.
         */
        getThumb: function(id, args) {
            if(validateEmail(id)){
                args = args || "";
                var BASE_URL = "//www.gravatar.com/avatar/";
                return (BASE_URL + md5(id) + args).trim();
            }else{
                args = args || "";
                var BASE_URL = "//graph.facebook.com/";
                return (BASE_URL + id + args).trim();
            }
        }
    }

    /**
     * MD5 hashes the specified string.
     * @param  {String} str A string to hash.
     * @return {String}     The hashed string.
     */
    function md5(str) {
        str = str.toLowerCase().trim();
        var hash = crypto.createHash("md5");
        hash.update(str);
        return hash.digest("hex");
    }

    function validateEmail(email) { 
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    return avatar;

}