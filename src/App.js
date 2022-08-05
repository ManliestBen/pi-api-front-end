import './App.css';

function App() {
  return (
  <div class="container">
    <div class="nav">API Fun with a Rasperry Pi</div>
    <div class="video-container">
      <div class="video">

      </div>
      <div class="video-description">Video Description</div>
    </div>
    <div class="color-control-container">
      <div class="color-control-header">RGB LED Color Controls</div>
      <div class="color-control-button-container">
        <button>Send Colors</button>
      </div>
      <div class="color-control"></div>
    </div>
    <div class="oled-text-control-container">
      <div class="oled-text-control-header">OLED Text Controls</div>
      <div class="oled-text-area"></div>
      <div class="oled-text-button-container">
        <button>Send Message</button>
      </div>
    </div>
    <div class="oled-extra-commands">
      <div class="oled-extra-commands-header">Other OLED Commands</div>
      <div class="oled-extra-command-button-1"><button>Send Command</button></div>
      <div class="oled-extra-command-button-2"><button>Send Command</button></div>
      <div class="oled-extra-command-button-3"><button>Send Command</button></div>
      <div class="oled-extra-command-button-4"><button>Send Command</button></div>
      <div class="oled-extra-command-button-5"><button>Send Command</button></div>
      <div class="oled-extra-command-button-6"><button>Send Command</button></div>
      <div class="oled-extra-command-button-7"><button>Send Command</button></div>
      <div class="oled-extra-command-button-8"><button>Send Command</button></div>
    </div>
  </div>
  );
}

export default App;
