window.addEventListener("DOMContentLoaded", function(){

    let video = document.querySelector(".video");

    video.addEventListener("click", load_video);
    video.addEventListener("touchstart", load_video);


})



function load_video(){

    let video = document.querySelector(".video");
    
    if (video.classList.contains("ready")){
        return;
    }
    else{
    
    
    video.classList.add('ready');
    video.insertAdjacentHTML("afterbegin", '<iframe src="https://vk.com/video_ext.php?oid=-123083697&id=456240020" width="" height="" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>')
    } 
}
