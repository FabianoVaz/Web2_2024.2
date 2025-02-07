package com.example.financeira;

public class Teste {

	public static void main(String[] args) {

		Poupanca conta1 = new Poupanca();
		conta1.saldo = 100;
		conta1.depositar(1000);
		
		Corrente conta2 = new Corrente();
		conta2.saldo = 200;
		conta2.limite = 50;
		
		conta2.depositar(500);
		
//		System.out.println(conta1.saldo);
		System.out.println(conta2.saldo);
		
		conta1.sacar(50);
//		System.out.println(conta1.saldo);
		
		conta2.sacar(50);
		System.out.println(conta2.saldo);
		
		conta2.sacar(701);
		System.out.println(conta2.saldo);
		
	}

}
