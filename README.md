 # Shader Park Three.js Audio Visualizer 🎵 ✨

An interactive 3D audio visualization built with Three.js and Shader Park. The application creates dynamic visual effects that react to audio input, featuring an interactive horizon torus and a fractal ball that responds to both audio and mouse movement.

## Project Structure

- `index.html` - Main entry point
- `script.js` - Three.js setup and audio processing
- `sp-code.js` - Shader Park code for visual effects
- `style.css` - Styling
- `lib/` - Local dependencies
- `assets/` - Audio files

## Features

- Dynamic audio-reactive visualization
- Interactive mouse controls
- Fractal noise-based geometry
- Color spectrum animation
- Customizable parameters:
  - Attraction force
  - Animation speed
  - Noise scale and amplitude
  - Ring count
  - Geometry blend amount

## Dependencies (included locally)

- Three.js (v0.146)
- Shader Park Core
- ES Module Shims

## How to Run

1. Start a local web server in the project directory. You can use Python's built-in server:
   ```bash
   python3 -m http.server 8000
   ```
   Or any other local server of your choice.

2. Open your browser and navigate to:
   ```
   http://localhost:8000
   ```

3. Click the "Play Audio" button to start the visualization.

## Interacting with the Visualization

- Move your mouse to control the fractal ball's position
- Audio input affects both the horizon torus rotation and fractal patterns
- The visualization combines two main elements:
  - A rotating torus horizon with audio-reactive expansion
  - A fractal sphere that follows mouse movement and responds to audio

## Modifying Shaders

The visual effects are defined in `sp-code.js`. The shader includes several customizable parameters:
- `attract` - Controls attraction force (0-1)
- `speed` - Animation speed (0.1-1.3)
- `nscale` - Noise scale (0-10)
- `nAmplitude` - Noise amplitude (0-6)
- `rings` - Number of ring iterations (0-100)
- `mixAmt` - Blend amount between geometries (0-1)

Visit [Shader Park](https://shaderpark.netlify.com/) to learn more about creating shader effects.

## Note

All dependencies are now included locally in the `lib` directory, so the application can run without an internet connection.
# shaderaudio
