package com.example.financeira;

public class Poupanca extends Conta {

	
	@Override
	public void sacar(int valor) {
		if(saldo >= valor)
			saldo -= valor;
		else
			System.err.println("Saldo insuficiente!!");
	}

}
