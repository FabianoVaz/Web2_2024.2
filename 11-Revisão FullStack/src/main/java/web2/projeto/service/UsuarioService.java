package web2.projeto.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import web2.projeto.model.Usuario;
import web2.projeto.repository.UsuarioRepositorio;

@Service
public class UsuarioService {

	@Autowired
	private UsuarioRepositorio repo;
	
	public Usuario inserir(Usuario ent) {
		return repo.save(ent);
	}
	
	public List<Usuario> listarTodos(){
		return repo.findAll();
	}
	
	public Optional<Usuario> buscarPorId(int id) {
		return repo.findById(id);
	}
	
	public void remover(int id) {
		repo.deleteById(id);
	}
	
	public Usuario editar(int id, Usuario ent) {
//		if(!repo.existsById(id)) 
//			return ent;
		return repo.save(ent);
	}
}
