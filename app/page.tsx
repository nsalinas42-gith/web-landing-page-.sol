'use client';

import { useChat } from 'ai/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '50px 20px' }}>
      <div style={{ marginBottom: '100px' }}>
        {messages.map(m => (
          <div key={m.id} style={{ marginBottom: '10px', color: 'black' }}>
            <strong>{m.role === 'user' ? 'Tú: ' : 'IA: '}</strong>
            {m.content}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <input
          style={{ position: 'fixed', bottom: '20px', width: '100%', maxWidth: '560px', padding: '10px', border: '1px solid #ccc', color: 'black' }}
          value={input}
          placeholder="Escribe tu mensaje..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
