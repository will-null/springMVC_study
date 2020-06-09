$(function () {

    $("#"+$('#provinceName').val()).click();
    $("#ja1").attr("onclick","fan()");
    /*js对象*/
    var jsBean = {name: "alden", age: 18, sex: "man"};
    /*js对象转换为json对象*/
    var jj = JSON.stringify(jsBean);
    /*json对象转换为js对象*/
    var ss = JSON.parse(jj);

    console.log(jsBean);
    console.log(jj);
    console.log(ss);
})

function shi() {
    alert("button提交表单");
    $("#aldenForm").submit();
}

function fan() {
    alert("bangdingle");
}