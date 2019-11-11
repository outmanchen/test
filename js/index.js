function log(){
    alert("登陆成功！");
}
function register(){
    window.location.href="register.html"
}

/*轮播图*/
$(document).ready(function(){
    $("#header").load("header.html");
    $("#footer").load("footer.html");
    magic_number();
    let curIndex=0;//定义一个全局变量，也就是图片的索引值
    let imgLen=$(".imgList li").length;//获取图片的张数
    /*1.用定时器做一个自动播放函数，当图片索引值小于图片长度-1的时候，就让索引值自增，当它等于图片长度，也就是到最后一张图片的时候，让它为0，从第一张图片重新开始*/
    let autoChange=setInterval(function(){
        if(curIndex<imgLen-1){
            curIndex++;
        }
        else{
            curIndex=0;
        }
        changeTo(curIndex);
    },4000);
    /*2.给上一张按钮添加鼠标悬浮事件，当鼠标悬浮时，清除定时器，鼠标移开时，调用函数重新开始自动播放*/
    $("#prev").hover(function(){
        clearInterval(autoChange);
    },function(){
        autoChangeAgain();
    });
    /*3.给上一张按钮添加鼠标点击事件，当索引值>0的时候，就让它自减，否则也就是已经到第一张图片的时候让索引值为图片长度减1，也就是回到最后一张图片，再将索引值传给changeTo函数*/
    $("#prev").click(function(){
        curIndex=(curIndex>0)?(--curIndex):(imgLen-1);
        changeTo(curIndex);
    })
    /*4.给下一张按钮添加鼠标悬浮事件*/
    $("#next").hover(function(){
        clearInterval(autoChange);
    },function(){
        autoChangeAgain();
    });
    /*5.给下一张按钮绑定鼠标点击事件*/
    $("#next").click(function(){
        curIndex=(curIndex<imgLen-1)?(++curIndex):0;
        changeTo(curIndex);
    })
    /*6.给下面的文字列表绑定事件，当鼠标悬浮到某个li上面时清除定时器，移开又自动播放*/
    $(".indexList").find("li").each(function(item) {
        $(this).hover(function() {
            clearInterval(autoChange);
            changeTo(item);
            curIndex = item;
        }, function() {
            autoChangeAgain();
        });
    });
    /*7.定义一个重新自动播放函数*/
    function autoChangeAgain(){
        autoChange=setInterval(function(){
            if(curIndex<imgLen-1){
                curIndex++;
            }
            else{
                curIndex=0;
            }
            changeTo(curIndex);
        },4000);
    };
    /*8.定义一个切换图片的函数*/
    function changeTo(num){
        $(".imgList").find("li").css("display","none").eq(num).css("display","block");
        $(".infoList").find("li").removeClass("infoOn").eq(num).addClass("infoOn");
        $(".indexList").find("li").removeClass("active").eq(num).addClass("active");
    };
});

/*数字跳动*/
function magic_number() {
    var h_num = $("#hNumber");
    var n_num= $("#nNumber");
    h_num.animate({
        count: 125256
    }, {
        duration: 5000,
        step: function() {
            h_num.text(String(parseInt(this.count)));
        }

    });
    n_num.animate({
        count: 143528
    }, {
        duration: 5000,
        step: function() {
            n_num.text(String(parseInt(this.count)));
        }
    });
    h_num.text(" 125,254.4");
    n_num.text("14,352.7");
};