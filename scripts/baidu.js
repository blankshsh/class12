$(document).ready(function() {

//使用了单例模式，让代码显示更清晰更易读，保护内部变量。
    // 鼠标移动显示隐藏
    var hover = {
        init: function(argument) {
            var me = this;
            me.render();
            me.bind();
        },
        render: function() {
            var me = this;
            me.more = $('.more');
            me.somemore = $('#somemore');
            me.bginner = $('.wrp-bgchanges-inner');
            me.bgchange = $('.wrp-bgchanges');
            me.shownav = $("#shownav");
            me.showicon = $('.goheader-icon');
            me.gotop = $('.gomyheader');

        },
        bind: function() {
            var me = this;
            me.more.on('mouseenter', function() {
                $("#somemore").show();
            });
            me.somemore.on('mouseleave', function() {
                $("#somemore").hide(); //更多产品 鼠标走 隐藏
            });
            me.bginner.on('mouseenter', function() {
                $("#wrp-bgchanges-show").show();
            });
            me.bgchange.on('mouseleave', function() {
                $("#wrp-bgchanges-show").hide(); //更多产品 鼠标走 隐藏
            });
            me.shownav.on('click', function() {
                $('.mynav-more').slideToggle();
            });
            me.showicon.on('mouseenter', function() {
                $(".goheader-icon").hide();
                $(".gomyheader").show(); //更多产品 鼠标进 显示

            });
            me.gotop.on('mouseleave', function() {
                $(".goheader-icon").show();
                $(".gomyheader").hide(); //更多产品 鼠标走 隐藏

            });
            me.gotop.on("click", function() {
                //回到页头 
                //http://www.zhangxinxu.com/wordpress/2010/07/%E9%94%9A%E7%82%B9%E8%B7%B3%E8%BD%AC%E5%8F%8Ajquery%E4%B8%8B%E7%9B%B8%E5%85%B3%E6%93%8D%E4%BD%9C%E4%B8%8E%E6%8F%92%E4%BB%B6/?jdfwkey=tvile
                $("html,body").animate({ scrollTop: $("#myheader").offset().top }, 1000);
            })
        }
    }
    hover.init();

    //换背景
    var changebg = {
        init: function(argument) {
            var me = this;
            me.render();
            me.bind();
        },
        render: function() {
            var me = this;
            me.xyt = $('#xyt');
            me.ls = $('#ls');
            me.jeyx = $('#jeyx');
            me.old = $('#old');
        },
        bind: function() {
            var me = this;
            me.xyt.on("click", function() {
                $('.bgimg').css({
                    'background': 'url(./images/766.jpg)no-repeat',
                    'background-size': '100% 100%', //换背景
                })
                localStorage.colorstyle = "xyt"; //写入样式到localStorage
                changedemo();
            })
            me.ls.on("click", function() {
                $('.bgimg').css({
                    'background': 'url(./images/761.jpg)no-repeat',
                    'background-size': '100% 100%',
                })
                localStorage.colorstyle = "ls"; //写入样式到localStorage
                changedemo();
            })
            me.jeyx.on("click", function() {
                $('.bgimg').css({
                    'background': 'url(./images/625.jpg)no-repeat',
                    'background-size': '100% 100%',
                })
                localStorage.colorstyle = "jeyx"; //写入样式到localStorage
                changedemo();
            })
            me.old.on("click", function() {
                $('.bgimg').css({
                    'background': '#FFF',
                })
                $('.header .nav a.mnav').removeClass('newcolor').addClass('oldcolor');
                $('#changelogo').attr("src", "https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png")
                $(".wrp-bgchanges-inner").css("color", "#333");
                $(".wrp-bgchanges-more div").css("color", "#333");
                $("#changebtn").removeClass("btn").addClass("oldbtn");
                $('#myfooter').addClass('.myfooter a').addClass('.myfootercolor').addClass('.myfooter p a').removeClass('newfootercolor').removeClass('newfooter a').removeClass('newfooter p');
                localStorage.removeItem('colorstyle');
            })
        }
    }
    changebg.init();

    function changedemo() {
        $('.header .nav a.mnav').removeClass('oldcolor').addClass('newcolor'); //换字体颜色
        $('#changelogo').attr("src", "https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white.png")
            //使用新LOGO
        $(".wrp-bgchanges-inner").css("color", "#fff"); //替换字体颜色
        $(".wrp-bgchanges-more div").css("color", "#fff"); //替换字体颜色
        $("#changebtn").removeClass("oldbtn").addClass("btn"); //换按钮样式
        $('#myfooter').removeClass('.myfooter a').removeClass('.myfootercolor').removeClass('.myfooter p a').addClass('newfootercolor').addClass('newfooter a').addClass('newfooter p'); //修改底部字体信息颜色
    }
    if (localStorage.colorstyle) {
        css(localStorage.colorstyle)
    } //判断localStorage写入的样式

    function css(bgColor) { //替换样式
        switch (bgColor) {
            case 'xyt':
                $('.bgimg').css({
                    'background': 'url(./images/766.jpg)no-repeat',
                    'background-size': '100% 100%', //换背景
                })
                changedemo();
                break;
            case 'ls':
                $('.bgimg').css({
                    'background': 'url(./images/761.jpg)no-repeat',
                    'background-size': '100% 100%',
                })
                changedemo();
                break;
            case 'jeyx':
                $('.bgimg').css({
                    'background': 'url(./images/625.jpg)no-repeat',
                    'background-size': '100% 100%',
                })
                changedemo();
                break;
        }
    }
    // 经过标签变色
    var Label = {
        init: function(argument) {
            var me = this;
            me.render();
            me.bind();
        },
        render: function() {
            var me = this;
            me.label = $("#s_menus_wrapper span");
        },
        bind: function() {
            var me = this;
            me.label.each(function(index) {
                $(this).mouseover(function() {
                    $("#bgchange").removeClass("bgchanges");
                    $(this).addClass("bgchanges")
                }).mouseout(function() {
                    $("#s_menus_wrapper span").removeClass("bgchanges");
                });
            });
        }
    }
    Label.init();

    //点击切换标签页
    var changeLabel = {
        init: function(argument) {
            var me = this;
            me.render();
            me.bind();
        },
        render: function() {
            var me = this;
            me.changelabel = $("#s_menus_wrapper span");
            me.changelabelout = $("#bgchange");
        },
        bind: function() {
            var me = this;
            me.changelabel.each(function(index) {
                $(this).on('click', function() {
                    if (index == 0) {
                        changeLabeldemo();
                        $("#tj").addClass("mydisplay"); //添加显示标签内容
                        $("#bgtj").addClass("bgchanges2"); //添加选中项标签背景色
                    } else if (index == 1) {
                        changeLabeldemo();
                        $("#dh").addClass("mydisplay");
                        $("#bgdh").addClass("bgchanges2");
                    } else if (index == 2) {
                        changeLabeldemo();
                        $("#sp").addClass("mydisplay");
                        $("#bgsp").addClass("bgchanges2");
                    } else if (index == 3) {
                        changeLabeldemo();
                        $("#gw").addClass("mydisplay");
                        $("#bggw").addClass("bgchanges2");
                    }
                })
            });
            me.changelabelout.on("click", function() { //点击我的关注，隐藏别的标签页内容，显示原版标签页内容
                $(".ctner_contents .mydisplay").removeClass("mydisplay");
                $("#myindex").addClass("mydisplay");
                $("#s_menus_wrapper .bgchanges2").removeClass("bgchanges2");
                $("#bgchange").addClass("bgchanges2");
            })
        }
    }
    changeLabel.init();

    function changeLabeldemo() {
        $("#s_menus_wrapper .bgchanges2").removeClass("bgchanges2"); //删除默认第一项标签背景色
        $("#bgchange").removeClass("bgchanges2"); //删除其余标签背景色
        $(".ctner_contents .mydisplay").removeClass("mydisplay"); //删除所有标签内容显示
        $("#ctner_contents_out").addClass("ctner_contents1");
    }

})

    // var demo = {
    //         init: function(argument) {
    //             var me = this;
    //             me.render();
    //             me.bind();
    //         },
    //         render: function() {
    //             var me = this;
    //             me.btna = $('.more');
    //         },
    //         bind: function() {
    //             var me = this;
    //         }
    //     }


