let Recroding = false
let PermissionGived = false
let [milliseconds,second,minute] = [0,0,0];
let TimeRecording = null;
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
            StartTimer()
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
    clearInterval(TimeRecording)
}

function StartTimer()
{
    [milliseconds,second,minute] = [0,0,0];
    if(TimeRecording != null){
        clearInterval(TimeRecording)
    }
    TimeRecording = setInterval(TimeCounter,10);

}

function TimeCounter(){
    let timerRef = document.getElementById('Time');
    
    milliseconds+=10;
    if(milliseconds == 1000){
    milliseconds = 0
    second++
    if(second == 60){
    second = 0
    minute++
    if(minute == 60){
    minute = 0}}}
    let m = minute < 10 ? "0" + minute : minute;
    let s = second < 10 ? "0" + second : second;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
    timerRef.innerHTML = ` ${m} : ${s} : ${ms}`;
}

