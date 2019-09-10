var saveswitch=function(){
    for(let i=0;i<6;i++)
    {
        if(Cookies.get(`saveindex${i}`)==undefined)
        {
            continue;
        }
        else
        {
            $(`.save-list li:eq(${i})`).children("img").attr("src",Cookies.get(`bgimg${i}`));/* 渲染存档界面的缩略图，读档同 */
            $(`.save-list li:eq(${i})`).children(".save-data").children(".save-data-text").text(Cookies.get(`text${i}`));/* 渲染存档界面的缩略句，读档同 */
        }
    }
        $(".save").fadeToggle(200);
}
var loadswtich=function(){
    for(let i=0;i<6;i++)
    {
        if(Cookies.get(`saveindex${i}`)==undefined)
        {
            continue;
        }
        else
        {
            $(`.load-list li:eq(${i})`).children("img").attr("src",Cookies.get(`bgimg${i}`));
            $(`.load-list li:eq(${i})`).children(".load-data").children(".load-data-text").text(Cookies.get(`text${i}`));
        }
    }
        $(".load").fadeToggle(200);
}

var textplay=function(){
    if(storyprocess==scene1.length)
    {

    }
    else
    {   
        $(".chat-bar-name").text(scene1[storyprocess].name);/* 渲染名字 */
        $(".chat-bar-text").text(scene1[storyprocess].text);/* 渲染对话文本 */
        if(scene1[storyprocess].characterdirect=="left")/* 判断立绘方向，渲染立绘，无立绘的位置用空白图占位 */
        {
            $(".left-character").attr("src",`img/${scene1[storyprocess].characterimg}.png`)
            $(".right-character").attr("src",`img/blank.png`)
        }
        else
        {
            $(".left-character").attr("src",`img/blank.png`)
            $(".right-character").attr("src",`img/${scene1[storyprocess].characterimg}.png`)
        }
        $(".screen").css("background-image",`url(../img/${scene1[storyprocess].backgroundimg}.png)`)/* 渲染背景图片 */
        storyprocess+=1;
    }
}
var storyback=function(){
    if(storyprocess==scene1.length)
    {

    }
    else
    {
        let currentname=$(".chat-bar-name").text();
        let currenttext=$(".chat-bar-text").text();
        $(`.textback-list li:last`).after(
            `<li>
            <h2 class="textback-name">${currentname}</h2>
            <p class="textback-text">${currenttext}</p>
            </li>`
        )
    }
}