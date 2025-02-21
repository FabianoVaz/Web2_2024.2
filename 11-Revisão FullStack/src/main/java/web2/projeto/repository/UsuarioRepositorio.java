package web2.projeto.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import web2.projeto.model.Usuario;

@Repository
public interface UsuarioRepositorio extends JpaRepository<Usuario, Integer>{

}
