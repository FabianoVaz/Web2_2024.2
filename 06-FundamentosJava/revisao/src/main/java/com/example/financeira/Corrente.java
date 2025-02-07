package com.example.financeira;

public class Corrente extends Conta {

	int limite;

	@Override
	public void sacar(int valor) {
		if(saldo + limite >= valor)
			saldo -= valor;
		else
			System.err.println("Saldo Insuficiente!!");
	}

}
