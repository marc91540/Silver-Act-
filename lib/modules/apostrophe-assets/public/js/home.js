var mail = document.getElementById('mail'),
    input = document.getElementById('input'),
    sendText = document.querySelectorAll('.send'),
    send = document.getElementById('send'),
    tick = document.getElementById('p2'),
    p1 = document.getElementById('p1');

send.addEventListener('click', function() {
  sendText[0].textContent = "Sent";
  p1.style.opacity = 0;
  tick.style.opacity = 1;
});


input.addEventListener('keydown', function() {
  var email = this.value;
  openMail();
  if(validateEmail(email)) {
    closeMail();
  }
});






var videoPlayButton,
	videoWrapper = document.getElementsByClassName('video-wrapper')[0],
    video = document.getElementsByTagName('video')[0],
    videoMethods = {
        renderVideoPlayButton: function() {
            if (videoWrapper.contains(video)) {
				this.formatVideoPlayButton()
                video.classList.add('has-media-controls-hidden')
                videoPlayButton = document.getElementsByClassName('video-overlay-play-button')[0]
                videoPlayButton.addEventListener('click', this.hideVideoPlayButton)
            }
        },

        formatVideoPlayButton: function() {
            videoWrapper.insertAdjacentHTML('beforeend', '\
                <svg class="video-overlay-play-button" viewBox="0 0 200 200" alt="Play video">\
                    <circle cx="100" cy="100" r="90" fill="none" stroke-width="15" stroke="#fff"/>\
                    <polygon points="70, 55 70, 145 145, 100" fill="#fff"/>\
                </svg>\
            ')
        },

        hideVideoPlayButton: function() {
            video.play()
            videoPlayButton.classList.add('is-hidden')
            video.classList.remove('has-media-controls-hidden')
            video.setAttribute('controls', 'controls')
        }
	}

videoMethods.renderVideoPlayButton()










function openMail() {
  mail.setAttribute('points', "2.6,55.9 60.8,5.3 118.9,56.3");
  mail.setAttribute('transform', 'translate(0,-53)');
}

function closeMail() {
  mail.setAttribute('points', "2.6,3.1 60.8,48.8 118.9,3.6");
  mail.setAttribute('transform', 'translate(0,0)');
}

function validateEmail(email) {
    var ex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return ex.test(email);
}