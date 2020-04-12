class Colour {
  constructor(hexString) {
    if (!/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hexString)) throw Error('Input must be a hex string');
    const components = hexString.substr(1).match(hexString.length === 7 ? /(\S{2})/g : /(\S{1})/g);

    this.hex = hexString;

    this.red = parseInt(components[0], 16);
    this.green = parseInt(components[1], 16);
    this.blue = parseInt(components[2], 16);

    this.rgb = `rgb(${this.red}, ${this.green}, ${this.blue})`;

    this.luminosity = this.red * 0.299 + this.green * 0.587 + this.blue * 0.114;
  }
}

export default Colour;
