<script>
                    var selectedItems = [];
                  
                    function updateSelectedItems() {
                      selectedItems = [];
                      var checkboxes = document.querySelectorAll('input[type="checkbox"]');
                      for (var i = 0; i < checkboxes.length; i++) {
                        if (checkboxes[i].checked) {
                          selectedItems.push(checkboxes[i].value);
                        }
                      }
                    }
                  
                    function preventDeselection(checkbox) {
                      if (selectedItems.length >= 3 && !checkbox.checked) {
                        checkbox.checked = true;
                        alert('You can only select a maximum of three items.');
                      }
                    }
                  
                    document.querySelector('#coursesList').addEventListener('change', function(event) {
                      var checkbox = event.target;
                      if (checkbox.checked) {
                        updateSelectedItems();
                        preventDeselection(checkbox);
                      }
                    });
</script>