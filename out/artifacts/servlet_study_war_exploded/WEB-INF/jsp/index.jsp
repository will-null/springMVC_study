<%@ page language="java" pageEncoding="UTF-8" %>
<html>
<head>
    <title>web下放公共页面,web-inf下放的页面用户不可见</title>
</head>
<body>

<form action="/hello" method="get">

    <input type="text" name="method"/>
    <input type="submit"/>

</form>


<ul >
    <li id="1" onclick="dianji()">
sadihasjkd
    </li>
    <li id="2" onclick="dianji()">
        sadihasjkd
    </li>
    <li id="3" onclick="dianji()">
        sadihasjkd
    </li>
</ul>

<script type="text/javascript">
    function dianji() {
         alert($(this).val(),"12123");
    }
</script>
</body>
</html>
