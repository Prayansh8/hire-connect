"use client"
import React, { useEffect } from 'react';
import io from 'socket.io-client';

const socket = io();

const Notifications: React.FC = () => {
  useEffect(() => {
    socket.on('notification', (data) => {
      console.log('Notification received:', data);
      // Display notification logic here
    });
  }, []);
  return null;
};

export default Notifications;