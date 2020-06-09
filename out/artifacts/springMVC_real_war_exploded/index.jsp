<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>

    <title>springmvc学习</title>
    <script src="http://www.189.cn/dqmh/static/js/jquery/dq-jq.js"></script>
    <script type="text/javascript" src="./js/index_mvc.js"></script>

<body>

<form method="get" action="/zong/goStudyForm" name="aldenForm" id="aldenForm">
    <%--name属性名要与user实体类的属性名一致,否则找不到,为null--%>
    <input type="text" value="" name="name"/>
    <input type="text" value="" name="password"/>


    <input type="button" value="button按钮" onclick="shi()"/>
</form>
<input type="hidden" id="provinceName" value="ja"/>
<div id="ja" onclick="alert('嗲降341231级了')"></div>
<div id="ja1"><span>试试</span></div>


<%------------------------------------------------------------------------------------------------------------------------------------------%>
<%--json对象本质就是一个json字符串--%>
<%--<script type="text/javascript">




</script>--%>

</body>
</html>
