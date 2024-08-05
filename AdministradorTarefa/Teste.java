package AdministradorTarefa;

import java.util.Scanner;

public class Teste {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        CadastroTarefas cadastroTarefas = new CadastroTarefas();
        GerenciadorDeTarefas gerenciadorDeTarefas = new GerenciadorDeTarefas(cadastroTarefas);
        String opcaoMenu;

        do {
            System.out.println("\nMenu:");
            System.out.println("1. Visualizar relatório de todas as tarefas");
            System.out.println("2. Adicionar nova tarefa");
            System.out.println("3. Excluir uma tarefa");
            System.out.println("4. Sair");
            System.out.print("Escolha uma opção: ");
            String opcao = scanner.nextLine().trim();

            switch (opcao) {
                case "1":
                    cadastroTarefas.exibirDetalhes();
                    break;

                case "2":
                    String adicionarMais;
                    do {
                        System.out.print("Nome da tarefa: ");
                        String nomeTarefa = scanner.nextLine();

                        System.out.print("Data limite da tarefa (dd/mm/aaaa): ");
                        String prazo = scanner.nextLine();

                        cadastroTarefas.adicionarTarefa(nomeTarefa, prazo);

                        System.out.print("Deseja adicionar uma nova tarefa? (SIM/NAO): ");
                        adicionarMais = scanner.nextLine().trim().toUpperCase();

                    } while (adicionarMais.equals("SIM"));
                    break;

                case "3":
                    System.out.print("Deseja excluir uma tarefa? (SIM/NAO): ");
                    String excluirResposta = scanner.nextLine().trim().toUpperCase();

                    if (excluirResposta.equals("SIM")) {
                        gerenciadorDeTarefas.excluirTarefa();
                    }
                    break;

                case "4":
                    System.out.println("Programa encerrado.");
                    scanner.close();
                    return;

                default:
                    System.out.println("Opção inválida. Tente novamente.");
                    break;
            }

            System.out.print("Digite 1 para visualizar o relatório novamente, "
            		+ "2 para adicionar nova tarefa, "
            		+ "3 para excluir uma tarefa ou "
            		+ "qualquer outra tecla para sair: ");
            opcaoMenu = scanner.nextLine().trim();

        } while (opcaoMenu.equals("1") || opcaoMenu.equals("2") || opcaoMenu.equals("3"));

        System.out.println("Programa encerrado.");
        scanner.close();
    }
}

