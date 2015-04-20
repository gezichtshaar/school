package org.angry.microservice.Util;

import java.io.ObjectOutputStream;
import java.net.Socket;
import java.util.Queue;
import java.util.concurrent.ConcurrentLinkedQueue;

import org.angry.microservice.core.Message;
import org.angry.microservice.interfaces.IThreaded;

public final class OutputServer implements IThreaded {
	private final Thread thread;
	private final Queue<Message> messages;
	private volatile boolean running;

	public OutputServer() {
		this.thread = new Thread(this);
		this.messages = new ConcurrentLinkedQueue<Message>();
		this.running = false;
	}

	public void addMessage(Message message) {
		this.messages.add(message);
	}

	public void start() {
		this.thread.start();
	}

	public void stop() {
		this.running = false;
	}

	private void sendMessages() {
		while (this.messages.size() > 0) {
			Message message = this.messages.poll();
			try {
				Socket socket = new Socket("localhost", 8080);
				ObjectOutputStream dataStream = new ObjectOutputStream(socket.getOutputStream());
				dataStream.writeObject("Test");
				dataStream.close();
				socket.close();
			} catch (Exception e) {
			}
		}
	}

	public void run() {
		if (this.running || Thread.currentThread() != this.thread) {
			return;
		}
		this.running = true;
		while (this.running) {
			try {
				sendMessages();
				Thread.sleep(100l);
			} catch (Exception e) {
			}
		}
	}
}
