import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from '@mui/material/Button';
import { Button as EDSButton } from '@fourkites/elemental-atoms';
import {ButtonWithIcon} from './components/buttonWithIcon/ButtonWithIcon.jsx';
import { Input } from '@fourkites/elemental-input';
import {Switch} from "@fourkites/elemental-switch";
// import {Chip} from "@fourkites/elemental-chip";
import { RadioIcon } from '@fourkites/elemental-atoms';
import SearchForm from './components/search/SearchForm.jsx';
import { Checkbox } from '@fourkites/elemental-checkbox';

import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const ChipsProps = {
    theme: "dark",
    size: "small",
    shape: "squared",
    closeable: true,
    children: "Chip",
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>

        <Button variant="contained" color="primary">
        I am a MUI button
      </Button>
      <EDSButton variant="solid" style={{marginLeft: '20px'}} color="primary">
        I am a EDS button
      </EDSButton>
      {/* <ButtonWithIcon /> */}
      <SearchForm />
      <Checkbox
          size="large"
          label={"checkbox"}
          value={"checked"}
          disabled={false}
          onChange={() => {}}
        />
      </div>
      <RadioIcon />
      {/* <Chip {...ChipsProps} /> */}
      <Switch defaultLabel={"toggler"}/>
      <Input label={"FullName"} />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
