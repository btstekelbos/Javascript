// Looks through an array and only returns elements where the key value pair is: "event" : "addMe!"

window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  'event' : 'addMe!'
},{
  'event' : 'doNotAddMe!'
});

var newArray = window.dataLayer.filter(function(item) {
  return item.event === 'addMe!';
});
// Returns: [{'event' : 'addMe!'}]
