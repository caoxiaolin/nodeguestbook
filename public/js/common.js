$(document).ready(function(){
    $('#submit').click(function(){
        $.post('/message/add', $('#form').serialize(), function(res){
            if (res){
                window.location.reload();
            }
        });
    });
    $('.reply').click(function(){
        if ($(this).parent().parent().find('textarea').length == 0)
        {
            $(this).parent().parent().append('<textarea class="form-control" id="reply_' + $(this).attr('_id') + '" rows="3"></textarea><button type="button" class="btn btn-default" onclick="reply(\'' + $(this).attr('_id') + '\')">回复</button>');
        }
    });
    $('.del').click(function(){
        $.get('/message/delete/' + $(this).attr('_id'), function(){
            window.location.reload();
        });
    });
});
function reply(id)
{
    $.post('/message/reply/' + id, 'content=' + $('#reply_' + id).val(), function(result){
        alert(result);
        window.location.reload();
    });
}
