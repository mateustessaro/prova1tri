package concessionaria;


public class Carro extends Veiculo{
	private int capacidadePassageiro;

	public int getCapacidadePassageiro() {
		return capacidadePassageiro;
	}
	
	@Override
	public void exibirDetalhes() {
		super.exibirDetalhes();
		System.out.println("Capacidade de passageiros:"+ capacidadePassageiro);
	}

	public void setCapacidadePassageiro(int capacidadePassageiro) {
		this.capacidadePassageiro = capacidadePassageiro;
	}

	public Carro(String modelo, String marca, int ano, int capacidadePassegeiro, int capacidadePassageiro) {
		super(modelo, marca, ano);
		this.capacidadePassageiro = capacidadePassageiro;
		
	}

}
