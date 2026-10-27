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
// ---------- State ----------
// State variables are the parts of your program that change over time.
// For example: where the pointer is, how fast it's moving, or whether a drone is on.

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
  const shape1 = createShape("shape1");
  shape1.setSize(120);
  shape1.setRoundedness(1);
  shape1.setColour(200, 80, 50);
  shape1.setPosition(0.5, 0.2);

  // Shape2
  const shape2 = createShape("shape2");
  shape2.setSize(120);
  shape2.setRoundedness(1);
  shape2.setColour(200, 80, 50);
  shape2.setPosition(0.4, 0.4);

  // Shape3
  const shape3 = createShape("shape3");
  shape3.setSize(120);
  shape3.setRoundedness(1);
  shape3.setColour(200, 80, 50);
  shape3.setPosition(0.6, 0.4);

  // Shape4
  const shape4 = createShape("shape4");
  shape4.setSize(120);
  shape4.setRoundedness(1);
  shape4.setColour(200, 80, 50);
  shape4.setPosition(0.3, 0.6);

  // Shape5
  const shape5 = createShape("shape5");
  shape5.setSize(120);
  shape5.setRoundedness(1);
  shape5.setColour(200, 80, 50);
  shape5.setPosition(0.5, 0.6);

  // Shape6
  const shape6 = createShape("shape6");
  shape6.setSize(120);
  shape6.setRoundedness(1);
  shape6.setColour(200, 80, 50);
  shape6.setPosition(0.7, 0.6);

  shape1.element.addEventListener("pointerdown", () => {
    Tone.start();
    synth.triggerAttackRelease(note1, "8n");
  });

  shape2.element.addEventListener("pointerdown", () => {
    Tone.start();
    synth.triggerAttackRelease(note2, "8n");
  });

  shape3.element.addEventListener("pointerdown", () => {
    Tone.start();
    synth.triggerAttackRelease(note3, "8n");
  });

  shape4.element.addEventListener("pointerdown", () => {
    Tone.start();
    synth.triggerAttackRelease(note4, "8n");
  });

  shape5.element.addEventListener("pointerdown", () => {
    Tone.start();
    synth.triggerAttackRelease(note5, "8n");
  });

  shape6.element.addEventListener("pointerdown", () => {
    Tone.start();
    synth.triggerAttackRelease(note6, "8n");
  });
  window.addEventListener("pointerdown", pointerDown);
}

setup(); // Always remember to call setup()!
