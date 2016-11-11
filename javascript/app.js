$( 'document' ).ready( function(){

  vaporIpsum = '';
  vaporReference = ''
  count = 0
  buttonsAreActive = false

  $( ".ipsum-button" ).click(function() {
    buttonsAreActive = true
    paragraphNum = $( '#paragraph-num' ).val()
    vaporIpsum = makeManyParagraphs(paragraphNum)
    vaporReference = vaporIpsum

    $( '#ipsum' ).html(vaporIpsum)
  })

  $( ".toggle-plus" ).click(function() {
    if(count < 4 && buttonsAreActive){
      count++
      alterSpacing()
    }
  })
  $( '.toggle-minus').click(function() {
    if(count > 0 && buttonsAreActive){
      count--
      alterSpacing()
    }
  })

  function alterSpacing(){

    vaporIpsum = vaporReference.split('<br><br>').join('$')

    //this can be made waaaay better
    if (count == 1){
      vaporIpsum = vaporIpsum.split('').join('&nbsp;')
    }
    if (count == 2){
      vaporIpsum = vaporIpsum.split('').join('&nbsp;&nbsp;')
    }
    if (count == 3){
      vaporIpsum = vaporIpsum.split('').join('&nbsp;&nbsp;&nbsp;')
    }
    if (count == 4){
      vaporIpsum = vaporIpsum.split('').join('&nbsp;&nbsp;&nbsp;&nbsp;')
    }

    vaporIpsum = vaporIpsum.split('$').join('<br><br>')

    //resetLineBreaks()

    $( '#ipsum' ).html(vaporIpsum)

  }

  function makeManyParagraphs(paraNum) {
    multiParagraph = ''
    for (var i = 0; i < paraNum; i++){
      multiParagraph += makeParagraph()
    }
    return multiParagraph
  }

  function makeParagraph() {
    paragraph = ''
    for (var i = 0; i < 4; i++){
      paragraph += makeSentace()
    }
    return paragraph + '<br><br>'
  }

  function makeSentace() {
    words = ['vaporwave', 'aesthetic', 'meme', 'you\'ve got mail', 'remember summer days', 'mallsoft', 'where am i', 'im dreaming', 'where are you going', '100% satisfaction guaranteed']

    sentance = ''
    for(var i = 0; i < 10; i++){
      num = Math.floor(Math.random()*10)
      if(i < 9){
        sentance += words[num] + ' '
      } else if( i == 9) {
        sentance += words[num] + '. '
      }
    }

    return sentance
  }
})
