import RouterPage from './Pages/RouterPage';
import * as React from 'react'
import WhatsAppWidget from 'react-whatsapp-chat-widget';
import './i18n';
import 'react-whatsapp-chat-widget/index.css';

function App() {
  return (
      <div className="App">
        <RouterPage />
        <WhatsAppWidget
          phoneNo="971564592414"
          position="right"
          widgetWidth="400px"
          widgetWidthMobile="260px"
          autoOpen={false}
          autoClose={false}
          messageBox={true}
          messageBoxTxt=""
          iconSize="70"
          iconColor="white"
          iconBgColor="#25D366"
          headerIcon="/favicon.ico"
          headerIconColor="pink"
          headerTxtColor="black"
          headerBgColor="#25D366"
          headerTitle="Dune Quested"
          headerCaption="Online"
          bodyBgColor="#bbb"
          chatPersonName="Booking Assistant"
          chatMessage={`Hi there 👋 \nHow can I help you?`}
          footerBgColor="#999"
          placeholder="Type a message.."
          btnBgColor="#25D366"
          btnTxt="Start Chat"
          btnTxtColor="white"
        />
      </div>
    );
}

export default App;
