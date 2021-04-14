var addCount

var tbl = $('#example').DataTable({
    "ajax": 'data/test1.json',
    "columns": [
        { "data": "ident" },
        { "data": "fname" },
        { "data": "lname" },
        { "data": "zip" },
        { "data": "country" }
    ],
    "sort": false //disable sorting feature on table
});

var addCount = 0;

$('#add_row').click(function () {
    tbl.row.add({
        "ident": '<input type="text" id="ident' + addCount + '" name="ident' + addCount + '" value="">',
        "fname": '<input type="text" id="fname' + addCount + '" name="fname' + addCount + '" value="">',
        "lname": '<input type="text" id="lname' + addCount + '" name="lname' + addCount + '" value="">',
        "zip": '<input type="text" id="zip' + addCount + '" name="zip' + addCount + '" value="">',
        "country": '<input type="text" id="country' + addCount + '" name="country' + addCount + '" value="">'
    }).draw();
    addCount = addCount + 1;
    return false;
});

$('#submit_row').click(function () {
    var data = tbl.$('input').serialize();
    alert("Add the following data to server: \n\n" + data);
    $.ajax({
        type: "GET",
        dataType: 'json',
        async: false,
        url: 'poststuff.php',
        data: JSON.stringify(data),
        success: function () { alert("It works!"); },
        failer: function () { alert("oopsies"); }
    });
});