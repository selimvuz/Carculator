// eslint-disable-next-line no-unused-vars
class VerlyRange {
  constructor(id, color) {
    // Retrieve DOMSlider element
    this.DOMSlider = document.getElementById(id);
    this.color = color;
    this.canvas = null;
    this.ctx = null;
    this.width = 0;
    this.height = 0;
    this.rope = null;

    if (this.DOMSlider) {
      // Initialize canvas and rope when DOMSlider exists
      this.setupCanvas();
      this.setupRope();
      this.setRopePosition();
      this.addEventListeners();
      this.animate();
    } else {
      // If DOMSlider is not found, refresh the page
      this.refreshPage();
    }
  }

  // Create and configure the canvas element
  setupCanvas() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.width = this.DOMSlider.scrollWidth;
    this.height = this.width / 2;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.canvas.style.pointerEvents = 'none';
    this.canvas.style.transform = 'translate(-300px, 6px)';
    this.DOMSlider.parentElement.appendChild(this.canvas);
  }

  // Create the rope using Verly library
  setupRope() {
    if (this.DOMSlider) {
      const gravity = new Vector(0, 0.3);
      let verly = new Verly(50, this.canvas, this.ctx);
      this.rope = this.generateRope(verly, gravity);
    }
  }
  // Generate the rope and configure its rendering
  generateRope(verly, gravity) {
    if (this.DOMSlider && verly && typeof verly.createRope === 'function') {
      let rope = verly.createRope(0, 0, this.width / 20, 17, 0);
      let lastIndex = rope.points.length - 1;
      if (typeof rope.setGravity === 'function') {
        rope.setGravity(gravity);
      }
      if (typeof rope.pin === 'function') {
        rope.pin(lastIndex);
      }

      rope.renderSticks = () => {
        this.ctx.beginPath();
        this.ctx.strokeStyle = this.color;
        this.ctx.lineWidth = 10;
        this.ctx.lineCap = 'round';

        for (let i = 0; i < rope.sticks.length; i++) {
          let stick = rope.sticks[i];
          this.ctx.moveTo(stick.startPoint.pos.x, stick.startPoint.pos.y);
          this.ctx.lineTo(stick.endPoint.pos.x, stick.endPoint.pos.y);
        }

        this.ctx.stroke();
        this.ctx.closePath();
      };

      return rope;
    }
  }

  // Add event listeners for window resize and slider input
  addEventListeners() {
    window.addEventListener('resize', this.handleResize.bind(this));
    this.DOMSlider.addEventListener('input', this.setRopePosition.bind(this));
  }

  // Handle window resize event
  handleResize() {
    if (this.DOMSlider && this.rope && typeof this.rope.points !== 'undefined') {
      this.width = this.DOMSlider.scrollWidth;
      this.height = this.width / 2;
      this.canvas.width = this.width;
      this.canvas.height = this.height;

      this.rope = this.generateRope(new Verly(50, this.canvas, this.ctx), new Vector(0, 0.3));
      this.setRopePosition();
    }
  }

  // Update rope position based on slider value
  setRopePosition() {
    let ratio = (this.DOMSlider.value - this.DOMSlider.min) / (this.DOMSlider.max - this.DOMSlider.min);
    if (ratio < 0.5) ratio += 0.01;
    if (ratio < 0.3) ratio += 0.01;
    if (ratio > 0.6) ratio -= 0.01;
    if (ratio > 0.8) ratio -= 0.02;
    this.rope.points[this.rope.points.length - 1].pos.x = ratio * this.width;
  }

  // Animation loop
  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.rope.update();
    this.rope.renderSticks();
    requestAnimationFrame(this.animate.bind(this));
  }

  // Refresh the page if DOMSlider is not found
  refreshPage() {
    // eslint-disable-next-line no-restricted-globals
    setTimeout(() => location.reload(), 1);
  }
}