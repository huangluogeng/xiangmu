! function() {
    $('.minfang').width($('#showbox').width() * $('.bigfang').width() / $('#bpic').width());
    $('.minfang').width($('#showbox').height() * $('.bigfang').height() / $('#bpic').height());
    var bili = $('#bpic').width() / $('#showbox').width();
    $('minfang').css('visibility', 'visible');
    $('bigfang').css('visibility', 'visible');
    $(this).on('mousemove', function(ev) {
        var $left = ev.pagex - $('.showall').offset().left - $('.minfang').width() / 2;
        var $top = ev.pagex - $('.showall').offset().top - $('.minfang').height() / 2;
        if ($left < 0) {
            $left = 0;
        } else if ($left >= $('#spic').width() - $('.minfang').width()) {
            $left = $('#spic').width() - $('.minfang').width();
        }
        if ($top < 0) {
            $top = 0;
        } else if ($top >= $('#spic').height() - $('.minfang').height()) {
            $top = $('#spic').height() - $('.minfang').height();
        }
        $('.minfang').css('left', $left);
        $('.minfang').css('top', $top);
        $('#bpic').css('left', -$left * bili);
        $('#bpic').css('top', -$top * bili);
    });
},
function() {
    $('.minfang').css('visibility', 'hidden');
    $('.bigfang').css('visibility', 'hidden');

}