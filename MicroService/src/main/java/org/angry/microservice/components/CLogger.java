package org.angry.microservice.components;

import org.angry.microservice.core.Message;
import org.angry.microservice.core.MessageBus;

public final class CLogger extends BaseComponent {
	private final int number;
	
	public CLogger(int number) {
		this.number = number;
	}
	
	public void init(MessageBus messageBus) {
	}

	public void update(Message message) {
		System.out.println(String.format("%s: %s", getName(), handle(message.getData())));
	}
	
	public void close(MessageBus messageBus) {
	}
	
	private String handle(String[] data) {
		String val = "[ ";
		for (String d  : data) {
			val += d + " ";
		}
		return val + "]";
	}

	public String getName() {
		return "Logger-" + number;
	}
}
