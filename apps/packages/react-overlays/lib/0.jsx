
Overlay = {
  containerId: 'overlay-container',

  notificationsCollection: new Mongo.Collection(null),

  notify(message) {
    this.notificationsCollection.insert({
      message: message,
      createdAt: new Date()
    });
  },

  alert(message, options = {}) {
    const props = _.extend({ message: message }, options);

    const node = document.body.appendChild(document.createElement('div'));
    node.className = 'alert-container';

    const cleanup = (value) => {
      React.unmountComponentAtNode(node);
      Meteor.setTimeout(() => node.remove());
      return value;
    };

    const promise = new Promise((fulfill, reject) => {
      React.render((
        <Overlay.Alert {...props} fulfill={fulfill} reject={reject} />
      ), node);
    });

    return promise.then(() => cleanup(true), () => cleanup(false));
  },

  confirm(message, options = {}) {
    const props = _.extend({ message: message }, options);

    const node = document.body.appendChild(document.createElement('div'));
    node.className = 'confirm-container';

    const cleanup = (value) => {
      React.unmountComponentAtNode(node);
      Meteor.setTimeout(() => node.remove());
      return value;
    };

    const promise = new Promise((fulfill, reject) => {
      React.render((
        <Overlay.Confirm {...props} fulfill={fulfill} reject={reject} />
      ), node);
    });

    return promise.then(() => cleanup(true), () => cleanup(false));
  },

  modal(element, options = {}) {
    const props = options;

    const node = document.body.appendChild(document.createElement('div'));
    node.className = 'modal-container';

    const cleanup = (value) => {
      React.unmountComponentAtNode(node);
      Meteor.setTimeout(() => node.remove());
      return value;
    };

    const promise = new Promise((fulfill, reject) => {
      React.render((
        <Overlay.Modal {...props} fulfill={fulfill} reject={reject} >
          {element}
        </Overlay.Modal>
      ), node);
    });

    return promise.then(() => cleanup(true), () => cleanup(false));
  },

};
