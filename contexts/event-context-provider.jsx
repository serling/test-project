import React from 'react';
import PropTypes from 'prop-types';
import PubSub from 'pubsub-js';

import EventContext from './event-context';

const topics = {
  infoToUser: 'info-to-user',
  errorToUser: 'error-to-user',
};

const EventContextProvider = ({ children }) => {
  const onTopic = (topic, func) => {
    if (typeof func !== 'function') {
      return;
    }

    return PubSub.subscribe(topic, (_topic, data) => {
      func(data);
    });
  };

  const off = (token) => PubSub.unsubscribe(token);
  const send = (topic, data) => PubSub.publish(topic, data);

  const onInfo = (func) => onTopic(topics.infoToUser, func);
  const sendInfo = (text) => send(topics.infoToUser, text);

  const onError = (func) => onTopic(topics.errorToUser, func);
  const sendError = (text) => send(topics.errorToUser, text);

  return (
    <EventContext.Provider
      value={{ off, send, onInfo, sendInfo, onError, sendError }}
    >
      {children}
    </EventContext.Provider>
  );
};

EventContextProvider.propTypes = {
  children: PropTypes.node,
  thing: PropTypes.object,
};

export default EventContextProvider;
