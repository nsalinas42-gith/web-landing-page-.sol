'use client';

import { useChat } from 'ai/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '50px 20px', fontFamily: 'sans-serif' }}>
      <div style={{ marginBottom: '100px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {messages.map(m => (
          <div key={m.id} style={{ 
            padding: '10px', 
            borderRadius: '8px', 
            backgroundColor: m.role === 'user' ? '#f0f0f0' : '#e3efff',
            alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start',
            color: 'black'
          }}>
            <strong>{m.role === 'user' ? 'Tú: ' : 'IA: '}</strong>
            {m.content}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <input
          style={{ 
            position: 'fixed', 
            bottom: '20px', 
            width: 'calc(100% - 40px)', 
            maxWidth: '560px', 
            padding: '12px', 
            borderRadius: '8px',
            border: '1px solid #ccc', 
            color: 'black' 
          }}
          value={input}
          placeholder="Escribe tu mensaje aquí..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
