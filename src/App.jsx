import { useState } from "react";

import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import HomePage from "@/pages/HomePage";

import "./App.css";

export default function App() {
  return (
    <main>
      <Navbar />
      <section className="wrapper">
        <HomePage />
      </section>
      <Footer />
    </main>
  );
}
