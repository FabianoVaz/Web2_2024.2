package web2.projeto.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import web2.projeto.model.Produto;
import web2.projeto.repository.ProdutoRepositorio;

@Service
public class ProdutoService {

	@Autowired
	private ProdutoRepositorio repo;
	
	public Produto inserir(Produto ent) {
		return repo.save(ent);
	}
	
	public List<Produto> listarTodos(){
		return repo.findAll();
	}
	
	public Optional<Produto> buscarPorId(int id) {
		return repo.findById(id);
	}
	
	public void remover(int id) {
		repo.deleteById(id);
	}
	
	public Produto editar(int id, Produto ent) {
//		if(!repo.existsById(id)) 
//			return ent;
		return repo.save(ent);
	}
}
