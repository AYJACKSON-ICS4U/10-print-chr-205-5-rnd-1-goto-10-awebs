int w = 16;
int h = 16;
int index = 0;
void setup() {
  size(640, 384);
  background(0, 128, 0);
  strokeWeight(5);
  stroke(224);
  smooth();
}
void draw() {
  int x1 = w*index;
  int x2 = x1 + w;
  int y1 = h*23;
  int y2 = h*24;
  stroke(random(255), random(255), random(255));
  int num = round(random(4));
  if (num == 0) {
    x2 = x1;
    x1 += w / 2;
    line(x1, y1, x2, y2);
    line(x1, y1, x2 + w, y2);
  } else if (num == 1) {
    line (x1 + (w / 2), y1, x1 + (w / 2), y2);
  } else if (num == 2) {
    line(x1, y1, x2, y2);
  } else {
    line(x2, y1, x1, y2);
  }
  index++;
  if (index == width/w) {
    PImage p = get(0, h, width, h*23);
    background(0, 128, 0);
    set(0, 0, p);
    index = 0;
  }
}