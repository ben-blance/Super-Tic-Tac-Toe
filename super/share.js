// ... (previous code remains the same)

// Share functionality
function shareOnTwitter() {
    const text = "I'm playing Super Tic-Tac-Toe! Check it out!";
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
}

function shareOnFacebook() {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
}

function shareOnPinterest() {
    const url = encodeURIComponent(window.location.href);
    const description = encodeURIComponent("Super Tic-Tac-Toe Game");
    // Note: For Pinterest, you should ideally have an image to share. 
    // Replace 'IMAGE_URL' with an actual image URL from your game.
    const imageUrl = encodeURIComponent('super\\photos\\image.jpg');
    window.open(`https://pinterest.com/pin/create/button/?url=${url}&media=${imageUrl}&description=${description}`, '_blank');
}

function shareOnTumblr() {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("Super Tic-Tac-Toe");
    const caption = encodeURIComponent("I'm playing Super Tic-Tac-Toe! Check it out!");
    window.open(`https://www.tumblr.com/widgets/share/tool?canonicalUrl=${url}&title=${title}&caption=${caption}`, '_blank');
}

// Add event listeners to share buttons
document.getElementById('twitter-share').addEventListener('click', shareOnTwitter);
document.getElementById('facebook-share').addEventListener('click', shareOnFacebook);
document.getElementById('pinterest-share').addEventListener('click', shareOnPinterest);
document.getElementById('tumblr-share').addEventListener('click', shareOnTumblr);

// ... (rest of the previous code remains the same)