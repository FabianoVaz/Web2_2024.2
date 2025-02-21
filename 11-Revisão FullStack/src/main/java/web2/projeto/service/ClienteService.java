package web2.projeto.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import web2.projeto.model.Cliente;
import web2.projeto.repository.ClienteRepositorio;

@Service
public class ClienteService {

	@Autowired
	private ClienteRepositorio repo;
	
	public Cliente inserir(Cliente ent) {
		return repo.save(ent);
	}
	
	public List<Cliente> listarTodos(){
		return repo.findAll();
	}
	
	public Optional<Cliente> buscarPorId(int id) {
		return repo.findById(id);
	}
	
	public void remover(int id) {
		repo.deleteById(id);
	}
	
	public Cliente editar(int id, Cliente ent) {
//		if(!repo.existsById(id)) 
//			return ent;
		return repo.save(ent);
	}
}
