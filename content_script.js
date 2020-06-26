// parts taken from https://greasyfork.org/en/scripts/404718-youtube-restore-show-more-button
function restoreDetailButtons() {
  var showMoreButton = ('<button class="yt-uix-button yt-uix-button-size-default yt-uix-button-expander yt-uix-expander-head yt-uix-expander-collapsed-body yt-uix-gen204" type="button" onclick=";return false;" data-gen204="feature=watch-show-more-metadata"><span class="yt-uix-button-content">Show more</span></button>');
  var showLessButton = ('<button class="yt-uix-button yt-uix-button-size-default yt-uix-button-expander yt-uix-expander-head yt-uix-expander-body" type="button" onclick=";return false;"><span class="yt-uix-button-content">Show less</span></button>');

  if(window.location.href.indexOf("/watch") != -1) { // to avoid console errors when on the main page
    if(document.getElementsByClassName('yt-uix-button-expander').length == 0)
      document.getElementById("action-panel-details").insertAdjacentHTML('beforeend', showMoreButton + showLessButton);
  }
}

//This will restore the buttons if you load into a video page directly
if(document.getElementById("action-panel-details") != null)
  restoreDetailButtons();

//This will restore the buttons if you started from https://www.youtube.com/ and then clicked into a video from there
window.addEventListener("spfdone", restoreDetailButtons);