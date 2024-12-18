import "./App.css";

import Chat from "./components/chat.tsx";
import Contacts from "./components/contacts.tsx";
import Navbar from "./components/navbar.tsx";
function App() {
  return (
    <>
      <Navbar />
      <div id="content-wrapper">
        <Contacts />
        <Chat />
      </div>
    </>
  );
}

export default App;
