angular.module('dnd', [
  'firebase',
  'dnd.default',
  'services.Character',
  'services.class'
 ])

.value('fbURL', 'https://d-and-d.firebaseio.com/0/');
        
