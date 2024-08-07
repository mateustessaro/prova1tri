package Ligacao;

import java.time.LocalDateTime;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Agenda agenda = new Agenda();
        ControladorLigacoes controlador = new ControladorLigacoes();

        // Adiciona alguns contatos à agenda
        agenda.adicionarContato(new Telefone("123456789", "Maria"));
        agenda.adicionarContato(new Telefone("987654321", "João"));

        // Exemplo de interação com o usuário
        while (true) {
            System.out.println("1. Adicionar ligação");
            System.out.println("2. Listar ligações");
            System.out.println("3. Calcular custo total");
            System.out.println("4. Sair");
            System.out.print("Escolha uma opção: ");
            int opcao = scanner.nextInt();
            scanner.nextLine(); // Limpa o buffer

            switch (opcao) {
                case 1:
                    System.out.print("Digite a data e hora da ligação (yyyy-MM-ddTHH:mm): ");
                    LocalDateTime dataHora = LocalDateTime.parse(scanner.nextLine());
                    System.out.print("Digite a duração da ligação em minutos: ");
                    int minutos = scanner.nextInt();
                    scanner.nextLine(); // Limpa o buffer
                    System.out.print("Digite o número do telefone (ou 'agenda' para escolher da agenda): ");
                    String numeroTelefone = scanner.nextLine();
                    if (numeroTelefone.equals("agenda")) {
                        System.out.println("Contatos na agenda:");
                        System.out.println(agenda);
                        System.out.print("Escolha o número do telefone: ");
                        numeroTelefone = scanner.nextLine();
                    }
                    controlador.registrarLigacao(minutos, numeroTelefone, dataHora);
                    break;
                case 2:
                    controlador.listarLigacoes();
                    break;
                case 3:
                    System.out.println("Custo total: R$ " + controlador.calcularTotal());
                    break;
                case 4:
                    System.out.println("Saindo...");
                    scanner.close();
                    return;
                default:
                    System.out.println("Opção inválida!");
            }
        }
    }
}

