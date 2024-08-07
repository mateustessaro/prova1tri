package Ligacao;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Ligacao {
    private LocalDateTime dataHora;
    private int minutos;
    private String numeroTelefone;
    private int pulsos;

    public Ligacao(LocalDateTime dataHora, int minutos, String numeroTelefone) {
        this.dataHora = dataHora;
        this.minutos = minutos;
        this.numeroTelefone = numeroTelefone;
        this.pulsos = calcularPulsos();
    }

    private int calcularPulsos() {
        int pulsos;
        if (dataHora.getDayOfWeek().getValue() >= 6) { // Fins de semana
            pulsos = 1;
        } else {
            pulsos = (minutos / 4) + 1;
        }
        return pulsos;
    }

    public LocalDateTime getDataHora() {
        return dataHora;
    }

    public int getMinutos() {
        return minutos;
    }

    public String getNumeroTelefone() {
        return numeroTelefone;
    }

    public int getPulsos() {
        return pulsos;
    }

    public double calcularCusto() {
        return pulsos * 0.08;
    }

    @Override
    public String toString() {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm");
        return "Data/Hora: " + dataHora.format(formatter) +
               ", Minutos: " + minutos +
               ", Número: " + numeroTelefone +
               ", Pulsos: " + pulsos +
               ", Custo: R$ " + calcularCusto();
    }
}
