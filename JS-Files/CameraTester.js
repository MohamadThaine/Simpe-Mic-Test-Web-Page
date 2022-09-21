let Recroding = false
let PermissionGived = false
var Stream = new MediaStream()
function RecordVideo() 
{
    var VideoPlayer = document.getElementById("VideoPlayer"); 
    if(Recroding)
    {
        VideoPlayer.srcObject = Stream;
    }
    else{
        Stream.getTracks().forEach(function(track) {
            track.stop();
          });
          VideoPlayer.srcObject = null;
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
        RecordVideo()
    } 
}

function OpenVideo()
{
    var FirstP = document.getElementById("FirstPID")
        navigator.mediaDevices
        .getUserMedia({audio: false, video: true})
        .then(function(stream) {
            Stream = stream
            RecordVideo()
        })
        .catch(function (error)
        {
            console.log(error)
            PermissionGived = false
            FirstP.innerHTML = "Please Give Permission!"
            Recroding = false
            return
        });
        PermissionGived = true
        if(!Recroding)
        {
            RecordVideo()
            return
        }   
}

