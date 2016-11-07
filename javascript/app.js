$( 'document' ).ready( function(){

  $( "button" ).click(function() {
    paragraphNum = $( '#paragraph-num' ).val()
    $( '#ipsum' ).html(makeManyParagraphs(paragraphNum))
  })

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
    return '<p>' + paragraph + '</p>'
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
