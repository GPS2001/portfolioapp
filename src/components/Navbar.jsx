import React, { useState } from "react";
import { Button, Drawer } from "antd";
import { ArrowUpRight, Menu, X, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  ["Projects", "#projects"], ["Experience", "#experience"],
  ["Skills", "#skills"], ["Education", "#education"], ["Contact", "#contact"],
];

export default function Navbar({ mode = "dark", onToggleTheme = () => {} }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <motion.header className="navbar" initial={{ y: -24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .55 }}>
      <div className="nav-inner container">
        <a href="#home" className="brand" aria-label="Gaurpad Shukla home">GS<span>.</span></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </nav>
        <div className="nav-actions">
          <button className="theme-toggle" type="button" onClick={onToggleTheme} aria-label={`Switch to ${mode === "dark" ? "light" : "dark"} mode`} title={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}>
            {mode === "dark" ? <Sun size={17} aria-hidden="true" /> : <Moon size={17} aria-hidden="true" />}
            <span>{mode === "dark" ? "Light" : "Dark"}</span>
          </button>
          <a className="nav-cta" href="#contact">Let’s talk <ArrowUpRight size={15} /></a>
        </div>
        <Button className="mobile-menu" type="text" aria-label="Open navigation" icon={<Menu size={21} />} onClick={() => setOpen(true)} />
      </div>
      <Drawer title={<span className="drawer-title">GS<span>.</span></span>} placement="right" open={open} onClose={close} closeIcon={<X size={19} />} styles={{ body: { background: "var(--surface)" }, header: { background: "var(--surface)", borderColor: "var(--line)", color: "var(--text)" } }}>
        <nav className="drawer-nav">{links.map(([label, href]) => <a key={label} href={href} onClick={close}>{label}<ArrowUpRight size={16} /></a>)}</nav>
      </Drawer>
    </motion.header>
  );
}
