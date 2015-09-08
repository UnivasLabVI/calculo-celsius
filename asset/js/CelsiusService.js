var CelsiusService = {

	getIndex: function(celsius, callback) {
		$.ajax({
		  url: 'asset/services/celsius.action.php',
		  data: {'celsius': celsius},
		  success: function(result) {
		  	callback(parseFloat(result));
		  },
		  error: function() {
		  	callback(null);
		  }
		});
	},
	
	getDescription: function (index) {
		//TODO to be implemented
		return "";
	}
	
};