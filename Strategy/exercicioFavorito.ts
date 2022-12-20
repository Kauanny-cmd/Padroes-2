export interface ExercicioFavorito {
  /* A interfaxe ExercicioFavoritonotifique na nossa classe principal, qual decisão foi tomada.*/

  
    comecar(): void;
  }

  /*O Strategy permite encapsular cada um dos exercícios em uma classe diferente.*/
  /*Isso evita que seja usado muitos ifs */
  export class Correr implements ExercicioFavorito {
    public comecar(): void {
        /* Cada classe que a implemente deve conter o método comecar() */
      console.log('Correr')
    }
  }
  
  export class Futebol implements ExercicioFavorito {
    public comecar(): void {
      console.log('Jogar futebol')
    }
  }
  
  export class Musculacao implements ExercicioFavorito {
    public comecar(): void {
      console.log('Fazer musculação')
    }
  }