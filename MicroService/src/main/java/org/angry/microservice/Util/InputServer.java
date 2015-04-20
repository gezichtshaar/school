package org.angry.microservice.Util;

import java.io.ObjectInputStream;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.Queue;
import java.util.concurrent.ConcurrentLinkedQueue;

import org.angry.microservice.interfaces.IThreaded;

public final class InputServer implements IThreaded {
	private final Thread thread;
	private final Queue<Socket> clients;
	private final ServerSocket server;
	private volatile boolean running;

	public InputServer(int port) {
		this.thread = new Thread(this);
		this.clients = new ConcurrentLinkedQueue<Socket>();
		this.server = CreateServer(port);
		this.running = false;
	}

	private static ServerSocket CreateServer(int port) {
		try {
			return new ServerSocket(port);
		} catch (Exception e) {
		}
		return null;
	}
	
	public boolean hasClient() {
		return this.running && this.clients.size() > 0;
	}
	
	public String getClientData() {
		StringBuilder builder = new StringBuilder();
		try {
			Socket socket = this.clients.poll();
			ObjectInputStream dataStream = new ObjectInputStream(socket.getInputStream());
			builder.append(dataStream.readObject());
			dataStream.close();
			socket.close();
		} catch (Exception e) {
		}
		return builder.toString();
	}

	public void start() {
		this.thread.start();
	}

	public void stop() {
		this.running = false;
		this.thread.interrupt();
		close();
	}

	private void close() {
		while (this.clients.size() > 0) {
			try {
				this.clients.poll().close();
			} catch (Exception e) {
			}
		}
		try {
			this.server.close();
		} catch (Exception e) {
		}
		System.out.println("Sockets closed");
	}

	public void run() {
		if (this.server == null || this.running || Thread.currentThread() != this.thread) {
			return;
		}
		this.running = true;
		while (this.running) {
			try {
				this.clients.add(this.server.accept());
			} catch (Exception e) {
			}
		}
	}
}
