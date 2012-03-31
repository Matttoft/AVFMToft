$('#submit').bind('click', function(){
	var d = new Date();
    var myid = (d.getTime());
	var fname = $('#fname').val();
	var lname = $('#lname').val();
	var email = $('#email').val();
	var tel = $('#tel').val();
	if($('#male').attr('checked')){
		var sex = "Male"
	}else{
		var sex = "Female"
	}
	var attending = $('#attending').val();
	var partner = $('#partner:checked').val();
	if(partner == "on") {
		var partner = "Yes"
	} else {
		var partner = "No"
	}

	var dropdown = $('#dropdown').val();
    var item = {
    	"_id": "ministry:" + dropdown + ":" + myid,
    	"fname": fname, 
    	"lname": lname, 
    	"email": email, 
    	"tel": tel, 
    	"sex": sex, 
    	"attending": attending,
    	"partner": partner,
    	"dropdown": dropdown
    };
	console.log(item);
	$.couch.db("axisapp").saveDoc(item, {
		success: function(data) {
			console.log(data);
			alert("Thank You. A ministry leader will contact you soon.");
			document.location.href = 'additem.html'; 
		},
		error: function(status) {
			console.log(status);
			alert("Error please try again.");
		}
	});
return false;

});

var urlVars = function(){
	var urlData = $($.mobile.activePage).data("url");
	var urlParts = urlData.split('?');
	var urlPairs = urlParts[1].split('&');
	var urlValues = {};
	for(var pair in urlPairs){
		var keyValue = urlPairs[pair].split('=');
		var key = decodeURIComponent(keyValue[0]);
		var value = decodeURIComponent(keyValue[1]);
		urlValues[key] = value;
	}
	return urlValues;
};




