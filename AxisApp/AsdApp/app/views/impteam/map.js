function(doc) {
  if (doc._id.substr(0,4)==='imp:') {
    emit(doc._id, {
    	"fname":doc.fname,
    	"lname":doc.lname,
    	"email":doc.email,
    	"tel":doc.tel,
    	"sexval":doc.sexval,
    	"ministry":doc.ministry,
    	"memtype":doc.memtype
    });
  }
};