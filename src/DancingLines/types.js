// Point interface
export const Point = function(x, y) {
  this.x = x;
  this.y = y;
};

// TendrilOptions interface
export const TendrilOptions = function(spring, friction, size, dampening, tension, targetRef, canvasRef) {
  this.spring = spring;
  this.friction = friction;
  this.size = size;
  this.dampening = dampening;
  this.tension = tension;
  this.targetRef = targetRef;
  this.canvasRef = canvasRef;
};

// HueOscillatorOptions interface
export const HueOscillatorOptions = function(phase, offset, frequency, amplitude) {
  this.phase = phase;
  this.offset = offset;
  this.frequency = frequency;
  this.amplitude = amplitude;
};

// Node class
export class Node {
  constructor() {
    /** Position x in canvas */
    this.x = 0;
    /** Position y in canvas */
    this.y = 0;
    /** Velocity of x */
    this.vx = 0;
    /** Velocity of y */
    this.vy = 0;
  }
}
