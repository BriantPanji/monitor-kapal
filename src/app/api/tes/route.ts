
export async function OPTIONS() {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    }
  });
}


export async function GET(request: Request) {
    const users = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' }
    ];
    return new Response(JSON.stringify(users), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
}

export async function POST(request: Request) {
    // Parse the request body
    try {

        const body = await request.json();
        const {
            accelX,
            accelY,
            accelZ,
            gyroX,
            gyroY,
            gyroZ,
            lat,
            lng,
            alt,
            timestamp,
        } = body;

        console.log('Received data:', {
            accelX,
            accelY,
            accelZ,
            gyroX,  
            gyroY,
            gyroZ,
            lat,
            lng,
            alt,
            timestamp,
        });

        return new Response(JSON.stringify({
            message: 'Data received successfully',
        }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error: any) {
        console.error('Error processing request:', error);
        return new Response(JSON.stringify({
            message: 'Error processing request',
            error: error.message,
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}