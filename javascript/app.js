$( 'document' ).ready( function(){

  $( "button" ).click(function() {
    paragraphNum = $( '#paragraph-num' ).val()
    $( '#ipsum' ).html(makeManyParagraphs(paragraphNum))
  })

  function test() {
    //$( '#ipsum' ).html('narb')
  }

  //$( '#ipsum' ).html(makeManyParagraphs())

  function makeManyParagraphs(paraNum) {
    multiParagraph = ''
    for (k = 0; k < paraNum; k++){
      multiParagraph += makeParagraph()
    }
    return multiParagraph
  }

  function makeParagraph() {
    paragraph = ''
    for (j = 0; j < 4; j++){
      paragraph += makeSentace()
    }
    return '<p>' + paragraph + '</p>'
  }

  function makeSentace() {
    words = ['vaporwave', 'aesthetic', 'meme', 'you\'ve got mail', 'remember summer days', 'mallsoft', 'where am i', 'im dreaming', 'where are you going', '100% satisfaction guaranteed']

    sentance = ''
    for(i = 0; i < 10; i++){
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
