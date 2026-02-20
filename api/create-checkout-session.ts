import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-11-20.acacia',
});

export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
    return;
  }

  try {
    const { price, packageName, packageId } = req.body;

    if (!price || !packageName) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: packageName,
              description: `My Ken Concierge - ${packageName}`,
            },
            unit_amount: Math.round(price * 100),
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${req.headers.origin || 'https://my-ken-concierge-app.vercel.app'}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin || 'https://my-ken-concierge-app.vercel.app'}/packages`,
      metadata: {
        packageId: packageId || 'custom',
      },
    });

    res.status(200).json({ sessionId: session.id, url: session.url });
  } catch (err: any) {
    console.error('Stripe Error:', err);
    res.status(500).json({ error: err.message || 'Internal server error' });
  }
}