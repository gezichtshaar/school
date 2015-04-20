package org.angry.microservice.components;

import org.angry.microservice.Util.OutputServer;
import org.angry.microservice.core.Message;
import org.angry.microservice.core.MessageBus;

public final class COutputCommunication extends BaseComponent {
	private final OutputServer server;
	
	public COutputCommunication() {
		this.server = new OutputServer();
	}

	public void init(MessageBus messageBus) {
		this.server.start();
	}

	public void update(Message message) {
		this.server.addMessage(message);
	}

	public void close(MessageBus messageBus) {
		this.server.stop();
	}

	public String getName() {
		return "OutputCommunication";
	}
}
