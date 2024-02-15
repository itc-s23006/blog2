import { useState, useRef } from 'react'

const Chat = () => {
  const refInput = useRef('')
  const [messages, setMessages] = useState([])
  useEffect(() => {
  const json = JSON.stringify(messages)
  localStorage.setItem('chat', json)
  }, [messages])
  const handleSubmit = e => {
    setMessages(p => [refInput,current.value, ...p])
    refInput.current.value = ''
  }
  return (
    <>
      <input type='text' ref={refInput} />
      <button onClick={handleSubmit}>click</button>
    <ul>
      {messages.map((message, i) => (
        <li key={i}>{message}</li>
    ))}
    </ul>
  </>
  )
}

export default Chat
