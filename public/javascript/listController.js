$(document).ready(()=>{
  console.log("ready");

  $('button.delete').on('click',(e)=>{
    let targetId = $(e.target).attr('wordid');
    console.log('Borrar', targetId);
    let item = e.target.parentNode.parentNode;
    $.ajax({
      url: `/words/delete/${targetId}`,
      method: 'GET'
    }).then((response)=>{
      $(item).remove();
    }).catch(
      (err)=> console.log(err)
    );
  })
})
