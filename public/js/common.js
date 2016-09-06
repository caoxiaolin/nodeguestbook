$(document).ready(function(){
    $('#submit').click(function(){
        $.post('/message/add', $('#form').serialize(), function(res){
            alert(res);
        });
    });
});
