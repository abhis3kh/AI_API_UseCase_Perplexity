import { useState, useRef } from 'react';
import './css/InputBox.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [outputData, setOutputData] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef();
  const API_KEY = import.meta.env.VITE_PERPLEXITY_API_KEY;

  const handleValueChange = (e) => {
    setInputText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      formRef.current.requestSubmit();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputText.trim() || isLoading) return;

    setIsLoading(true);
    setOutputData('');

    try {
      const response = await fetch(
        'https://api.perplexity.ai/chat/completions',
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: 'sonar',
            messages: [
              { role: 'system', content: 'Be precise and concise.' },
              { role: 'user', content: inputText },
            ],
            temperature: 0.2,
            top_p: 0.9,
            max_tokens: 2048,
            stream: false,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setOutputData(data.choices[0]?.message?.content || 'No response found');
    } catch (err) {
      console.error('API Error:', err);
      setOutputData(`Error: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='queryInputDiv'>
      <h1>Perplexity API Use Case</h1>
      <form onSubmit={handleSubmit} ref={formRef}>
        <textarea
          id='query'
          placeholder='Enter your Query (Shift+Enter for new line)'
          rows={4}
          cols={30}
          value={inputText}
          onChange={handleValueChange}
          onKeyDown={handleKeyDown}
          className='inputElement'
          disabled={isLoading}
        />
        <button type='submit' className='submitButton' disabled={isLoading}>
          {isLoading ? 'Processing...' : 'Submit'}
        </button>
      </form>

      <div className='resultDiv'>
        {outputData && <div className='outputData'>{outputData}</div>}
      </div>
    </div>
  );
}

export default App;
