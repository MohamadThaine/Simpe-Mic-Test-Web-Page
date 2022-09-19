let Recroding = false
let PermissionGived = false
let [milliseconds,second,minute] = [0,0,0];
let TimeRecording = null;
var Stream = new MediaStream()

function RecordVideo() 
{
    if(Recroding)
    {
        VideoPlayer.srcObject = Stream;
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
        OpenVideo()
        if(PermissionGived)
        {
            FirstP.innerHTML = "Video Recording.."
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

function OpenVideo()
{
    var VideoPlayer = document.getElementById("VideoPlayer"); 
    var FirstP = document.getElementById("FirstPID")
        navigator.mediaDevices
        .getUserMedia({audio: false, video: true})
        .then(function(stream) {
            Stream = stream
            RecordVideo()
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
    RecordVideo()
    VideoPlayer.srcObject = null;
    clearInterval(TimeRecording)
}
