export interface RecipeType {
    id: number,
    title: string,
    image: string,
    imageType: string,
    healthScore: number,
    readyInMinutes:number,
    servings:number,
    analyzedInstructions:[
      {
        steps: [
          {
            number:number,
            steps:string,
            length:{
              number:number,
              unit:string,
            }
          }
        ]
    }];
    extendedIngredients: [
      {
        original:string,
        measures:{
          metric:{
            amount:number, 
            unitShort:string,
          }
        }
      }
    ]
    
}


export interface RecipeCardProp {
    recipe: RecipeType;
    search:searchProps;
  }


  export interface searchProps {
    query: string,
    cuisine: string,
    diet: string,
  }

  export interface searchFunctions {
    setQuery:(query:string)=> void
  setCuisine:(cuisine:string) => void,
  setDiet:(diet:string) => void,
  }

  export interface RouteErrorType {
    data:string; 
    error:{
        message:string;
        status:number;
        statusText:string;
    }
}

export interface User {
  username:string,
  email:string,
}