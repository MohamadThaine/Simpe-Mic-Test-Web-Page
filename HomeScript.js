let Recroding = false
let PermissionGived = false
function RecordAudio(stream) 
{
    if (window.URL) {
        RecordPlayer.srcObject = stream;
    } else {
        RecordPlayer.src = stream;
    }
}

function RecordBTClicked(e)
{
    var FirstP = document.getElementById("FirstPID")
    if(!Recroding)
    {
        RecordMic()
        if(PermissionGived)
        {
            FirstP.innerHTML = "Recording... (Click Record button Again to stop recording)"
            Recroding = true
        }
    }
    else
    {
        FirstP.innerHTML = "Stopped Recording"
        Recroding = false
        StopRecording()
    } 
}

function RecordMic()
{
    var RecordPlayer = document.getElementById("RecordPlayer"); 
    var FirstP = document.getElementById("FirstPID")
        navigator.mediaDevices
        .getUserMedia({audio: true, video: false})
        .then(RecordAudio)
        .catch(function (error)
        {
            PermissionGived = false
            FirstP.innerHTML = "Please Give Permission!"
            Recroding = false
        });
        PermissionGived = true
        if(!Recroding)
        {
            StopRecording()
            return
        }
          
}

function StopRecording()
{
    RecordPlayer.srcObject = null;
}