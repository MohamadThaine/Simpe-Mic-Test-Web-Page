let Recroding = false
let PermissionGived = false

var Stream = new MediaStream()

function RecordAudio() 
{
    if(Recroding)
    {
        RecordPlayer.srcObject = Stream;
    }
    else{
        Stream.getTracks().forEach(function(track) {
            track.stop();
          });
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
        .then(function(stream) {
            Stream = stream
            RecordAudio()
        })
        .catch(function (error)
        {
            PermissionGived = false
            FirstP.innerHTML = "Please Give Permission!"
            Recroding = false
            return
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
    RecordAudio()
    RecordPlayer.srcObject = null;
}