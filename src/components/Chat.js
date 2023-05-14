import React, { Component } from 'react';

class Chat extends Component {
  componentDidMount() {
    // Check if Kommunicate script is already loaded
    if (!window.kommunicate) {
      (function(d, m) {
        var kommunicateSettings = {
          appId: '29ae028be39d44ebfcabd34a588e3a6b0',
          popupWidget: true,
          automaticChatOpenOnNavigation: true,
        };
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = 'https://widget.kommunicate.io/v2/kommunicate.app';
        var h = document.getElementsByTagName('head')[0];
        h.appendChild(s);
        window.kommunicate = m;
        m._globals = kommunicateSettings;
      })(document, window.kommunicate || {});
    }
  }

  render() {
    return <div>Chat</div>;
  }
}

export default Chat;
