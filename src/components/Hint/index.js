import React, {useState} from 'react';
import './index.scss'
import {getClockIcon, getEmojiIcon} from "../../icons";

const initialLastEmojis = []
const tabs = [
  {
    name: 'emoji',
    icon: getEmojiIcon()
  },
  {
    name: 'last',
    icon: getClockIcon()
  }
]

function Hint() {


  return (
    <div className='hint'>
      <p className="hint__text">
        Поле ввода сообщений имеет 2 режима
      </p>
      <p className="hint__text">
        1) Режим печати - в этом режиме можно обновлять текст и добавлять смайлы
      </p>
      <p className="hint__text">
        2) Режим просмотра - показывает как будет выглядеть текст перед отправкой, выделяет слова-ссылки и позволяет перейти по ним, а так же применяет указанную в тексте разметку к сообщению. В этом режиме нельзя редактировать текст или добавлять смайлы
      </p>
      <p className="hint__text">
        Для переключения режима кликните по этой кнопке, тогда вы сможете ввести сообщение. Если заходите посмотреть как будет выглядеть сообщение перед отправкой - нажмите снова.
      </p>
      <div className="hint__path"/>
    </div>
  );
}

export default Hint;
