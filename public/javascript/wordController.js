$(document).ready(()=>{
    $("#form").on('submit', (e)=>{
      e.preventDefault();
      let data = $(e.target).serialize();
      $.ajax({
        url: '/words/new',
        dataType: 'JSON',
        data: data,
        method: 'POST'
      })
      .then((response)=> {
        console.log(response.msg);
        $('#message').html(response.msg);
        $('#formSelect').val('who');
        $('#formContent').val('');
      });
    });

    let formConten = $('#formContent');

    $("#formSelect").on('change', (e)=>{
       let selectValue = $(e.target).val();
       let placeHolder;

       switch(selectValue){
         case 'who':
          placeHolder = 'Algo como "damisela"';
         break;
         case 'verb':
          placeHolder = 'Algo como "desearía"';
         break;
         case 'adj':
          placeHolder = 'Algo como "bonita"';
         break;
         case 'what':
          placeHolder = 'Algo como "quererte"';
         break;
         case 'how':
          placeHolder = 'Algo como "fuerte"';
         break;
         case 'where':
          placeHolder = 'Algo como "en un bosque"';
         break;
         case 'when':
          placeHolder = 'Algo como "toda la noche"';
         break;
       }

       formConten.attr('placeholder', placeHolder);
     });

});
