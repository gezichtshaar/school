package org.angry.microservice;

import org.angry.microservice.components.CInputCommunication;
import org.angry.microservice.components.CLogger;
import org.angry.microservice.components.COutputCommunication;
import org.angry.microservice.core.Service;
import org.angry.microservice.interfaces.IComponent;

/**
 * Hello world!
 *
 */
public class App {
	public static void main(String[] args) throws InterruptedException {
		Service s = new Service(new IComponent[] {new CInputCommunication(8080),
													new COutputCommunication(),
													new CLogger(1)});
		s.start();
		Thread.sleep(10 * 1000);
		s.stop();
	}
}
