function ChangePage(e)
{
    var ConterterDiv = document.getElementById("Contenter")
    var PagePath
    if(e.name == "Mic-Test-BT")
    {
        PagePath = "HTML-Files/MicTester.html"
    }
    else if(e.name == "Mouse-Test-BT")
    {
        PagePath = "HTML-Files/MouseTester.html"
    }
    else if(e.name == "Camera-Test-BT")
    {
        PagePath = "HTML-Files/CameraTester.html"
    }
    var Page = `<object class="PageObject" type="text/html" data=${PagePath}></object>`;
    ConterterDiv.innerHTML = Page
}

