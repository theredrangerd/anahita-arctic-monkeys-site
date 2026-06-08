# Favourite Worst Nightmare - Arctic Monkeys Tribute Site

A fully interactive, high-fidelity tribute and birthday gift website themed after the Arctic Monkeys' seminal 2007 album, *Favourite Worst Nightmare*, custom-crafted as a birthday present for **Anahita**.

---

## 🎵 Key Features

### 1. Autoplay Intro Screen
- Clean, dark landing panel to bypass modern browser audio autoplay blocks.
- Displays a glowing neon outline of the iconic *Favourite Worst Nightmare* house silhouette with pulsing windows.
- Clicking **"ENTER THE NIGHTMARE"** immediately transitions into the main site and boots the audio player starting with Anahita's favorite track, *"R U Mine?"*.

### 2. Custom Audio Engine & Player
- A sleek, custom media player supporting full track browsing (13 tracks: *"R U Mine?"* followed by the full 12 tracks of the album).
- Integrates copyright-free iTunes API 30-second audio preview streaming.
- Fully responsive control panel: Play/Pause, Skip Forward/Backward, Seek Slider, Volume controls, and Repeat/Shuffle modes.
- Spinning vinyl album art active indicator.

### 3. Interactive Cover Art Grid
- A CSS Grid house matching the layout of the album cover art.
- Clicking on a room dynamically updates the player, sets its accent theme, and initiates playback.
- **Beat Visualization**: Utilizes the **Web Audio API** (`AudioContext` and `AnalyserNode`) to extract real-time audio frequencies, making the currently active room pulse in size and glow in sync with the bass frequency of the song!

### 4. Interactive History Timeline
- Vertical timeline detailing the story of the band from 2002 to 2018.
- Hovering or clicking timeline cards expands detailed pop-out trivia bubbles (sliding out horizontally on desktop, collapsing vertically on mobile).
- Toggling click behavior lets users read sticky trivia bubbles, and clicking anywhere outside collapses them automatically.

### 5. Futures Constellation Web Map
- A custom SVG constellation layout mapping inspired artists (*The 1975*, *Sam Fender*, *Fontaines D.C.*, and *Catfish & The Bottlemen*) linked by neon lines.
- Hovering/clicking a node spotlights connection lines and slides up a details drawer containing a description and a direct track preview.

### 6. Tyler, The Creator Takeover Gag
- An interactive golden crown node in the constellation triggers a "Tyler Override".
- Pauses the background track, launches a retro fullscreen scanline gold layout, and plays Tyler's *"Like Him"* on loop (starting 2 seconds in, boosted via a Web Audio `GainNode` to `2.5` gain).
- Displays a spinning, custom-generated gold *CHROMAKOPIA* CD label alongside a customized birthday letter override.

### 7. Personalized Gift Panel
- A retro Polaroid photo of Anahita locked in place.
- A hardcoded personal letter with humorous interactive elements:
  - **"Make It Rain!"**: Fires a dynamic neon canvas confetti shower.
  - **"Press Me!"**: Blows a DJ-style airhorn soundboard effect (uses Web Audio to duck the background music to 10% volume and plays the airhorn with a `4.0` loudness gain).

---

## 🛠️ Technology Stack

- **Core**: Vanilla HTML5 & Javascript (ES6)
- **Styling**: Vanilla CSS3 (with custom HSL variables, neon glows, glassmorphism, and hardware-accelerated transitions)
- **Icons**: [Lucide Icons](https://lucide.dev/)
- **Effects**: [Canvas Confetti](https://github.com/catdad/canvas-confetti)
- **Audio Routing**: Web Audio API (`AudioContext`, `AnalyserNode`, `GainNode`, `MediaElementAudioSourceNode`)

---

## 🚀 How to Run Locally

Since the site uses JavaScript module logic and handles AJAX requests for dynamic playlist compilation, it must be run on a local HTTP server:

1. Open a terminal in the root directory.
2. Spin up a local server:
   ```bash
   python3 -m http.server 8000
   ```
3. Open your web browser and navigate to:
   👉 **`http://localhost:8000`**
