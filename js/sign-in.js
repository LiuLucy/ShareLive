$(function() {
  $ajax.({
    url: 'http://192.168.1.109:7777/api/',
    dataType: 'text' ,
    success: function(data) {
      alert(data);
    }
  });
});
