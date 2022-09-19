let i = 0

function OnMouseDown()
{
    let ButtonPressed = "You Clicked "
    let Counter = document.getElementById("TimesClicked")
    i = i + 1
    Counter.innerHTML = i
    switch (event.which) {
        case 1:
            ButtonPressed += "Left Button"
            break;
        case 2:
            ButtonPressed += "Middle Button"
            break;
        case 3:
            ButtonPressed += "Right Button"
            break;
        default:
            ButtonPressed += "Side Button"
    }
    document.getElementById("ButtonClicked").innerHTML = ButtonPressed
}