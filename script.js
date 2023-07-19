let song = document.getElementById("song");
let icon = document.getElementById("icon");

song.onloadedmetadata = function(){

}

function playpause(){
  if(icon.classList.contains("fa-pause")){
    song.pause();
    song.play();
    icon.classList.remove("fa-pause")
    icon.classList.add("fa-pause")
  }
  else{
    song.play();
    icon.classList.add("fa-pause")
    icon.classList.remove("fa-pause")
  }
}
