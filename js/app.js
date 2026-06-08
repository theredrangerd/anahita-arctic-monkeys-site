// Playlist Database
const playlist = [
    {
        trackName: "R U Mine?",
        artistName: "Arctic Monkeys",
        albumName: "AM",
        artworkUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/29/f5/6f/29f56fb2-4735-947b-f63a-2801294719cb/am_am_itunes_bonus_v2.jpg/500x500bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/f5/67/30/f56730d2-00e5-a705-9610-47e47e61ae55/mzaf_5041619801237384242.plus.aac.p.m4a",
        durationMs: 201726
    },
    {
        trackName: "Brianstorm",
        artistName: "Arctic Monkeys",
        albumName: "Favourite Worst Nightmare",
        artworkUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/82/90/14/829014ad-a301-62ab-bee6-f4cca4457411/mzi.hozudery.jpg/500x500bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/e1/97/57/e19757c1-f9d1-af9e-a416-3d7630942b76/mzaf_11885874818600202193.plus.aac.p.m4a",
        durationMs: 172267
    },
    {
        trackName: "Teddy Picker",
        artistName: "Arctic Monkeys",
        albumName: "Favourite Worst Nightmare",
        artworkUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/82/90/14/829014ad-a301-62ab-bee6-f4cca4457411/mzi.hozudery.jpg/500x500bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/32/78/8d/32788d81-03c3-d9af-2c62-12786a8dc96a/mzaf_17442629101130559382.plus.aac.p.m4a",
        durationMs: 160640
    },
    {
        trackName: "D Is for Dangerous",
        artistName: "Arctic Monkeys",
        albumName: "Favourite Worst Nightmare",
        artworkUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/82/90/14/829014ad-a301-62ab-bee6-f4cca4457411/mzi.hozudery.jpg/500x500bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/60/6f/69/606f699a-97b7-6aa1-295a-0bb783f42d1e/mzaf_4230160439777941729.plus.aac.p.m4a",
        durationMs: 134733
    },
    {
        trackName: "Balaclava",
        artistName: "Arctic Monkeys",
        albumName: "Favourite Worst Nightmare",
        artworkUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/82/90/14/829014ad-a301-62ab-bee6-f4cca4457411/mzi.hozudery.jpg/500x500bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/8f/d4/ac/8fd4acb6-872f-5945-4634-2002cb600235/mzaf_12299651862832239471.plus.aac.p.m4a",
        durationMs: 167440
    },
    {
        trackName: "Fluorescent Adolescent",
        artistName: "Arctic Monkeys",
        albumName: "Favourite Worst Nightmare",
        artworkUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/82/90/14/829014ad-a301-62ab-bee6-f4cca4457411/mzi.hozudery.jpg/500x500bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/73/16/bb/7316bba4-ae41-8fb9-8a6e-1e737cc44a20/mzaf_2943205879925572742.plus.aac.p.m4a",
        durationMs: 173493
    },
    {
        trackName: "Only Ones Who Know",
        artistName: "Arctic Monkeys",
        albumName: "Favourite Worst Nightmare",
        artworkUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/82/90/14/829014ad-a301-62ab-bee6-f4cca4457411/mzi.hozudery.jpg/500x500bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/c7/60/48/c760480b-3a32-f59c-0e4d-6baf7a787185/mzaf_9466669878113829474.plus.aac.p.m4a",
        durationMs: 181480
    },
    {
        trackName: "Do Me a Favour",
        artistName: "Arctic Monkeys",
        albumName: "Favourite Worst Nightmare",
        artworkUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/82/90/14/829014ad-a301-62ab-bee6-f4cca4457411/mzi.hozudery.jpg/500x500bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/2b/b9/35/2bb9354d-65aa-fc8e-772e-640481622b0d/mzaf_11897902491338464202.plus.aac.p.m4a",
        durationMs: 205240
    },
    {
        trackName: "This House Is a Circus",
        artistName: "Arctic Monkeys",
        albumName: "Favourite Worst Nightmare",
        artworkUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/82/90/14/829014ad-a301-62ab-bee6-f4cca4457411/mzi.hozudery.jpg/500x500bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/1a/04/a4/1a04a4bd-b578-8aaf-8f49-4355ba6f07a2/mzaf_11776015830355249620.plus.aac.p.m4a",
        durationMs: 189680
    },
    {
        trackName: "If You Were There, Beware",
        artistName: "Arctic Monkeys",
        albumName: "Favourite Worst Nightmare",
        artworkUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/82/90/14/829014ad-a301-62ab-bee6-f4cca4457411/mzi.hozudery.jpg/500x500bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/1e/65/9c/1e659c32-4c67-96aa-c951-e9e8bd83e821/mzaf_1716943700983483283.plus.aac.p.m4a",
        durationMs: 274200
    },
    {
        trackName: "The Bad Thing",
        artistName: "Arctic Monkeys",
        albumName: "Favourite Worst Nightmare",
        artworkUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/82/90/14/829014ad-a301-62ab-bee6-f4cca4457411/mzi.hozudery.jpg/500x500bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/28/ad/33/28ad33e3-1a67-644d-d881-779b192d6ecd/mzaf_8460692162467386755.plus.aac.p.m4a",
        durationMs: 143213
    },
    {
        trackName: "Old Yellow Bricks",
        artistName: "Arctic Monkeys",
        albumName: "Favourite Worst Nightmare",
        artworkUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/82/90/14/829014ad-a301-62ab-bee6-f4cca4457411/mzi.hozudery.jpg/500x500bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/d4/7f/91/d47f913c-5733-549e-0676-77618dd4d925/mzaf_7728581621419217367.plus.aac.p.m4a",
        durationMs: 187133
    },
    {
        trackName: "505",
        artistName: "Arctic Monkeys",
        albumName: "Favourite Worst Nightmare",
        artworkUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/82/90/14/829014ad-a301-62ab-bee6-f4cca4457411/mzi.hozudery.jpg/500x500bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/32/bc/c1/32bcc1f1-f812-e765-5b4e-340e5c9ab373/mzaf_7885353230840382876.plus.aac.p.m4a",
        durationMs: 253587
    }
];

// Audio State
let audio = document.getElementById("audio-player");
let currentTrackIndex = 0;
let isPlaying = false;
let isShuffle = false;
let isLoop = false;

// Audio Visualizer Context
let audioCtx;
let analyser;
let sourceNode;
let dataArray;
let isVisualizerSetup = false;

// DOM Elements
const introScreen = document.getElementById("intro-screen");
const enterBtn = document.getElementById("enter-btn");
const mainContent = document.getElementById("main-content");
const playPauseBtn = document.getElementById("play-pause-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const shuffleBtn = document.getElementById("shuffle-btn");
const loopBtn = document.getElementById("loop-btn");
const progressBar = document.getElementById("progress-bar");
const volumeBar = document.getElementById("volume-bar");
const currentTimeLabel = document.getElementById("current-time");
const totalDurationLabel = document.getElementById("total-duration");
const playerArt = document.getElementById("player-art");
const playerTrackName = document.getElementById("player-track-name");
const playerArtist = document.getElementById("player-artist");
const playlistContainer = document.getElementById("playlist-list");
const rooms = document.querySelectorAll(".room");
const waveBars = document.querySelectorAll(".wave-bar");

// Setup CORS on Audio for Web Audio API
audio.crossOrigin = "anonymous";

// 1. Navigation Flow
function navigateToSection(targetId) {
    // Update navigation UI
    document.querySelectorAll(".nav-link").forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("data-section") === targetId) {
            link.classList.add("active");
        }
    });
    
    // Toggle Sections
    document.querySelectorAll(".content-section").forEach(sec => sec.classList.remove("active"));
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        targetSection.classList.add("active");
    }
    
    // Push State
    window.history.pushState(null, "", `#${targetId}`);
    
    // Fire confetti when entering the Gift tab
    if (targetId === "gift" && typeof fireConfetti === "function") {
        setTimeout(fireConfetti, 400);
    }
}

// Bind navigation clicks to any anchor linking to a hash section
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        if (targetId) {
            navigateToSection(targetId);
        }
    });
});

// 2. Initialize App on "Enter" Button Click
enterBtn.addEventListener("click", () => {
    // Fade out introduction screen
    introScreen.classList.add("fade-out");
    setTimeout(() => {
        introScreen.classList.add("hidden");
    }, 850);
    
    mainContent.classList.remove("hidden");
    
    // Set up Web Audio API Context (Must be user gesture)
    initAudioContext();
    
    // Play default song (R U Mine?)
    loadTrack(0);
    playTrack();
});

// 3. Audio Context & Beat Visualizer Initialization
function initAudioContext() {
    if (isVisualizerSetup) return;
    
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioCtx = new AudioContext();
        analyser = audioCtx.createAnalyser();
        analyser.fftSize = 64; // Low fftSize for responsive grid animations and simple bars
        
        sourceNode = audioCtx.createMediaElementSource(audio);
        sourceNode.connect(analyser);
        analyser.connect(audioCtx.destination);
        
        const bufferLength = analyser.frequencyBinCount;
        dataArray = new Uint8Array(bufferLength);
        
        isVisualizerSetup = true;
        renderVisualizer();
    } catch (e) {
        console.warn("Web Audio API not supported or blocked: ", e);
    }
}

// 4. Beat Visualizer Frame Loop
function renderVisualizer() {
    if (!isVisualizerSetup) return;
    
    requestAnimationFrame(renderVisualizer);
    
    if (!isPlaying) {
        // Reset wave heights if music is paused
        waveBars.forEach(bar => bar.style.height = "4px");
        return;
    }
    
    analyser.getByteFrequencyData(dataArray);
    
    // Animate custom sidebar visualizer bars (5 bars)
    for (let i = 0; i < waveBars.length; i++) {
        // Grab frequency data values, scaling heights
        let dataIndex = Math.floor(i * (dataArray.length / waveBars.length));
        let value = dataArray[dataIndex];
        let percent = (value / 255) * 100;
        waveBars[i].style.height = `${Math.max(4, percent * 0.75)}px`;
    }
    
    // Dynamic lighting effect for the interactive houses matching low/mid beats!
    let bassValue = dataArray[1] || 0; // Low frequency bass beat
    let midValue = dataArray[5] || 0;  // Mid range frequency vocals/guitar
    
    let scaleFactor = 1 + (bassValue / 255) * 0.08;
    let opacityFactor = 0.2 + (midValue / 255) * 0.8;
    
    // Pulse the glowing shadow on the currently playing room
    const activeRoom = document.querySelector(`.room.playing-active`);
    if (activeRoom) {
        activeRoom.style.transform = `scale(${scaleFactor})`;
        activeRoom.querySelector(".room-glow-bg").style.opacity = opacityFactor;
        activeRoom.style.boxShadow = `0 0 ${20 + (bassValue / 255) * 20}px var(--room-color)`;
    }
}

// 5. Audio Control Engine
function loadTrack(index) {
    currentTrackIndex = index;
    const track = playlist[index];
    
    audio.src = track.previewUrl;
    playerTrackName.textContent = track.trackName;
    playerArtist.textContent = track.artistName;
    playerArt.src = track.artworkUrl;
    
    // Update playlist index active state
    updatePlaylistUI();
    updateHouseActiveUI(index);
    
    progressBar.value = 0;
    currentTimeLabel.textContent = "0:00";
    
    // Reset visualizer bars
    waveBars.forEach(bar => bar.style.height = "4px");
}

function playTrack() {
    if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    
    audio.play().then(() => {
        isPlaying = true;
        document.querySelector(".player-panel").classList.add("playing");
        playPauseBtn.querySelector("[data-lucide]").setAttribute("data-lucide", "pause");
        lucide.createIcons();
    }).catch(err => {
        console.error("Playback error: ", err);
    });
}

function pauseTrack() {
    audio.pause();
    isPlaying = false;
    document.querySelector(".player-panel").classList.remove("playing");
    playPauseBtn.querySelector("[data-lucide]").setAttribute("data-lucide", "play");
    lucide.createIcons();
    
    // Reset rooms visual scales
    rooms.forEach(r => {
        r.style.transform = "";
        r.style.boxShadow = "";
    });
}

playPauseBtn.addEventListener("click", () => {
    if (isPlaying) {
        pauseTrack();
    } else {
        playTrack();
    }
});

prevBtn.addEventListener("click", () => {
    let newIndex = currentTrackIndex - 1;
    if (newIndex < 0) newIndex = playlist.length - 1;
    loadTrack(newIndex);
    playTrack();
});

nextBtn.addEventListener("click", () => {
    playNextTrack();
});

function playNextTrack() {
    if (isShuffle) {
        let randomIndex = Math.floor(Math.random() * playlist.length);
        loadTrack(randomIndex);
    } else {
        let newIndex = currentTrackIndex + 1;
        if (newIndex >= playlist.length) newIndex = 0;
        loadTrack(newIndex);
    }
    playTrack();
}

shuffleBtn.addEventListener("click", () => {
    isShuffle = !isShuffle;
    shuffleBtn.classList.toggle("active", isShuffle);
});

loopBtn.addEventListener("click", () => {
    isLoop = !isLoop;
    loopBtn.classList.toggle("active", isLoop);
});

// Update audio time displays
audio.addEventListener("timeupdate", () => {
    if (audio.duration) {
        const percent = (audio.currentTime / audio.duration) * 100;
        progressBar.value = percent;
        
        currentTimeLabel.textContent = formatTime(audio.currentTime);
        totalDurationLabel.textContent = formatTime(audio.duration);
    }
});

progressBar.addEventListener("input", () => {
    if (audio.duration) {
        const newTime = (progressBar.value / 100) * audio.duration;
        audio.currentTime = newTime;
    }
});

volumeBar.addEventListener("input", () => {
    audio.volume = volumeBar.value / 100;
    
    const icon = document.getElementById("volume-icon");
    if (audio.volume === 0) {
        icon.setAttribute("data-lucide", "volume-x");
    } else if (audio.volume < 0.5) {
        icon.setAttribute("data-lucide", "volume-1");
    } else {
        icon.setAttribute("data-lucide", "volume-2");
    }
    lucide.createIcons();
});

audio.addEventListener("ended", () => {
    if (isLoop) {
        audio.currentTime = 0;
        playTrack();
    } else {
        playNextTrack();
    }
});

function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
}

// 6. Interactive Playlist Builder
function buildPlaylist() {
    playlistContainer.innerHTML = "";
    playlist.forEach((track, index) => {
        const item = document.createElement("div");
        item.className = "playlist-item";
        item.setAttribute("data-index", index);
        
        item.innerHTML = `
            <div class="playlist-item-left">
                <span class="track-num">${index === 0 ? "★" : index}</span>
                <img class="track-thumb" src="${track.artworkUrl}" alt="${track.trackName}">
                <div class="track-meta">
                    <span class="track-title">${track.trackName}</span>
                    <span class="track-artist">${track.artistName}</span>
                </div>
            </div>
            <div class="track-right">
                <span class="track-length">${formatTime(track.durationMs / 1000)}</span>
                <span class="playing-icon"><i data-lucide="music-4" class="text-cyan"></i></span>
            </div>
        `;
        
        item.addEventListener("click", () => {
            loadTrack(index);
            playTrack();
        });
        
        playlistContainer.appendChild(item);
    });
    lucide.createIcons();
}

function updatePlaylistUI() {
    const items = document.querySelectorAll(".playlist-item");
    items.forEach((item, index) => {
        item.classList.remove("active", "playing-state");
        if (index === currentTrackIndex) {
            item.classList.add("active");
            if (isPlaying) {
                item.classList.add("playing-state");
            }
        }
    });
}

// 7. Interactive House Window Panels UI Bindings
rooms.forEach(room => {
    room.addEventListener("click", function() {
        const trackIndex = parseInt(this.getAttribute("data-track-index"), 10);
        
        // Go to tracks layout view
        navigateToSection("tracks");
        
        // Load & Play
        loadTrack(trackIndex);
        playTrack();
    });
});

function updateHouseActiveUI(index) {
    rooms.forEach(room => {
        room.classList.remove("playing-active");
        room.style.transform = "";
        room.style.boxShadow = "";
        
        const trackIndex = parseInt(room.getAttribute("data-track-index"), 10);
        if (trackIndex === index && isPlaying) {
            room.classList.add("playing-active");
        }
    });
}

// Track state hooks to update visual states
audio.addEventListener("play", () => {
    updatePlaylistUI();
    updateHouseActiveUI(currentTrackIndex);
});
audio.addEventListener("pause", () => {
    updatePlaylistUI();
    updateHouseActiveUI(currentTrackIndex);
});

// 8. Birthday Gift Custom Features

function fireConfetti() {
    if (typeof confetti !== "function") return;
    const duration = 2.5 * 1000;
    const end = Date.now() + duration;
    const colors = ['#ff007f', '#f2ec30', '#00e5ff', '#39ff14', '#ff5500'];

    (function frame() {
        confetti({
            particleCount: 3,
            angle: 60,
            spread: 55,
            origin: { x: 0, y: 0.8 },
            colors: colors
        });
        confetti({
            particleCount: 3,
            angle: 120,
            spread: 55,
            origin: { x: 1, y: 0.8 },
            colors: colors
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}

// Make It Rain Celebration Confetti
const celebrateBtn = document.getElementById("celebrate-btn");

celebrateBtn.addEventListener("click", () => {
    fireConfetti();
});

// Play Airhorn Sound Effect with volume ducking
const airhornBtn = document.getElementById("airhorn-btn");
const airhornSound = new Audio("assets/audio/airhorn.mp3");
let originalVolume = null;
let airhornTimeout;
let airhornSource = null;
let airhornGainNode = null;

airhornBtn.addEventListener("click", () => {
    // Capture the current song volume (if not already in a spam click sequence)
    if (originalVolume === null) {
        originalVolume = audio.volume;
    }
    
    // Clear any pending volume restoration
    clearTimeout(airhornTimeout);
    
    // Duck the background song volume to 10%
    audio.volume = originalVolume * 0.1;
    
    // Set up Web Audio gain booster for the airhorn if AudioContext is active
    if (isVisualizerSetup && audioCtx) {
        if (!airhornSource) {
            try {
                airhornSource = audioCtx.createMediaElementSource(airhornSound);
                airhornGainNode = audioCtx.createGain();
                airhornGainNode.gain.value = 4.0; // Boost volume to 400% (extra loud and crunchy!)
                airhornSource.connect(airhornGainNode);
                airhornGainNode.connect(audioCtx.destination);
            } catch (e) {
                console.warn("Web Audio booster setup failed, playing default: ", e);
            }
        }
    }
    
    // Play airhorn sound at full volume
    airhornSound.volume = 1.0;
    airhornSound.currentTime = 0;
    airhornSound.play().catch(err => console.warn("Airhorn playback blocked: ", err));
    
    // Restore original song volume after airhorn ends (approx 2.5 seconds)
    airhornTimeout = setTimeout(() => {
        audio.volume = originalVolume;
        originalVolume = null;
    }, 2500);
});

// 8b. Futures Constellation Web Logic

const inspiredArtists = {
    "the-1975": {
        name: "The 1975",
        track: "Chocolate",
        tagColor: "text-pink",
        lineClass: ".line-pink",
        art: "assets/images/the-1975.png",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/34/e3/c8/34e3c82d-0ee1-f99b-46a0-4f301e9bf402/mzaf_2280803233537693313.plus.aac.p.m4a",
        bio: "Matty Healy frequently cites Alex Turner's verbose, conversational lyricism as the prime inspiration behind the band's wordy, upbeat indie hits."
    },
    "sam-fender": {
        name: "Sam Fender",
        track: "Seventeen Going Under",
        tagColor: "text-cyan",
        lineClass: ".line-cyan",
        art: "assets/images/sam-fender.png",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/91/9f/f6/919ff692-9bf7-365b-7f67-ba370ad8f449/mzaf_740368481061695982.plus.aac.p.m4a",
        bio: "Fender's punchy drums, driving guitar textures, and energetic rock tempo draw heavily from the raw, urban indie sound of 'Favourite Worst Nightmare'."
    },
    "fontaines-dc": {
        name: "Fontaines D.C.",
        track: "Boys in the Better Land",
        tagColor: "text-green",
        lineClass: ".line-green",
        art: "assets/images/fontaines-dc.png",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview114/v4/dc/c7/64/dcc76421-7759-4c44-7e18-6e4d20f11133/mzaf_5068652723691403061.plus.aac.p.m4a",
        bio: "The Dublin post-punk group matches the urgent grit, rapid-fire rhythmic phrasing, and observational street-wisdom of early Arctic Monkeys singles."
    },
    "catfish": {
        name: "Catfish & The Bottlemen",
        track: "Kathleen",
        tagColor: "text-yellow",
        lineClass: ".line-yellow",
        art: "assets/images/catfish.png",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/9a/da/b5/9adab5f3-bf16-31d8-f17d-8fc2ec634c52/mzaf_10356214433781775763.plus.aac.p.m4a",
        bio: "Fusing massive garage-rock riffs and angsty, chorus-driven hooks, they built their entire early career on the foundations of mid-2000s British indie rock."
    }
};

const infoDrawer = document.getElementById("node-info-drawer");
const closeDrawerBtn = document.getElementById("close-drawer-btn");
const drawerArt = document.getElementById("drawer-art");
const drawerArtistTag = document.getElementById("drawer-artist-tag");
const drawerArtistName = document.getElementById("drawer-artist-name");
const drawerBio = document.getElementById("drawer-bio");
const drawerPlayBtn = document.getElementById("drawer-play-btn");
const drawerTrackTitle = document.getElementById("drawer-track-title");

let selectedArtistData = null;

// Bind inspired node clicks
document.querySelectorAll(".inspired-node").forEach(node => {
    node.addEventListener("click", function() {
        const artistKey = this.getAttribute("data-artist");
        
        // Remove line active highlight from all lines
        document.querySelectorAll(".constellation-line").forEach(l => l.classList.remove("line-active"));
        
        if (artistKey === "tyler") {
            infoDrawer.classList.remove("active");
            setTimeout(() => {
                infoDrawer.classList.add("hidden");
            }, 500);
            triggerTylerTakeover();
            return;
        }
        
        const artist = inspiredArtists[artistKey];
        if (artist) {
            selectedArtistData = artist;
            
            // Highlight connecting SVG line
            const line = document.querySelector(artist.lineClass);
            if (line) line.classList.add("line-active");
            
            // Fill drawer contents
            drawerArt.src = artist.art;
            drawerArtistName.textContent = artist.name;
            drawerBio.textContent = artist.bio;
            drawerTrackTitle.textContent = artist.track;
            
            // Set colors
            drawerArtistTag.className = `small-tag ${artist.tagColor}`;
            
            // Slide up drawer
            infoDrawer.classList.remove("hidden");
            setTimeout(() => {
                infoDrawer.classList.add("active");
            }, 50);
        }
    });
});

// Play song preview from drawer
drawerPlayBtn.addEventListener("click", () => {
    if (selectedArtistData) {
        // Load into main player elements so the dashboard bottom widget updates
        audio.src = selectedArtistData.previewUrl;
        playerTrackName.textContent = selectedArtistData.track;
        playerArtist.textContent = selectedArtistData.name;
        playerArt.src = selectedArtistData.art;
        
        // Play
        playTrack();
        
        // Remove tracklist highlights
        document.querySelectorAll(".playlist-item").forEach(item => item.classList.remove("active", "playing-state"));
    }
});

// Close drawer
closeDrawerBtn.addEventListener("click", () => {
    infoDrawer.classList.remove("active");
    setTimeout(() => {
        infoDrawer.classList.add("hidden");
    }, 500);
    document.querySelectorAll(".constellation-line").forEach(l => l.classList.remove("line-active"));
});

// Tyler Takeover Engine
const tylerOverlay = document.getElementById("tyler-takeover-overlay");
const dismissTylerBtn = document.getElementById("dismiss-tyler-btn");
const tylerAudio = new Audio("https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/f8/16/31/f81631fe-84f4-a48e-518e-4e11e99339c4/mzaf_13519420484368287837.plus.aac.p.m4a"); // Like Him (feat. Lola Young)
tylerAudio.crossOrigin = "anonymous";
let tylerSource = null;
let tylerGainNode = null;

// Custom Loop and Crop: When audio finishes, loop back to 2 seconds
tylerAudio.addEventListener("ended", () => {
    tylerAudio.currentTime = 2.0;
    tylerAudio.play().catch(err => console.warn("Igor loop play blocked: ", err));
});

function triggerTylerTakeover() {
    // 1. Pause background music
    pauseTrack();
    
    // 2. Show Overlay
    tylerOverlay.classList.remove("hidden");
    
    // 3. Set up Audio Context and Gain Booster
    if (isVisualizerSetup && audioCtx) {
        if (!tylerSource) {
            try {
                tylerSource = audioCtx.createMediaElementSource(tylerAudio);
                tylerGainNode = audioCtx.createGain();
                tylerGainNode.gain.value = 2.5; // Cut volume in half (250% gain instead of 500%)
                tylerSource.connect(tylerGainNode);
                tylerGainNode.connect(audioCtx.destination);
            } catch (e) {
                console.warn("Tyler Web Audio setup failed, playing default: ", e);
            }
        }
    }
    
    // 4. Play Tyler (start at 2 seconds)
    tylerAudio.currentTime = 2.0;
    tylerAudio.play().catch(err => console.warn("Igor play blocked: ", err));
}

dismissTylerBtn.addEventListener("click", () => {
    // 1. Pause Tyler
    tylerAudio.pause();
    
    // 2. Hide Overlay
    tylerOverlay.classList.add("hidden");
});



// 9. Initial Boot setup
window.addEventListener("DOMContentLoaded", () => {
    buildPlaylist();
    
    // Timeline Card Click toggle
    const timelineCards = document.querySelectorAll(".timeline-card");
    timelineCards.forEach(card => {
        card.addEventListener("click", function(e) {
            // Ignore clicks on links/buttons or inside sub-cards to prevent layout toggles
            if (e.target.closest(".sub-card") || e.target.closest("a") || e.target.closest("button")) {
                return;
            }
            const isActive = this.classList.contains("active");
            timelineCards.forEach(c => c.classList.remove("active"));
            if (!isActive) {
                this.classList.add("active");
            }
        });
    });

    // Click outside to collapse active timeline cards
    document.addEventListener("click", function(e) {
        if (!e.target.closest(".timeline-card")) {
            timelineCards.forEach(c => c.classList.remove("active"));
        }
    });
});
