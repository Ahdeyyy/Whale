class vec2 {
  constructor({ x, y }) {
    this.x = x;
    this.y = y;
  }

  add(vec) {
    this.x += vec.x;
    this.y += vec.y;
  }

  subtract(vec) {
    this.x -= vec.x;
    this.y -= vec.y;
  }

  dot(vec) {
    return this.x * vec.x + this.y * vec.y;
  }

  multiply(vec) {
    this.x *= vec.x;
    this.y *= vec.y;
  }

  scale(f) {
    this.x *= f;
    this.y *= f;
  }

  cross(vec) {
    return this.x * vec.y - this.y * vec.x;
  }

  length() {
    return Math.sqrt(
      this.x * this.x + this.y * this.y
    );
  }

  normalize() {
    
      this.x =  this.x / (this.x * this.x + this.y * this.y),
      this.y =  this.y / (this.x * this.x + this.y * this.y)


  }

  /*
        static members
    */
  static add(vec1, vec) {
    return new vec2({
      x: vec1.x + vec.x,
      y: vec1.y + vec.y,
    });
  }

  static subtract(vec1, vec) {
    return new vec2({
      x: vec1.x - vec.x,
      y: vec1.y - vec.y,
    });
  }

  static dot(vec1, vec2) {
    return vec1.x * vec2.x + vec1.y * vec2.y;
  }

  static multiply(vec1, vec) {
    return new vec2({
      x: vec1.x * vec.x,
      y: vec1.y * vec.y,
    });
  }

  static scale(vec, f) {
    return new vec2({
      x: vec.x * f,
      y: vec.y * f,
    });
  }

  static cross(vec1, vec2) {
    return vec1.x * vec2.y - vec1.y * vec2.x;
  }

  static length(vec) {
    return Math.sqrt(
      vec.x * vec.x + vec.y * vec.y
    );
  }
  static normalize(vec) {
    return new vec2({
      x: vec.x / vec.x * vec.x + vec.y * vec.y,
      y: vec.y / vec.x * vec.x + vec.y * vec.y
  })

  }
}
