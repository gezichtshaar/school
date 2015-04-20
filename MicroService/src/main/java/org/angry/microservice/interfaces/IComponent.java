package org.angry.microservice.interfaces;

import org.angry.microservice.core.MessageBus;

public interface IComponent {
	public void init(MessageBus messageBus);

	public void update(MessageBus messageBus);
	
	public void close(MessageBus messageBus);

	public String getName();
}
