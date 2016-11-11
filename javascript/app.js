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

  function shuffle(array){
    var m = array.length, t, i

    while (m) {
      i = Math.floor(Math.random() * m--)

      t = array[m]
      array[m] = array[i]
      array[i] = t
    }

    return array.join(' ')
  }

  function alterSpacing(){

    vaporIpsum = vaporReference.split('<br><br>').join('$')
    var spaces = ''
    for(var i = count; i >= 1; i--){
      spaces += '&nbsp;'
    }
    vaporIpsum = vaporIpsum.split('').join(spaces)
    vaporIpsum = vaporIpsum.split('$').join('<br><br>')

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

    sentance = shuffle(words)
    // for(var i = 0; i < 10; i++){
    //   num = Math.floor(Math.random()*10)
    //   if(i < 9){
    //     sentance += words[num] + ' '
    //   } else if( i == 9) {
    //     sentance += words[num] + '. '
    //   }
    // }

    return sentance
  }
})
