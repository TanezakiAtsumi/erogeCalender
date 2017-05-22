function random(dayseed, indexseed) {
    var n = dayseed % 11117;
    for (var i = 0; i < 100 + indexseed; i++) {
        n = n * n;
        n = n % 11117; // 11117 是个质数
    }
    return n;
}

var today = new Date();
var iday = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
var weeks = ["日", "月", "火", "水", "木", "金", "土"];
var places = ["床上", "公交车上", "课堂上", "公司里", "网咖里", "卧室里", "老婆腿上"];
var tools = ["LE", "反DRM启动器", "ntleas", "VNR","Xmoe工具","喵翻", "NoDvdPatch", "kirikiroid2","ONScripter","Windows10",".NET Framework","C++ Runtime"];
var companies = ["Lass", "minori", "Circus", "feng", "柚子社", "戏画", "Lose", "KID",
 "枕社", "调色板", "Navel", "Favorite", "PULLTOP", "Spirite", "CUBE社", "Parasol", 
 "方糖", "八月社", "5pb", "RusK", "紫社",  "propeller", "NITRO + ", "月石社",
  "Liar Soft", "KID", "ensemble", "Akabeesoft", "Alcot", "同人独立制作","すたじお緑茶",
  "FrontWing","Whirlpool","ねこねこソフト","Giga","RococoWorks","Sphere","etude","AsaProject",
  "ういんどみる","ま～まれぇと","ケロＱ","HOOKSOFT","SMEE","age","BlackCyc"];
var mimes = ["纯爱作", "架空奇幻作", "拔作", "学园恋爱作", "NTR作", "和风作", "暗黑作", "燃作", "妹系作", "致郁作", "电波作", "猎奇作"];
var buys = ["挂画", "VFB", "OST碟", "抱きカバー", "描き色紙", "ドラマCD", "设定集", "系列作品", "同人音声", "钥匙扣/SD挂坠"];
var thismonth_works = ""

function is_holiday() {
    return today.getDate() >= 23;
}

function getTodayString() {
    return (today.getMonth() + 1) + "/" + today.getDate() +" " + weeks[today.getDay()];
}



function star(num) {
    var result = "";
    var i = 0;
    while (i < num) {
        result += "★";
        i++;
    }
    while (i < 5) {
        result += "☆";
        i++;
    }
    return result;
}

// 生成今日运势


function pickTodaysLuck() {
    var _activities = filter(activities);

    var numGood = random(iday, 98) % 3 + 2;
    var numBad = random(iday, 87) % 3 + 2;
    var eventArr = pickRandomActivity(_activities, numGood + numBad); //god和bad可能各出现2-4个。
    for (var i = 0; i < numGood; i++) {
        addToGood(eventArr[i]);
    }

    for (var i = 0; i < numBad; i++) {
        addToBad(eventArr[numGood + i]);
    }


    var numSpecial=findSpecials();
    var numSetday=findSetdays();
}

// 去掉一些不合今日的事件


function filter(activities) {
    var result = [];

    // 周末的话，只留下 weekend = true 的事件
    if (isWeekend()) {

        for (var i = 0; i < activities.length; i++) {
            if (activities[i].weekend) {
                result.push(activities[i]);
            }
        }

        return result;
    }

    return activities;
}

function isWeekend() {
    return today.getDay() == 0 || today.getDay() == 6;
}

function post(){
    console.log("posted")
}
function findSpecials() {
    var mday = (today.getMonth() + 1) * 100 + today.getDate();
    var atleast1=false    
    for (var i = 0; i < speciallist.length; i++) {
        var special = speciallist[i];
        _date=String(special.mdate).substring(4,8)
        //console.log("mday&_date"+mday+"  "+_date)
        if (_date== mday ) {
                //console.log("发现special："+special.name+" "+special.mdate);
                addToSpecial({name: special.name, mdate: special.mdate});
            atleast1=true
        }  
    }
    if (atleast1==false){ //一条special都没有。必须占个空位
            console.log("今天不是special day")
            //addToSpecial({name: "　　　", mdate: "　　　"});
            //addToSpecial({name: "　　　", mdate: "　　　"});
            $('.special').hide()
    }   
}



function findSetdays() {
    var mday = (today.getMonth() + 1) * 100 + today.getDate();
    var atleast1=false    
    for (var i = 0; i < setdaylist.length; i++) {
        var setday= setdaylist[i];
        _date=String(setday.mdate)
        //console.log("mday&_date"+mday+"  "+_date)
        if (_date== mday ) {
            console.log("发现setday："+setday.name+" "+setday.mdate);
                addToSetday({name: setday.name, mdate: setday.mdate});
            atleast1=true
        }  
    }
    if (atleast1==false){ //一条setday都没有。必须占个空位
            console.log("今天不是set day")
            //addToSetday({name: "　　　", mdate: "　　　"});
            //addToSetday({name: "　　　", mdate: "　　　"});
            $('.setday').hide()
    }   
}



function pickRandomActivity(activities, size) {
    var picked_events = pickRandom(activities, size);

    for (var i = 0; i < picked_events.length; i++) {
        picked_events[i] = parse(picked_events[i]);
    }

    return picked_events;
}

// 从数组中随机挑选 size 个


function pickRandom(array, size) {
    var result = [];

    for (var i = 0; i < array.length; i++) {
        result.push(array[i]); //添加一个元素
    }

    for (var j = 0; j < array.length - size; j++) {
        var index = random(iday, j) % result.length; //进行比添加操作少size次的删除操作，删除的序号随机处index
        //var index=random(0,result.length) //自己修改的
        result.splice(index, 1); //删除index处的一个元素
    }

    return result;
}

// 解析占位符并替换成随机内容


function parse(event) {
    var result = {
        name: event.name,
        good: event.good,
        bad: event.bad
    }; // clone

    if (result.name.indexOf('%t') != -1) {
        result.name = result.name.replace('%t', tools[random(iday, 11) % tools.length]);
    }

    if (result.name.indexOf('%m') != -1) {
        result.name = result.name.replace('%m', mimes[random(iday, 11) % mimes.length]);
    }

    if (result.name.indexOf('%b') != -1) {
        result.name = result.name.replace('%b', buys[random(iday, 11) % buys.length]);
    }

    return result;
}

// 添加到“宜”


function addToGood(event) {
    $('.good .content ul').append('<li><div class="name">' + event.name + '</div><div class="description">' + event.good + '</div></li>');
}

// 添加到“不宜”


function addToBad(event) {
    $('.bad .content ul').append('<li><div class="name">' + event.name + '</div><div class="description">' + event.bad + '</div></li>');
}

function addToSpecial(event){
    
    $('.special .content ul').append('<li><div class="name">' + event.name + '</div><div class="description">' + event.mdate + '</div></li>');

}

function addToSetday(event){
    
    $('.setday .content ul').append('<li><div class="name">' + event.name + '</div><div class="description">' + event.mdate + '</div></li>');

}


function addToNews(news){
      console.log("add to news"+news)
      $('.news').append(news);
  
}
function plusReady() { //获取当前应用的版本号
    // ......
    // 获取本地应用资源版本号
    plus.runtime.getProperty(plus.runtime.appid, function(inf) {
        thisVer = inf.version;
        console.log("当前应用版本：" + thisVer);
        checkNews();
        checkUpdate(); //会自动执行后面的plusReady downWgt installWgt


    });
    
}


function clientSideInclude(id, url) {
    var req = false;
    // Safari, Firefox, 及其他非微软浏览器
    if (window.XMLHttpRequest) {
        try {
            req = new XMLHttpRequest();
        } catch(e) {
            req = false;
        }
    } else if (window.ActiveXObject) {
        // For Internet Explorer on Windows
        try {
            req = new ActiveXObject("Msxml2.XMLHTTP");
        } catch(e) {
            try {
                req = new ActiveXObject("Microsoft.XMLHTTP");
            } catch(e) {
                req = false;
            }
        }
    }
    var element = document.getElementById(id);
    if (!element) {
        showtips("函数clientSideInclude无法找到id " + id + "。" + "你的网页中必须有一个含有这个id的div 或 span 标签。");
        return;
    }
    if (req) {
        // 同步请求，等待收到全部内容
        req.open('GET', url, false);
        req.send(null);
        element.innerHTML = req.responseText;
    } else {
        element.innerHTML = "对不起，你的浏览器不支持" + "XMLHTTPRequest 对象。这个网页的显示要求" + "Internet Explorer 5 以上版本, " + "或 Firefox 或 Safari 浏览器，也可能会有其他可兼容的浏览器存在。";
    }
}




function checkNews() {
    var newsUrl="https://coding.net/u/ctk/p/ErogeCalender/git/raw/master/news.php"
    var nhr = new XMLHttpRequest();
     console.log("获取在线新闻...") 
    nhr.onreadystatechange = function() {
        switch (nhr.readyState) {
        case 4:
            plus.nativeUI.closeWaiting();
            if (nhr.status == 200) {
                console.log("获取在线新闻成功：" + nhr.responseText);
                var news = nhr.responseText;
                addToNews(news)
            } else {
                console.log("获取在线新闻失败。");
                plus.nativeUI.alert("获取在线新闻失败。你也可以去看看微博@刻乃雲 @纱布蜗牛 @雲雀丘瑠璃 @摘希喵唔 @藤森雪奈 @Rinkry 等大佬最近转发的黄油新闻。");
                
            }

        default:
            console.log("READY STATE CASE"+nhr.readyState)
            break;
        }
    }
    nhr.open('GET', newsUrl); //获取更新包
    nhr.send();


}



function checkUpdate() {
    var checkUrl = "https://coding.net/u/ctk/p/ErogeCalender/git/raw/master/newversion.php"
    console.log("检测更新...") 
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        switch (xhr.readyState) {
        case 4:
            plus.nativeUI.closeWaiting();
            if (xhr.status == 200) {
                console.log("检测更新成功：" + xhr.responseText);
                var newVer = xhr.responseText;
                console.log("thisVer "+thisVer+"    newVer "+newVer)

                if (thisVer && newVer && (thisVer != newVer)) {
                    plus.nativeUI.alert("当前版本"+thisVer+"，检测到新版本"+newVer+"，开始更新。");
                    console.log("下载新版本。）");
                    downWgt(); // 下载升级包
                } else {
                    //plus.nativeUI.alert("无新版本可更新。");
                    console.log("……无新版本可更新。");
                }
            } else {
                console.log("检测更新失败。");
                plus.nativeUI.alert("喵喵喵？检测更新失败。");
            }
            break;
        default:
            break;
        }
    }
    xhr.open('GET', checkUrl); //获取更新包
    xhr.send();

}


// 下载增量更新文件 (从服务器下载应用资源包（增量更新文件）)
function downWgt() {
    var wgtUrl = "https://coding.net/u/ctk/p/ErogeCalender/git/raw/master/update.wgt";

    plus.nativeUI.showWaiting("喵呜~下载增量更新文件...");
    plus.downloader.createDownload(wgtUrl, {
        filename: "_doc/update/"
    }, function(d, status) {
        if (status == 200) {
            console.log("下载增量更新文件成功：" + d.filename);
            installWgt(d.filename); // 安装wgt包
        } else {
            console.log("下载增量更新文件失败。");
            plus.nativeUI.alert("喵……下载增量更新文件失败。");
        }
        plus.nativeUI.closeWaiting();
    }).start();
}


//更新应用资源包（增量更新文件）
// 更新应用资源

function installWgt(path) {

    plus.nativeUI.showWaiting("喵喵喵喵……增量更新中...");
    plus.runtime.install(path, {}, function() {
        plus.nativeUI.closeWaiting();
        console.log("增量更新成功。");
        plus.nativeUI.alert("喵！应用更新完成。", function() {
            plus.runtime.restart();
        });
    }, function(e) {
        plus.nativeUI.closeWaiting();
        console.log("安装增量更新文件失败[" + e.code + "]：" + e.message);
        //plus.nativeUI.alert("安装增量更新文件失败[" + e.code + "]：" + e.message);
    });

}

/*
function killerrors() { return true; }
window.onerror = killerrors;
*/
/*
    plus.nativeUI.alert("获取在线新闻...");
    var tip=""
    if (is_holiday()) {
        tip = "月末将至，准备爆肝了吗？注意身体健康。 ";
    }
    else{
        tip=""
    }
*/

//获取新闻





$(function() {
    $('.searchkey').blur()
    $('.date').html(getTodayString());
    $('.place_value').html(places[random(iday, 1) % places.length]);
    $('.company_value').html(pickRandom(companies, 2).join('，'));
    $('.mime_value').html(pickRandom(mimes, 1).join('，'));
    $('.buy_value').html(pickRandom(buys, 1).join('，'));
    pickTodaysLuck();
    var thisVer = null;
    if (window.plus) {
        plusReady(); //检测更新和获取新闻
    } else {
        document.addEventListener('plusready', plusReady, false);
   
    }
  

});

$(function() {
    if(("standalone" in window.navigator) && window.navigator.standalone){

    var noddy, remotes = true; //prevent remote links in standalone web apps opening Mobile Safari
    document.addEventListener('click', function(event) {

        noddy = event.target;
        while(noddy.nodeName !== "A" && noddy.nodeName !== "HTML") {
            noddy = noddy.parentNode;
        }

        if('href' in noddy && noddy.href.indexOf('http') !== -1 && (noddy.href.indexOf(document.location.host) !== -1 || remotes))
        {
            event.preventDefault();
            document.location.href = noddy.href;
        }

    },false);
}
});

$(function(){
    $('.searchbox').bind('keypress',function(event){
        if(event.keyCode == "13")    
        {
         //$('div.tips' ).html($('#searchbox').val())
         showtips()

        }
    });
});

function createDataDiv(tips){ //显示资料

    var windowWidth = document.documentElement.clientWidth; 
    var tipsDiv = '<div class="tips" id="tips">' + tips + '</div>'; 

    $( '.searchbox' ).append( tipsDiv ); 
    $('div.tips' ).hide()
    
    $('div.tips' ).attr("onclick","setTimeout( function(){$('div.tips' ).fadeOut();}, (10000) ); ") //nice!
}

function showtips(text){
    $('div.tips' ).html("test test")
    $('div.tips' ).show(text)
}

$(document).ready(function(){
    jQuery.searchbox = function(focusdom,focuswidthnew,animatetime) {
        var searchboxid = $(focusdom);

        var element =document.getElementById('tips');
        if (!element)
        {
            createDataDiv();
            //alert('re create data div')
        }
        //searchboxid.blur()
        //searchboxid.focus()
        var defval = searchboxid.val();
        var defwidth = searchboxid.width();
        searchboxid.focus(function(){
            var thisval = $(this).val();
            if(thisval==defval){
                $(this).val("");
                $(this).animate({width:"+"+focuswidthnew}, defwidth).addClass("searchkeyfocus");

            }
            $(".date").html("搜索作品/人物/日期");
            
        });
        searchboxid.blur(function(){
            var thisval = $(this).val();
            if(thisval==""){
                $(this).val(defval);
            }
            $(this).animate({width:"+"+focuswidthnew}, defwidth).removeClass("searchkeyfocus");
            $('.date').html(getTodayString());
            //$('.searchbox').hide()

        });
        
    };
    $.searchbox("#searchkey","240px","200");
});
