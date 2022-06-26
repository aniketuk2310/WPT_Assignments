//                                                   Assighnment ==> 4



// functions

class logicFunctions {

    constructor() {
        this.employee = [
            { empno: 1, empname: "ani", email: "ani@gmail", deptid: 100 },
            { empno: 2, empname: "ket", email: "ket@gmail", deptid: 200 },
            { empno: 3, empname: "kale", email: "kale@gmail", deptid: 100 }
        ];
    }

    getEmpbyempno(empno) {
        console.log("get called");
        let output = {};
        for (let i = 0; i < this.employee.length; i++) {
            if (this.employee[i].empno == empno) {
                return this.employee[i];
            }
        }
    }

    addEmp(input) {
        let added = false;
        for (let i = 0; i < this.employee.length; i++) {
            if (this.employee[i].empno == input.empno) {
                added = false;
                return added;
            }
        }
        this.employee.push(input);
        added = true;
        return added;
    }

    updateEmp(update) {
        let updated = false;
        for (let i = 0; i < this.employee.length; i++) {
            if (this.employee[i].empno == update.empno) {
                this.employee[i].empname = update.empname;
                this.employee[i].email = update.email;
                this.employee[i].deptid = update.deptid;
                updated = true;
                break;
            }
        }
        return updated;
    }

    removeEmp(remove) {
        let removed = false;
        let index = -1;
        for (let i = 0; i < this.employee.length; i++) {
            if (this.employee[i].empno == remove.empno) {               
                index = i;
                break;
            }
        }
        if (index >= 0) {
            this.employee.splice(index,1);
            removed = true;
        }
        return removed;
    }

    viewAll() {
        return this.employee;
    }

    viewOnDeptid(view) {
        return this.employee;

    }
}

//===========================================================================================================================================================


$(() => {

    let func = new logicFunctions();

    // Events

    // blur event

    $("#empno").blur(() => {
        console.log("Blur event occured");
        let empno = $("#empno").val();
       
        let output = func.getEmpbyempno(empno);

        if (output) {
            $("#msg").text(" Employee details found");
            $("#empname").val(output.empname);
            $("#email").val(output.email);
            $("#deptid").val(output.deptid);

            document.querySelector("#b1").disabled = true;
            document.querySelector("#b4").disabled = false;
            document.querySelector("#b5").disabled = false;
        }
        else {

            $("#msg").text(" Employee details not found");
            $("#empname").val("");
            $("#email").val("");
            $("#deptid").val("");
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
        let output = func.addEmp(input);
        if (output) {
            $("#msg").text(" Employee added successfully");
            $("#msg").removeClass("nm").addClass("em");
            document.querySelector("#b4").disabled = false;
            document.querySelector("#b5").disabled = false;
        }
        else {
            $("#msg").text(" Employee alrady exists with this Emp no.");
        }

        $("#empname").val("");
        $("#email").val("");
        $("#deptid").val("");

        // viewAll();

        // document.querySelector("#empno").disabled = false;
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
        let output = func.updateEmp(update);
        if (output) {
            $("#msg").text(" Employee details updated successfully");
            $("#msg").addClass("em").removeClass("nm");
            // document.querySelector("#b4").disabled = false;
            // document.querySelector("#b5").disabled = false;
        }
        else {
            $("#msg").addClass("em").removeClass("nm");
            $("#msg").text(" Could not update Employee details.");
        }


        $("#empname").val("");
        $("#email").val(""),
        $("#deptid").val("");

        // viewAll();

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
        let output = func.removeEmp(remove);
        if (output) {
            $("#msg").text(" Employee details removed successfully");
            $("#msg").addClass("em").removeClass("nm");
            document.querySelector("#b4").disabled = false;
            document.querySelector("#b5").disabled = false;
        }
        else {
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

        let employee = func.viewAll();

        let employeedetails = "";
        for (let i = 0; i < employee.length; i++) {
            employeedetails += "<br>" + employee[i].empno + " " + employee[i].empname + " " + employee[i].email + " " + employee[i].deptid;
        }
        $("#details").html(employeedetails);

    });

    // view on dept id

    $("#b5").click(() => {
        console.log("view on deptid button clicked");
        let view = { deptid: $("#deptid").val() };

        $("#msg").text(" Showing all employee details with given deptid.");

        let employee = func.viewOnDeptid(view);

        let employeedetails = "";
        if (view != null) {
            for (let i = 0; i < employee.length; i++) {
                if (employee[i].deptid == view.deptid) {
                    employeedetails += "<br>" + employee[i].empno + " " + employee[i].empname + " " + employee[i].email + " " + employee[i].deptid;
                }
            }
            $("#details").html(employeedetails);
        }

    });

});