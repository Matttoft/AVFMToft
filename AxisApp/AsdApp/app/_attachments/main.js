/**
 * Project 1
 Matt Toft
 ASD 1202

 */
$('#submit').bind('click', function saveItems(id) {
	var d = new Date();
	var key = (d.getTime());
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
	var allItems = [fname, lname, email, tel, sex, attending, partner, dropdown];
	localStorage.setItem(key, allItems);
	location.reload();
	alert("Thank You. A ministry leader will contact you soon.");
	
});
function clearData() {
	if(localStorage.length === 0) {
		alert("There is nothing in Storage");
	} else {
		localStorage.clear();
		alert("Data has been cleared");
		return false;
	}
}

function getItems() {
	var getListdiv = $('#display')[0];

	for(var i = 0, len = localStorage.length; i < len; i++) {
		var key = localStorage.key(i);
		var value = localStorage.getItem(key);
		value = value.split(',');
		var fname = value[0];
		var lname = value[1];
		var email = value[2];
		var tel = value[3];
		var sex = value[4];
		var attending = value[5];
		var partner = value[6];
		var dropdown = value[7];
		var newDiv = document.createElement("div");

		var newh3 = document.createElement("h3");
		
		var setdiv = newDiv.setAttribute("data-role", "fieldcontain");
		$('<h3 />', {
			text : value[0] +" "+ value[1]
		}).appendTo(newDiv);
		var setdiv = newDiv.setAttribute("data-role", "fieldcontain");

		$('<p />', {
			text : 'Email: ' + value[2]
		}).appendTo(newDiv);

		$('<p />', {
			text : 'Phone: ' + value[3]
		}).appendTo(newDiv);

		$('<p />', {
			text : 'Sex: ' + value[4]
		}).appendTo(newDiv);

		$('<p />', {
			text : 'Attending Months: ' + value[5]
		}).appendTo(newDiv);

		$('<p />', {
			text : 'Axis Partner?: ' + value[6]
		}).appendTo(newDiv);

		$('<p />', {
			text : 'Ministry: ' + value[7]
		}).appendTo(newDiv);

		var minImage = "logo.gif";
		if(dropdown == "Impressions") {
			minImage = "Impressions.gif";
		}
		if(dropdown == "Usher") {
			minImage = "Usher.gif";
		}
		if(dropdown == "Worship") {
			minImage = "Worship.gif";
		}
		if(dropdown == "Tech") {
			minImage = "Tech.gif";
		}
		if(dropdown == "Nursery") {
			minImage = "Nursery.gif";
		}

		var newP = document.createElement("p");
		var newImg = document.createElement("IMG");
		newImg.setAttribute("src",minImage);
		newP.appendChild(newImg);
		newDiv.appendChild(newP);
		
	$('<p><a href="#" onclick="deleteItem(' + key + ')">Delete Item</a></p>)').appendTo(newDiv);
		getListdiv.appendChild(newDiv);
		
	$('<p><a href="#" onclick="editItem(' + key + ')">Edit Item</a></p>)').appendTo(newDiv);
		getListdiv.appendChild(newDiv);
	}

	if(localStorage.getItem('appfname')) {
		var clearLink = $('#clear').css('display', 'block');
	} else {
		var fname = "";
		var lname = "";
		var email = "";
		var tel = $('#tel').val(tel);
		var sex = $('#sex').val(sex);
		var attending =$('#attending').val(attending);
		var partner = $('#partner').val(partner);
		var dropdown= $('#dropdown').val(dropdown);
	}
}

function editItem(id) {

	var itemId = id;
	var value = localStorage.getItem(itemId);
	value = value.split(',');
	var fname = value[0];
	var lname = value[1];
	var email = value[2];
	var tel = value[3];
	var sex = value[4];
	var attending = value[5];
	var partner = value[6];
	var dropdown = value[7];

	$('#fname').val(fname);
	$('#lname').val(lname);
	$('#email').val(email);
	$('#tel').val(tel);
	if(sex == "Male") {
		$('#male').attr('checked', 'checked')
	}else{
		$('#female').attr('checked','checked')
	};
	$('#attending').val(attending);
	if(partner == "Yes") {
		$('#partner').attr('checked', 'checked');
		$('#dropdown').val(dropdown);
		var editButton = $('#edit-item').css('display', 'block');
		var subresButtons = $('#subres').css('display', 'none');
		var itemList = $('#list').css('display', 'none');

		function clickEdit() {
		
			var fname = $('#fname').val();
			var lname = $('#lanme').val();
			var email = $('#email').val();
			var tel = $('#tel').val();
			var sex = $('#sex').val();
			var attending = $('#attending').val();
			if(partner == "Yes") {
				var partner = "Yes"
			} else {
				var partner = "No"
			}
			var dropdown = $('#dropdown').val();
			var allItems = [fname, lname, email, tel, sex, attending, partner, dropdown];
			if(fname != "" && dropdown != "Select a Ministry" && email != "") {
				localStorage.setItem(itemId, allItems);
				alert("Record Updated!");
				location.reload();
			} else {
				alert("These fields are required.");
			}
		};


		$('#edit-item').bind('click', clickEdit);
	}
};


$("#reset").live("click", function(e) {
	e.preventDefault();
	clearData();
});

$("#displaybutton").bind("click", function() {
	getItems([], "display");
	console.log("display link was clicked");

});
function deleteItem(id) {
	var ask = confirm("Are you sure?");
	if(ask) {
		localStorage.removeItem(id);
		window.location.reload();
	} else {
		alert("Item not removed.");
	}
}