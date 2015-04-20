package org.angry.microservice.components;

import org.angry.microservice.core.Message;
import org.angry.microservice.core.MessageBus;
import org.angry.microservice.interfaces.IComponent;

public abstract class BaseComponent implements IComponent {
	
	public final void update(MessageBus messageBus) {
		while (messageBus.hasMessage(this.getName())) {
			update(messageBus.getMessage(this.getName()));
		}
	}

	protected abstract void update(Message message);
}
