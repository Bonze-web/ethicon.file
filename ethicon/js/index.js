window.onload = ()=>{
    let winWidth = document.body.clientWidth || document.documentElement.clientWidth || window.innerWidth;
    let winHeight = document.body.clientHeight || document.documentElement.clientHeight || window.innerHeight;
    //禁止页面拖拽
    document.addEventListener("touchmove", function (e) {
    e.preventDefault();
    },{
    passive:false
    });
    //第二页的轮播图
    let flag = 0;
    var mySwiper2 = new Swiper ('#swiper-two', {
        init : false,
        loop: true, // 循环模式选项
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on : {
            slideChange: function() {
                $(this.slides).addClass("op").removeClass("myseiper-ani");
                $(this.slides[this.activeIndex]).removeClass("op").addClass("myseiper-ani");
                let arrAni =  $(this.slides[this.activeIndex]).find(".job-list").children();
                for(let i =0; i<arrAni.length;i++) {
                    TweenMax.fromTo(
                        arrAni[i],
                        1,
                        {   x:600,
                        },
                        {
                            x : 0,
                            delay : 0.1 * i ,
                        },
                        
                    )
                    
                }
            },
            // init : function() {
            //     console.log(1);
            //     $(this.slides).removeClass("myseiper-ani");
            //     $(this.slides[this.activeIndex]).addClass("myseiper-ani");
            // }
        }
    })
    var mySwiper1 = new Swiper ('#swiper-one', {
        resistanceRatio : 0,
        direction: 'vertical',
        on : {
            slideChange: function() {
                //进入首页
                if(this.activeIndex==0) {
                    //首页的动画
                    TweenMax.fromTo(
                        $(".page-one .satellite"),
                        1,
                        {   opacity : 0,
                            rotationZ : 0,
                            scale : 0
                        },
                        {
                            opacity : 1,
                            rotationZ : 720,
                            scale : 1
                        }
                    )
                    $(".page-one").addClass("page-ani");
                }
                else {
                    $(".page-one").removeClass("page-ani");
                }
                if(this.activeIndex==1) {
                    mySwiper2.init();
                }
                if(this.activeIndex==2) {
                    TweenMax.fromTo(
                        $(".page-three .er-code"),
                        1,
                        {   opacity : 0,
                            rotationZ : 0,
                            scale : 0 
                        },
                        {
                            opacity : 1,
                            rotationZ : 360,
                            scale : 1,
                            delay : 0.8,
                        }
                    )
                    $(".page-three .banner-one").addClass("myseiper-ani");
                }
                else {
                    $(".page-three .banner-one").removeClass("myseiper-ani");

                }
            }
        },
        
    })  


    $(".down-arrow-one").css({top : (winHeight-35) + "px"});
    $(".swiper-button-prev").css({top : (winHeight/2) + "px"});
    $(".swiper-button-next").css({top : (winHeight/2) + "px"});
    TweenMax.fromTo(
        $(".down-arrow-one"),
        1,
        {   y : -30
        },
        {
            y : 0,
            repeat : -1
        }
    )
}