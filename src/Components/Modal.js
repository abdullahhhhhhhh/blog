import React, { useState } from 'react';

function Modal({ onOpen, onClose }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Implement login logic here (e.g., send data to a server)
    console.log('Login attempt:', username, password);

    // Close the modal after submission (optional)
    onClose();
  };

  return (
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${onOpen ? '' : 'hidden'}`}>
      <div className='modal-container'>
        <div className='bg-amber-500 text-center p-5 h-96 lg:w-[400px] rounded shadow-md'>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label htmlFor='username'>Username:</label>
              <input
                type='text'
                id='username'
                name='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className='border text-black rounded w-full p-2'
              />
            </div>
            <div className='mb-4 '>
              <label htmlFor='password'>Password:</label>
              <input
                type='password'
                id='password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='border text-black rounded w-full p-2'
              />
            </div>
            <button type='submit' className='bg-black text-white px-4 py-2 rounded hover:bg-green-700'>
              Login
            </button>
          </form>
          <button onClick={onClose} className='mt-4 text-gray-500 hover:text-gray-700'>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
