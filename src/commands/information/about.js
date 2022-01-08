const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('about')
		.setDescription('about this bot!'),
	async execute(interaction, client) {
		const Embed = new MessageEmbed()
			.setColor('BLUE')
			.setTitle('about:')
			.addFields(
				{ name: 'Use', value: `This bot was made as a music bot for the try me clan discord: https://discord.gg/ZcYgvV6tm7`},
				{ name: 'Development', value: `This bot is mainly developed by Jelyko#6300 and simple commands are done by me Baerke#5288`},
                { name: 'Repo', value: `This bot is open-source so if you're interested go look at https://github.com/Jelyko/Try-Me-Music`},
			)
		await interaction.reply({embeds: [Embed] });
	},
};
