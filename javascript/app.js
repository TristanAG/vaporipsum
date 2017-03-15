$( 'document' ).ready( function(){
  vaporIpsum = ''
  vaporReference = ''
  buttonsAreActive = false

  $( ".ipsum-button" ).click(function() {
    count = 0
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

  function makeManyParagraphs(paraNum) {
    multiParagraph = ''
    for (var i = 0; i < paraNum; i++){
      multiParagraph += makeParagraph()
    }
    return multiParagraph
  }

  function makeParagraph() {
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
              'lost cartridge',
              'infinite reverie',
              'new game',
              'aol',
              'ultra 64',
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

    return sentance.slice(0,36).join(' ') + ' ' + '<br><br>'
  }

  function shuffle(array){
    var m = array.length, t, i

    while (m) {
      i = Math.floor(Math.random() * m--)
      t = array[m]
      array[m] = array[i]
      array[i] = t
    }

    return array
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
})
