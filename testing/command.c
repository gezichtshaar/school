#include <stdio.h>

#include "command.h"

#define BUFFER_SIZE 256

typedef struct {
	byte size;
	bute count;
	char data[BUFFER_SIZE];
} Buffer;

typedef struct {
	byte type;
	byte id;
	short data;
} Command;

typedef struct {
	byte checksum;
	byte destination;
	Command commands[];
} Packet;

void InitBuffer(Buffer *buf) {
	buf->size = 0;
	buf->count = 0;
}

byte readByte(Buffer *buf) {
	return buf->data[buf->count++];
}

short readShort(Bufffer *buf) {
	return (short)0;
}

void readCommand(Buffer *buf, Command *command) {
	command->type = readByte(buf);
	command->id = readByte(buf);
	command->data = readShort(buf);
}

void DecodeCOBS(Buffer *buf) {

}

void DecodeData(Buffer *buf, Packet *p) {
	DecodeCOBS(buf);
	p->checksum = readByte(buf);
	p->destination = readByte(buf);

	Command *c = &(p->commands);
	while(buf->count < buf->size) {
		readCommand(c);
		c += sizeof(Command);
	}

	InitBuffer(buf);
}

void writeByte(Buffer *buf, byte b) {
}

void writeShort(Buffer *buf, short s) {
}

void writeCommand(Buffer *buf, Command *command) {
	writeByte(buf, command->type);
	writeByte(buf, command->type);
	writeShort(buf, command->data);
}

void EncodeCOBS(Buffer *buf) {
	size_t lastZeroByte = 0;
	for() {
	}
	writeByte();
}

void EncodeData(Buffer *buf, Command *p) {
	InitBuffer(buf);
	writeByte(buf, 0); //checksum
	writeByte(buf, 0); //destination

	EncodeCOBS(buf);
}
