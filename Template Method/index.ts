/*
  * A classe abstrata define um método de modelo que contém um esqueleto de alguns
  * algoritmo, composto de chamadas para (geralmente) operações primitivas abstratas.
  *
  * Subclasses concretas devem implementar essas operações, mas deixar o modelo
  * método em si intacto.
 */
abstract class AbstractClass {
    /**
     * O método template define o esqueleto de um algoritmo.
     */
    public templateMethod(): void {
        this.baseOperation1();
        this.requiredOperations1();
        this.baseOperation2();
        this.hook1();
        this.requiredOperation2();
        this.baseOperation3();
        this.hook2();
    }

    /**
     * Essas operações já possuem implementações.
     */
    protected baseOperation1(): void {
        console.log('AbstractClass diz: Eu estou fazendo a maior parte do trabalho');
    }

    protected baseOperation2(): void {
        console.log('AbstractClass diz: Mas eu deixei as subclasses sobrescreverem algumas operações');
    }

    protected baseOperation3(): void {
        console.log('AbstractClass diz: Mas estou fazendo a maior parte do trabalho de qualquer maneira');
    }

    /**
     * Essas operações devem ser implementadas em subclasses.
     */
    protected abstract requiredOperations1(): void;

    protected abstract requiredOperation2(): void;

    /**
     * Estes são "ganchos". As subclasses podem substituí-las, mas não é obrigatório
      * já que os hooks já possuem implementação padrão (mas vazia). Hooks
      * fornecer pontos de extensão adicionais em alguns lugares cruciais do
      * algoritmo.
     */
    protected hook1(): void { }

    protected hook2(): void { }
}

/**
  * As classes concretas devem implementar todas as operações abstratas da classe base.
  * Eles também podem substituir algumas operações com uma implementação padrão.
 */
class ConcreteClass1 extends AbstractClass {
    protected requiredOperations1(): void {
        console.log('ConcreteClass1 diz: Implementado -> Operation1');
    }

    protected requiredOperation2(): void {
        console.log('ConcreteClass1 diz: Implementado -> Operation2');
    }
}

/**
 * Normalmente, as classes concretas substituem apenas uma fração das operações da classe base.
 */
class ConcreteClass2 extends AbstractClass {
    protected requiredOperations1(): void {
        console.log('ConcreteClass2 diz: Implementado -> Operation1');
    }

    protected requiredOperation2(): void {
        console.log('ConcreteClass2 diz: Implementado -> Operation2');
    }

    protected hook1(): void {
        console.log('ConcreteClass2 diz: Overridden Hook1');
    }
}

/**
  * O código do cliente chama o método de modelo para executar o algoritmo. O código do cliente
  * não precisa conhecer a classe concreta de um objeto com o qual trabalha, como
  * desde que funcione com objetos através da interface de sua classe base.
 */
function clientCode(abstractClass: AbstractClass) {
    // ...
    abstractClass.templateMethod();
    // ...
}

console.log('O mesmo código de cliente pode funcionar com diferentes subclasses:');
clientCode(new ConcreteClass1());
console.log('');

console.log('O mesmo código de cliente pode funcionar com diferentes subclasses:');
clientCode(new ConcreteClass2());