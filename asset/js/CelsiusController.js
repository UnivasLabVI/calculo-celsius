var CelsiusController = {
	
	init: function() {
		CelsiusController.setForm();
	},
	
	setForm: function() {
		var form = document.querySelector('form');
		form.addEventListener('submit', function(event) {
			CelsiusController.calculateCelsius(form);
			//it is necessary to avoid form submition
			event.preventDefault();
		});
	},
	
	calculateCelsius: function(form) {
		var 
		    celsius = parseFloat(form.celsius.value),
			result = 0;
		
		var callback = function(result) {
			CelsiusController.showResult(result);			
		};
		
		CelsiusController.showLoading(true);
		CelsiusService.getIndex(celsius, callback);
	},
	
	showResult: function(result) {
		var spanResult = document.querySelector('.result');
		spanResult.innerHTML = result.toFixed(2);
		CelsiusController.showLoading(false);
	},
	
	showLoading: function(isLoading) {
		document.querySelector('.label').innerHTML = isLoading ? 'Carregando...' : 'FAHREIHEIT CALCULADO'
	}

};

//initialization
CelsiusController.init();
