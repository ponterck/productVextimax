// import { MongoClient } from 'mongodb';

// const uri = process.env.MONGODB_URI; 
// const dbName = 'Vestimax1';

// let cachedClient = null;

// // Función para conectarse a la base de datos MongoDB
// async function connectToDatabase() {
//   if (cachedClient) {
//     return cachedClient;
//   }

//   const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

//   await client.connect();
//   cachedClient = client;
//   return client;
// }

// // Controlador GET para obtener la colección
// export default async function handler(req, res) {
//   if (req.method !== 'GET') {
//     return res.status(405).json({ message: 'Método no permitido' });
//   }

//   try {
//     const client = await connectToDatabase();
//     const db = client.db(dbName);
//     const collection = db.collection('CAT_LeyesDeReforma');

//     // Realiza la consulta para obtener los productos
//     const productos = await collection.find({}).toArray();

//     return res.status(200).json({ productos });
//   } catch (error) {
//     return res.status(500).json({ message: 'Error al obtener los productos', error });
//   }
// }
