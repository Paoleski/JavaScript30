// get our thisents //

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');

const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');

const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

const fsButton = player.querySelector('.fullscreen');

// build our functions //

function togglePlayer() {
    if(video.paused) {
        video.play();
    } else {
        video.pause(); 
    }
}

function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}

function skip () {
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
    video[this.name] = this.value;
}

function handleProgress () {
    const percentage = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percentage}%`;
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

function fullscreen() {
    if (this.requestFullscreen) {
        this.requestFullscreen();
      } else if (this.mozRequestFullScreen) {
        this.mozRequestFullScreen();
      } else if (this.webkitRequestFullscreen) {
        this.webkitRequestFullscreen();
      } else if (this.msRequestFullscreen) { 
        this.msRequestFullscreen();
      }
}

//hook up the event listeners //

toggle.addEventListener('click', togglePlayer);

video.addEventListener('click',togglePlayer);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(button => button.addEventListener('change', handleRangeUpdate));
ranges.forEach(button => button.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;

progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

fsButton.addEventListener('click', fullscreen);

// '►' : '❚ ❚';