package AdministradorTarefa;

import java.util.Scanner;

public class GerenciadorDeTarefas {
    private CadastroTarefas cadastroTarefas;

    public GerenciadorDeTarefas(CadastroTarefas cadastroTarefas) {
        this.cadastroTarefas = cadastroTarefas;
    }

    public void excluirTarefa() {
        Scanner scanner = new Scanner(System.in);

        // Mostrar todas as tarefas antes de deletar
        cadastroTarefas.exibirDetalhes();

        // Solicitar ao usuário o índice da tarefa a ser removida
        System.out.print("Digite o número da tarefa para excluir (começando de 1): ");
        int indice = scanner.nextInt() - 1;  // Ajusta o índice para o zero baseado

        // Excluir a tarefa
        cadastroTarefas.removerTarefa(indice);
    }
}

