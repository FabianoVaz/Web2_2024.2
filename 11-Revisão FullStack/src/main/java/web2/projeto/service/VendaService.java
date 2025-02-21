package web2.projeto.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import web2.projeto.model.Venda;
import web2.projeto.repository.VendaRepositorio;

@Service
public class VendaService {

	@Autowired
	private VendaRepositorio repo;
	
	public Venda inserir(Venda ent) {
		return repo.save(ent);
	}
	
	public List<Venda> listarTodos(){
		return repo.findAll();
	}
	
	public Optional<Venda> buscarPorId(int id) {
		return repo.findById(id);
	}
	
	public void remover(int id) {
		repo.deleteById(id);
	}
	
	public Venda editar(int id, Venda ent) {
//		if(!repo.existsById(id)) 
//			return ent;
		return repo.save(ent);
	}
}
