import React, { useEffect, useState } from "react";
import fs from "fs";
import { promisify } from "util";
let styles = require("./Home.scss");

const readFile = promisify(fs.readFile);

export default function Home() {
  const [text, setText] = useState();
  useEffect(() => {
    async function listDir() {
      //passsing directoryPath and callback function
      const contents = await readFile("/Users/chris/CombatLog.txt");
      setText(contents.toString("UTF-8"));
    }
    listDir();
  });
  return (
    <div>
      <div className={styles.container} data-tid="container">
        {text}
      </div>
    </div>
  );
}
