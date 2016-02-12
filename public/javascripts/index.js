/**
 * Created by refucktor on 2/10/16.
 */
$(function(){
    $('#deploy_incubator').click(deployIncubator);
    $('#import_dumps').click(import_dumps);
});

function pullDumps(){
    $.ajax({
        headers: {'Access-Control-Allow-Origin' : '*'},
        dataType: "json",
        crossDomain: true,
        url: "/api/deploy_incubator",
        success: function (data) {
            console.log(data);
            printLogs(data);
        }
    });
}
function deployIncubator(){
    $.ajax({
        headers: {'Access-Control-Allow-Origin' : '*'},
        dataType: "json",
        crossDomain: true,
        url: "/api/deploy_incubator",
        success: function (data) {
            console.log(data);
            printLogs(data);
        }
    });
}
function exportMongoDB(){
    $.ajax({
        headers: {'Access-Control-Allow-Origin' : '*'},
        dataType: "json",
        crossDomain: true,
        url: "/api/export_from_localhost",
        success: function (data) {
            console.log(data);
            printLogs(data);
        }
    });
}

function import_dumps(){
    $.ajax({
        headers: {'Access-Control-Allow-Origin' : '*'},
        dataType: "json",
        crossDomain: true,
        url: "/api/import_dumps",
        success: function (data) {
            console.log(data);
            printLogs(data);
        }
    });
}

function printLogs(logs){
    var lines = logs.split("\n");
    $('.log-panel').removeClass('hide');
    for(var item in lines){
        if(item) {
            $('.log-panel').append("<p class='log-item'>" +
                lines[item] + "<p>");
        }
    }
}
