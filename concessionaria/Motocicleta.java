package concessionaria;

public class Motocicleta extends Veiculo {

	public int QuantidadeDeCilindros;
	
	
	public Motocicleta(String modelo, String marca, int ano, int QuantidadeDeCilindros) {
		super(modelo, marca, ano);
		this.QuantidadeDeCilindros = QuantidadeDeCilindros;
	}


	public int QuantidadeDeCilindros() {
		return QuantidadeDeCilindros;
	}


	public void QuantidadeDeCilindros(int quantidadeDeCilindros) {
		QuantidadeDeCilindros = quantidadeDeCilindros;
	}


	@Override
	public void exibirDetalhes() {
		super.exibirDetalhes();
		System.out.println("cilindradas: " + QuantidadeDeCilindros);
	}
	

}