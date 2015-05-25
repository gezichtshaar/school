#include "command.h"

struct {
  unsigned short count;
  char data[256];
} buf;

void setup() {
  Serial.begin(9600);
  buf.count = 0;
}

void loop() {
  while (Serial.available()) {
    buf.data[buf.count++] = Serial.read();
    if (buf.data[buf.count - 1] == '\0') {
        Serial.println(buf.data);
        Serial.println("test");
      buf.count = 0;
    }
  }
  delay(1000);
}
