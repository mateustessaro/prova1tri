package Ligacao;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class ControladorLigacoes {
    private List<Ligacao> ligacoes;

    public ControladorLigacoes() {
        ligacoes = new ArrayList<>();
    }

    public void registrarLigacao(int minutos, String numeroTelefone, LocalDateTime dataHora) {
        Ligacao ligacao = new Ligacao(dataHora, minutos, numeroTelefone);
        ligacoes.add(ligacao);
    }

    public void listarLigacoes() {
        for (Ligacao ligacao : ligacoes) {
            System.out.println(ligacao);
        }
    }

    public double calcularTotal() {
        double total = 0;
        for (Ligacao ligacao : ligacoes) {
            total += ligacao.calcularCusto();
        }
        return total;
    }
}

