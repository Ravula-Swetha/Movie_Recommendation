export default async function handler(params) {
    if(params.req !== 'POST'){
        return res.status('405').json({'error': "Only POST requests are allowed"});
    }

    const {mood} = params.req.body;

    const recomm =[
        { title: 'Inside Out', genre: 'Animation' },
        { title: 'The Pursuit of Happyness', genre: 'Drama' },
        { title: 'Soul', genre: 'Animated Philosophy' }
    ]
    
    res.status(200).json({mood, movies : recomm });
}