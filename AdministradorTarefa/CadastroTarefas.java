package AdministradorTarefa;

import java.util.ArrayList;
import java.util.List;

public class CadastroTarefas {
    private List<Tarefa> listaDeTarefas;

    public CadastroTarefas() {
        listaDeTarefas = new ArrayList<>();
    }

    public void adicionarTarefa(String nomeTarefa, String prazo) {
        Tarefa novaTarefa = new Tarefa(nomeTarefa, prazo);
        listaDeTarefas.add(novaTarefa);
        System.out.println("Tarefa adicionada com sucesso!");
    }

    public void exibirDetalhes() {
        if (listaDeTarefas.isEmpty()) {
            System.out.println("Nenhuma tarefa cadastrada.");
        } else {
            System.out.println("\nRelatório de Todas as Tarefas:");
            for (int i = 0; i < listaDeTarefas.size(); i++) {
                System.out.println("\nTarefa " + (i + 1) + ":");
                System.out.println(listaDeTarefas.get(i).detalhes());
            }
        }
    }

    public void removerTarefa(int indice) {
        if (indice >= 0 && indice < listaDeTarefas.size()) {
            listaDeTarefas.remove(indice);
            System.out.println("Tarefa excluída com sucesso!");
        } else {
            System.out.println("Índice da tarefa inválido.");
        }
    }

    public List<Tarefa> obterListaDeTarefas() {
        return listaDeTarefas;
    }
}

