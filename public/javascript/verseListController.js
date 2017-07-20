$(document).ready(()=>{
  console.log("ready");

  $('button#delete').on('click',(e)=>{
    console.log('click');
    let targetId = $(e.target).attr('verseid');
    let item = e.target.parentNode.parentNode;
    console.log(item);
    $.ajax({
      url: `/verse/delete/${targetId}`,
      method: 'GET'
    }).then((response)=>{
      console.log(response);
      $(item).remove();
    }).catch((err)=> console.log(err));
  })

  $('button#play').on('click', (e)=>{
    console.log('click');
    let targetId = $(e.target).attr('verseid');
    console.log(`/verse/${targetId}`);
    window.location.replace(`/verse/${targetId}`);
  })
})
