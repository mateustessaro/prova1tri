package concessionaria;

import java.util.ArrayList;
import java.util.Scanner;

public class GestaoVeiculo {
    private ArrayList<Veiculo> veiculos;
    private Scanner scanner;
    
    public GestaoVeiculo() {
        veiculos = new ArrayList<>();
        scanner = new Scanner(System.in);
    }
    
    public void iniciar() {
        int opcao;
        
        do {
            System.out.println("\nMenu");
            System.out.println("1 - Adicionar carro");
            System.out.println("2 - Adicionar motocicleta");
            System.out.println("3 - Visualizar detalhes dos veículos");
            System.out.println("4 - Sair");
            System.out.print("Escolha uma opção: ");
            opcao = scanner.nextInt();
            scanner.nextLine(); 
            
            switch(opcao) {
                case 1:
                    adicionarCarro();
                    break;
                case 2:
                    adicionarMoto();
                    break;    
                case 3:
                    visualizarDetalhesVeiculos();
                    break;    
                case 4:
                    System.out.println("Obrigado por usar o sistema de gestão dos veículos");
                    break;    
                default:    
                    System.out.println("Opção inválida! Tente novamente.");
            }
            
        } while(opcao != 4);
    }
    
    private void adicionarCarro() {
        System.out.print("Digite o modelo do carro: ");
        String modelo = scanner.nextLine();
        System.out.print("Digite a marca do carro: ");
        String marca = scanner.nextLine();
        System.out.print("Digite o ano do carro: ");
        int ano = scanner.nextInt();
        System.out.print("Digite a capacidade de passageiros: ");
        int capacidadePassageiro = scanner.nextInt();
        scanner.nextLine();  
        
        Carro novoCarro = new Carro(modelo, marca, ano, capacidadePassageiro, capacidadePassageiro);
        veiculos.add(novoCarro);
        
        System.out.println("Veículo adicionado com sucesso!");
    }
    
    private void visualizarDetalhesVeiculos() {
        if(veiculos.isEmpty()) {
            System.out.println("Nenhum veículo disponível!");
            return;
        }
        for(Veiculo veiculo : veiculos) {
            veiculo.exibirDetalhes();
            System.out.println("------------------------");
        }            
    }
    
    private void adicionarMoto() {
        System.out.print("Digite o modelo da moto: ");
        String modelo = scanner.nextLine();
        System.out.print("Digite a marca da moto: ");
        String marca = scanner.nextLine();
        System.out.print("Digite o ano da moto: ");
        int ano = scanner.nextInt();
        System.out.print("Digite a capacidade de passageiros: ");
        int capacidadePassageiro = scanner.nextInt();
        scanner.nextLine();  
        
        Motocicleta novaMotocicleta = new Motocicleta(modelo, marca, ano, capacidadePassageiro);
        veiculos.add(novaMotocicleta);
        
        System.out.println("Veículo adicionado com sucesso!");
    }
}
