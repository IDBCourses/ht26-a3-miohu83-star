/*
 * IDB Programming: A3 — a musical instrument
 *
 * All of the code for your instrument goes in this file. It's split into sections:
 *   settings — the "fixed" parts of your program
 *   state    — the parts of your program that change over time
 *   sound    — the Tone.js instruments and effects
 *   update   — updates the state every 100ms, if necessary
 *   use      — uses the state to make sound and shapes every 100ms, if necessary
 *   controls — what happens when the player uses the pointer
 *   setup    — starts everything
 *
 * The pointer events change the state. update() and use() each run every
 * 100ms, in a loop:
 *   1. update: change the state, e.g. based on time or on the pointer's movement
 *   2. use:    make sound and move shapes, based on the state
 *
 * Shapes come from shape.js: createShape() makes one, and its methods
 * (setPosition, setSize, setColour ...) change it.
 *
 * Tone.js documentation: https://tonejs.github.io/docs/15.1.22/
 */

import { createShape } from "./shape.js";

// ---------- Settings ----------
// Settings variables should contain all of the "fixed" parts of your programs
// For example: which notes you can play, how fast things move, the tempo.
const note1 = "C4"; // the note played when the pointer goes down
const note2 = "D4";
const note3 = "E4";
const note4 = "F4";
const note5 = "G4";
const note6 = "A4";
const shape1 = createShape("shape1");
const shape2 = createShape("shape2");
const shape3 = createShape("shape3");
const shape4 = createShape("shape4");
const shape5 = createShape("shape5");
const shape6 = createShape("shape6");
// ---------- State ----------
// State variables are the parts of your program that change over time.
// For example: where the pointer is, how fast it's moving, or whether a drone is on.
let speeds = [];
let lastX = null;
let lastY = null;
let lastTime = null;
let activeNote = null;
// ---------- Sound ----------
// Make the instruments and plug them into the speakers.
const synth = new Tone.PolySynth(Tone.Synth).toDestination(); // can play several notes at once

// ---------- Update ----------
// Update the state. This is called every 100ms.
function update() {
  setTimeout(update, 100); // call update() again in 100 milliseconds
}

// ---------- Use ----------
// Use the state to make sound and move shapes. This is called every 100ms.
function use() {
  setTimeout(use, 100); // call use() again in 100 milliseconds
}

// ---------- Controls (Event Handlers) ----------
function pointerMove(event) {
  let normX = event.clientX / window.innerWidth;
  let normY = event.clientY / window.innerHeight;
  let now = Date.now();

  if (lastTime === null) {
    lastX = normX;
    lastY = normY;
    lastTime = now;
    return;
  }

  let distance = Math.hypot(normX - lastX, normY - lastY);
  let seconds = (now - lastTime) / 1000;

  if (seconds <= 0) return;

  let speed = distance / seconds;

  lastX = normX;
  lastY = normY;
  lastTime = now;

  speeds.push(speed);

  if (speeds.length > 10) {
    speeds.shift();
  }

  let total = 0;

  for (let i = 0; i < speeds.length; i++) {
    total = total + speeds[i];
  }

  let average = total / speeds.length;

  if (activeNote !== null) {
    synth.set({ detune: Math.min(2200, average * 1000) });
    console.log("Active note:", activeNote);
  }
  console.log("Average speed:", average);
}
// Runs every time the pointer goes down: a click, a tap or a pen touch.
//function pointerDown(event) {
//Tone.start(); // browsers only allow sound after the player has pressed something

//console.log("Pointer down at", event.clientX, event.clientY);
//synth.triggerAttackRelease(note, "8n"); // play the note for an eighth note
//}

// ---------- Setup ----------
// Setup is run once, at the start of the program. It sets everything up for us!
function setup() {
  update(); // start the update loop
  use(); // start the use loop

  // Example: a shape near the middle of the window. Replace it with your own.
  // shape1
  shape1.setSize(180);
  shape1.setRoundedness(1);
  shape1.setColour(200, 80, 50);
  shape1.setPosition(0.5, 0.2);

  shape1.element.addEventListener("pointerenter", () => {
    shape1.setColour(337, 80, 50);
  });
  shape1.element.addEventListener("pointerleave", () => {
    shape1.setColour(200, 80, 50);
  });
  // Shape2
  shape2.setSize(180);
  shape2.setRoundedness(1);
  shape2.setColour(200, 80, 50);
  shape2.setPosition(0.4, 0.4);

  shape2.element.addEventListener("pointerenter", () => {
    shape2.setColour(49, 80, 50);
  });
  shape2.element.addEventListener("pointerleave", () => {
    shape2.setColour(200, 80, 50);
  });

  // Shape3
  shape3.setSize(180);
  shape3.setRoundedness(1);
  shape3.setColour(200, 80, 50);
  shape3.setPosition(0.6, 0.4);

  shape3.element.addEventListener("pointerenter", () => {
    shape3.setColour(109, 80, 50);
  });
  shape3.element.addEventListener("pointerleave", () => {
    shape3.setColour(200, 80, 50);
  });

  // Shape4
  shape4.setSize(180);
  shape4.setRoundedness(1);
  shape4.setColour(200, 80, 50);
  shape4.setPosition(0.3, 0.6);

  shape4.element.addEventListener("pointerenter", () => {
    shape4.setColour(360, 80, 50);
  });
  shape4.element.addEventListener("pointerleave", () => {
    shape4.setColour(200, 80, 50);
  });

  // Shape5
  shape5.setSize(180);
  shape5.setRoundedness(1);
  shape5.setColour(200, 80, 50);
  shape5.setPosition(0.5, 0.6);

  shape5.element.addEventListener("pointerenter", () => {
    shape5.setColour(253, 80, 50);
  });
  shape5.element.addEventListener("pointerleave", () => {
    shape5.setColour(200, 80, 50);
  });

  // Shape6
  shape6.setSize(180);
  shape6.setRoundedness(1);
  shape6.setColour(200, 80, 50);
  shape6.setPosition(0.7, 0.6);

  shape6.element.addEventListener("pointerenter", () => {
    shape6.setColour(12, 80, 50);
  });
  shape6.element.addEventListener("pointerleave", () => {
    shape6.setColour(200, 80, 50);
  });

  // click notes
  shape1.element.addEventListener("pointerdown", () => {
    Tone.start();
    synth.triggerAttackRelease(note1, "8n");
    console.log("Clicked shape1");
    console.log("Playing short note:", note1);
  });

  shape2.element.addEventListener("pointerdown", () => {
    Tone.start();
    synth.triggerAttackRelease(note2, "8n");
    console.log("Clicked shape2");
    console.log("Playing short note:", note2);
  });

  shape3.element.addEventListener("pointerdown", () => {
    Tone.start();
    synth.triggerAttackRelease(note3, "8n");
    console.log("Clicked shape3");
    console.log("Playing short note:", note3);
  });

  shape4.element.addEventListener("pointerdown", () => {
    Tone.start();
    synth.triggerAttackRelease(note4, "8n");
    console.log("Clicked shape4");
    console.log("Playing short note:", note4);
  });

  shape5.element.addEventListener("pointerdown", () => {
    Tone.start();
    synth.triggerAttackRelease(note5, "8n");
    console.log("Clicked shape5");
    console.log("Playing short note:", note5);
  });

  shape6.element.addEventListener("pointerdown", () => {
    Tone.start();
    synth.triggerAttackRelease(note6, "8n");
    console.log("Clicked shape6");
    console.log("Playing short note:", note6);
  });

  // pitch change
  // shaoe 1
  shape1.element.addEventListener("pointerenter", () => {
    Tone.start();
    console.log("Entered shape1");
    console.log("Starting note:", note1);

    activeNote = note1;
    speeds = [];
    lastX = null;
    lastY = null;
    lastTime = null;

    synth.set({ detune: 0 });
    synth.triggerAttack(note1);
  });

  shape1.element.addEventListener("pointerleave", () => {
    synth.triggerRelease(note1);
    console.log("Left shape1");
    console.log("Stopping note:", note1);
    activeNote = null;
    synth.set({ detune: 0 });
  });
  // shape 2
  shape2.element.addEventListener("pointerenter", () => {
    Tone.start();
    console.log("Entered shape2");
    console.log("Starting note:", note2);

    activeNote = note2;
    speeds = [];
    lastX = null;
    lastY = null;
    lastTime = null;

    synth.set({ detune: 0 });
    synth.triggerAttack(note2);
  });

  shape2.element.addEventListener("pointerleave", () => {
    synth.triggerRelease(note2);
    console.log("Left shape2");
    console.log("Stopping note:", note2);
    activeNote = null;
    synth.set({ detune: 0 });
  });

  // shape 3
  shape3.element.addEventListener("pointerenter", () => {
    Tone.start();
    console.log("Entered shape3");
    console.log("Starting note:", note3);
    activeNote = note3;
    speeds = [];
    lastX = null;
    lastY = null;
    lastTime = null;

    synth.set({ detune: 0 });
    synth.triggerAttack(note3);
  });

  shape3.element.addEventListener("pointerleave", () => {
    synth.triggerRelease(note3);
    console.log("Left shape3");
    console.log("Stopping note:", note3);
    activeNote = null;
    synth.set({ detune: 0 });
  });
  // shape 4
  shape4.element.addEventListener("pointerenter", () => {
    Tone.start();
    console.log("Entered shape4");
    console.log("Starting note:", note4);
    activeNote = note4;
    speeds = [];
    lastX = null;
    lastY = null;
    lastTime = null;

    synth.set({ detune: 0 });
    synth.triggerAttack(note4);
  });

  shape4.element.addEventListener("pointerleave", () => {
    synth.triggerRelease(note4);
    console.log("Left shape4");
    console.log("Stopping note:", note4);
    activeNote = null;
    synth.set({ detune: 0 });
  });

  // shape 5
  shape5.element.addEventListener("pointerenter", () => {
    Tone.start();
    console.log("Entered shape5");
    console.log("Starting note:", note5);
    activeNote = note5;
    speeds = [];
    lastX = null;
    lastY = null;
    lastTime = null;

    synth.set({ detune: 0 });
    synth.triggerAttack(note5);
  });

  shape5.element.addEventListener("pointerleave", () => {
    synth.triggerRelease(note5);
    console.log("Left shape5");
    console.log("Stopping note:", note5);
    activeNote = null;
    synth.set({ detune: 0 });
  });

  // shape 6
  shape6.element.addEventListener("pointerenter", () => {
    Tone.start();
    console.log("Entered shape6");
    console.log("Starting note:", note6);
    activeNote = note6;
    speeds = [];
    lastX = null;
    lastY = null;
    lastTime = null;

    synth.set({ detune: 0 });
    synth.triggerAttack(note6);
  });

  shape6.element.addEventListener("pointerleave", () => {
    synth.triggerRelease(note6);
    console.log("Left shape6");
    console.log("Stopping note:", note6);
    activeNote = null;
    synth.set({ detune: 0 });
  });
  window.addEventListener("pointermove", pointerMove);
}

setup(); // Always remember to call setup()!
