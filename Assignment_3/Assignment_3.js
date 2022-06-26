//                                                   Assighnment ==> 3

$(() => {

    let items = [];
    items.push({ itemno: 1, itemname: "laptop", itemprize: 100 });
    items.push({ itemno: 2, itemname: "PC", itemprize: 200 });
    items.push({ itemno: 3, itemname: "TV", itemprize: 300 });

    // functions

    function getItembyItemno(itemno) {
        let output = {
            itemFoundStatus: false,
            itemdetails: { itemno: 3, itemname: "TV", itemprize: 300 },
        }
        for (let i = 0; i < items.length; i++) {
            if (items[i].itemno == itemno) {
                output.itemFoundStatus = true;
                output.itemdetails = items[i];
                break;
            }
        }
        return output;
    }

    function addItem(input) {
        let added = false;
        for (let i = 0; i < items.length; i++) {
            if (items[i].itemno == input.itemno) {
                added = false;
                return added;
            }
        }
        items.push(input);
        added = true;
        return added;
    }

    function updateItem(update) {
        let updated = false;
        for (let i = 0; i < items.length; i++) {
            if (items[i].itemno == update.itemno) {
                items[i].prize = update.prize;
                items[i].itemname = update.itemname;
                updated = true;
                break;
            }
        }
        return updated;
    }
    function showDetails() {
        let itemdetails = "";
        for (let i = 0; i < items.length; i++) {
            itemdetails += "<br>" + items[i].itemno + " " + items[i].itemname + " " + items[i].itemprize;
        }
        $("#details").html(itemdetails);
    }

    //showDetails();

    // Events

    $("#itemno").blur(() => {
        console.log("Blur event occured");
        let itemno = $("#itemno").val();

        // document.querySelector("#itemno").disabled = true;

        let output = getItembyItemno(itemno);


        if (output.itemFoundStatus) {

            $("#msg").text("Item details found");
            $("#itemname").val(output.itemdetails.itemname);
            $("#itemprize").val(output.itemdetails.itemprize);
            document.querySelector("#b1").disabled = true;
        }
        else {

            $("#msg").text("Item details not found");
            $("#itemname").val("");
            $("#itemprize").val("");
            document.querySelector("#b1").disabled = false;
            document.querySelector("#b2").disabled = true;
        }
    });
    // add item

    $("#b1").click(() => {
        console.log("Add button clicked");

        let input = {
            itemno: $("#itemno").val(),
            itemname: $("#itemname").val(),
            itemprize: $("#itemprize").val(),
        }
        let output = addItem(input);
        if (output) {
            $("#msg").text("added successfully");
            $("#msg").removeClass("nm").addClass("em");
        }
        else {
            $("#msg").text("Item alrady exists with this Item no.");
        }

        $("#itemname").val("");
        $("#itemprize").val("");

        showDetails();

        document.querySelector("#itemno").disabled = false;
    });

    // update item

    $("#b2").click(() => {
        console.log("Update button clicked");

        let update = {
            itemno: $("#itemno").val(),
            itemname: $("#itemname").val(),
            itemprize: $("#itemprize").val(),
        }
        let output = updateItem(update);
        if (output) {
            $("#msg").text("updated successfully");
            $("#msg").addClass("em").removeClass("nm");
        }
        else {
            $("#msg").text("could not update item");
        }


        $("#itemname").val("");
        $("#itemprize").val("");

        showDetails();

        document.querySelector("#itemno").disabled = false;
        document.querySelector("#itemno").focus();
    });

});