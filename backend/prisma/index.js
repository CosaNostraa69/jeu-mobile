const {PrismaClient} = require('@prisma/client')
const db = require('../db.js')

const prisma = new PrismaClient()


async function main() {

    await db.footballPlayers.deleteMany()


    await db.footballPlayers.createMany({
        data: [
            { name: 'Lionel Messi', age: 35, club: 'Paris Saint-Germain', position: 'Forward', nationality: 'Argentina' },
            { name: 'Cristiano Ronaldo', age: 37, club: 'Manchester United', position: 'Forward', nationality: 'Portugal' },
            { name: 'Neymar Jr', age: 30, club: 'Paris Saint-Germain', position: 'Forward', nationality: 'Brazil' },
            { name: 'Kevin De Bruyne', age: 31, club: 'Manchester City', position: 'Midfielder', nationality: 'Belgium' },
            { name: 'Robert Lewandowski', age: 33, club: 'FC Barcelona', position: 'Forward', nationality: 'Poland' },
            { name: 'Mohamed Salah', age: 30, club: 'Liverpool', position: 'Forward', nationality: 'Egypt' },
            { name: 'Kylian Mbappé', age: 23, club: 'Paris Saint-Germain', position: 'Forward', nationality: 'France' },
            { name: 'Virgil van Dijk', age: 31, club: 'Liverpool', position: 'Defender', nationality: 'Netherlands' },
            { name: 'Joshua Kimmich', age: 27, club: 'Bayern Munich', position: 'Midfielder', nationality: 'Germany' },
            { name: 'Erling Haaland', age: 22, club: 'Manchester City', position: 'Forward', nationality: 'Norway' },
            { name: 'Karim Benzema', age: 34, club: 'Real Madrid', position: 'Forward', nationality: 'France' },
            { name: 'Luka Modric', age: 37, club: 'Real Madrid', position: 'Midfielder', nationality: 'Croatia' },
            { name: 'Jorginho', age: 30, club: 'Chelsea', position: 'Midfielder', nationality: 'Italy' },
            { name: 'Harry Kane', age: 29, club: 'Tottenham Hotspur', position: 'Forward', nationality: 'England' },
            { name: 'Sadio Mané', age: 30, club: 'Bayern Munich', position: 'Forward', nationality: 'Senegal' },
        ],
    })
    
    
    const allUsers = await prisma.footballPlayers.findMany()
    console.log(allUsers)
}



 module.exports = {main}