import { useState } from 'react'

const Header = (props) => {
  return (
    <>
      <h1>{props.header}</h1>
    </>
  )
}

const Button = (props) => {
  return (
    <>
      <button onClick={props.onClick}>{props.name}</button>
    </>
  )
}

const Statistics = (props) => {
  const { good, neutral, bad } = props
  const total = good + neutral + bad

  if (total === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  const average = (1 * good + 0 * neutral + -1 * bad) / total
  const positive = (good / total) * 100

  return (
    <>
      <p>Average {average.toFixed(2)}</p>
      <p>Positive {positive.toFixed(2)}%</p>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header header={'Give feedback'} />
      <Button name={'Good'} onClick={() => setGood(good + 1)} />
      <Button name={'Neutral'} onClick={() => setNeutral(neutral + 1)} />
      <Button name={'Bad'} onClick={() => setBad(bad + 1)} />
      <Header header={'Statistics'} />
      
      {good + neutral + bad > 0 ? (
        <>
          <Statistics good={good} neutral={neutral} bad={bad} />
          <p>Good {good}</p>
          <p>Neutral {neutral}</p>
          <p>Bad {bad}</p>
          <p>All {bad + neutral + good}</p>
        </>
      ) : (
        <p>No feedback given yet.</p>
      )}
    </div>
  )
}

export default App
