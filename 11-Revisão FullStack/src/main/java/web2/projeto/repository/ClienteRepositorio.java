package web2.projeto.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import web2.projeto.model.Cliente;

@Repository
public interface ClienteRepositorio extends JpaRepository<Cliente, Integer>{

}
