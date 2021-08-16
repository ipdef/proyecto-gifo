
let facebookicon = document.querySelector('#facebook');
let twittericon = document.querySelector('#twitter');
let instagramicon = document.querySelector('#instagram');

//facebook
facebookicon.addEventListener('mouseover', () => {
    if (localStorage.getItem("theme-mode") == "dark") {
        facebookicon.src = '/assets/facebook-icon-dark.svg';
    } else {
        facebookicon.src = '/assets/facebook-icon-hover.svg';
    }
});

facebookicon.addEventListener('mouseout', () => {
    if (localStorage.getItem("theme-mode") == "dark") {
        facebookicon.src = '/assets/facebook-icon-hover.svg';
    } else {
        facebookicon.src = '/assets/facebook-icon.svg';
    }

});

//twitter
twittericon.addEventListener('mouseover', () => {
    if (localStorage.getItem("theme-mode") == "dark") {
        twittericon.src = '/assets/twitter-icon-dark.svg';
    } else {
        twittericon.src = '/assets/twitter-icon-hover.svg';
    }

});

twittericon.addEventListener('mouseout', () => {
    if (localStorage.getItem("theme-mode") == "dark") {
        twittericon.src = '/assets/twitter-icon-hover.svg';
    } else {
        twittericon.src = '/assets/twitter-icon.svg';
    }

});


//instagram
instagramicon.addEventListener('mouseover', () => {
    if (localStorage.getItem("theme-mode") == "dark") {
        instagramicon.src = '/assets/instagram-icon-dark.svg';
    } else {
        instagramicon.src = '/assets/instagram-icon-hover.svg';
    }

});

instagramicon.addEventListener('mouseout', () => {
    if (localStorage.getItem("theme-mode") == "dark") {
        instagramicon.src = '/assets/instagram-icon-hover.svg';
    } else {
        instagramicon.src = '/assets/instagram-icon.svg';
    }

});