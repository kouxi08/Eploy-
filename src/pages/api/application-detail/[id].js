// pages/api/application-detail/[id].js

export default async function handler(req, res) {
    const { id } = req.query;
  
    if (req.method === 'GET') {
      try {
        // IDを使ってGoバックエンドにリクエストを送信
        const response = await fetch(`http://go:8088/application-detail/${id}`, {
          headers: {
            'Authorization': 'Bearer 1'
          }
        });
  
        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.statusText}`);
        }
  
        const data = await response.json();
        console.log(data);
        res.status(200).json(data);
      } catch (error) {
        console.error('Error fetching data from Go backend:', error);
        res.status(500).json({ message: 'Failed to fetch data from Go backend' });
      }
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }
  