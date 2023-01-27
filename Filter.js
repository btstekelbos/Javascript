// Looks through an array and only returns elements where the key value pair is: "event" : "addMe!"
<script>
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  'event' : 'addMe!'
},{
  'event' : 'doNotAddMe!'
});

var newArray = window.dataLayer.filter(function(item) {
  return item.event === 'addMe!';
});
</script>
// Returns: [{'event' : 'addMe!'}]

