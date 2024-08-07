package Ligacao;

import java.util.HashMap;
import java.util.Map;

public class Agenda {
    private Map<String, Telefone> contatos;

    public Agenda() {
        contatos = new HashMap<>();
    }

    public void adicionarContato(Telefone telefone) {
        contatos.put(telefone.getNumero(), telefone);
    }

    public Telefone buscarContato(String numero) {
        return contatos.get(numero);
    }

    @Override
    public String toString() {
        return contatos.values().toString();
    }
}

