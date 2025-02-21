package web2.projeto;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import web2.projeto.model.Cliente;

@SpringBootApplication
public class ProjetoVendaApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProjetoVendaApplication.class, args);
		
		Cliente c = new Cliente();
		c.setNome("abc");
	}

}
