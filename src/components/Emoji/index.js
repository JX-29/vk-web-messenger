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

function Emoji({setEmoji, emoji}) {

  const [lastEmojis, setLastEmojis] = useState(initialLastEmojis)
  const [currentTab, setCurrentTab] = useState(tabs[0].name)


  const onAddLastEmojis = (emoji) => {
    if (!lastEmojis.includes(emoji)) {
      const lastEmojisUpdated = [emoji, ...lastEmojis.slice(-24)]
      setLastEmojis(lastEmojisUpdated)
    }
  }

  const onAddEmoji = (emoji) => () => {
    setEmoji(emoji)
    onAddLastEmojis(emoji)
  }

  const onSelectTab = (name) => () => {
    setCurrentTab(name)
  }

  return (
    <div className='emoji'>
      <div className='emoji__scroll'>
        {currentTab === 'emoji' ?
          emoji.map((section, i) => (
            <div className='emoji__section' key={`${section.title}-${i}`}>
              <div className='emoji__title'>
                {section.title}
              </div>
              <ul className='emoji__list'>
                {
                  section.items.map((emoji, j) => (
                    <li className='emoji__item' key={`emoji-${j}`}>
                              <span className='emoji__hover-bg' onClick={onAddEmoji(emoji)}>
                                {emoji}
                              </span>
                    </li>
                  ))
                }
              </ul>
            </div>
          )) :
          <div className='emoji__section'>
            <div className='emoji__title'>
              Часто используемые
            </div>
            <ul className='emoji__list'>
              {
                lastEmojis.map((emoji,i) => (
                  <li key={`last-${i}`} className='emoji__item'>
                              <span className='emoji__hover-bg' onClick={onAddEmoji(emoji)}>
                                {emoji}
                              </span>
                  </li>
                ))
              }
            </ul>
          </div>
        }
      </div>
      <div className='emoji__tabs'>
        {
          tabs.map((tab, i) => (
            <div key={`${tab.name}-${i}`}
                 onClick={onSelectTab(tab.name)}
                 className={`emoji__tab ${tab.name === currentTab ? 'emoji__tab_current' : 'emoji__tab_default'}`}>
              {tab.icon}
            </div>
          ))
        }
      </div>
      <div className="emoji__path"/>
    </div>
  );
}

export default Emoji;
