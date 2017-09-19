/**
 * Created by DongBaishun on 2017/6/3.
 */

/******************************************下为浏览器信息************************************************/
//获取浏览器相关信息
function allinfo() {
    var appName = navigator.appName; //浏览器的正式名称
    var appVersion = navigator.appVersion; //浏览器的版本号
    var cookieEnabled = navigator.cookieEnabled; // 返回用户浏览器是否启用了cookie
    var cpuClass = navigator.cpuClass; //返回用户计算机的cpu的型号，通常intel芯片返回"x86"（火狐没有）

    var mimeType = navigator.mimeTypes; // 浏览器支持的所有MIME类型的数组
    var platform = navigator.platform; // 浏览器正在运行的操作系统平台，包括Win16(windows3.x)
    //   Win32(windows98,Me,NT,2000,xp),Mac68K(Macintosh 680x0)
    //     和ＭacPPC(Macintosh PowerPC)
    var plugins = navigator.plugins; //  安装在浏览器上的所有插件的数组
    var userLanguage = navigator.userLanguage; // 用户在自己的操作系统上设置的语言（火狐没有）
    var userAgent = navigator.userAgent; //包含以下属性中所有或一部分的字符串：appCodeName,appName,appVersion,language,platform
    var systemLanguage = navigator.systemLanguage; // 用户操作系统支持的默认语言（火狐没有）

    var info = "<table border=1>";
    var type = "";
    if (isIe()) {
        type = "IE浏览器";
    } else if (isFireFox()) {
        type = "火狐浏览器";
    }
    info += "<tr><td>浏览器类型：</td><td>" + type + "</td></tr>";

    info += "<tr><td>浏览器属性信息：</td><td>" + userAgent + "</td></tr>";
    info += "<tr><td>浏览器的正式名称：</td><td>" + appName + "</td></tr>";
    info += "<tr><td>浏览器的版本号：</td><td>" + appVersion + "</td></tr>";
    info += "<tr><td>浏览器的是否启用了cookie：</td><td>" + cookieEnabled + "</td></tr>";
    info += "<tr><td>cpu等级：</td><td>" + cpuClass + "</td></tr>";
    info += "<tr><td>浏览器的MIME类型：</td><td>" + mimeType.length + "</td></tr>";
    info += "<tr><td>系统平台：</td><td>" + platform + "</td></tr>";
    info += "<tr><td>安装的插件：</td><td>" + plugins + "</td></tr>";
    info += "<tr><td>插件的数量：</td><td>" + plugins.length + "</td></tr>";
    info += "<tr><td>插件的名称：</td><td>" + getPluginName() + "</td></tr>";
    info += "<tr><td>用户设置的操作系统语言：</td><td>" + userLanguage + "</td></tr>";
    info += "<tr><td>操作系统支持的默认语言：</td><td>" + systemLanguage + "</td></tr>";
    info += "<tr><td>Director：</td><td>" + checkePlugs("Director") + "</td></tr>";
    info += "<tr><td>javaEnabled：</td><td>" + navigator.javaEnabled() + "</td></tr>";
    info += "<tr><td>是否有quickTime：</td><td>" + checkePlugs("QuickTime") + "</td></tr>";
    info += "<tr><td>flash插件情况：</td><td>" + checkePlugs('Shockwave Flash') + "</td></tr>";
    info += "<tr><td>是否有MediaPlayer：</td><td>" + checkePlugs("MediaPlayer") + "</td></tr>";
    info += "<tr><td>是否有realPlayer:</td><td>" + checkePlugs("RealPlayer") + "</td></tr>";
    info += "<tr><td>屏幕分辨率高度：</td><td>" + window.screen.height + "</td></tr>";
    info += "<tr><td>屏幕分辨率宽度：</td><td>" + window.screen.width + "</td></tr>";
    info += "<tr><td>颜色质量：</td><td>" + window.screen.colorDepth + "位</td></tr>";
    info += "<tr><td>像素：</td><td>" + window.screen.deviceXDPI + "像素/英寸</td></tr>";
    info += "<tr><td>字体是否平滑：</td><td>" + window.screen.fontSmoothingEnabled + "</td></tr>";
    //info += "<tr><td>规定浏览器是否启用数据污点：</td><td>" + navigator.taintEnabled() + "</td></tr>";
    info += "</table>";
    document.getElementById("elInfo").innerHTML = info;
    return info;

    //director

    var appCodeName = navigator.appCodeName; //与浏览器相关的内部代码名
    var appMinorVersion = navigator.appMinorVersion; //辅版本号（通常应用于浏览器的补丁或服务包)

    var language = navigator.language; //浏览器支持的语言 （IE没有）

    var onLine = navigator.onLine; //返回浏览器是否处于在线模式（IE4以上版本）

    var opsProfile = navigator.opsProfile; // 未定义   （IE、火狐没有）

    var oscpu = navigator.oscpu; //浏览器正在运行的操作系统，其中可能有CPU的信息（IE没有）

    var product = navigator.product; // 浏览器的产品名（IE没有）

    var productSub = navigator.productSub; //关于浏览器更多信息（IE没有）

    var securityPolicy = navigator.securityPolicy; // 浏览器支持的加密类型（IE没有）

    var userProfile = navigator.userProfile; //  返回一个UserProfile对象，它存储用户的个人信息（火狐没有）

    var vender = navigator.vender; // 浏览器厂商名称（IE、火狐没有）

    var vendorSub = navigator.vendorSub; // 关于浏览器厂商更多的信息

}
//获取插件所有的名称
function getPluginName() {
    var info = "";
    var plugins = navigator.plugins;
    if (plugins.length > 0) {
        for (i = 0; i < navigator.plugins.length; i++) {
            info += navigator.plugins[i].name + ";";
        }
    }
    return info;
}
//检查是否安装了某插件，如果安装了返回版本号
function checkePlugs(pluginname) {
    var f = "-"
    var plugins = navigator.plugins;
    if (plugins.length > 0) {
        for (i = 0; i < navigator.plugins.length; i++) {
            if (navigator.plugins[i].name.indexOf(pluginname) >= 0) {
                f = navigator.plugins[i].description.split(pluginname)[1];
                return f;
                break;
            }
        }
    }
    return false;
}
//判断是否IE
function isIe() {
    var i = navigator.userAgent.toLowerCase().indexOf("msie");
    return i >= 0;
}
//判断是否firefox
function isFireFox() {
    var i = navigator.userAgent.toLowerCase().indexOf("firefox");
    return i >= 0;
}