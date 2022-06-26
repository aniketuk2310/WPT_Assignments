//                                                   Assighnment ==> 3

$(() => {

    let employee = [];
    employee.push({ empno: 1, empname: "ani", email: "ani@gmail", deptid: 100 });
    employee.push({ empno: 2, empname: "ket", email: "ket@gmail", deptid: 200 });
    employee.push({ empno: 3, empname: "kale", email: "kale@gmail", deptid: 300 });

    // functions

    function getEmpbyempno(empno) {
        let output = {
            EmpFoundStatus: false,
            employeedetails: { empno: 3, empname: "kale", email: "kale@gmail", deptid: 300 },
        }
        for (let i = 0; i < employee.length; i++) {
            if (employee[i].empno == empno) {
                output.EmpFoundStatus = true;
                output.employeedetails = employee[i];
                break;
            }
        }
        return output;
    }

    function addEmp(input) {
        let added = false;
        for (let i = 0; i < employee.length; i++) {
            if (employee[i].empno == input.empno) {
                added = false;
                return added;
            }
        }
        employee.push(input);
        added = true;
        return added;
    }

    function updateEmp(update) {
        let updated = false;
        for (let i = 0; i < employee.length; i++) {
            if (employee[i].empno == update.empno) {
                employee[i].empname = update.empname;
                employee[i].email = update.email;
                employee[i].deptid = update.deptid;
                updated = true;
                break;
            }
        }
        return updated;
    }

    function removeEmp(remove) {
        let removed = false;
        let index = -1;
        for (let i = 0; i < employee.length; i++) {
            if (employee[i].empno == remove.empno) {               
                index = i;
                break;
            }
        }
        if (index >= 0) {
            employee.splice(index,1);
            removed = true;
        }
        return removed;
    }

    function viewAll() {
        let employeedetails = "";
        for (let i = 0; i < employee.length; i++) {
            employeedetails += "<br>" + employee[i].empno + " " + employee[i].empname + " " + employee[i].email + " " + employee[i].deptid;
        }
        $("#details").html(employeedetails);
    }

    function viewOnDeptid(view){
        let employeedetails = "";
        if (view!=null) {
            for (let i = 0; i < employee.length; i++) {
                if (employee[i].deptid == view.deptid) {   
                    employeedetails += "<br>" + employee[i].empno + " " + employee[i].empname + " " + employee[i].email + " " + employee[i].deptid;
                }
            }
            $("#details").html(employeedetails);
        }
    }
//===========================================================================================================================================================

    // Events

    // blur event

    $("#empno").blur(() => {
        console.log("Blur event occured");
        let empno = $("#empno").val();

        // document.querySelector("#empno").disabled = true;

        let output = getEmpbyempno(empno);


        if (output.EmpFoundStatus) {

            $("#msg").text(" Employee details found");
            $("#msg").addClass("em").removeClass("nm");

            $("#empname").val(output.employeedetails.empname);
            $("#email").val(output.employeedetails.email);
            $("#deptid").val(output.employeedetails.deptid);

            document.querySelector("#b1").disabled = true;
            document.querySelector("#b4").disabled = true;
            document.querySelector("#b5").disabled = true;
        }
        else {

            $("#msg").text(" Employee details not found");
            $("#empname").val("");
            $("#email").val("");
            $("#deptid").val("");
            $("#msg").addClass("nm").removeClass("em");
            document.querySelector("#b2").disabled = true;
            document.querySelector("#b3").disabled = true;
            document.querySelector("#b4").disabled = true;
            document.querySelector("#b5").disabled = true;
        }
    });

    // add emp

    $("#b1").click(() => {
        console.log("Add button clicked");

        let input = {
            empno: $("#empno").val(),
            empname: $("#empname").val(),
            email: $("#email").val(),
            deptid: $("#deptid").val(),
        }
        let output = addEmp(input);
        if (output) {
            $("#msg").text(" Employee added successfully");
            $("#msg").removeClass("nm").addClass("em");
            document.querySelector("#b4").disabled = false;
            document.querySelector("#b5").disabled = false;
        }
        else {
            $("#msg").addClass("nm").removeClass("em");
            $("#msg").text(" Employee alrady exists with this Emp no.");
        }

        $("#empname").val("");
        $("#email").val("");
        $("#deptid").val("");

        // viewAll();

    });

    // update emp

    $("#b2").click(() => {
        console.log("Update button clicked");

        let update = {
            empno: $("#empno").val(),
            empname: $("#empname").val(),
            email: $("#email").val(),
            deptid: $("#deptid").val(),
        }
        let output = updateEmp(update);
        if (output) {
            $("#msg").text(" Employee details updated successfully");
            $("#msg").addClass("em").removeClass("nm");
            document.querySelector("#b4").disabled = false;
            document.querySelector("#b5").disabled = false;
        }
        else {
            $("#msg").addClass("nm").removeClass("em");
            $("#msg").text(" Could not update Employee details.");
        }


        $("#empname").val("");
        $("#email").val(""),
        $("#deptid").val("");

        viewAll();

        document.querySelector("#empno").disabled = false;
        document.querySelector("#empno").focus();
    });

    // remove emp

    $("#b3").click(() => {
        console.log("remove button clicked");

        let remove = {
            empno: $("#empno").val(),
            empname: $("#empname").val(),
            email: $("#email").val(),
            deptid: $("#deptid").val(),
        }
        let output = removeEmp(remove);
        if (output) {
            $("#msg").text(" Employee details removed successfully");
            $("#msg").addClass("em").removeClass("nm");
            document.querySelector("#b4").disabled = false;
            document.querySelector("#b5").disabled = false;
        }
        else {
            $("#msg").addClass("nm").removeClass("em");
            $("#msg").text(" Could not remove Employee details.");
        }


        $("#empname").val("");
        $("#email").val(""),
        $("#deptid").val("");

        viewAll();

        document.querySelector("#empno").disabled = false;
        document.querySelector("#empno").focus();
    });

    // view all Employee

    $("#b4").click(() => {
        console.log("viewAll button clicked");

        $("#msg").text(" Showing all employee details.");

        viewAll();

    });

    // view on dept id

    $("#b5").click(() => {
        console.log("view on deptid button clicked");
        let view = { deptid: $("#deptid").val() };

        $("#msg").text(" Showing all employee details with given deptid.");
        
        viewOnDeptid(view);

    });

});