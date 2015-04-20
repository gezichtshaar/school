package org.angry.microservice.components;

import org.angry.microservice.Util.InputServer;
import org.angry.microservice.core.Message;
import org.angry.microservice.core.MessageBus;
import org.angry.microservice.interfaces.IComponent;

public final class CInputCommunication implements IComponent {
	private final InputServer server;

	public CInputCommunication(int port) {
		this.server = new InputServer(port);
	}
	
	public void init(MessageBus messageBus) {
		this.server.start();
	}

	public void update(MessageBus messageBus) {
		while (this.server.hasClient()) {
			messageBus.send(new Message(getName(), "Logger-1", new String[] {this.server.getClientData()}));
			messageBus.send(new Message(getName(), "OutputCommunication", new String[] {}));
		}
	}
	
	public void close(MessageBus messageBus) {
		this.server.stop();
	}

	public String getName() {
		return "InputCommunication";
	}
}
