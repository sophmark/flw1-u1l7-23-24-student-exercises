// html elements
let button = document.querySelector("button");
let profileName = document.querySelector(".profile-name");
let profileImage = document.querySelector(".profile-image");
let main = document.querySelector(".main");

button.addEventListener("click", function() {

    // 1. Updated the innerHTML of profileName to your name or a made up one.
    profileName.innerHTML = "Tiffany Lam";
    // 2. Updated the src of profileImage a picture of you or one that makes sense.
    profileImage.src = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRrfhlD13rGYJRmde04FRLNn2AT3uApwbvOcEfa5pAdMkQA3q8w";
    // 3. Updated the src of main to a photo that's be your first post.
    main.src = "https://busites-www.s3.amazonaws.com/blog-margaritaville/2016/04/Curious_Raccoon.jpg"

});