package com.example.fundamentos;

// TAD -> Type Abstract Data
public class Cliente {

	// Atributos
	private int id;
	private String nome;
	private float salario;

	// Construtor
	public Cliente() {
		
	}
	
	public Cliente(String nome, float salario) {
		this.nome = nome;
		this.salario = salario;
	}
	
	// Métodos de acesso (Get e Set)
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public float getSalario() {
		return salario;
	}
	public void setSalario(float salario) {
		this.salario = salario;
	}
	
}