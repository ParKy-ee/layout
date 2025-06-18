const detailList = [
  {
    id: 1,
    text: `detail 1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt tempore consequatur 
        accusantium, facere consequuntur commodi debitis cumque ut! Aperiam placeat, sint `,
  },
  {
    id: 2,
    text: `detail 2 expedita doloribus explicabo minus, deserunt voluptates nobis impedit dolorum qui? Suscipit, animi atque. Iste in dignissimos perspiciatis explicabo illo asperiores cupiditate, ex quos, beatae aliquid dolorum et doloribus voluptatibus? `,
  },
];

$(document).ready(() => {
  $(".a1").click(function () {
    const op = parseInt($(this).attr("id"));
    const detail = detailList.find( de => op === de.id )

    if(detail){
        $('.detail').text(detail.text)
        

        if($('.option-detail').is(':hidden')){
            $('.option-detail').toggle('show')
        }
    }
  });

  $('.hide').click(function() {
    $('.option-detail').toggle('show')
  })



});



