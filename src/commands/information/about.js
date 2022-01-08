const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('about')
		.setDescription('About This bot'),
	async execute(interaction, client) {
		const Embed = new MessageEmbed()
			.setColor('BLACK')
			.setTitle('About This Bot')
			.addFields(
        { name: 'Use', value: `This bot is made to be an exclusive music bot for the try me discord server https://discord.gg/ZcYgvV6tm7`}
				{ name: 'Development', value: `This bot is mainly developed by Jelyko#6300 and simple things like this command were made by Baerke#5288`}
        { name: 'Repo', value: `You can find the github repo at https://github.com/Jelyko/Try-Me-Music`}
			)
		await interaction.reply({embeds: [Embed] });
	},
};
