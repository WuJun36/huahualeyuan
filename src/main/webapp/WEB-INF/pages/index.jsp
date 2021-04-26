<%--
  Created by IntelliJ IDEA.
  User: wujun
  Date: 2021/3/31
  Time: 15:42
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <title>首页</title>
    <link rel="stylesheet" href="layui/css/layui.css" type="text/css">
    <link rel="stylesheet" href="smtown/css/common.css" type="text/css">
    <link rel="stylesheet" href="smtown/css/layout_zh.css" type="text/css">
    <link rel="stylesheet" href="smtown/css/ui.css" type="text/css">
    <script type="text/javascript" href="common/js/jquery-ui.min.js"></script>
    <script type="text/javascript" href="common/js/jquery-3.6.0.js"></script>
    <script type="text/javascript" href="common/js/common.js"></script>
</head>

<body>

<div id="wrap">
    <div id="header" class="gnb_b">
        <!-- logo -->
        <h1 class="logo"><a href="" class="ir">划划乐园</a></h1>
        <a href="#" class="menu_all_btn ir">全部菜单</a>

        <!--            导航 -->
        <ul class="gnb gnb_b clfix">
            <!-- #可以跳转到指定的锚，如果没有指定具体位置就不做跳转!-->
            <li><a href="#">Overview</a></li>
            <li><a href="#">Artist</a></li>
            <li><a href="#">Album</a></li>
            <li><a href="#">OTHER ENTERTAINMENT</a></li>
            <%--            <li><a href="#">Spotlight</a></li>--%>
            <%--            <li class="layui-nav-item"><a href="#">Overview</a></li>--%>
            <%--            <li class="layui-nav-item"><a href="#">Entertainment</a></li>--%>
            <%--            <li class="layui-nav-item"><a href="#">Spotlight</a></li>--%>
        </ul>

        <ul class="gnb gnb_c clfix">
            <li><a href="#">Press Center</a></li>
            <%--            <li><a href="#">Careers</a></li>--%>
            <li><a href="#">Contact Us</a></li>

        </ul>

        <%--        展示语言--%>
        <ul class="gnbLang">
            <%--            data-*表示元素的自定义属性，存储的自定义数据能够被页面的JavaScript中利用--%>
            <%--            这里的列表页面只会显示1条，是因为gnbLang的css属性overflow设置为了hidden--%>
            <%--            overflow规定内容溢出元素框时发生的事情（取值有auto,hidden,scroll等）--%>
            <li><a href="#" data-lang="zh">CN</a></li>
            <li><a href="#" data-lang="en">EN</a></li>
        </ul>

        <%--        下拉图层--%>
        <div class="layer">
            <div class="lang">
                <ul>
                    <li><a href="#" data-lang="zh">CN</a></li>
                    <li><a href="#" data-lang="en">EN</a></li>
                </ul>
            </div>

            <div class="menu_all">
                <ul class="d1 clfix">
                    <%--  Overview开始--%>
                    <li class="d1 bm sn1">
                        <a herf="#" class="d1">Overview<span></span></a>
                        <ul class="d2">
                            <li><a href="#">Introduction</a></li>
                            <li><a href="#">History</a></li>
                        </ul>
                    </li>
                    <%--  Overview结束--%>
                    <%--  Artist开始--%>
                    <li class="d1 bm sn2">
                        <a href="#" class="d1"><span>Artist</span></a>
                        <ul class="d2">
                            <%--    todo: 这里要从后台拿数据，写成循环--%>
                            <li><a>NCT</a></li>
                            <li><a>NCT127</a></li>
                            <li><a>NCT DREAM</a></li>
                            <li><a>WayV</a></li>

                        </ul>
                    </li>
                    <%--  Artist结束--%>
                    <%--  ALBUM开始--%>
                    <li>
                        <a><span>ALBUM</span></a>
                    </li>
                    <%--  ALBUM结束--%>
                    <%--  Other Entertainment开始--%>
                    <li>
                        <a><span>ALBUM</span></a>
                    </li>
                    <%--  Other Entertainment结束--%>
                </ul>
            </div>
        </div>


    </div>

</div>


</body>
</html>
