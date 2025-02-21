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

import web2.projeto.model.Produto;
import web2.projeto.service.ProdutoService;

@RestController
@RequestMapping("produto")
public class ProdutoControle {

	@Autowired
	private ProdutoService service;
	
	@PostMapping
	public Produto inserir(@RequestBody Produto ent) {
		return service.inserir(ent);
	}
	
	@GetMapping
	public List<Produto> listarTodos(){
		return service.listarTodos();
	}
	
	@GetMapping("/{id}")
	public Optional<Produto> buscarPorId(@PathVariable int id) {
		return service.buscarPorId(id);
	}
	
	@DeleteMapping("/{id}")
	public void remover(@PathVariable int id) {
		service.remover(id);
	}
	
	@PutMapping("/{id}")
	public Produto editar(@PathVariable int id, @RequestBody Produto ent) {
		return service.editar(id, ent);
	}
}
