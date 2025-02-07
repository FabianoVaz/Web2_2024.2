package com.example.financeira;

public abstract class Conta implements InterfaceConta{

	String titular;
	int numero, agencia, saldo;

	public void depositar(int valor) {
		saldo += valor;
	}
	
}
