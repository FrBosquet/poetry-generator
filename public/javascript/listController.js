$(document).ready(()=>{
  console.log("ready");

  $('button#detail').on('click',(e)=>{
    console.log($(e.target).attr('wordid'));

  })

  $('button#delete').on('click',(e)=>{
    let targetId = $(e.target).attr('wordid');
    let item = e.target.parentNode;
    console.log(item, father);
    $.ajax({
      url: `/words/delete/${targetId}`,
      method: 'GET'
    }).then((response)=>{
      console.log(response);
      $(item).remove();
    }).catch((err)=> console.log(err));
  })
})
