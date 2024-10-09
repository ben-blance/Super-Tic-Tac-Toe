

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
 
    const imageUrl = encodeURIComponent('super\\photos\\image.jpg');
    window.open(`https://pinterest.com/pin/create/button/?url=${url}&media=${imageUrl}&description=${description}`, '_blank');
}

function shareOnTumblr() {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("Super Tic-Tac-Toe");
    const caption = encodeURIComponent("I'm playing Super Tic-Tac-Toe! Check it out!");
    window.open(`https://github.com/ben-blance/Super-Tic-Tac-Toe`, '_blank');
}

document.getElementById('twitter-share').addEventListener('click', shareOnTwitter);
document.getElementById('facebook-share').addEventListener('click', shareOnFacebook);
document.getElementById('pinterest-share').addEventListener('click', shareOnPinterest);
document.getElementById('tumblr-share').addEventListener('click', shareOnTumblr);

