function student(studentname, fathername, rollno, stream) {
    this.studentname = studentname;
    this.fathername = fathername;
    this.rollno = rollno;
    this.stream = stream;
}


function showdetails() {
}


showdetails.prototype.add = function (details) {
    console.log("adding");
    let tableBody = document.getElementById('tableBody');
    let uistring = `<tr>
                        <td>${details.rollno}</td>
                        <td>${details.studentname}</td>
                        <td>${details.fathername}</td>
                        <td>${details.stream}</td>
                    </tr>`;
    tableBody.innerHTML += uistring;
}

showdetails.prototype.clear = function () {
    let detailform = document.getElementById('detailform');
    detailform.reset();
}


showdetails.prototype.validate = function (details) {
    if(details.studentname.length < 2 || details.fathername.length < 2 ){
        return false;
    }
    else{
        return true;
    }
}

showdetails.prototype.show = function(type,displaymessage){
    let message = document.getElementById('message');
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong>Message: </strong> ${displaymessage}
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>`;
        setTimeout(function(){ message.innerHTML =''},2000);
}

let detailform = document.getElementById('detailform');
detailform.addEventListener('submit', detailformsubmit);

function detailformsubmit(e) {

    let studentname = document.getElementById("studentname").value;
    let fathername = document.getElementById("fathername").value;
    let rollno = document.getElementById("rollno").value;
    let stream;
    let science = document.getElementById("science");
    let commerce = document.getElementById("commerce");
    let arts = document.getElementById("arts");

    if (science.checked) {
        stream = science.value;
    }
    else if (commerce.checked) {
        stream = commerce.value;
    }
    else if (arts.checked) {
        stream = arts.value; z
    }

    let details = new student(studentname, fathername, rollno, stream);
    console.log(details);
    let display = new showdetails();


    if(display.validate(details))
    {
    display.add(details);
    display.clear();
    display.show('success','Your details are added');
    }
    else{
        display.show('danger','Sorry! your details are invalide');
    }


    e.preventDefault();
}