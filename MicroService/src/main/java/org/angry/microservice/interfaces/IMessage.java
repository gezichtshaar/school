package org.angry.microservice.interfaces;

public interface IMessage<T> {
	public String getSender();

	public String getRecipient();

	public T getData();
}
