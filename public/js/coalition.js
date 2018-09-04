 $(document).ready(function() {
      window.init_SmartWizard();
      window.init_wysiwyg();
      window.init_TagsInput();

      // function that handles when the form is submitted
      $('.buttonFinish').click(function(e){
            e.preventDefault()
            messageData={}

            // now collect all the fields from the foem
            messageData.name=$('#inputSuccess1').val().trim()
            messageData.name=$('#inputSuccess2').val().trim()
      })
})
