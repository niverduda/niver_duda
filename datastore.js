
let user = {
	id: 0,
	name: "Duda ☾︎",
	number: "+91 91231 40293",
	pic: "images/duda.jpg"
};

let contactList = [
	{
		id: 2,
		name: "Veetor",
		number: "+55 16 99325 8345",
		pic: "images/veetor.jpg",
	},
	{
		id: 1,
		name: "Rafinha",
		number: "+55 16 98833 3960",
		pic: "images/eu.jpg",
	},
];

let groupList = [
	
];

// message status - 0:sent, 1:delivered, 2:read

let messages = [
	{
		id: 0,
		sender: 1,
		body: "Eae Duda, tudo certo?",
		status: 1,
		recvId: 0,
		recvIsGroup: false
	},
	{
		id: 1,
		sender: 1,
		body: "Sim, eu fiz um site para enviar esta cartinha, pelo menos assim você não vai perdê-la kkkkk",
		status: 1,
		recvId: 0,
		recvIsGroup: false
	},
	{
		id: 2,
		sender: 1,
		body: "Enfim, não sou bom com palavras muito menos com português então se você ver algum “conçelho” ou “fassa” não estranhe kkkk",
		status: 1,
		recvId: 0,
		recvIsGroup: false
	},
	{
		id: 3,
		sender: 1,
		body: "Lembro de quando te conheci, havia acabado de entrar na igreja, literalmente, e fui recebido por um pequeno ser humano mas uma grande mulher que em pouco tempo se tornou uma pessoa tão essencial na minha vida, a gente conversa pouco pelo WhatsApp mas compartilhamos experiências que não cabem em uma mensagem",
		status: 1,
		recvId: 0,
		recvIsGroup: false
	},
	{
		id: 4,
		sender: 1,
		body: "Você é EXTREMAMENTE importante, não apenas para mim, saiba que mesmo que as pessoas te deixem, você sempre terá um companheiro para te abraçar. Você é especial e o mais importante, você é você!",
		status: 1,
		recvId: 0,
		recvIsGroup: false
	},
	{
		id: 5,
		sender: 1,
		body: "Bem, se precisar de mim eu sempre estarei aqui. 🤍🐧",
		status: 1,
		recvId: 0,
		recvIsGroup: false
	},
	{
		id: 6,
		sender: 2,
		body: "🐧",
		status: 2,
		recvId: 0,
		recvIsGroup: false
	},
];


let MessageUtils = {
	getByGroupId: (groupId) => {
		return messages.filter(msg => msg.recvIsGroup && msg.recvId === groupId);
	},
	getByContactId: (contactId) => {
		return messages.filter(msg => {
			return !msg.recvIsGroup && ((msg.sender === user.id && msg.recvId === contactId) || (msg.sender === contactId && msg.recvId === user.id));
		});
	},
	getMessages: () => {
		return messages;
	},
	changeStatusById: (options) => {
		messages = messages.map((msg) => {
			if (options.isGroup) {
				if (msg.recvIsGroup && msg.recvId === options.id) msg.status = 2;
			} else {
				if (!msg.recvIsGroup && msg.sender === options.id && msg.recvId === user.id) msg.status = 2;
			}
			return msg;
		});
	},
	addMessage: (msg) => {
		msg.id = messages.length + 1;
		messages.push(msg);
	}
};