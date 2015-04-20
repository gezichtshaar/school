package org.angry.microservice.core;

import java.util.Arrays;
import java.util.List;

import org.angry.microservice.interfaces.IComponent;
import org.angry.microservice.interfaces.IThreaded;

public final class Service implements IThreaded {
	private final Thread thread;
	private final MessageBus messageBus;
	private final List<IComponent> components;
	private volatile boolean running;
	
	public Service(IComponent[] components) {
		this.thread = new Thread(this);
		this.messageBus = new MessageBus();
		this.components = Arrays.asList(components);
	}
	
	public void start() {
		this.thread.start();
	}
	
	public void stop() {
		this.running = false;
		for(IComponent component : this.components) {
			component.close(this.messageBus);
		}
	}
	
	private void init() {
		for(IComponent component : this.components) {
			this.messageBus.addComponent(component.getName());
			component.init(this.messageBus);
		}
	}
	
	private void tick() {
		for(IComponent component : this.components) {
			component.update(this.messageBus);
		}
	}
	
	public void run() {
		if (this.running || Thread.currentThread() != this.thread) {
			return;
		}
		init();
		this.running = true;
		while(this.running) {
			tick();
		}
		stop();
	}
}
