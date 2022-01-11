const Numbers = require('./numbers');

const word = () => {
  const randomPosition = (new Numbers).smallInt();
  const wordsArray = [
    'Lorem', 'Consectetur', 'Pellentesque', 'Interdum', 'eget',
    'Dictum', 'Phasellus', 'lacinia', 'ut', 'non',
  ]
  return wordsArray[randomPosition].toLowerCase();
}

const phrase = () => {
  const randomPosition = (new Numbers).smallInt();
  const phrasesArray = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Sed vel risus non massa suscipit ullamcorper.',
    'Sed non venenatis eros.',
    'Nam commodo laoreet laoreet.',
    'Donec varius quam est, vitae pellentesque odio dictum nec.',
    'Vivamus dictum odio non elit convallis congue.',
    'Donec varius quam est, vitae pellentesque odio dictum nec. Vivamus dictum odio non elit convallis congue.',
    'Aenean interdum nisi eget arcu fringilla, sed viverra orci faucibus.',
    'Mauris tincidunt vel arcu in finibus.',
    'Sed dignissim lacus eu faucibus commodo.',
  ]
  return phrasesArray[randomPosition];
}

const paragraph = () => {
  const randomPosition = Math.floor((Math.random()) * 5);
  const paragraphsArray = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel risus non massa suscipit ullamcorper. Sed non venenatis eros. Nam commodo laoreet laoreet. Donec orci nunc, auctor eget aliquam at, aliquam consequat dui. Fusce tincidunt pulvinar porta. Ut bibendum sapien sed tellus eleifend condimentum. Phasellus fringilla nisl quis eros mollis, in euismod metus tempus.',
    'Donec varius quam est, vitae pellentesque odio dictum nec. Vivamus dictum odio non elit convallis congue. Aliquam ut lacinia mi. Phasellus risus magna, pellentesque non diam in, pretium aliquet nulla. Nulla justo sem, fringilla et nunc sit amet, tincidunt semper mi. In hendrerit semper auctor. Nunc at purus ut tortor lobortis hendrerit. Nullam metus leo, dictum eget maximus non, venenatis ac urna. Donec auctor pharetra erat ac pellentesque. Vivamus fermentum bibendum libero nec efficitur. In quam mauris, porttitor vitae nisl vel, vulputate commodo quam. Nam mollis consectetur ipsum, a semper turpis aliquam eget.',
    'Mauris tincidunt vel arcu in finibus. Pellentesque pulvinar in magna a tincidunt. In feugiat velit sit amet est pellentesque, nec hendrerit mi tincidunt. Sed semper aliquet velit in convallis. In hac habitasse platea dictumst. Integer suscipit ex vitae felis ultricies, ac pretium dui ullamcorper. Morbi elementum sem massa, bibendum viverra ipsum vulputate sit amet. Vestibulum nec massa congue, pulvinar odio ac, pretium nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed malesuada purus sed pharetra tempus. Aenean vulputate a sapien id efficitur. Aenean quis ornare dui, sed tincidunt erat. Suspendisse nec quam vel lectus luctus commodo id vel diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed dapibus placerat lacus, non aliquam justo luctus in. Suspendisse potenti.',
    'Aenean interdum nisi eget arcu fringilla, sed viverra orci faucibus. Aliquam elementum felis ac iaculis posuere. Aenean semper eros massa, non vulputate lacus molestie at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque sagittis, massa eget dapibus viverra, velit dui scelerisque turpis, lacinia accumsan enim ligula vel arcu. Cras tempor et sem in vulputate. Sed in justo in sem fringilla egestas et mattis enim. Donec eu arcu at arcu vehicula tempor tempor vel nisi. Sed luctus nunc in finibus rutrum. Proin vel efficitur felis. Donec vitae accumsan justo. Maecenas ut tristique sem. Proin eget facilisis dui. Fusce lacinia, nisl non ultrices iaculis, nulla justo semper quam, nec ultricies eros turpis id magna.',
    'Sed dignissim lacus eu faucibus commodo. Proin luctus magna quis dolor feugiat, eu imperdiet urna maximus. Vivamus et auctor enim. Cras at lacus a felis accumsan efficitur nec non tellus. Integer at nibh vitae ligula mollis volutpat sit amet quis tortor. Ut vel ipsum tempor, congue justo tempus, aliquam felis. Praesent mollis lorem ac tempor aliquet. Suspendisse a magna varius, congue augue at, bibendum elit. Aenean commodo est fermentum lectus egestas, quis aliquam lectus vulputate. Phasellus et massa ut ipsum tempor volutpat.',
  ]
  return paragraphsArray[randomPosition];
}

const bigText = () => {
  return `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel risus non massa suscipit ullamcorper. Sed non venenatis eros. Nam commodo laoreet laoreet. Donec orci nunc, auctor eget aliquam at, aliquam consequat dui. Fusce tincidunt pulvinar porta. Ut bibendum sapien sed tellus eleifend condimentum. Phasellus fringilla nisl quis eros mollis, in euismod metus tempus.
  \n
  Donec varius quam est, vitae pellentesque odio dictum nec. Vivamus dictum odio non elit convallis congue. Aliquam ut lacinia mi. Phasellus risus magna, pellentesque non diam in, pretium aliquet nulla. Nulla justo sem, fringilla et nunc sit amet, tincidunt semper mi. In hendrerit semper auctor. Nunc at purus ut tortor lobortis hendrerit. Nullam metus leo, dictum eget maximus non, venenatis ac urna. Donec auctor pharetra erat ac pellentesque. Vivamus fermentum bibendum libero nec efficitur. In quam mauris, porttitor vitae nisl vel, vulputate commodo quam. Nam mollis consectetur ipsum, a semper turpis aliquam eget.
  \n
  Aenean interdum nisi eget arcu fringilla, sed viverra orci faucibus. Aliquam elementum felis ac iaculis posuere. Aenean semper eros massa, non vulputate lacus molestie at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque sagittis, massa eget dapibus viverra, velit dui scelerisque turpis, lacinia accumsan enim ligula vel arcu. Cras tempor et sem in vulputate. Sed in justo in sem fringilla egestas et mattis enim. Donec eu arcu at arcu vehicula tempor tempor vel nisi. Sed luctus nunc in finibus rutrum. Proin vel efficitur felis. Donec vitae accumsan justo. Maecenas ut tristique sem. Proin eget facilisis dui. Fusce lacinia, nisl non ultrices iaculis, nulla justo semper quam, nec ultricies eros turpis id magna.
  \n
  Mauris tincidunt vel arcu in finibus. Pellentesque pulvinar in magna a tincidunt. In feugiat velit sit amet est pellentesque, nec hendrerit mi tincidunt. Sed semper aliquet velit in convallis. In hac habitasse platea dictumst. Integer suscipit ex vitae felis ultricies, ac pretium dui ullamcorper. Morbi elementum sem massa, bibendum viverra ipsum vulputate sit amet. Vestibulum nec massa congue, pulvinar odio ac, pretium nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed malesuada purus sed pharetra tempus. Aenean vulputate a sapien id efficitur. Aenean quis ornare dui, sed tincidunt erat. Suspendisse nec quam vel lectus luctus commodo id vel diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed dapibus placerat lacus, non aliquam justo luctus in. Suspendisse potenti.
  \n
  Sed dignissim lacus eu faucibus commodo. Proin luctus magna quis dolor feugiat, eu imperdiet urna maximus. Vivamus et auctor enim. Cras at lacus a felis accumsan efficitur nec non tellus. Integer at nibh vitae ligula mollis volutpat sit amet quis tortor. Ut vel ipsum tempor, congue justo tempus, aliquam felis. Praesent mollis lorem ac tempor aliquet. Suspendisse a magna varius, congue augue at, bibendum elit. Aenean commodo est fermentum lectus egestas, quis aliquam lectus vulputate. Phasellus et massa ut ipsum tempor volutpat.
  `;
}

const bigTextHtml = () => {
  return `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel risus non massa suscipit ullamcorper. Sed non venenatis eros. Nam commodo laoreet laoreet. Donec orci nunc, auctor eget aliquam at, aliquam consequat dui. Fusce tincidunt pulvinar porta. Ut bibendum sapien sed tellus eleifend condimentum. Phasellus fringilla nisl quis eros mollis, in euismod metus tempus.
  <br/>
  Donec varius quam est, vitae pellentesque odio dictum nec. Vivamus dictum odio non elit convallis congue. Aliquam ut lacinia mi. Phasellus risus magna, pellentesque non diam in, pretium aliquet nulla. Nulla justo sem, fringilla et nunc sit amet, tincidunt semper mi. In hendrerit semper auctor. Nunc at purus ut tortor lobortis hendrerit. Nullam metus leo, dictum eget maximus non, venenatis ac urna. Donec auctor pharetra erat ac pellentesque. Vivamus fermentum bibendum libero nec efficitur. In quam mauris, porttitor vitae nisl vel, vulputate commodo quam. Nam mollis consectetur ipsum, a semper turpis aliquam eget.
  <br/>
  Aenean interdum nisi eget arcu fringilla, sed viverra orci faucibus. Aliquam elementum felis ac iaculis posuere. Aenean semper eros massa, non vulputate lacus molestie at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque sagittis, massa eget dapibus viverra, velit dui scelerisque turpis, lacinia accumsan enim ligula vel arcu. Cras tempor et sem in vulputate. Sed in justo in sem fringilla egestas et mattis enim. Donec eu arcu at arcu vehicula tempor tempor vel nisi. Sed luctus nunc in finibus rutrum. Proin vel efficitur felis. Donec vitae accumsan justo. Maecenas ut tristique sem. Proin eget facilisis dui. Fusce lacinia, nisl non ultrices iaculis, nulla justo semper quam, nec ultricies eros turpis id magna.
  <br/>
  Mauris tincidunt vel arcu in finibus. Pellentesque pulvinar in magna a tincidunt. In feugiat velit sit amet est pellentesque, nec hendrerit mi tincidunt. Sed semper aliquet velit in convallis. In hac habitasse platea dictumst. Integer suscipit ex vitae felis ultricies, ac pretium dui ullamcorper. Morbi elementum sem massa, bibendum viverra ipsum vulputate sit amet. Vestibulum nec massa congue, pulvinar odio ac, pretium nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed malesuada purus sed pharetra tempus. Aenean vulputate a sapien id efficitur. Aenean quis ornare dui, sed tincidunt erat. Suspendisse nec quam vel lectus luctus commodo id vel diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed dapibus placerat lacus, non aliquam justo luctus in. Suspendisse potenti.
  <br/>
  Sed dignissim lacus eu faucibus commodo. Proin luctus magna quis dolor feugiat, eu imperdiet urna maximus. Vivamus et auctor enim. Cras at lacus a felis accumsan efficitur nec non tellus. Integer at nibh vitae ligula mollis volutpat sit amet quis tortor. Ut vel ipsum tempor, congue justo tempus, aliquam felis. Praesent mollis lorem ac tempor aliquet. Suspendisse a magna varius, congue augue at, bibendum elit. Aenean commodo est fermentum lectus egestas, quis aliquam lectus vulputate. Phasellus et massa ut ipsum tempor volutpat.
  `;
}

class DMStrings {
  constructor() {
    this.word = word;
    this.phrase = phrase;
    this.paragraph = paragraph;
    this.bigText = bigText;
    this.bigTextHtml = bigTextHtml;
  }
}

module.exports = DMStrings;