package web2.projeto.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import web2.projeto.model.Venda;

@Repository
public interface VendaRepositorio extends JpaRepository<Venda, Integer>{

}
