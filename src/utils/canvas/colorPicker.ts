export function rgb2hsl(r, g, b) {
  (r /= 255), (g /= 255), (b /= 255);
  var max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  var h,
    s,
    l = (max + min) / 2;

  if (max == min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return [h, s, l];
}

export function toCss(r, g, b, h, s, l) {
  const int2hex = (num) => (Math.round(num) < 16 ? '0' : '') + Math.round(num).toString(16);

  return {
    rgb: `rgb(${Math.round(r)},${Math.round(g)},${Math.round(b)})`,
    hsl: `hsl(${Math.round(360 * h)},${Math.round(100 * s)}%,${Math.round(100 * l)}%)`,
    hex: `#${int2hex(r)}${int2hex(g)}${int2hex(b)}`,
  };
}
