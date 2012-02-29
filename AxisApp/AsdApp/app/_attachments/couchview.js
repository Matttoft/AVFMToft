$(document).ready(function(){
	$('#techteam').bind('click', function(){
		$('#browse').empty();
	$.ajax({
		"url":"_view/techteam",
		"dataType":"json",
		"success": function(data){
			console.log(data);
			$.each(data.rows, function(index,tech){
				var fname=tech.value.fname;
				var lname=tech.value.lname;
				var email=tech.value.email;
				var tel=tech.value.email;
				var sex=tech.value.sex;
				var min=tech.value.ministry;
				var partner=tech.value.memtype;
				$('#couchdata').append(
					$('<p>').append(
						$('<a>').attr("href","#")
							.text(fname+" "+lname)
					)
				);
			});
			$("#couchdata").listview('refresh');
		}
		
	});
	
});



	$('#impteam').bind('click', function(){
		$('#browse').empty();
	$.ajax({
		"url":"_view/impteam",
		"dataType":"json",
		"success": function(data){
			console.log(data);
			$.each(data.rows, function(index,imp){
				var fname=imp.value.fname;
				var lname=imp.value.lname;
				var email=imp.value.email;
				var tel=imp.value.email;
				var sex=imp.value.sex;
				var min=imp.value.ministry;
				var partner=imp.value.memtype;
				$('#couchdata').append(
					$('<p>').append(
						$('<a>').attr("href","#")
							.text(fname+" "+lname)
					)
				);
			});
			$("#couchdata").listview('refresh');
		}
		
	});
	
});

});