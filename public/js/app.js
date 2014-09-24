angular.module('dnd', [
  'firebase',
  'dnd.default',
  'services.getCharacter'])

.value('fbURL', 'https://d-and-d.firebaseio.com/');
        
