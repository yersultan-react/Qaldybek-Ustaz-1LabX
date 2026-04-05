export function calc(A: number, T: number) {
  const f = 1 / T;
  const w = (2 * Math.PI) / T;
  const vmax = A * w;
  const amax = A * w * w;

  return { f, w, vmax, amax };
}

export function getX(
  t: number,
  A: number,
  w: number,
  phi: number
) {
  return A * Math.sin(w * t + phi);
}