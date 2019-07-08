//轮播图效果
class youpinhui {
    constructor() { //获取到所有轮播图相关的元素
        this.banner = $('.scroll');
        this.picul = $('.scroll .scroll_cont');
        this.picli = $('.scroll .scroll_cont .box');
        this.bthli = $('.scroll .scroll_num');
        this.left = $('.arr_left t');
        this.rigth == $('.arr_right t');
        this.num = 0;
        this.tiemr = null;
    }
    init() {
        let_this = this;
        let $first = this.picli.first().clone();
        let $last = this.picli.last().clone();
        this.picul.prepend($last);
        this.picul.append($first);
        this.liwidth = this.picli.eq(0).width();
        this.picul.width($('.scroll .scroll_cont').size() * this.liwidth).css('left', -this.liwidth);
        this.btnli.on('click', function() {
            _this.num = $(this).index(); //当前的按钮的索引
            _this.piculmove(_this.num);
            _this.btnli.eq(_this.num).addClass('current').siblings().removeClass('active');
        });
        this.banner.hover(function() {
            $('.arr_left t,.arr_right t').show();
            clearInterval(_this.tiemr);
        }, function() {
            $('.arr_left, .arr_right t').hide();
            _this.autoplay();
        });
        this.rigth.on('click', function() {
            _this.num++;
            if (_this.num === _this.bthli.length) {
                _this.bthli.eq(0).addClass('.current').siblings().removeClass('current');
            } else {
                _this.bthli.eq(_this.num).addClass('.current').siblings().removeClass('current');
            }
            _this.piculmove(_this.num);

        });
        this.left.on('click', function() {
            _this.num--;
            _this.bthli.eq(_this.num).addClass('.current').siblings().removeClass('current');
            _this.piculmove(_this.num);
        });
        this.autoplay();
    }
    autoplay() {
        let _this = this;
        this.tiemr = setInterval(function() {
            _this.rigth.click();

        }, 2000);
    }
    piculmove(index) {
        let_this

    }
    new youpinhui().init();