let todoList = [];

module.exports = (client) => {
  client.on('message', message => {
    if (!message.content.startsWith('!todo')) return;

    const args = message.content.split(' ').slice(1);
    const command = args.shift().toLowerCase();

    if (command === 'add') {
      const task = args.join(' ');
      todoList.push(task);
      message.reply(`Task added: ${task}`);
    } else if (command === 'list') {
      message.reply(`Todo list:\n${todoList.join('\n')}`);
    }
  });
};