import { json } from 'astro:content';
import Stripe from 'stripe';
const stripe = new Stripe('YOUR_SECRET_KEY');

export async function POST({ request }) {
  const sig = request.headers.get('Stripe-Signature');
  const body = await request.text();

  let event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, 'YOUR_ENDPOINT_SECRET');
  } catch (err) {
    return json({ error: 'Webhook error: ' + err.message }, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;

    // Enregistre la commande ici
    const orderData = {
      items: session.line_items.map(item => ({
        productId: item.price.product,
        quantity: item.quantity,
        price: item.amount_total / 100,
      })),
      totalAmount: session.amount_total / 100,
      createdAt: new Date().toISOString(),
    };

    // Enregistre dans la collection d'ordres
    await saveOrder(orderData); // Implémente cette fonction
  }

  return json({ received: true });
}
