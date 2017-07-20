$(document).ready(()=>{
  console.log("ready");

  $('button#save').on('click',(e)=>{
    console.log($(e.target).attr('verse'));
    console.log($(e.target).attr('user'));

    let content = $(e.target).attr('content')
    let user_id = $(e.target).attr('user_id')
    $.ajax({
      url: `/verse/save`,
      data: {content, user_id},
      method: 'POST'
    }).then((response)=>{
      console.log(response);
    }).catch((err)=> console.log(err));
  })
})
