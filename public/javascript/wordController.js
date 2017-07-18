$(document).ready(()=>{
    $("#newWordForm").on('submit', (e)=>{
      e.preventDefault();
      let data = $(e.target).serialize();
      $.ajax({
        url: '/word/new',
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
    })
})
