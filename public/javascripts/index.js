/**
 * Created by refucktor on 2/10/16.
 */
$(function(){
    $('#pull_dumps').click(pullDumps);
});

function pullDumps(){
    $.ajax({
        headers: {'Access-Control-Allow-Origin' : '*'},
        dataType: "json",
        crossDomain: true,
        url: "/api/pull_dumps",
        success: function (data) {
            $('#log').text(data);
        }
    });
}
function exportMongoDB(){

}
