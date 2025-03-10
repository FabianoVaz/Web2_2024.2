package web2.projeto.model;

import java.time.LocalDate;
import java.util.List;

//import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Data
@Entity
public class Venda {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	// @JsonFormat(pattern = "dd/MM/yyyy")
	private LocalDate data;

	@ManyToOne
	private Cliente cliente;

	@ManyToMany
	private List<Produto> produtos;
}
