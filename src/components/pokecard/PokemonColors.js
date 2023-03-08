
const PokemonColors = (type) => {
    switch(type) {
      case 'normal': 
        return '#d99879';
      
      case 'fighting': 
        return '#e40017';
      
      case 'flying': 
        return '#51c4d3';
    
      case 'poison': 
        return '#443C68';
  
      case 'ground': 
        return '#966c3b';
  
      case 'rock': 
        return '#999b84';
  
      case 'bug': 
        return '#1e6f5c';
  
      case 'ghost': 
        return '#301b3f';
  
      case 'steel': 
        return '#5b5b5b';
  
      case 'fire': 
        return '#f48b29';
  
      case 'water': 
        return '#23689b';
  
      case 'grass': 
        return '#54e346';
  
      case 'electric': 
        return '#fdca40';
  
      case 'psychic': 
        return '#ce1f6a';
  
      case 'ice': 
        return '#8ab6d6';
      
      case 'dragon': 
        return '#5c6e91';
      
      case 'dark': 
        return '#222831';

      case 'fairy': 
        return '#f14668';

      default: 
        return '#ffffff';
    }
}

export default PokemonColors