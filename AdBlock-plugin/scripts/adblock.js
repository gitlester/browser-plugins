
var oDiv = document.getElementsByClassName("ant-affix")
if (oDiv){
    oDiv.style.display = 'none';
} else {

    var t = setInterval(function () {
        var oDiv = document.getElementsByClassName("ant-affix")
        if (!oDiv){
            return;
        }
        oDiv.style.display = 'none';
        // clearInterval(t);
    }, 10)
}
