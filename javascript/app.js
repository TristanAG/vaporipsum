$( 'document' ).ready( function(){


  vaporIpsum = ''
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

    return array.join(' ') + ' '
  }

  function alterSpacing(){

    vaporIpsum = vaporReference.split('<br><br>').join('$')
    var spaces = ''
    for(var i = count; i >= 1; i--){
      spaces += '&nbsp;'
    }
    vaporIpsum = vaporIpsum.split('').join(spaces).split('$').join('<br><br>')

    $( '#ipsum' ).html(spaces + vaporIpsum)
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
    words = [ 'vaporwave',
              'aesthetic',
              '1999',
              'relax',
              'everything will be ok',
              'sleeping in',
              'meme',
              'you\'ve got mail',
              'regular scheduled programming',
              'nintendo',
              'dreamcast',
              'playstation',
              'nightdrive',
              'snick',
              'powerglove',
              'cartridge',
              'vhs',
              'vcr',
              'remember summer days',
              'mallsoft',
              'the future is now',
              'crystal pepsi',
              'where am i',
              'im dreaming',
              'where are you going',
              'satisfaction guaranteed']

    sentance = shuffle(words)

    return sentance
  }
})
