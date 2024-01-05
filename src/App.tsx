import { useEffect, useState } from "react";
import "./App.css";

import { appWindow } from "@tauri-apps/api/window";
function App() {
  const [title, setTitle] = useState("");
  useEffect(() => {
    appWindow.title().then((title) => {
      setTitle(title);
    });
  }, []);

  return (
    <div style={{ background: "red", color: "#fff", padding: 8 }}>
      {title}
    </div>
  );
}

export default App;
