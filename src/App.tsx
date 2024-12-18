import "./App.css";

import Chat from "./components/Chat.tsx";
import Contacts from "./components/Contacts.tsx";
import Navbar from "./components/Navbar.tsx";
function App() {
  return (
    <div id="App" className="flex flex-col overflow-hidden h-screen">
      <Navbar />
      <div id="content-wrapper" className="grid grid-cols-2 overflow-hidden h-full">
        <Contacts />
        <Chat />
      </div>
    </div>
  );
}

export default App;
