 function updateClass(url){
    $.ajax({
        url: url,
        dataType: "HTML",
        error: function(msg){
            alert(msg.statusText);
            return msg;
        },
        success: function(html){
            $("#regcontent").html(html);
        }
    });
}