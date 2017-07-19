$(document).ready(()=>{
    $("#newWordForm").on('submit', (e)=>{
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
    $(":button[wordid='detail596f29112b8609063c63b955']").on('click', (()=>{
      console.log("hola botones");
      // $.ajax({
      // url: `${this.BASE_URL}/characters`,
      // method: "GET",
      // });
    }));
});
