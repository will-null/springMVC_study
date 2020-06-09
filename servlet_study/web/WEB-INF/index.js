$(document).ready(function () {

    $(".item").niceScroll({
        // cursoropacitymin:1,
        cursorwidth: "10", //滚动条的宽度
        cursorborder: "",
        cursorcolor: '#f6ce5a',
        boxzoom: false,
        autohidemode: false,
        background: './img/scroll-out.png',
    });

    //初始化获取省份
    initProvince("", "");

    //点击省/市/区,控制样式
    $('.item li').on('click', function () {
        if (!$(this).hasClass('on')) {
            $(this).addClass('on').siblings().removeClass('on')
        }
    })

    //点击所在地区
    $('.has-more').on('click', function () {
        $(".area").show();
    });

    //点击省市区的关闭
    $('.area .dialog-close').on('click', function () {
        $(".area").hide();
    });

    //点击省市区的确定
    $('.area .btn').on('click', function () {
        //隐藏选择框
        $(".area").hide();
        //把选中的省市区显示出来
        $(".has-more input").val($("#prov_name").val()+$("#city_name").val()+$("#area_name").val());
    });

});

//获取省
function initProvince(provinceId, cityId) {
    $.ajax({
        url: '/dqmh/integrated/orderInfo.do?method=getAreaInfo&area=province&timeflg=' + (new Date()).valueOf(),
        type: 'get',
        async: false,
        dataType: "json",
        success: function (data) {
            //得到数据,插入数据
            for (var i = 0; i < data.dataObject.length; i++) {
                $(".item-opt-1").append("<li id='" + data.dataObject[i].freight_area_code + "'>" + data.dataObject[i].freight_area_name + "</li>");
            }
            //点击省,获取市
            $("#item-opt-1 li").click(function () {
                //空上一次查出的市结果
                $("#item-opt-2 ul").html("");
                //将省id放入隐藏域
                var ppid = $(this).attr("id");
                $("#prov_code").val(ppid);
                $("#prov_name").val($("'" + ppid + "'").val());
                //除上一次隐藏域的市id
                $("#city_code").val("");
                //取市
                getCitysByProvinceCode($("#prov_code").val(), "");
            });
        }
    });
}

//获取市
function getCitysByProvinceCode(provinceId, cityId) {
    $(this).val()
    $.ajax({
        url: '/dqmh/integrated/orderInfo.do?method=getAreaInfo&area=city&timeflg=' + (new Date()).valueOf(),
        type: 'get',
        async: false,
        dataType: "json",
        data: {'province': provinceId},
        success: function (data) {
            //得到数据,插入数据
            for (var i = 0; i < data.dataObject.length; i++) {
                $(".item-opt-2").append("<li id='" + data.dataObject[i].freight_area_code + "'>" + data.dataObject[i].freight_area_name + "</li>");
            }
            //点击市,获取区县
            $("#item-opt-2 li").click(function () {
                //清空上一次查出的结果
                $("#item-opt-3 ul").html("");
                //将市id放入隐藏域
                var ccid=$(this).attr("id");
                $("#city_code").val(ccid);
                $("#city_name").val($("'" + ccid + "'").val());
                //清除上一次的区县id
                $("#area_code").val("");
                //获取区/县
                getCountsByCityCode($("#prov_code").val(), $("#city_code").val());
            });
        }
    });
}

//获取区/县
function getCountsByCityCode(provinceId, cityId) {
    $.ajax({
        url: '/dqmh/integrated/orderInfo.do?method=getAreaInfo&area=county&timeflg=' + (new Date()).valueOf(),
        type: 'get',
        async: false,
        dataType: "json",
        data: {'city': provinceId, 'province': cityId},
        success: function (data) {
            //得到数据,插入数据
            for (var i = 0; i < data.dataObject.length; i++) {
                $(".item-opt-3").append("<li id='" + data.dataObject[i].freight_area_code + "'>" + data.dataObject[i].freight_area_name + "</li>");
            }
            //点击区县
            $("#item-opt-3 li").click(function () {
                //将区县id放入隐藏域
                var quid=$(this).attr("id");
                $("#area_code").val(quid);
                $("#area_name").val($("'" + quid + "'").val());
            });
        }
    });
}
