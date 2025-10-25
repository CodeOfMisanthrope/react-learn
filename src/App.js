import {createElement, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // декларативно
  const [count, setCount] = useState(0)

  // императивно
  const date = new Date();
  const year = date.getFullYear();

  return createElement('div', {},
    [
      createElement(
        'div',
        {key: "links"},
        [
          createElement(
            'a',
            {
              key: "vite-link",
              target: '_blank',
              href: "https://vite.dev"
            },
            createElement(
              'img',
              {
                src: viteLogo,
                className: 'logo',
                alt: 'Vite logo',
              })
          ),
          createElement(
            'a',
            {
              key: "react-link",
              target: '_blank',
              href: "https://react.de"
            },
            createElement(
              'img',
              {
                src: reactLogo,
                className: 'logo react',
                alt: 'React logo',
              })
          )
        ]
      ),
      createElement(
        'h1',
        {key: "title"},
        "Vite + React"
      ),
      createElement(
        'div',
        {
          key: "cards",
          className: "card"
        },
        [
          createElement(
            'button',
            {
              key: "btn-count",
              onClick: () => setCount((count) => count + 1)
            },
            "count is ",
            createElement('span', null, count),
          ),
          createElement(
            'p',
            {key: "edit"},
            "Edit ",
            createElement(
              "code",
              null,
              "src/App.jsx"
            ),
            " and save to test HMR"
          )
        ]
      ),
      createElement(
        "p",
        {
          key: "read-docs",
          className: "read-the-docs"
        },
        "Click on the Vite and React logos to learn more"
      ),
      createElement(
        "p",
        {key: "date"},
        createElement("span", null, year)
      )
    ]
  );
}

export default App;
