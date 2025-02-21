package web2.projeto.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import web2.projeto.model.Venda;
import web2.projeto.service.VendaService;

@RestController
@RequestMapping("venda")
public class VendaControle {

	@Autowired
	private VendaService service;
	
	@PostMapping
	public Venda inserir(@RequestBody Venda ent) {
		return service.inserir(ent);
	}
	
	@GetMapping
	public List<Venda> listarTodos(){
		return service.listarTodos();
	}
	
	@GetMapping("/{id}")
	public Optional<Venda> buscarPorId(@PathVariable int id) {
		return service.buscarPorId(id);
	}
	
	@DeleteMapping("/{id}")
	public void remover(@PathVariable int id) {
		service.remover(id);
	}
	
	@PutMapping("/{id}")
	public Venda editar(@PathVariable int id, @RequestBody Venda ent) {
		return service.editar(id, ent);
	}
}
