$(document).ready(function() {
		
 		$.ajax({
        	url: "http://localhost:8080/CategoryRestService/FindAdd"
    	}).then(function(data) {

		$('#bt_add').click(function(){
    		agregar;
    	});
    	var cont =0 ;
    	function agregar(){
    		cont++;
    		var fila = '<tr class ="selected" id="fila'+cont
    					+'"><td '+cont
    					+'></td><td>texto</td><td>texto</td><td>texto</td></tr>';
    		$('#tabla').append(fila); 
    	}

    	});

});    	