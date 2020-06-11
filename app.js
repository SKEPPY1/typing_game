
{
  const words = [
    'action',
    'best',
    'believe',
    'confidence',
    'courage',
    'chance',
    'change',
    'freedom',
    'forgive',
    'glow',
    'gratitude',
    'growth',
    'happy',
    'joyful',
    'love',
    'overcome',
    'peace',
    'relax',
    'respect',
    'simple',
    'simple',
    'sparkle',
    'thankful',
    'unique',
    'wonderful'
  ];

  let word;
  let count = 0;
  let Playing = false;
  const target = document.querySelector(".target");;
  const btn = document.querySelector(".btn");
  const text = document.querySelector(".text");


  //2番 4番
  function updateTarget() {
    let placeholder = '';
    for (let i = 0; i < count; i++) {
      placeholder += '_';
    }
    //単語表示(ランダムに選ばれた単語の先頭から表示)
    target.textContent = placeholder + word.substring(count);
  }


  //1番
  btn.addEventListener('click', () => {
      //play途中なら帰って
    if (Playing === true) {
      return;
    }
    
    Playing = true;

    word = words[Math.floor(Math.random() * words.length)];
    console.log(word);//単語(actionやhappyなど)

    text.remove();
    btn.remove();

    updateTarget();
  });



//3番
  window.addEventListener('keyup', e => {
      //playしてないなら帰って
    if (Playing === false) {
      return;
    }
    if (e.key === word[count]) {
      count++;
      if (count === word.length) {
        word = words[Math.floor(Math.random() * words.length)];
        count = 0;
      }
      updateTarget();
    }
  });
}

