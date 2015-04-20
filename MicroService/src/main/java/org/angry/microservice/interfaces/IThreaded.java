package org.angry.microservice.interfaces;

public interface IThreaded extends Runnable {
	public void start();
	public void stop();
}
