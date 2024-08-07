package Ligacao;

public class Telefone {
    private String numero;
    private String nome;

    public Telefone(String numero, String nome) {
        this.numero = numero;
        this.nome = nome;
    }

    public String getNumero() {
        return numero;
    }

    public String getNome() {
        return nome;
    }

    @Override
    public String toString() {
        return nome + " (" + numero + ")";
    }
}
