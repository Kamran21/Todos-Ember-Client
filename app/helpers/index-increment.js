import Ember from 'ember';



export function indexIncrement([value, ...rest]) {
  
  return `${value+1}`;
}

export default Ember.Helper.helper(indexIncrement);
