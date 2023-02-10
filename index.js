const Discord = require('discord.js');
const client = new Discord.Client();

let todoList = [];

client.on('message', message => {
  if (!message.content.startsWith('!todolist')) return;

  const args = message.content.split(' ').slice(1);
  const command = args.shift().toLowerCase();

  if (command === 'add') {
    const task = args.join(' ');
    todoList.push(task);
    message.reply(`Task added: "${task}"`);
  } else if (command === 'list') {
    if (todoList.length === 0) {
      message.reply(`The to-do list is empty.`);
    } else {
      message.reply(`To-do list:\n${todoList.map((task, index) => `${index + 1}. ${task}`).join('\n')}`);
    }
  } else if (command === 'remove') {
    const index = parseInt(args[0], 10) - 1;
    if (isNaN(index)) {
      message.reply(`Invalid index. Please provide a number.`);
    } else if (index < 0 || index >= todoList.length) {
      message.reply(`Index out of range. The to-do list has ${todoList.length} items.`);
    } else {
      const task = todoList[index];
      todoList = todoList.filter((_, i) => i !== index);
      message.reply(`Task removed: "${task}"`);
    }
  } else {
    message.reply(`Unknown command. Available commands: add, list, remove`);
  }
});

client.login('BOT TOKEN HERE');
