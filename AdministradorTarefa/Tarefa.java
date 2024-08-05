package AdministradorTarefa;

public class Tarefa {
    private String nomeTarefa;
    private String prazo;

    public Tarefa(String nomeTarefa, String prazo) {
        this.nomeTarefa = nomeTarefa;
        this.prazo = prazo;
    }

    public String getNomeTarefa() {
        return nomeTarefa;
    }

    public String getPrazo() {
        return prazo;
    }

    public String detalhes() {
        return "Nome da Tarefa: " + nomeTarefa + "\nData Limite: " + prazo;
    }
}
