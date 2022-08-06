import './App.css';
import { useState } from 'react';
import { RgbColorPicker } from 'react-colorful';
import * as apiService from './services/api-calls'

function App() {
  const [color, setColor] = useState({ r: 50, g: 100, b: 150 });

  const handleSendRGBData = async () => {
    await apiService.sendRGBData(color)
  }

  return (
  <div className="container">
    <div className="nav">API Fun with a Rasperry Pi</div>
    <div className="video-container">
      <div className="video">
        <img src="http://manliestben.zapto.org:8000/stream.mjpg" alt="" width="640" height="480" />
      </div>
      <div className="video-description">Video Description</div>
    </div>
    <div className="color-control-container">
      <div className="color-control-header">RGB LED Color Controls</div>
      <div className="color-control-button-container">
        <button onClick={() => handleSendRGBData()}>Send Color</button>
      </div>
      <div className="color-control">
        <RgbColorPicker color={color} onChange={setColor} />
      </div>
    </div>
    <div className="oled-text-control-container">
      <div className="oled-text-control-header">OLED Text Controls</div>
      <div className="oled-text-area"></div>
      <div className="oled-text-button-container">
        <button>Send Message</button>
      </div>
    </div>
    <div className="oled-extra-commands">
      <div className="oled-extra-commands-header">Other OLED Commands</div>
      <div className="oled-extra-command-button-1"><button>Send Command</button></div>
      <div className="oled-extra-command-button-2"><button>Send Command</button></div>
      <div className="oled-extra-command-button-3"><button>Send Command</button></div>
      <div className="oled-extra-command-button-4"><button>Send Command</button></div>
      <div className="oled-extra-command-button-5"><button>Send Command</button></div>
      <div className="oled-extra-command-button-6"><button>Send Command</button></div>
      <div className="oled-extra-command-button-7"><button>Send Command</button></div>
      <div className="oled-extra-command-button-8"><button>Send Command</button></div>
    </div>
  </div>
  );
}

export default App;
