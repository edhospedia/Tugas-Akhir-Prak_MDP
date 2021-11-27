import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { NewsContextProvider } from "./NewsContext";
import News from "./components/News";
import "./Web.css"

function Web() {
  return (
    <NewsContextProvider>
      <News />
    </NewsContextProvider>
  );
}

export default Web;
