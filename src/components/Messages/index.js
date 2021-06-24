import React from 'react';
import './index.scss'

function Messages({messages}) {

  console.log(messages)

  return (
    <div className='messages'>
      <div className='messages__body'>
        {!messages.length ? (
          <div className='messages__empty'>
            Здесь будет выводиться история переписки.
          </div>
        ) : (
          <ul className='messages__list'>
            {
              messages.map((message, i) => (
                <li className='messages__item' key={i} dangerouslySetInnerHTML={{__html: message}}>

                </li>
              ))
            }
          </ul>
        )

        }

      </div>
    </div>
  );
}

export default Messages;
