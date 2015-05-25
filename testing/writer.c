#include <stdio.h>

#include "servo/command.h"

void setup() {

}

void loop() {
	Command c = {.type = 0, .id = 13, .data = 12};
	Buffer buf;
	EncodeData(&buf, &c);
	fwrite(buf, buf->size, 1, stdout);
}

int main() {
	setup();
	loop();
	return 0;
}
