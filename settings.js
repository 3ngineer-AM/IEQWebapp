
window.addEventListener('load', function () {
  // Your document is loaded.
  const button = document.getElementById('dc-btn');
  button.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        console.log(xhr.responseText);
      }
    };
    xhr.open('GET', 'http://og09ieq.ngrok.io/insert_DC.php?DC_flag=1');
    xhr.send();
  });
});
