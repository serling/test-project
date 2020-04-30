import PubSub from 'pubsub-js';

const topics = {
  infoToUser: 'info-to-user',
  errorToUser: 'error-to-user',
};

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

export { off, send, onInfo, sendInfo, onError, sendError };
