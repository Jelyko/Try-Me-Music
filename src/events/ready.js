
module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        const names = [
            `/help | Try Me`,
            `/help | Try Me`,
            `/help | Try Me`,
            `/help | Try Me`,
            `/help | Try Me`,
            `/help | Try Me`,
            `/help | Try Me`,
            `/help | Try Me`,
            `Britt ๐ต`,
            `Cobra ๐ฐ`,
            `Jelyko ๐ฅ`,
            `Killer โ ๏ธ`,
            `Cian ๐ค`,
            `Max ๐ฅ`,
            'Ayana ๐',
            'Barie ๐',
            'M3rl1jn ๐ง',
            'Bassap ๐ก๏ธ',
            'Alex ๐งจ',
            'Jai Jai Binx โฝ',
        ]

        setInterval(() => {

            const status = names[Math.floor(Math.random()*names.length)]
            client.user.setPresence({ activities: [{ name: status, type: `WATCHING`}], status: 'online' })
        }, 10000)

        console.log('\x1b[36m%s\x1b[0m', 'Discord Presence has been enabled.')
        console.log('\x1b[36m%s\x1b[0m', 'ready');
    },
};